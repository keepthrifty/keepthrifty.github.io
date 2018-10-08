---
layout: post

author: chris_durheim

title: "Will I Ever Be Able to Retire?"
description: "TK"

date: 2018-10-09 6:58:00 -0500

image:
  path: /assets/img/posts/2018-10-09-will-i-ever-be-able-to-retire/will-i-ever-be-able-to-retire.jpg

categories: [article]

---

The FI (Financial Independence) community is a special bunch. Those of use that have delved into the space strive for enough passive investment income to give us ownership over our time. Once you have enough money to cover your annual expenses, work becomes optional - allowing you to choose the work you do without money as a concern. For many, this dream involves "retiring early" - with some getting there exceptionally early - even in their thirties (see cases [one](https://millennialmoney.com/grant-sabatier/){: target="_blank"}, [two](https://www.mrmoneymustache.com/2011/04/06/meet-mr-money-mustache/){: target="_blank"}, and [three](https://www.madfientist.com/time-has-finally-come/){: target="_blank"}).

And while early retirement is a worthwhile goal, most Americans are far from it. How far? Let's take a look.

## The Stats

After all, here's what the state of retirement savings looks like for people in the US:

| Age (decade) | Median Retirement Savings |
|--------------|---------------------------|
| 20's         | $16,000                   |
| 30's         | $45,000                   |
| 40's         | $63,000                   |
| 50's         | $117,000                  |
| 60's         | $172,000                  |

<div class="caption">Source: <a href="https://www.transamericacenter.org/docs/default-source/resources/center-research/16th-annual/tcrs2015_sr_retirement_throughout_the_ages.pdf" target="_blank">TransAmerica Center for Retirement Studies</a></div>

Is that enough? Most people think they'll need $1,000,000 to retire comfortably. If that's the case, I _highly doubt_ that having $172,000 at age 60 puts someone on-track to comfortably retire with $1,000,000 at age 65.

> {% include tweet-link.html tweet-text="For the majority of Americans, the concern isn't retiring early. Their concern is __retiring ever.__<br />" %}

So how do you know if you'll _ever_ be able to retire?

## Will I Ever Be Able to Retire?

For the purpose of this exercise, we're going to take that question very literally. We're not looking at a lavish retirement with vacations here, folks. We're looking at "getting by" without working. The following sections will help you work through that scenario to get the answer to whether or not you'll ever be able to retire.

### How Much Will I Spend In Retirement?

The first thing we need to understand is what your annual expenses will look like. In the interest of "getting by", I recommend using the [MIT living wage calculator](http://livingwage.mit.edu/){: target="_blank"} to estimate your annual expenses. Navigate there and find your location (either enter your zip code or navigate to your state and select your county).

Scroll down to the "Typical Expenses" section and find the row labeled "Required annual income before taxes" at the bottom of the table.

We'll assume you aren't taking care of children in retirement, so the only question is whether or not your retirement funds are for you alone or if there's a spouse in the picture.

If you're single, find the number under "1 Adult". If you're married, find the number under "2 Adults".

Enter that number here:

<div class="inline-calculator-item">
  <label class="inline-calculator-item__label" id="annual-expenses-label">Annual Expenses</label>
  <div class="inline-calculator-item__input inline-calculator-item__input--prefixed">
    <i class="prefix">$</i>
    <input type="number" id="annual-expenses" value="37734" />
  </div>
</div>

### How Much Do I Need Saved to Retire?

For the sake of simplicity, we'll use [the 4% rule](https://www.madfientist.com/safe-withdrawal-rate/) to estimate how much money you need to retire. With this rule, you need to save up 25 times your annual expenses in order to retire.

Based on the annual expenses you entered earlier, here's what you'd need saved up to retire today:

<div class="inline-calculator-item">
  <label class="inline-calculator-item__label" id="retirement-target-label">Retirement Target</label>
  <div class="inline-calculator-item__input inline-calculator-item__input--prefixed">
    <i class="prefix">$</i>
    <input type="number" id="retirement-target" disabled value="934350" />
  </div>
</div>

But unfortunately that doesn't tell us how much you'll need saved in the future. You know how the cost of milk (and everything else) goes up a bit every year? That's what we call [inflation](https://www.thebalance.com/u-s-inflation-rate-history-by-year-and-forecast-3306093){: target="_blank"}. With everything costing more next year than this year, you'll need __more__ saved by next year to retire than you would have needed to retire today.

We'll assume inflation is 2.5% every year. If something cost you $10.00 to buy this year, you could expect that inflation to bring the price up to $10.25 by next year.

Here's what inflation would do to your retirement target for next year:

<div class="inline-calculator-item">
  <label class="inline-calculator-item__label" id="retirement-target-n1-label">Next Year's Retirement Target</label>
  <div class="inline-calculator-item__input inline-calculator-item__input--prefixed">
    <i class="prefix">$</i>
    <input type="number" id="retirement-target-n1" disabled value="957709" />
  </div>
</div>

Bummer, right? The good news is you can work to "beat" inflation by investing your retirement savings instead of stuffing it under a mattress.

With that in mind, lets take a look at savings and investments.

### When Will I Have Enough Saved to Retire?

Do you have anything saved for retirement already? Maybe you've put some money in a 401k (or 403b) or an IRA. If so, that's great; Enter the amount you've got here:

<div class="inline-calculator-item">
  <label class="inline-calculator-item__label" id="current-retirement-savings-label">Current Retirement Savings</label>
  <div class="inline-calculator-item__input inline-calculator-item__input--prefixed">
    <i class="prefix">$</i>
    <input type="number" id="current-retirement-savings" value="45000" />
  </div>
</div>

With any money set aside, you're already on the way to retire at some point; it might just be "too far" down the road to be meaningful. After all, if your nest egg won't get big enough to retire until you're 120, that's not going to do much good for you, is it?

If you don't have anything set aside for retirement, don't fret. Keep reading and we'll handle that situation later.

For your retirement, let's presume you choose to *invest* your money instead of just putting it under a mattress (or in a low-yield savings account), you can get a return that not only beats inflation, but actually grows beyond that. I won't get into the details on *why* to invest in index funds, but let's say you do and can get an average annual return of 8%.

Even without putting any more money in that account, it's going to grow - beating inflation and then some.

In fact, that investment would eventually grow to the point of hitting your retirement number, even if you didn't contribute another penny. This concept in personal finance is called "coasting" or, as I like to call it, [retirement freedom]({% post_url 2017/2017-01-30-introducing-retirement-freedom %})

<div class="inline-calculator-item">
  <label class="inline-calculator-item__label" id="years-to-retirement-label">Coast Years to Retirement</label>
  <div class="inline-calculator-item__input">
    <input type="number" id="years-to-retirement" disabled value="59" />
  </div>
</div>

It's a cool concept, but what age does that put you at when you get to retire?

### Will I Get To My Retirement Target While I'm Still Alive?

Put in your current age here and see what that means for your retirement prospects:

<div class="inline-calculator-item">
  <label class="inline-calculator-item__label" id="current-age-label">Current Age</label>
  <div class="inline-calculator-item__input">
    <input type="number" id="current-age" value="35" />
  </div>
</div>

Based on what you've entered so far, your investments would build up for you to retire when you are:

<div class="inline-calculator-item">
  <label class="inline-calculator-item__label" id="coast-retirement-age-label">Coast Retirement Age</label>
  <div class="inline-calculator-item__input">
    <input type="number" id="coast-retirement-age" disabled value="94" />
  </div>
</div>

So now, the million dollar question - are you still going to be around at that point? There are no guarantees, but here's your life expectancy based on your current age (courtesy of the [Social Security System Actuarial Life Table](https://www.ssa.gov/oact/STATS/table4c6.html){: target="_blank"}):

<div class="inline-calculator-item">
  <label class="inline-calculator-item__label" id="life-expectancy-f-label">Life Expectancy in Years (female)</label>
  <div class="inline-calculator-item__input">
    <input type="number" id="life-expectancy-f" disabled value="82" />
  </div>
</div>

<div class="inline-calculator-item">
  <label class="inline-calculator-item__label" id="life-expectancy-f-label">Life Expectancy in Years (male)</label>
  <div class="inline-calculator-item__input">
    <input type="number" id="life-expectancy-m" disabled value="78" />
  </div>
</div>

To retire "ever", you need to get to that point *before* you die. So, getting there before you hit your life expectancy is a pretty good measure. If your coast retirement age is less than your life expectancy, then you're on track to retire at some point even if you don't contribute another penny.

### How Much Faster Can I Retire If I Invest More?

Depending on your situation, those figures may have been exciting or terrifying (or perfectly reasonable). No matter what the case, there's one thing that should hold true - your retirement date should get better if you make regular contributions.

So, let's build those in and see where you're at. To keep things simple, we'll use a "percentage of income" approach to figure out how much you'll put toward retirement investing every year. With that in mind, go ahead and put in your household income and the percentage of that income you can save for retirement every year. If your employer includes a "401k match", don't forget to include their portion here as well - that money counts!

<div class="inline-calculator-item">
  <label class="inline-calculator-item__label" id="annual-household-income-label">Annual Household Income</label>
  <div class="inline-calculator-item__input inline-calculator-item__input--prefixed">
    <i class="prefix">$</i>
    <input type="number" id="annual-household-income" value="52893" />
  </div>
</div>

<div class="inline-calculator-item">
  <label class="inline-calculator-item__label" id="savings-rate-label">Savings Rate</label>
  <div class="inline-calculator-item__input inline-calculator-item__input--suffixed">
    <input type="number" id="savings-rate" value="8.00" />
    <i class="suffix">%</i>
  </div>
</div>

For the sake of simplicity, we'll assume you get annual cost-of-living income increases at the same rate as inflation.

With what you put in, here's where you end up:

<div class="inline-calculator-item">
  <label class="inline-calculator-item__label" id="expected-retirement-age-label">Expected Retirement Age</label>
  <div class="inline-calculator-item__input">
    <input type="number" id="expected-retirement-age" disabled value="76" />
  </div>
</div>

If this age is less than your life expectancy (see above), then you _should_ be on-track to retire assuming you can continue to work and make the investments you entered above!

<div class="inline-calculator-item">
  <label class="inline-calculator-item__label" id="ever-retire-f-label">Will I Ever Be Able To Retire (female)?</label>
  <div class="inline-calculator-item__input">
    <input type="text" id="ever-retire-f" disabled value="Yes" />
  </div>
</div>

<div class="inline-calculator-item">
  <label class="inline-calculator-item__label" id="ever-retire-m-label">Will I Ever Be Able To Retire (male)?</label>
  <div class="inline-calculator-item__input">
    <input type="text" id="ever-retire-m" disabled value="Yes" />
  </div>
</div>

What do you think? If you're not happy with the results, don't worry - not all is lost. The result is based on what you entered above and you've got power to adjust your path.

## Adjusting Your Path

While this calculator made a lot of assumptions, you still have some flexibility. To accelerate your timeline, increase your income and/or your savings rate in the [How Much Faster Can I Retire If I Invest More](/#how-much-faster-can-i-retire-if-i-spend-more) section. Otherwise, you could reduce your needed spending by changing your expected annual expenses in the [How Much Will I Spend In Retirement?](/#how-much-will-i-spend-in-retirement) section.

<script src="{{site.url}}/assets/js/custom/ever-retire.js" type="text/javascript">
