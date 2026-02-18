---
title: "Dice Modifiers"
url: "https://foundryvtt.com/article/dice-modifiers/"
category: "Dice Modifiers"
---

Your web browser has JavaScript disabled which is required in order to properly use the foundryvtt.com website. Certain website features will be disabled or will not work as expected unless JavaScript is enabled.

This website collects anonymous data about how users interact with our website. This data provides us with
valuable insights that help us to improve our products. Some of these analytics features are non-essential
and use browser cookies.

What data we collect and information on how it is used is described in our
[Privacy Policy](/article/privacy-policy/ "Privacy Policy").

# Dice Modifiers

## 

## Overview

This article covers all of the roll modifiers that Foundry VTT currently offers and how to use them. For an introduction to simple dice concepts see the [Basic Dice](/article/dice/ "Basic Dice") article. For more advanced dice rolling concepts, and API references see the [Advanced Dice](/article/dice-advanced/ "Advanced Dice") article.

## Roll Modifiers

In addition to basic arithmetic and adding text comments to rolls, there are a variety of short-hand modifiers which can be used to change the way a dice roll is processed. These modifiers are conditional, and only trigger in certain (defined) circumstances.

## Re-rolls and Exploding Dice

r : Reroll
:   Rerolls the die based on the set condition, keeping the outcome regardless of whether it is better. Reroll (r) will only reroll the die once, for continual rerolling see "x : explode"

rr : Recursive Reroll
:   Rerolls the die based on the set condition, and rerolls that result if it also meets the criteria, or keeps it if it does not. Unlike Reroll (r) which will only reroll the die once, recursive reroll will keep rolling as long as results meet the reroll criteria.

x : Explode
:   Rerolls a die continually based on the set condition, so that each occurrence of the number rolls again, continually adding to the total result.

xo : Explode Once
:   Rerolls a die once based on the set condition, used primarily by games which use a "dice pool", adding to the total result.

x***Any Number***: Explode with Numeric Cap
:   Rerolls the die based on the set condition, but only up to a maximum of ***Any Number***  times. For example, adding *x5* to a roll would allow it to explode up to a maximum of 5 times, and adding x1 to a roll is identical to adding *x0*.

Re-rolls and Exploding Dice Examples

Roll one ten-sided die, and re-roll it if the result is a 1.

```
/roll 1d10r1
```

Roll one twenty-sided die, and if the result is less than 10, re-roll it.

```
/r 1d20r<10
```

Roll one twenty-sided die, and if the result is less than 3, re-roll it, including any results that are also less than 3.

```
/r 1d20rr<3
```

Roll five ten-sided dice, and if any of the individual results are a 10, roll another ten-sided die add the result to the total.

```
/r 5d10x10
```

Roll one twenty-sided die, rolling additional dice if the result is less than 10, until one of the dice is ten or better, which is the only result it will keep.

```
/r 1d20x<10kh
```

Roll six ten-sided dice, and roll one additional die for each 10 rolled, but do not re-roll 10s on the additional die, adding them to the total.

```
/r 6d10xo10
```

Roll six ten-sided dice, and roll one additional die for each 10 rolled (up to a maximum of 5 times), adding them to the total.

```
/r 6d10x5=10
```

Roll six ten-sided dice, and roll one additional die for each 9 or 10 rolled (up to a maximum of 2 times), adding them to the total.

```
/r 6d10x2>=9
```

*Chronicles of Darkness - Rote Rolls*; roll five ten-sided dice, re-rolling any dice that fall under 8, and re-rolling any dice that score a 10, before counting the total successes in the roll.

```
/r 5d10xo<8x10cs>=8
```

![Re-rolls and Exploding Dice](https://r2.foundryvtt.com/website-uploads-public/screen/user_1294/rerolling-dice-2021-05-14.jpg)

These modifiers cause dice to continue rolling under specific conditions.

## Keeping or Dropping Results

kh, k : Keep Highest
:   Whether you use 'kh' or the shorter 'k', this modifier causes the dice roller to keep a number of dice you specify, selecting the highest of the roll results available. Without a specified number it will keep the single highest number. If the number of dice rolled is less than the number of dice being kept, then it will keep all the rolls made.

kl : keep lowest
:   This modifier causes the dice roller to keep a number of dice you specify, selecting the lowest of the roll results available. Without a specified number it will keep the single lowest number. If the number of dice rolled is less than the number of dice being kept, then it will keep all the rolls made.

dl, d : drop lowest
:   This modifier causes the dice roller to drop a number of dice you specify, selecting the lowest of the roll results available. If a number of dice to drop is not specified, then it will drop the lowest number rolled. If the number of dice is less than the dice being dropped, then it will keep all the rolls made.

dh : drop highest
:   This modifier causes the dice roller to drop a number of dice you specify, selecting the highest of the roll results available. If a number of dice to drop is not specified, then it will drop the highest number rolled. If the number of dice is less than the dice being kept, then it will keep all the rolls made.

min : replace with minimum
:   This modifier causes the dice roller to replace any numbers lower than the result specified. Anything over the minimum is kept. If a minimum result is not specified, then it will roll the dice as normal without replacing any results.

max : replace with maximum
:   This modifier causes the dice roller to replace any numbers higher than the result specified with the maximum number. Anything under the maximum is kept. If a maximum result is not specified, then it will roll the dice as normal without replacing any results.

Keeping and Dropping Examples

Roll three ten-sided dice, keeping the highest of the three.

```
/r 3d10k
```

Roll four six-sided dice, keeping the three highest rolls available.

```
/r 4d6k3
```

*DND 5e - Advantage*: Roll two twenty sided dice, and use the higher of the two for the final result which has 2 added to it.

```
/roll 2d20kh + 2
```

Roll three ten-sided dice, keeping the lowest of the three.

```
/r 3d10kl
```

Roll four six-sided dice, keeping the three lowest rolls available.

```
/r 4d6kl3
```

*DND 5e -Disadvantage*: Roll two twenty sided dice, and use the lower of the two for the final result which has 5 added to it.

```
/roll 2d20kl + 5
```

Roll three six-sided dice, dropping the lowest number rolled of the three.

```
/r 3d6d
```

Roll four ten-sided dice, dropping the two lowest numbers rolled.

```
/r 4d10d2
```

Roll three six-sided dice, dropping the highest number rolled of the three.

```
/r 3d6dh
```

Roll four ten-sided dice, replacing any 1s with 2s

```
/r 4d10min2
```

Roll four ten-sided dice, replacing any 9s or 10s with 8s.

```
/r 4d10max8
```

![Keep or Drop Dice](https://r2.foundryvtt.com/website-uploads-public/screen/user_1294/keep-or-drop-successes-2021-05-14.jpg)

These modifiers cause dice to keep or remove dice results under specific conditions.

## Successes and Failures

cs : Count Successes
:   This modifier causes each die that rolls a specified result to be counted as a success which is tallied when the roll concludes. Without a specified number to succeed, all dice rolled are considered successes. This modifier can have the requirements for success specified through several comparison symbols, as follows:

cs={y}
:   Count the number of dice which resulted exactly in y.

cs>{y}
:   Count the number of dice which rolled greater than y.

cs>={y}
:   Count the number of dice which rolled greater than or equal to y.

cs<{y}
:   Count the number of dice which rolled less than y.

cs<={y}
:   Count the number of dice which rolled less than or equal to y.

even : Count Evens
:   This modifier counts any dice that generate an even number as a success.

odd : Count Odds
:   This modifier counts any dice that generate an odd number as a success.

cf : Count Failures
:   The syntax of this modifier works identically to count success, but counts the number of dice that failed to meet the specified criteria.

df : Deduct Failures
:   This modifier is used to specify the criteria for a die result to be a failure, then deducts the number of failures from the dice result, counting each failure as -1. The criteria for failure are specified identically to count success. It is intended primarily for use with Count Success, but also functions on its own.

sf : Subtract Failures
:   This modifier sets a failure criteria, and any die that meets that criteria has its roll subtracted from the final result. The criteria for failure are specified identically to count success.

ms : Margin of Success
:   This modifier subtracts a target value set by the user from the result of the dice rolled, and returns difference as the final total. If the amount rolled is less than the target it outputs a negative number, and a positive number if there is a remainder after subtraction.

Success and Failure Examples

Roll ten twenty-sided dice, and count a success for each die which rolls a 20.

```
/r 10d20cs20
```

Roll ten twenty-sided dice and count a success for each die which rolls above a 10.

```
/r 10d20cs>10
```

Roll six ten-sided dice and count a success for each die which rolls a 6 or higher.

```
/r 6d10cs>=6
```

Roll a single one-hundred sided die and count a success if the result is 20 or lower.

```
/r 1d100cs<=20
```

Roll three six-sided dice and count a success for each die which rolls an even number.

```
/roll 3d6even
```

Roll three six-sided dice and count a success for each die which rolls an odd number.

```
/roll 3d6odd
```

*World of Darkness - Dice vs Difficulty*: roll five ten-sided dice, counting any roll of a 6 or higher as a success, while deducting a success for any roll that is a 1.

```
/r 5d10cs>=6df=1
```

*Chronicles of Darkness - Dice vs Difficulty*: Roll five ten-sided dice, counting a success for every die that rolls 8 or higher, and rolling an additional die any time a result of 10 is rolled.

```
/r 5d10cs>=8x=10
```

*Chronicles of Darkness - 9 again and 8 again using exploding dice*: roll five dice, counting a success for every die that rolls 8 or higher, and rolling an additional d10 any time a 9 or 10 is rolled.

```
/r 5d10cs>=8x>=9
```

Roll ten dice, counting a success for every die that rolls 8 or higher, and rolling an additional d10 any time an 8 or higher is rolled.

```
/r 10d10cs>=8x>=8
```

Rolls ten twenty-sided dice, and counts a failure for each die which rolls a 20.

```
/r 10d20cf20
```

Roll ten twenty-sided dice and count a failure for each die which rolls over a 10.

```
/r 10d20cf>10
```

Roll six ten-sided dice and count a failure for each die which rolls a 6 or higher.

```
/r 6d10cf>=6
```

Roll a single one-hundred sided die and count a failure if the result is 20 or lower.

```
/r 1d100cf<=20
```

Roll four six-sided dice, treating any roll of exactly 6 as a success, and removing 1 from the final result for each die that rolls a 1.

```
/r 4d6cs6df1
```

Roll ten ten-sided dice, treating any roll of 6 or better as a success, and removing 1 from the final result for each die which rolls a 1.

```
/r 10d10cs>5df1
```

*Chronicles of Darkness - Chance Rolls*: roll a single ten-sided die, counting a 10 as a success and a 1 as a failure.

```
/r 1d10cs=10df=1
```

Roll three six-sided dice, and subtract the value of any dice that roll lower than three.

```
/r 3d6sf<3
```

Roll three six-sided dice and subtract 10 from the final result.

```
/r 3d6ms10
```

![Count Successes](https://r2.foundryvtt.com/website-uploads-public/screen/user_671/count-successes-2020-10-21.jpg)

These modifiers cause dice results to be counted as successful or not under specific conditions.

## Special Dice

Foundry Virtual Tabletop also natively supports two special types of dice: Coins, and FATE Dice.

Flipping Coins

Coins are two-sided dice with two results: heads, or tails. They can be rolled as any other die, but are not affected by mathematical expressions, though they can still be combined with other dice types. Coins also allow the roller to call (c) a specific result in advance, which will treat rolling coins similarly to "count success". By default, Coins tally the number of heads as successes in the results.

```
/roll 4dc # Flip four coins.
```

```
/roll 3dcc1 # Flip three coins and tally the number of coins that result in Heads
```

```
/roll 3dcc0 # Flip a number of coins and tally the number of coins that result in Tails
```

FATE Dice

Fate dice are six-sided dice that can roll a plus, minus, or blank face. They are used in the fudge and fate systems, and are rolled like any other dice in foundry, but are not affected by mathematical expressions, as their faces have no numerical values and are considered a zero.

```
/r 4df # Roll 4 fate dice, generating a random number of plus, minus, or blank results.
```

![Special Dice](https://r2.foundryvtt.com/website-uploads-public/screen/user_1294/special-dice-2021-05-14.jpg)

These special dice are reserved for specific systems, or for special situations.