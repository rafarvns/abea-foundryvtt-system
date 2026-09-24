---
title: "CombatTracker | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.applications.sidebar.tabs.CombatTracker.html"
category: "classes"
---

# Class CombatTracker

An Application that manages switching between Combats and tracking the Combatants in those Combats.

#### Mixes

HandlebarsApplication

#### Hierarchy ([View Summary](../hierarchy.md#foundry.applications.sidebar.tabs.CombatTracker))

* [AbstractSidebarTab](foundry.applications.sidebar.AbstractSidebarTab.md)<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.md), [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md), this>
  + CombatTracker

##### Index

### Constructors

[constructor](#constructor)

### Properties

[options](#options)
[position](#position)
[tabGroups](#tabgroups)
[\_appId](#_appid)
[\_maxZ](#_maxz)
[BASE\_APPLICATION](#base_application)
[DEFAULT\_OPTIONS](#default_options)
[emittedEvents](#emittedevents)
[PARTS](#parts)
[RENDER\_STATES](#render_states)
[tabName](#tabname)
[TABS](#tabs)

### Accessors

[active](#active)
[children](#children)
[classList](#classlist)
[combats](#combats)
[element](#element)
[form](#form)
[hasFrame](#hasframe)
[id](#id)
[isPopout](#ispopout)
[minimized](#minimized)
[parent](#parent)
[popout](#popout)
[rendered](#rendered)
[scene](#scene)
[state](#state)
[tabName](#tabname-1)
[title](#title)
[viewed](#viewed)
[window](#window)

### Methods

[\_attachFrameListeners](#_attachframelisteners)
[\_awaitTransition](#_awaittransition)
[\_canDetach](#_candetach)
[\_configureRenderOptions](#_configurerenderoptions)
[\_doEvent](#_doevent)
[\_initializeApplicationOptions](#_initializeapplicationoptions)
[\_onClickAction](#_onclickaction)
[\_onClose](#_onclose)
[\_onFirstRender](#_onfirstrender)
[\_onRender](#_onrender)
[\_prepareContext](#_preparecontext)
[\_preparePartContext](#_preparepartcontext)
[\_renderFrame](#_renderframe)
[\_renderHTML](#_renderhtml)
[activate](#activate)
[addEventListener](#addeventlistener)
[attachWindow](#attachwindow)
[bringToFront](#bringtofront)
[changeTab](#changetab)
[close](#close)
[detachWindow](#detachwindow)
[dispatchEvent](#dispatchevent)
[hoverCombatant](#hovercombatant)
[maximize](#maximize)
[minimize](#minimize)
[removeEventListener](#removeeventlistener)
[render](#render)
[renderChild](#renderchild)
[renderPopout](#renderpopout)
[scrollToTurn](#scrolltoturn)
[setPosition](#setposition)
[submit](#submit)
[\_canAttach](#_canattach)
[\_canRender](#_canrender)
[\_createContextMenu](#_createcontextmenu)
[\_formatEffectsTooltip](#_formateffectstooltip)
[\_getCombatantThumbnail](#_getcombatantthumbnail)
[\_getCombatContextOptions](#_getcombatcontextoptions)
[\_getEntryContextOptions](#_getentrycontextoptions)
[\_getFrameButtons](#_getframebuttons)
[\_getHeaderControls](#_getheadercontrols)
[\_getTabsConfig](#_gettabsconfig)
[\_headerControlButtons](#_headercontrolbuttons)
[\_headerControlContextEntries](#_headercontrolcontextentries)
[\_insertElement](#_insertelement)
[\_isTokenVisible](#_istokenvisible)
[\_onActivate](#_onactivate)
[\_onAttach](#_onattach)
[\_onChangeForm](#_onchangeform)
[\_onChangeInput](#_onchangeinput)
[\_onClickTab](#_onclicktab)
[\_onCombatantControl](#_oncombatantcontrol)
[\_onCombatantHoverIn](#_oncombatanthoverin)
[\_onCombatantHoverOut](#_oncombatanthoverout)
[\_onCombatantMouseDown](#_oncombatantmousedown)
[\_onCombatCreate](#_oncombatcreate)
[\_onCombatCycle](#_oncombatcycle)
[\_onDeactivate](#_ondeactivate)
[\_onDetach](#_ondetach)
[\_onPanToCombatant](#_onpantocombatant)
[\_onPingCombatant](#_onpingcombatant)
[\_onPosition](#_onposition)
[\_onRollInitiative](#_onrollinitiative)
[\_onSubmitForm](#_onsubmitform)
[\_onToggleDefeatedStatus](#_ontoggledefeatedstatus)
[\_onToggleHidden](#_ontogglehidden)
[\_onUpdateInitiative](#_onupdateinitiative)
[\_postRender](#_postrender)
[\_preClose](#_preclose)
[\_preFirstRender](#_prefirstrender)
[\_prepareCombatContext](#_preparecombatcontext)
[\_prepareTabs](#_preparetabs)
[\_prepareTrackerContext](#_preparetrackercontext)
[\_prepareTurnContext](#_prepareturncontext)
[\_prePosition](#_preposition)
[\_preRender](#_prerender)
[\_refit](#_refit)
[\_removeElement](#_removeelement)
[\_renderFrameButtons](#_renderframebuttons)
[\_renderHeaderControl](#_renderheadercontrol)
[\_replaceHTML](#_replacehtml)
[\_tearDown](#_teardown)
[\_updateFrame](#_updateframe)
[\_updatePosition](#_updateposition)
[inheritanceChain](#inheritancechain)
[instances](#instances)
[parseCSSDimension](#parsecssdimension)
[waitForImages](#waitforimages)

## Constructors

### constructor

* new CombatTracker(options?: Partial<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.md)>): CombatTracker

  Applications are constructed by providing an object of configuration options.

  #### Parameters

  + `Optional`options: Partial<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.md)> = {}

    Options used to configure the Application instance

  #### Returns CombatTracker

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).constructor

## Properties

### options

options: Readonly<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.md)>

Application instance configuration options.

Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).options

### position

position: [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.md) = ...

The current position of the application with respect to the window.document.body.

Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).position

### tabGroups

tabGroups: Record<string, string | null> = ...

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

BASE\_APPLICATION: typeof [ApplicationV2](foundry.applications.api.ApplicationV2.md) = ApplicationV2

Designates which upstream Application class in this class' inheritance chain is the base application.
Any DEFAULT\_OPTIONS of super-classes further upstream of the BASE\_APPLICATION are ignored.
Hook events for super-classes further upstream of the BASE\_APPLICATION are not dispatched.

Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).BASE\_APPLICATION

### `Static`DEFAULT\_OPTIONS

DEFAULT\_OPTIONS: {  
Â Â Â Â actions: {  
Â Â Â Â Â Â Â Â activateCombatant: (this: CombatTracker, ...args: any[]) => void;  
Â Â Â Â Â Â Â Â createCombat: (this: CombatTracker, ...args: any[]) => Promise<void>;  
Â Â Â Â Â Â Â Â cycleCombat: (  
Â Â Â Â Â Â Â Â Â Â Â Â this: CombatTracker,  
Â Â Â Â Â Â Â Â Â Â Â Â ...args: any[],  
Â Â Â Â Â Â Â Â ) => Promise<[documents](../modules/foundry.documents.md).[Combat](foundry.documents.Combat.md)>;  
Â Â Â Â Â Â Â Â editName: (this: CombatTracker) => Promise<void>;  
Â Â Â Â Â Â Â Â panToCombatant: (this: CombatTracker, ...args: any[]) => any;  
Â Â Â Â Â Â Â Â pingCombatant: (this: CombatTracker, ...args: any[]) => any;  
Â Â Â Â Â Â Â Â rollInitiative: (this: CombatTracker, ...args: any[]) => any;  
Â Â Â Â Â Â Â Â toggleDefeated: (this: CombatTracker, ...args: any[]) => any;  
Â Â Â Â Â Â Â Â toggleHidden: (this: CombatTracker, ...args: any[]) => any;  
Â Â Â Â Â Â Â Â trackerSettings: (  
Â Â Â Â Â Â Â Â Â Â Â Â this: CombatTracker,  
Â Â Â Â Â Â Â Â Â Â Â Â event: PointerEvent,  
Â Â Â Â Â Â Â Â Â Â Â Â target: HTMLElement,  
Â Â Â Â Â Â Â Â ) => Promise<[CombatTrackerConfig](foundry.applications.apps.CombatTrackerConfig.md)>;  
Â Â Â Â };  
Â Â Â Â window: { title: string };  
} = ...

#### Inherit Doc

Overrides HandlebarsApplicationMixin(AbstractSidebarTab).DEFAULT\_OPTIONS

### `Static`emittedEvents

emittedEvents: readonly [  
Â Â Â Â "prerender",  
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

TABS: Record<string, [ApplicationTabsConfiguration](../interfaces/foundry.applications.types.ApplicationTabsConfiguration.md)> = {}

Configuration of application tabs, with an entry per tab group.

Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).TABS

## Accessors

### active

* get active(): boolean

  Whether this tab is currently active in the sidebar.

  #### Returns boolean

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).active

### children

* get children(): Map<  
  Â Â Â Â string,  
  Â Â Â Â [ApplicationV2](foundry.applications.api.ApplicationV2.md)<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.md), [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md)>,  
  >

  The child Applications registered under this one via renderChild.

  #### Returns Map<string, [ApplicationV2](foundry.applications.api.ApplicationV2.md)<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.md), [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md)>>

  Inherited from [foundry](../modules/foundry.md).[children](../modules/foundry.md#children)

### classList

* get classList(): DOMTokenList

  The CSS class list of this Application instance

  #### Returns DOMTokenList

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).classList

### combats

* get combats(): [documents](../modules/foundry.documents.md).[Combat](foundry.documents.Combat.md)[]

  The list combats applicable to the active Scene.

  #### Returns [documents](../modules/foundry.documents.md).[Combat](foundry.documents.Combat.md)[]

### element

* get element(): HTMLElement

  The HTMLElement which renders this Application into the DOM.

  #### Returns HTMLElement

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).element

### form

* get form(): HTMLFormElement | null

  Does this Application have a top-level form element?

  #### Returns HTMLFormElement | null

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

### parent

* get parent(): | [ApplicationV2](foundry.applications.api.ApplicationV2.md)<  
  Â Â Â Â [ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.md),  
  Â Â Â Â [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md),  
  >  
  | null

  The parent Application of this Application, if registered via renderChild.

  #### Returns [ApplicationV2](foundry.applications.api.ApplicationV2.md)<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.md), [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md)> | null

  Inherited from [foundry](../modules/foundry.md).[parent](../modules/foundry.md#parent)

### popout

* get popout(): | void  
  | [AbstractSidebarTab](foundry.applications.sidebar.AbstractSidebarTab.md)<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.md), [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md)>

  A reference to the popped-out version of this tab, if one exists.

  #### Returns void | [AbstractSidebarTab](foundry.applications.sidebar.AbstractSidebarTab.md)<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.md), [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md)>

  Inherited from [foundry](../modules/foundry.md).[popout](../modules/foundry.md#popout)

### rendered

* get rendered(): boolean

  Is this Application instance currently rendered?

  #### Returns boolean

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).rendered

### scene

* get scene(): [documents](../modules/foundry.documents.md).[Scene](foundry.documents.Scene.md) | null

  The Scene linked to the currently viewed Combat, if any

  #### Returns [documents](../modules/foundry.documents.md).[Scene](foundry.documents.Scene.md) | null

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

* get viewed(): [documents](../modules/foundry.documents.md).[Combat](foundry.documents.Combat.md) | null

  Record the currently tracked combat encounter.

  #### Returns [documents](../modules/foundry.documents.md).[Combat](foundry.documents.Combat.md) | null

### window

* get window(): {  
  Â Â Â Â close: HTMLButtonElement;  
  Â Â Â Â content: HTMLElement;  
  Â Â Â Â controls: HTMLButtonElement;  
  Â Â Â Â header: HTMLElement;  
  Â Â Â Â icon: HTMLElement;  
  Â Â Â Â onDrag: Function;  
  Â Â Â Â onResize: Function;  
  Â Â Â Â pointerMoveThrottle: boolean;  
  Â Â Â Â pointerStartPosition: [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.md);  
  Â Â Â Â resize: HTMLElement;  
  Â Â Â Â title: HTMLHeadingElement;  
  Â Â Â Â windowId: string;  
  }

  Convenience references to window header elements.

  #### Returns { Â Â Â Â close: HTMLButtonElement; Â Â Â Â content: HTMLElement; Â Â Â Â controls: HTMLButtonElement; Â Â Â Â header: HTMLElement; Â Â Â Â icon: HTMLElement; Â Â Â Â onDrag: Function; Â Â Â Â onResize: Function; Â Â Â Â pointerMoveThrottle: boolean; Â Â Â Â pointerStartPosition: [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.md); Â Â Â Â resize: HTMLElement; Â Â Â Â title: HTMLHeadingElement; Â Â Â Â windowId: string; }

  Inherited from [foundry](../modules/foundry.md).[window](../modules/foundry.md#window)

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

### \_canDetach

* \_canDetach(): boolean

  Whether this Application is permitted to detach from the main workspace.
  Managed children (those with an active parent) may detach to break the parent link and claim their own window.

  #### Returns boolean

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).\_canDetach

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

* \_initializeApplicationOptions(options: any): [ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.md)

  #### Parameters

  + options: any

  #### Returns [ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.md)

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

* \_prepareContext(options: any): Promise<[ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.md)>

  #### Parameters

  + options: any

  #### Returns Promise<[ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.md)>

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
  Â Â Â Â context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.md),  
  Â Â Â Â options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md),  
  ): Promise<any>

  Render an HTMLElement for the Application.
  An Application subclass must implement this method in order for the Application to be renderable.

  #### Parameters

  + context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.md)

    Context data for the render operation
  + options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md)

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
  Â Â Â Â listener: [EmittedEventListener](../types/foundry.utils.types.EmittedEventListener.md),  
  Â Â Â Â options?: { once?: boolean },  
  ): void

  Add a new event listener for a certain type of event.

  #### Parameters

  + type: string

    The type of event being registered for
  + listener: [EmittedEventListener](../types/foundry.utils.types.EmittedEventListener.md)

    The listener function called when the event occurs
  + `Optional`options: { once?: boolean } = {}

    Options which configure the event listener

    - ##### `Optional`once?: boolean

      Should the event only be responded to once and then removed

  #### Returns void

  #### See

  <https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener>

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).addEventListener

### attachWindow

* attachWindow(  
  Â Â Â Â options?: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md),  
  ): Promise<  
  Â Â Â Â [ApplicationV2](foundry.applications.api.ApplicationV2.md)<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.md), [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md)>,  
  >

  Re-attach a detached application to the main workspace.
  If this application was previously a child and was manually detached, breaking its parent link, this method first
  attempts to re-join the prior parent's window before falling back to the main workspace.

  #### Parameters

  + `Optional`options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md) = {}

    Render options.

  #### Returns Promise<[ApplicationV2](foundry.applications.api.ApplicationV2.md)<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.md), [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md)>>

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).attachWindow

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

* close(options?: Partial<[ApplicationClosingOptions](../interfaces/foundry.applications.types.ApplicationClosingOptions.md)>): Promise<CombatTracker>

  Close the Application, removing it from the DOM.

  #### Parameters

  + `Optional`options: Partial<[ApplicationClosingOptions](../interfaces/foundry.applications.types.ApplicationClosingOptions.md)> = {}

    Options which modify how the application is closed.

  #### Returns Promise<CombatTracker>

  A Promise which resolves to the closed Application instance

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).close

### detachWindow

* detachWindow(options?: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md)): Promise<CombatTracker>

  Detach an application from the main workspace, and render it in a separate browser window.
  If this application is a registered child, detaching it breaks the parent link and gives it its own window.

  #### Parameters

  + `Optional`options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md) = {}

    Render options.

  #### Returns Promise<CombatTracker>

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).detachWindow

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

* removeEventListener(type: string, listener: [EmittedEventListener](../types/foundry.utils.types.EmittedEventListener.md)): void

  Remove an event listener for a certain type of event.

  #### Parameters

  + type: string

    The type of event being removed
  + listener: [EmittedEventListener](../types/foundry.utils.types.EmittedEventListener.md)

    The listener function being removed

  #### Returns void

  #### See

  <https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener>

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).removeEventListener

### render

* render(options: any, \_options: any): Promise<CombatTracker>

  #### Parameters

  + options: any
  + \_options: any

  #### Returns Promise<CombatTracker>

  #### Inherit Doc

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).render

### renderChild

* renderChild(  
  Â Â Â Â app: [ApplicationV2](foundry.applications.api.ApplicationV2.md)<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.md), [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md)>,  
  Â Â Â Â options?: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md),  
  ): Promise<  
  Â Â Â Â [ApplicationV2](foundry.applications.api.ApplicationV2.md)<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.md), [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md)>,  
  >

  Render another Application as a child of this one.
  The child is rendered in the same window as this application and moves with it when it is detached or re-attached.
  Closing this application will also close the child.
  If the child was previously registered under a different parent, that link is replaced.

  #### Parameters

  + app: [ApplicationV2](foundry.applications.api.ApplicationV2.md)<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.md), [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md)>

    The child application to render.
  + `Optional`options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md) = {}

    Render options passed to the child's render method.

  #### Returns Promise<[ApplicationV2](foundry.applications.api.ApplicationV2.md)<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.md), [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md)>>

  A Promise which resolves to the rendered child Application.

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).renderChild

### renderPopout

* renderPopout(): Promise<  
  Â Â Â Â [AbstractSidebarTab](foundry.applications.sidebar.AbstractSidebarTab.md)<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.md), [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md)>,  
  >

  Pop-out this sidebar tab as a new application.

  #### Returns Promise<[AbstractSidebarTab](foundry.applications.sidebar.AbstractSidebarTab.md)<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.md), [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md)>>

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).renderPopout

### scrollToTurn

* scrollToTurn(): void

  Scroll to the current combatant in the combat log.

  #### Returns void

### setPosition

* setPosition(position?: Partial<[ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.md)>): void | [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.md)

  Update the Application element position using provided data which is merged with the prior position.

  #### Parameters

  + `Optional`position: Partial<[ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.md)>

    New Application positioning data

  #### Returns void | [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.md)

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

### `Protected`\_canAttach

* \_canAttach(): boolean

  `Protected`

  Whether this Application is permitted to re-attach to the main workspace.
  Managed children (those with an active parent) cannot re-attach independently; their parent controls placement.

  #### Returns boolean

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).\_canAttach

### `Protected`\_canRender

* \_canRender(options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md)): false | void

  `Protected`

  Test whether this Application is allowed to be rendered.

  #### Parameters

  + options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md)

    Provided render options

  #### Returns false | void

  Return false to prevent rendering

  #### Throws

  An Error to display a warning message

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).\_canRender

### `Protected`\_createContextMenu

* \_createContextMenu(  
  Â Â Â Â handler: () => [ContextMenuEntry](../interfaces/foundry.ContextMenuEntry.md)[],  
  Â Â Â Â selector: string,  
  Â Â Â Â options?: {  
  Â Â Â Â Â Â Â Â container?: HTMLElement;  
  Â Â Â Â Â Â Â Â hookName?: string;  
  Â Â Â Â Â Â Â Â parentClassHooks?: boolean;  
  Â Â Â Â },  
  ): [ContextMenu](foundry.applications.ux.ContextMenu.md)  
  | null

  `Protected`

  Create a ContextMenu instance used in this Application.

  #### Parameters

  + handler: () => [ContextMenuEntry](../interfaces/foundry.ContextMenuEntry.md)[]

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

  #### Returns [ContextMenu](foundry.applications.ux.ContextMenu.md) | null

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

* \_getCombatContextOptions(): [ContextMenuEntry](../interfaces/foundry.ContextMenuEntry.md)[]

  `Protected`

  Get context menu entries for Combat in the tracker.

  #### Returns [ContextMenuEntry](../interfaces/foundry.ContextMenuEntry.md)[]

### `Protected`\_getEntryContextOptions

* \_getEntryContextOptions(): [ContextMenuEntry](../interfaces/foundry.ContextMenuEntry.md)[]

  `Protected`

  Get context menu entries for Combatants in the tracker.

  #### Returns [ContextMenuEntry](../interfaces/foundry.ContextMenuEntry.md)[]

### `Protected`\_getFrameButtons

* \_getFrameButtons(  
  Â Â Â Â options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md),  
  ): [ApplicationHeaderControlsEntry](../types/foundry.applications.types.ApplicationHeaderControlsEntry.md)[]

  `Protected`

  Return an array of header button config entries to render into the Application frame.
  Subclasses may override this method to add, remove, or replace frame header buttons.

  #### Parameters

  + options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md)

    Options which configure application rendering behavior.

  #### Returns [ApplicationHeaderControlsEntry](../types/foundry.applications.types.ApplicationHeaderControlsEntry.md)[]

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).\_getFrameButtons

### `Protected`\_getHeaderControls

* \_getHeaderControls(): [ApplicationHeaderControlsEntry](../types/foundry.applications.types.ApplicationHeaderControlsEntry.md)[]

  `Protected`

  Configure the array of header control menu options

  #### Returns [ApplicationHeaderControlsEntry](../types/foundry.applications.types.ApplicationHeaderControlsEntry.md)[]

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).\_getHeaderControls

### `Protected`\_getTabsConfig

* \_getTabsConfig(group: string): [ApplicationTabsConfiguration](../interfaces/foundry.applications.types.ApplicationTabsConfiguration.md) | null

  `Protected`

  Get the configuration for a tabs group.

  #### Parameters

  + group: string

    The ID of a tabs group

  #### Returns [ApplicationTabsConfiguration](../interfaces/foundry.applications.types.ApplicationTabsConfiguration.md) | null

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).\_getTabsConfig

### `Protected`\_headerControlButtons

* \_headerControlButtons(): Generator<[ApplicationHeaderControlsEntry](../types/foundry.applications.types.ApplicationHeaderControlsEntry.md), any, any>

  `Protected`

  Iterate over header control buttons, filtering for controls which are visible for the current client.

  #### Returns Generator<[ApplicationHeaderControlsEntry](../types/foundry.applications.types.ApplicationHeaderControlsEntry.md), any, any>

  #### Yields

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).\_headerControlButtons

### `Protected`\_headerControlContextEntries

* \_headerControlContextEntries(): Generator<[ContextMenuEntry](../interfaces/foundry.ContextMenuEntry.md), void, any>

  `Protected`

  Generate context menu entries based on the header control specification.

  #### Returns Generator<[ContextMenuEntry](../interfaces/foundry.ContextMenuEntry.md), void, any>

  #### Yields

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).\_headerControlContextEntries

### `Protected`\_insertElement

* \_insertElement(  
  Â Â Â Â element: HTMLElement,  
  Â Â Â Â options?: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md),  
  ): Promise<void>

  `Protected`

  Insert the application HTML element into the DOM.
  Subclasses may override this method to customize how the application is inserted.

  #### Parameters

  + element: HTMLElement

    The element to insert
  + `Optional`options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md) = {}

    Render options.

  #### Returns Promise<void>

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

### `Protected`\_onAttach

* \_onAttach(from: Document, to: Document): void

  `Protected`

  Actions performed after the Application has been re-attached to the main workspace.
  Registered child Applications are re-attached automatically after this method returns.

  #### Parameters

  + from: Document

    The Application's former host document. This document's window may have been closed.
  + to: Document

    The main workspace document.

  #### Returns void

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).\_onAttach

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
  ): Promise<[documents](../modules/foundry.documents.md).[Combat](foundry.documents.Combat.md)>

  `Protected`

  Cycle to a different combat encounter in the tracker.

  #### Parameters

  + event: PointerEvent

    The triggering event.
  + target: HTMLElement

    The action target element.

  #### Returns Promise<[documents](../modules/foundry.documents.md).[Combat](foundry.documents.Combat.md)>

### `Protected`\_onDeactivate

* \_onDeactivate(): void

  `Protected`

  Actions performed when this tab is deactivated in the sidebar.

  #### Returns void

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).\_onDeactivate

### `Protected`\_onDetach

* \_onDetach(from: Document, to: Document): void

  `Protected`

  Actions performed after the Application has been detached from the main workspace.
  Registered child Applications are moved into the same detached window automatically after this method returns.

  #### Parameters

  + from: Document

    The main workspace document.
  + to: Document

    The Application's new host document.

  #### Returns void

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).\_onDetach

### `Protected`\_onPanToCombatant

* \_onPanToCombatant(combatant: Combatant): Promise<boolean> | undefined

  `Protected`

  Handle panning to a combatant's token.

  #### Parameters

  + combatant: Combatant

    The combatant.

  #### Returns Promise<boolean> | undefined

### `Protected`\_onPingCombatant

* \_onPingCombatant(combatant: Combatant): Promise<boolean> | undefined

  `Protected`

  Handle pinging a combatant's token.

  #### Parameters

  + combatant: Combatant

    The combatant.

  #### Returns Promise<boolean> | undefined

### `Protected`\_onPosition

* \_onPosition(position: [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.md)): void

  `Protected`

  Actions performed after the Application is re-positioned.

  #### Parameters

  + position: [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.md)

    The requested application position

  #### Returns void

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).\_onPosition

### `Protected`\_onRollInitiative

* \_onRollInitiative(combatant: Combatant): Promise<[documents](../modules/foundry.documents.md).[Combat](foundry.documents.Combat.md)>

  `Protected`

  Handle rolling initiative for a single combatant.

  #### Parameters

  + combatant: Combatant

    The combatant.

  #### Returns Promise<[documents](../modules/foundry.documents.md).[Combat](foundry.documents.Combat.md)>

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
  Â Â Â Â context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.md),  
  Â Â Â Â options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md),  
  ): Promise<void>

  `Protected`

  Perform post-render finalization actions.

  #### Parameters

  + context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.md)

    Prepared context data.
  + options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md)

    Provided render options.

  #### Returns Promise<void>

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).\_postRender

### `Protected`\_preClose

* \_preClose(options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md)): Promise<void>

  `Protected`

  Actions performed before closing the Application.
  Pre-close steps are awaited by the close process.

  #### Parameters

  + options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md)

    Provided render options

  #### Returns Promise<void>

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).\_preClose

### `Protected`\_preFirstRender

* \_preFirstRender(  
  Â Â Â Â context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.md),  
  Â Â Â Â options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md),  
  ): Promise<void>

  `Protected`

  Actions performed before a first render of the Application.

  #### Parameters

  + context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.md)

    Prepared context data
  + options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md)

    Provided render options

  #### Returns Promise<void>

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).\_preFirstRender

### `Protected`\_prepareCombatContext

* \_prepareCombatContext(  
  Â Â Â Â context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.md),  
  Â Â Â Â options: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.md),  
  ): Promise<void>

  `Protected`

  Prepare render context for the footer part.

  #### Parameters

  + context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.md)
  + options: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.md)

  #### Returns Promise<void>

### `Protected`\_prepareTabs

* \_prepareTabs(group: string): Record<string, [ApplicationTab](../interfaces/foundry.applications.types.ApplicationTab.md)>

  `Protected`

  Prepare application tab data for a single tab group.

  #### Parameters

  + group: string

    The ID of the tab group to prepare

  #### Returns Record<string, [ApplicationTab](../interfaces/foundry.applications.types.ApplicationTab.md)>

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).\_prepareTabs

### `Protected`\_prepareTrackerContext

* \_prepareTrackerContext(  
  Â Â Â Â context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.md),  
  Â Â Â Â options: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.md),  
  ): Promise<void>

  `Protected`

  Prepare render context for the tracker part.

  #### Parameters

  + context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.md)
  + options: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.md)

  #### Returns Promise<void>

### `Protected`\_prepareTurnContext

* \_prepareTurnContext(  
  Â Â Â Â combat: [documents](../modules/foundry.documents.md).[Combat](foundry.documents.Combat.md),  
  Â Â Â Â combatant: Combatant,  
  Â Â Â Â index: number,  
  ): Promise<object>

  `Protected`

  Prepare render context for a single entry in the combat tracker.

  #### Parameters

  + combat: [documents](../modules/foundry.documents.md).[Combat](foundry.documents.Combat.md)

    The active combat.
  + combatant: Combatant

    The Combatant whose turn is being prepared.
  + index: number

    The index of this entry in the turn order.

  #### Returns Promise<object>

### `Protected`\_prePosition

* \_prePosition(position: [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.md)): void

  `Protected`

  Actions performed before the Application is re-positioned.
  Pre-position steps are not awaited because setPosition is synchronous.

  #### Parameters

  + position: [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.md)

    The requested application position

  #### Returns void

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).\_prePosition

### `Protected`\_preRender

* \_preRender(  
  Â Â Â Â context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.md),  
  Â Â Â Â options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md),  
  ): Promise<void>

  `Protected`

  Actions performed before any render of the Application.
  Pre-render steps are awaited by the render process.

  #### Parameters

  + context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.md)

    Prepared context data
  + options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md)

    Provided render options

  #### Returns Promise<void>

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).\_preRender

### `Protected`\_refit

* \_refit(positionUpdate?: Partial<[ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.md)>): void

  `Protected`

  Re-fit an application to its content following a change in its natural size.

  #### Parameters

  + `Optional`positionUpdate: Partial<[ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.md)> = {}

    Position data forwarded to setPosition.

  #### Returns void

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).\_refit

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

### `Protected`\_renderFrameButtons

* \_renderFrameButtons(options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md)): Promise<void>

  `Protected`

  Render buttons that are inserted directly into the frame header. Header controls should be preferred over frame
  buttons, which should be used sparingly.

  #### Parameters

  + options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md)

    Options which configure application rendering behavior.

  #### Returns Promise<void>

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).\_renderFrameButtons

### `Protected`\_renderHeaderControl

* \_renderHeaderControl(control: [ApplicationHeaderControlsEntry](../types/foundry.applications.types.ApplicationHeaderControlsEntry.md)): HTMLLIElement

  `Protected`

  Render a header control button.

  #### Parameters

  + control: [ApplicationHeaderControlsEntry](../types/foundry.applications.types.ApplicationHeaderControlsEntry.md)

  #### Returns HTMLLIElement

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).\_renderHeaderControl

### `Protected`\_replaceHTML

* \_replaceHTML(  
  Â Â Â Â result: any,  
  Â Â Â Â content: HTMLElement,  
  Â Â Â Â options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md),  
  ): void

  `Protected`

  Replace the HTML of the application with the result provided by the rendering backend.
  An Application subclass should implement this method in order for the Application to be renderable.

  #### Parameters

  + result: any

    The result returned by the application rendering backend
  + content: HTMLElement

    The content element into which the rendered result must be inserted
  + options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md)

    Options which configure application rendering behavior

  #### Returns void

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).\_replaceHTML

### `Protected`\_tearDown

* \_tearDown(options: [ApplicationClosingOptions](../interfaces/foundry.applications.types.ApplicationClosingOptions.md)): void

  `Protected`

  Remove elements from the DOM and trigger garbage collection as part of application closure.

  #### Parameters

  + options: [ApplicationClosingOptions](../interfaces/foundry.applications.types.ApplicationClosingOptions.md)

  #### Returns void

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).\_tearDown

### `Protected`\_updateFrame

* \_updateFrame(options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md)): void

  `Protected`

  When the Application is rendered, optionally update aspects of the window frame.

  #### Parameters

  + options: [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md)

    Options provided at render-time

  #### Returns void

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).\_updateFrame

### `Protected`\_updatePosition

* \_updatePosition(position: [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.md)): [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.md)

  `Protected`

  Translate a requested application position updated into a resolved allowed position for the Application.
  Subclasses may override this method to implement more advanced positioning behavior.

  #### Parameters

  + position: [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.md)

    Requested Application positioning data

  #### Returns [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.md)

  Resolved Application positioning data

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).\_updatePosition

### `Static`inheritanceChain

* inheritanceChain(): Generator<typeof [ApplicationV2](foundry.applications.api.ApplicationV2.md), void, unknown>

  Iterate over the inheritance chain of this Application.
  The chain includes this Application itself and all parents until the base application is encountered.

  #### Returns Generator<typeof [ApplicationV2](foundry.applications.api.ApplicationV2.md), void, unknown>

  #### See

  [ApplicationV2.BASE\_APPLICATION](foundry.applications.api.ApplicationV2.md#base_application)

  #### Yields

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).inheritanceChain

### `Static`instances

* instances(): Generator<typeof [ApplicationV2](foundry.applications.api.ApplicationV2.md), any, any>

  Iterate over the instances of this Application.

  #### Returns Generator<typeof [ApplicationV2](foundry.applications.api.ApplicationV2.md), any, any>

  #### Yields

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).instances

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