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

(If you want to skip the productivity discussion, just click [here](#productivity-and-cost-disease)).
`;

export const productivityMd = `
# Productivity, Economically Speaking

In economics, [productivity](http://www.investopedia.com/terms/p/productivity.asp)
is the relationship between how much **input** we
need to make some amount of **output**. Generally
speaking, more productivity is seen as [a good thing](https://en.wikipedia.org/wiki/Productivity#Benefits_of_productivity_growth).

> Productivity is the ratio of outputs (the amount of
> something we produce) to inputs (the amount of
> something we need).

Input usually requires [captial](https://www.investopedia.com/terms/c/capital.asp)
to attain, while output is simply the product of input. The amount of input
required to make some amount of output is called **productivity**.

## A Simple Look at Productivity

Below is a visualization that shows productivity as a function of
input and output. Play around with the sliders and
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
but sometimes a more concrete example can help solidify concepts.

The following visualization allows you to control the amount of
**input** and **productivity** in a factory that produces **output**
for a certain price. Now imagine you're the owner of this
factory. You want to earn as much money as possible. This is
represented as [revenue](https://www.investopedia.com/terms/r/revenue.asp).

One way to make more money is to increase the price of the widgets
you're making. However, due to the laws of [supply and demand](https://www.investopedia.com/university/economics/economics3.asp),
this isn't really the best idea, so you need to find another way to
increase revenue without increasing the price.

You can either:

* Increase the amount of input
* Increase the amount of productivity

Play with the visualization to see which slider increases
revenue more quickly: increasing revenue, or increasing productivity?
`;

export const realisticExampleTheoryMd = `
You probably found that increasing productivity increases revenue at a
**faster rate** than increasing input. Why? Because more input **costs money over time**,
while productivity requires an upfront cost, but nothing more.

> Increasing productivity is a cost effective way of increasing revenue (in
> most situtations).

In the visualization, we assume that acquiring more productivty
doesn't cost anything. This wouldn't be true if more productivity was
acquired by hiring more workers, for example, since workers require
increased payroll.
`;

export const paradoxSallyMd = `
# Productivity and Cost Disease

Let's imagine a situation in which we have two workers: Sally and Barbra.
Sally and Barbra graduated from the same university with four-year degrees.
The difference is Sally decided to work at the local car factory manufacturing
luxury SUVs, while Barbra followed her dream of becoming a performer at the
local theater. When Sally and Barbra started working out of college, they earned 
the same amount.

As time moved on and computers got faster and smaller, a new technological innovation
became available that changed the car manufacturing industry forever: robots.
Cars can be manufactured faster while also increasing precision and accuracy, resulting
in less faulty units that waste time and money.

As a result, Sally's **productivity** increased. Robots made her job easier,
so she was able to produce more cars more effectively. Because of this, her employer made
more money, which resulted in higher pay (or cheaper cars), which thereby give people like
Sally more [spending power](https://www.investopedia.com/terms/p/purchasingpower.asp).
`;

export const paradoxBarbraMd = `
(As a side node, you can argue whether or not 
[trickle-down economics](https://en.wikipedia.org/wiki/Trickle-down_economics) is real.
However, one cannot argue that productivity has increased since 1980 in many sectors. In general,
the amount of revenue a company generates is directly proportional to the amount of productivity 
a company generates over time. Where that money goes is debatable, but [increased revenue is real](#selling-widgets).)

Barbra, on the other hand, has had no opportunity for her productivity to increase. She produces the same amount
of output now as she did before. In other words, it takes the same amount of time and effort to produce a stage show
now as it did at any time before and in the foreseeable future. Barbra sees her friend Sally making more
than her, and considers if being a performer is really all that worth it and thinks about changing jobs.

Of course, we still have musicians and stage performers and similar professions today. How come? Regardless of
whether you believe art is essential to society, business owners in these fields want to remain open
for business. In order to do so, and to prevent their employees from switching to jobs that are expereincing
real productivity gains, they must increase the amount of money they pay their workers, even if nothing has
changed.
`;

export const paradoxExplanationMd = `
Sectors that have to do this, sectors that experience little to no productivity increases over time, 
are known as **low-productivity sectors**.

> In order to prevent their workers from leaving, business owners in low productivity sectors, like
> the arts or medicine, must increase their employees' salaries, even if nothing has changed to
> warrant it. The results in highers prices in the sector.
`;

//
//	Point #1:
//	Since the cost of high-productivity sectors is decreasing, people shift their spending
//	focus to low-productivity sectors... things that aren't getting any cheaper.
//	[Show how more people are focusing on service sectors, decreasing innovation]
//	[Service sectors -> future]
//	[More innovation -> less productivity]
//
//	Point #2:
//
//

// People need to work in order to make an income. Since computers are a hot topic right now, most
// productivity gains we've seen in high-productivity industries are in the form of robots and algorithms.
// Unfortunately, this doesn't leave too much room for humans.

// In order to make an income, people
// have to work in a sector which is hard to automate. Sectors that are hard to automate are typically low-productivity
// sectors, the sectors where the value of the output is dependent on a human interaction. These are (you guessed it)
// service sector jobs.
export const implicationsMd = `
# The Great American Paradox

In this post I've shown that, theoretically, innovation in technology leads to higher productivity
gains, which results in higher incomes and lower prices for consumers. I say theoretically because
while this makes sense on paper, this isn't what occurs in practice. My reasoning is this theory doesn't
take into account a job type where the intrinsic value of a thing it produces is *because*
it is low productivity: **service sector** jobs... let me explain.

As high productivity sectors inovate, they are able to make things cheaper and cheaper over time. For example,
a big flat-screen television today costs less than it did in the early 2000s. Since flat-screen
televisions are cheap today, everyone has one for the most part. It's not necessarily something we
aspire to own anymore, so we aspire to things that aren't getting cheaper.

What's a type of product that probably won't get much cheaper in the near future? Eating out, custom textiles,
vacations, concerts, art, even education and healthcare. As a result, we spend a lot more of our money in these areas
and we need to employ a lot more people there to keep up with the demand. Manufacturing televisions, cars, and clothing?
Not so much.
`;

export const costDiseaseAndLowProductivityMd = `
You may be wondering what this has to do with the price increase in service sector products.
Again, these low-productivity sectors aren't getting cheaper any time soon. They are hard to automate because automating
anything here would lower any intrisic value.

For example, an education from an online school is
considered "less valuable" than an education from a community college, and an education from a community college is
considered "less valuable" than an education from a four-year university. The online education is more accessible, but instead of
increasing the number of positions available to a candidate, it's somehow seen as the worse version of a traditional university
education.

As we put more value into labor intensive (low productivity) services, we see the price increase more over time. The paradox here
is that it appears as though **the more we innovate, the less productive we get**. This isn't necessarily the case.

A better way to think about this would be that some products are seen as better than others because they are "handcrafted", "artesian",
"craft", "intimate", or any buzzword that gets thrown around to mean that it isn't mass produced. Therefore, as high productivity
sectors produce cheaper products and more money comes back into the economy, labor intensive products will only get more expensive, because
there are usually only a limited number of these products available. It's simple supply and demand.

This applies to handmade wallets and craft beers from a microbrewery, and it also applies to education and healthcare.

----

No one wants to pay more for healthcare or education. After all, it has been shown that not attending college today can result
in [poor life outcomes](http://www.pewsocialtrends.org/2014/02/11/the-rising-cost-of-not-going-to-college/).

One way to solve the productivity paradox for education and healthcare is to shift the way we think about how those
services are provided. We can either restrict how education and healthcare are administered and keep it a sort of luxury,
or we can allow these areas to become more productive and not be scared that we are receiving a "lesser service".

Or we can just accept that services are the future of our society. Perhaps services like education, law, healthcare, etc. require a human touch
to make them worthwhile. Some would argue that while a robot could, for example, explain how a kind of cancer is infecting your body and what
treatments are available, the human element of a doctor sympathizing with their patient and helping through the process is necessary to
good healthcare.

Perhaps humans are more adept at providing services that require exclisivity, while robots are more adept at providing things
that can be mass produced. Perhaps this whole cost disease thing will fix itself after the [education bubble](https://en.wikipedia.org/wiki/Higher_education_bubble_in_the_United_States)
pops. One thing is for certain, though: the cost of things like healthcare and education have risen over the past
50 years or so, and it looks as if that trend will continue for a while, and we have William Baumol to thank for his explaination 
on why this could be our future for years to come.
`;

// --------------------------------------------------------------------

export const cpiVizExplanationMd = `
The [Consumer Price Index](https://en.wikipedia.org/wiki/Consumer_price_index),
or CPI, is a number that represents the relative price of a good or service at
a point in time.

For example, suppose the price of lemonade in 1980 was $1. Let's
arbitrarily set the CPI of lemonade in 1980 to 100. In 2017, the
price of lemonade is $2. So, the CPI of lemonade in 2017 is 200,
since it costs 2x more to buy lemonade in 2017 than it did in 1980.
`;

export const revenueExplanationMd = `
This visualization represents the supply chain of a company that
makes [widgets](https://en.wikipedia.org/wiki/Widget).

You've negotiatied a deal with the manufactuer of raw materials
for widgets where the price of raw materials is $200/unit. This
cannot be changed. You've also done some market research and
found that nobody will buy widgets that cost $100 or more.

Try fixing the productivity slider at a position and only manipulating
the input slider, then do the same but fix the input slider and only
change the productivity slider. Which has a greater affect on revenue?
`;

export const newCarCpiVizExplanationMd = `
Notice how the graph is relatively flat. This indicates that the relative
price of new cars over the past 40 years hasn't changed that much. While cars
are more sophisicated and complex than ever before, robots and bleeding-edge
manufacturing processes have helped keep the cost down.

In other words, productivity gains in the automotive industry have helped
car manufacturers pay their employees well as well as keep the relative
cost of automobiles from rising so people can continue to afford them.
`;

export const recreationCpiVizExplanationMd = `
Low-productivity recreational services (including admission to performances) cost
around 1.65 times as much in 2017 as they did in 1998.

Employees require higher pay in order to make a living in a sector. Sectors that
fail to keep up with payroll requirements risk losing employees. Since recreational
services do not benefit from productivity growth like other sectors
of the economy, the only way to pay employees more is to increase the price of
these services.
`;
