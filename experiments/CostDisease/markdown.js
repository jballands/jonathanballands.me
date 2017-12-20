export const introMd = `
Ever wonder why in our relatively progressive, technological
world why the price of things like education and
healthcare are constantly getting more expensive? If we're
so advanced, shouldn't we have figured out better ways to
teach or take care of people by now?

The cost of college tuition has increased more than 7 times in the
past 27 years, while the cost of healthcare has
increased more than 5 times. Meanwhile, the cost of
goods like clothing and furniture has pretty much stayed
the same, and in recent years been getting cheaper.
`;

export const baumolMd = `
Back in the 1960s, an economist named
[William Baumol](https://en.wikipedia.org/wiki/William_Baumol)
noticed this phenomenon in the arts, in particular with
musicians. To play a quartet in the 1960s requires the
same amount of productivity as it did in the
1800s, yet musicians are earning a lot more now than back then.

Welcome to [Baumol's Cost Disease](https://en.wikipedia.org/wiki/Baumol%27s_cost_disease).
It's an economic theory that partially explains why the cost of labor-intensive services,
like education, has skyrocketed compared to goods, like clothing.

Before we get to the meat of this, we need to understand a few things about
an economic concept known as **productivity**.

(If you want to skip the productivity lecture, just click [here](#the-productivity-paradox)).
`;

export const productivityMd = `
# Productivity, Economically Speaking

In economics, [productivity](http://www.investopedia.com/terms/p/productivity.asp)
is the relationship between how much **input** we
need to make some amount of **output**. Generally
speaking, more productivity is seen as a good thing.
We'll learn why that is later.

> Productivity is the ratio of outputs (the amount of
> something we produce) to inputs (the amount of
> something we need).

Input usually requires [captial](https://www.investopedia.com/terms/c/capital.asp)
to attain, while output is simply the product of input. Basically, the amount of input
required to make some amount of output is productivity.

## A Simple Look at Productivity

Below is a visualization that shows the input/output
ratio as productivity. Play around with the sliders and
take a mental note of what happens to productivity as
you do.
`;

export const realisticExampleMd = `
What you should find out is that productivity is **maximized** when
you put in the minimum amount of input and get the maximum amount
of output. Effectively, to be the most productive, you need to
increase your output while simultaneously decreasing input.

How on Earth are you supposed to do that?

## Technological Advancements

With advancements in technology, of course! For example, a car manufacturer
might figure out a way to use less metal to form car parts. This means you
can produce more car parts (output) with the same amount of metal (input)
you had before. You just increased your productivity!

Productivity increases aren't always as direct as this. Another example is
teaching and [Scantrons](https://en.wikipedia.org/wiki/Scantron_Corporation).
After administering a test, teachers traditionally had to grade each exam, by hand,
which was prone to error and took a significant amount of time. However, with
Scantrons, teachers can decrease the amount of time they spend (input) while
increasing the amount of graded tests they produced (output). Scantons helped
increase teacher productivity.

## A More Realistic Example

It's all well and good to talk abstractly about productivity,
but sometimes a more concrete example can help solidify the
forces at play.

The following visualization allows you to control the amount of
**input** and **productivity** in a factory that produces **output**
for a certain price. Now imagine you're the owner of this
factory. You want to earn as much money as possible. This is
represented by the [revenue](https://www.investopedia.com/terms/r/revenue.asp).

One way to make more money is to increase the price of the widgets
you're making. However, due to the laws of [supply and demand](https://www.investopedia.com/university/economics/economics3.asp),
this isn't really the best idea, so you need to find another way to
increase revenue without increasing the price.

Really, you can only do one of two things:

* Increase the amount of input
* Increase the amount of productivity

Play with the visualization to see which slider increases
revenue more quickly: increasing revenue, or increasing productivity?
`;

export const realisticExampleTheoryMd = `
You probably found that increasing productivity increases revenue at a
**faster rate** that increasing input. Why? Because input costs money over time,
while productivity doesn't cost anything over time, depending on how you
acquired it.

In the visualization, we assume that acquiring more productivty
doesn't cost anything. This wouldn't be true if more productivity was
acquired by hiring more workers, for example, since workers require
increased payroll.
`;

export const paradoxMd = `
# The Productivity Paradox
`;

// --------------------------------------------------------------------

export const cpiVizExplainationMd = `
The [Consumer Price Index](https://en.wikipedia.org/wiki/Consumer_price_index),
or CPI, is a number that represents the relative price of a good or service at
a point in time.

For example, suppose the price of lemonade in 1980 was $1. Let's
arbitrarily set the CPI of lemonade in 1980 to 100. In 2017, the
price of lemonade is $2. So, the CPI of lemonade in 2017 is 200,
since it costs 2x more to buy lemonade in 2017 than it did in 1980.
`;

export const revenueExplainationMd = `
This visualization represents the supply chain of a company that
makes [widgets](https://en.wikipedia.org/wiki/Widget).

You've negotiatied a deal with the manufactuer of raw materials
for widgets where the price of raw materials is $200/unit. This
cannot be changed. You've also done some market research and
found that nobody will buy widgets that cost $100 or more.

Play with the input and productivty sliders, and determine which
slider has a greater affect on output (and therefore revenue).
`;
