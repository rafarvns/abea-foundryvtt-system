---
title: "Game Worlds"
url: "https://foundryvtt.com/article/game-worlds/"
category: "Game Worlds"
---

Your web browser has JavaScript disabled which is required in order to properly use the foundryvtt.com website. Certain website features will be disabled or will not work as expected unless JavaScript is enabled.

This website collects anonymous data about how users interact with our website. This data provides us with
valuable insights that help us to improve our products. Some of these analytics features are non-essential
and use browser cookies.

What data we collect and information on how it is used is described in our
[Privacy Policy](/article/privacy-policy/ "Privacy Policy").

# Game Worlds

## 

## Overview

A Game World is an instance of a system with a cohesive data structure that allows for playing a tabletop game in Foundry VTT. Game worlds require a game system to be created. This article will familiarize you with the aspects of the game world menus: creating, installing, and editing. It will also discuss launching worlds, enabling safe mode, and deleting worlds.

If you are new to Foundry Virtual Tabletop and want help setting up your first game, we strongly recommend starting with: [Tutorial - Gamemaster Part One](/article/tutorial/ "Tutorial - Gamemaster Part One")

## The Game Worlds Tab

The Game Worlds tab on the main menu of the Foundry Virtual Tabletop software lists all game worlds that presently exist and allows them to be manipulated or launched. Worlds are sorted in order of how recently they were last launched, with the most recent at the top of the tab. When Foundry VTT is first installed, there will be no worlds available. However, new worlds can be created or installed easily from the Game Worlds tab using the appropriate buttons.

Foundry VTT provides access several exclusive and community-sourced premade worlds that are already set up and prepared for play. While these worlds serve as an example of what a campaign world may look like when prepared, [Adventure Documents](/article/adventure/ "Adventure Documents") provide a much more robust way to distribute the premade content of an adventure. It is recommended that users seeking to distribute their own adventures use Adventure Documents instead of Game World packages.

Installing Premade Worlds ()

![gameworld-browser](https://r2.foundryvtt.com/website-uploads-public/screen/user_6987/gameworld-browser-2023-05-02.webp)

The premade worlds browser allows you to select from a list of game worlds already configured for immediate play.

To install a premade world:

1. click the Install World button
2. locate a world you would like to install from the list
3. click the install button to the right of its entry

**Note:** You may also need to install the game system that is meant to be used with this game world before you will be able to launch it.

Creating New Worlds ()

![gameworld-createworld](https://r2.foundryvtt.com/website-uploads-public/screen/user_6987/gameworld-createworld-2023-05-02.webp)

The 'create world' window allows you to create a new world with a game system of your choice.

The Create New World dialog has the following entries which determine different aspects of the game world. Not all of these items can be changed once the game world has been created.

World Title
:   This is the human-readable name of the world which appears at the top of every world entry in the game worlds tab of the main menu. This field is required, and can be changed later by editing the world after it is created.

Data Path
:   This is the folder name for where the game world's data is stored. As the create game world menu shows, this will be located in your foundry Data/worlds folder. This field is required and cannot be changed after the game world is created.

Game System
:   This is the game system tied to the game world. The system determines the data schema used in the world to store, categorize and utilize information on characters, items, and similar items unique to the game itself. This is required for a game world, and cannot be changed once the game world is created. If the system that you would like to use does not appear in the list, make sure that you have installed it first.

Background Image
:   This is the image that is used on the game world's Join Page once the world has been launched. It's recommended that you use 1920x1080 or larger images for best appearance, but any web safe image format and resolution will work here. This field is optional and can be changed later by editing the world after it's created.

Join Page Theme
:   This field allows you to customise the appearance of your world's Join Page (described below). There are two options- "Default" and "Minimal". You can change this selection by editing the world after it has been created.

Next Session
:   This field allows you to determine the next time your game will run. You can manually enter the next game day, or click the calendar button to open a drop down calendar to select the specific date. This date will be shown to all users on the join page when the game is loaded. You can also manually enter the time of day that the game is played, or click the clock to open a drop down clock to select the game session time. Both of these fields are optional, and can be changed later by editing the world after it's created.

World Description
:   This text box allows you to create a description of the game world, its themes, house rules, or to provide messages to your players when they are logging in to the game. You can see this text on the Worlds tab of the main Foundry menus, as well as the Join Page when the game world has been launched. This field is optional, and can be changed later by editing the world after it is created.

![gameworld-setup](https://r2.foundryvtt.com/website-uploads-public/screen/user_6987/gameworld-setup-2023-05-02.webp)

The main menu tab of Foundry Virtual Tabletop where game worlds are listed (when created).

### Game Worlds

Once created, individual game worlds appear in the list on the Game Worlds tab, and can be configured, launched, and deleted from there. By default, a world will appear as a tile whose background is a thumbnail image overlaid with the world's name and some additional information.

In addition to the default Tile view, the worlds list offers two additional views- Gallery and List. You can change between them by using the appropriate buttons at the top right hand side of the tab body. Please note that for all images and instructions within this article, the Tile view was used as a reference.

Context Menu Options

![gameworld-contextmenu](https://r2.foundryvtt.com/website-uploads-public/screen/user_6987/gameworld-contextmenu-2023-05-02.webp)

Right click on a Game World to bring up its context menu.

By right-clicking on a Game World , you can open a context menu which offers several additional options.

Launch World ()
:   This option launches the world, as described under the "Launching Worlds" header.

Edit World ()
:   This option opens the "Edit World" window, as described under the "Editing Worlds" header.

Mark Favorite / Unfavorite ()
:   This option adds a star icon to the world's tile and pins it to the top of the list. You can also unfavorite the world from the context menu, if it is already favorited.

Lock/Unlock World ()
:   This option adds a padlock icon to the world's tile and prevents it from being edited or (if it was downloaded from the package browser) updated. This is helpful in order to prevent your data from being overwritten. You can also unlock your world from the context menu, if it is already locked.

Delete World ()
:   This option opens the Delete World window, as described under the "Deleting Worlds" header.

World Icons

Certain icons can provide users useful information or warnings before they launch the world. The possible flags are listed below.

Compatibility Risk ()
:   The compatibility risk flag indicates that a module or system developer has not verified this package works in your current version of Foundry VTT. This does not mean that the module or system will not work, though it may experience errors. If your modules indicate compatibility risk, it is important to be cautious and watch for any issues or problems that may arise.

Compendium ()
:   The compendium flag indicates that the game world contains at least one compendium.

Core Version ()
:   The core version flag indicates the version of Foundry VTT that the world was initially created with.

Requires System Update ()
:   The requires system update flag indicates the system attached to this world is missing, damaged or so out of date that the game world may not properly launch.

Locked ()
:   The Locked icon is a padlock. It appears in the top right corner of the tile, and indicates that the world has been locked via the context menu.

Favorite ()
:   The Favorite icon is a star. It appears in the top right corner of the tile, and indicates that the world has been marked as a favorite via the context menu.

![gameworld-icons](https://r2.foundryvtt.com/website-uploads-public/screen/user_6987/gameworld-icons-2023-05-02.webp)

A world as it appears in Tile View, with icons denoting the locked and favorited statuses.

### Launching Worlds

![gameworld-joinscreen](https://r2.foundryvtt.com/website-uploads-public/screen/user_6987/gameworld-joinscreen-2023-05-02.webp)

The world's Join Page allows you to log into an active Game World or return to setup.

To launch a Game World, click on it in the list or right-click and select "Launch World" from the context menu.

Launching a world begins the process of creating a server with a live game for your players to connect to. Once a world is launched, the Join Page will be available for players to join the game from. It will display the world title, background image, next session, session time, and world description.

Users can select the user account they want to log in with, which may require a password, depending on how a game master has configured the users in the game world.

By default all newly created worlds begin with a single Gamemaster user account without a password. Additional users can be added after logging in. For more on creating users and managing their permission levels see the [Users and Permissions](/article/users/ "Users and Permissions") article. Please note that attempting to log in to a user account using a password when the account itself doesn't have a password will produce a false "wrong password" response. To log into a user account that has no password, leave the password field blank.

##### Return to Setup

From the Join Page you can use the  **Return to Setup** option to close down the world and return to the main setup menus for Foundry VTT. Doing this will log out all users currently in the active game world. If you have an admin password set for your software you will need to provide it to use this option, unless you previously logged in as an Admin, at which point the server will automatically recognize you.

In addition to these options, Foundry VTT allows you to set a world as your default from the Application Configuration settings. This will cause Foundry VTT to launch straight into that world, bypassing the main menu entirely. You can read more about this feature and how to enable it on the [Application Configuration](/article/configuration/ "Application Configuration") article.

### Editing Worlds

![gameworld-editworld](https://r2.foundryvtt.com/website-uploads-public/screen/user_6987/gameworld-editworld-2023-05-02.webp)

The Edit World dialog allows you to change certain aspects of the game world after it has been created.

To edit a world, select  **Edit World** from the world's context menu.

Once a world has been created, it will be placed into the list of available game worlds in the Game World tab of the Foundry main menus. The **Edit World** button opens the edit world dialog which allows you to change certain details about the game world such as the title, background image, next session date and time, and the world description.

The Create World and Edit World windows contain many of the same options. However, do note that you cannot change the game data path or game system once a Game World has been created.

##### Reset User Passwords

When this option is toggled the associated world will have all of the user passwords reset, including any gamemaster level users. This is useful for regaining access to a game world where passwords have been forgotten or lost.

To set new passwords you will need to launch the game world and enter the user management menu. You can find more information on user configuration in the [Users and Permissions](/article/users/ "Users and Permissions") article.

##### Launch in Safe Configuration

It is possible to launch a world with a "Safe Configuration" to circumvent issues which might be preventing a world from loading correctly. To do this, edit the game world and enable the Launch in Safe Configuration setting, then launch the world.

When Safe Configuration is toggled on, the next time the game world is launched the following effects will be applied to it:

* Disable all active modules.
* Deactivate all scenes.
* Stop all previously playing audio.

Once a world has been launched with this setting enabled, it will automatically be turned off. This setting is especially useful for troubleshooting worlds in which bad assets, scripts, or corrupted data is preventing a game world from loading.

### Deleting Worlds

![gameworld-deleteworld](https://r2.foundryvtt.com/website-uploads-public/screen/user_6987/gameworld-deleteworld-2023-05-02.webp)

The delete world confirmation box.

To delete a world, select the  **Delete World** option in the context menu.

Clicking the Delete World button will bring up a prompt to delete the world and all of its data. The process of deleting worlds includes verification to prevent accidental deletion of a game world, and requires a user to type the title of the game world into the text field before it will allow the user to click the Yes button and complete the process.

**Please note: This process cannot be undone.**