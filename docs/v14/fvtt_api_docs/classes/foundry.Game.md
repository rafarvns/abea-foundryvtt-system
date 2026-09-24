---
title: "Game | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.Game.html"
category: "classes"
---

# Class Game

The core Game instance which encapsulates the data, settings, and states relevant for managing the game experience.
The singleton instance of the Game class is available as the global variable game.

##### Index

### Constructors

[constructor](#constructor)

### Properties

[actors](#actors)
[audio](#audio)
[canvas](#canvas)
[cards](#cards)
[clipboard](#clipboard)
[collections](#collections)
[combats](#combats)
[compendiumArt](#compendiumart)
[compendiumUUIDRedirects](#compendiumuuidredirects)
[data](#data)
[debug](#debug)
[documentIndex](#documentindex)
[folders](#folders)
[gamepad](#gamepad)
[i18n](#i18n)
[issues](#issues)
[items](#items)
[journal](#journal)
[keybindings](#keybindings)
[keyboard](#keyboard)
[loading](#loading)
[macros](#macros)
[messages](#messages)
[modules](#modules)
[mouse](#mouse)
[nue](#nue)
[packs](#packs)
[permissions](#permissions)
[playlists](#playlists)
[ready](#ready)
[release](#release)
[scenes](#scenes)
[settings](#settings)
[socket](#socket)
[system](#system)
[tables](#tables)
[time](#time)
[tooltip](#tooltip)
[tours](#tours)
[userId](#userid)
[users](#users)
[video](#video)
[view](#view)
[workers](#workers)
[world](#world)

### Accessors

[activeTool](#activetool)
[combat](#combat)
[compendiumConfiguration](#compendiumconfiguration)
[documentTypes](#documenttypes)
[isAdmin](#isadmin)
[model](#model)
[paused](#paused)
[user](#user)
[version](#version)

### Methods

[\_initializeView](#_initializeview)
[activateListeners](#activatelisteners)
[activateSocketListeners](#activatesocketlisteners)
[configureCursors](#configurecursors)
[configureUI](#configureui)
[getPackageScopes](#getpackagescopes)
[initialize](#initialize)
[initializeCanvas](#initializecanvas)
[initializeConfig](#initializeconfig)
[initializeDocuments](#initializedocuments)
[initializeGamepads](#initializegamepads)
[initializeKeyboard](#initializekeyboard)
[initializeMouse](#initializemouse)
[initializePacks](#initializepacks)
[initializeRTC](#initializertc)
[initializeTrees](#initializetrees)
[initializeUI](#initializeui)
[logOut](#logout)
[raceWithWindowHidden](#racewithwindowhidden)
[registerSettings](#registersettings)
[setupGame](#setupgame)
[setupPackages](#setuppackages)
[shutDown](#shutdown)
[toggleCharacterSheet](#togglecharactersheet)
[togglePause](#togglepause)
[\_onClickHyperlink](#_onclickhyperlink)
[connect](#connect)
[create](#create)
[getCookies](#getcookies)
[getData](#getdata)
[getWorldStatus](#getworldstatus)

## Constructors

### constructor

* new Game(  
  Â Â Â Â view: string,  
  Â Â Â Â data: object,  
  Â Â Â Â socket: Socket<DefaultEventsMap, DefaultEventsMap>,  
  ): Game

  Initialize a singleton Game instance for a specific view using socket data retrieved from the server.

  #### Parameters

  + view: string

    The named view which is active for this game instance.
  + data: object

    An object of all the World data vended by the server when the client first connects
  + socket: Socket<DefaultEventsMap, DefaultEventsMap>

    The open web-socket which should be used to transact game-state data

  #### Returns Game

## Properties

### actors

actors: [Actors](foundry.documents.collections.Actors.md)

The collection of Actor documents which exists in the World.

### `Readonly`audio

audio: [AudioHelper](foundry.audio.AudioHelper.md)

The singleton Audio Helper.

### `Readonly`canvas

canvas: [canvas](../modules/foundry.canvas.md).[Canvas](foundry.canvas.Canvas.md)

The singleton game Canvas.

### cards

cards: [CardStacks](foundry.documents.collections.CardStacks.md)

The collection of Cards documents which exists in the World.

### `Readonly`clipboard

clipboard: [ClipboardHelper](foundry.helpers.interaction.ClipboardHelper.md)

The singleton Clipboard Helper.

### `Readonly`collections

collections: [Collection](foundry.utils.Collection.md)<string, [WorldCollection](foundry.documents.abstract.WorldCollection.md)<any>>

A mapping of [WorldCollection](foundry.documents.abstract.WorldCollection.md) instances, one per primary [Document](foundry.abstract.Document.md) type.

### combats

combats: [CombatEncounters](foundry.documents.collections.CombatEncounters.md)

The collection of Combat documents which exists in the World.

### `Readonly`compendiumArt

compendiumArt: [CompendiumArt](foundry.helpers.media.CompendiumArt.md)

The singleton compendium art manager.

### compendiumUUIDRedirects

compendiumUUIDRedirects: [StringTree](foundry.utils.StringTree.md)<object>

The UUID redirects tree.

### `Readonly`data

data: object

The object of world data passed from the server.

### debug

debug: boolean = false

Whether the Game is running in debug mode

### `Readonly`documentIndex

documentIndex: [DocumentIndex](foundry.helpers.DocumentIndex.md)

The singleton DocumentIndex instance.

### folders

folders: [Folders](foundry.documents.collections.Folders.md)

The collection of Folder documents which exists in the World.

### `Readonly`gamepad

gamepad: [GamepadManager](foundry.helpers.interaction.GamepadManager.md)

The singleton Gamepad Manager.

### `Readonly`i18n

i18n: [Localization](foundry.helpers.Localization.md)

Localization support.

### `Readonly`issues

issues: [ClientIssues](foundry.helpers.ClientIssues.md)

The singleton ClientIssues manager.

### items

items: [Items](foundry.documents.collections.Items.md)

The collection of Item documents which exists in the World.

### journal

journal: [Journal](foundry.documents.collections.Journal.md)

The collection of JournalEntry documents which exists in the World.

### `Readonly`keybindings

keybindings: [ClientKeybindings](foundry.helpers.interaction.ClientKeybindings.md)

Client keybindings which are used to configure application behavior

### `Readonly`keyboard

keyboard: [KeyboardManager](foundry.helpers.interaction.KeyboardManager.md)

The singleton Keyboard Manager.

### loading

loading: boolean = false

A flag for whether texture assets for the game canvas are currently loading

### macros

macros: [Macros](foundry.documents.collections.Macros.md)

The collection of Macro documents which exists in the World.

### messages

messages: [ChatMessages](foundry.documents.collections.ChatMessages.md)

The collection of ChatMessage documents which exists in the World.

### modules

modules: [Collection](foundry.utils.Collection.md)<string, [Module](foundry.packages.Module.md)>

A Map of active Modules which are currently eligible to be enabled in this World.
The subset of Modules which are designated as active are currently enabled.

### `Readonly`mouse

mouse: [MouseManager](foundry.helpers.interaction.MouseManager.md)

The singleton Mouse Manager.

### `Readonly`nue

nue: [NewUserExperienceManager](foundry.nue.NewUserExperienceManager.md)

The singleton New User Experience manager.

### `Readonly`packs

packs: [CompendiumPacks](foundry.documents.collections.CompendiumPacks.md)

A mapping of CompendiumCollection instances, one per Compendium pack.

### permissions

permissions: Record<string, number[]>

The user role permissions setting.

### playlists

playlists: [Playlists](foundry.documents.collections.Playlists.md)

The collection of Playlist documents which exists in the World.

### ready

ready: boolean = false

A flag for whether the Game has successfully reached the [hookEvents.ready](../functions/hookEvents.ready.md) hook

### `Readonly`release

release: [ReleaseData](foundry.config.ReleaseData.md)

The Release data for this version of Foundry

### scenes

scenes: [Scenes](foundry.documents.collections.Scenes.md)

The collection of Scene documents which exists in the World.

### `Readonly`settings

settings: [ClientSettings](foundry.helpers.ClientSettings.md)

Client settings which are used to configure application behavior.

### `Readonly`socket

socket: Socket<DefaultEventsMap, DefaultEventsMap> | null

A reference to the open [Socket.io](http://Socket.io) connection.

### system

system: [System](foundry.packages.System.md)

The System which is used to power this game World.

### tables

tables: [RollTables](foundry.documents.collections.RollTables.md)

The collection of RollTable documents which exists in the World.

### `Readonly`time

time: [GameTime](foundry.helpers.GameTime.md)

A singleton GameTime instance which manages the progression of time within the game world.

### `Readonly`tooltip

tooltip: [TooltipManager](foundry.helpers.interaction.TooltipManager.md)

The singleton TooltipManager.

### `Readonly`tours

tours: [ToursCollection](foundry.nue.ToursCollection.md)

The singleton Tours collection.

### `Readonly`userId

userId: string | null

The id of the active World user, if any.

### users

users: [Users](foundry.documents.collections.Users.md)

The collection of User documents which exists in the World.

### `Readonly`video

video: [VideoHelper](foundry.helpers.media.VideoHelper.md)

The singleton Video Helper.

### `Readonly`view

view:  
Â Â Â Â | "join"  
Â Â Â Â | "update"  
Â Â Â Â | "game"  
Â Â Â Â | "stream"  
Â Â Â Â | "auth"  
Â Â Â Â | "license"  
Â Â Â Â | "setup"  
Â Â Â Â | "players"

The named view which is currently active.

### `Readonly`workers

workers: [WorkerManager](foundry.helpers.WorkerManager.md)

A singleton web Worker manager.

### world

world: [World](foundry.packages.World.md)

The game World which is currently active.

## Accessors

### activeTool

* get activeTool(): string | null

  A convenient reference to the currently active canvas tool

  #### Returns string | null

### combat

* get combat(): [documents](../modules/foundry.documents.md).[Combat](foundry.documents.Combat.md) | null

  A convenience accessor for the currently viewed Combat encounter
  If the CombatTracker has yet to render, fall back to the first active combat.

  #### Returns [documents](../modules/foundry.documents.md).[Combat](foundry.documents.Combat.md) | null

### compendiumConfiguration

* get compendiumConfiguration(): WorldCompendiumConfiguration

  A shortcut to compendiumConfiguration data settings

  #### Returns WorldCompendiumConfiguration

### documentTypes

* get documentTypes(): Record<string, string[]>

  A registry of document types supported by the active world.

  #### Returns Record<string, string[]>

### isAdmin

* get isAdmin(): boolean

  Is the current session user authenticated as an application administrator?

  #### Returns boolean

### model

* get model(): Record<string, Record<string, object>>

  A registry of document sub-types and their respective template.json defaults.

  #### Returns Record<string, Record<string, object>>

### paused

* get paused(): boolean

  A state variable which tracks whether the game session is currently paused

  #### Returns boolean

### user

* get user(): [documents](../modules/foundry.documents.md).[User](foundry.documents.User.md) | null

  The currently connected User document, or null if Users is not yet initialized

  #### Returns [documents](../modules/foundry.documents.md).[User](foundry.documents.User.md) | null

### version

* get version(): string

  Returns the current version of the Release, usable for comparisons using isNewerVersion

  #### Returns string

## Methods

### \_initializeView

* \_initializeView(): Promise<void>

  `Internal`

  Initialize elements required for the current view

  #### Returns Promise<void>

### activateListeners

* activateListeners(document: Document): void

  Activate Event Listeners which apply to every Game View.

  #### Parameters

  + document: Document

    The document to bind listeners to.

  #### Returns void

### activateSocketListeners

* activateSocketListeners(): void

  Activate Socket event listeners which are used to transact game state data with the server

  #### Returns void

### configureCursors

* configureCursors(): void

  Configure custom cursors.

  #### Returns void

### configureUI

* configureUI(config?: [GameUIConfiguration](../interfaces/foundry.GameUIConfiguration.md)): void

  Configure the user interface.

  #### Parameters

  + config: [GameUIConfiguration](../interfaces/foundry.GameUIConfiguration.md) = {}

  #### Returns void

### getPackageScopes

* getPackageScopes(): string[]

  Return the named scopes which can exist for packages.
  Scopes are returned in the prioritization order that their content is loaded.

  #### Returns string[]

  An array of string package scopes

### initialize

* initialize(): Promise<void>

  Initialize the Game for the current window location, triggering the [hookEvents.init](../functions/hookEvents.init.md) event.

  #### Returns Promise<void>

### initializeCanvas

* initializeCanvas(): Promise<void>

  Initialize the game Canvas

  #### Returns Promise<void>

### initializeConfig

* initializeConfig(): void

  Initialize configuration state.

  #### Returns void

### initializeDocuments

* initializeDocuments(): void

  Initialize game state data by creating [WorldCollection](foundry.documents.abstract.WorldCollection.md) instances for every primary [Document](foundry.abstract.Document.md) type

  #### Returns void

### initializeGamepads

* initializeGamepads(): void

  Initialize Gamepad controls

  #### Returns void

### initializeKeyboard

* initializeKeyboard(): void

  Initialize Keyboard controls

  #### Returns void

### initializeMouse

* initializeMouse(): void

  Initialize Mouse controls

  #### Returns void

### initializePacks

* initializePacks(): [CompendiumPacks](foundry.documents.collections.CompendiumPacks.md)

  Initialize the Compendium packs which are present within this Game
  Create a Collection which maps each Compendium pack using its collection ID.

  #### Returns [CompendiumPacks](foundry.documents.collections.CompendiumPacks.md)

### initializeRTC

* initializeRTC(): Promise<boolean>

  Initialize the WebRTC implementation

  #### Returns Promise<boolean>

### initializeTrees

* initializeTrees(): void

  Initialize collection trees.

  #### Returns void

### initializeUI

* initializeUI(): void

  Initialize core UI elements

  #### Returns void

### logOut

* logOut(): void

  Log out of the game session by returning to the Join screen

  #### Returns void

### raceWithWindowHidden

* raceWithWindowHidden<[T](#racewithwindowhiddent)>(promise: Promise<[T](#racewithwindowhiddent)>): Promise<void | [T](#racewithwindowhiddent)>

  Race the given against for the browser window becoming hidden.

  #### Type Parameters

  + T

  #### Parameters

  + promise: Promise<[T](#racewithwindowhiddent)>

    The promise that is raced against the promise of the browser window becoming hidden

  #### Returns Promise<void | [T](#racewithwindowhiddent)>

  The promise of the race

### registerSettings

* registerSettings(): void

  Register core game settings

  #### Returns void

### setupGame

* setupGame(): Promise<void>

  Fully set up the game state, initializing Documents, UI applications, and the Canvas. Triggers the
  [hookEvents.setup](../functions/hookEvents.setup.md) and [hookEvents.ready](../functions/hookEvents.ready.md) events.

  #### Returns Promise<void>

### setupPackages

* setupPackages(data: object): void

  Configure package data that is currently enabled for this world

  #### Parameters

  + data: object

    Game data provided by the server socket

  #### Returns void

### shutDown

* shutDown(): Promise<void>

  Shut down the currently active Game. Requires GameMaster user permission.

  #### Returns Promise<void>

### toggleCharacterSheet

* toggleCharacterSheet(): [ActorSheetV2](foundry.applications.sheets.ActorSheetV2.md) | [ActorSheet](foundry.appv1.sheets.ActorSheet.md) | null

  Open Character sheet for current token or controlled actor

  #### Returns [ActorSheetV2](foundry.applications.sheets.ActorSheetV2.md) | [ActorSheet](foundry.appv1.sheets.ActorSheet.md) | null

  The toggled [Actor](foundry.documents.Actor.md) sheet, or null
  if the [User](foundry.documents.User.md) has no assigned
  character

### togglePause

* togglePause(  
  Â Â Â Â pause: boolean,  
  Â Â Â Â options?: { broadcast?: boolean; userId?: string },  
  ): boolean

  Toggle the pause state of the game, triggering the [hookEvents.pauseGame](../functions/hookEvents.pauseGame.md) hook when the paused
  state changes.

  #### Parameters

  + pause: boolean

    The desired pause state; true for paused, false for un-paused
  + `Optional`options: { broadcast?: boolean; userId?: string } = {}

    Additional options which modify the pause operation

    - ##### `Optional`broadcast?: boolean

      Broadcast the pause state change to other connected clients?
      Broadcasting to other clients can only be done by a GM user.
    - ##### `Optional`userId?: string

      The ID of the user who triggered the pause operation. This is
      populated automatically by the game server.

  #### Returns boolean

  The new paused state

### `Protected`\_onClickHyperlink

* \_onClickHyperlink(event: PointerEvent): void

  `Protected`

  On left mouse clicks, check if the element is contained in a valid hyperlink and open it in a new tab.

  #### Parameters

  + event: PointerEvent

  #### Returns void

### `Static`connect

* connect(): Promise<Socket<DefaultEventsMap, DefaultEventsMap>>

  Establish a live connection to the game server through the [socket.io](http://socket.io) URL

  #### Returns Promise<Socket<DefaultEventsMap, DefaultEventsMap>>

  A promise which resolves to the connected socket, if successful

### `Static`create

* create(view: string): Promise<Game>

  Fetch World data and return a Game instance

  #### Parameters

  + view: string

    The named view being created

  #### Returns Promise<Game>

  A Promise which resolves to the created Game instance

### `Static`getCookies

* getCookies(): object

  Retrieve the cookies which are attached to the client session

  #### Returns object

  The session cookies

### `Static`getData

* getData(  
  Â Â Â Â socket: Socket<DefaultEventsMap, DefaultEventsMap>,  
  Â Â Â Â view: string,  
  ): Promise<object>

  Request World data from server and return it

  #### Parameters

  + socket: Socket<DefaultEventsMap, DefaultEventsMap>

    The active socket connection
  + view: string

    The view for which data is being requested

  #### Returns Promise<object>

### `Static`getWorldStatus

* getWorldStatus(  
  Â Â Â Â socket: Socket<DefaultEventsMap, DefaultEventsMap>,  
  ): Promise<boolean>

  Get the current World status upon initial connection.

  #### Parameters

  + socket: Socket<DefaultEventsMap, DefaultEventsMap>

    The active client socket connection

  #### Returns Promise<boolean>