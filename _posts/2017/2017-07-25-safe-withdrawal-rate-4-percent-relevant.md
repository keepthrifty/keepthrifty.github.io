---
layout: post

author: chris_durheim


title: "Is the 4% Safe Withdrawal Rate Still Relevant?"
subtitle: "The Trinity Study Revisited and Expanded"
description: "Many financial freedomists plan with a 4% safe withdrawal rate for their retirement accounts, but this is largely based on a 20-year old study that missed out on some major factors. It's time for a revisit to see if the 4% rate is ready to go the way of the dinosaurs."

date: 2017-07-25 5:58:00 -0500

image:
  path: /assets/img/posts/2017-07-25-safe-withdrawal-rate-4-percent-relevant/safe-withdrawal.jpg
pinterest-image: /assets/img/posts/2017-07-25-safe-withdrawal-rate-4-percent-relevant/safe-withdrawal-rate

related-posts: [
  "/2017/05/30/rent-vs-buy-for-the-fi",
  "/2017/04/17/three-phases-money-feelings",
  "/2017/03/20/home-mortgage-interest-deduction",
  "/2017/01/30/introducing-retirement-freedom"
]

tags: [money]

---

One of the cornerstones of financial independence math is the _safe withdrawal rate_ (SWR). The SWR is the amount you can withdraw from your retirement accounts every year without fearing that you'll run out of money before you kick the bucket. If you've got financial freedom on your goals list, the safe withdrawal rate is something you'll probably want to understand! One of the most well-known papers on this was _The Trinity Study_, which gave guidance on how to establish a portfolio with a sustainable 4% SWR. You'll see this number used all over the place (including on this site), but looking at the study raised some questions for me about whether the 4% SWR is applicable for financial freedomists today.

There were a number of observations that led me to want to reassess whether the rate is valid.
- The original study analyzed data from 1926 through 1997, but now we've got an additional 20 years of data that could be factored in. In addition, Robert Shiller (economist at Yale) has put together data on the S&P 500 that goes all the way back to 1871 - we could use this as well.
- The original study left out the impact of expense ratios (the money you pay a fund manager to maintain the mutual fund or index fund)
- The original study only analyzed retirement timelines of 20, 25, and 30 years. These days, you'll hear about people reaching financial freedom in their 30's. With life expectancies in the high double-digits, these people need confidence in something longer than 30 years

Also, I've been curious about the impact of using different timing on withdrawals - either monthly or annually.

Not one to let a solvable problem sit, I put together a Ruby script ([here's the source code](https://github.com/chrisdurheim/investsim){: target="_blank"}) to analyze the data and regenerate the Trinity Study tables with these factors taken into account. You'll find the results below.

## Defining Safe Withdrawal Rate

Before we get started, it's good to get clarity on what the safe withdrawal rate really means.

A __withdrawal rate__ indicates how much of a portfolio's _initial value_ gets pulled out of a retirement account each year to fund ongoing expenses. In practical cases, this amount should be adjusted for inflation to ensure that cost of living increases are built-in.

As an example:

Let's say your retirement accounts are worth $1,000,000 when you retire. A 4% withdrawal rate would mean that you plan to pull out $40,000 in the first year. At 2% inflation, you'd pull out $40,800 the second year ($40,000 times 1.02), and so on.

A _safe_ withdrawal rate would indicate that the rate you choose is sustainable - that your account maintains a positive balance - through the end of your expected retirement period.

The beauty of the safe withdrawal rate is that it gives a quick guide to how much you need in your retirement account to be financially free. If the safe withdrawal rate is 4%, you'll achieve financial freedom once you have 25 times your expenses (25 = 1 / (4%)) stashed away.

If the stock market and inflation were steady, you could calculate a "permanent" SWR easily - it'd be the market return minus the inflation rate. As an example, a theoretical market return of 7.5% minus inflation of 2.5% would give an SWR of 5% that would last for _any_ retirement period - be it 10 years, 904 years (_did Methuselah retire at 65?_), or more.

Unfortunately, the stock market isn't so kind. A stretch of bad years early in retirement can cripple the sustainability of higher withdrawal rates. Thus, some smart guys back in the 90's decided to do a study to understand what a realistic SWR would be with the market's volatility built in.

## Brief Background on Trinity

[The Trinity Study](http://afcpe.org/assets/pdf/vol1014.pdf){: target="_blank"} examined the history of stock market and bond returns, assessing the _success rate_ of different scenarios. Success here is defined as an account that makes it all the way to the end of the timeline without running out of money.

In the study, the authors varied:

- Withdrawal rates between 3% and 12% (increments of 1%)
- Retirement periods of 20, 25, and 30 years
- Portfolio allocations of 100% stocks/0% bonds, 75%/25%, 50%/50%, 25%/75%, and 0% stocks/100% bonds
- Inflation-adjusted withdrawals vs non-inflation adjusted

Finally, the study split the analysis into two time periods: 1926 - 1997 and 1946 - 1997. These time periods allowed for the researchers to treat the post-world-war-II economy as different than that prior to the war.

Overall, the study concluded, for most portfolio allocations, a 4% withdrawal rate was "safe", as it had a 100% success rate for inflation-adjusted withdrawals for portfolios with 75% stocks or greater.

## Trinity Revisited and Expanded

I replicated the methodology used for the Trinity study but with the following changes:

- Historic market returns analyzed from January 1871 through June 2017 using [Robert Shiller's data](http://www.econ.yale.edu/~shiller/data.htm)
- Withdrawal rates between 2.5% and 6% (increments of 0.5%). This gives better resolution and filters out the withdrawal rates that are high risk.
- Retirement periods of 10, 20, 30, 40, 50, 60, and 70 years. This better covers the early retirees looking to live off their funds for longer periods of time.
- Expense ratios of 0.00%, 0.04% (the ratio for Vanguard's VTSAX fund), and 1.00%
- Monthly withdrawals vs annual withdrawals
- Portfolio allocations of 100% stocks/0% bonds only. I wasn't able to find a data set that covered monthly bond returns going back to 1871. _If anyone has this, please [contact me]({{site.url}}/work-with-me/#contact)!_.
- Inflation adjusted withdrawals only. Especially when looking at longer retirement periods, it's unrealistic to think that one can spend the same nominal dollar amount for the full retirement period.

## Results and Observations

_As with anything stock market related, it's important to remember that past performance is no guarantee of future performance. The crashes of 1929 and 2008 might be the worst we'll ever see. On the flip side, we could see an even bigger one in our lifetimes - we have no guarantees here._

Let's start with what I'd consider the "typical" case and look at the success rates are for different combinations of retirement periods and proposed withdrawal rates.

My assumptions for the typical case are as follows. I'll look at varying these later in the study.

- Expense ratio of 0.04%
- Monthly withdrawals

<div class="responsive__table__container">
<table>
<tr><th colspan="9">Monthly withdrawal; Expense ratio: 0.04%</th></tr>
<tr><th rowspan="2">Payout Period (years)</th><th colspan="8">Inflation-Adjusted Annual Withdrawal as % of Initial Value</th></tr>
<tr><th>2.5%</th><th>3.0%</th><th>3.5%</th><th>4.0%</th><th>4.5%</th><th>5.0%</th><th>5.5%</th><th>6.0%</th></tr>
<tr><th>10</th><td>100.0%</td><td>100.0%</td><td>100.0%</td><td>100.0%</td><td>100.0%</td><td>100.0%</td><td>100.0%</td><td>99.9%</td></tr>
<tr><th>20</th><td>100.0%</td><td>100.0%</td><td>100.0%</td><td>99.7%</td><td>98.9%</td><td>95.5%</td><td>89.9%</td><td>83.9%</td></tr>
<tr><th>30</th><td>100.0%</td><td>100.0%</td><td>99.7%</td><td>97.8%</td><td>92.6%</td><td>82.6%</td><td>75.6%</td><td>68.9%</td></tr>
<tr><th>40</th><td>100.0%</td><td>99.9%</td><td>99.6%</td><td>94.4%</td><td>84.0%</td><td>74.7%</td><td>66.0%</td><td>55.7%</td></tr>
<tr><th>50</th><td>100.0%</td><td>99.8%</td><td>99.1%</td><td>93.9%</td><td>83.7%</td><td>74.8%</td><td>63.3%</td><td>53.1%</td></tr>
<tr><th>60</th><td>100.0%</td><td>99.8%</td><td>98.9%</td><td>95.6%</td><td>86.6%</td><td>78.5%</td><td>65.5%</td><td>55.1%</td></tr>
<tr><th>70</th><td>100.0%</td><td>99.8%</td><td>98.8%</td><td>94.5%</td><td>84.8%</td><td>74.3%</td><td>62.1%</td><td>50.7%</td></tr>
</table>
</div>

Let's look at one scenario from the table as an example. At the intersection of the 50 year payout period and the 4% safe-withdrawal rate, you'll see 93.9% listed.

This means that if you retired with 50 years left of life and took an inflation adjusted 4% of your initial retirement account balance every year (split up into monthly payments), you'd have had at least a penny or more left in 93.9% of the time for the periods analyzed.

The periods analyzed included the 50-year period of January 1871 through December 1920, the period of July 1967 through June 2017, and every period between.

Got it? _Awesome_

Now, we can take a look at the impact of each of the variables on the safe withdrawal rate and some interesting observations about the methodology in general.

### Payout Period

In the original Trinity study, the authors only showed data for 20-year, 25-year, and 30-year retirement periods. I crunched the numbers for 10, 20, 30, 40, 50, 60, and 70 years. What you'll notice are a few major things:

__First: Limited data__ - while the probability of sustaining retirement at a given withdrawal rate should go _down_ as the retirement period gets longer, you'll notice a few cases where the probability comes _up_. This is because of limited data to analyze - as the time period shrinks, we are seeing the results of fewer samples. As a result, some of the shorter timelines account for market dips that the longer timelines don't.x

Looking at the tables, it seems 50 years contains enough data to have some valid conclusions. The data for 60 and 70 years is a bit suspect.

__Second: 4% is a pretty reliable rate, but may not be "safe"__ - as the timeline stretches out, the 4% rate starts to lose it's luster as success rates fall into the mid-90% range. While that's still a high percentage, we're talking about the possibility of running out of money when you're at your most vulnerable as an adult - late in life.

__Third: True safety comes at a high cost__ - the number that actually shows up as "safe" with a 100% stock allocation is 2.5%. To get to retirement would then require saving _40 times_ your expenses instead of the commonly-cited 25. That level of confidence is pretty expensive and would likely delay retirement for folks by many years.

### Effect of Expense Ratios

The expense ratio is the annual cost of keeping your money in a fund. As an example, if you have $100,000 in an account with an expense ratio of 1.00%, you'll pay $1,000 that year just for the pleasure of having your money in that account.

Consider the impact - a stock market return of 7.5% on that $100,000 would give you a $7,500 gain, but you have to give $1,000 to the fund manager. There are passive funds out there that have much lower fees - such as Vanguard's VTSAX fund at 0.04%. Instead of $1,000, you'd only have to pay $40 - _substantial_ savings.

The expense ratio isn't the only consideration in picking where to invest your money, but it's an important one.

When we look at the success rates for different expense ratios, this shows quickly.

The table with an expense ratio of 0.04% is above. Here are the tables for expense ratios of 0% and 1.00% respectively:

<div class="responsive__table__container">
<table>
<tr><th colspan="9">Monthly withdrawal; Expense ratio: 0.0%</th></tr>
<tr><th rowspan="2">Payout Period (years)</th><th colspan="8">Inflation-Adjusted Annual Withdrawal as % of Initial Value</th></tr>
<tr><th>2.5%</th><th>3.0%</th><th>3.5%</th><th>4.0%</th><th>4.5%</th><th>5.0%</th><th>5.5%</th><th>6.0%</th></tr>
<tr><th>10</th><td>100.0%</td><td>100.0%</td><td>100.0%</td><td>100.0%</td><td>100.0%</td><td>100.0%</td><td>100.0%</td><td>99.9%</td></tr>
<tr><th>20</th><td>100.0%</td><td>100.0%</td><td>100.0%</td><td>99.7%</td><td>98.9%</td><td>95.7%</td><td>90.1%</td><td>84.1%</td></tr>
<tr><th>30</th><td>100.0%</td><td>100.0%</td><td>99.7%</td><td>98.0%</td><td>92.8%</td><td>83.1%</td><td>76.1%</td><td>69.2%</td></tr>
<tr><th>40</th><td>100.0%</td><td>99.9%</td><td>99.7%</td><td>94.8%</td><td>84.8%</td><td>75.4%</td><td>66.8%</td><td>56.5%</td></tr>
<tr><th>50</th><td>100.0%</td><td>99.8%</td><td>99.2%</td><td>94.3%</td><td>84.1%</td><td>75.5%</td><td>64.4%</td><td>53.7%</td></tr>
<tr><th>60</th><td>100.0%</td><td>99.8%</td><td>98.9%</td><td>96.0%</td><td>87.1%</td><td>79.2%</td><td>66.8%</td><td>55.9%</td></tr>
<tr><th>70</th><td>100.0%</td><td>99.8%</td><td>98.8%</td><td>94.8%</td><td>84.9%</td><td>75.0%</td><td>62.9%</td><td>51.5%</td></tr>
</table>
</div>

<div class="responsive__table__container">
<table>
<tr><th colspan="9">Monthly withdrawal; Expense ratio: 1.0%</th></tr>
<tr><th rowspan="2">Payout Period (years)</th><th colspan="8">Inflation-Adjusted Annual Withdrawal as % of Initial Value</th></tr>
<tr><th>2.5%</th><th>3.0%</th><th>3.5%</th><th>4.0%</th><th>4.5%</th><th>5.0%</th><th>5.5%</th><th>6.0%</th></tr>
<tr><th>10</th><td>100.0%</td><td>100.0%</td><td>100.0%</td><td>100.0%</td><td>100.0%</td><td>100.0%</td><td>100.0%</td><td>99.9%</td></tr>
<tr><th>20</th><td>100.0%</td><td>100.0%</td><td>99.9%</td><td>99.4%</td><td>96.1%</td><td>90.7%</td><td>84.0%</td><td>77.7%</td></tr>
<tr><th>30</th><td>100.0%</td><td>99.9%</td><td>98.6%</td><td>93.1%</td><td>82.6%</td><td>74.6%</td><td>66.8%</td><td>58.3%</td></tr>
<tr><th>40</th><td>100.0%</td><td>99.7%</td><td>95.0%</td><td>83.0%</td><td>73.1%</td><td>61.1%</td><td>51.3%</td><td>40.7%</td></tr>
<tr><th>50</th><td>100.0%</td><td>99.6%</td><td>93.2%</td><td>82.0%</td><td>69.9%</td><td>55.9%</td><td>45.2%</td><td>38.0%</td></tr>
<tr><th>60</th><td>99.9%</td><td>99.0%</td><td>94.0%</td><td>84.9%</td><td>72.1%</td><td>57.8%</td><td>46.6%</td><td>40.0%</td></tr>
<tr><th>70</th><td>99.8%</td><td>98.8%</td><td>92.4%</td><td>81.7%</td><td>67.5%</td><td>52.8%</td><td>40.8%</td><td>34.8%</td></tr>
</table>
</div>

You'll notice that the expense ratio for VTSAX of 0.04% only makes a small impact on the likelihood of success when compared to an expense ratio of 0%.

An expense ratio of 1%, on the other hand, makes a huge impact - dropping the likelihood of success by more than 10% in some cases!

This is further validation that expense ratios are not only important in building up your retirement accounts, but in the effective safe withdrawal rate for retirement.

A high expense ratio makes it _harder_ to build up your retirement account and, by reducing your safe withdrawal rate, increases the amount of money you need to save.

### Effect of Annual vs Monthly Withdrawals

Taking a whole year's worth of expenses out of your retirement accounts in January may save you from the hassle of withdrawals, but you'll pay for it in the compounding interest you miss out on.

I'm including the original table (with monthly withdrawals) first so you have the two side-by-side for comparison.

<div class="responsive__table__container">
<table>
<tr><th colspan="9">Monthly withdrawal; Expense ratio: 0.04%</th></tr>
<tr><th rowspan="2">Payout Period (years)</th><th colspan="8">Inflation-Adjusted Annual Withdrawal as % of Initial Value</th></tr>
<tr><th>2.5%</th><th>3.0%</th><th>3.5%</th><th>4.0%</th><th>4.5%</th><th>5.0%</th><th>5.5%</th><th>6.0%</th></tr>
<tr><th>10</th><td>100.0%</td><td>100.0%</td><td>100.0%</td><td>100.0%</td><td>100.0%</td><td>100.0%</td><td>100.0%</td><td>99.9%</td></tr>
<tr><th>20</th><td>100.0%</td><td>100.0%</td><td>100.0%</td><td>99.7%</td><td>98.9%</td><td>95.5%</td><td>89.9%</td><td>83.9%</td></tr>
<tr><th>30</th><td>100.0%</td><td>100.0%</td><td>99.7%</td><td>97.8%</td><td>92.6%</td><td>82.6%</td><td>75.6%</td><td>68.9%</td></tr>
<tr><th>40</th><td>100.0%</td><td>99.9%</td><td>99.6%</td><td>94.4%</td><td>84.0%</td><td>74.7%</td><td>66.0%</td><td>55.7%</td></tr>
<tr><th>50</th><td>100.0%</td><td>99.8%</td><td>99.1%</td><td>93.9%</td><td>83.7%</td><td>74.8%</td><td>63.3%</td><td>53.1%</td></tr>
<tr><th>60</th><td>100.0%</td><td>99.8%</td><td>98.9%</td><td>95.6%</td><td>86.6%</td><td>78.5%</td><td>65.5%</td><td>55.1%</td></tr>
<tr><th>70</th><td>100.0%</td><td>99.8%</td><td>98.8%</td><td>94.5%</td><td>84.8%</td><td>74.3%</td><td>62.1%</td><td>50.7%</td></tr>
</table>
</div>

<div class="responsive__table__container">
<table>
<tr><th colspan="9">Annual withdrawal; Expense ratio: 0.04%</th></tr>
<tr><th rowspan="2">Payout Period (years)</th><th colspan="8">Inflation-Adjusted Annual Withdrawal as % of Initial Value</th></tr>
<tr><th>2.5%</th><th>3.0%</th><th>3.5%</th><th>4.0%</th><th>4.5%</th><th>5.0%</th><th>5.5%</th><th>6.0%</th></tr>
<tr><th>10</th><td>100.0%</td><td>100.0%</td><td>100.0%</td><td>100.0%</td><td>100.0%</td><td>100.0%</td><td>100.0%</td><td>99.9%</td></tr>
<tr><th>20</th><td>100.0%</td><td>100.0%</td><td>100.0%</td><td>99.8%</td><td>98.8%</td><td>94.7%</td><td>89.0%</td><td>82.8%</td></tr>
<tr><th>30</th><td>100.0%</td><td>100.0%</td><td>99.7%</td><td>97.4%</td><td>91.4%</td><td>81.6%</td><td>74.1%</td><td>67.5%</td></tr>
<tr><th>40</th><td>100.0%</td><td>99.9%</td><td>99.3%</td><td>93.9%</td><td>82.1%</td><td>73.3%</td><td>63.2%</td><td>53.3%</td></tr>
<tr><th>50</th><td>100.0%</td><td>99.9%</td><td>98.8%</td><td>93.0%</td><td>82.5%</td><td>72.9%</td><td>60.2%</td><td>49.8%</td></tr>
<tr><th>60</th><td>100.0%</td><td>99.8%</td><td>98.7%</td><td>94.7%</td><td>85.7%</td><td>75.7%</td><td>62.4%</td><td>51.4%</td></tr>
<tr><th>70</th><td>100.0%</td><td>99.8%</td><td>98.6%</td><td>93.4%</td><td>82.9%</td><td>71.4%</td><td>58.8%</td><td>45.9%</td></tr>
</table>
</div>

As the withdrawal rate increases, the impact of annual withdrawals becomes more apparent. In some cases, this can lower the chance of a sustainable portfolio by several percentage points.

## What About Positive Returns?

As a curiosity, I also ran the analysis to see the likelihood of having an account that, despite withdrawals and fees, actually ___grew___ over the time period - leaving an inheritance for your spouse or kids at least as big as the amount you started with.

Granted, after 70 years, that money isn't worth nearly as much due to inflation, but it's still interesting to see the result. Almost every withdrawal rate in the table had at least a 50% chance of a positive-return.

That's pretty good news for junior!

<div class="responsive__table__container">
<table>
<tr><th colspan="9">Likelihood of Portfolio Growth; Monthly withdrawal; Expense ratio: 0.04%</th></tr>
<tr><th rowspan="2">Payout Period (years)</th><th colspan="8">Inflation-Adjusted Annual Withdrawal as % of Initial Value</th></tr>
<tr><th>2.5%</th><th>3.0%</th><th>3.5%</th><th>4.0%</th><th>4.5%</th><th>5.0%</th><th>5.5%</th><th>6.0%</th></tr>
<tr><th>10</th><td>91.8%</td><td>88.2%</td><td>85.1%</td><td>81.2%</td><td>77.2%</td><td>72.9%</td><td>67.5%</td><td>61.9%</td></tr>
<tr><th>20</th><td>98.9%</td><td>98.4%</td><td>97.2%</td><td>92.5%</td><td>86.6%</td><td>80.1%</td><td>73.0%</td><td>66.4%</td></tr>
<tr><th>30</th><td>100.0%</td><td>99.9%</td><td>98.9%</td><td>91.9%</td><td>83.6%</td><td>76.4%</td><td>68.2%</td><td>58.8%</td></tr>
<tr><th>40</th><td>100.0%</td><td>99.8%</td><td>99.1%</td><td>91.2%</td><td>80.8%</td><td>71.6%</td><td>61.3%</td><td>51.0%</td></tr>
<tr><th>50</th><td>100.0%</td><td>99.8%</td><td>98.8%</td><td>92.9%</td><td>82.5%</td><td>73.3%</td><td>59.9%</td><td>49.4%</td></tr>
<tr><th>60</th><td>100.0%</td><td>99.8%</td><td>98.9%</td><td>95.3%</td><td>86.6%</td><td>77.4%</td><td>64.7%</td><td>53.9%</td></tr>
<tr><th>70</th><td>100.0%</td><td>99.8%</td><td>98.8%</td><td>94.2%</td><td>84.5%</td><td>74.0%</td><td>61.6%</td><td>50.1%</td></tr>
</table>
</div>

## Safe Withdrawal Rate for Financial Freedomists

So, what can we conclude from all of this? Is the 4% safe withdrawal rate still a good target if you're targeting financial freedom earlier than retirement age?

The 4% rate isn't quite as safe after looking at longer retirement timelines and the impact of expense ratios. Finding low-cost funds and following a strategy of monthly withdrawals helps, but there's a palpable likelihood of the 4% rate emptying out your account before an early retirement period is up.

Should we panic? _Nah_

Here's why:

A majority of the failed scenarios in the tables above were for people who would have _started_ retirement right around the stock market crashes of 1906, 1929, and 1968. When some other blogger runs the numbers 50 years down the road, I imagine the crash of 2008 will show up in that list as well.

Market crashes are pretty obvious when they happen and you're a lot smarter than the investor in my computer simulation. If there was a big market crash shortly after you entered retirement, I'd imagine you'd be more than capable of ramping down your spending for a couple years and potentially even getting a part-time job to earn a bit of income. These small moves could be enough to keep your retirement account healthy through the crash. Once you're on the other side, things are usually good.

There are no guarantees here - anything can happen in the future of the market, but you shouldn't discount your ability to adjust when figuring out what the right rate is for you.

For our family, I'm confident in our ability to adjust. Based on this, I think a 4% withdrawal rate is still reasonable and it's what I'll continue to use for planning for our retirement account needs.

## What Do You Think?

It was a fun revisiting the Trinity study and seeing the impact of new factors and more data. The original conclusions are still fairly sound and applicable even in our broader range of scenarios - especially once you build in human adaptability.

_What about you? What's your planned withdrawal rate? Any thoughts based on the tables above? What insights do you draw from these? Any scenarios you'd like to see run?_
