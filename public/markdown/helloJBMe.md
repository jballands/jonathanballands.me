![Shapes and colors the likes of which I've never seen...](https://media3.giphy.com/media/OQBZYsrOTPRjW/giphy.gif)

Oh hey. It's been a while since I've updated this thing. And I guess I have a blog now.

Believe it or not, this is the [third iteration](https://github.com/jballands/jonathanballands.me) of my website. I
started work on this version in April 2017, and it's taken me at least 8 months to get to the point of being able to
write a blog post for this thing.

Why? Because I chose *good* and *cheap* in the infamous triangle:

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

I like [React](https://reactjs.org/). In fact, this is the first non-work-releated app I've written in React. I've been writing
single-page web apps for years, mainly in [Angular 1.x](https://angular.io/), but I'm not sure I got as excited about Angular as
I have with React.

The reason for this is because React just *really* lends itself to writing extensible, sane code. I could gush for hours about how cool
tools like [Redux](https://redux.js.org/) and [Styled Components](https://www.styled-components.com) are. I'll probably write a blog post
about how component composition is way more readable and flexible than class inheritance. I think it's kind of cool that the React-concept
is gaining so much traction that Facebook developed a [VR version](https://facebook.github.io/react-vr/) of React... to make VR websites, 
I guess. Whatever, it's cool. 

If you get anything out of this, it's that React is neat, I really like it, and this version of my website is written in it. 🎉

### Apps Within Apps

### It's Pretty