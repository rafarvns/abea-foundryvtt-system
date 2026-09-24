---
title: "Game | Foundry Virtual Tabletop - API Documentation - Version 13"
url: "https://foundryvtt.com/api/classes/foundry.Game.html"
category: "classes"
---

* [Foundry Virtual Tabletop - API Documentation - Version 13](../modules.html)
* [foundry](../modules/foundry.html)
* [Game](foundry.Game.html)

# Class Game

The core Game instance which encapsulates the data, settings, and states relevant for managing the game experience.
The singleton instance of the Game class is available as the global variable game.

##### Index

### Constructors

[constructor](foundry.Game.html#constructor)

### Properties

[actors](foundry.Game.html#actors)
[audio](foundry.Game.html#audio)
[canvas](foundry.Game.html#canvas)
[cards](foundry.Game.html#cards)
[clipboard](foundry.Game.html#clipboard)
[collections](foundry.Game.html#collections)
[combats](foundry.Game.html#combats)
[compendiumArt](foundry.Game.html#compendiumart)
[compendiumUUIDRedirects](foundry.Game.html#compendiumuuidredirects)
[data](foundry.Game.html#data)
[debug](foundry.Game.html#debug)
[documentIndex](foundry.Game.html#documentindex)
[folders](foundry.Game.html#folders)
[gamepad](foundry.Game.html#gamepad)
[i18n](foundry.Game.html#i18n)
[issues](foundry.Game.html#issues)
[items](foundry.Game.html#items)
[journal](foundry.Game.html#journal)
[keybindings](foundry.Game.html#keybindings)
[keyboard](foundry.Game.html#keyboard)
[loading](foundry.Game.html#loading)
[macros](foundry.Game.html#macros)
[messages](foundry.Game.html#messages)
[modules](foundry.Game.html#modules)
[mouse](foundry.Game.html#mouse)
[nue](foundry.Game.html#nue)
[packs](foundry.Game.html#packs)
[permissions](foundry.Game.html#permissions)
[playlists](foundry.Game.html#playlists)
[ready](foundry.Game.html#ready)
[release](foundry.Game.html#release)
[scenes](foundry.Game.html#scenes)
[sessionId](foundry.Game.html#sessionid)
[settings](foundry.Game.html#settings)
[socket](foundry.Game.html#socket)
[system](foundry.Game.html#system)
[tables](foundry.Game.html#tables)
[time](foundry.Game.html#time)
[tooltip](foundry.Game.html#tooltip)
[tours](foundry.Game.html#tours)
[userId](foundry.Game.html#userid)
[users](foundry.Game.html#users)
[video](foundry.Game.html#video)
[view](foundry.Game.html#view)
[workers](foundry.Game.html#workers)
[world](foundry.Game.html#world)

### Accessors

[activeTool](foundry.Game.html#activetool)
[combat](foundry.Game.html#combat)
[compendiumConfiguration](foundry.Game.html#compendiumconfiguration)
[documentTypes](foundry.Game.html#documenttypes)
[isAdmin](foundry.Game.html#isadmin)
[model](foundry.Game.html#model)
[paused](foundry.Game.html#paused)
[user](foundry.Game.html#user)
[version](foundry.Game.html#version)

### Methods

[\_initializeView](foundry.Game.html#_initializeview)
[activateListeners](foundry.Game.html#activatelisteners)
[activateSocketListeners](foundry.Game.html#activatesocketlisteners)
[configureCursors](foundry.Game.html#configurecursors)
[configureUI](foundry.Game.html#configureui)
[getPackageScopes](foundry.Game.html#getpackagescopes)
[initialize](foundry.Game.html#initialize)
[initializeCanvas](foundry.Game.html#initializecanvas)
[initializeConfig](foundry.Game.html#initializeconfig)
[initializeDocuments](foundry.Game.html#initializedocuments)
[initializeGamepads](foundry.Game.html#initializegamepads)
[initializeKeyboard](foundry.Game.html#initializekeyboard)
[initializeMouse](foundry.Game.html#initializemouse)
[initializePacks](foundry.Game.html#initializepacks)
[initializeRTC](foundry.Game.html#initializertc)
[initializeTrees](foundry.Game.html#initializetrees)
[initializeUI](foundry.Game.html#initializeui)
[logOut](foundry.Game.html#logout)
[registerSettings](foundry.Game.html#registersettings)
[setupGame](foundry.Game.html#setupgame)
[setupPackages](foundry.Game.html#setuppackages)
[shutDown](foundry.Game.html#shutdown)
[toggleCharacterSheet](foundry.Game.html#togglecharactersheet)
[togglePause](foundry.Game.html#togglepause)
[\_onClickHyperlink](foundry.Game.html#_onclickhyperlink)
[connect](foundry.Game.html#connect)
[create](foundry.Game.html#create)
[getCookies](foundry.Game.html#getcookies)
[getData](foundry.Game.html#getdata)
[getWorldStatus](foundry.Game.html#getworldstatus)

## Constructors

### constructor

* new Game(  
  Â Â Â Â view: string,  
  Â Â Â Â data: object,  
  Â Â Â Â sessionId: string,  
  Â Â Â Â socket: Socket<DefaultEventsMap, DefaultEventsMap>,  
  ): [Game](foundry.Game.html)

  Initialize a singleton Game instance for a specific view using socket data retrieved from the server.

  #### Parameters

  + view: string

    The named view which is active for this game instance.
  + data: object

    An object of all the World data vended by the server when the client first connects
  + sessionId: string

    The ID of the currently active client session retrieved from the browser cookie
  + socket: Socket<DefaultEventsMap, DefaultEventsMap>

    The open web-socket which should be used to transact game-state data

  #### Returns [Game](foundry.Game.html)

## Properties

### actors

actors: [Actors](foundry.documents.collections.Actors.html)

The collection of Actor documents which exists in the World.

### `Readonly`audio

audio: [AudioHelper](foundry.audio.AudioHelper.html)

The singleton Audio Helper.

### `Readonly`canvas

canvas: [canvas](../modules/foundry.canvas.html).[Canvas](foundry.canvas.Canvas.html)

The singleton game Canvas.

### cards

cards: [CardStacks](foundry.documents.collections.CardStacks.html)

The collection of Cards documents which exists in the World.

### `Readonly`clipboard

clipboard: [ClipboardHelper](foundry.helpers.interaction.ClipboardHelper.html)

The singleton Clipboard Helper.

### `Readonly`collections

collections: [Collection](foundry.utils.Collection.html)<string, [WorldCollection](foundry.documents.abstract.WorldCollection.html)<any>>

A mapping of [WorldCollection](foundry.documents.abstract.WorldCollection.html) instances, one per primary [Document](foundry.abstract.Document.html) type.

### combats

combats: [CombatEncounters](foundry.documents.collections.CombatEncounters.html)

The collection of Combat documents which exists in the World.

### `Readonly`compendiumArt

compendiumArt: [CompendiumArt](foundry.helpers.media.CompendiumArt.html)

The singleton compendium art manager.

### compendiumUUIDRedirects

compendiumUUIDRedirects: [StringTree](foundry.utils.StringTree.html)

The UUID redirects tree.

### `Readonly`data

data: object

The object of world data passed from the server.

### debug

debug: boolean = false

Whether the Game is running in debug mode

### `Readonly`documentIndex

documentIndex: [DocumentIndex](foundry.helpers.DocumentIndex.html)

The singleton DocumentIndex instance.

### folders

folders: [Folders](foundry.documents.collections.Folders.html)

The collection of Folder documents which exists in the World.

### `Readonly`gamepad

gamepad: [GamepadManager](foundry.helpers.interaction.GamepadManager.html)

The singleton Gamepad Manager.

### `Readonly`i18n

i18n: [Localization](foundry.helpers.Localization.html)

Localization support.

### `Readonly`issues

issues: [ClientIssues](foundry.helpers.ClientIssues.html)

The singleton ClientIssues manager.

### items

items: [Items](foundry.documents.collections.Items.html)

The collection of Item documents which exists in the World.

### journal

journal: [Journal](foundry.documents.collections.Journal.html)

The collection of JournalEntry documents which exists in the World.

### `Readonly`keybindings

keybindings: [ClientKeybindings](foundry.helpers.interaction.ClientKeybindings.html)

Client keybindings which are used to configure application behavior

### `Readonly`keyboard

keyboard: [KeyboardManager](foundry.helpers.interaction.KeyboardManager.html)

The singleton Keyboard Manager.

### loading

loading: boolean = false

A flag for whether texture assets for the game canvas are currently loading

### macros

macros: [Macros](foundry.documents.collections.Macros.html)

The collection of Macro documents which exists in the World.

### messages

messages: [ChatMessages](foundry.documents.collections.ChatMessages.html)

The collection of ChatMessage documents which exists in the World.

### modules

modules: [Collection](foundry.utils.Collection.html)<string, [Module](foundry.packages.Module.html)>

A Map of active Modules which are currently eligible to be enabled in this World.
The subset of Modules which are designated as active are currently enabled.

### `Readonly`mouse

mouse: [MouseManager](foundry.helpers.interaction.MouseManager.html)

The singleton Mouse Manager.

### `Readonly`nue

nue: [NewUserExperienceManager](foundry.nue.NewUserExperienceManager.html)

The singleton New User Experience manager.

### `Readonly`packs

packs: [CompendiumPacks](foundry.documents.collections.CompendiumPacks.html)

A mapping of CompendiumCollection instances, one per Compendium pack.

### permissions

permissions: Record<string, number[]>

The user role permissions setting.

### playlists

playlists: [Playlists](foundry.documents.collections.Playlists.html)

The collection of Playlist documents which exists in the World.

### ready

ready: boolean = false

A flag for whether the Game has successfully reached the [hookEvents.ready](../functions/hookEvents.ready.html) hook

### `Readonly`release

release: [ReleaseData](foundry.config.ReleaseData.html)

The Release data for this version of Foundry

### scenes

scenes: [Scenes](foundry.documents.collections.Scenes.html)

The collection of Scene documents which exists in the World.

### `Readonly`sessionId

sessionId: string

The client session id which is currently active.

### `Readonly`settings

settings: [ClientSettings](foundry.helpers.ClientSettings.html)

Client settings which are used to configure application behavior.

### `Readonly`socket

socket: null | Socket<DefaultEventsMap, DefaultEventsMap>

A reference to the open [Socket.io](http://Socket.io) connection.

### system

system: [System](foundry.packages.System.html)

The System which is used to power this game World.

### tables

tables: [RollTables](foundry.documents.collections.RollTables.html)

The collection of RollTable documents which exists in the World.

### `Readonly`time

time: [GameTime](foundry.helpers.GameTime.html)

A singleton GameTime instance which manages the progression of time within the game world.

### `Readonly`tooltip

tooltip: [TooltipManager](foundry.helpers.interaction.TooltipManager.html)

The singleton TooltipManager.

### `Readonly`tours

tours: [ToursCollection](foundry.nue.ToursCollection.html)

The singleton Tours collection.

### `Readonly`userId

userId: null | string

The id of the active World user, if any.

### users

users: [Users](foundry.documents.collections.Users.html)

The collection of User documents which exists in the World.

### `Readonly`video

video: [VideoHelper](foundry.helpers.media.VideoHelper.html)

The singleton Video Helper.

### `Readonly`view

view:  
Â Â Â Â | "game"  
Â Â Â Â | "stream"  
Â Â Â Â | "auth"  
Â Â Â Â | "license"  
Â Â Â Â | "setup"  
Â Â Â Â | "players"  
Â Â Â Â | "join"  
Â Â Â Â | "update"

The named view which is currently active.

### `Readonly`workers

workers: [WorkerManager](foundry.helpers.WorkerManager.html)

A singleton web Worker manager.

### world

world: [World](foundry.packages.World.html)

The game World which is currently active.

## Accessors

### activeTool

* get activeTool(): string

  A convenient reference to the currently active canvas tool

  #### Returns string

### combat

* get combat(): null | [documents](../modules/foundry.documents.html).[Combat](foundry.documents.Combat.html)

  A convenience accessor for the currently viewed Combat encounter

  #### Returns null | [documents](../modules/foundry.documents.html).[Combat](foundry.documents.Combat.html)

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

* get user(): null | [documents](../modules/foundry.documents.html).[User](foundry.documents.User.html)

  The currently connected User document, or null if Users is not yet initialized

  #### Returns null | [documents](../modules/foundry.documents.html).[User](foundry.documents.User.html)

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

* activateListeners(): void

  Activate Event Listeners which apply to every Game View

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

* configureUI(config?: [GameUIConfiguration](../interfaces/foundry.GameUIConfiguration.html)): void

  Configure the user interface.

  #### Parameters

  + config: [GameUIConfiguration](../interfaces/foundry.GameUIConfiguration.html) = {}

  #### Returns void

### getPackageScopes

* getPackageScopes(): string[]

  Return the named scopes which can exist for packages.
  Scopes are returned in the prioritization order that their content is loaded.

  #### Returns string[]

  An array of string package scopes

### initialize

* initialize(): Promise<void>

  Initialize the Game for the current window location, triggering the [hookEvents.init](../functions/hookEvents.init.html) event.

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

  Initialize game state data by creating [WorldCollection](foundry.documents.abstract.WorldCollection.html) instances for every primary [Document](foundry.abstract.Document.html) type

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

* initializePacks(): [CompendiumPacks](foundry.documents.collections.CompendiumPacks.html)

  Initialize the Compendium packs which are present within this Game
  Create a Collection which maps each Compendium pack using its collection ID.

  #### Returns [CompendiumPacks](foundry.documents.collections.CompendiumPacks.html)

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

### registerSettings

* registerSettings(): void

  Register core game settings

  #### Returns void

### setupGame

* setupGame(): Promise<void>

  Fully set up the game state, initializing Documents, UI applications, and the Canvas. Triggers the
  [hookEvents.setup](../functions/hookEvents.setup.html) and [hookEvents.ready](../functions/hookEvents.ready.html) events.

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

* toggleCharacterSheet(): null | [ActorSheetV2](foundry.applications.sheets.ActorSheetV2.html) | [ActorSheet](foundry.appv1.sheets.ActorSheet.html)

  Open Character sheet for current token or controlled actor

  #### Returns null | [ActorSheetV2](foundry.applications.sheets.ActorSheetV2.html) | [ActorSheet](foundry.appv1.sheets.ActorSheet.html)

  The toggled [Actor](foundry.documents.Actor.html) sheet, or null
  if the [User](foundry.documents.User.html) has no assigned
  character

### togglePause

* togglePause(  
  Â Â Â Â pause: boolean,  
  Â Â Â Â options?: { broadcast?: boolean; userId?: string },  
  ): boolean

  Toggle the pause state of the game, triggering the [hookEvents.pauseGame](../functions/hookEvents.pauseGame.html) hook when the paused
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

* connect(sessionId: string): Promise<Socket<DefaultEventsMap, DefaultEventsMap>>

  Establish a live connection to the game server through the [socket.io](http://socket.io) URL

  #### Parameters

  + sessionId: string

    The client session ID with which to establish the connection

  #### Returns Promise<Socket<DefaultEventsMap, DefaultEventsMap>>

  A promise which resolves to the connected socket, if successful

### `Static`create

* create(view: string, sessionId: null | string): Promise<[Game](foundry.Game.html)>

  Fetch World data and return a Game instance

  #### Parameters

  + view: string

    The named view being created
  + sessionId: null | string

    The current sessionId of the connecting client

  #### Returns Promise<[Game](foundry.Game.html)>

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