![Shapes and colors the likes of which I've never seen...](https://media3.giphy.com/media/OQBZYsrOTPRjW/giphy.gif)

Oh hey. It's been a while since I've updated this thing. And I guess I have a blog now.

Believe it or not, this is the [third iteration](https://github.com/jballands/jonathanballands.me) of my website. I
started work on this version in April 2017, and it's taken me at least 8 months to get to the point of being able to
write a blog post for this thing.

Why? Because I chose good and cheap in the infamous triangle:

![The infamous triangle.](https://i.imgur.com/CsQYXyq.png)

# How's It Cheap?

In the [previous version](https://github.com/jballands/jonathanballands.me.old) of my website, I thought it was a good idea
to write an entire Node server, from scratch, to host my website. I think this was due to the fact that I was writing
the [Swift Sandbox](https://developer.ibm.com/swift/2015/12/03/introducing-the-ibm-swift-sandbox/) at my old job at IBM, and that
thing ran on a Node server so I wanted to flex my Node muscles a bit.

This was a #DumbIdea™.

Sure, I could have written custom endpoints to do fancy things with the UI on the site. Of course I never did any of that,
and it cost me $7.99/month on Heroku just to keep it running with reasonable response time.

A personal website doesn't need fancy custom endpoints. It just needs to show pretty HTML pages shine me in a good light on a 
static web server. That's like, $1/month on S3. (And if math isn't your thing, thats about $7/month cheaper than the last version.)

This version *does* run on a static S3 bucket. But I still want to do fancy things, like a custom blog system with async page loading.
That leads me to the next question:

# How's It Good?

That's a pretty subjective statement, I'll admit, but I'll try my best to convey why I think this version is the best
version of my website to date.

### React Is Amazing

I like [React](https://reactjs.org/). In fact, this is the first non-work related app I've written in React. I've been writing
single-page web apps for years, mainly in [Angular 1.x](https://angular.io/), but I'm not sure I got as excited about Angular as
I have with React.

The reason for this is because React just *really* lends itself to writing extensible, sane code. I could gush for hours about how cool
tools like [Redux](https://redux.js.org/) and [Styled Components](https://www.styled-components.com) are. I'll probably write a blog post
about how component composition is way more readable and flexible than class inheritance. I think it's kind of cool that the React-concept
is gaining so much traction that Facebook developed a [VR version](https://facebook.github.io/react-vr/) of React... to make VR websites, 
I guess. Whatever, it's cool. 

If you get anything out of this, it's that React is neat, I really like it, and this version of my website is written in it. 🎉

### Apps Within An App

Most of this version of my website is the blog portion called Kinesis (it's what you're viewing right now). The main entry point for Kinesis
is a simple configuration file that contains an entry called `resource`. The `resource` can either be a path to a markdown file (which is then
simply rendered, like this post), or a function that returns an `import` statement:

```js
{
	resource: () => import('path/to/component'),
}
```

This syntax is known as a [dynamic import](https://webpack.js.org/guides/code-splitting/#dynamic-imports), and together with [Webpack](https://webpack.js.org/),
it allows me divide up my website's codebase into multiple Javascript bundles: the main bundle, Markdown, and individual bundles for other React
components that I want to show in Kinesis. This is beneficial because it allows me to:

1. Render arbitrary React components, or "mini apps", in Kinesis (so apps within an app).
2. Reduce load times by only loading these "mini apps" when they are requested.

This is very powerful. Now, if I want to write a rich data visualization app that teaches you how [cost disease](/kinesis/cost-disease-explained) works, I can 
using React and Javascript. Technically, I can write any web application and host it all using this new version of my site. And it all lives in Kinesis as a
post.

On the flip side, I can also write simple Markdown if I just want a basic blog post with things like... images... and words. Yes, I do have to power to write rich, complex applications in Kinesis, but if I just want to warble on about some crap I like, I can do that too.

Most of the time I'll do the latter.

### It's Pretty

So, the last version of my website was nice too, but it relied heavily on graphics. I know my way around Photoshop and Illustrator enough
to be dangerous, but I don't really want to be spending my time mocking up iPhones and iMacs everytime I want to make a new project page:

![The last version of the website relied heavily on graphics.](https://i.imgur.com/YJEnLEX.png)

The trick with this version was to make a website that's easy to extend and add more content to (particularly in Kinesis), and when that content is
added, it still looks alright given the overall theme. I did this a couple of ways:

Let's start with the Kinesis UI. Whether a post is a visualization or just a blog post, content is the main focus of Kinesis, so the main UI hides behind a drawer
until the user asks for it. This is a clever idea, until the user can't figure out how to find more posts. That's why  the drawer starts open, and collapses as you scroll.
The act of collapsing is animated, so the user knows exactly where the controls went when they disappear.

The second way is with type choice. I wound up using the same two typefaces I used in the previous version that have come to define me: [Raleway](https://fonts.google.com/specimen/Raleway), 
and [Roboto](https://fonts.google.com/specimen/Roboto). Every post on Kinesis will mainly use these two typefaces for branding and unity.

Finally, each post has a color that's associated with it. This helps give each post it's own identity. The entire Kinesis UI adapts to these colors, so while
each post has its own color and different forms of content, they still feel unified by an overarching UI that connects them all together.

---

I'm pretty stoked about what I'll be able to do with my blog. Yes, I could have used Wordpress or [Ghost](https://ghost.org/) or [Jekyll](https://github.com/jekyll/jekyll),
but then I wouldn't have had these cool experiences along the way, with code architecture and UI design and whatnot.

I also probably would have been done with this thing in mid-2017 if I didn't wrap my own solution. Oh well. ¯\\\_(ツ)_/¯