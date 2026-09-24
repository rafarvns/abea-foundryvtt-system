---
title: "Compendium Packs"
url: "https://foundryvtt.com/article/compendium/"
category: "Compendium Packs"
---

Your web browser has JavaScript disabled which is required in order to properly use the foundryvtt.com website. Certain website features will be disabled or will not work as expected unless JavaScript is enabled.

This website collects anonymous data about how users interact with our website. This data provides us with
valuable insights that help us to improve our products. Some of these analytics features are non-essential
and use browser cookies.

What data we collect and information on how it is used is described in our
[Privacy Policy](/article/privacy-policy/ "Privacy Policy").

# Compendium Packs

## 

## Overview

Compendium Packs exist to to share data between Worlds, and reduce the strain on worlds that have accrued a large number of actors, items, macros, playlists, rollable tables, or scenes. When these elements are not in use, but are not ready to be deleted, they should be stored in compendia. Compendium Packs help you keep your world organized, reduce clutter, and improve performance for all users.

Compendium packs are also used by Add-on Modules and Game Systems to store large amounts of content which can be unpacked and added to an existing game world, such as part of a premium or exclusive content pack.

With the exception of [Adventure Documents](/article/adventure/ "Adventure Documents"), each Compendium can only contain one type of document: [Actors](/article/actors/ "Actors"), [Items](/article/items/ "Items"), [Journal Entries](/article/journal/ "Journal Entries"), [Macro Commands](/article/macros/ "Macro Commands"), [Playlists](/article/playlists/ "Playlists"), [Rollable Tables](/article/roll-tables/ "Rollable Tables") or [Scenes](/article/scenes/ "Scenes"). Data contained in compendium packs are not loaded for users until they are needed, reducing the amount of data that a particular user must load when first joining a game.

## The Compendium Pack Directory

Compendium Packs in Foundry can be viewed, created, and managed in the Compendium Pack Directory sidebar. Like the Scenes, Actors, and Journal Entries directories, this directory can contain folders to organize your world's compendia, which hold data that you may want to access later but don't need immediately.

Only a Gamemaster or Assistant-level user can change or move folders, but any players with at least Limited permissions on a compendium can see it and the folder(s) containing it in the directory.

#### Sidebar Elements

Create Compendium ()
:   This button creates a new Compendium with the name given and set to contain items of the chosen type. If you do not name the Compendium will be automatically named "New Compendium" with a number appended to it.

Create Folder ()
:   This creates a new folder. For details on how to create and use them please see the [Folders](/article/folders/ "Folders") article.

Filter Compendium Pack ()
:   This lets you select what type of compendium you want to filter for. The selected type will be shown, and all others hidden. You can clear filters from the same button.

Search Compendium Pack ()
:   This searches for and lists any Compendium Pack whose names match the given string of text entered into the search bar.

Toggle Sort Style ()
:   This toggles the sidebar between automatic alphabetic sorting and manual sorting.

Collapse All Folders ()
:   This collapses all folders, showing only the top-level folders and any Compendium Pack not sorted into a folder.

![Compendium Pack Sidebar](https://r2.foundryvtt.com/website-uploads-public/screen/user_1294/compendium-pack-sidebar-2023-06-06.png)

The Gamemaster's view of the Compendium Directory sidebar.

### Creating New Compendium Packs

![Create New Compendium Pack](https://r2.foundryvtt.com/website-uploads-public/screen/user_1294/create-new-compendium-pack-2023-06-06.png)

Creating new Compendium Packs is simple, and a good way to store unused items in your world.

A new, empty, Compendium Pack can be easily created in any World with the following steps:

1. Navigate to the Compendium Packs sidebar tab ().
2. Click the  **Create Compendium** button.
3. Enter a name for the new Compendium Pack (If you don't select a name, it'll be called "New Compendium" with a number appended to it.).
4. Choose the type of Document that will be stored in the Compendium Pack (such as Actors, Items, Journal Entries, etc.).
5. Click  **Create Compendium** to complete the process.

After your compendium has been created, clicking on its name in the sidebar will open a new window that will allow you to manage the content your compendium pack contains.

If you intend to create compendium packs that are part of a module that can work between game worlds, see [Content Packaging Guide](/article/packaging-guide/ "Content Packaging Guide")

If you intend to use your compendium to provide importable adventures with multiple types of document, see [Adventure Documents](/article/adventure/ "Adventure Documents").

#### Compendium Types

There are 3 types of compendium the sidebar will display: world (), module (), and system (). This denotes where the compendium is sourced from. World modules come from the currently loaded world, are commonly user generated, and contain content that pertains to the world specifically. Module packs come from plugin modules (see [Module Management](/article/modules/ "Module Management")), and system compendia come from the world's game system which usually consist of premade content meant for players and gamemasters to use in running their games.

#### Locking Compendium Packs

You can only export folders or otherwise modify compendium packs which are unlocked. A Compendium Pack can be locked or unlocked by right-clicking on it from the Compendium Packs sidebar tab and choosing () and clicking  **Toggle Edit Lock**. This will lock or unlock the chosen compendium. Locked compendia are faded out in the sidebar in addition to having a lock icon displayed on them.

Important: Users should be very careful not to edit the contents of Compendium Packs provided by Game Systems and Modules, as their changes will be lost when the module or system updates.

Compendium Context Menu Options

![Compendium Pack Context Menu](https://r2.foundryvtt.com/website-uploads-public/screen/user_1294/compendium-pack-context-menu-2023-06-06.png)

The Gamemaster's context menu for compendia is accessed by right-clicking any compendium in the directory.

All compendia in the Compendium Directory can be right-clicked to open up a context menu which allows for additional actions used to manipulate them.

Toggle Visibility ()
:   Toggles whether the compendium can be seen by non-GMs.

Toggle Edit Lock ()
:   Toggles on or off the ability to export content to the compendium. While locked the compendium cannot be chosen as an export source for documents.

Duplicate ()
:   Creates a copy of the compendium in the directory. Duplicating stacks is disabled for hands and piles that contain compendia, requiring them to be reset first.

Import Data ()
:   Imports data into the right-clicked compendium from a JSON file on your computer.

Delete ()
:   Deletes the compendium, after accepting a confirmation prompt.

### Exporting Content to Compendium Packs

Within compendium packs that have been unlocked it is possible to add, remove, or edit Documents in order to provide an organized content structure for your users. Compendium packs are alphabetically sorted by default. There are two ways to add content to compendium packs:

Adding Individual Documents to Compendium Packs

Adding individual Documents to a compendium pack is an easy process, supported by a simple drag and drop workflow:

1. Navigate to the Compendium Packs sidebar tab ().
2. Open the compendium you wish to add content to.
3. Be sure your compendium pack is not locked! It is not possible to modify a compendium that is locked.
4. Navigate to the sidebar tab where your Documents are stored.
5. Drag the Document you wish to add to your compendium from the sidebar into the compendium pack.

Adding individual documents to a compendium does not preserve its ID or merge with copies that may already exist in the compendium, each dropped Document will create a new copy in the Compendium Pack.

Adding Folders of Documents to Compendium Packs

![Export Folder to Compendium Example](https://r2.foundryvtt.com/website-uploads-public/screen/user_1294/export-folder-to-compendium-example-2023-06-06.png)

When exporting a folder to a compendium pack there are several options which can be set to control how the content is handled.

If you have already organized content in your world into folders for easy management, it is simple to add that folder worth of content to a compendium pack.

To add a folder of Documents to your compendium:

1. Be sure your compendium pack is not locked! It is not possible to modify a compendium that is locked.
2. Navigate to the sidebar tab where your Documents are stored.
3. Right-click on the folder you wish to add to your compendium.
4. Choose "Export to Compendium" from the context menu.
5. Choose the Compendium Pack that will be used to store your Documents.
6. Optional: choose whether or not you wish to merge the documents with existing documents in the compendium by name, or whether or not you wish to keep the ID of your documents.
7. Click Export Content.

#### Export Options

The following options are available when exporting content to a compendium:

Merge By Name
:   When checked, Foundry VTT will overwrite existing documents that have the same name as one of your exported documents. When it's unchecked Foundry VTT will create new copies of those documents in the chosen compendium pack.This defaults to on.

Keep Document IDs
:   When checked, Foundry VTT will overwrite existing documents in the pack that have the same ID as the items you are exporting documents. This defaults to on.

Keep Folder Structure
:   When checked, Foundry VTT will recreate the folders of the exported content (if necessary) and sort the content into those folders. If toggled off, the content will be placed at the highest level of the compendium, and the fold structure will be ignored. This defaults to on.

#### When to use Compendium Packs

Storing unused Documents in a Compendium **greatly** reduces the time it takes to load your world. Even though each Actor, Item, or other document may be small, as their numbers start to rise into the hundreds the amount of data that must be transferred to each of your players when they join a game can cause your world to slow down over time. It is a best to practice good organization.

### Importing Content from Compendium Packs

If you have existing Compendium Packs and would like to import content from them, there are a variety of ways to do so.

Once content has been imported into a game world it becomes a localized part of that world, and any changes made to the documents in said world will not be reflected in the compendium they came from unless you also export the content back to the compendium, or create a new compendium with the changed documents. This allows you to use compendia as a means to back up things like actors, items, journals, and scenes that you want to keep original, unaltered copies of for reuse later.

It is important to exercise some caution when importing everything a compendium pack might contain, especially if the compendium pack might be storing hundreds of Documents, as this will negatively impact performance in your world if too many of them are imported.

Importing Single Documents From a Compendium

Single item imports of content from a pack is done with the following steps:

1. Navigate to the Compendium Packs sidebar tab ().
2. Click on the Compendium Pack you wish to import from.
3. Either:
   * Drag the Document you wish to import from the compendium into the appropriate Document Sidebar tab (for example, Actors go to the Actor tab.)
   * Right-click on the Document you wish to import and choose 'Import Entry'
   * Click on the document you wish to import to open its sheet, then click Import in the window header bar.

Importing Documents one at a time creates a new copy of that Document, and does not preserve the ID of the original Document. Importing an individual Document will not overwrite existing Documents of the same name.

Importing All Documents From a Compendium

Importing all documents from a Compendium is a great way to quickly add a large number of documents to your world. However, it is important to note that importing all documents from a Compendium can create a large volume of Documents in your world at once, so it should be used with some measure of caution. Importing all Documents allows you to optionally preserve the ID of the original Document, which will overwrite any Documents in the World which have the same ID.

1. Navigate to the Compendium Packs sidebar tab ().
2. Right-click on the Compendium Pack you wish to import from and click Import All Content
.3. In the new dialog that appears, choose a folder name to import the content to.
4. Click  **Export Content** to complete the process.

### Moving Compendium Packs To Other Worlds

Compendia are limited the game world they are created within by default, but it is possible to move them to new worlds or create modules which contain compendium packs for use in other worlds. To learn how to do this, refer to the [Content Packaging Guide](/article/packaging-guide/ "Content Packaging Guide").