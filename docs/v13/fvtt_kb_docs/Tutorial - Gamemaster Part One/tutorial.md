---
title: "Tutorial - Gamemaster Part One"
url: "https://foundryvtt.com/article/tutorial/"
category: "Tutorial - Gamemaster Part One"
---

Your web browser has JavaScript disabled which is required in order to properly use the foundryvtt.com website. Certain website features will be disabled or will not work as expected unless JavaScript is enabled.

This website collects anonymous data about how users interact with our website. This data provides us with
valuable insights that help us to improve our products. Some of these analytics features are non-essential
and use browser cookies.

What data we collect and information on how it is used is described in our
[Privacy Policy](/article/privacy-policy/ "Privacy Policy").

# Tutorial - Gamemaster Part One

## 

## Overview

Foundry Virtual Tabletop is a powerful application with a lot of features, so it can be overwhelming to a new game-master, even if you have previous experience using virtual tabletop software. This article provides a basic introduction to the layout of Foundry VTT and gives you all of the beginning steps required for setting up a game for your players. This article will introduce you to:

* **The Main Menu.** Everyone has to start somewhere, and this is where every user starts with Foundry VTT!
* **Installing game systems.** Game systems contain all the rules and scaffolding needed to run a game and store information about it.
* **Creating (or installing) Game Worlds.** Game worlds take a game system and form a place for all of its data and information to live. Each game world is effectively a self-contained campaign with scenes, characters, items, and similar.
* **Launching Games.** Once a system's installed and a game world is made, you'll want to start it up to see what's inside.
* **The Foundry User Interface.** The user interface for Foundry is fairly straightforward, but it still helps to know what's what!

## The Main Menu

![Foundry VTT Configuration & Setup](https://r2.foundryvtt.com/website-uploads-public/screen/user_671/foundry-vtt-configuration-setup-2023-06-05.webp)

The Configuration and Setup menu of Foundry Virtual Tabletop.

The main menu of Foundry VTT allows for managing of worlds, game systems, modules, and various configuration settings of the software itself.

#### Game Worlds

This panel is the default displayed when Foundry first loads, it contains all of the game worlds you have created to run games in. When Foundry is first launched this list will be empty (as pictured to the right) but will quickly become populated with campaigns for you and your players to adventure in.

#### Game Systems

This panel lists all of the game systems that are currently installed, and allows you to update them to their most current versions if required. Game systems are vital for the creation of game worlds and running game sessions.

#### Add-on Modules

This panel lists all of the modules that are currently installed and available to be used in a game world. This panel also allows you to update modules to their most current version if required. Modules do nothing on their own and must be loaded from within a live game. This tutorial series will not go over modules as they are not required to use Foundry's various tool sets.

#### Configuration

This panel lists various configuration settings that you can use to fine-tune the behavior of Foundry.

When you first launch Foundry Virtual Tabletop, it's recommended that you navigate to the Configuration tab and set an **Administrator Password**. This password is encrypted and allows you to secure Foundry VTT to prevent access to the main setup menu. It's also required to use the **Return to Setup** feature from the login page of any currently hosted world.

#### Updating the Software

This panel allows you to see the current version of Foundry and if a newer version is available. You can update your version of foundry from this menu, and even switch to various test branches, provided that one is currently available.

## Installing a Game System

![The Game System Browser](https://r2.foundryvtt.com/website-uploads-public/screen/user_671/the-game-system-browser-2023-06-05.webp)

Game Systems can be easily installed using the Module Browser.

Before you can create your first world you will first need to install a **Game System**. Game Systems set the rules by which your world operates, whether this is one of the more common rulesets from a major publisher, or if you prefer to use something like the Simple Worldbuilding System. Each world has a **Game System** tied to it. Without one installed, it is impossible to create a world.

Foundry VTT provides a package installation system available from the Setup screen for the installation of **Game Worlds**, **Game Systems**, and **Add-on Modules**. The "Install System" button at the bottom of each of these tabs on the Setup screen will allow you to install the package type for that tab.

#### The Game System Installation Menu

1. From the **Setup** screen navigate to the Game Systems tab
2. Click the "**Install System**" button at the bottom of the menu
3. A package installation browser will appear allowing you to see all of the Game Systems currently available for Foundry VTT
4. You can search this listing with the search field, or filter the listing using package categories
5. Once you have chosen a Game System, click the install button to the right of the system's name, and FVTT will download and install it for you

Game Systems which have not yet been officially released can also be installed manually if you have a link to the `system.json` file (called the **manifest** url) for that system, by pasting the URL into the Manifest URL field and clicking the install button.

#### Updating Game Systems

As a reminder, it is wise to periodically update installed systems from the Game System tab of the main Foundry VTT menus. You can update game systems individually by clicking the associated "check update" button in the system's entry, or use the "update all" button at the bottom of the tab to check all of your installed systems for updates, which will then be automatically applied if one is available.

#### About Modules

It is a common pitfall for some users to rush immediately to install Add-on Modules without first learning to use the basic features of Foundry VTT. While modules provide a large variety of customization and changes to the way core Foundry VTT features work, they can carry with them some compatibility issues and should be installed in small increments to allow you to be certain which features were added by community-supported modules and which features are part of the core software.

Always remember, the first step in troubleshooting any issue you may experience in Foundry VTT is to disable all modules.

## Creating A New World

![The World Configuration Sheet](https://r2.foundryvtt.com/website-uploads-public/screen/user_671/the-world-configuration-sheet-2023-06-05.webp)

The World configuration sheet allows you to specify the details of your Game World and edit them later.

Now that you have a **Game System**, navigate to the **Game Worlds** tab, from here you will create your very first Game World! Clicking the "Create World" button on this tab presents a dialog menu.

#### Editing an Existing World

The **Edit Game World** button can be used at any time after a world has been created, allowing you to display this menu again in order to change details about your game world such as the description, next session, background image, or title! It can also be used to **reset active modules** or **reset user access keys** without having to launch the world first. If you are having trouble launching your world or logging in, simply edit the world and check the appropriate box to reset modules or user access keys as necessary.

#### The Create World Menu

World Title
:   The title that players will see when logging in to the game, and how the world will be referred to in the user interface.

Data Path
:   The folder name within the Worlds folder where your data will be stored. As this will be used in web URLs, it **cannot contain spaces or special characters**, use hyphens to separate multiple terms instead. (Example: **my-first-campaign** is better than **"my first campaign"**.)

Game System
:   The ruleset the world will use. A game system cannot be changed once the world is created, so be sure you are using the correct system.

Background Image
:   An image that you and your players will see when logging in to the Game World for a session. This image will be stretched to fit the browser window, so it is recommended that you use an image that is at least large enough to function as a desktop wallpaper.

Next Session
:   Allows you to set the date and time for the next game session, and will be visible to any players from the login screen for your Game World. This is purely optional. The date and time is automatically localized to the user's correct time zone.

World Description
:   Provides a text description for your world, allowing for some additional thematic information or a brief description for your setting, current plot points, or other information your players will see when logging in.

Once you have filled out these fields to your liking, click Create World to finalize your Game World!

## Installing a Game World

Foundry VTT offers a number of adventures and campaigns which come already prepared with everything you need to run them with your players. Similar to the installation of Game Systems, these worlds can be installed from the Game Worlds tab and will automatically install all content, including the Game System for you.

#### The Game World Installation Menu

1. From the **Setup** screen, navigate to the Game Systems tab
2. Click the "**Install World**" button at the bottom of the menu
3. A package installation browser will appear allowing you to see all of the Game Worlds currently available for Foundry VTT
4. You can search this listing with the search field, or filter the listing using package categories
5. Once you have chosen a Game World, click the install button to the right of the World's Title, and FVTT will download and install it for you

As with Game Systems, Game Worlds which have not yet been officially released can also be installed manually using the `world.json` Manifest URL field.

## Finding Installed Worlds, Systems, and Modules

![Filter Packages Demo](https://r2.foundryvtt.com/website-uploads-public/screen/user_671/filter-packages-demo-2023-06-05.webp)

A filtered view of the game worlds tab.

When you've created a number of worlds or installed multiple systems and modules it can be difficult to find one specifically. To quickly get access to a specific package you can use the Filter input in the top-right of each tab. Just start typing the name of the package you're looking for and the list will narrow down to show only items that match. If there are no matching packages in that tab you'll see a 'No packages matched your filter.' message and you may want to check the package installer to download it.

## Launching Your New World

![Game Worlds - User Login Screen](https://r2.foundryvtt.com/website-uploads-public/screen/user_671/game-worlds-user-login-screen-2023-06-05.webp)

The world login screen allows you to log into an active game world or return to setup.

Once your Game World has been created, simply clicking the "Launch World" button to the right of the world's Title will launch it the world and take you to the game's login screen. From here you can select the username to log in as (by default all worlds begin with a single gamemaster account without a password) or return to the setup menu.

**Returning to Setup:** If you want to go back to the setup menus from the log in page, you can click the  **Return to Setup** option to close down the world and return to the main setup menus for Foundry VTT. If you have an admin password set for your software you will need to provide it to use this option.

**Select the gamemaster player, and log in.**

## Introduction to the UI

![GM UI Map](https://r2.foundryvtt.com/website-uploads-public/screen/user_671/gm-ui-map-2021-01-27.jpg)

This UI map describes the primary interface elements you will first encounter in a newly created world.

Once you have joined the game session, you'll see the core user interface which you and your players will use to plan and play games in FVTT. The image below details the major elements.

Scene Navigation Bar
:   Used to switch between currently available scenes.

Sidebar Tabs
:   Used to access data for the various documents stored in your world.

Game Pause Indicator
:   When the game is paused a rotating clock will appear. While paused, players may not move their tokens or manipulate doors.

Layer Controls
:   Used to switch layers on your [Scenes](/article/scenes/ "Scenes") to control the various placed canvas objects. Each of these control layers provide a different set of layer tools. The available control layers that players can use include:

Tool Menu

Basic Controls ()
:   Contains all of the tools needed for selecting and controlling [Actors](/article/actors/ "Actors").

Measurement Controls ()
:   Contains the tools needed to use [Measurement and Templates](/article/measurement/ "Measurement and Templates").

Tile Controls ()
:   Tools for creating, editing and managing [Tiles](/article/tiles/ "Tiles").

Drawing Controls ()
:   Tools needed for creating, editing, and managing [Drawing Tools](/article/drawings/ "Drawing Tools").

Wall Controls ()
:   Tools needed for creating, editing, and managing [Walls](/article/walls/ "Walls").

Lighting Controls ()
:   Tools needed for creating, editing, and managing [Lighting](/article/lighting/ "Lighting").

Ambient Sound Controls ()
:   Tools needed for creating, editing, and managing [Ambient Sounds](/article/ambient-sound/ "Ambient Sounds").

Journal Notes ()
:   Tools needed for creating, editing, and managing [Journal Entries](/article/journal/ "Journal Entries").

Directory Sidebars

Chat Log ()
:   This tab displays current [Chat Messages](/article/chat/ "Chat Messages") and dice rolls, and allows users to send their own messages.

Combat Tracker ()
:   This tab displays any currently active [Combat Encounters](/article/combat/ "Combat Encounters"), showing initiative and the order of combat.

Actors ()
:   This tab contains [Actors](/article/actors/ "Actors") which players will use to keep track of their characters.

Items ()
:   This tab stores information sheets for [Items](/article/items/ "Items"), which can be anything from weapons and armor to spells and abilities.

Journals ()
:   This tab stores [Journal Entries](/article/journal/ "Journal Entries") and journal pages which contain lore and information that players can read and edit.

Roll Tables ()
:   This tab contains [Rollable Tables](/article/roll-tables/ "Rollable Tables") which can be used to roll for determining randomized outcomes from a lists of results.

Playlists ()
:   This tab grants access to the global volume settings, and [Playlists](/article/playlists/ "Playlists") director which shows currently playing audio.

Card Stacks ()
:   This tab grants access to the [Cards](/article/cards/ "Cards") sidebar, which stores card decks, hands, and piles which users will need to use cards.

Compendium Packs ()
:   Grants access to the [Compendium Packs](/article/compendium/ "Compendium Packs") sidebar, which stores documents that are not actively needed. Most players will not need to access this panel.

Settings ()
:   Opens the [Game Settings](/article/settings/ "Game Settings") sidebar, which allows for the configuration or customization of your Foundry VTT experience.

Export Chat Log ()
:   This button is used to save a copy of all messages which presently appear in your chat log to a plain text file.

Clear Chat Log ()
:   This button deletes all messages from the chat log.

#### Conclusion of Part 1

This concludes part one of the Getting Started Tutorial!

* Continue to [Tutorial - Gamemaster Part Two](/article/tutorial-two/ "Tutorial - Gamemaster Part Two").
* Refer your players to the [Tutorial - Player Orientation](/article/player-orientation/ "Tutorial - Player Orientation").