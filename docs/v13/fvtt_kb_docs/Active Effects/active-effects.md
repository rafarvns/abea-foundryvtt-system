---
title: "Active Effects"
url: "https://foundryvtt.com/article/active-effects/"
category: "Active Effects"
---

Your web browser has JavaScript disabled which is required in order to properly use the foundryvtt.com website. Certain website features will be disabled or will not work as expected unless JavaScript is enabled.

This website collects anonymous data about how users interact with our website. This data provides us with
valuable insights that help us to improve our products. Some of these analytics features are non-essential
and use browser cookies.

What data we collect and information on how it is used is described in our
[Privacy Policy](/article/privacy-policy/ "Privacy Policy").

# Active Effects

## 

## Overview

Foundry Virtual Tabletop provides a convenient system for applying changes to characters ([Actors](/article/actors/ "Actors")) based on certain effects, equipment, spells, or other special traits that might give temporary benefits or downsides. This provides Game Systems and Add-on Modules with the ability to create, modify, and distribute their own prefab conditions that users can use to shape how these effects apply to characters in their specific games.

This page provides an overview of Active Effects, their function, and how to find data structures you can use active effects to modify, and how to import items from compendiums or json files.

Object Data Paths
:   This article is going to refer to "data paths" frequently when talking about how to create Active Effects. All of the data stored on an Actor or Item is stored in an Object. Data paths are used to tell the Active Effects system where to find the data it will modify. Data paths are presented in a simple 'dot notation': case-sensitive words separated by `.` such as `system.attributes.ac.bonus`

Attribute Keys
:   Object Data Paths are not directly used to create active effects. The value that is actually used to create active effects is called an Attribute Key, but this value is determined by the data path that you are modifying. The attribute key is a part of a data path of the part of the Actor or Item that you want to modify, separated by periods. For more information, see [Creating Active Effects](#creating-effects) below.

Object Data Paths
:   This article is going to refer to "data paths" frequently when talking about how to create Active Effects. All of the data stored on an Actor or Item is stored in an Object. Data paths are used to tell the Active Effects system where to find the data it will modify. Data paths are presented in a simple 'dot notation': case-sensitive words separated by `.` such as `system.attributes.ac.bonus`

Attribute Keys
:   Object Data Paths are not directly used to create active effects. The value that is actually used to create active effects is called an Attribute Key, but this value is determined by the data path that you are modifying. The attribute key is a part of a data path of the part of the Actor or Item that you want to modify, separated by periods. For more information, see [Creating Active Effects](#creating-effects) below.

## How Active Effects Change Actors

In order to understand how Active Effects work, it's important to first understand the way that Foundry Virtual Tabletop stores data for Actors. Character sheets store a wide variety of different data, and while it's certainly easy to change a 10 to an 11 on a particular character attribute, when games involve a lot of temporary effects it's easy to forget what the original number was after you've changed it.

For the purposes of this article, it's easiest to imagine that Foundry VTT stores a second copy of the data for each character. When an Active Effect is applied, the **original** data is unchanged. Instead, the change is applied to a copy of the Actor which is presented to the user. By preserving the original data in this way, when a character loses a magical item or a temporary effect they can have the active effect removed- at which point their original data is restored. This convenient process allows for one or more active effects to be stored on an actor and toggled on or off as needed without making permanent changes.

Active effects can apply to an Actor from one of three sources.

Actor-Level Active Effects
:   The most basic active effects are stored on an Actor itself, and in most cases they can be modified directly from a character sheet. Most game systems which use Active Effects have a section on their character sheets reserved for the express purpose of creating and managing active effects at the Actor level. A good example of this would be a situation where perhaps your character has a bonus to their movement speed while they are driving their car.

Condition-Level Active Effects
:   Many game systems use Conditions (commonly referred to as status effects) to apply active effects for very temporary bonuses or penalties. These are most often defined at a System level and are applied to an actor via the Token HUD, by right-clicking and choosing the appropriate Condition (or status effect). Often, these active effects will have a pre-defined duration and will be automatically toggled off when they expire.

Item-Level Active Effects
:   When an Item which contains an Active Effect is dropped onto an Actor sheet, it will usually transfer the effect to its actor. This allows for a character to have a magical item that increases their attributes, such as a belt that increases their Brawn by 2- or a cursed knife that reduces their dexterity by 2.

Change Modes

Active effects support changing the data of actors in a variety of ways, including some which might be provided specifically by Game Systems or Add-on Modules. The available options for Change Modes are:

Add
:   Adds the provided value to a number. This can be used to both add and subtract from a particular value by specifying `+1` or `-1` as the value to add.

Multiply
:   Multiplies the defined attribute by the numeric value in the Effect Value field.

Override
:   Replaces the defined attribute with the value provided in the Effect Value field.

Downgrade
:   Reduces the defined attribute only in cases where the current value of that attribute would be greater than value specified in the Effect Value field.

Upgrade
:   Increases the defined attribute only in cases where the current value of that attribute would be less than value specified in the Effect Value field.

Custom
:   The Custom change mode applies logic defined by a game system or add-on module.

## Creating Active Effects

Some game systems, most notably Pathfinder Second Edition, make little or no use of Active Effects. The Effects tab may not be present on Actor or Item sheets at all.

If your game system has an Effects tab, you can use this user interface to create your own Active Effects.

Creating new Active Effects can seem daunting at first because they need an attribute key which is based on a data path, but it can be easy to master them with the right tools in your toolbox.

Perhaps the easiest way to learn how to create your own Active Effects is by looking at existing Active Effects and emulating them. For example, if you use the Dungeons and Dragons Fifth Edition game system and wanted to create an effect that always set a character's AC to a particular value, you could find the Barkskin spell in the DND5E system's Compendiums and see how that is set up.

Finding the Correct Attribute Key Using Data Paths

If there is no existing Item or Actor to conveniently reference, identifying the correct attribute key to use for an Active Effects can seem a little tricky at first. It does involve using the Developer Tools (`F12` or `⌘+I` for macOS). However, some simple commands can show you all the data paths that can potentially be changed. These data paths can then be used to determine the Attribute Key that you need to enter in your Active Effect.

The way that game systems can manage their data structures changed in V11. Many common game systems, including Dungeons & Dragons Fifth Edition, use the new "system data model" method. For these game systems, use the following approach to determine the attribute keys that are available for use with Active Effects:

1. Open your Developer Tools (`F12` or `CMD+Shift+I`).
2. Click the "Console" tab.
3. At the bottom, in the console prompt, paste the following code, then press the Enter key:

To get possible data paths for Actors:

```
const types = Actor.implementation.TYPES;
const shells = types.map( t => new Actor.implementation({name: t, type: t}));
shells.forEach( s => console.log(`'${s.type}'`, "type Actors have the following attribute keys available:\nsystem.\n", s.toObject().system));
```

To get possible data paths for Items:

```
const types = Item.implementation.TYPES;
const shells = types.map( t => new Item.implementation({name: t, type: t}));
shells.forEach( s => console.log(`'${s.type}'`, "type Items have the following attribute keys available:\nsystem.\n", s.toObject().system));
```

![Finding an Attribute Key for Use with Active Effects](https://r2.foundryvtt.com/website-uploads-public/screen/user_681/finding-an-attribute-key-for-use-with-active-effects-2024-03-05.webp)

An example of determining a `character` type Actor's data paths and corresponding attribute key in a game system that uses system data models.

When you run this command, the list of available data paths that can be affected by Active Effects displays. You can then use these data paths as the attribute key when creating an Active Effect. Remember to include the `system.` prefix. For example, because a `character`-type actor's strength value can be found under "`system` > abilities > `str` > `value`", the attribute key for a `character` type Actor's Strength value is `system.abilities.str.value`.

### Legacy method of finding data paths

If the method presented earlier did not return the expected output, your game system likely does not use system data models. If so, try this method instead.

#### Determining Actor or Item Types

The first step is finding out what types of Actors or Items exist in your game system.

1. Open your Developer Tools (`F12` or `CMD+Shift+I`).
2. Click the "Console" tab.
3. At the bottom, in the console prompt, paste `game.system.model.Actor` or `game.system.model.Item` and press the Enter key.
4. A list of types of Actors or Items is displayed based on which command you used, compressed to a single line that you can click to expand.

![Active Effects Configuration - Finding and Using Data Paths](https://r2.foundryvtt.com/website-uploads-public/screen/user_671/active-effects-configuration-finding-and-using-data-paths-2022-08-25.webp)

An example Actor's expanded data model, showing how to find the data paths to use as Attribute Keys.

Once you know what kind of actor you want to change, you can get the list of modifiable traits for that actor type using a similar process. If the previous approach didn't work, `Object.keys(foundry.utils.flattenObject(game.system.model.Actor.ACTORTYPEHERE))`, replacing "ACTORTYPEHERE" with your chosen actor type, such as 'character'.

For example, if you are using the dnd5e game system and wish to find the data paths for a player character, you would use `Object.keys(foundry.utils.flattenObject(game.system.model.Actor.character))`.

The output of this script gives you a very simplified, expandable list of data paths which may be modified by your system.

Creating an Active Effect From an Actor Sheet or Item Sheet

![Active Effects - Effect Configuration](https://r2.foundryvtt.com/website-uploads-public/screen/user_1294/active-effects-effect-configuration-2022-11-16.png)

An example of a functional Active Effect from the dnd5e game system.

Once you have identified the data paths you want to modify, you can create an Active Effect by accessing the 'effects' tab of your character's Actor sheet. The process for creating an Active Effect is the same regardless of whether you are creating the effect on an Actor or on an Item.

1. Open the Actor or Item sheet you wish to modify.
2. Optional: if this is an Item, decide if the effect should transfer to an actor or not. By default, the checkbox for Transfer Effect to Actor is checked.
3. Click the "Effects" tab.
4. Click the "+" button to add a new Attribute Key.
5. Fill out the small form that appears. The most important field is "Attribute Key", where you will place the data path you found (such as `system.attributes.ac.bonus`). The Change Mode determines how the Effect Value that you choose will be applied.
6. Click "Submit Changes".
7. Confirm the change applied to your actor by checking their character sheet!

Once you have created an Active Effect, it will appear in the list of Active Effects on the Actor or Item sheet. You can usually toggle the effect on or off by clicking the toggle next to the effect's name.

### Effects With Multiple Changes

It isn't uncommon for magic items or special equipment to modify more than one aspect of a character. The Active Effects system allows for defining effects which change multiple values at different data paths. When creating an effect as above, you can repeat steps 4-6 as necessary to make multiple changes inside the same effect.

## API References

To interact with Active Effects documents programmatically, you will primarily use the following API concepts:

* The  [Active Effects Class](/api/classes/foundry.documents.ActiveEffect.html " Active Effects Class")
* The  [Active Effects Configuration](/api/classes/foundry.applications.sheets.ActiveEffectConfig.html " Active Effects Configuration")