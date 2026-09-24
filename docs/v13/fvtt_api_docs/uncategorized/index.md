---
title: "Foundry Virtual Tabletop - API Documentation - Version 13"
url: "https://foundryvtt.com/api/index.html"
category: "uncategorized"
---

# Foundry Virtual Tabletop - API Documentation - Version 13

Welcome to the documentation for the client-side API of **[Foundry Virtual Tabletop](https://foundryvtt.com/)**, a JavaScript application for running tabletop role-playing games within a self-hosted web framework. The goal of this documentation is to empower developers to create amazing game systems, add-on modules, and scripts which augment and extend the base functionality of the Foundry Virtual Tabletop platform.

## Table of Contents

* [Reading these API Docs](#reading-these-api-docs)
* [Documents and Data](#documents-and-data)
  + [Document Abstraction](#document-abstraction)
  + [Database Operations](#database-operations)
  + [Collections](#collections)
  + [Primary Document Types](#primary-document-types)
    - [Actor](#actor)
    - [Adventure](#adventure)
    - [Cards](#cards)
    - [Chat Message](#chat-message)
    - [Combat Encounter](#combat-encounter)
    - [Fog Exploration](#fog-exploration)
    - [Folder](#folder)
    - [Item](#item)
    - [Journal Entry](#journal-entry)
    - [Macro](#macro)
    - [Playlist](#playlist)
    - [Rollable Table](#rollable-table)
    - [Scene](#scene)
    - [Setting](#setting)
    - [User](#user)
  + [Embedded Document Types](#embedded-document-types)
    - [Active Effect](#active-effect)
    - [Actor Delta](#actor-delta)
    - [Ambient Light](#ambient-light)
    - [Ambient Sound](#ambient-sound)
    - [Card](#card)
    - [Combatant](#combatant)
    - [Combatant Group](#combatant-group)
    - [Drawing](#drawing)
    - [Journal Entry Category](#journal-entry-category)
    - [Journal Entry Page](#journal-entry-page)
    - [Measured Template](#measured-template)
    - [Note](#note)
    - [Playlist Sound](#playlist-sound)
    - [Region](#region)
    - [Region Behavior](#region-behavior)
    - [Table Result](#table-result)
    - [Tile](#tile)
    - [Token](#token)
    - [Wall](#wall)
* [The Game Canvas](#the-game-canvas)
  + [Canvas Building Blocks](#canvas-building-blocks)
  + [Canvas Layers](#canvas-layers)
  + [Canvas Objects](#canvas-objects)
  + [HUD Overlay](#hud-overlay)
* [User Interface](#user-interface)
  + [Application Building Blocks](#application-building-blocks)
* [Dice Rolling](#dice-rolling)
  + [Roll Term Types](#roll-term-types)
  + [Dice Types](#dice-types)
* [Other Major Components](#other-major-components)
  + [Audio and Video](#audio-and-video)
  + [Game Management](#game-management)
  + [Video and Voice Chat](#video-and-voice-chat)
  + [Interactivity](#interactivity)

# Reading these API Docs

## Public vs Private API

### The Public API

The Public API is our set of methods and properties that we officially support and recommend Package developers to use in their integrations. The Public API comes with a set of promises from Foundry:

1. We will provide guidance, documentation, and help with using the Public API
2. We will provide deprecation periods when breaking changes are made when possible
3. We will make breaking changes to the public API only during certain Phases of a Version, as outlined [here](https://foundryvtt.com/article/versioning/)

As a team we endeavour to maintain the public API in a state that is as stable and reliable as possible.

```
/**  
* Part of the Public API, call externally  
* @public  
*/  
async doThing() {}
Copy
```

```
/**  
* Part of the Public API, don't call externally  
* @protected  
*/  
async _doThing() {}
Copy
```

### The Private API

The Private API is the set of methods and properties that Foundry uses internally to power the software, and explicitly do not support and recommend *against* Package developers using.

1. We may not provide guidance nor help, and documentation will only be our internal docs
2. We will not provide deprecation periods or compatibility layers when these functions change
3. We *may* make breaking changes at any point of development, including during the Stable phase

Any modification, overriding, or usage of private API methods should be done at the developers own risk. Packages which touch these private API methods are likely to be inherently less stable and more prone to breakage than packages which only engage with our provided public API.

```
/**  
* Part of the Private API, don't call at all  
* @private  
*/  
async _doThing() {}
Copy
```

```
/**  
* Implied part of the Private API, don't call at all  
*/  
async _doThing() {}
Copy
```

```
/**  
* Part of the Private API, JS prevents you from calling  
* @private  
*/  
async #doThing() {}
Copy
```

```
/**  
 * Able to be called externally, but treated as part of the private API  
 * @internal  
 */  
async _doThing() {}
Copy
```

### What about things that are unclear?

A lot of the Foundry codebase is not explicitly annotated one way or another as to which API it belongs to. The following Code Guidelines will help you navigate our API. As always, please reach out to us on Discord for clarification as well.

# Code Guidelines

## Annotations

### `@public`

Methods and properties marked `@public` may be called both externally and internally. They may only be modified within the class that defines them or a subclass of that parent class.

### `@protected`

Methods and properties marked `@protected` may only be used or modified within the class that defines them or a subclass of that parent class. We do intend for API users to override `@protected` properties when they are defining a subclass which replaces or extends the behavior of its parent class.

### `@private`

Methods and properties marked `@private` should not be used or modified except by the class which defined them. For API users, this means that you should not reference or override this property. We may make breaking changes to the code for `@private` attributes without warning or advance notice, even in software versions which are marked "Stable". Now that JavaScript offers true private methods like `#privateMethod` we are moving our codebase away from use of the `@private` annotation entirely. Methods which were previously `@private` will be, at some point, migrated to become true private methods.

### `@internal`

Methods and properties marked `@internal` should only be used by the core Foundry VTT codebase and should not be referenced or overridden by external code. This is effectively similar to `@private` except that `@internal` methods may be called outside of the context of the class which defines them.

## Naming Conventions

### `_` naming

Methods and properties which begin with an underscore `_` and are not otherwise documented with one of the above tags should be treated as `@private`.

### `#` naming

Methods and properties which begin with a `#` are truly private, and cannot be accessed outside their declaring class. This is enforced by Javascript itself - any attempt to read or write these will cause a syntax error.
[MDN reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_properties)

# Reading the Source Code

One fundamental limitation of these online docs is they don't provide the internals on function implementations. If you need more info on anything in the API, you can open up your local foundry installation to view the client-side code. If you have an electron based install, go into `resources/app`, otherwise this is the root folder.

* `client` and `common` are the primary code of Foundry broken up into a 1 file == 1 class setup.
  + `client` is code that's only for end users, such as applications and the canvas. It was fully migrated to use ESM in version 13.338. The actual root file that imports everything is `client/client.mjs`, where everything is assigned to a spot in the `foundry` namespace.
  + `common` is code that's shared with the server, and is *also* available under the `foundry` namespace.
* `dist` and `node_modules` are for the server and are not for community developers.
* `public` is the actual files that are served up to clients. All of the code that's in `client` and `common` gets rolled up into `scripts/foundry.mjs`. There's also plenty of other material here, like the core icons and css. The `lang/en.json` file can be particularly useful.
* `templates` is all the hbs templates used by core.

## FAQ

### What is a breaking change?

A breaking change is one that makes existing calls to the API incompatible with the new version.

Periodically it is necessary to make breaking changes to Public API functions in order to introduce new features or correct bugs in existing ones. These breaking changes can make an existing call to the Public API invalid, such as change in return type, removing a parameter, or renaming a method without providing an alias.

Adding a new optional parameter or updating TypeDocs are not considered to be "Breaking" changes. Interior implementation or behavioral changes are also not considered to be "Breaking" changes, such as changing the order elements in a list are returned in, or refactoring a large method to have smaller interior methods.

### How can I request changes and expansions to the Public API?

If something you would like to do can only be done via the Private API, please reach out to us via our Discord channels such as [#dev-support](https://discord.com/channels/170995199584108546/811676497965613117) and/or create an Issue on our [Github](https://github.com/foundryvtt/foundryvtt/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc) outlining what you're trying to do and what issues you're facing, and we will try our best to help or scope future work to better enable what you're doing.

# Documents and Data

Data in Foundry Virtual Tabletop is organized around the concept of Documents. Each document represents a single coherent piece of data which represents a specific object within the framework. The term `Document` refers to both the definition of a specific type of data (the Document class) as well as a uniquely identified instance of that data type (an instance of that class). Foundry has over 30 distinct document types, each of which are available in the global namespace. Packages can extend and replace these by modifying the global  [CONFIG](modules/CONFIG.html) object. Each document type can only have one registered class.

Some documents support "document subtypes", where packages can register a new `type` value in their manifest and then in CONFIG register a [TypeDataModel](classes/foundry.abstract.TypeDataModel.html) subclass. This allows packages to specify different behavior between say "character" and "npc" type actors. The document types that support subtypes are the following:

* [ActiveEffect](#active-effect)
* [Actor](#actor)
* [Card](#card)
* [Cards](#cards)
* [ChatMessage](#chat-message)
* [Combat](#combat-encounter)
* [Combatant](#combatant)
* [CombatantGroup](#combatant-group)
* [Item](#item)
* [JournalEntryPage](#journal-entry-page)
* [RegionBehavior](#region-behavior)

## Document Abstraction

* [foundry.abstract.DataModel](classes/foundry.abstract.DataModel.html) - The abstract base class which defines a data model with corresponding schema and state.
* [foundry.abstract.Document](classes/foundry.abstract.Document.html) - The abstract base class shared by both client and server-side which defines database interactions and the document hierarchy.
* [foundry.ClientDocument](classes/foundry.ClientDocument.html) - The abstract mixed class that defines the properties added to all client documents.
* [foundry.CanvasDocument](classes/foundry.CanvasDocument.html) - The abstract mixed class that defines the properties for documents visible on a scene.
* [foundry.abstract.TypeDataModel](classes/foundry.abstract.TypeDataModel.html) - The abstract base class for packages defining document subtypes.

## Database Operations

* [foundry.abstract.DatabaseBackend](classes/foundry.abstract.DatabaseBackend.html) - An interface shared by both the client and server-side which defines how creation, update, and deletion operations are transacted.
* [foundry.data.ClientDatabaseBackend](classes/foundry.data.ClientDatabaseBackend.html) - An implementation of the abstract backend which performs client-side CRUD operations.

## Collections

* [foundry.documents.abstract.DocumentCollection](classes/foundry.documents.abstract.DocumentCollection.html) - An abstract subclass of the Collection container which defines a collection of Document instances.
* [foundry.documents.abstract.WorldCollection](classes/foundry.documents.abstract.WorldCollection.html) - A collection of world-level Document objects with a singleton instance per primary Document type.
* [foundry.documents.collections.CompendiumCollection](classes/foundry.documents.collections.CompendiumCollection.html) - A collection of Document objects contained within a specific compendium pack.

## Primary Document Types

Foundry Virtual Tabletop includes the following primary Document types, each of which is saved to its own database table with within the active World.  [CONST.PRIMARY\_DOCUMENT\_TYPES](variables/CONST.PRIMARY_DOCUMENT_TYPES.html) exists as a referenceable list of these document types. See also  [CONST.COMPENDIUM\_DOCUMENT\_TYPES](variables/CONST.COMPENDIUM_DOCUMENT_TYPES.html) for the list of document types that can have their own compendium.

### Actor

* [foundry.documents.BaseActor](classes/foundry.documents.BaseActor.html) - The base Actor model definition which defines common behavior of an Actor document between both client and server.
* [foundry.documents.Actor](classes/foundry.documents.Actor.html) - The client-side Actor document which extends the common BaseActor model.
* [foundry.documents.collections.Actors](classes/foundry.documents.collections.Actors.html) - The singleton collection of Actor documents which exist within the active World.
* [foundry.applications.sheets.ActorSheetV2](classes/foundry.applications.sheets.ActorSheetV2.html) - The Application responsible for displaying and editing a single Actor document.
* [foundry.applications.sidebar.tabs.ActorDirectory](classes/foundry.applications.sidebar.tabs.ActorDirectory.html) - The sidebar directory which organizes and displays world-level Actor documents.

### Adventure

Note: Unlike other primary documents, Adventures do not have a world collection and can *only* be stored within an Adventure Compendium.

* [foundry.documents.BaseAdventure](classes/foundry.documents.BaseAdventure.html) - The base Adventure model definition which defines common behavior of an Adventure document between both client and server.
* [foundry.documents.Adventure](classes/foundry.documents.Adventure.html) - The client-side Adventure document which extends the common BaseAdventure model.
* [foundry.applications.sheets.AdventureExporter](classes/foundry.applications.sheets.AdventureExporter.html) - The Application responsible for exporting a single Adventure document.
* [foundry.applications.sheets.AdventureImporterV2](classes/foundry.applications.sheets.AdventureImporterV2.html) - The Application responsible for importing a single Adventure document.

### Cards

* [foundry.documents.BaseCards](classes/foundry.documents.BaseCards.html) - The base Cards model definition which defines common behavior of an Cards document between both client and server.
* [foundry.documents.Cards](classes/foundry.documents.Cards.html) - The client-side Cards document which extends the common BaseCards model.
* [foundry.documents.collections.CardStacks](classes/foundry.documents.collections.CardStacks.html) - The singleton collection of Cards documents which exist within the active World.
* [foundry.applications.sheets.CardsConfig](classes/foundry.applications.sheets.CardsConfig.html) - The base Application responsible for displaying and editing a single Cards document.
* [foundry.applications.sidebar.tabs.CardsDirectory](classes/foundry.applications.sidebar.tabs.CardsDirectory.html) - The sidebar directory which organizes and displays world-level Cards documents.

### Chat Message

* [foundry.documents.BaseChatMessage](classes/foundry.documents.BaseChatMessage.html) - The base ChatMessage model definition which defines common behavior of an ChatMessage document between both client and server.
* [foundry.documents.ChatMessage](classes/foundry.documents.ChatMessage.html) - The client-side ChatMessage document which extends the common BaseChatMessage model.
* [foundry.documents.collections.ChatMessages](classes/foundry.documents.collections.ChatMessages.html) - The singleton collection of ChatMessage documents which exist within the active World.
* [foundry.applications.sidebar.tabs.ChatLog](classes/foundry.applications.sidebar.tabs.ChatLog.html) - The sidebar directory which organizes and displays world-level ChatMessage documents.

### Combat Encounter

* [foundry.documents.BaseCombat](classes/foundry.documents.BaseCombat.html) - The base Combat model definition which defines common behavior of an Combat document between both client and server.
* [foundry.documents.Combat](classes/foundry.documents.Combat.html) - The client-side Combat document which extends the common BaseCombat model.
* [foundry.documents.collections.CombatEncounters](classes/foundry.documents.collections.CombatEncounters.html) - The singleton collection of Combat documents which exist within the active World.
* [foundry.applications.sidebar.tabs.CombatTracker](classes/foundry.applications.sidebar.tabs.CombatTracker.html) - The sidebar directory which organizes and displays world-level Combat documents.
* [foundry.applications.apps.CombatTrackerConfig](classes/foundry.applications.apps.CombatTrackerConfig.html) - The Application responsible for configuring the CombatTracker and its contents.

### Fog Exploration

* [foundry.documents.BaseFogExploration](classes/foundry.documents.BaseFogExploration.html) - The base FogExploration model definition which defines common behavior of an FogExploration document between both client and server.
* [foundry.documents.FogExploration](classes/foundry.documents.FogExploration.html) - The client-side FogExploration document which extends the common BaseFogExploration model.
* [foundry.documents.collections.FogExplorations](classes/foundry.documents.collections.FogExplorations.html) - The singleton collection of FogExploration documents which exist within the active World.

### Folder

* [foundry.documents.BaseFolder](classes/foundry.documents.BaseFolder.html) - The base Folder model definition which defines common behavior of an Folder document between both client and server.
* [foundry.documents.Folder](classes/foundry.documents.Folder.html) - The client-side Folder document which extends the common BaseFolder model.
* [foundry.documents.collections.Folders](classes/foundry.documents.collections.Folders.html) - The singleton collection of Folder documents which exist within the active World.
* [foundry.applications.sheets.FolderConfig](classes/foundry.applications.sheets.FolderConfig.html) - The Application responsible for configuring a single Folder document.

### Item

Note: Items can be embedded inside actors in addition to existing as primary documents.

* [foundry.documents.BaseItem](classes/foundry.documents.BaseItem.html) - The base Item model definition which defines common behavior of an Item document between both client and server.
* [foundry.documents.Item](classes/foundry.documents.Item.html) - The client-side Item document which extends the common BaseItem model.
* [foundry.documents.collections.Items](classes/foundry.documents.collections.Items.html) - The singleton collection of Item documents which exist within the active World.
* [foundry.applications.sheets.ItemSheetV2](classes/foundry.applications.sheets.ItemSheetV2.html) - The Application responsible for displaying and editing a single Item document.
* [foundry.applications.sidebar.tabs.ItemDirectory](classes/foundry.applications.sidebar.tabs.ItemDirectory.html) - The sidebar directory which organizes and displays world-level Item documents.

### Journal Entry

* [foundry.documents.BaseJournalEntry](classes/foundry.documents.BaseJournalEntry.html) - The base JournalEntry model definition which defines common behavior of an JournalEntry document between both client and server.
* [foundry.documents.JournalEntry](classes/foundry.documents.JournalEntry.html) - The client-side JournalEntry document which extends the common BaseJournalEntry model.
* [foundry.documents.collections.Journal](classes/foundry.documents.collections.Journal.html) - The singleton collection of JournalEntry documents which exist within the active World.
* [foundry.applications.sheets.journal.JournalEntrySheet](classes/foundry.applications.sheets.journal.JournalEntrySheet.html) - The Application responsible for displaying and editing a single JournalEntry document.
* [foundry.applications.sidebar.tabs.JournalDirectory](classes/foundry.applications.sidebar.tabs.JournalDirectory.html) - The sidebar directory which organizes and displays world-level JournalEntry documents.

### Macro

* [foundry.documents.BaseMacro](classes/foundry.documents.BaseMacro.html) - The base Macro model definition which defines common behavior of an Macro document between both client and server.
* [foundry.documents.Macro](classes/foundry.documents.Macro.html) - The client-side Macro document which extends the common BaseMacro model.
* [foundry.documents.collections.Macros](classes/foundry.documents.collections.Macros.html) - The singleton collection of Macro documents which exist within the active World.
* [foundry.applications.sheets.MacroConfig](classes/foundry.applications.sheets.MacroConfig.html) - The Application responsible for displaying and editing a single Macro document.
* [foundry.applications.sidebar.tabs.MacroDirectory](classes/foundry.applications.sidebar.tabs.MacroDirectory.html) - The sidebar directory which organizes and displays world-level Macro documents.

### Playlist

* [foundry.documents.BasePlaylist](classes/foundry.documents.BasePlaylist.html) - The base Playlist model definition which defines common behavior of an Playlist document between both client and server.
* [foundry.documents.Playlist](classes/foundry.documents.Playlist.html) - The client-side Playlist document which extends the common BasePlaylist model.
* [foundry.documents.collections.Playlists](classes/foundry.documents.collections.Playlists.html) - The singleton collection of Playlist documents which exist within the active World.
* [foundry.applications.sheets.PlaylistConfig](classes/foundry.applications.sheets.PlaylistConfig.html) - The Application responsible for configuring a single Playlist document.
* [foundry.applications.sidebar.tabs.PlaylistDirectory](classes/foundry.applications.sidebar.tabs.PlaylistDirectory.html) - The sidebar directory which organizes and displays world-level Playlist documents.

### Rollable Table

* [foundry.documents.BaseRollTable](classes/foundry.documents.BaseRollTable.html) - The base RollTable model definition which defines common behavior of an RollTable document between both client and server.
* [foundry.documents.RollTable](classes/foundry.documents.RollTable.html) - The client-side RollTable document which extends the common BaseRollTable model.
* [foundry.documents.collections.RollTables](classes/foundry.documents.collections.RollTables.html) - The singleton collection of RollTable documents which exist within the active World.
* [foundry.applications.sheets.RollTableSheet](classes/foundry.applications.sheets.RollTableSheet.html) - The Application responsible for displaying and editing a single RollTable document.
* [foundry.applications.sidebar.tabs.RollTableDirectory](classes/foundry.applications.sidebar.tabs.RollTableDirectory.html) - The sidebar directory which organizes and displays world-level RollTable documents.

### Scene

* [foundry.documents.BaseScene](classes/foundry.documents.BaseScene.html) - The base Scene model definition which defines common behavior of an Scene document between both client and server.
* [foundry.documents.Scene](classes/foundry.documents.Scene.html) - The client-side Scene document which extends the common BaseScene model.
* [foundry.documents.collections.Scenes](classes/foundry.documents.collections.Scenes.html) - The singleton collection of Scene documents which exist within the active World.
* [foundry.applications.sheets.SceneConfig](classes/foundry.applications.sheets.SceneConfig.html) - The Application responsible for configuring a single Scene document.
* [foundry.applications.sidebar.tabs.SceneDirectory](classes/foundry.applications.sidebar.tabs.SceneDirectory.html) - The sidebar directory which organizes and displays world-level Scene documents.
* [foundry.applications.ui.SceneNavigation](classes/foundry.applications.ui.SceneNavigation.html) - The UI element which displays the Scene documents which are currently enabled for quick navigation.

### Setting

* [foundry.documents.BaseSetting](classes/foundry.documents.BaseSetting.html) - The base Setting model definition which defines common behavior of an Setting document between both client and server.
* [foundry.documents.Setting](classes/foundry.documents.Setting.html) - The client-side Setting model which extends the common BaseSetting model.
* [foundry.documents.collections.WorldSettings](classes/foundry.documents.collections.WorldSettings.html) - The singleton collection of Setting documents which exist within the active World.
* [foundry.applications.settings.SettingsConfig](classes/foundry.applications.settings.SettingsConfig.html) - The Application responsible for displaying and configuring registered game Setting documents.
* [foundry.applications.sidebar.tabs.Settings](classes/foundry.applications.sidebar.tabs.Settings.html) - The sidebar tab which displays various game settings, help messages, and configuration options.
* [foundry.helpers.ClientSettings](classes/foundry.helpers.ClientSettings.html) - A class responsible for managing defined game settings or settings menus.

### User

* [foundry.documents.BaseUser](classes/foundry.documents.BaseUser.html) - The base User model definition which defines common behavior of an User document between both client and server.
* [foundry.documents.User](classes/foundry.documents.User.html) - The client-side User document which extends the common BaseUser model.
* [foundry.documents.collections.Users](classes/foundry.documents.collections.Users.html) - The singleton collection of User documents which exist within the active World.
* [foundry.applications.sheets.UserConfig](classes/foundry.applications.sheets.UserConfig.html) - The Application responsible for configuring a single User document.
* [foundry.applications.ui.Players](classes/foundry.applications.ui.Players.html) - The UI element which displays the list of Users who are currently playing within the active World.

## Embedded Document Types

In addition to the above primary document types, each of which are indexed within their own tables, there are several additional document types which only exist as embedded documents within a parent Document. These embedded documents cannot exist on their own (outside of the context of a parent).  [CONST.EMBEDDED\_DOCUMENT\_TYPES](variables/CONST.EMBEDDED_DOCUMENT_TYPES.html) exists as a referenceable list of these document types. Embedded documents are always stored within an [EmbeddedCollection](classes/foundry.abstract.EmbeddedCollection.html) instance, e.g. `actor.effects` will return an EmbeddedCollection that contains ActiveEffects. This embedded collection provides methods for accessing and iterating through the embedded documents.

Community package developers cannot define new embedded relationships, e.g. Items within Items; these relationships are validated by the server. Instead, approaches that modify rendering behavior can provide the illusion of nesting. The core implementation of Folders is an example of this behavior.

### Active Effect

* [foundry.documents.BaseActiveEffect](classes/foundry.documents.BaseActiveEffect.html) - The base ActiveEffect model definition which defines common behavior of an ActiveEffect document between both client and server.
* [foundry.documents.ActiveEffect](classes/foundry.documents.ActiveEffect.html) - The client-side ActiveEffect document which extends the common BaseActiveEffect model.
* [foundry.applications.sheets.ActiveEffectConfig](classes/foundry.applications.sheets.ActiveEffectConfig.html) - The Application responsible for configuring a single ActiveEffect document within a parent Actor or Item.

### Ambient Light

* [foundry.documents.BaseAmbientLight](classes/foundry.documents.BaseAmbientLight.html) - The base AmbientLight model definition which defines common behavior of an AmbientLight document between both client and server.
* [foundry.documents.AmbientLightDocument](classes/foundry.documents.AmbientLightDocument.html) - The client-side AmbientLight document which extends the common BaseAmbientLight model.
* [foundry.applications.sheets.AmbientLightConfig](classes/foundry.applications.sheets.AmbientLightConfig.html) - The Application responsible for configuring a single AmbientLight document within a parent Scene.

### Ambient Sound

* [foundry.documents.BaseAmbientSound](classes/foundry.documents.BaseAmbientSound.html) - The base AmbientSound model definition which defines common behavior of an AmbientSound document between both client and server.
* [foundry.documents.AmbientSoundDocument](classes/foundry.documents.AmbientSoundDocument.html) - The client-side AmbientSound document which extends the common BaseAmbientSound model.
* [foundry.applications.sheets.AmbientSoundConfig](classes/foundry.applications.sheets.AmbientSoundConfig.html) - The Application responsible for configuring a single AmbientSound document within a parent Scene.

### Card

* [foundry.documents.BaseCard](classes/foundry.documents.BaseCard.html) - The base Card model definition which defines common behavior of an Card document between both client and server.
* [foundry.documents.Card](classes/foundry.documents.Card.html) - The client-side Card document which extends the common BaseCard model.
* [foundry.applications.sheets.CardConfig](classes/foundry.applications.sheets.CardConfig.html) - The Application responsible for configuring a single Card document within a parent Cards.

### Combatant

* [foundry.documents.BaseCombatant](classes/foundry.documents.BaseCombatant.html) - The base Combatant model definition which defines common behavior of an Combatant document between both client and server.
* [foundry.documents.Combatant](classes/foundry.documents.Combatant.html) - The client-side Combatant document which extends the common BaseCombatant model.
* [foundry.applications.sheets.CombatantConfig](classes/foundry.applications.sheets.CombatantConfig.html) - The Application responsible for configuring a single Combatant document within a parent Combat.

### Combatant Group

* [foundry.documents.BaseCombatantGroup](classes/foundry.documents.BaseCombatantGroup.html) - The base Combatant model definition which defines common behavior of an Combatant document between both client and server.
* [foundry.documents.CombatantGroup](classes/foundry.documents.CombatantGroup.html) - The client-side Combatant document which extends the common BaseCombatant model.

### Drawing

* [foundry.documents.BaseDrawing](classes/foundry.documents.BaseDrawing.html) - The base Drawing model definition which defines common behavior of an Drawing document between both client and server.
* [foundry.documents.DrawingDocument](classes/foundry.documents.DrawingDocument.html) - The client-side Drawing document which extends the common BaseDrawing model.
* [foundry.applications.sheets.DrawingConfig](classes/foundry.applications.sheets.DrawingConfig.html) - The Application responsible for configuring a single Drawing document within a parent Scene.

### Journal Entry Category

* [foundry.documents.BaseJournalEntryCategory](classes/foundry.documents.BaseJournalEntryCategory.html) - The base JournalEntryCategory model definition which defines common behavior of an JournalEntryCategory document between both client and server.
* [foundry.documents.JournalEntryCategory](classes/foundry.documents.JournalEntryCategory.html) - The client-side JournalEntryCategory document which extends the common BaseJournalEntryCategory model.
* [foundry.applications.sheets.journal.JournalEntryCategoryConfig](classes/foundry.applications.sheets.journal.JournalEntryCategoryConfig.html) - The Application responsible for displaying and editing a single JournalEntryCategory document.

### Journal Entry Page

* [foundry.documents.BaseJournalEntryPage](classes/foundry.documents.BaseJournalEntryPage.html) - The base JournalEntryPage model definition which defines common behavior of an JournalEntryPage document between both client and server.
* [foundry.documents.JournalEntryPage](classes/foundry.documents.JournalEntryPage.html) - The client-side JournalEntryPage document which extends the common BaseJournalEntryPage model.
* [foundry.applications.sheets.journal.JournalEntryPageSheet](classes/foundry.applications.sheets.journal.JournalEntryPageSheet.html) - The Application responsible for displaying and editing a single JournalEntryPage document.
  + [foundry.applications.sheets.journal.JournalEntryPageHandlebarsSheet](classes/foundry.applications.sheets.journal.JournalEntryPageHandlebarsSheet.html)
  + [foundry.applications.sheets.journal.JournalEntryPageImageSheet](classes/foundry.applications.sheets.journal.JournalEntryPageImageSheet.html)
  + [foundry.applications.sheets.journal.JournalEntryPageMarkdownSheet](classes/foundry.applications.sheets.journal.JournalEntryPageMarkdownSheet.html)
  + [foundry.applications.sheets.journal.JournalEntryPagePDFSheet](classes/foundry.applications.sheets.journal.JournalEntryPagePDFSheet.html)
  + [foundry.applications.sheets.journal.JournalEntryPageProseMirrorSheet](classes/foundry.applications.sheets.journal.JournalEntryPageProseMirrorSheet.html)
  + [foundry.applications.sheets.journal.JournalEntryPageTextSheet](classes/foundry.applications.sheets.journal.JournalEntryPageTextSheet.html)
  + [foundry.applications.sheets.journal.JournalEntryPageVideoSheet](classes/foundry.applications.sheets.journal.JournalEntryPageVideoSheet.html)

### Measured Template

* [foundry.documents.BaseMeasuredTemplate](classes/foundry.documents.BaseMeasuredTemplate.html) - The base MeasuredTemplate model definition which defines common behavior of an MeasuredTemplate document between both client and server.
* [foundry.documents.MeasuredTemplateDocument](classes/foundry.documents.MeasuredTemplateDocument.html) - The client-side MeasuredTemplate document which extends the common BaseMeasuredTemplate model.
* [foundry.applications.sheets.MeasuredTemplateConfig](classes/foundry.applications.sheets.MeasuredTemplateConfig.html) - The Application responsible for configuring a single MeasuredTemplate document within a parent Scene.

### Note

* [foundry.documents.BaseNote](classes/foundry.documents.BaseNote.html) - The base Note model definition which defines common behavior of an Note document between both client and server.
* [foundry.documents.NoteDocument](classes/foundry.documents.NoteDocument.html) - The client-side Note document which extends the common BaseNote model.
* [foundry.applications.sheets.NoteConfig](classes/foundry.applications.sheets.NoteConfig.html) - The Application responsible for configuring a single Note document within a parent Scene.

### Playlist Sound

* [foundry.documents.BasePlaylistSound](classes/foundry.documents.BasePlaylistSound.html) - The base PlaylistSound model definition which defines common behavior of an PlaylistSound document between both client and server.
* [foundry.documents.PlaylistSound](classes/foundry.documents.PlaylistSound.html) - The client-side PlaylistSound document which extends the common BasePlaylistSound model.
* [foundry.applications.sheets.PlaylistSoundConfig](classes/foundry.applications.sheets.PlaylistSoundConfig.html) - The Application responsible for configuring a single PlaylistSound document within a parent Playlist.

### Region

* [foundry.documents.BaseRegion](classes/foundry.documents.BaseRegion.html) - The base Region model definition which defines common behavior of an Region document between both client and server.
* [foundry.documents.RegionDocument](classes/foundry.documents.RegionDocument.html) - The client-side Region document which extends the common BaseRegion model.
* [foundry.applications.sheets.RegionConfig](classes/foundry.applications.sheets.RegionConfig.html) - The Application responsible for configuring a single Region document within a parent Scene.

### Region Behavior

* [foundry.documents.BaseRegionBehavior](classes/foundry.documents.BaseRegionBehavior.html) - The base RegionBehavior model definition which defines common behavior of an RegionBehavior document between both client and server.
* [foundry.documents.RegionBehavior](classes/foundry.documents.RegionBehavior.html) - The client-side RegionBehavior document which extends the common BaseRegionBehavior model.
* [foundry.data.regionBehaviors.RegionBehaviorType](classes/foundry.data.regionBehaviors.RegionBehaviorType.html) - The base subtype model of the RegionBehavior document.
* [foundry.applications.sheets.RegionConfig](classes/foundry.applications.sheets.RegionConfig.html) - The Application responsible for configuring a single RegionBehavior document within a parent Region.

### Table Result

* [foundry.documents.BaseTableResult](classes/foundry.documents.BaseTableResult.html) - The base TableResult model definition which defines common behavior of an TableResult document between both client and server.
* [foundry.documents.TableResult](classes/foundry.documents.TableResult.html) - The client-side TableResult document which extends the common BaseTableResult model.

### Tile

* [foundry.documents.BaseTile](classes/foundry.documents.BaseTile.html) - The base Tile model definition which defines common behavior of an Tile document between both client and server.
* [foundry.documents.TileDocument](classes/foundry.documents.TileDocument.html) - The client-side Tile document which extends the common BaseTile model.
* [foundry.applications.sheets.TileConfig](classes/foundry.applications.sheets.TileConfig.html) - The Application responsible for configuring a single Tile document within a parent Scene.

### Token

* [foundry.documents.BaseToken](classes/foundry.documents.BaseToken.html) - The base Token model definition which defines common behavior of an Token document between both client and server.
* [foundry.documents.TokenDocument](classes/foundry.documents.TokenDocument.html) - The client-side Token document which extends the common BaseToken model.
* [foundry.applications.sheets.TokenConfig](classes/foundry.applications.sheets.TokenConfig.html) - The Application responsible for configuring a single Token document within a parent Scene.

### Wall

* [foundry.documents.BaseWall](classes/foundry.documents.BaseWall.html) - The base Wall model definition which defines common behavior of an Wall document between both client and server.
* [foundry.documents.WallDocument](classes/foundry.documents.WallDocument.html) - The client-side Wall document which extends the common BaseWall model.
* [foundry.applications.sheets.WallConfig](classes/foundry.applications.sheets.WallConfig.html) - The Application responsible for configuring a single Wall document within a parent Scene.

# The Game Canvas

The visual game surface in Foundry Virtual Tabletop is managed by a WebGL-powered canvas which uses the [PixiJS](https://www.pixijs.com/) library.

## Canvas Building Blocks

The game canvas is constructed using several core building blocks.

* [foundry.canvas.Canvas](classes/foundry.canvas.Canvas.html) - The master controller of the canvas element upon which the tabletop is rendered.
* [foundry.canvas.layers.CanvasLayer](classes/foundry.canvas.layers.CanvasLayer.html) - An abstract pattern for primary layers of the game canvas to implement.
* [foundry.canvas.layers.InteractionLayer](classes/foundry.canvas.layers.InteractionLayer.html) - An extension of CanvasLayer which provides user interactivity for its contained objects.
* [foundry.canvas.layers.PlaceablesLayer](classes/foundry.canvas.layers.PlaceablesLayer.html) - A subclass of Canvas Layer which is specifically designed to contain multiple PlaceableObject instances, each corresponding to an embedded Document.
* [foundry.documents.abstract.CanvasDocumentMixin](functions/foundry.documents.abstract.CanvasDocumentMixin.html) - A specialized sub-class of the ClientDocumentMixin which is used for document types that are intended to be represented upon the game Canvas.
* [foundry.canvas.placeables.PlaceableObject](classes/foundry.canvas.placeables.PlaceableObject.html)
* [foundry.canvas.animation.CanvasAnimation](classes/foundry.canvas.animation.CanvasAnimation.html)

## Canvas Groups

The first level of canvas hierarchy is the concept of groups which provide top-level containers for various concepts. They are containers that mixin  [foundry.canvas.groups.CanvasGroupMixin](functions/foundry.canvas.groups.CanvasGroupMixin.html).

* [foundry.canvas.groups.EffectsCanvasGroup](classes/foundry.canvas.groups.EffectsCanvasGroup.html) - Visual effects which modify the appearance of objects in the PrimaryCanvasGroup.
* [foundry.canvas.groups.EnvironmentCanvasGroup](classes/foundry.canvas.groups.EnvironmentCanvasGroup.html) - The group containing everything that is not an interface element.
* [foundry.canvas.groups.HiddenCanvasGroup](classes/foundry.canvas.groups.HiddenCanvasGroup.html) - A container for objects which are transformed but not rendered.
* [foundry.canvas.groups.InterfaceCanvasGroup](classes/foundry.canvas.groups.InterfaceCanvasGroup.html) - User interface elements which provide interactivity and context but are not tangible objects within the Scene.
* [foundry.canvas.groups.OverlayCanvasGroup](classes/foundry.canvas.groups.OverlayCanvasGroup.html) - The group for elements which are not bound to the stage world transform.
* [foundry.canvas.groups.PrimaryCanvasGroup](classes/foundry.canvas.groups.PrimaryCanvasGroup.html) - Tangible objects which exist within the Scene and are affected by lighting and other effects.
* [foundry.canvas.groups.RenderedCanvasGroup](classes/foundry.canvas.groups.RenderedCanvasGroup.html) - A container for objects which are rendered on the canvas.
* [foundry.canvas.groups.CanvasVisibility](classes/foundry.canvas.groups.CanvasVisibility.html) - The group responsible for dynamic vision, lighting, and fog of war.

## Canvas Layers

Within each of the above canvas groups there are a number of layers which provide specific functionality. Canvas layers utilize the following base classes.

* [foundry.canvas.layers.CanvasLayer](classes/foundry.canvas.layers.CanvasLayer.html) - A base class for all canvas layers.
* [foundry.canvas.layers.InteractionLayer](classes/foundry.canvas.layers.InteractionLayer.html) - An extension of CanvasLayer which provides user interactivity for its contained objects.
* [foundry.canvas.layers.PlaceablesLayer](classes/foundry.canvas.layers.PlaceablesLayer.html) - An extension of InteractionLayer specifically designed for drawing Documents to the canvas.

The following are implementations of canvas layers:

### Within the Effects Canvas Group

* [foundry.canvas.layers.CanvasBackgroundAlterationEffects](classes/foundry.canvas.layers.CanvasBackgroundAlterationEffects.html)
* [foundry.canvas.layers.CanvasColorationEffects](classes/foundry.canvas.layers.CanvasColorationEffects.html)
* [foundry.canvas.layers.CanvasDarknessEffects](classes/foundry.canvas.layers.CanvasDarknessEffects.html)
* [foundry.canvas.layers.CanvasIlluminationEffects](classes/foundry.canvas.layers.CanvasIlluminationEffects.html)
* [foundry.canvas.layers.WeatherEffects](classes/foundry.canvas.layers.WeatherEffects.html)

### Within the Interface Canvas Group

* [foundry.canvas.layers.ControlsLayer](classes/foundry.canvas.layers.ControlsLayer.html)
* [foundry.canvas.layers.DrawingsLayer](classes/foundry.canvas.layers.DrawingsLayer.html)
* [foundry.canvas.layers.GridLayer](classes/foundry.canvas.layers.GridLayer.html)
* [foundry.canvas.layers.LightingLayer](classes/foundry.canvas.layers.LightingLayer.html)
* [foundry.canvas.layers.NotesLayer](classes/foundry.canvas.layers.NotesLayer.html)
* [foundry.canvas.layers.RegionLayer](classes/foundry.canvas.layers.RegionLayer.html)
* [foundry.canvas.layers.SoundsLayer](classes/foundry.canvas.layers.SoundsLayer.html)
* [foundry.canvas.layers.TemplateLayer](classes/foundry.canvas.layers.TemplateLayer.html)
* [foundry.canvas.layers.TilesLayer](classes/foundry.canvas.layers.TilesLayer.html)
* [foundry.canvas.layers.TokenLayer](classes/foundry.canvas.layers.TokenLayer.html)
* [foundry.canvas.layers.WallsLayer](classes/foundry.canvas.layers.WallsLayer.html)

## Canvas Objects

Canvas layers contain  [foundry.canvas.placeables.PlaceableObject](classes/foundry.canvas.placeables.PlaceableObject.html) instances which are rendered within that layer. The following are the available object types which may be placed.

* [foundry.canvas.placeables.AmbientLight](classes/foundry.canvas.placeables.AmbientLight.html)
* [foundry.canvas.placeables.AmbientSound](classes/foundry.canvas.placeables.AmbientSound.html)
* [foundry.canvas.placeables.Drawing](classes/foundry.canvas.placeables.Drawing.html)
* [foundry.canvas.placeables.MeasuredTemplate](classes/foundry.canvas.placeables.MeasuredTemplate.html)
* [foundry.canvas.placeables.Region](classes/foundry.canvas.placeables.Region.html)
* [foundry.canvas.placeables.Tile](classes/foundry.canvas.placeables.Tile.html)
* [foundry.canvas.placeables.Token](classes/foundry.canvas.placeables.Token.html)
* [foundry.canvas.placeables.Note](classes/foundry.canvas.placeables.Note.html)
* [foundry.canvas.placeables.Wall](classes/foundry.canvas.placeables.Wall.html)

## HUD Overlay

In addition to WebGL canvas layers, there is also support for HTML-based canvas overlay known as "HUD" objects.

* [foundry.applications.hud.DrawingHUD](classes/foundry.applications.hud.DrawingHUD.html)
* [foundry.applications.hud.TileHUD](classes/foundry.applications.hud.TileHUD.html)
* [foundry.applications.hud.TokenHUD](classes/foundry.applications.hud.TokenHUD.html)

# User Interface

In addition to the underlying data and the visual representation of that data on the Canvas, Foundry VTT renders many HTML Applications which represent modular interface components for browsing, editing, or configuring elements of the virtual tabletop.

## Application Building Blocks

The following classes provide high-level building blocks for defining HTML applications within Foundry Virtual Tabletop.

* [foundry.applications.api.ApplicationV2](classes/foundry.applications.api.ApplicationV2.html)
* [foundry.applications.api.DialogV2](classes/foundry.applications.api.DialogV2.html)
* [foundry.applications.api.DocumentSheetV2](classes/foundry.applications.api.DocumentSheetV2.html)
* [foundry.applications.apps.FilePicker](classes/foundry.applications.apps.FilePicker.html)
* [foundry.applications.ux.ContextMenu](classes/foundry.applications.ux.ContextMenu.html)
* [foundry.applications.ux.DragDrop](classes/foundry.applications.ux.DragDrop.html)
* [foundry.applications.ux.Tabs](classes/foundry.applications.ux.Tabs.html)
* [foundry.applications.ux.TextEditor](classes/foundry.applications.ux.TextEditor.html)

# Dice Rolling

As a developer, you may often want to trigger dice rolls or customize the behavior of dice rolling. Foundry Virtual Tabletop provides a set of API concepts dedicated towards working with dice.

* [foundry.dice.Roll](classes/foundry.dice.Roll.html) - An interface and API for constructing and evaluating dice rolls.
* [foundry.dice.terms.RollTerm](classes/foundry.dice.terms.RollTerm.html) - An abstract class which represents a single token that can be used as part of a Roll formula.
* [foundry.dice.MersenneTwister](classes/foundry.dice.MersenneTwister.html) - A standalone, pure JavaScript implementation of the Mersenne Twister pseudo random number generator.

## Roll Term Types

* [foundry.dice.terms.DiceTerm](classes/foundry.dice.terms.DiceTerm.html) - An abstract base class for any type of RollTerm which involves randomized input from dice, coins, or other devices.
* [foundry.dice.terms.FunctionTerm](classes/foundry.dice.terms.FunctionTerm.html) - A type of RollTerm used to apply a function.
* [foundry.dice.terms.NumericTerm](classes/foundry.dice.terms.NumericTerm.html) - A type of RollTerm used to represent static numbers.
* [foundry.dice.terms.OperatorTerm](classes/foundry.dice.terms.OperatorTerm.html) - A type of RollTerm used to denote and perform an arithmetic operation.
* [foundry.dice.terms.ParentheticalTerm](classes/foundry.dice.terms.ParentheticalTerm.html) - A type of RollTerm used to enclose a parenthetical expression to be recursively evaluated.
* [foundry.dice.terms.PoolTerm](classes/foundry.dice.terms.PoolTerm.html) - A type of RollTerm which encloses a pool of multiple inner Rolls which are evaluated jointly.
* [foundry.dice.terms.StringTerm](classes/foundry.dice.terms.StringTerm.html) - A type of RollTerm used to represent strings which have not yet been matched.

## Dice Types

* [foundry.dice.terms.Die](classes/foundry.dice.terms.Die.html) - A type of DiceTerm used to represent rolling a fair n-sided die.
* [foundry.dice.terms.Coin](classes/foundry.dice.terms.Coin.html) - A type of DiceTerm used to represent flipping a two-sided coin.
* [foundry.dice.terms.FateDie](classes/foundry.dice.terms.FateDie.html) - A type of DiceTerm used to represent a three-sided Fate/Fudge die.

# Other Major Components

In addition to the outlined structure above, there are many additional miscellaneous elements of the Foundry Virtual Tabletop API for you to explore. Please browse the sidebar for a complete listing of classes and functions. Some specific classes which are noteworthy or commonly used include:

## Audio and Video

* [foundry.audio.AudioHelper](classes/foundry.audio.AudioHelper.html) - Utilities for working with Audio files.
* [foundry.audio.Sound](classes/foundry.audio.Sound.html) - The Sound class is used to control the playback of audio sources using the Web Audio API.
* [foundry.helpers.media.ImageHelper](classes/foundry.helpers.media.ImageHelper.html) - Utilities for working with Image files.
* [foundry.helpers.media.VideoHelper](classes/foundry.helpers.media.VideoHelper.html) - Utilities for working with Video files.

## Game Management

* [foundry.Game](classes/foundry.Game.html) - The master controller for the active game instance
* [foundry.helpers.GameTime](classes/foundry.helpers.GameTime.html) - A singleton class which keeps the official Server and World time stamps.

## Video and Voice Chat

* [foundry.av.AVMaster](classes/foundry.av.AVMaster.html) - The master Audio/Video controller instance.
* [foundry.av.AVClient](classes/foundry.av.AVClient.html) - An interface for an Audio/Video client which is extended to provide broadcasting functionality.
* [foundry.av.clients.SimplePeerAVClient](classes/foundry.av.clients.SimplePeerAVClient.html) - An implementation of the AVClient which uses the simple-peer library and the Foundry socket server for signaling.

## Interactivity

* [foundry.helpers.Hooks](classes/foundry.helpers.Hooks.html) - An infrastructure for registering event handlers which fire under specific conditions.
* [foundry.helpers.interaction.KeyboardManager](classes/foundry.helpers.interaction.KeyboardManager.html) - A set of helpers and management functions for dealing with user input from keyboard events.
* [foundry.helpers.SocketInterface](classes/foundry.helpers.SocketInterface.html) - Helper functions for dispatching and receiving socket events in a standardized way.