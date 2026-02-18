---
title: "ChatLog | Foundry Virtual Tabletop - API Documentation - Version 13"
url: "https://foundryvtt.com/api/classes/foundry.applications.sidebar.tabs.ChatLog.html"
category: "classes"
---

* [Foundry Virtual Tabletop - API Documentation - Version 13](../modules.html)
* [foundry](../modules/foundry.html)
* [applications](../modules/foundry.applications.html)
* [sidebar](../modules/foundry.applications.sidebar.html)
* [tabs](../modules/foundry.applications.sidebar.tabs.html)
* [ChatLog](foundry.applications.sidebar.tabs.ChatLog.html)

# Class ChatLog

The sidebar chat tab.

#### Mixes

HandlebarsApplication

#### Hierarchy ([View Summary](../hierarchy.html#foundry.applications.sidebar.tabs.ChatLog))

* [AbstractSidebarTab](foundry.applications.sidebar.AbstractSidebarTab.html)<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.html), [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html), this>
  + ChatLog

##### Index

### Constructors

[constructor](foundry.applications.sidebar.tabs.ChatLog.html#constructor)

### Properties

[options](foundry.applications.sidebar.tabs.ChatLog.html#options)
[position](foundry.applications.sidebar.tabs.ChatLog.html#position)
[tabGroups](foundry.applications.sidebar.tabs.ChatLog.html#tabgroups)
[\_appId](foundry.applications.sidebar.tabs.ChatLog.html#_appid)
[\_maxZ](foundry.applications.sidebar.tabs.ChatLog.html#_maxz)
[BASE\_APPLICATION](foundry.applications.sidebar.tabs.ChatLog.html#base_application)
[DEFAULT\_OPTIONS](foundry.applications.sidebar.tabs.ChatLog.html#default_options)
[emittedEvents](foundry.applications.sidebar.tabs.ChatLog.html#emittedevents)
[MAX\_MESSAGE\_HISTORY](foundry.applications.sidebar.tabs.ChatLog.html#max_message_history)
[MESSAGE\_PATTERNS](foundry.applications.sidebar.tabs.ChatLog.html#message_patterns)
[MULTILINE\_COMMANDS](foundry.applications.sidebar.tabs.ChatLog.html#multiline_commands)
[NOTIFY\_DURATION](foundry.applications.sidebar.tabs.ChatLog.html#notify_duration)
[NOTIFY\_TICKER](foundry.applications.sidebar.tabs.ChatLog.html#notify_ticker)
[NOTIFY\_UNPAUSE](foundry.applications.sidebar.tabs.ChatLog.html#notify_unpause)
[PARTS](foundry.applications.sidebar.tabs.ChatLog.html#parts)
[PIP\_DURATION](foundry.applications.sidebar.tabs.ChatLog.html#pip_duration)
[RENDER\_STATES](foundry.applications.sidebar.tabs.ChatLog.html#render_states)
[tabName](foundry.applications.sidebar.tabs.ChatLog.html#tabname)
[TABS](foundry.applications.sidebar.tabs.ChatLog.html#tabs)
[UPDATE\_TIMESTAMP\_FREQUENCY](foundry.applications.sidebar.tabs.ChatLog.html#update_timestamp_frequency)

### Accessors

[active](foundry.applications.sidebar.tabs.ChatLog.html#active)
[classList](foundry.applications.sidebar.tabs.ChatLog.html#classlist)
[collection](foundry.applications.sidebar.tabs.ChatLog.html#collection)
[element](foundry.applications.sidebar.tabs.ChatLog.html#element)
[form](foundry.applications.sidebar.tabs.ChatLog.html#form)
[hasFrame](foundry.applications.sidebar.tabs.ChatLog.html#hasframe)
[history](foundry.applications.sidebar.tabs.ChatLog.html#history)
[id](foundry.applications.sidebar.tabs.ChatLog.html#id)
[isAtBottom](foundry.applications.sidebar.tabs.ChatLog.html#isatbottom)
[isPopout](foundry.applications.sidebar.tabs.ChatLog.html#ispopout)
[minimized](foundry.applications.sidebar.tabs.ChatLog.html#minimized)
[popout](foundry.applications.sidebar.tabs.ChatLog.html#popout)
[rendered](foundry.applications.sidebar.tabs.ChatLog.html#rendered)
[state](foundry.applications.sidebar.tabs.ChatLog.html#state)
[tabName](foundry.applications.sidebar.tabs.ChatLog.html#tabname-1)
[title](foundry.applications.sidebar.tabs.ChatLog.html#title)
[window](foundry.applications.sidebar.tabs.ChatLog.html#window)

### Methods

[\_attachPartListeners](foundry.applications.sidebar.tabs.ChatLog.html#_attachpartlisteners)
[\_awaitTransition](foundry.applications.sidebar.tabs.ChatLog.html#_awaittransition)
[\_configureRenderOptions](foundry.applications.sidebar.tabs.ChatLog.html#_configurerenderoptions)
[\_doEvent](foundry.applications.sidebar.tabs.ChatLog.html#_doevent)
[\_initializeApplicationOptions](foundry.applications.sidebar.tabs.ChatLog.html#_initializeapplicationoptions)
[\_onActivate](foundry.applications.sidebar.tabs.ChatLog.html#_onactivate)
[\_onClose](foundry.applications.sidebar.tabs.ChatLog.html#_onclose)
[\_onDeactivate](foundry.applications.sidebar.tabs.ChatLog.html#_ondeactivate)
[\_onFirstRender](foundry.applications.sidebar.tabs.ChatLog.html#_onfirstrender)
[\_onRender](foundry.applications.sidebar.tabs.ChatLog.html#_onrender)
[\_postRender](foundry.applications.sidebar.tabs.ChatLog.html#_postrender)
[\_preClose](foundry.applications.sidebar.tabs.ChatLog.html#_preclose)
[\_prepareContext](foundry.applications.sidebar.tabs.ChatLog.html#_preparecontext)
[\_preparePartContext](foundry.applications.sidebar.tabs.ChatLog.html#_preparepartcontext)
[\_preSyncPartState](foundry.applications.sidebar.tabs.ChatLog.html#_presyncpartstate)
[\_renderFrame](foundry.applications.sidebar.tabs.ChatLog.html#_renderframe)
[\_renderHTML](foundry.applications.sidebar.tabs.ChatLog.html#_renderhtml)
[\_syncPartState](foundry.applications.sidebar.tabs.ChatLog.html#_syncpartstate)
[\_toggleNotifications](foundry.applications.sidebar.tabs.ChatLog.html#_togglenotifications)
[\_updateRollMode](foundry.applications.sidebar.tabs.ChatLog.html#_updaterollmode)
[activate](foundry.applications.sidebar.tabs.ChatLog.html#activate)
[addEventListener](foundry.applications.sidebar.tabs.ChatLog.html#addeventlistener)
[bringToFront](foundry.applications.sidebar.tabs.ChatLog.html#bringtofront)
[changeTab](foundry.applications.sidebar.tabs.ChatLog.html#changetab)
[close](foundry.applications.sidebar.tabs.ChatLog.html#close)
[deleteMessage](foundry.applications.sidebar.tabs.ChatLog.html#deletemessage)
[dispatchEvent](foundry.applications.sidebar.tabs.ChatLog.html#dispatchevent)
[maximize](foundry.applications.sidebar.tabs.ChatLog.html#maximize)
[minimize](foundry.applications.sidebar.tabs.ChatLog.html#minimize)
[notify](foundry.applications.sidebar.tabs.ChatLog.html#notify)
[postOne](foundry.applications.sidebar.tabs.ChatLog.html#postone)
[processMessage](foundry.applications.sidebar.tabs.ChatLog.html#processmessage)
[removeEventListener](foundry.applications.sidebar.tabs.ChatLog.html#removeeventlistener)
[render](foundry.applications.sidebar.tabs.ChatLog.html#render)
[renderBatch](foundry.applications.sidebar.tabs.ChatLog.html#renderbatch)
[renderPopout](foundry.applications.sidebar.tabs.ChatLog.html#renderpopout)
[scrollBottom](foundry.applications.sidebar.tabs.ChatLog.html#scrollbottom)
[setPosition](foundry.applications.sidebar.tabs.ChatLog.html#setposition)
[submit](foundry.applications.sidebar.tabs.ChatLog.html#submit)
[toggleControls](foundry.applications.sidebar.tabs.ChatLog.html#togglecontrols)
[updateMessage](foundry.applications.sidebar.tabs.ChatLog.html#updatemessage)
[updateTimestamps](foundry.applications.sidebar.tabs.ChatLog.html#updatetimestamps)
[\_attachFrameListeners](foundry.applications.sidebar.tabs.ChatLog.html#_attachframelisteners)
[\_attachLogListeners](foundry.applications.sidebar.tabs.ChatLog.html#_attachloglisteners)
[\_canRender](foundry.applications.sidebar.tabs.ChatLog.html#_canrender)
[\_createContextMenu](foundry.applications.sidebar.tabs.ChatLog.html#_createcontextmenu)
[\_getEntryContextOptions](foundry.applications.sidebar.tabs.ChatLog.html#_getentrycontextoptions)
[\_getHeaderControls](foundry.applications.sidebar.tabs.ChatLog.html#_getheadercontrols)
[\_getTabsConfig](foundry.applications.sidebar.tabs.ChatLog.html#_gettabsconfig)
[\_headerControlButtons](foundry.applications.sidebar.tabs.ChatLog.html#_headercontrolbuttons)
[\_insertElement](foundry.applications.sidebar.tabs.ChatLog.html#_insertelement)
[\_onChangeForm](foundry.applications.sidebar.tabs.ChatLog.html#_onchangeform)
[\_onClickAction](foundry.applications.sidebar.tabs.ChatLog.html#_onclickaction)
[\_onClickNotification](foundry.applications.sidebar.tabs.ChatLog.html#_onclicknotification)
[\_onClickTab](foundry.applications.sidebar.tabs.ChatLog.html#_onclicktab)
[\_onKeyDown](foundry.applications.sidebar.tabs.ChatLog.html#_onkeydown)
[\_onPosition](foundry.applications.sidebar.tabs.ChatLog.html#_onposition)
[\_onSubmitForm](foundry.applications.sidebar.tabs.ChatLog.html#_onsubmitform)
[\_preFirstRender](foundry.applications.sidebar.tabs.ChatLog.html#_prefirstrender)
[\_prepareInputContext](foundry.applications.sidebar.tabs.ChatLog.html#_prepareinputcontext)
[\_prepareTabs](foundry.applications.sidebar.tabs.ChatLog.html#_preparetabs)
[\_prePosition](foundry.applications.sidebar.tabs.ChatLog.html#_preposition)
[\_preRender](foundry.applications.sidebar.tabs.ChatLog.html#_prerender)
[\_preSyncInputState](foundry.applications.sidebar.tabs.ChatLog.html#_presyncinputstate)
[\_removeElement](foundry.applications.sidebar.tabs.ChatLog.html#_removeelement)
[\_renderHeaderControl](foundry.applications.sidebar.tabs.ChatLog.html#_renderheadercontrol)
[\_replaceHTML](foundry.applications.sidebar.tabs.ChatLog.html#_replacehtml)
[\_shouldShowNotifications](foundry.applications.sidebar.tabs.ChatLog.html#_shouldshownotifications)
[\_syncInputState](foundry.applications.sidebar.tabs.ChatLog.html#_syncinputstate)
[\_tearDown](foundry.applications.sidebar.tabs.ChatLog.html#_teardown)
[\_updateFrame](foundry.applications.sidebar.tabs.ChatLog.html#_updateframe)
[\_updatePosition](foundry.applications.sidebar.tabs.ChatLog.html#_updateposition)
[inheritanceChain](foundry.applications.sidebar.tabs.ChatLog.html#inheritancechain)
[parse](foundry.applications.sidebar.tabs.ChatLog.html#parse)
[parseCSSDimension](foundry.applications.sidebar.tabs.ChatLog.html#parsecssdimension)
[renderMessage](foundry.applications.sidebar.tabs.ChatLog.html#rendermessage)
[waitForImages](foundry.applications.sidebar.tabs.ChatLog.html#waitforimages)

## Constructors

### constructor

* new ChatLog(options?: Partial<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.html)>): [ChatLog](foundry.applications.sidebar.tabs.ChatLog.html)

  Applications are constructed by providing an object of configuration options.

  #### Parameters

  + `Optional`options: Partial<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.html)> = {}

    Options used to configure the Application instance

  #### Returns [ChatLog](foundry.applications.sidebar.tabs.ChatLog.html)

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).constructor

## Properties

### options

options: Readonly<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.html)>

Application instance configuration options.

Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).options

### position

position: [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.html) = ...

The current position of the application with respect to the window.document.body.

Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).position

### tabGroups

tabGroups: Record<string, null | string> = ...

If this Application uses tabbed navigation groups, this mapping is updated whenever the changeTab method is called.
Reports the active tab for each group, with a value of `null` indicating no tab is active.
Subclasses may override this property to define default tabs for each group.

Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).tabGroups

### `Static` `Internal`\_appId

\_appId: number = 0

An incrementing integer Application ID.

Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).\_appId

### `Static` `Internal`\_maxZ

\_maxZ: number = ...

The current maximum z-index of any displayed Application.

Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).\_maxZ

### `Static`BASE\_APPLICATION

BASE\_APPLICATION: typeof [ApplicationV2](foundry.applications.api.ApplicationV2.html) = ApplicationV2

Designates which upstream Application class in this class' inheritance chain is the base application.
Any DEFAULT\_OPTIONS of super-classes further upstream of the BASE\_APPLICATION are ignored.
Hook events for super-classes further upstream of the BASE\_APPLICATION are not dispatched.

Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).BASE\_APPLICATION

### `Static`DEFAULT\_OPTIONS

DEFAULT\_OPTIONS: {  
Â Â Â Â actions: {  
Â Â Â Â Â Â Â Â deleteMessage: (  
Â Â Â Â Â Â Â Â Â Â Â Â event: PointerEvent,  
Â Â Â Â Â Â Â Â Â Â Â Â target: HTMLElement,  
Â Â Â Â Â Â Â Â ) => void | Promise<void>;  
Â Â Â Â Â Â Â Â dismissMessage: (  
Â Â Â Â Â Â Â Â Â Â Â Â event: PointerEvent,  
Â Â Â Â Â Â Â Â Â Â Â Â target: HTMLElement,  
Â Â Â Â Â Â Â Â ) => void | Promise<void>;  
Â Â Â Â Â Â Â Â expandRoll: (  
Â Â Â Â Â Â Â Â Â Â Â Â event: PointerEvent,  
Â Â Â Â Â Â Â Â Â Â Â Â target: HTMLElement,  
Â Â Â Â Â Â Â Â ) => void | Promise<void>;  
Â Â Â Â Â Â Â Â export: (event: PointerEvent, target: HTMLElement) => void | Promise<void>;  
Â Â Â Â Â Â Â Â flush: (event: PointerEvent, target: HTMLElement) => void | Promise<void>;  
Â Â Â Â Â Â Â Â jumpToBottom: (  
Â Â Â Â Â Â Â Â Â Â Â Â event: PointerEvent,  
Â Â Â Â Â Â Â Â Â Â Â Â target: HTMLElement,  
Â Â Â Â Â Â Â Â ) => void | Promise<void>;  
Â Â Â Â Â Â Â Â rollMode: (  
Â Â Â Â Â Â Â Â Â Â Â Â event: PointerEvent,  
Â Â Â Â Â Â Â Â Â Â Â Â target: HTMLElement,  
Â Â Â Â Â Â Â Â ) => void | Promise<void>;  
Â Â Â Â };  
Â Â Â Â classes: string[];  
Â Â Â Â window: { title: string };  
} = ...

#### Inherit Doc

Overrides HandlebarsApplicationMixin(AbstractSidebarTab).DEFAULT\_OPTIONS

### `Static`emittedEvents

emittedEvents: readonly [  
Â Â Â Â "render",  
Â Â Â Â "close",  
Â Â Â Â "position",  
Â Â Â Â "activate",  
Â Â Â Â "deactivate",  
] = ...

Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).emittedEvents

### `Static`MAX\_MESSAGE\_HISTORY

MAX\_MESSAGE\_HISTORY: number = 16

The maximum number of messages to retain in the history in a given session.

### `Static`MESSAGE\_PATTERNS

MESSAGE\_PATTERNS: {  
Â Â Â Â blindroll: RegExp;  
Â Â Â Â emote: RegExp;  
Â Â Â Â gm: RegExp;  
Â Â Â Â gmroll: RegExp;  
Â Â Â Â ic: RegExp;  
Â Â Â Â invalid: RegExp;  
Â Â Â Â macro: RegExp;  
Â Â Â Â ooc: RegExp;  
Â Â Â Â players: RegExp;  
Â Â Â Â publicroll: RegExp;  
Â Â Â Â reply: RegExp;  
Â Â Â Â roll: RegExp;  
Â Â Â Â selfroll: RegExp;  
Â Â Â Â whisper: RegExp;  
} = ...

An enumeration of regular expression patterns used to match chat messages.

### `Static`MULTILINE\_COMMANDS

MULTILINE\_COMMANDS: Set<string> = ...

The set of commands that can be processed over multiple lines.

### `Static`NOTIFY\_DURATION

NOTIFY\_DURATION: number = 5000

The number of milliseconds to keep a chat card notification until it is automatically dismissed.

### `Static`NOTIFY\_TICKER

NOTIFY\_TICKER: number = 500

The notification ticker frequency.

### `Static`NOTIFY\_UNPAUSE

NOTIFY\_UNPAUSE: number = 2000

The number of milliseconds to wait before unpausing the notification queue.

### `Static`PARTS

PARTS: {  
Â Â Â Â input: { template: string };  
Â Â Â Â log: { template: string; templates: string[] };  
} = ...

Overrides HandlebarsApplicationMixin(AbstractSidebarTab).PARTS

### `Static`PIP\_DURATION

PIP\_DURATION: number = 3000

The number of milliseconds to display the chat notification pip.

### `Static`RENDER\_STATES

RENDER\_STATES: Record<string, number> = ...

The sequence of rendering states that describe the Application life-cycle.

Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).RENDER\_STATES

### `Static`tabName

tabName: string = "chat"

### `Static`TABS

TABS: Record<string, [ApplicationTabsConfiguration](../interfaces/foundry.applications.types.ApplicationTabsConfiguration.html)> = {}

Configuration of application tabs, with an entry per tab group.

Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).TABS

### `Static`UPDATE\_TIMESTAMP\_FREQUENCY

UPDATE\_TIMESTAMP\_FREQUENCY: number = ...

How often, in milliseconds, to update timestamps.

## Accessors

### active

* get active(): boolean

  Whether this tab is currently active in the sidebar.

  #### Returns boolean

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).active

### classList

* get classList(): DOMTokenList

  The CSS class list of this Application instance

  #### Returns DOMTokenList

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).classList

### collection

* get collection(): Messages

  A reference to the Messages collection that the chat log displays.

  #### Returns Messages

### element

* get element(): HTMLElement

  The HTMLElement which renders this Application into the DOM.

  #### Returns HTMLElement

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).element

### form

* get form(): null | HTMLFormElement

  Does this Application have a top-level form element?

  #### Returns null | HTMLFormElement

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).form

### hasFrame

* get hasFrame(): boolean

  Does this Application instance render within an outer window frame?

  #### Returns boolean

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).hasFrame

### history

* get history(): { index: number; pending: string; queue: string[] }

  Message history management.

  #### Returns { index: number; pending: string; queue: string[] }

### id

* get id(): string

  The HTML element ID of this Application instance.
  This provides a readonly view into the internal ID used by this application.
  This getter should not be overridden by subclasses, which should instead configure the ID in `DEFAULT_OPTIONS` or
  by defining a `uniqueId` during `_initializeApplicationOptions`.

  #### Returns string

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).id

### isAtBottom

* get isAtBottom(): boolean

  A flag for whether the chat log is currently scrolled to the bottom.

  #### Returns boolean

### isPopout

* get isPopout(): boolean

  Whether this is the popped-out tab or the in-sidebar one.

  #### Returns boolean

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).isPopout

### minimized

* get minimized(): boolean

  Is this Application instance currently minimized?

  #### Returns boolean

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).minimized

### popout

* get popout(): | void  
  | [AbstractSidebarTab](foundry.applications.sidebar.AbstractSidebarTab.html)<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.html), [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html)>

  A reference to the popped-out version of this tab, if one exists.

  #### Returns void | [AbstractSidebarTab](foundry.applications.sidebar.AbstractSidebarTab.html)<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.html), [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html)>

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).popout

### rendered

* get rendered(): boolean

  Is this Application instance currently rendered?

  #### Returns boolean

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).rendered

### state

* get state(): number

  The current render state of the Application.

  #### Returns number

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).state

### tabName

* get tabName(): string

  The base name of the sidebar tab.

  #### Returns string

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).tabName

### title

* get title(): string

  A convenience reference to the title of the Application window.

  #### Returns string

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).title

### window

* get window(): {  
  Â Â Â Â close: HTMLButtonElement;  
  Â Â Â Â content: HTMLElement;  
  Â Â Â Â controls: HTMLButtonElement;  
  Â Â Â Â controlsDropdown: HTMLDivElement;  
  Â Â Â Â header: HTMLElement;  
  Â Â Â Â icon: HTMLElement;  
  Â Â Â Â onDrag: Function;  
  Â Â Â Â onResize: Function;  
  Â Â Â Â pointerMoveThrottle: boolean;  
  Â Â Â Â pointerStartPosition: [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.html);  
  Â Â Â Â resize: HTMLElement;  
  Â Â Â Â title: HTMLHeadingElement;  
  }

  Convenience references to window header elements.

  #### Returns { Â Â Â Â close: HTMLButtonElement; Â Â Â Â content: HTMLElement; Â Â Â Â controls: HTMLButtonElement; Â Â Â Â controlsDropdown: HTMLDivElement; Â Â Â Â header: HTMLElement; Â Â Â Â icon: HTMLElement; Â Â Â Â onDrag: Function; Â Â Â Â onResize: Function; Â Â Â Â pointerMoveThrottle: boolean; Â Â Â Â pointerStartPosition: [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.html); Â Â Â Â resize: HTMLElement; Â Â Â Â title: HTMLHeadingElement; }

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).window

## Methods

### \_attachPartListeners

* \_attachPartListeners(partId: any, element: any, options: any): void

  #### Parameters

  + partId: any
  + element: any
  + options: any

  #### Returns void

  #### Inherit Doc

### \_awaitTransition

* \_awaitTransition(element: HTMLElement, timeout: number): Promise<void>

  `Internal`

  Wait for a CSS transition to complete for an element.

  #### Parameters

  + element: HTMLElement

    The element which is transitioning
  + timeout: number

    A timeout in milliseconds in case the transitionend event does not occur

  #### Returns Promise<void>

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).\_awaitTransition

### \_configureRenderOptions

* \_configureRenderOptions(options: any): void

  #### Parameters

  + options: any

  #### Returns void

  #### Inherit Doc

  Overrides HandlebarsApplicationMixin(AbstractSidebarTab).\_configureRenderOptions

### \_doEvent

* \_doEvent(  
  Â Â Â Â handler: Function,  
  Â Â Â Â options?: {  
  Â Â Â Â Â Â Â Â async?: boolean;  
  Â Â Â Â Â Â Â Â debugText?: string;  
  Â Â Â Â Â Â Â Â eventName?: string;  
  Â Â Â Â Â Â Â Â handlerArgs?: any[];  
  Â Â Â Â Â Â Â Â hookArgs?: any[];  
  Â Â Â Â Â Â Â Â hookName?: string;  
  Â Â Â Â Â Â Â Â hookResponse?: boolean;  
  Â Â Â Â Â Â Â Â parentClassHooks?: boolean;  
  Â Â Â Â },  
  ): void  
  | Promise<void>

  `Internal`

  Perform an event in the application life-cycle.
  Await an internal life-cycle method defined by the class.
  Optionally dispatch an event for any registered listeners.

  #### Parameters

  + handler: Function

    A handler function to call
  + options: {  
    Â Â Â Â async?: boolean;  
    Â Â Â Â debugText?: string;  
    Â Â Â Â eventName?: string;  
    Â Â Â Â handlerArgs?: any[];  
    Â Â Â Â hookArgs?: any[];  
    Â Â Â Â hookName?: string;  
    Â Â Â Â hookResponse?: boolean;  
    Â Â Â Â parentClassHooks?: boolean;  
    } = {}

    Options which configure event handling

    - ##### `Optional`async?: boolean

      Await the result of the handler function?
    - ##### `Optional`debugText?: string

      Debugging text to log for the event
    - ##### `Optional`eventName?: string

      An event name to dispatch for registered listeners
    - ##### `Optional`handlerArgs?: any[]

      Arguments passed to the handler function
    - ##### `Optional`hookArgs?: any[]

      Arguments passed to the requested hook function
    - ##### `Optional`hookName?: string

      A hook name to dispatch for this and all parent classes
    - ##### `Optional`hookResponse?: boolean

      Add the handler response to hookArgs
    - ##### `Optional`parentClassHooks?: boolean

      Call hooks for parent classes in the inheritance chain?

  #### Returns void | Promise<void>

  A promise which resoles once the handler is complete if async is true

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).\_doEvent

### \_initializeApplicationOptions

* \_initializeApplicationOptions(options: any): [ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.html)

  #### Parameters

  + options: any

  #### Returns [ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.html)

  #### Inherit Doc

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).\_initializeApplicationOptions

### \_onActivate

* \_onActivate(): void

  #### Returns void

  #### Inherit Doc

  Overrides HandlebarsApplicationMixin(AbstractSidebarTab).\_onActivate

### \_onClose

* \_onClose(options: any): void

  #### Parameters

  + options: any

  #### Returns void

  #### Inherit Doc

  Overrides HandlebarsApplicationMixin(AbstractSidebarTab).\_onClose

### \_onDeactivate

* \_onDeactivate(): void

  #### Returns void

  #### Inherit Doc

  Overrides HandlebarsApplicationMixin(AbstractSidebarTab).\_onDeactivate

### \_onFirstRender

* \_onFirstRender(context: any, options: any): Promise<void>

  #### Parameters

  + context: any
  + options: any

  #### Returns Promise<void>

  #### Inherit Doc

  Overrides HandlebarsApplicationMixin(AbstractSidebarTab).\_onFirstRender

### \_onRender

* \_onRender(context: any, options: any): Promise<void>

  #### Parameters

  + context: any
  + options: any

  #### Returns Promise<void>

  #### Inherit Doc

  Overrides HandlebarsApplicationMixin(AbstractSidebarTab).\_onRender

### \_postRender

* \_postRender(context: any, options: any): Promise<void>

  #### Parameters

  + context: any
  + options: any

  #### Returns Promise<void>

  #### Inherit Doc

  Overrides HandlebarsApplicationMixin(AbstractSidebarTab).\_postRender

### \_preClose

* \_preClose(options: any): Promise<void>

  #### Parameters

  + options: any

  #### Returns Promise<void>

  #### Inherit Doc

  Overrides HandlebarsApplicationMixin(AbstractSidebarTab).\_preClose

### \_prepareContext

* \_prepareContext(options: any): Promise<[ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.html)>

  #### Parameters

  + options: any

  #### Returns Promise<[ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.html)>

  #### Inherit Doc

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).\_prepareContext

### \_preparePartContext

* \_preparePartContext(partId: any, context: any, options: any): Promise<any>

  #### Parameters

  + partId: any
  + context: any
  + options: any

  #### Returns Promise<any>

  #### Inherit Doc

### \_preSyncPartState

* \_preSyncPartState(  
  Â Â Â Â partId: any,  
  Â Â Â Â newElement: any,  
  Â Â Â Â priorElement: any,  
  Â Â Â Â state: any,  
  ): void

  #### Parameters

  + partId: any
  + newElement: any
  + priorElement: any
  + state: any

  #### Returns void

  #### Inherit Doc

### \_renderFrame

* \_renderFrame(options: any): Promise<HTMLElement>

  #### Parameters

  + options: any

  #### Returns Promise<HTMLElement>

  #### Inherit Doc

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).\_renderFrame

### \_renderHTML

* \_renderHTML(context: any, options: any): Promise<any>

  #### Parameters

  + context: any
  + options: any

  #### Returns Promise<any>

  #### Inherit Doc

  Overrides HandlebarsApplicationMixin(AbstractSidebarTab).\_renderHTML

### \_syncPartState

* \_syncPartState(  
  Â Â Â Â partId: any,  
  Â Â Â Â newElement: any,  
  Â Â Â Â priorElement: any,  
  Â Â Â Â state: any,  
  ): void

  #### Parameters

  + partId: any
  + newElement: any
  + priorElement: any
  + state: any

  #### Returns void

  #### Inherit Doc

### \_toggleNotifications

* \_toggleNotifications(options?: { closing?: boolean }): void

  `Internal`

  Update notification display, based on interface state.
  If the chat log is popped-out, embed chat input into it. Otherwise,
  if the sidebar is expanded, and the chat log is the active tab, embed chat input into it. Otherwise,
  embed chat input into the notifications area.
  If the sidebar is expanded, and the chat log is the active tab, do not display notifications.
  If the chat log is popped out, do not display notifications.

  #### Parameters

  + `Optional`options: { closing?: boolean } = {}
    - ##### `Optional`closing?: boolean

      Whether this method has been triggered by the chat popout closing.

  #### Returns void

  #### Fires

### \_updateRollMode

* \_updateRollMode(): void

  `Internal`

  Handle updating the roll mode display.

  #### Returns void

### activate

* activate(): void

  Activate this tab in the sidebar.

  #### Returns void

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).activate

### addEventListener

* addEventListener(  
  Â Â Â Â type: string,  
  Â Â Â Â listener: [EmittedEventListener](../types/foundry.utils.types.EmittedEventListener.html),  
  Â Â Â Â options?: { once?: boolean },  
  ): void

  Add a new event listener for a certain type of event.

  #### Parameters

  + type: string

    The type of event being registered for
  + listener: [EmittedEventListener](../types/foundry.utils.types.EmittedEventListener.html)

    The listener function called when the event occurs
  + `Optional`options: { once?: boolean } = {}

    Options which configure the event listener

    - ##### `Optional`once?: boolean

      Should the event only be responded to once and then removed

  #### Returns void

  #### See

  <https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener>

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).addEventListener

### bringToFront

* bringToFront(): void

  Bring this Application window to the front of the rendering stack by increasing its z-index.
  Once ApplicationV1 is deprecated we should switch from \_maxZ to ApplicationV2#maxZ
  We should also eliminate ui.activeWindow in favor of only ApplicationV2#frontApp

  #### Returns void

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).bringToFront

### changeTab

* changeTab(  
  Â Â Â Â tab: string,  
  Â Â Â Â group: string,  
  Â Â Â Â options?: {  
  Â Â Â Â Â Â Â Â event?: Event;  
  Â Â Â Â Â Â Â Â force?: boolean;  
  Â Â Â Â Â Â Â Â navElement?: HTMLElement;  
  Â Â Â Â Â Â Â Â updatePosition?: boolean;  
  Â Â Â Â },  
  ): void

  Change the active tab within a tab group in this Application instance.

  #### Parameters

  + tab: string

    The name of the tab which should become active
  + group: string

    The name of the tab group which defines the set of tabs
  + `Optional`options: {  
    Â Â Â Â event?: Event;  
    Â Â Â Â force?: boolean;  
    Â Â Â Â navElement?: HTMLElement;  
    Â Â Â Â updatePosition?: boolean;  
    } = {}

    Additional options which affect tab navigation

    - ##### `Optional`event?: Event

      An interaction event which caused the tab change, if any
    - ##### `Optional`force?: boolean

      Force changing the tab even if the new tab is already active
    - ##### `Optional`navElement?: HTMLElement

      An explicit navigation element being modified
    - ##### `Optional`updatePosition?: boolean

      Update application position after changing the tab?

  #### Returns void

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).changeTab

### close

* close(options?: Partial<[ApplicationClosingOptions](../interfaces/foundry.applications.types.ApplicationClosingOptions.html)>): Promise<[ChatLog](foundry.applications.sidebar.tabs.ChatLog.html)>

  Close the Application, removing it from the DOM.

  #### Parameters

  + `Optional`options: Partial<[ApplicationClosingOptions](../interfaces/foundry.applications.types.ApplicationClosingOptions.html)> = {}

    Options which modify how the application is closed.

  #### Returns Promise<[ChatLog](foundry.applications.sidebar.tabs.ChatLog.html)>

  A Promise which resolves to the closed Application instance

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).close

### deleteMessage

* deleteMessage(  
  Â Â Â Â messageId: string,  
  Â Â Â Â options?: { deleteAll?: boolean },  
  ): Promise<void>

  Delete a single message from the chat log.

  #### Parameters

  + messageId: string

    The ID of the ChatMessage Document to remove from the log.
  + `Optional`options: { deleteAll?: boolean } = {}
    - ##### `Optional`deleteAll?: boolean

      Delete all messages from the log.

  #### Returns Promise<void>

### dispatchEvent

* dispatchEvent(event: Event): boolean

  Dispatch an event on this target.

  #### Parameters

  + event: Event

    The Event to dispatch

  #### Returns boolean

  Was default behavior for the event prevented?

  #### See

  <https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent>

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).dispatchEvent

### maximize

* maximize(): Promise<void>

  Restore the Application to its original dimensions.

  #### Returns Promise<void>

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).maximize

### minimize

* minimize(): Promise<void>

  Minimize the Application, collapsing it to a minimal header.

  #### Returns Promise<void>

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).minimize

### notify

* notify(  
  Â Â Â Â message: [documents](../modules/foundry.documents.html).[ChatMessage](foundry.documents.ChatMessage.html),  
  Â Â Â Â options?: { existing?: HTMLElement; newMessage?: boolean },  
  ): void

  Trigger a notification that alerts the user visually and audibly of new chat activity.

  #### Parameters

  + message: [documents](../modules/foundry.documents.html).[ChatMessage](foundry.documents.ChatMessage.html)

    The created or updated message.
  + `Optional`options: { existing?: HTMLElement; newMessage?: boolean } = {}
    - ##### `Optional`existing?: HTMLElement

      The existing rendered chat card, if it exists.
    - ##### `Optional`newMessage?: boolean

      Whether this is a new message.

  #### Returns void

### postOne

* postOne(  
  Â Â Â Â message: [documents](../modules/foundry.documents.html).[ChatMessage](foundry.documents.ChatMessage.html),  
  Â Â Â Â options?: { before?: string; notify?: boolean },  
  ): Promise<void>

  Post a single chat message to the log.

  #### Parameters

  + message: [documents](../modules/foundry.documents.html).[ChatMessage](foundry.documents.ChatMessage.html)

    The chat message.
  + `Optional`options: { before?: string; notify?: boolean } = {}
    - ##### `Optional`before?: string

      An existing message ID to prepend the posted message to, by default the
      new message is appended to the end of the log.
    - ##### `Optional`notify?: boolean

      Trigger a notification which shows the log as having a new unread message.

  #### Returns Promise<void>

  A Promise which resolves once the message has been posted.

### processMessage

* processMessage(  
  Â Â Â Â message: string,  
  Â Â Â Â options?: { speaker?: any },  
  ): Promise<void | [documents](../modules/foundry.documents.html).[ChatMessage](foundry.documents.ChatMessage.html)>

  Prepare the data object of chat message data depending on the type of message being posted.

  #### Parameters

  + message: string

    The original string of the message content
  + `Optional`options: { speaker?: any } = {}

    Additional options

    - ##### `Optional`speaker?: any

      The speaker data

  #### Returns Promise<void | [documents](../modules/foundry.documents.html).[ChatMessage](foundry.documents.ChatMessage.html)>

  The created ChatMessage Document, or void if we were executing a
  macro instead.

  #### Throws

  If an invalid command is found.

### removeEventListener

* removeEventListener(type: string, listener: [EmittedEventListener](../types/foundry.utils.types.EmittedEventListener.html)): void

  Remove an event listener for a certain type of event.

  #### Parameters

  + type: string

    The type of event being removed
  + listener: [EmittedEventListener](../types/foundry.utils.types.EmittedEventListener.html)

    The listener function being removed

  #### Returns void

  #### See

  <https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener>

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).removeEventListener

### render

* render(options: any, \_options: any): Promise<[ChatLog](foundry.applications.sidebar.tabs.ChatLog.html)>

  #### Parameters

  + options: any
  + \_options: any

  #### Returns Promise<[ChatLog](foundry.applications.sidebar.tabs.ChatLog.html)>

  #### Inherit Doc

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).render

### renderBatch

* renderBatch(size: number): Promise<void>

  Render a batch of additional messages, prepending them to the top of the log.

  #### Parameters

  + size: number

    The batch size.

  #### Returns Promise<void>

### renderPopout

* renderPopout(): Promise<  
  Â Â Â Â [AbstractSidebarTab](foundry.applications.sidebar.AbstractSidebarTab.html)<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.html), [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html)>,  
  >

  Pop-out this sidebar tab as a new application.

  #### Returns Promise<[AbstractSidebarTab](foundry.applications.sidebar.AbstractSidebarTab.html)<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.html), [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html)>>

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).renderPopout

### scrollBottom

* scrollBottom(  
  Â Â Â Â options?: {  
  Â Â Â Â Â Â Â Â popout?: boolean;  
  Â Â Â Â Â Â Â Â scrollOptions?: ScrollIntoViewOptions;  
  Â Â Â Â Â Â Â Â waitImages?: boolean;  
  Â Â Â Â },  
  ): Promise<void>

  Scroll the chat log to the bottom.

  #### Parameters

  + `Optional`options: {  
    Â Â Â Â popout?: boolean;  
    Â Â Â Â scrollOptions?: ScrollIntoViewOptions;  
    Â Â Â Â waitImages?: boolean;  
    } = {}
    - ##### `Optional`popout?: boolean

      If a popout exists, scroll it to the bottom too.
    - ##### `Optional`scrollOptions?: ScrollIntoViewOptions

      Options to configure scrolling behavior.
    - ##### `Optional`waitImages?: boolean

      Wait for any images embedded in the chat log to load first
      before scrolling.

  #### Returns Promise<void>

### setPosition

* setPosition(position?: Partial<[ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.html)>): void | [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.html)

  Update the Application element position using provided data which is merged with the prior position.

  #### Parameters

  + `Optional`position: Partial<[ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.html)>

    New Application positioning data

  #### Returns void | [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.html)

  The updated application position

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).setPosition

### submit

* submit(submitOptions?: object): Promise<any>

  Programmatically submit an ApplicationV2 instance which implements a single top-level form.

  #### Parameters

  + `Optional`submitOptions: object = {}

    Arbitrary options which are supported by and provided to the configured form
    submission handler.

  #### Returns Promise<any>

  A promise that resolves to the returned result of the form submission handler,
  if any.

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).submit

### toggleControls

* toggleControls(  
  Â Â Â Â expanded?: boolean,  
  Â Â Â Â options?: { animate?: boolean },  
  ): Promise<void>

  Toggle display of the Application controls menu.
  Only applicable to window Applications.

  #### Parameters

  + `Optional`expanded: boolean

    Set the controls visibility to a specific state.
    Otherwise, the visible state is toggled from its current value
  + `Optional`options: { animate?: boolean } = {}

    Options to configure the toggling behavior.

    - ##### `Optional`animate?: boolean

      Animate the controls toggling.

  #### Returns Promise<void>

  A Promise which resolves once the control expansion animation is complete

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).toggleControls

### updateMessage

* updateMessage(  
  Â Â Â Â message: [documents](../modules/foundry.documents.html).[ChatMessage](foundry.documents.ChatMessage.html),  
  Â Â Â Â options?: { notify?: boolean },  
  ): Promise<void>

  Update the contents of a previously-posted message.

  #### Parameters

  + message: [documents](../modules/foundry.documents.html).[ChatMessage](foundry.documents.ChatMessage.html)

    The ChatMessage instance to update.
  + options: { notify?: boolean } = {}
    - ##### `Optional`notify?: boolean

      Trigger a notification which shows the log as having a new unread message.

  #### Returns Promise<void>

### updateTimestamps

* updateTimestamps(): void

  Update displayed timestamps for every displayed message in the chat log.
  Timestamps are displayed in a humanized "time-since" format.

  #### Returns void

### `Protected`\_attachFrameListeners

* \_attachFrameListeners(): void

  `Protected`

  Attach event listeners to the Application frame.

  #### Returns void

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).\_attachFrameListeners

### `Protected`\_attachLogListeners

* \_attachLogListeners(  
  Â Â Â Â element: HTMLElement,  
  Â Â Â Â options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html),  
  ): void

  `Protected`

  Attach listeners to the chat log.

  #### Parameters

  + element: HTMLElement

    The log element.
  + options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html)

  #### Returns void

### `Protected`\_canRender

* \_canRender(options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html)): false | void

  `Protected`

  Test whether this Application is allowed to be rendered.

  #### Parameters

  + options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html)

    Provided render options

  #### Returns false | void

  Return false to prevent rendering

  #### Throws

  An Error to display a warning message

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).\_canRender

### `Protected`\_createContextMenu

* \_createContextMenu(  
  Â Â Â Â handler: () => ContextMenuEntry[],  
  Â Â Â Â selector: string,  
  Â Â Â Â options?: {  
  Â Â Â Â Â Â Â Â container?: HTMLElement;  
  Â Â Â Â Â Â Â Â hookName?: string;  
  Â Â Â Â Â Â Â Â parentClassHooks?: boolean;  
  Â Â Â Â },  
  ): null  
  | [ContextMenu](foundry.applications.ux.ContextMenu.html)

  `Protected`

  Create a ContextMenu instance used in this Application.

  #### Parameters

  + handler: () => ContextMenuEntry[]

    A handler function that provides initial context options
  + selector: string

    A CSS selector to which the ContextMenu will be bound
  + `Optional`options: { container?: HTMLElement; hookName?: string; parentClassHooks?: boolean } = {}

    Additional options which affect ContextMenu construction

    - ##### `Optional`container?: HTMLElement

      A parent HTMLElement which contains the selector target
    - ##### `Optional`hookName?: string

      The hook name
    - ##### `Optional`parentClassHooks?: boolean

      Whether to call hooks for the parent classes in the inheritance
      chain.

  #### Returns null | [ContextMenu](foundry.applications.ux.ContextMenu.html)

  A created ContextMenu or null if no menu items were defined

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).\_createContextMenu

### `Protected`\_getEntryContextOptions

* \_getEntryContextOptions(): ContextMenuEntry[]

  `Protected`

  Get context menu entries for chat messages in the log.

  #### Returns ContextMenuEntry[]

### `Protected`\_getHeaderControls

* \_getHeaderControls(): [ApplicationHeaderControlsEntry](../interfaces/foundry.applications.types.ApplicationHeaderControlsEntry.html)[]

  `Protected`

  Configure the array of header control menu options

  #### Returns [ApplicationHeaderControlsEntry](../interfaces/foundry.applications.types.ApplicationHeaderControlsEntry.html)[]

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).\_getHeaderControls

### `Protected`\_getTabsConfig

* \_getTabsConfig(group: string): null | [ApplicationTabsConfiguration](../interfaces/foundry.applications.types.ApplicationTabsConfiguration.html)

  `Protected`

  Get the configuration for a tabs group.

  #### Parameters

  + group: string

    The ID of a tabs group

  #### Returns null | [ApplicationTabsConfiguration](../interfaces/foundry.applications.types.ApplicationTabsConfiguration.html)

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).\_getTabsConfig

### `Protected`\_headerControlButtons

* \_headerControlButtons(): Generator<[ApplicationHeaderControlsEntry](../interfaces/foundry.applications.types.ApplicationHeaderControlsEntry.html), any, any>

  `Protected`

  Iterate over header control buttons, filtering for controls which are visible for the current client.

  #### Returns Generator<[ApplicationHeaderControlsEntry](../interfaces/foundry.applications.types.ApplicationHeaderControlsEntry.html), any, any>

  #### Yields

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).\_headerControlButtons

### `Protected`\_insertElement

* \_insertElement(element: HTMLElement): void

  `Protected`

  Insert the application HTML element into the DOM.
  Subclasses may override this method to customize how the application is inserted.

  #### Parameters

  + element: HTMLElement

    The element to insert

  #### Returns void

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).\_insertElement

### `Protected`\_onChangeForm

* \_onChangeForm(formConfig: ApplicationFormConfiguration, event: Event): void

  `Protected`

  Handle changes to an input element within the form.

  #### Parameters

  + formConfig: ApplicationFormConfiguration

    The form configuration for which this handler is bound
  + event: Event

    An input change event within the form

  #### Returns void

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).\_onChangeForm

### `Protected`\_onClickAction

* \_onClickAction(event: PointerEvent, target: HTMLElement): void

  `Protected`

  A generic event handler for action clicks which can be extended by subclasses.
  Action handlers defined in DEFAULT\_OPTIONS are called first. This method is only called for actions which have
  no defined handler.

  #### Parameters

  + event: PointerEvent

    The originating click event
  + target: HTMLElement

    The capturing HTML element which defined a [data-action]

  #### Returns void

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).\_onClickAction

### `Protected`\_onClickNotification

* \_onClickNotification(event: PointerEvent): void

  `Protected`

  Handle clicking a chat card notification.
  Treat action button clicks within the Notifications UI as action clicks on the ChatLog instance itself.

  #### Parameters

  + event: PointerEvent

    The triggering event.

  #### Returns void

### `Protected`\_onClickTab

* \_onClickTab(event: PointerEvent): void

  `Protected`

  Handle click events on a tab within the Application.

  #### Parameters

  + event: PointerEvent

  #### Returns void

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).\_onClickTab

### `Protected`\_onKeyDown

* \_onKeyDown(event: KeyboardEvent): void

  `Protected`

  Handle keydown events in the chat message entry textarea.

  #### Parameters

  + event: KeyboardEvent

    The triggering event.

  #### Returns void

### `Protected`\_onPosition

* \_onPosition(position: [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.html)): void

  `Protected`

  Actions performed after the Application is re-positioned.

  #### Parameters

  + position: [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.html)

    The requested application position

  #### Returns void

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).\_onPosition

### `Protected`\_onSubmitForm

* \_onSubmitForm(  
  Â Â Â Â formConfig: ApplicationFormConfiguration,  
  Â Â Â Â event: Event | SubmitEvent,  
  ): Promise<void>

  `Protected`

  Handle submission for an Application which uses the form element.

  #### Parameters

  + formConfig: ApplicationFormConfiguration

    The form configuration for which this handler is bound
  + event: Event | SubmitEvent

    The form submission event

  #### Returns Promise<void>

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).\_onSubmitForm

### `Protected`\_preFirstRender

* \_preFirstRender(  
  Â Â Â Â context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.html),  
  Â Â Â Â options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html),  
  ): Promise<void>

  `Protected`

  Actions performed before a first render of the Application.

  #### Parameters

  + context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.html)

    Prepared context data
  + options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html)

    Provided render options

  #### Returns Promise<void>

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).\_preFirstRender

### `Protected`\_prepareInputContext

* \_prepareInputContext(  
  Â Â Â Â context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.html),  
  Â Â Â Â options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html),  
  ): Promise<void>

  `Protected`

  Prepare rendering context for the chat panel's message input component.

  #### Parameters

  + context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.html)
  + options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html)

  #### Returns Promise<void>

### `Protected`\_prepareTabs

* \_prepareTabs(group: string): Record<string, [ApplicationTab](../interfaces/foundry.applications.types.ApplicationTab.html)>

  `Protected`

  Prepare application tab data for a single tab group.

  #### Parameters

  + group: string

    The ID of the tab group to prepare

  #### Returns Record<string, [ApplicationTab](../interfaces/foundry.applications.types.ApplicationTab.html)>

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).\_prepareTabs

### `Protected`\_prePosition

* \_prePosition(position: [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.html)): void

  `Protected`

  Actions performed before the Application is re-positioned.
  Pre-position steps are not awaited because setPosition is synchronous.

  #### Parameters

  + position: [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.html)

    The requested application position

  #### Returns void

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).\_prePosition

### `Protected`\_preRender

* \_preRender(  
  Â Â Â Â context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.html),  
  Â Â Â Â options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html),  
  ): Promise<void>

  `Protected`

  Actions performed before any render of the Application.
  Pre-render steps are awaited by the render process.

  #### Parameters

  + context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.html)

    Prepared context data
  + options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html)

    Provided render options

  #### Returns Promise<void>

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).\_preRender

### `Protected`\_preSyncInputState

* \_preSyncInputState(  
  Â Â Â Â newElement: HTMLElement,  
  Â Â Â Â priorElement: HTMLElement,  
  Â Â Â Â state: object,  
  ): void

  `Protected`

  Prepare data used to synchronize the state of the chat input.

  #### Parameters

  + newElement: HTMLElement

    The newly-rendered element.
  + priorElement: HTMLElement

    The existing element.
  + state: object

    A state object which is used to synchronize after replacement.

  #### Returns void

### `Protected`\_removeElement

* \_removeElement(element: HTMLElement): void

  `Protected`

  Remove the application HTML element from the DOM.
  Subclasses may override this method to customize how the application element is removed.

  #### Parameters

  + element: HTMLElement

    The element to be removed

  #### Returns void

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).\_removeElement

### `Protected`\_renderHeaderControl

* \_renderHeaderControl(control: [ApplicationHeaderControlsEntry](../interfaces/foundry.applications.types.ApplicationHeaderControlsEntry.html)): HTMLLIElement

  `Protected`

  Render a header control button.

  #### Parameters

  + control: [ApplicationHeaderControlsEntry](../interfaces/foundry.applications.types.ApplicationHeaderControlsEntry.html)

  #### Returns HTMLLIElement

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).\_renderHeaderControl

### `Protected`\_replaceHTML

* \_replaceHTML(  
  Â Â Â Â result: any,  
  Â Â Â Â content: HTMLElement,  
  Â Â Â Â options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html),  
  ): void

  `Protected`

  Replace the HTML of the application with the result provided by the rendering backend.
  An Application subclass should implement this method in order for the Application to be renderable.

  #### Parameters

  + result: any

    The result returned by the application rendering backend
  + content: HTMLElement

    The content element into which the rendered result must be inserted
  + options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html)

    Options which configure application rendering behavior

  #### Returns void

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).\_replaceHTML

### `Protected`\_shouldShowNotifications

* \_shouldShowNotifications(options?: { closing?: boolean }): boolean

  `Protected`

  Determine whether the notifications pane should be visible.

  #### Parameters

  + `Optional`options: { closing?: boolean } = {}
    - ##### `Optional`closing?: boolean

      Whether the chat popout is closing.

  #### Returns boolean

### `Protected`\_syncInputState

* \_syncInputState(  
  Â Â Â Â newElement: HTMLElement,  
  Â Â Â Â priorElement: HTMLElement,  
  Â Â Â Â state: object,  
  ): void

  `Protected`

  Synchronize the state of the chat input.

  #### Parameters

  + newElement: HTMLElement

    The newly-rendered element.
  + priorElement: HTMLElement

    The element being replaced.
  + state: object

    The state object used to synchronize the pre- and post-render states.

  #### Returns void

### `Protected`\_tearDown

* \_tearDown(options: [ApplicationClosingOptions](../interfaces/foundry.applications.types.ApplicationClosingOptions.html)): void

  `Protected`

  Remove elements from the DOM and trigger garbage collection as part of application closure.

  #### Parameters

  + options: [ApplicationClosingOptions](../interfaces/foundry.applications.types.ApplicationClosingOptions.html)

  #### Returns void

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).\_tearDown

### `Protected`\_updateFrame

* \_updateFrame(options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html)): void

  `Protected`

  When the Application is rendered, optionally update aspects of the window frame.

  #### Parameters

  + options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html)

    Options provided at render-time

  #### Returns void

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).\_updateFrame

### `Protected`\_updatePosition

* \_updatePosition(position: [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.html)): [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.html)

  `Protected`

  Translate a requested application position updated into a resolved allowed position for the Application.
  Subclasses may override this method to implement more advanced positioning behavior.

  #### Parameters

  + position: [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.html)

    Requested Application positioning data

  #### Returns [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.html)

  Resolved Application positioning data

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).\_updatePosition

### `Static`inheritanceChain

* inheritanceChain(): Generator<typeof [ApplicationV2](foundry.applications.api.ApplicationV2.html), void, unknown>

  Iterate over the inheritance chain of this Application.
  The chain includes this Application itself and all parents until the base application is encountered.

  #### Returns Generator<typeof [ApplicationV2](foundry.applications.api.ApplicationV2.html), void, unknown>

  #### See

  [ApplicationV2.BASE\_APPLICATION](foundry.applications.api.ApplicationV2.html#base_application)

  #### Yields

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).inheritanceChain

### `Static`parse

* parse(  
  Â Â Â Â message: string,  
  ): [string, string[] | RegExpMatchArray | RegExpMatchArray[]]

  Parse a chat string to identify the chat command (if any) which was used.

  #### Parameters

  + message: string

    The message to parse.

  #### Returns [string, string[] | RegExpMatchArray | RegExpMatchArray[]]

  The identified command and regex match.

### `Static`parseCSSDimension

* parseCSSDimension(style: string, parentDimension: number): number | void

  Parse a CSS style rule into a number of pixels which apply to that dimension.

  #### Parameters

  + style: string

    The CSS style rule
  + parentDimension: number

    The relevant dimension of the parent element

  #### Returns number | void

  The parsed style dimension in pixels

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).parseCSSDimension

### `Static`renderMessage

* renderMessage(  
  Â Â Â Â message: [documents](../modules/foundry.documents.html).[ChatMessage](foundry.documents.ChatMessage.html),  
  Â Â Â Â options?: object,  
  ): Promise<HTMLElement>

  Handles chat message rendering during the ChatMessage#getHTML deprecation period. After that period ends, calls to
  this method can be replaced by ChatMessage#renderHTML.

  #### Parameters

  + message: [documents](../modules/foundry.documents.html).[ChatMessage](foundry.documents.ChatMessage.html)

    The chat message to render.
  + `Optional`options: object

    Options forwarded to the render function.

  #### Returns Promise<HTMLElement>

  #### Throws

  If the message's render methods do not return a usable result.

### `Static`waitForImages

* waitForImages(element: HTMLElement): Promise<void>

  Wait for any images in the given element to load.

  #### Parameters

  + element: HTMLElement

    The element.

  #### Returns Promise<void>

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).waitForImages