export const introMd = `
Ever wonder why in our high-tech, relatively progressive
world why the price of things like education and
healthcare are constantly getting more expensive? If we're
so advanced, it should cost less to get the care you
would receive 10 years ago, right?

The cost of college tuition has increased more than 7 times in the
past 27 years, while the cost of healthcare has
increased more than 5 times. Meanwhile, the cost of
goods like clothing and furniture has pretty much stayed
the same, and in recent years been getting cheaper.
`;

export const baumolMd = `
Back in the 1960s, an economist named
[William Baumol](https://en.wikipedia.org/wiki/William_Baumol)
noticed this phenomenon in the arts, in particular
musicians. To play a quartet in the 1960s requires the
same amount of *productivity* as it did in the
1800s, yet musicians were earning a lot more in the 60s
than in the 1800s.

Welcome to [Baumol's Cost Disease](https://en.wikipedia.org/wiki/Baumol%27s_cost_disease)
It's an economic theory that potentially explains why the cost of services, like education,
has skyrocketed proportionally to goods, like clothing. But to understand how this theory
could make sense, we need to understand some basic concepts in economics.
`;

export const productivityMd = `
# Productivity, Economically Speaking

In economics, [productivity](http://www.investopedia.com/terms/p/productivity.asp)
is the relationship between how much *input* we
need to make some amount of *output*. Generally
speaking, more productivity is seen as a good thing
because it increases everyone's living standards by
being able to pay people more money.

> Productivity is the ratio of inputs (the amount of
> something we need) to outputs (the amount of
> something we produce).

An *input* is anything that is required in order to
start production on an *output*. For example,
inputs for manufacturing cars include raw materials (to
actually make the cars), workers to put the raw
materials together, and assets (like tools and robots)
to help the workers build the cars.

Generally speaking, input usually requires
[captial](https://www.investopedia.com/terms/c/capital.asp)
to attain, while output is simply the product of input.
And the amount of input required to make some amount of
output is called productivity.

## A Simple Look at Productivity

Below is a program that visualizes the input/output
ratio as productivity. Play around with the sliders and
take a mental note of what happens to productivity as
you do.
`;

export const realisticExampleMd = `
As you play around with the visualization and notice the
productivity bar bouncing up and down, consider this:
what exactly do you have to do in order to maximize
productivity?

The simple answer is that you have to decrease the
amount of input you need while also increasing the
amount of output you produce. You have make more with
less; it almost looks as if you need to be able to make
more product out of thin air!This sounds impossible,
until you consider the role *technology* plays in
producing goods and services.

If you only consider input to be the indicator of how
much output you can make, that means the only possible
way for you to make more stuff would be to buy more raw
materials, hire more workers, or acquire more assets.

However: if we had another "lever" for you to pull, a
technology lever, then not only can you increase output
by having more input, but you can also increase output
by having better technology.

And having better technology corresponds to an increase
in productivity.

> If there were only inputs and outputs, you could
> only increase output with more raw materials,
> workers, etc. But if you're able to have better
> technology, you can make more output without
> increasing input.

## A More Realistic Example

It's all well and good to talk abstractly about productivity,
but sometimes a more concrete example can help solidify the
forces at play.

The following program allows you to control the amount of
*input* and *productivity* in a factory that produces *output*
for a certain *price*. Now imagine you're the owner of this
factory. You want to earn as much money as possible. This is
represented by the [revenue](https://www.investopedia.com/terms/r/revenue.asp).

One way to make more money is to increase the price of the widgets
you're making. However, due to the laws of [supply and demand](https://www.investopedia.com/university/economics/economics3.asp)
this isn't really the best idea, so you need to find another way to
increase revenue without increasing the price.

Really, you can do one of two things:

* Increase the amount of input
* Increase the amount of productivity

Play with the program below to see which slider increases
revenue *more quickly*: increasing revenue, or increase productivity?
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
