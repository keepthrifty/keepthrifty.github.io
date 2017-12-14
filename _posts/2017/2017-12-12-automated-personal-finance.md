---
layout: post

author: chris_durheim

title: "Should You Trust the Machines With Your Money?"
description: "You'd think a software developer would be a huge advocate of automation, but I'm not as smitten as you might guess. I don't think you should hand over the reins to the software quite so quickly."

date: 2017-12-12 6:58:00 -0500

image:
  path: /assets/img/posts/2017-12-12-automated-personal-finance/robot-big.jpg
pinterest-image: /assets/img/posts/2017-12-12-automated-personal-finance/automation

related-posts: [
  /from-push-to-pull/,
  /mini-retirement-budget/,
  /used-to-suck-money-management/
]

audio_archive: true
audio:
  file: /assets/audio/posts/keep-thrifty-0011-automated-personal-finance.mp3
  duration: '00:06:38'
  explicit: 'no'
  block: 'no'
  length: 6375884

tags: [money]

affiliate-link: true

rockstar: true

redirect_from:
  - /automated-pf/

categories: [article]

---

The personal finance world has been abuzz with talk of __automation__. It started with automated bill-pay and has grown into automated savings, robo-advisers, and algorithm-based investing. We dream of letting the machines take care of our finances so we can free up our time.

As a software developer, you'd think I'd be a huge advocate of automation, but I'm not as smitten as you might guess. I don't think you should hand over the reins to the software _quite_ so quickly.

## When Automation's Good

![Man pushing boulder uphill]({{site.url}}/assets/img/posts/2017-12-12-automated-personal-finance/sisyphus.png)
{: class="image--right" }

You know what I hate? Doing the same thing over and over again.

Automation is __great__ when it comes to taking over things that are repetitive that I don't get value out of doing personally.

A great example is automatic deductions from my paycheck for my 401k (_when I was getting a paycheck that is. [Mini-retirement]({% post_url 2017/2017-07-11-one-year-mini-retirement %}) paychecks are few and far between_).

Other examples could include [tax loss harvesting](https://www.madfientist.com/tax-loss-harvesting/) or rebalancing a portfolio.

I get no personal value from manually making those transfers when compared to having a computer do them. It's time-consuming and repetitive, so _bring on the machines!_

Because the rules are unambiguous, software does a great job helping me build my investments and managing where my money sits at a given time.

But {% include tweet-link.html tweet-text="there's a big difference between letting automation _help_ you with your finances and letting automation _handle_ your finances" %}.

## Automation Lacks Judgment

![Sculpture - The Thinker]({{site.url}}/assets/img/posts/2017-12-12-automated-personal-finance/thinker.jpg)
{: class="image--left" }

From my experience as an engineer, there's a big gap for automation that will be tough to ever completely fill, even with the development of advanced artificial intelligence.

Software can only do what you tell it to do. You must be able to define _all_ the rules and considerations if you expect the software to react as well as you. But that's nearly impossible, so automation falls short when judgment comes into play.

If you lost your job this morning, you might consider holding off on today's planned contribution to your taxable investments. But if you've got automated investing set up, it probably doesn't even know that you lost your job, let alone what to do with that information.

Sure, every year we develop tools that can handle more information and someone may very well handle the situation above. But there's a point where you simply can't turn __your__ values and judgment into code for every situation.

## An Unfortunate Side Effect of Automation

Also, when automation works well, we're tempted to disconnect from the task entirely. But not checking in means you might be missing something.

Here's an example:

Years ago, I set up automated payments for my credit card. After a few months, I got lazy and stopped opening up my monthly statements.

_"The software's got it covered,"_ I told myself.

But then one day Jaime looked at our accounts and noticed that I'd been paying $8 a month in account fees but had no idea because I wasn't looking at my statements.

I felt like an idiot.

Sure, I never missed a payment, but I was certainly missing something.

## What We Automate (and What We Don't)

I don't want to make it sound like we're complete Luddites. We definitely take advantage of automation, but we never want to be so disconnected from the details that we miss what's actually going on.

Here's what we _will_ automate:

- Retirement Savings (to pre-defined index funds through paycheck deductions)
- Mortgage Payments
- Charitable Giving
- Savings for certain goals (We used automated transfers from [Capital One 360](https://captl1.co/2y8eSBn){: rel="nofollow" } to save up for the downpayment on our old house)

The common theme here is that we'll automate things where the numbers _shouldn't_ be changing on a month-to-month basis and we shouldn't have to check into the details.

In addition, we actually _like_ checking in on the details for these - it's awesome every month to see your retirement account balance go up and your mortgage balance go down!

Next are the items I _could_ feel comfortable with automating, but most likely wouldn't ever do because I prefer to be involved in the details:

- Tax loss harvesting
- Rebalancing portfolio

Finally, here's what we _won't_ automate:

- Investing decisions. Sorry, I'm just not ready to let a computer decide what and when to buy/sell in our portfolio.
- Bill pay for credit cards, internet, utilities, etc. In each of these cases, we want to understand the details behind the spending so we don't get caught with unexpected charges.
- _Tracking our spending_

## Why No Automated Tracking?

![Fitness tracker on a wrist]({{site.url}}/assets/img/posts/2017-12-12-automated-personal-finance/fitness-tracker.jpg)
{: class="image--left" }

That last one may ruffle some feathers so it warrants its own discussion.

I don't think automated tracking is inherently bad. But I disagree with the people who call Mint and Personal Capital the "_Fitbit of personal finance_".

There's an important place where that analogy breaks down.

Fitness trackers measure and track behavior you want to _encourage_. If you get to the end of the day and are 500 steps short of your goal, you can always take a quick walk around the block.

But spending is usually behavior you want to _discourage_. If you get to the end of the month and Mint tells you that you blew your budget by $500, there's not much you can do at that point to make the situation better.

In addition, automated tracking categorizes your spending for you - often with less than stellar results. A trip to Target might include groceries, household goods, home improvement, clothing, and healthcare items like band-aids and pain relief. One entry titled "Shopping" doesn't do you much good in understanding how to improve your spending habits.

Having a close, personal connection with your spending helps you adjust your behavior on an ongoing basis.

All of this is why we designed [Thrifty](https://thrifty.keepthrifty.com) around the philosophy of manual, real-time tracking.

By logging our spending every day (often I'll even queue up an entry while standing in line at the store), we have a deeper understanding of what our daily habits are. Thrifty then does the math to show us how those roll up on a monthly basis and how we've been trending over time.

In addition, we can create categories that are meaningful for us - from standard ones like _Groceries_ and _Charity_ to super-personalized ones like _Pizza and Movie Night_.

![Thrifty screenshot - categorized spending]({{site.url}}/assets/img/posts/2017-12-12-automated-personal-finance/thrifty-categories.png)

We created [Thrifty](https://thrifty.keepthrifty.com) to strike the right balance of automation for us - _helping with the math, analysis, and charting_ - while keeping us in the driver's seat and connected to the details.

## Automation Has its Place

Automation can provide a lot of value in helping you on your financial journey, but it isn't a silver bullet. Software won't ever be able to completely represent your values and judgment.

Use automation to enhance your ability to manage your money, but don't hand over the reins completely.

_What parts of your finances do you automate? Do you embrace automation more or less than we do? Why?_
