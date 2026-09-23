---
title: "Rollable Tables"
url: "https://foundryvtt.com/article/roll-tables/"
category: "Rollable Tables"
---

Your web browser has JavaScript disabled which is required in order to properly use the foundryvtt.com website. Certain website features will be disabled or will not work as expected unless JavaScript is enabled.

This website collects anonymous data about how users interact with our website. This data provides us with
valuable insights that help us to improve our products. Some of these analytics features are non-essential
and use browser cookies.

What data we collect and information on how it is used is described in our
[Privacy Policy](/article/privacy-policy/ "Privacy Policy").

# Rollable Tables

## 

A Rollable Table is a way of storing a list of *things* inside Foundry VTT so that you can randomly pick something from it. Sometimes called a "roll table," this is the Foundry equivalent of the pen-and-paper random tables that date back to the earliest RPG adventures and rulebooks.

## Table of Contents

* [Rollable Tables at a Glance](#at-a-glance)

+ [Key Features](#key-features)

* [Using Rollable Tables](#using)

+ [Rolling on a Rollable Table](#rolling)
+ [Rolling and Replacement](#replacement)
+ [Manually Controlling the Rollable Table](#manual-result)

* [Editing Rollable Tables](#editing)

+ [The Summary Tab](#summary-tab)
+ [The Results Tab](#results-tab)
+ [The Result Configuration Sheet](#result-configuration)

* [Creating New Rollable Tables](#creating-tables)

+ [Creating New Result Rows](#new-result)
+ ["Nesting" Tables to Create Subtables](#nesting)

* [Additional Rollable Table Capabilities](#additional-capabilities)

+ [Rollable Tables and Journal Entries](#journal-entries)
+ [Multiple Results for the Same Roll](#multiple-results)

* [API References](#api)

## Rollable Tables at a Glance

In traditional RPG books, random tables are commonly used to help support random encounters, treasure, or outcomes. In Foundry Virutal Tabletop, Rollable Tables take that time-tested concept and elevate it by adding convenient rolling, drawn result tracking, hyperlinks, and other features that are only possible digitally.

You can find and manage your Rollable Tables in the  `Rollable Tables` sidebar tab. A Rollable Table is a type of Document and like other documents they can be stored in [Compendiums](/article/compendium). If you can't find a Rollable Table, look in the  Compendiums sidebar tab also.

If you are not a gamemaster, you may not have [permission](/article/users/) to create Rollable Tables and the Create Table button may be hidden.

### Key Features

* Rolls with and without [replacement](#replacement)
* Weighted rolls so that some results are [more or less likely](#result-probability)
* [Fully formattable text results](#formatted-text) with embedded links to Actors, Items, etc.
* [Secret or public rolls](/article/dice/#rollmodes)
* [Manual control](#manual-result) over results
* Subtable support through "[nesting](#nesting)" two or more Rollable Tables
* [Automatic Rollable Table creation](#folders) based on folder contents

![A simple example Rollable Table with the Create Table button is also shown.](https://r2.foundryvtt.com/website-uploads-public/screen/user_681/rollable-table-sidebar-20250909-3-2025-09-08.webp)

The Foundry VTT sidebar tab with the Rollable Tables tab selected and the Create Table button shown.

## Using Rollable Tables

When you open a Rollable Table, the sheet will look something like below:

![A Rollable Table in View mode.](https://r2.foundryvtt.com/website-uploads-public/screen/user_681/simple-rollable-table-edit-20250807-2025-08-07.webp)

By default, the Rollable Table's information is streamlined for convenient reading and gameplay.

### Rolling from a Rollable Table

To roll from a Rollable Table, click its `Draw Result` button. A die of the appropriate type is automatically rolled to select a result, just like you would for a printed random table. The Rollable Table automatically picks the row that matches the number, generates a [chat message](/article/chat/) for that result, and (if necessary) [marks the result as drawn](#replacement).

Before you make this roll, decide whether you want the players to see the result. Standard [message modes](/article/dice/#rollmodes) apply, so choose Blind if you want to hide the result from your players - they'll still know you rolled for something, though!

![](https://r2.foundryvtt.com/website-uploads-public/screen/user_681/blind-roll-table-draw-20250807-2025-08-07.webp)

Fortune did not favor this party, and they pulled an unlucky card, but due to the blind roll the players don't know it yet. The GM may or may not decide to be merciful…

If the `Draw Result` button is disabled, you are likely rolling on a Rollable Table that is inside a Compendium. To use the table, right-click it, then select the `Import` option. You will then be able to roll on it as usual.

### Rolling and Replacement

When you draw a result from a Rollable Table, the result is always chosen either "with replacement" or "without replacement."

With replacement
:   Each item is automatically replaced after it is rolled, allowing the same result to be drawn repeatedly. *Example:* a table to randomly determine the type of a found coin.

Without replacement
:   Each item can be chosen only once. *Example:* a table that simulates a raffle.

When a result is chosen without replacement, Foundry selects a result and sends it to the chat log as usual, but then it also marks the result as drawn by graying out the number on its row and closing the lock icon :

![A Rollable Table with one drawn result (note the dimmed number and the clicked lock icon). The Reset Results button shown.](https://r2.foundryvtt.com/website-uploads-public/screen/user_681/rolltable-drawn-without-replacement-20250807-2025-08-07.webp)

A Rollable Table with one drawn result (note the dimmed number and the clicked lock icon). The `Reset Results` button shown.

The drawn result is automatically locked and cannot be rolled again until it is unlocked again (see [below](#manual-result)) or until the entire table is reset using the `Reset Results` button.

### Manually Controlling the Rollable Table

A truly random roll isn't the only way to select a result from the table. If they wish, the GM can easily exert some manual control over the Rollable Table's results.

Manually including or excluding a result from the roll
:   The lock icon of a row open and closed controls whether that row can be selected as the table's result. The closed lock icon  indicates the row cannot be chosen and the open lock icon  indicates that it can be drawn. Clicking the lock icon for a row toggles it.

Manually Selecting a Result
:   If you click the  `Draw This Result` icon for a result, Foundry "rolls" against the table but is guaranteed to pick that chosen result.

### Rollable Tables and the Player Perspective

For simplicity, this article presents Rollable Tables from the perspective of a GM user. Non-GM users may be more restricted in what they can do depending on their [user permission](/article/users/) level:

None
:   Cannot see that a table exists or interact with it in any way.

Limited
:   Can also see the table, but still can't edit it or draw without replacement.

Observer
:   Can see table and can draw a result without [replacement](#replacement), but cannot view the table or edit it.

Owner
:   Has total control and can do anything a GM can do.

Drawing without replacement is more restricted because when you draw from a Rollable Table without replacement, you are actually editing the table to indicate that the drawn result it is no longer available. This means only users who can edit the table can draw without replacement.

## Editing Existing Rollable Tables

To keep Rollable Tables simple to read and use, Rollable Tables have two different "modes":

View mode
:   Used for reading the table and drawing results. Only simple changes are possible in this mode such as renaming the table or toggling whether a result is locked.

![A Rollable Table in View mode with both tabs shown.](https://r2.foundryvtt.com/website-uploads-public/screen/user_681/rolltable-sheet-view-20260623-2026-06-23.webp)

The Dungeons & Dragons 5e System provides an alternative default table sheet, where the Edit toggle is in the top left.

Edit mode
:   More substantial changes to the table and its properties are made using the Edit view.

    To make editing easier, the Edit mode splits the table's information into two tabs. The `Results` tab controls the table's individual results and probabilities, while the `Summary` tab controls the table's "big picture" information.

![The same Rollable Table in edit mode.](https://r2.foundryvtt.com/website-uploads-public/screen/user_681/rolltable-sheet-edit-20260623-2026-06-23.webp)

Edit mode provides two separate tabs, one for editing the results the second for editing the table itself.

### The Summary Tab

The fields in the Summary tab relate to the properties of the table as a whole, not to its individual results.

Description
:   A text field that allows you to enter text to help describe your table. When in View mode, any [formatted text](#formatted-text) provided here displays below the header and above the first result.

Draw with Replacement
:   A checkbox that controls whether the table can draw the same result more than once. For more information, see [Drawing With and Without Replacement](#replacement).

Display roll formula to chat
:   When a random result is drawn from the table, a digital die roll is used to choose the correct result. By default, the exact formula used to pick this result is visible to players. GMs can uncheck this box to avoid revealing this information.

### The Results Tab

Each potential result of the Rollable Table has its own row in the Results tab of the Edit Rollable Table window .

* To add a new result row, click the **+** button at the top of the first column
* To delete a row, click the `Delete Result` button for that row, represented by a trash can icon
* To edit a row, make some quick changes in the result's row or click the edit icon  in its last column.

Each result's row has four columns of editable data and one column containing control icons. You can edit everything but the Details column directly in the row.

[+]
:   The first column allows you to set an optional custom image for each result row. The *+* sign at the top is actually a button and is used to add a new result row to the Rollable Table.

Details *(read only)*
:   This column contains the result's content. To edit it, click the edit icon  in the last column to the right.

Weight
:   This column is used when automatically setting the probability of rolling each result during automatic normalization. For more information, see [Controlling Result Probability](#result-probability) below.

    If you're not planning on automatically balancing the odds of each result in this way, use the Range column to control each result's probability instead.

Range
:   The range of numbers assigned to this result, and therefore how likely it is. For example, if you put 1-1 here and your Rollable Table uses a d8, the result will only be chosen if a one is rolled, 1 out of 8 times. If you put a range of 1-3 here instead, the result will be chosen on a result of a 1, 2, or 3, making it three times more likely to be chosen.
:   This row contains three control buttons:

    * Opens the Open Result Configuration window for this row (see [Result Configuration Sheet](#result-configuration) which allows you to edit everything about your result all at once, including its [probability](#result-probability) and its content in the Details column.)
    * Deletes this result row.
    * `/`  Controls whether the result can be chosen, [just like in View mode](#manual-result).

    The header of this row is also the button that is used to normalize [probabilities](#result-probability).

### The Result Configuration Sheet

The `Results` tab is great for working with all the results in a Rollable Table at once, while the `Edit Result` button  lets you see everything about a single result row at once. It is also the only way to edit the main content of each result in the Details column.

Several of these fields are identical to the columns in the `Results` tab, but there are some new additions:

Result Name
:   A text field that allows to give the result row a bold header.

Result Type
:   A result row can be either a Document or Text.

    **Text**: A result can be free-form text, such as if "naught but dust" is found, or if you find more than one Item in a single result. These are both examples of Text results.

    If you're not sure, the Text type is always more flexible because you can always add flavor text or more documents to the result later. You can even add multiple documents of different types, (like an Actor and a notable Item they're carrying). The easiest way to add a Document is to drag and drop it onto this field from its sidebar tab.

Reference Document
:   The Reference Document field lists all Documents that are included in the result. The easiest way to add Documents to a result is to drag and drop them directly onto this field (or the text box below) from its sidebar tab.

    If you are a power user who is comfortable working with code, you can also enter a UUID into this field directly.

#### Controlling Result Probability

By default, a new table assigns equal probability to each result, but you can choose to make certain results more or less likely using this column. Typically, the easiest way to do this is to tweak the Range values for each column in the Results tab and perhaps changing the size of the die used in the Summary tab.

Sometimes, though, your table can be quite complex. What if you have 17 possible options, and you want three of them to be 4 times as likely as the others? In situations like that, Foundry can do the math for you.

Instead of manually setting the range of each value, we can use the Weight values instead. The higher this weight value is, the more likely this result will be chosen, much like a weighted die is more likely to roll certain things.

In this example, we would set the more likely options to weight 4, leave the weights of the other options at 1, and then click the `Normalize` button. When you do, a result number is assigned to each row based on its weight automatically.

## Creating New Rollable Tables

Feel free to open Foundry Virtual Tabletop, follow along, and try to create the same Rollable Table.

You can easily create your own Rollable Tables to add a bit more organized chaos to your game. To get started, just switch to the Rollable Table sidebar tab and click the `Create Table` button:

![The Foundry VTT sidebar tab with the Rollable Tables tab selected and the Create Table button shown.](https://r2.foundryvtt.com/website-uploads-public/screen/user_681/rollable-table-sidebar-20250909-3-2025-09-08.webp)

The Foundry VTT sidebar tab with the Rollable Tables tab selected and the Create Table button shown.

When you click it, a blank Rollable Table opens:

![A simple example Rollable Table with the Create Table button is also shown.](https://r2.foundryvtt.com/website-uploads-public/screen/user_681/rollable-table-new-20250909-2025-09-08.webp)

A blank new Rollable Table, with the Add New Result button shown.

### Creating New Result Rows

Use the "Add New Result" button  to create your new result, then click the "Open Result Configuration" button  on each result's row to populate it. If you get stuck, check the [Editing Rollable Tables](#editing) section for more information about the different fields.

You can use several techniques to create useful and beautiful results for your new table:

Embedding Links Into Your Table
:   It's easy to add embedded links to other Data into your Rollable Tables. Just drag and drop Actors, Items, Macros or other documents directly from their sidebar tab or compendium onto the result's row.

Adding Formatted text
:   You add rich text formatting to your result row using markup or HTML. You can even add images or videos!

### "Nesting" Tables to Create Subtables

In paper rulebooks, roll tables often have subtables. Frequently, when you look up the result of your roll against a table, instead of a result you find instructions to roll again on a different table. This process may repeat several times before you get the end result.

This may sound complicated, but it's simple to set up such a subtable in Foundry VTT. Just drag the subtable directly onto the main table and it is automatically added as a new result row. If the subtable's result is chosen, Foundry automatically rolls on the subtable also.

Because one table is literally embedded inside the other table and this process can be repeated by dragging on yet another table, this is sometimes called "nesting" tables.

![An example of 'nesting tables' to create subtables from Ember.](https://r2.foundryvtt.com/website-uploads-public/screen/user_681/rolltable-nestedtable-20260714-2026-07-14.webp)

The Hodroxol Stomach Contents may give a roll on the Arcturian Trinket or Corpse Loot table.

You can automatically create a new Rollable Table based on a folder's contents by right-clicking the folder and choosing the  Create Rollable Table option. The folder can be in any sidebar tab or even inside a Compendium.

![From a folder of spells to a Rollable Table in one click!](https://r2.foundryvtt.com/website-uploads-public/screen/user_681/from-folder-to-rollable-table-20250909-2025-09-09.webp)

From a folder of spells to a Rollable Table in one click!

## Additional Capabilities

The following capabilities are core to Foundry VTT; specific game systems may have additional uses for roll tables beyond what is described here.

### Rollable Tables and Journal Entries

You can embed a Rollable Table into a [journal entry](/article/journals/) page and even roll from it right within the journal with the `@Embed[uuid.here]{caption text}` syntax. By including additional options inside the brackets, separated by spaces, you can customize the display of the table. Like all embeds, you can use `cite`, `caption`, and `inline` to add or remove additional text around the actual table. By default, embeds have both a caption and cite, with the cite providing a link to the document and the caption providing customizable text. The `captionPosition` property, if present and set to anything except "bottom", will move the caption above the table. For roll tables, if caption text is not provided in curly braces, it will default to the table's description. The inline property is a single property to remove both the citation and caption.

There are a number of options that can be used while embedding a roll table, experiment with them to find different ways to author your journal content!

Allow the embedded table to be interactively rollable
:   `@Embed[RollTable.hrfxfpCam65BL3la rollable]`

Include the table's HTML description as a header row inside the table
:   `@Embed[RollTable.hrfxfpCam65BL3la description]`

Display the embed without a figure frame
:   `@Embed[RollTable.hrfxfpCam65BL3la inline]`

Exclude the document link citation
:   `@Embed[RollTable.hrfxfpCam65BL3la cite=false]`

Exclude the caption
:   `@Embed[RollTable.hrfxfpCam65BL3la caption=false]`

Place the caption before the table
:   `@Embed[RollTable.hrfxfpCam65BL3la captionPosition=top]`

### Multiple Results for the Same Roll

Sometimes, it's useful to have multiple results happen for a single roll. In this scenario, the Rollable Table returns a set of results that the GM can choose between on the fly. To do this, simply configure your result ranges so that there is an overlap. If a number in the overlapping range is returned, both results are drawn and sent to chat.

The "Teleportation Mishap" hazard table in the D&D 5E SRD 5.2 is a good example of this. When a Gamemaster rolls against the table, the table returns multiple possible outcomes and then the GM picks the one that matches the party's level of familiarity with their destination.

If you have the D&D 5E game system installed, the Teleportation Mishap Rollable Table is located in the  `Compendium Packs` tab under **D&D Modern Content > Roll Tables > Spells > Teleport**.

## API References

To interact with Rollable Tables programmatically, consider using the following API concepts:

* The  [RollTable Document](/api/classes/foundry.documents.RollTable.html " RollTable Document")
* The  [RollTables Collection](/api/classes/foundry.documents.collections.RollTables.html " RollTables Collection")
* The  [RollTableDirectory Sidebar Directory](/api/classes/foundry.applications.sidebar.tabs.RollTableDirectory.html " RollTableDirectory Sidebar Directory")
* The  [RollTableSheet Application](/api/classes/foundry.applications.sheets.RollTableSheet.html " RollTableSheet Application")