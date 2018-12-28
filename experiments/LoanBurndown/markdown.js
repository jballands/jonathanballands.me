export const privacyMd = `This app doesn't track or save any data about you or your loans. Don't believe me? [See the code.](https://github.com/jballands/jonathanballands.me/tree/master/experiments/LoanBurndown)`;

export const explanationMd = `
----

# How to Use This Tool

First, pick a CSV file with your loan information. You can usually download these from your bank's website.
Your CSV must have at least:

* One column containing all dates (payment dates)
* One column containing all numbers (loan balance)

If you want to estimate when your loan will finish, your numbers column must be descending over time.

Sometimes you may have more than one column that satifies either one of these criteria. If this happens,
the visualization will prompt you to pick a date and/or balance column; simply pick the ones that make
the most sense. If a column outputs bad data, simply choose another one. If you choose correctly, you
should see a line graph that looks a bit like this:

![](/assets/experiments/loan-burndown/loan_burndown_example.jpg)

# Why I Made This

I wrote this tool to help me visualize my car loan and when I can expect to pay to it off. I also
wanted to get some more experience in React, D3, and [react-motion](https://github.com/chenglou/react-motion).
I also learned some snazzy stuff regarding loading [sagas](https://github.com/redux-saga/redux-saga) and reducers
asyncronously. I'll probably write an article on that later on.

# How to Project When a Loan Will Finish

While there isn't that much UI to this application (4 controls and a graph), there is a lot of machinery
working behind the scenes.

After deciding which columns you can choose (only columns containing all numbers or all dates are possible),
I have to calculate the average slope of the graph so I can project when the loan will finish. Unfortunately,
a lot of loan data contains a start value of 0, followed shortly by a charge of the amount of the loan. This
really messes with the average slope calculation.

If you think about it, when you want to estimate when a loan will finish, you want to estimate it assuming
you are making loan payments at or around the median. In other words, most of our loan payments should be
clustered around the same number with only a few outliers. Therefore, we can use [standard deviation](https://en.wikipedia.org/wiki/Standard_deviation)
to determine [outliers](https://en.wikipedia.org/wiki/Outlier) and eliminate them. The result is a
normalized set of loan payments that we can calculate the average slope on and determine when the
loan may finish.

For example, this app assumes that a value more than two standard deviations away from the mean is statistically
signifcant and can be eliminated. This only works because the mean should still be somewhat close to each payment,
and so most payments won't be more that two standard deviations away from the mean. This strategy would fall
apart if payments are not [normally distributed](https://en.wikipedia.org/wiki/Normal_distribution).`;
