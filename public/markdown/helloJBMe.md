![Shapes and colors the likes of which I've never seen...](https://media3.giphy.com/media/OQBZYsrOTPRjW/giphy.gif)

Oh hey. It's been a while since I've updated this thing. And I guess I have a blog now.

Believe it or not, this is the [third iteration](https://github.com/jballands/jonathanballands.me) of my website. I
started work on this version in April 2017, and I had to work on it somewhere between work, finding a house, social life, etc.


[Somehow, I did it.](https://medium.com/@bengbutler/sleep-success-social-life-can-you-really-only-pick-two-ac6bd7e63edf)

I'm going to brag a bit about how this version of my site was developed, as well as how I overcame a few challenges along
the way. I might have gone a _little_ crazy with it, but I found going through the entire design/development process
on a personal site provided a good, low-risk environment to practice.

I also found this was a good exercise at practicing what I call Rational Design Decisions™ (RDD). More on this soon.

# v3 is "Designed"

So, technically I designed v2 as well, but I feel as though I encountered a lot more obstacles in v3, and therefore
it warranted a lot more RDD to pull it off. Sometimes designing a good website involves more than just throwing 
[a bunch of gradients and using Helvetica everywhere](https://jonyiveredesignsthings.tumblr.com/).

## Problems

Let's take a look at the initial design for [Kinesis](/kinesis/what-is-kinesis):

![The original design for Kinesis.](https://i.imgur.com/iJMs9ap.png)

As you can see, it looks nothing like the final product. (If you didn't already know, this website you're looking at is
the final version.) Let's talk about what's wrong with this version:

Firstly, it looks quite ugly and unbalanced. Half the page is devoted to a small number of controls that you only care 
about 10% of the time. The content you care about (the post itself) occupies the other half.

On top of this, when you're concentrating on reading, the last thing you need is unnecessary distractions. The controls
on the left-side are a huge distraction, and make the primary content unnecessarily small.

Finally, the text is really hard to read, not because it's small or uses a weird font, but because it's
lighter text on a darker background. In general, [darker text on a lighter background is preferred](https://ux.stackexchange.com/questions/551/white-text-on-black-background) for reading. Text tends
to look thicker in darker colors than it does in lighter colors, not to mention that black on white
is how newspapers and books are printed.

Try reading the [Hipster Ipsum](https://hipsum.co/) in that image above; your eyes will probably start to hurt
after a few seconds.

There are a couple of things that this design did well, however:

First of all, the font choice carries over from v2, solidifying my personal brand. You'll also notice that the "in-your-face
color scheme" of v2 has come back as well:

![A screenshot of a project page in v2.](https://i.imgur.com/YJEnLEX.png)

Again, v2 suffers from the "light on dark" problem I discussed before, but the side-effect of this is that my website stands out
to people and is easy to recall.

> "Hey, do you remember that guy with the orange/teal website?"  
> "Yeah, didn't he have some iOS and web stuff on there?"

A personal website essentially serves one purpose: getting people to think you're a badass so that opportunities open in the future;
v2 does this very well.

Let's go over what needs to happen in the final design of Kinesis:

* Make better use of space
* Avoid "light-on-dark" color scheme
* Preserve brand identity
* Make myself easy to recall to others

## Solutions

One epiphany moment I distinctly remember when reworking the design of Kinesis was that Kinesis would be the centerpiece of my personal
website and everything else would be supplementary. I made this decision for a couple of reasons:

1. Updates to my website would be few and far between if I only updated it when I had completed a project.
2. In v2, it's a project in and of itself to create an entire page about a project in [Handlebars](http://handlebarsjs.com/) and 
[jQuery](https://jquery.com/).
3. [React is cool.](https://reactjs.org/) I should probably use the thing I use professionally on my personal site.
4. I don't need to write a gigantic homepage about myself; if you want to learn about me, just read my blog.
5. In terms of learning as much as you can about me, updating my blog every month is far superior to updating a project page once a year.

Taking these points into account, here's what I came up with:

![The Kinesis design I went with.](https://i.imgur.com/6bfYk4q.png)

Right off the bat, you'll notice that the color scheme is much "brighter" and the text is darker, solving the eye-strain problem I
talked about before. Unfortunately, black text on a white background isn't that memorable, nor does it evoke feelings of my brand
identity.

To solve this problem, I used bright colors as accent colors throughout the Kinesis UI. Each blog posts has its own accent color, which
is similar to how each project in v2 had its own color. It's enough to give each blog post its own personality, without blasting you
in the face with a rainbow explosion.



