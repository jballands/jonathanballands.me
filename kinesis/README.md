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
	props: {
		...
	}
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
	<Resource {...entry.props} />
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

## Writing an Entry

TBD

## Technical Notes

