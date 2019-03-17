# Kinesis 3.3

Beginning with jonathanballands.me 3.3, asyncronous loading of Kinesis entries
is dealt with via [React code-spliting](https://reactjs.org/docs/code-splitting.html)
versus the old saga-based loading logic. Due to this, working with Kinesis is a little
bit different than before:

## Configuration

`kinesis.config.js` is now located in the `~/kinesis` directory.

Starting in jb.me 3.3, the schema for posts is the following:

```
{
	name: <string>,
	date: <Date>,
	hashtags: [<KinesisHashtag>],
	resource: <string>,
	primaryColor: <string>,
	secondaryColor: <string>,
	props: { ... },
}
```

You may notice that `resource` can now only be a string, the color members are consolidated
underneath a new `kinesis` member, and the `type` member is gone.

> The `resource` member must resolve to a React component.

In jb.me 3.3, the core app is expecting a path in the `resource` member. This path must resolve
to a React component as the default export. Under the hood, jb.me 3.3 will call:

```js
const Resource = React.lazy(() => import(entry.resource));

...

<Suspense>
	<Resource primaryColor={primaryColor} secondaryColor={secondaryColor} {...entry.props} />
</Suspense>
```

This causes Webpack to split the resource into a chunk that can be loaded sepearately via
[lazy loading](https://reactjs.org/docs/code-splitting.html#reactlazy).

> Anything you put into `props` will be fed as a React prop into the component referenced
> by `resource`.

Since resources are all React components, jb.me 3.3 can be far less strict with what kinds of
props it feeds into the resource. Any members you insert into the `props` member will be fed
into your `resource` as a React prop.

> Since all entries are React components, the `type` member is no longer necessary.

The `type` member existed in order to tell the jb.me app what kind of resource it was expecting so
it could feed it into the correct pipeline (either into `<KinesisMarkdown />` or rendering using
`React.createElement`). Since all Kinesis entries are just React components, this check is no
longer necessary.

## API

Here's an outline of what a Kinesis entry looks like:

```JSX
import React, { Fragment } from 'react';
import Header from 'kinesis/Header';
import Markdown from 'kinesis/Markdown';
import md from './foobar.md';

const Foobar = ({ name, date, hashtags, primaryColor, secondaryColor }) => (
	<Fragment>
		<Header title={name} />
		<Markdown color={primaryColor} content={md} />
	</Fragment>
);

export default Foobar;
```

As you can see, Kinesis' only expectation is that a React component is returned from the `resource` member of `Post`.

You can expect at least 5 props to be passed to this component, all of which come directly from `Post`:

- `name`
- `date`
- `hashtags`
- `primaryColor`
- `secondaryColor`

Note that if `props` is defined, that member will be spread into your component as well.

### Post

```js
{
	name: <string>,
	date: <Date>,
	hashtags: [<KinesisHashtag>],
	resource: <string>,
	primaryColor: <string>,
	secondaryColor: <string>,
	props: { ... },
}
```

`name: <string>`  
A string representing the name of the Kinesis post.

`date: <Date>`  
A [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) object
representing the date the Kinesis post was published.

`hashtags: [<KinesisHashtag>]`  
An array of `KinesisHashtag`s. These are used in the search field to look for your post.

`resource: <string>`  
A path (understood by Webpack) that Kinesis will use to resolve your entry with `React.lazy`.

`primaryColor: <string>`  
A hex string representing the main color of your entry. Kinesis will use this to style the rest of the UI to
match your color. It's recommended you use this as an accent color in your post, or as the `color` prop
in any of Kinesis' helper components.

`secondaryColor: <string>`  
A hex string representing the secondary color of your entry. Kinesis will use this as a background color,
so it's not recommended you use this.

`props: <Object>`  
An object of additional props you'd like to pass into your component.

### KinesisHashtag

```js
<<id>>: {
	id: <string>,
	displayName: <string>,
}
```

Since hashtags exist in an object, you should key your hashtag by the `id`.

`id: <string>`  
A string used under-the-hood by Kinesis to help identify this hashtag. The only requirement is that it is unique to this hashtag.

`displayName: <string>`  
A string representing the way you want Kinesis to display this hashtag in the UI.  

### Header

Example usage:

```JSX
import Header from 'kinesis/Header';

<Header
	title="Foobar"
	date={new Date()}
	hashtags="#foo, #bar"
	color="#f00"
/>
```

### Markdown

Example usage:

```JSX
import Markdown from 'kinesis/Markdown';

<Markdown
	color="#F00"
	content="Hello world! This *is* _markdown_."
/>
```

