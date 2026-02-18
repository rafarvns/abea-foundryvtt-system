---
title: "CombatTracker | Foundry Virtual Tabletop - API Documentation - Version 13"
url: "https://foundryvtt.com/api/classes/foundry.applications.sidebar.tabs.CombatTracker.html"
category: "classes"
---

* [Foundry Virtual Tabletop - API Documentation - Version 13](../modules.html)
* [foundry](../modules/foundry.html)
* [applications](../modules/foundry.applications.html)
* [sidebar](../modules/foundry.applications.sidebar.html)
* [tabs](../modules/foundry.applications.sidebar.tabs.html)
* [CombatTracker](foundry.applications.sidebar.tabs.CombatTracker.html)

# Class CombatTracker

An Application that manages switching between Combats and tracking the Combatants in those Combats.

#### Mixes

HandlebarsApplication

#### Hierarchy ([View Summary](../hierarchy.html#foundry.applications.sidebar.tabs.CombatTracker))

* [AbstractSidebarTab](foundry.applications.sidebar.AbstractSidebarTab.html)<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.html), [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html), this>
  + CombatTracker

##### Index

### Constructors

[constructor](foundry.applications.sidebar.tabs.CombatTracker.html#constructor)

### Properties

[options](foundry.applications.sidebar.tabs.CombatTracker.html#options)
[position](foundry.applications.sidebar.tabs.CombatTracker.html#position)
[tabGroups](foundry.applications.sidebar.tabs.CombatTracker.html#tabgroups)
[\_appId](foundry.applications.sidebar.tabs.CombatTracker.html#_appid)
[\_maxZ](foundry.applications.sidebar.tabs.CombatTracker.html#_maxz)
[BASE\_APPLICATION](foundry.applications.sidebar.tabs.CombatTracker.html#base_application)
[DEFAULT\_OPTIONS](foundry.applications.sidebar.tabs.CombatTracker.html#default_options)
[emittedEvents](foundry.applications.sidebar.tabs.CombatTracker.html#emittedevents)
[PARTS](foundry.applications.sidebar.tabs.CombatTracker.html#parts)
[RENDER\_STATES](foundry.applications.sidebar.tabs.CombatTracker.html#render_states)
[tabName](foundry.applications.sidebar.tabs.CombatTracker.html#tabname)
[TABS](foundry.applications.sidebar.tabs.CombatTracker.html#tabs)

### Accessors

[active](foundry.applications.sidebar.tabs.CombatTracker.html#active)
[classList](foundry.applications.sidebar.tabs.CombatTracker.html#classlist)
[combats](foundry.applications.sidebar.tabs.CombatTracker.html#combats)
[element](foundry.applications.sidebar.tabs.CombatTracker.html#element)
[form](foundry.applications.sidebar.tabs.CombatTracker.html#form)
[hasFrame](foundry.applications.sidebar.tabs.CombatTracker.html#hasframe)
[id](foundry.applications.sidebar.tabs.CombatTracker.html#id)
[isPopout](foundry.applications.sidebar.tabs.CombatTracker.html#ispopout)
[minimized](foundry.applications.sidebar.tabs.CombatTracker.html#minimized)
[popout](foundry.applications.sidebar.tabs.CombatTracker.html#popout)
[rendered](foundry.applications.sidebar.tabs.CombatTracker.html#rendered)
[scene](foundry.applications.sidebar.tabs.CombatTracker.html#scene)
[state](foundry.applications.sidebar.tabs.CombatTracker.html#state)
[tabName](foundry.applications.sidebar.tabs.CombatTracker.html#tabname-1)
[title](foundry.applications.sidebar.tabs.CombatTracker.html#title)
[viewed](foundry.applications.sidebar.tabs.CombatTracker.html#viewed)
[window](foundry.applications.sidebar.tabs.CombatTracker.html#window)

### Methods

[\_attachFrameListeners](foundry.applications.sidebar.tabs.CombatTracker.html#_attachframelisteners)
[\_awaitTransition](foundry.applications.sidebar.tabs.CombatTracker.html#_awaittransition)
[\_configureRenderOptions](foundry.applications.sidebar.tabs.CombatTracker.html#_configurerenderoptions)
[\_doEvent](foundry.applications.sidebar.tabs.CombatTracker.html#_doevent)
[\_initializeApplicationOptions](foundry.applications.sidebar.tabs.CombatTracker.html#_initializeapplicationoptions)
[\_onClickAction](foundry.applications.sidebar.tabs.CombatTracker.html#_onclickaction)
[\_onClose](foundry.applications.sidebar.tabs.CombatTracker.html#_onclose)
[\_onFirstRender](foundry.applications.sidebar.tabs.CombatTracker.html#_onfirstrender)
[\_onRender](foundry.applications.sidebar.tabs.CombatTracker.html#_onrender)
[\_prepareContext](foundry.applications.sidebar.tabs.CombatTracker.html#_preparecontext)
[\_preparePartContext](foundry.applications.sidebar.tabs.CombatTracker.html#_preparepartcontext)
[\_renderFrame](foundry.applications.sidebar.tabs.CombatTracker.html#_renderframe)
[\_renderHTML](foundry.applications.sidebar.tabs.CombatTracker.html#_renderhtml)
[activate](foundry.applications.sidebar.tabs.CombatTracker.html#activate)
[addEventListener](foundry.applications.sidebar.tabs.CombatTracker.html#addeventlistener)
[bringToFront](foundry.applications.sidebar.tabs.CombatTracker.html#bringtofront)
[changeTab](foundry.applications.sidebar.tabs.CombatTracker.html#changetab)
[close](foundry.applications.sidebar.tabs.CombatTracker.html#close)
[dispatchEvent](foundry.applications.sidebar.tabs.CombatTracker.html#dispatchevent)
[hoverCombatant](foundry.applications.sidebar.tabs.CombatTracker.html#hovercombatant)
[maximize](foundry.applications.sidebar.tabs.CombatTracker.html#maximize)
[minimize](foundry.applications.sidebar.tabs.CombatTracker.html#minimize)
[removeEventListener](foundry.applications.sidebar.tabs.CombatTracker.html#removeeventlistener)
[render](foundry.applications.sidebar.tabs.CombatTracker.html#render)
[renderPopout](foundry.applications.sidebar.tabs.CombatTracker.html#renderpopout)
[scrollToTurn](foundry.applications.sidebar.tabs.CombatTracker.html#scrolltoturn)
[setPosition](foundry.applications.sidebar.tabs.CombatTracker.html#setposition)
[submit](foundry.applications.sidebar.tabs.CombatTracker.html#submit)
[toggleControls](foundry.applications.sidebar.tabs.CombatTracker.html#togglecontrols)
[\_canRender](foundry.applications.sidebar.tabs.CombatTracker.html#_canrender)
[\_createContextMenu](foundry.applications.sidebar.tabs.CombatTracker.html#_createcontextmenu)
[\_formatEffectsTooltip](foundry.applications.sidebar.tabs.CombatTracker.html#_formateffectstooltip)
[\_getCombatantThumbnail](foundry.applications.sidebar.tabs.CombatTracker.html#_getcombatantthumbnail)
[\_getCombatContextOptions](foundry.applications.sidebar.tabs.CombatTracker.html#_getcombatcontextoptions)
[\_getEntryContextOptions](foundry.applications.sidebar.tabs.CombatTracker.html#_getentrycontextoptions)
[\_getHeaderControls](foundry.applications.sidebar.tabs.CombatTracker.html#_getheadercontrols)
[\_getTabsConfig](foundry.applications.sidebar.tabs.CombatTracker.html#_gettabsconfig)
[\_headerControlButtons](foundry.applications.sidebar.tabs.CombatTracker.html#_headercontrolbuttons)
[\_insertElement](foundry.applications.sidebar.tabs.CombatTracker.html#_insertelement)
[\_isTokenVisible](foundry.applications.sidebar.tabs.CombatTracker.html#_istokenvisible)
[\_onActivate](foundry.applications.sidebar.tabs.CombatTracker.html#_onactivate)
[\_onChangeForm](foundry.applications.sidebar.tabs.CombatTracker.html#_onchangeform)
[\_onChangeInput](foundry.applications.sidebar.tabs.CombatTracker.html#_onchangeinput)
[\_onClickTab](foundry.applications.sidebar.tabs.CombatTracker.html#_onclicktab)
[\_onCombatantControl](foundry.applications.sidebar.tabs.CombatTracker.html#_oncombatantcontrol)
[\_onCombatantHoverIn](foundry.applications.sidebar.tabs.CombatTracker.html#_oncombatanthoverin)
[\_onCombatantHoverOut](foundry.applications.sidebar.tabs.CombatTracker.html#_oncombatanthoverout)
[\_onCombatantMouseDown](foundry.applications.sidebar.tabs.CombatTracker.html#_oncombatantmousedown)
[\_onCombatCreate](foundry.applications.sidebar.tabs.CombatTracker.html#_oncombatcreate)
[\_onCombatCycle](foundry.applications.sidebar.tabs.CombatTracker.html#_oncombatcycle)
[\_onDeactivate](foundry.applications.sidebar.tabs.CombatTracker.html#_ondeactivate)
[\_onPanToCombatant](foundry.applications.sidebar.tabs.CombatTracker.html#_onpantocombatant)
[\_onPingCombatant](foundry.applications.sidebar.tabs.CombatTracker.html#_onpingcombatant)
[\_onPosition](foundry.applications.sidebar.tabs.CombatTracker.html#_onposition)
[\_onRollInitiative](foundry.applications.sidebar.tabs.CombatTracker.html#_onrollinitiative)
[\_onSubmitForm](foundry.applications.sidebar.tabs.CombatTracker.html#_onsubmitform)
[\_onToggleDefeatedStatus](foundry.applications.sidebar.tabs.CombatTracker.html#_ontoggledefeatedstatus)
[\_onToggleHidden](foundry.applications.sidebar.tabs.CombatTracker.html#_ontogglehidden)
[\_onUpdateInitiative](foundry.applications.sidebar.tabs.CombatTracker.html#_onupdateinitiative)
[\_postRender](foundry.applications.sidebar.tabs.CombatTracker.html#_postrender)
[\_preClose](foundry.applications.sidebar.tabs.CombatTracker.html#_preclose)
[\_preFirstRender](foundry.applications.sidebar.tabs.CombatTracker.html#_prefirstrender)
[\_prepareCombatContext](foundry.applications.sidebar.tabs.CombatTracker.html#_preparecombatcontext)
[\_prepareTabs](foundry.applications.sidebar.tabs.CombatTracker.html#_preparetabs)
[\_prepareTrackerContext](foundry.applications.sidebar.tabs.CombatTracker.html#_preparetrackercontext)
[\_prepareTurnContext](foundry.applications.sidebar.tabs.CombatTracker.html#_prepareturncontext)
[\_prePosition](foundry.applications.sidebar.tabs.CombatTracker.html#_preposition)
[\_preRender](foundry.applications.sidebar.tabs.CombatTracker.html#_prerender)
[\_removeElement](foundry.applications.sidebar.tabs.CombatTracker.html#_removeelement)
[\_renderHeaderControl](foundry.applications.sidebar.tabs.CombatTracker.html#_renderheadercontrol)
[\_replaceHTML](foundry.applications.sidebar.tabs.CombatTracker.html#_replacehtml)
[\_tearDown](foundry.applications.sidebar.tabs.CombatTracker.html#_teardown)
[\_updateFrame](foundry.applications.sidebar.tabs.CombatTracker.html#_updateframe)
[\_updatePosition](foundry.applications.sidebar.tabs.CombatTracker.html#_updateposition)
[inheritanceChain](foundry.applications.sidebar.tabs.CombatTracker.html#inheritancechain)
[parseCSSDimension](foundry.applications.sidebar.tabs.CombatTracker.html#parsecssdimension)
[waitForImages](foundry.applications.sidebar.tabs.CombatTracker.html#waitforimages)

## Constructors

### constructor

* new CombatTracker(options?: Partial<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.html)>): [CombatTracker](foundry.applications.sidebar.tabs.CombatTracker.html)

  Applications are constructed by providing an object of configuration options.

  #### Parameters

  + `Optional`options: Partial<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.html)> = {}

    Options used to configure the Application instance

  #### Returns [CombatTracker](foundry.applications.sidebar.tabs.CombatTracker.html)

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
Â Â Â Â Â Â Â Â activateCombatant: (...this: any, ...args: any[]) => void;  
Â Â Â Â Â Â Â Â createCombat: (...this: any, ...args: any[]) => Promise<void>;  
Â Â Â Â Â Â Â Â cycleCombat: (...this: any, ...args: any[]) => Promise<[documents](../modules/foundry.documents.html).[Combat](foundry.documents.Combat.html)>;  
Â Â Â Â Â Â Â Â panToCombatant: (...this: any, ...args: any[]) => any;  
Â Â Â Â Â Â Â Â pingCombatant: (...this: any, ...args: any[]) => any;  
Â Â Â Â Â Â Â Â rollInitiative: (...this: any, ...args: any[]) => any;  
Â Â Â Â Â Â Â Â toggleDefeated: (...this: any, ...args: any[]) => any;  
Â Â Â Â Â Â Â Â toggleHidden: (...this: any, ...args: any[]) => any;  
Â Â Â Â Â Â Â Â trackerSettings: (  
Â Â Â Â Â Â Â Â Â Â Â Â ...this: any,  
Â Â Â Â Â Â Â Â Â Â Â Â event: PointerEvent,  
Â Â Â Â Â Â Â Â Â Â Â Â target: HTMLElement,  
Â Â Â Â Â Â Â Â ) => Promise<[CombatTrackerConfig](foundry.applications.apps.CombatTrackerConfig.html)>;  
Â Â Â Â };  
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

### `Static`PARTS

PARTS: {  
Â Â Â Â footer: { template: string };  
Â Â Â Â header: { template: string };  
Â Â Â Â tracker: { scrollable: string[]; template: string };  
} = ...

Overrides HandlebarsApplicationMixin(AbstractSidebarTab).PARTS

### `Static`RENDER\_STATES

RENDER\_STATES: Record<string, number> = ...

The sequence of rendering states that describe the Application life-cycle.

Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).RENDER\_STATES

### `Static`tabName

tabName: string = "combat"

### `Static`TABS

TABS: Record<string, [ApplicationTabsConfiguration](../interfaces/foundry.applications.types.ApplicationTabsConfiguration.html)> = {}

Configuration of application tabs, with an entry per tab group.

Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).TABS

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

### combats

* get combats(): [documents](../modules/foundry.documents.html).[Combat](foundry.documents.Combat.html)[]

  The list combats applicable to the active Scene.

  #### Returns [documents](../modules/foundry.documents.html).[Combat](foundry.documents.Combat.html)[]

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

### id

* get id(): string

  The HTML element ID of this Application instance.
  This provides a readonly view into the internal ID used by this application.
  This getter should not be overridden by subclasses, which should instead configure the ID in `DEFAULT_OPTIONS` or
  by defining a `uniqueId` during `_initializeApplicationOptions`.

  #### Returns string

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).id

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

### scene

* get scene(): null | [documents](../modules/foundry.documents.html).[Scene](foundry.documents.Scene.html)

  The Scene linked to the currently viewed Combat, if any

  #### Returns null | [documents](../modules/foundry.documents.html).[Scene](foundry.documents.Scene.html)

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

### viewed

* get viewed(): null | [documents](../modules/foundry.documents.html).[Combat](foundry.documents.Combat.html)

  Record the currently tracked combat encounter.

  #### Returns null | [documents](../modules/foundry.documents.html).[Combat](foundry.documents.Combat.html)

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

### \_attachFrameListeners

* \_attachFrameListeners(): void

  #### Returns void

  #### Inherit Doc

  Overrides HandlebarsApplicationMixin(AbstractSidebarTab).\_attachFrameListeners

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

### \_onClickAction

* \_onClickAction(event: any, target: any): Promise<void>

  #### Parameters

  + event: any
  + target: any

  #### Returns Promise<void>

  #### Inherit Doc

  Overrides HandlebarsApplicationMixin(AbstractSidebarTab).\_onClickAction

### \_onClose

* \_onClose(options: any): void

  #### Parameters

  + options: any

  #### Returns void

  #### Inherit Doc

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).\_onClose

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

### \_renderFrame

* \_renderFrame(options: any): Promise<HTMLElement>

  #### Parameters

  + options: any

  #### Returns Promise<HTMLElement>

  #### Inherit Doc

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).\_renderFrame

### `Abstract`\_renderHTML

* \_renderHTML(  
  Â Â Â Â context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.html),  
  Â Â Â Â options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html),  
  ): Promise<any>

  Render an HTMLElement for the Application.
  An Application subclass must implement this method in order for the Application to be renderable.

  #### Parameters

  + context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.html)

    Context data for the render operation
  + options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html)

    Options which configure application rendering behavior

  #### Returns Promise<any>

  The result of HTML rendering may be implementation specific.
  Whatever value is returned here is passed to \_replaceHTML

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).\_renderHTML

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

* close(options?: Partial<[ApplicationClosingOptions](../interfaces/foundry.applications.types.ApplicationClosingOptions.html)>): Promise<[CombatTracker](foundry.applications.sidebar.tabs.CombatTracker.html)>

  Close the Application, removing it from the DOM.

  #### Parameters

  + `Optional`options: Partial<[ApplicationClosingOptions](../interfaces/foundry.applications.types.ApplicationClosingOptions.html)> = {}

    Options which modify how the application is closed.

  #### Returns Promise<[CombatTracker](foundry.applications.sidebar.tabs.CombatTracker.html)>

  A Promise which resolves to the closed Application instance

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).close

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

### hoverCombatant

* hoverCombatant(combatant: Combatant, hover: boolean): void

  Highlight a hovered combatant in the tracker.

  #### Parameters

  + combatant: Combatant

    The Combatant.
  + hover: boolean

    Whether they are being hovered in or out.

  #### Returns void

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

* render(options: any, \_options: any): Promise<[CombatTracker](foundry.applications.sidebar.tabs.CombatTracker.html)>

  #### Parameters

  + options: any
  + \_options: any

  #### Returns Promise<[CombatTracker](foundry.applications.sidebar.tabs.CombatTracker.html)>

  #### Inherit Doc

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).render

### renderPopout

* renderPopout(): Promise<  
  Â Â Â Â [AbstractSidebarTab](foundry.applications.sidebar.AbstractSidebarTab.html)<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.html), [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html)>,  
  >

  Pop-out this sidebar tab as a new application.

  #### Returns Promise<[AbstractSidebarTab](foundry.applications.sidebar.AbstractSidebarTab.html)<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.html), [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html)>>

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).renderPopout

### scrollToTurn

* scrollToTurn(): void

  Scroll to the current combatant in the combat log.

  #### Returns void

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

### `Protected`\_formatEffectsTooltip

* \_formatEffectsTooltip(effects: { img: string; name: string }[]): string

  `Protected`

  Format a tooltip for displaying overflowing effects.

  #### Parameters

  + effects: { img: string; name: string }[]

    The effect names and icons.

  #### Returns string

### `Protected`\_getCombatantThumbnail

* \_getCombatantThumbnail(combatant: Combatant): Promise<string>

  `Protected`

  Retrieve a source image for a combatant. If it is a video, use the first frame.

  #### Parameters

  + combatant: Combatant

    The Combatant.

  #### Returns Promise<string>

  The image URL.

### `Protected`\_getCombatContextOptions

* \_getCombatContextOptions(): [ContextMenuEntry](../interfaces/foundry.ContextMenuEntry.html)[]

  `Protected`

  Get context menu entries for Combat in the tracker.

  #### Returns [ContextMenuEntry](../interfaces/foundry.ContextMenuEntry.html)[]

### `Protected`\_getEntryContextOptions

* \_getEntryContextOptions(): [ContextMenuEntry](../interfaces/foundry.ContextMenuEntry.html)[]

  `Protected`

  Get context menu entries for Combatants in the tracker.

  #### Returns [ContextMenuEntry](../interfaces/foundry.ContextMenuEntry.html)[]

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

### `Protected`\_isTokenVisible

* \_isTokenVisible(token: Token): boolean

  `Protected`

  Is the token of the combatant visible?

  #### Parameters

  + token: Token

    The token of the combatant

  #### Returns boolean

  Is the token visible?

### `Protected`\_onActivate

* \_onActivate(): void

  `Protected`

  Actions performed when this tab is activated in the sidebar.

  #### Returns void

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).\_onActivate

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

### `Protected`\_onChangeInput

* \_onChangeInput(event: Event): any

  `Protected`

  The CombatTracker application is not a  element by default, but it does handle specific input events.

  #### Parameters

  + event: Event

    The triggering change event.

  #### Returns any

### `Protected`\_onClickTab

* \_onClickTab(event: PointerEvent): void

  `Protected`

  Handle click events on a tab within the Application.

  #### Parameters

  + event: PointerEvent

  #### Returns void

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).\_onClickTab

### `Protected`\_onCombatantControl

* \_onCombatantControl(event: PointerEvent, target: HTMLElement): any

  `Protected`

  Handle performing some action for an individual combatant.

  #### Parameters

  + event: PointerEvent

    The triggering event.
  + target: HTMLElement

    The action target element.

  #### Returns any

### `Protected`\_onCombatantHoverIn

* \_onCombatantHoverIn(event: PointerEvent): void

  `Protected`

  Handle hovering over a combatant in the tracker.

  #### Parameters

  + event: PointerEvent

    The triggering event.

  #### Returns void

### `Protected`\_onCombatantHoverOut

* \_onCombatantHoverOut(event: PointerEvent): void

  `Protected`

  Handle hovering out a combatant in the tracker.

  #### Parameters

  + event: PointerEvent

    The triggering event.

  #### Returns void

### `Protected`\_onCombatantMouseDown

* \_onCombatantMouseDown(event: PointerEvent, target: HTMLElement): void

  `Protected`

  Handle activating a combatant in the tracker.

  #### Parameters

  + event: PointerEvent

    The triggering event.
  + target: HTMLElement

    The action target element.

  #### Returns void

### `Protected`\_onCombatCreate

* \_onCombatCreate(event: PointerEvent, target: HTMLElement): Promise<void>

  `Protected`

  Create a new combat.

  #### Parameters

  + event: PointerEvent

    The triggering event.
  + target: HTMLElement

    The action target element.

  #### Returns Promise<void>

### `Protected`\_onCombatCycle

* \_onCombatCycle(  
  Â Â Â Â event: PointerEvent,  
  Â Â Â Â target: HTMLElement,  
  ): Promise<[documents](../modules/foundry.documents.html).[Combat](foundry.documents.Combat.html)>

  `Protected`

  Cycle to a different combat encounter in the tracker.

  #### Parameters

  + event: PointerEvent

    The triggering event.
  + target: HTMLElement

    The action target element.

  #### Returns Promise<[documents](../modules/foundry.documents.html).[Combat](foundry.documents.Combat.html)>

### `Protected`\_onDeactivate

* \_onDeactivate(): void

  `Protected`

  Actions performed when this tab is deactivated in the sidebar.

  #### Returns void

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).\_onDeactivate

### `Protected`\_onPanToCombatant

* \_onPanToCombatant(combatant: Combatant): undefined | Promise<boolean>

  `Protected`

  Handle panning to a combatant's token.

  #### Parameters

  + combatant: Combatant

    The combatant.

  #### Returns undefined | Promise<boolean>

### `Protected`\_onPingCombatant

* \_onPingCombatant(combatant: Combatant): undefined | Promise<boolean>

  `Protected`

  Handle pinging a combatant's token.

  #### Parameters

  + combatant: Combatant

    The combatant.

  #### Returns undefined | Promise<boolean>

### `Protected`\_onPosition

* \_onPosition(position: [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.html)): void

  `Protected`

  Actions performed after the Application is re-positioned.

  #### Parameters

  + position: [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.html)

    The requested application position

  #### Returns void

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).\_onPosition

### `Protected`\_onRollInitiative

* \_onRollInitiative(combatant: Combatant): Promise<[documents](../modules/foundry.documents.html).[Combat](foundry.documents.Combat.html)>

  `Protected`

  Handle rolling initiative for a single combatant.

  #### Parameters

  + combatant: Combatant

    The combatant.

  #### Returns Promise<[documents](../modules/foundry.documents.html).[Combat](foundry.documents.Combat.html)>

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

### `Protected`\_onToggleDefeatedStatus

* \_onToggleDefeatedStatus(combatant: Combatant): Promise<void>

  `Protected`

  Handle toggling the defeated status effect on a combatant token.

  #### Parameters

  + combatant: Combatant

    The combatant.

  #### Returns Promise<void>

### `Protected`\_onToggleHidden

* \_onToggleHidden(combatant: Combatant): any

  `Protected`

  Toggle a combatant's hidden state in the tracker.

  #### Parameters

  + combatant: Combatant

    The combatant.

  #### Returns any

### `Protected`\_onUpdateInitiative

* \_onUpdateInitiative(event: Event): any

  `Protected`

  Handle updating a combatant's initiative in-sheet.

  #### Parameters

  + event: Event

    The triggering change event.

  #### Returns any

### `Protected`\_postRender

* \_postRender(  
  Â Â Â Â context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.html),  
  Â Â Â Â options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html),  
  ): Promise<void>

  `Protected`

  Perform post-render finalization actions.

  #### Parameters

  + context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.html)

    Prepared context data.
  + options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html)

    Provided render options.

  #### Returns Promise<void>

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).\_postRender

### `Protected`\_preClose

* \_preClose(options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html)): Promise<void>

  `Protected`

  Actions performed before closing the Application.
  Pre-close steps are awaited by the close process.

  #### Parameters

  + options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html)

    Provided render options

  #### Returns Promise<void>

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).\_preClose

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

### `Protected`\_prepareCombatContext

* \_prepareCombatContext(  
  Â Â Â Â context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.html),  
  Â Â Â Â options: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.html),  
  ): Promise<void>

  `Protected`

  Prepare render context for the footer part.

  #### Parameters

  + context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.html)
  + options: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.html)

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

### `Protected`\_prepareTrackerContext

* \_prepareTrackerContext(  
  Â Â Â Â context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.html),  
  Â Â Â Â options: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.html),  
  ): Promise<void>

  `Protected`

  Prepare render context for the tracker part.

  #### Parameters

  + context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.html)
  + options: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.html)

  #### Returns Promise<void>

### `Protected`\_prepareTurnContext

* \_prepareTurnContext(  
  Â Â Â Â combat: [documents](../modules/foundry.documents.html).[Combat](foundry.documents.Combat.html),  
  Â Â Â Â combatant: Combatant,  
  Â Â Â Â index: number,  
  ): Promise<object>

  `Protected`

  Prepare render context for a single entry in the combat tracker.

  #### Parameters

  + combat: [documents](../modules/foundry.documents.html).[Combat](foundry.documents.Combat.html)

    The active combat.
  + combatant: Combatant

    The Combatant whose turn is being prepared.
  + index: number

    The index of this entry in the turn order.

  #### Returns Promise<object>

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

### `Static`waitForImages

* waitForImages(element: HTMLElement): Promise<void>

  Wait for any images in the given element to load.

  #### Parameters

  + element: HTMLElement

    The element.

  #### Returns Promise<void>

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).waitForImages