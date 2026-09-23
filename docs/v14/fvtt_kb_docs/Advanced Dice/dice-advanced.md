---
title: "Advanced Dice"
url: "https://foundryvtt.com/article/dice-advanced/"
category: "Advanced Dice"
---

Your web browser has JavaScript disabled which is required in order to properly use the foundryvtt.com website. Certain website features will be disabled or will not work as expected unless JavaScript is enabled.

This website collects anonymous data about how users interact with our website. This data provides us with
valuable insights that help us to improve our products. Some of these analytics features are non-essential
and use browser cookies.

What data we collect and information on how it is used is described in our
[Privacy Policy](/article/privacy-policy/ "Privacy Policy").

# Advanced Dice

## 

## Overview

This article covers more complex dice concepts such as parenthetical expressions, evaluating pools of dice, complex data paths in rolls, and the dice rolling API. For an introduction to simple dice concepts see the [Basic Dice](/article/dice/ "Basic Dice") articles. For a comprehensive list of dice modifiers see the [Dice Modifiers](/article/dice-modifiers/ "Dice Modifiers") article.

Foundry Virtual Tabletop provides a comprehensive chat interface for delivering dice rolling expressions and formulae. Through use of paranthetical statements, dice pools, and variables it is possible to construct very complex formulae to be used for rolling dice.

## Parenthetical Expressions and Dice Pools

When a roll command includes Parenthesis ( ) and curly braces { }, Foundry VTT interprets these as instructions to handle the roll in particular ways. These expressions are evaluated first before all other elements of a roll formula.

### Parentheses

The contents of a parenthetical expression are always evaluated before the outer portion. This allows for options where the number, faces, or modifiers of a dice roll are themselves dynamic in some way. Using parenthetical expressions can allow you to roll a variable number of dice based on a data attribute or an inner dice roll. Parenthetical expressions can also be used in conjunction with roll modifiers to allow checking a roll against a particular value. For example to count the number of successes relative to some target attribute or opposed dice roll.

Parenthesis Usage Examples

Roll a single die with a number of sides randomly determined by a d20 roll.

```
/roll 1d(1d20)
```

Roll between two and eight d8.

```
/roll (2d4)d8
```

Roll a number of dice equal to the results of one roll of a 20-sided die multiplied by two, with a number of sides between 1 and 10.

```
/roll (1d20*2)d(1d10)
```

## Dice Pools

Dice Pools allow you to evaluate a set of dice rolls and combine or choose certain results from the pool as the final total. This allows you to keep, combine, or count results across multiple rolled formulae. Dice pools are defined using comma separated roll terms within brackets.

Dice Pool Usage Examples

Roll 4d6, 3d8, and 2d10, keep only the highest result.

```
/roll {4d6, 3d8, 2d10}kh
```

Roll one twenty sided die and the result can only be 10 or higher.

```
/roll {1d20, 10}kh
```

*DND 5e - Reliable Talent*: compare a die roll against a fixed number (10), selecting the higher of the two for the result. This can be accomplished with an enclosed die roll using the keep highest modifier. Roll one twenty-sided die, and use the higher of its result or the number 10, and add 5 to it.

```
/r {1d20,10}kh + 5
```

*DND5e - Character Creation*: roll a pool of ability scores when creating your character.

```
/roll {4d6kh3, 4d6kh3, 4d6kh3, 4d6kh3, 4d6kh3, 4d6kh3} # Character Ability Scores
```

Roll 6d6, 5d8, 4d10, 3d12 and count how many resolve to greater than 15.

```
/roll {6d6, 5d8, 4d10, 3d12}cs>15
```

*SWADE - Wild Die*: roll one eight-sided die and one six-sided die, both of which will roll additional dice of the same size if they roll their maximum value. Use the highest result of rolls.

```
/roll {1d8x, 1d6x}kh
```

## Data Paths as Variables

Foundry VTT stores important values in the data for each Document, regardless of its type. These data paths can be called within rolls in order to provide complex functionality and references to a selected character's statistics and modifiers.

### Understanding The Structure of Roll Data

Each game system has its own particular Data Paths which it defines. There several ways ways to resolve what these data paths are which can be used via the Developer Tools console. The first method explores the evaluated roll-data object for a specific Actor.

```
const actor = game.actors.getName("My Character Name");
console.log(actor.getRollData());
```

You can also find these paths by selecting a Token and then pasting the following text into the Developer's console:

`_token.actor.getRollData();`

The third method explores the defined game system data template for a certain Actor type.

```
game.system.model.Actor.<type of actor>
```

For example, you could check the attributes of a Character type actor in the Dungeons and Dragons Fifth Edition game system using the following code:

```
game.system.model.Actor.<type of actor>
```

If used correctly, either of these commands will output a clickable list of the object data stored on every character which can be conveniently referenced with rolls using `@the.path.to.data`.

Using Data Paths as Variables

Once you know the structure of an actor, you can use them as part of any roll formula. When a roll formula resolves a data path variable, it automatically gets the data from the **currently controlled token first**, and if no token is controlled, gathers the data from whichever Actor has been chosen in the "Select Character" section of player configuration.

Data path variables can take the place of any number in any part of a roll formula.

For example in the Dungeons & Dragons Fifth Edition game system, you could perform a non-proficient Charisma check for the controlled Token by using `/roll 1d20 + @abilities.cha.mod` in chat.

If your game system has a Power attribute, this would count the number of successes based on the selected token's Power attribute.

```
/roll 3d12cs<=(@attributes.power)
```

## Including Math Functions

One of the benefits of Foundry VTT's robust API is that it exposes all of its dice rolling functions to the benefits of the JavaScript Math methods. For more about these methods, see
[Math Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math "Math Expressions"). This allows users to leverage complex mathematical functions in their dice rolls.

Math Function Examples

Return the largest integer less than or equal to the result of a roll of 1d12 divided by 3.

```
/r floor(1d12/3)
```

Return the smallest integer greater than or equal to the result of a roll of 1d12 divided by 3.

```
/r ceil(1d12/3)
```

Return the value of a roll of 1d12 divided by 3, rounded to the nearest integer in either direction.

```
/r round(1d12/3)
```

Return the absolute value of a roll where the result could be either positive or negative.

```
/r abs(5d6 - 20)
```

#### Mersenne Twister PRNG

**How does Foundry Virtual Tabletop handle randomization?**

Foundry utilizes a Mersenne Twister pseudorandom number generator for all of its dice rolls. It was originally developed in 1997 by Makoto Matsumoto and Takuji Nishimura to rectify most of the flaws found in older PRNGs.

It is fast, reliably random over long periods of usage, and easily implemented, which has led to its widespread use in numerous programming languages. In fact, this pseudorandom number generator is the most widely used general-purpose PRNG in existence, and widely viewed as the most reliable for use in dice and other gaming impelementations.

The Mersenne Twister utilizes a seed number that the internal mathematics use to determine the set of random numbers generated. In Foundry VTT, this seed is set at the time each user connects, giving them a unique set of rolls for the rest of that session.

## Fulfilled Rolls

In Foundry V12 or newer, you can choose how you want Foundry to fulfill its rolls by specifying your own randomness methodology. Instead of always using the default digital Mersenne twister, users can choose whether each of their die denominations should be fulfilled via digital dice rolling, manual input, or some other external service. This is controlled by the Dice Configuration core setting.

This external service can be lava lamps, cosmic microwave background radiation, or Bluetooth dice like [GoDice](https://particula-tech.com/godice/?v=7516fd43adaa) or [Pixel dice](https://gamewithpixels.com/).

![Dice Configuration Settings Dialog](https://r2.foundryvtt.com/website-uploads-public/screen/user_681/dice-configuration-settings-dialog-2024-05-07.webp)

Choose your own randomness method!

To use certain methods, such as Bluetooth dice, you may need to install a module. Please consult the manufacturer or service provider's documentation for more information.

## API References

For module and system developers who want to go deeper with dice mechanics - there is a robust JavaScript API which can do even more with dice rolls. See the following API documentation for details.

* The  [Roll Class](/api/classes/foundry.dice.Roll.html " Roll Class")
* The  [DiceTerm Base Class](/api/classes/foundry.dice.terms.DiceTerm.html " DiceTerm Base Class")
* The  [Die Constructor](/api/classes/foundry.dice.terms.Die.html " Die Constructor") term that can be used as part of a Roll Formula.