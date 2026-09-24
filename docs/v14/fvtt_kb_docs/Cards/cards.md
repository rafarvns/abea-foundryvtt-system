---
title: "Cards"
url: "https://foundryvtt.com/article/cards/"
category: "Cards"
---

Your web browser has JavaScript disabled which is required in order to properly use the foundryvtt.com website. Certain website features will be disabled or will not work as expected unless JavaScript is enabled.

This website collects anonymous data about how users interact with our website. This data provides us with
valuable insights that help us to improve our products. Some of these analytics features are non-essential
and use browser cookies.

What data we collect and information on how it is used is described in our
[Privacy Policy](/article/privacy-policy/ "Privacy Policy").

# Cards

## 

## Overview

This article covers all of the basics of playing cards, the types of card stacks which can be created by default, and some of the fundamental features that can be used to interact with decks of cards for gameplay. It's important to note that while the implementation of playing cards for Foundry VTT is somewhat basic in its provided functionality, it is designed to allow Game Systems and Modules to customize appearance and functionality to better suit whichever game the cards are being used to play.

#### Folders

This directory can contain folders to organize your world's card decks. For details on how to create and use them please see the [Folders](/article/folders/ "Folders") article.

This article will detail the features of card stacks, how to create them, and configure them.

## The Card Stack Directory

![Cards Sidebar Directory](https://r2.foundryvtt.com/website-uploads-public/screen/user_1294/cards-sidebar-directory-2022-11-08.png)

The Gamemaster's view of the Card Stack Directory sidebar.

Card Stacks in Foundry can be viewed, created, and managed in the Card Stacks Directory sidebar. Like the Scenes, Items, and Journal Entries directories, this directory can contain folders to organize your world's card stacks. Only a Gamemaster or Assistant-level user can change or move folders, but any players with at least Limited permissions on an card stack can see the card stack and the folder(s) containing it in the Directory.

Card stacks in Foundry VTT can be viewed, created, and managed from the Cards Directory Sidebar tab. Gamemasters, Assistants, and other players with permissions to view card stacks can do so by clicking on a card stack in the Cards Directory. This opens the Card stack sheet, and displays any cards the stack may contain. This sheet may appear differently from screenshots if the system or a module being used modifies how cards appear and function.

#### Sidebar Elements

Create Card Stack ()
:   This button creates a new card stack with the name given. If you do not name the card stack it will be automatically named "New Card Stack" with a number appended to it. You will also need to select the type of card stack you want to create from the list options. Each behaves slightly differently, and are explained below.

Create Folder ()
:   This creates a new folder. For details on how to create and use them please see the [Folders](/article/folders/ "Folders") article.

Search Items ()
:   This searches for and lists any card stacks whose names match the given string of text entered into the search bar.

Collapse All Folders ()
:   This collapses all folders, showing only the top-level folders and any card stacks not sorted into a folder.

### Creating and Editing Card Stacks

To create a new Card Stack, click the  **Create Card Stack** button, this will create a dialog box prompting you to name your card stack. You must also determine the type of card stack you are creating, such as a deck, hand, or pile. Once you have named your stack and selected its type, click Create New Card Stack.

This will add your card stack to the directory sidebar, and open its sheet for you to edit and fill out. Once you are done editing your card stack you can close the window, the changes will be automatically saved. Note that the options you have available on this card stack sheet may be modified by the game system you are using, and may not match the defaults detailed here.

#### Card Stack Types

Deck
:   A collection composed of playing cards which can be dealt to drawn from by card hands. A deck contains options to create and manage the cards stored within it, as well as additional options for shuffling, dealing, or resetting the deck.

Hand
:   A collection of playing cards intended to be held by a particular player. Hands contain options to draw cards, or pass them to another hand or pile.

Pile
:   A collection of playing cards sourced from decks and hands, such as a pile of played or discarded cards. Card piles contain options to shuffle cards or pass them to another pile.

#### Default Sheet Configuration

The Card Stack Sheet button () allows you to set which sheet template you want to use for the current card stack, or all card stacks of the same type. Card Stack sheets can change how the card stack's data is displayed and what can be edited.

Most systems will include one sheet template for all card stacks of a single type (deck, hand, pile, etc.) but some may add extra versions. Add-on modules may provide additional options as well.

Importing Pre-configured Card Stacks

When a new World is first created, the Card Stacks Directory will initially be empty. Though card stacks can be created fairly quickly from scratch, it may be desirable to import card stacks from pre-configured sources. This can be done in one of two ways: by importing card stacks from a compendium pack, or by importing card stack data directly from an external JSON file.

#### Importing from Compendium

An card stack can be imported from a compendium by either dragging the card stack from the compendium into the Card Stacks Directory, or by right-clicking the card stack in the compendium and selecting "Import". For more information on compendia and how to use them, see the [Compendium Packs](/article/compendium/ "Compendium Packs") article.

#### Importing from JSON files

If you have exported card stacks that you would like to bring into a game world you can do so by loading the card stack info directly from a JSON file. This can be accomplished by right-clicking an card stack in the Directory and selecting "Import Data." This will open a file browser that allows you to select the desired JSON file to import. Once selected the JSON file's data overwrite the existing card stack you imported the data into.

You can export an card stack's data by right-clicking an card stack in the Directory and selecting the "Export Data" option. This will prompt you to save a JSON file with the card stack data in it.

### Adding Cards to Card Stacks

If you do not use a preset deck, you will need to create each card in your deck individually. After creating a Deck, you can click the "add" option in the header which will prompt you for the name of the new card, once entered it will also provide you with an editing window for the card, allowing you to set a variety of fields such as the suit, type, value, dimensions, number of faces and their related images, images to use and much more.

Card Configuration Options

![Card Editor](https://r2.foundryvtt.com/website-uploads-public/screen/user_671/card-editor-2021-12-18.jpg)

The Card Editing screen is used to add new cards to a deck.

#### Card Details

Type
:   Allows you to select what type of card this should represent. By default there is only a basic playing card, but modules and systems can expand these types.

Suit
:   The name of the suit that this card belongs to. A deck can have any number of suits desired, or none at all.

Value
:   The numerical value of the card. This is part of the base card type.

Dimensions
:   The dimensions of the card and its rotation in degrees. This is not used by default, but can be used by game systems and modules.

Description
:   A text description of the card or its contents.

#### Card Face

Face
:   This determines the current face being used by the card. Cards can have multiple faces (using the  button to add a new face). Each face has a name, image, and text description.

Face name
:   The alphanumeric name of the face.

Face Image
:   A file path to the face's image file.

Face Text
:   A text description of the card and what its face contains.

#### Card Back

Back name
:   The alphanumeric name of the face.

Back Image
:   A file path to the back's image file.

Back Text
:   A text description of the card and what its back contains.

#### Deck Presets

Foundry Virtual Tabletop comes with two pre-configured standard 52-card poker decks, and also includes images for the jokers, though they must be added separately. When creating a deck, you can select either Poker Deck (Dark) or Poker Deck (Light) to generate a poker deck with those cards ready to play.

Other modules and game systems may add new deck presets which can be used when creating a deck.

## Using Card Stacks

Once a deck of cards has been created, cards can be dealt to hands, drawn from decks by hands, and passed to piles or hands. These actions are shared by most of the

### Moving Cards

Cards can be moved between hands, piles and decks in any of the following ways:

Deal
:   Opens a dialog prompt which asks how many cards to deal, what method to use for drawing cards, which card stacks will receive the cards, and whether they will be dealt face down or not. Pressing Deal in this dialog will pass the number of cards out to each selected card stack, marking each card as Drawn in the Deck.

Play
:   Each card has a "play" button which, when pressed, will prompt you to select a Card Stack to receive the played card.

Draw
:   Pressing the draw button presents a dialog box which allows selection of the deck to draw from, the number of cards you would like to draw, the mode to use for drawing, and whether to draw the cards face down or not.

Pass
:   The pass button allows you to move a number of cards from the pile to a chosen card stack, and its dialog prompt allows you to choose which stack will receive the cards, how many will be moved, the draw mode, and whether they are facedown or not.

Dealing Cards

![Card Deal Dialog](https://r2.foundryvtt.com/website-uploads-public/screen/user_671/card-deal-dialog-2021-12-17.jpg)

The Deal Cards dialog can be used to deal cards to specific players from a Deck.

Opens a dialog prompt which asks what hands or piles should receive cards, how many cards to deal to the selected recipients, and what method to use for drawing cards. Additionally, you can choose to have cards dealt face down, which causes the card backs to be shown to the recipient instead of the card faces.

Pressing Deal in this dialog will pass the number of cards out to each selected card stack, marking each card as Drawn in the Deck. You must have at least one recipient for the deal for this action to complete.

Drawing and Passing Cards

![Card Pass Dialog](https://r2.foundryvtt.com/website-uploads-public/screen/user_671/card-pass-dialog-2021-12-17.jpg)

The Pass Cards dialog can be used to pass cards from one Card Stack to any other card stack.

Opens a dialog prompt which asks how many cards should be drawn from a deck, or passed to a card stack(or hand), and what draw method to use. Additionally, you can choose to pass or draw cards face down, which displays their back image instead of face images. Pressing Deal in this dialog will pass the number of cards out to each selected card stack.

One one source or recipient can be chosen at a time when passing cards or drawing cards.

Playing Cards

![Card Play Dialog](https://r2.foundryvtt.com/website-uploads-public/screen/user_671/card-play-dialog-2021-12-17.jpg)

The Play Card dialog can be used to play a single card, moving it to a different Card Stack.

Cards can be played from either Card Piles or Card Hands, allowing them to be passed to new destination which must be another pile or hand in the game world. Cards cannot be played to themselves.

To play a card click the play card () button. This will open the play card dialog, which will display the card's face art and allow you to select the destination of the card, as well as whether that card should be delivered face up, or face down (displaying is back art instead of face).

#### Draw Mode

When cards are drawn, one of three draw modes can be select: Top (first), Bottom (last) or Random.

The Top draw mode takes the highest cards in the stack list first, in order, while the Bottom draw mode starts with the last card in the list. The random draw mode ignores the order of the cards in the stack being drawn from and randomly selects cards from all available options.

### Card Stack Actions

Each of the different card stack types have different actions available to them in addition to being able to play, pass, deal or draw cards as explained in the above section.

Card Deck Actions

From the **Configuration** tab of the deck screen you can set the default back image used for any cards taken from this deck, and set a description of the deck itself.

![card-deck-view.jpg](https://r2.foundryvtt.com/website-uploads-public/screen/user_671/card-deck-viewjpg-2021-12-17.jpg)

The Deck interface can be used for managing cards within the deck, dealing, shuffling and more.

![Card Deal Dialog](https://r2.foundryvtt.com/website-uploads-public/screen/user_671/card-deal-dialog-2021-12-17.jpg)

The Deal Cards dialog can be used to deal cards to specific players from a Deck.

If a Card Stack is set to the type "Deck" you may perform any of the following actions from its **Cards** tab.

Add Card
:   Located in the upper-right of the card tab, this button allows you to create a new card that will be part of this deck (see Adding Cards above)

Shuffle
:   Re-orders the cards contained within the pile at random. This affects the order in which they are drawn when being passed to another stack when using the top or bottom draw methods.

Deal
:   Opens a dialog prompt which asks how many cards to deal, what method to use for drawing cards, which card stacks will receive the cards, and whether they will be dealt face down or not. Pressing Deal in this dialog will pass the number of cards out to each selected card stack, marking each card as Drawn in the Deck.

Reset
:   Resetting a pile sends all cards in the pile back to the deck they originated from.

Save
:   Saves any changes made to your card stack's configuration.

Card Hand Actions

![Card Hand View](https://r2.foundryvtt.com/website-uploads-public/screen/user_671/card-hand-view-2021-12-17.jpg)

The Hand interface can be used for managing cards within a players hand, drawing, playing, or passing cards.

Card Stacks set to the type "Hand" are allowed to play cards, draw new cards, or pass cards, and are meant to represent a player's hand of usable cards, such as in a poker game.

Play
:   Each card has a "play" button which, when pressed, will prompt you to select a Card Stack to receive the played card.

Draw
:   Pressing the draw button presents a dialog box which allows selection of the deck to draw from, the number of cards you would like to draw, the mode to use for drawing, and whether to draw the cards face down or not.

Pass
:   The pass button allows you to move a number of cards from the pile to a chosen card stack, and its dialog prompt allows you to choose which stack will receive the cards, how many will be moved, the draw mode, and whether they are facedown or not.

Card Pile Actions

![Card Pile View](https://r2.foundryvtt.com/website-uploads-public/screen/user_671/card-pile-view-2021-12-17.jpg)

The Pile interface can be used for managing cards within a miscellaneous card Pile, shuffling or passing cards.

Card Stacks which are set to the "Pile" type function similar to a deck, and provide the following options for interacting with cards:

Play
:   Each card has a "play" button which, when pressed, will prompt you to select a Card Stack to receive the played card.

Shuffle
:   Re-orders the cards contained within the pile at random. This affects the order in which they are drawn when being passed to another stack when using the top or bottom draw methods.

Pass
:   The pass button allows you to move a number of cards from the pile to a chosen card stack, and its dialog prompt allows you to choose which stack will receive the cards, how many will be moved, the draw mode, and whether they are facedown or not.

Reset
:   Resetting a pile sends all cards in the pile back to the deck they originated from.

Card Context Menu Options

![Card Stack context menu options](https://r2.foundryvtt.com/website-uploads-public/screen/user_1294/card-stack-context-menu-options-2022-11-08.png)

The Gamemaster's context menu for cards is accessed by right-clicking any card stack (hand, deck or pile) in the card directory.

All card stacks in the Card Directory can be right-clicked to open up a context menu which allows for additional actions used to manipulate stacks.

Clear Folder ()
:   Removes the card stack from all folders, placing it at the top level of the card directory.

Delete ()
:   Deletes the card stack, after accepting a confirmation prompt.

Duplicate ()
:   Creates a copy of the card stack in the directory. Duplicating stacks is disabled for hands and piles that contain cards, requiring them to be reset first.

Configure Permission ()
:   Configure the permission levels of the card stack, allowing players of your choice to view or modify the card stack in the directory.

Export Data ()
:   Exports the card stack's data as a JSON file on your computer.

Import Data ()
:   Imports data into the right-clicked card stack from a JSON file on your computer.