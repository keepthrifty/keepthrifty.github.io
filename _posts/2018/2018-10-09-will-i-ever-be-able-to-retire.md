---
layout: post

author: chris_durheim

title: "Will I Ever Be Able to Retire?"
description: "What does it take to know if you'll ever be able to retire? Here's a step-by-step approach to calculate your needs and measure your progress."

date: 2018-10-09 6:58:00 -0500

image:
  path: /assets/img/posts/2018-10-09-will-i-ever-be-able-to-retire/will-i-ever-be-able-to-retire.jpg

categories: [article]

---

It seems like the world is buzzing these days with talk of financial independence and early retirement. Jaime and I big proponents of the power of financial freedom, but it's healthy to recognize that for many people, it may seem like an impossible dream.

After all, here's what the state of retirement savings looks like for people in the US:

| Age (decade) | Median Retirement Savings |
|--------------|---------------------------|
| 20's         | $16,000                   |
| 30's         | $45,000                   |
| 40's         | $63,000                   |
| 50's         | $117,000                  |
| 60's         | $172,000                  |

<div class="caption">Source: <a href="https://www.transamericacenter.org/docs/default-source/resources/center-research/16th-annual/tcrs2015_sr_retirement_throughout_the_ages.pdf" target="_blank">TransAmerica Center for Retirement Studies</a></div>

Is that enough? Most people think they'll need $1,000,000 to retire comfortably. If that's the case, I _highly doubt_ that having $172,000 at age 60 puts someone on track to comfortably retire with $1,000,000 at age 65.

> {% include tweet-link.html tweet-text="For the majority of Americans, the concern isn't retiring early. Their concern is __retiring ever.__<br />" %}

If you're trying to answer that question, then this is the guide for you. Let's go through how to figure out if you'll _ever_ be able to retire.

## Will I Ever Be Able to Retire?

It's not a simple question and there are certainly many ways to look at answering it. Below, I've got an approach (with embedded calculations for __your situation__ along the way) that lets you measure what you'd need to retire and how long it'll take you to get there.

_Disclaimer:_ ___any___ _retirement calculator out there - this one included - operates on a wide variety of assumptions. While these assumptions usually come based on some data about how things have worked out in recent history, there's no guarantee that the future will look the same. Consider this guide an_ ___introduction___ _to retirement calculators. I highly encourage you to look at others as well._

Ok, with that out of the way, let's get started with the first question we need to answer.

### How Much Will I Spend In Retirement?

The first thing we need to understand is what your annual expenses will look like. If you've ever [tracked your spending](https://thrifty.keepthrifty.com), you'll likely have an idea of what your spending would look like in retirement.

If you haven't tracked your spending before, you might consider using the [MIT living wage calculator](http://livingwage.mit.edu/){: target="_blank"} to estimate your annual expenses. This won't provide for a lavish retirement with cruises and getaways, but it can help answer the question of whether you could _ever_ retire.

To use the living wage calculator, enter your location (either your zip code or your state/county).

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

### How Much Do I Need to Save to Retire?

For the sake of simplicity, we'll use [the 4% rule](https://www.madfientist.com/safe-withdrawal-rate/){: target="_blank"} to estimate how much money you need to retire. With this rule, you need to save up 25 times your annual expenses in order to retire.

Based on the annual expenses you entered earlier, here's what you'd need saved up to retire today:

<div class="inline-calculator-item">
  <label class="inline-calculator-item__label" id="retirement-target-label">Retirement Target</label>
  <div class="inline-calculator-item__input inline-calculator-item__input--prefixed">
    <i class="prefix">$</i>
    <input type="text" id="retirement-target" disabled value="934350" />
  </div>
</div>

But unfortunately, that doesn't tell us how much you'll need saved in the future. You know how the cost of milk (and everything else) goes up a bit every year? That's what we call [inflation](https://www.thebalance.com/u-s-inflation-rate-history-by-year-and-forecast-3306093){: target="_blank"}. With everything costing more next year than this year, you'll need __more__ saved by next year to retire than you would have needed to retire today.

We'll assume inflation is 2.5% every year. If something cost you $10.00 to buy this year, you could expect that inflation to bring the price up to $10.25 by next year.

Here's what inflation would do to your retirement target for next year:

<div class="inline-calculator-item">
  <label class="inline-calculator-item__label" id="retirement-target-n1-label">Next Year's Retirement Target</label>
  <div class="inline-calculator-item__input inline-calculator-item__input--prefixed">
    <i class="prefix">$</i>
    <input type="text" id="retirement-target-n1" disabled value="957709" />
  </div>
</div>

Bummer, right? The good news is you can work to "beat" inflation by investing your retirement savings instead of stuffing it under a mattress.

With that in mind, let's take a look at savings and investments.

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

For your retirement, let's presume you choose to *invest* your money instead of just putting it under a mattress (or in a low-yield savings account), you can get a return that not only beats inflation but actually grows beyond that. I won't get into the details on *why* to invest in index funds, but let's say you do and can get an average annual return of 8%.

Even without putting any more money into that account, it's going to grow - beating inflation and then some.

In fact, that investment would eventually grow to the point of hitting your retirement number, even if you didn't contribute another penny. This concept in personal finance is called "coasting" or, as I like to call it, [retirement freedom]({% post_url 2017/2017-01-30-introducing-retirement-freedom %})

<div class="inline-calculator-item">
  <label class="inline-calculator-item__label" id="years-to-retirement-label">Coast Years to Retirement</label>
  <div class="inline-calculator-item__input">
    <input type="text" id="years-to-retirement" disabled value="59" />
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
    <input type="text" id="coast-retirement-age" disabled value="94" />
  </div>
</div>

So now, the million dollar question - are you still going to be around at that point? There are no guarantees, but here's your life expectancy based on your current age (courtesy of the [Social Security System Actuarial Life Table](https://www.ssa.gov/oact/STATS/table4c6.html){: target="_blank"}):

<div class="inline-calculator-item">
  <label class="inline-calculator-item__label" id="life-expectancy-f-label">Life Expectancy in Years (female)</label>
  <div class="inline-calculator-item__input">
    <input type="text" id="life-expectancy-f" disabled value="82" />
  </div>
</div>

<div class="inline-calculator-item">
  <label class="inline-calculator-item__label" id="life-expectancy-f-label">Life Expectancy in Years (male)</label>
  <div class="inline-calculator-item__input">
    <input type="text" id="life-expectancy-m" disabled value="78" />
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
    <input type="text" id="expected-retirement-age" disabled value="76" />
  </div>
</div>

If this age is less than your life expectancy (see above), then you _should_ be on track to retire assuming you can continue to work and make the investments you entered above!

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

What do you think? If you're not happy with the results, don't worry - not all is lost. The result is based on what you entered above and you've got the power to adjust your path.

## Adjusting Your Path

While this calculator made a lot of assumptions, you still have some flexibility. To accelerate your timeline, increase your income and/or your savings rate in the [How Much Faster Can I Retire If I Invest More](/#how-much-faster-can-i-retire-if-i-spend-more) section. Otherwise, you could reduce your needed spending by changing your expected annual expenses in the [How Much Will I Spend In Retirement?](/#how-much-will-i-spend-in-retirement) section.

## What's Next?

There you have it. Consider this an "entry-level" retirement calculator. There are plenty of others out there to explore as you dig into the details. Many of these will let you tweak the assumptions and try more complex scenarios. Here are a few I recommend you give a shot:

- [When Can I Retire? When Will I Be Financially Independent?](https://esimoney.com/when-can-i-retire-when-will-i-be-financially-independent-a-retirement-calculator-guide/){: target="_blank"} from ESI Money
- [Early Retirement Calculator](https://millennialmoney.com/early-retirement-calculator/){: target="_blank"} from Millennial Money
- [Ultimate Retirement Calculator](https://financialmentor.com/calculator/best-retirement-calculator){: target="_blank"} from Financial Mentor

And here are a couple retirement-related calculators I've worked on that might help you think differently about your path to financial freedom:

- [Would You Trade $25 for an Extra Day of Freedom?]({% post_url 2016/2016-09-18-the-price-of-an-extra-day %})
- [Introducing Retirement Freedom]({% post_url 2017/2017-01-30-introducing-retirement-freedom %})
- [Annual Savings to Walk Away Calculator](https://mny.millennialmoney.com/calculators/annual_savings_to_walk_away){: target="_blank"}
- [Savings Rate to Walk Away Calculator](https://mny.millennialmoney.com/calculators/savings_rate_to_walk_away){: target="_blank"}

Happy number-crunching!

<script src="{{site.url}}/assets/js/custom/ever-retire.js" type="text/javascript">
