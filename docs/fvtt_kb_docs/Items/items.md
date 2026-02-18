---
title: "Items"
url: "https://foundryvtt.com/article/items/"
category: "Items"
---

Your web browser has JavaScript disabled which is required in order to properly use the foundryvtt.com website. Certain website features will be disabled or will not work as expected unless JavaScript is enabled.

This website collects anonymous data about how users interact with our website. This data provides us with
valuable insights that help us to improve our products. Some of these analytics features are non-essential
and use browser cookies.

What data we collect and information on how it is used is described in our
[Privacy Policy](/article/privacy-policy/ "Privacy Policy").

# Items

## 

## Overview

Foundry Virtual Tabletop uses the concept of items, for objects that have their own statistics and information and can then be associated with or used by actors. When an Item is added to an Actor, it becomes an "Embedded Document" which is called an Owned Item. These Owned Items appear in the Actor sheet and, depending on the system, can be used by the actor.

This page provides an overview on Items, their function, the Items Directory, how to give items to actors, and how to import items from compendiums or json files.

## The Items Directory

![Items Directory](https://r2.foundryvtt.com/website-uploads-public/screen/user_1294/items-directory-2022-08-04.png)

The Gamemaster's view of the Items Directory sidebar.

Items in Foundry can be viewed, created, and managed in the Items Directory sidebar. Like the Scenes, Actors, and Journal Entries directories, this directory can contain folders to organize your world's items. Only a Gamemaster or Assistant-level user can change or move folders, but any players with at least Limited permissions on an item can see the item and the folder(s) containing it in the Items Directory. The specifics of this sheet depends on the system being used.

#### Sidebar Elements

Create Item ()
:   This button creates a new item with the name given. If you do not name the item will be automatically named "New Item" with a number appended to it.

Create Folder ()
:   This creates a new folder. For details on how to create and use them please see the [Folders](/article/folders/ "Folders") article.

Search Items ()
:   This searches for and lists any items whose names match the given string of text entered into the search bar.

Collapse All Folders ()
:   This collapses all folders, showing only the top-level folders and any items not sorted into a folder.

### Creating New Items

To create a new item, click the  **Create Item** button in the Item Directory sidebar. This will create a dialog box prompting you to name your item. Depending on the system you are using, it may also give you the option to determine the type of item it is, such as a weapon, armor, or consumable. Once you have name your item and selected its type (if necessary), click Create New Item.

This will add your item to the directory sidebar, and open the item's sheet for you to edit and fill out. Depending on the system you are using, you may be able to define quite a lot about the item here, adding anything from art to descriptions, to abilities, attribute changes, special powers, resources, and the like. Once you are done editing your item, you can close the item window. All created items can be found in the Items Directory.

To edit an item after you've created it, you only need to navigate to the Items Directory and click on the item you want to edit, this will reopen the item sheet for editing.

### Adding Items to Actors

To give an item to an actor, open the actor's character sheet, then drag an item from the Items Directory to the character sheet. Depending on the system being used and the character sheet design, it may add the item to the actor's inventory, feature set, or otherwise appropriate section.

When an item is dragged from the directory onto an actor's sheet creates a copy of the item as an "Owned Item." This owned item is separate from the original item, and any changes made to the original item will not affect the owned item, and vice versa. Owned items are not accessed from the Items Directory, instead they can only be viewed and changed through the actor's sheet.

Importing Pre-configured Items

When a new World is first created, the Items Directory will initially be empty. Though items can be created fairly quickly from scratch, it may be desirable to import items from pre-configured sources. This can be done in one of two ways: by importing items from a compendium pack, or by importing item data directly from an external JSON file.

#### Importing from Compendium

An item can be imported from a compendium by either dragging the item from the compendium into the Items Directory, or by right-clicking the item in the compendium and selecting "Import". For more information on compendia and how to use them, see the [Compendium Packs](/article/compendium/ "Compendium Packs") article.

#### Importing from JSON files

If you have exported items that you would like to bring into a game world you can do so by loading the item info directly from a JSON file. This can be accomplished by right-clicking an item in the Directory and selecting "Import Data." This will open a file browser that allows you to select the desired JSON file to import. Once selected the JSON file's data overwrite the existing item you imported the data into.

You can export an item's data by right-clicking an item in the Directory and selecting the "Export Data" option. This will prompt you to save a JSON file with the item data in it.

Item Context Menu Options

![Items Sidebar Context Menu](https://r2.foundryvtt.com/website-uploads-public/screen/user_1/items-sidebar-context-menu-2020-05-19.png)

The Gamemaster's context menu for an item is accessed by right-clicking the item in the directory.

All items in the Item Directory can be right-clicked to open up a context menu which allows for additional actions used to manipulate items.

View Item Artwork ()
:   Views the item's artwork in new window.

Clear Folder ()
:   Removes the item from all folders, placing it at the top level of the Items directory.

Delete ()
:   Deletes the item, after accepting a confirmation prompt.

Duplicate ()
:   Creates a copy of the item in the directory.

Configure Permission ()
:   Configure the permission levels of the item, allowing players of your choice to view or modify the item in the directory.

Export Data ()
:   Exports the item's data as a JSON file on your computer.

Import Data ()
:   Imports data into the right-clicked item from a JSON file on your computer.

## API References

To interact with Item documents programmatically, you will primarily use the following API concepts:

* The  [Item Document](/api/classes/foundry.documents.Item.html " Item Document")
* The  [Items Collection](/api/classes/foundry.documents.collections.Items.html " Items Collection")
* The  [ItemSheet](/api/classes/foundry.applications.sheets.ItemSheetV2.html " ItemSheet") Application