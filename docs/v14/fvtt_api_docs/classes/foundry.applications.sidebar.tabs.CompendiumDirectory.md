---
title: "CompendiumDirectory | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.applications.sidebar.tabs.CompendiumDirectory.html"
category: "classes"
---

# Class CompendiumDirectory

The listing of compendiums available in the World.

#### Mixes

HandlebarsApplication

#### Hierarchy ([View Summary](../hierarchy.md#foundry.applications.sidebar.tabs.CompendiumDirectory))

* [AbstractSidebarTab](foundry.applications.sidebar.AbstractSidebarTab.md)<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.md), [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.md), this>
  + CompendiumDirectory

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
[activeFilters](#activefilters)
[children](#children)
[classList](#classlist)
[element](#element)
[form](#form)
[hasFrame](#hasframe)
[id](#id)
[isPopout](#ispopout)
[minimized](#minimized)
[parent](#parent)
[popout](#popout)
[rendered](#rendered)
[state](#state)
[tabName](#tabname-1)
[title](#title)
[window](#window)

### Methods

[\_awaitTransition](#_awaittransition)
[\_canDetach](#_candetach)
[\_doEvent](#_doevent)
[\_initializeApplicationOptions](#_initializeapplicationoptions)
[\_onClose](#_onclose)
[\_onDragStart](#_ondragstart)
[\_onDrop](#_ondrop)
[\_onFirstRender](#_onfirstrender)
[\_onRender](#_onrender)
[\_prepareContext](#_preparecontext)
[\_preparePartContext](#_preparepartcontext)
[\_preSyncPartState](#_presyncpartstate)
[\_renderFrame](#_renderframe)
[\_renderHTML](#_renderhtml)
[\_syncPartState](#_syncpartstate)
[activate](#activate)
[addEventListener](#addeventlistener)
[attachWindow](#attachwindow)
[bringToFront](#bringtofront)
[changeTab](#changetab)
[close](#close)
[detachWindow](#detachwindow)
[dispatchEvent](#dispatchevent)
[maximize](#maximize)
[minimize](#minimize)
[removeEventListener](#removeeventlistener)
[render](#render)
[renderChild](#renderchild)
[renderPopout](#renderpopout)
[setPosition](#setposition)
[submit](#submit)
[\_attachFrameListeners](#_attachframelisteners)
[\_canAttach](#_canattach)
[\_canDragDrop](#_candragdrop)
[\_canDragStart](#_candragstart)
[\_canRender](#_canrender)
[\_configureRenderOptions](#_configurerenderoptions)
[\_createContextMenu](#_createcontextmenu)
[\_entryAlreadyExists](#_entryalreadyexists)
[\_entryBelongsToFolder](#_entrybelongstofolder)
[\_getDroppedEntryFromData](#_getdroppedentryfromdata)
[\_getEntryContextOptions](#_getentrycontextoptions)
[\_getEntryDragData](#_getentrydragdata)
[\_getFilterContextOptions](#_getfiltercontextoptions)
[\_getFolderContextOptions](#_getfoldercontextoptions)
[\_getFolderDragData](#_getfolderdragdata)
[\_getFrameButtons](#_getframebuttons)
[\_getHeaderControls](#_getheadercontrols)
[\_getTabsConfig](#_gettabsconfig)
[\_handleDroppedEntry](#_handledroppedentry)
[\_handleDroppedFolder](#_handledroppedfolder)
[\_headerControlButtons](#_headercontrolbuttons)
[\_headerControlContextEntries](#_headercontrolcontextentries)
[\_insertElement](#_insertelement)
[\_matchSearchCompendiums](#_matchsearchcompendiums)
[\_matchSearchDocuments](#_matchsearchdocuments)
[\_matchSearchFolders](#_matchsearchfolders)
[\_onActivate](#_onactivate)
[\_onAttach](#_onattach)
[\_onChangeForm](#_onchangeform)
[\_onClickAction](#_onclickaction)
[\_onClickEntry](#_onclickentry)
[\_onClickTab](#_onclicktab)
[\_onCreateEntry](#_oncreateentry)
[\_onCreateFolder](#_oncreatefolder)
[\_onDeactivate](#_ondeactivate)
[\_onDeleteCompendium](#_ondeletecompendium)
[\_onDetach](#_ondetach)
[\_onDragDocumentStart](#_ondragdocumentstart)
[\_onDragHighlight](#_ondraghighlight)
[\_onDragOver](#_ondragover)
[\_onDuplicateCompendium](#_onduplicatecompendium)
[\_onMatchSearchDocuments](#_onmatchsearchdocuments)
[\_onMatchSearchEntry](#_onmatchsearchentry)
[\_onPosition](#_onposition)
[\_onSearchFilter](#_onsearchfilter)
[\_onSubmitForm](#_onsubmitform)
[\_onToggleCompendiumFilterType](#_ontogglecompendiumfiltertype)
[\_onToggleFolder](#_ontogglefolder)
[\_onToggleLock](#_ontogglelock)
[\_postRender](#_postrender)
[\_preClose](#_preclose)
[\_preFirstRender](#_prefirstrender)
[\_prepareDirectoryContext](#_preparedirectorycontext)
[\_prepareHeaderContext](#_prepareheadercontext)
[\_preparePackContext](#_preparepackcontext)
[\_prepareTabs](#_preparetabs)
[\_prePosition](#_preposition)
[\_preRender](#_prerender)
[\_refit](#_refit)
[\_removeElement](#_removeelement)
[\_renderFrameButtons](#_renderframebuttons)
[\_renderHeaderControl](#_renderheadercontrol)
[\_replaceHTML](#_replacehtml)
[\_sortRelative](#_sortrelative)
[\_tearDown](#_teardown)
[\_updateFrame](#_updateframe)
[\_updatePosition](#_updateposition)
[inheritanceChain](#inheritancechain)
[instances](#instances)
[parseCSSDimension](#parsecssdimension)
[waitForImages](#waitforimages)

## Constructors

### constructor

* new CompendiumDirectory(  
  Â Â Â Â options?: Partial<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.md)>,  
  ): CompendiumDirectory

  Applications are constructed by providing an object of configuration options.

  #### Parameters

  + `Optional`options: Partial<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.md)> = {}

    Options used to configure the Application instance

  #### Returns CompendiumDirectory

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
Â Â Â Â Â Â Â Â activateEntry: (this: CompendiumDirectory, ...args: any[]) => void;  
Â Â Â Â Â Â Â Â collapseFolders: (this: CompendiumDirectory) => void;  
Â Â Â Â Â Â Â Â createEntry: (this: CompendiumDirectory, ...args: any[]) => Promise<void>;  
Â Â Â Â Â Â Â Â createFolder: (this: CompendiumDirectory, ...args: any[]) => void;  
Â Â Â Â Â Â Â Â openDocumentSheet: (  
Â Â Â Â Â Â Â Â Â Â Â Â event: PointerEvent,  
Â Â Â Â Â Â Â Â Â Â Â Â target: HTMLElement,  
Â Â Â Â Â Â Â Â ) => void | Promise<void>;  
Â Â Â Â Â Â Â Â toggleFolder: (this: CompendiumDirectory, ...args: any[]) => void;  
Â Â Â Â Â Â Â Â toggleSort: (this: CompendiumDirectory) => Promise<CompendiumDirectory>;  
Â Â Â Â };  
Â Â Â Â classes: string[];  
Â Â Â Â window: { title: string };  
} = ...

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
Â Â Â Â directory: {  
Â Â Â Â Â Â Â Â scrollable: string[];  
Â Â Â Â Â Â Â Â template: string;  
Â Â Â Â Â Â Â Â templates: string[];  
Â Â Â Â };  
Â Â Â Â footer: { template: string };  
Â Â Â Â header: { template: string };  
} = ...

Overrides HandlebarsApplicationMixin(AbstractSidebarTab).PARTS

### `Static`RENDER\_STATES

RENDER\_STATES: Record<string, number> = ...

The sequence of rendering states that describe the Application life-cycle.

Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).RENDER\_STATES

### `Static`tabName

tabName: string = "compendium"

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

### activeFilters

* get activeFilters(): Set<string>

  The set of active document type filters.

  #### Returns Set<string>

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

### \_onClose

* \_onClose(options: any): void

  #### Parameters

  + options: any

  #### Returns void

  #### Inherit Doc

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).\_onClose

### \_onDragStart

* \_onDragStart(event: any): void

  #### Parameters

  + event: any

  #### Returns void

### \_onDrop

* \_onDrop(event: any): Promise<void> | undefined

  #### Parameters

  + event: any

  #### Returns Promise<void> | undefined

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

  Overrides HandlebarsApplicationMixin(AbstractSidebarTab).\_prepareContext

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

### `Abstract`\_renderHTML

* \_renderHTML(  
  Â Â Â Â context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.md),  
  Â Â Â Â options: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.md),  
  ): Promise<any>

  Render an HTMLElement for the Application.
  An Application subclass must implement this method in order for the Application to be renderable.

  #### Parameters

  + context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.md)

    Context data for the render operation
  + options: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.md)

    Options which configure application rendering behavior

  #### Returns Promise<any>

  The result of HTML rendering may be implementation specific.
  Whatever value is returned here is passed to \_replaceHTML

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).\_renderHTML

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
  Â Â Â Â options?: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.md),  
  ): Promise<  
  Â Â Â Â [ApplicationV2](foundry.applications.api.ApplicationV2.md)<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.md), [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md)>,  
  >

  Re-attach a detached application to the main workspace.
  If this application was previously a child and was manually detached, breaking its parent link, this method first
  attempts to re-join the prior parent's window before falling back to the main workspace.

  #### Parameters

  + `Optional`options: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.md) = {}

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

* close(  
  Â Â Â Â options?: Partial<[ApplicationClosingOptions](../interfaces/foundry.applications.types.ApplicationClosingOptions.md)>,  
  ): Promise<CompendiumDirectory>

  Close the Application, removing it from the DOM.

  #### Parameters

  + `Optional`options: Partial<[ApplicationClosingOptions](../interfaces/foundry.applications.types.ApplicationClosingOptions.md)> = {}

    Options which modify how the application is closed.

  #### Returns Promise<CompendiumDirectory>

  A Promise which resolves to the closed Application instance

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).close

### detachWindow

* detachWindow(options?: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.md)): Promise<CompendiumDirectory>

  Detach an application from the main workspace, and render it in a separate browser window.
  If this application is a registered child, detaching it breaks the parent link and gives it its own window.

  #### Parameters

  + `Optional`options: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.md) = {}

    Render options.

  #### Returns Promise<CompendiumDirectory>

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

* render(options: any, \_options: any): Promise<CompendiumDirectory>

  #### Parameters

  + options: any
  + \_options: any

  #### Returns Promise<CompendiumDirectory>

  #### Inherit Doc

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).render

### renderChild

* renderChild(  
  Â Â Â Â app: [ApplicationV2](foundry.applications.api.ApplicationV2.md)<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.md), [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.md)>,  
  Â Â Â Â options?: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.md),  
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
  + `Optional`options: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.md) = {}

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

### `Protected`\_attachFrameListeners

* \_attachFrameListeners(): void

  `Protected`

  Attach event listeners to the Application frame.

  #### Returns void

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).\_attachFrameListeners

### `Protected`\_canAttach

* \_canAttach(): boolean

  `Protected`

  Whether this Application is permitted to re-attach to the main workspace.
  Managed children (those with an active parent) cannot re-attach independently; their parent controls placement.

  #### Returns boolean

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).\_canAttach

### `Protected`\_canDragDrop

* \_canDragDrop(selector: string): boolean

  `Protected`

  Determine if the given user has permission to drop entries into the compendium directory.

  #### Parameters

  + selector: string

    The CSS selector of the dragged element.

  #### Returns boolean

### `Protected`\_canDragStart

* \_canDragStart(selector: string): boolean

  `Protected`

  Determine if the given user has permission to drag packs and folders in the directory.

  #### Parameters

  + selector: string

    The CSS selector of the target element.

  #### Returns boolean

### `Protected`\_canRender

* \_canRender(options: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.md)): false | void

  `Protected`

  Test whether this Application is allowed to be rendered.

  #### Parameters

  + options: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.md)

    Provided render options

  #### Returns false | void

  Return false to prevent rendering

  #### Throws

  An Error to display a warning message

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).\_canRender

### `Protected`\_configureRenderOptions

* \_configureRenderOptions(options: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.md)): void

  `Protected`

  Modify the provided options passed to a render request.

  #### Parameters

  + options: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.md)

    Options which configure application rendering behavior

  #### Returns void

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).\_configureRenderOptions

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

### `Protected`\_entryAlreadyExists

* \_entryAlreadyExists(pack: [CompendiumCollection](foundry.documents.collections.CompendiumCollection.md)<any>): boolean

  `Protected`

  Test if the given pack is already present in this directory.

  #### Parameters

  + pack: [CompendiumCollection](foundry.documents.collections.CompendiumCollection.md)<any>

    The compendium pack.

  #### Returns boolean

### `Protected`\_entryBelongsToFolder

* \_entryBelongsToFolder(  
  Â Â Â Â pack: [CompendiumCollection](foundry.documents.collections.CompendiumCollection.md)<any>,  
  Â Â Â Â folder: string | undefined,  
  ): boolean

  `Protected`

  Determine whether a given directory entry belongs to the given folder.

  #### Parameters

  + pack: [CompendiumCollection](foundry.documents.collections.CompendiumCollection.md)<any>

    The compendium pack.
  + folder: string | undefined

    The target folder ID.

  #### Returns boolean

### `Protected`\_getDroppedEntryFromData

* \_getDroppedEntryFromData(data: object): Promise<[CompendiumCollection](foundry.documents.collections.CompendiumCollection.md)<any>>

  `Protected`

  Get the pack instance from its dropped data.

  #### Parameters

  + data: object

    The drag data.

  #### Returns Promise<[CompendiumCollection](foundry.documents.collections.CompendiumCollection.md)<any>>

### `Protected`\_getEntryContextOptions

* \_getEntryContextOptions(): ContextMenuEntry[]

  `Protected`

  Get context menu entries for entries in this directory.

  #### Returns ContextMenuEntry[]

### `Protected`\_getEntryDragData

* \_getEntryDragData(collection: string): { collection: string; type: string }

  `Protected`

  Get drag data for a compendium in this directory.

  #### Parameters

  + collection: string

    The pack's collection ID.

  #### Returns { collection: string; type: string }

### `Protected`\_getFilterContextOptions

* \_getFilterContextOptions(): ContextMenuEntry[]

  `Protected`

  Get options for filtering the directory by document type.

  #### Returns ContextMenuEntry[]

### `Protected`\_getFolderContextOptions

* \_getFolderContextOptions(): ContextMenuEntry[]

  `Protected`

  Get context menu entries for folders in this directory.

  #### Returns ContextMenuEntry[]

### `Protected`\_getFolderDragData

* \_getFolderDragData(folderId: string): any

  `Protected`

  Get drag data for a folder in this directory.

  #### Parameters

  + folderId: string

    The folder ID.

  #### Returns any

### `Protected`\_getFrameButtons

* \_getFrameButtons(  
  Â Â Â Â options: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.md),  
  ): [ApplicationHeaderControlsEntry](../types/foundry.applications.types.ApplicationHeaderControlsEntry.md)[]

  `Protected`

  Return an array of header button config entries to render into the Application frame.
  Subclasses may override this method to add, remove, or replace frame header buttons.

  #### Parameters

  + options: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.md)

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

### `Protected`\_handleDroppedEntry

* \_handleDroppedEntry(target: HTMLElement, data: object): Promise<void>

  `Protected`

  Handle dropping a new pack into this directory.

  #### Parameters

  + target: HTMLElement

    The drop target element.
  + data: object

    The drop data.

  #### Returns Promise<void>

### `Protected`\_handleDroppedFolder

* \_handleDroppedFolder(target: HTMLElement, data: object): Promise<void>

  `Protected`

  Handle dropping a folder onto the directory.

  #### Parameters

  + target: HTMLElement

    The drop target element.
  + data: object

    The drop data.

  #### Returns Promise<void>

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
  Â Â Â Â options?: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.md),  
  ): Promise<void>

  `Protected`

  Insert the application HTML element into the DOM.
  Subclasses may override this method to customize how the application is inserted.

  #### Parameters

  + element: HTMLElement

    The element to insert
  + `Optional`options: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.md) = {}

    Render options.

  #### Returns Promise<void>

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).\_insertElement

### `Protected`\_matchSearchCompendiums

* \_matchSearchCompendiums(  
  Â Â Â Â query: RegExp,  
  Â Â Â Â packs: Set<string>,  
  Â Â Â Â folderIds: Set<string>,  
  Â Â Â Â autoExpandIds: Set<string>,  
  Â Â Â Â options?: object,  
  ): void

  `Protected`

  Identify entries in the collection which match a provided search query.

  #### Parameters

  + query: RegExp

    The search query.
  + packs: Set<string>

    The set of matched pack IDs.
  + folderIds: Set<string>

    The set of matched folder IDs.
  + autoExpandIds: Set<string>

    The set of folder IDs that should be auto-expanded.
  + `Optional`options: object = {}

    Additional options for subclass-specific behavior.

  #### Returns void

### `Protected`\_matchSearchDocuments

* \_matchSearchDocuments(  
  Â Â Â Â query: string,  
  Â Â Â Â documents: Set<[Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>>,  
  ): void

  `Protected`

  Identify Document matches from DocumentIndex lookups and add to the provided Set.

  #### Parameters

  + query: string

    The user's search query
  + documents: Set<[Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>>

    The Document Set

  #### Returns void

### `Protected`\_matchSearchFolders

* \_matchSearchFolders(  
  Â Â Â Â query: RegExp,  
  Â Â Â Â folderIds: Set<string>,  
  Â Â Â Â autoExpandIds: Set<string>,  
  Â Â Â Â options?: object,  
  ): void

  `Protected`

  Identify folders in the collection which match a provided search query.

  #### Parameters

  + query: RegExp

    The search query.
  + folderIds: Set<string>

    The set of matched folder IDs.
  + autoExpandIds: Set<string>

    The set of folder IDs that should be auto-expanded.
  + `Optional`options: object = {}

    Additional options for subclass-specific behavior.

  #### Returns void

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

### `Protected`\_onClickEntry

* \_onClickEntry(event: PointerEvent, target: HTMLElement): void

  `Protected`

  Handle clicking on a compendium entry.

  #### Parameters

  + event: PointerEvent

    The triggering event.
  + target: HTMLElement

    The action target.

  #### Returns void

### `Protected`\_onClickTab

* \_onClickTab(event: PointerEvent): void

  `Protected`

  Handle click events on a tab within the Application.

  #### Parameters

  + event: PointerEvent

  #### Returns void

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).\_onClickTab

### `Protected`\_onCreateEntry

* \_onCreateEntry(event: PointerEvent, target: HTMLElement): Promise<void>

  `Protected`

  Handle creating a new compendium pack.

  #### Parameters

  + event: PointerEvent

    The triggering event.
  + target: HTMLElement

    The action target.

  #### Returns Promise<void>

### `Protected`\_onCreateFolder

* \_onCreateFolder(event: PointerEvent, target: HTMLElement): void

  `Protected`

  Handle creating a new folder in this directory.

  #### Parameters

  + event: PointerEvent

    The triggering click event.
  + target: HTMLElement

    The action target element.

  #### Returns void

### `Protected`\_onDeactivate

* \_onDeactivate(): void

  `Protected`

  Actions performed when this tab is deactivated in the sidebar.

  #### Returns void

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).\_onDeactivate

### `Protected`\_onDeleteCompendium

* \_onDeleteCompendium(li: HTMLElement): Promise<void>

  `Protected`

  Handle deleting a compendium pack.

  #### Parameters

  + li: HTMLElement

    The compendium target element.

  #### Returns Promise<void>

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

### `Protected`\_onDragDocumentStart

* \_onDragDocumentStart(event: DragEvent): void

  `Protected`

  Handle dragging a Document search result.

  #### Parameters

  + event: DragEvent

  #### Returns void

### `Protected`\_onDragHighlight

* \_onDragHighlight(event: DragEvent): void

  `Protected`

  Highlight folders as drop targets when a drag event enters or exits their area.

  #### Parameters

  + event: DragEvent

    The in-progress drag event.

  #### Returns void

### `Protected`\_onDragOver

* \_onDragOver(event: DragEvent): void

  `Protected`

  Handle drag events over the directory.

  #### Parameters

  + event: DragEvent

  #### Returns void

### `Protected`\_onDuplicateCompendium

* \_onDuplicateCompendium(  
  Â Â Â Â li: HTMLElement,  
  ): Promise<void | [CompendiumCollection](foundry.documents.collections.CompendiumCollection.md)<any>>

  `Protected`

  Handle duplicating a compendium.

  #### Parameters

  + li: HTMLElement

    The compendium target element.

  #### Returns Promise<void | [CompendiumCollection](foundry.documents.collections.CompendiumCollection.md)<any>>

### `Protected`\_onMatchSearchDocuments

* \_onMatchSearchDocuments(  
  Â Â Â Â indexEntries: Set<WordTreeEntry>,  
  Â Â Â Â listEl: HTMLElement,  
  ): void

  `Protected`

  Render Document-search matches for display.

  #### Parameters

  + indexEntries: Set<WordTreeEntry>
  + listEl: HTMLElement

  #### Returns void

### `Protected`\_onMatchSearchEntry

* \_onMatchSearchEntry(  
  Â Â Â Â query: string,  
  Â Â Â Â packs: Set<string>,  
  Â Â Â Â element: HTMLElement,  
  Â Â Â Â options?: object,  
  ): void

  `Protected`

  Handle matching a given directory entry with the search filter.

  #### Parameters

  + query: string

    The input search string.
  + packs: Set<string>

    The matched pack IDs.
  + element: HTMLElement

    The candidate entry element.
  + `Optional`options: object = {}

    Additional options for subclass-specific behavior.

  #### Returns void

### `Protected`\_onPosition

* \_onPosition(position: [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.md)): void

  `Protected`

  Actions performed after the Application is re-positioned.

  #### Parameters

  + position: [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.md)

    The requested application position

  #### Returns void

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).\_onPosition

### `Protected`\_onSearchFilter

* \_onSearchFilter(  
  Â Â Â Â event: KeyboardEvent,  
  Â Â Â Â query: string,  
  Â Â Â Â rgx: RegExp,  
  Â Â Â Â html: HTMLElement,  
  ): void

  `Protected`

  Handle directory searching and filtering.

  #### Parameters

  + event: KeyboardEvent

    The keyboard input event.
  + query: string

    The input search string.
  + rgx: RegExp

    The regular expression query that should be matched against.
  + html: HTMLElement

    The container to filter entries from.

  #### Returns void

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

### `Protected`\_onToggleCompendiumFilterType

* \_onToggleCompendiumFilterType(  
  Â Â Â Â event: PointerEvent,  
  Â Â Â Â type?: string,  
  ): Promise<CompendiumDirectory>

  `Protected`

  Handle toggling a compendium type filter.

  #### Parameters

  + event: PointerEvent

    The triggering event.
  + `Optional`type: string

    The compendium type to filter by. If omitted, clear all filters.

  #### Returns Promise<CompendiumDirectory>

### `Protected`\_onToggleFolder

* \_onToggleFolder(event: PointerEvent, target: HTMLElement): void

  `Protected`

  Handle toggling a folder's expanded state.

  #### Parameters

  + event: PointerEvent

    The triggering click event.
  + target: HTMLElement

    The action target element.

  #### Returns void

### `Protected`\_onToggleLock

* \_onToggleLock(li: HTMLElement): Promise<boolean | void>

  `Protected`

  Handle toggling locked state on a compendium.

  #### Parameters

  + li: HTMLElement

    The compendium target element.

  #### Returns Promise<boolean | void>

### `Protected`\_postRender

* \_postRender(  
  Â Â Â Â context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.md),  
  Â Â Â Â options: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.md),  
  ): Promise<void>

  `Protected`

  Perform post-render finalization actions.

  #### Parameters

  + context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.md)

    Prepared context data.
  + options: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.md)

    Provided render options.

  #### Returns Promise<void>

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).\_postRender

### `Protected`\_preClose

* \_preClose(options: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.md)): Promise<void>

  `Protected`

  Actions performed before closing the Application.
  Pre-close steps are awaited by the close process.

  #### Parameters

  + options: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.md)

    Provided render options

  #### Returns Promise<void>

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).\_preClose

### `Protected`\_preFirstRender

* \_preFirstRender(  
  Â Â Â Â context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.md),  
  Â Â Â Â options: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.md),  
  ): Promise<void>

  `Protected`

  Actions performed before a first render of the Application.

  #### Parameters

  + context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.md)

    Prepared context data
  + options: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.md)

    Provided render options

  #### Returns Promise<void>

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).\_preFirstRender

### `Protected`\_prepareDirectoryContext

* \_prepareDirectoryContext(  
  Â Â Â Â context: ApplicationRenderContext,  
  Â Â Â Â options: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.md),  
  ): Promise<void>

  `Protected`

  Prepare render context for the directory part.

  #### Parameters

  + context: ApplicationRenderContext
  + options: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.md)

  #### Returns Promise<void>

### `Protected`\_prepareHeaderContext

* \_prepareHeaderContext(  
  Â Â Â Â context: ApplicationRenderContext,  
  Â Â Â Â options: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.md),  
  ): Promise<void>

  `Protected`

  Prepare render context for the header part.

  #### Parameters

  + context: ApplicationRenderContext
  + options: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.md)

  #### Returns Promise<void>

### `Protected`\_preparePackContext

* \_preparePackContext(  
  Â Â Â Â pack: [CompendiumCollection](foundry.documents.collections.CompendiumCollection.md)<any>,  
  ): [CompendiumPackDirectoryContext](../interfaces/foundry.CompendiumPackDirectoryContext.md)

  `Protected`

  Prepare render context for an individual compendium pack.

  #### Parameters

  + pack: [CompendiumCollection](foundry.documents.collections.CompendiumCollection.md)<any>

    The compendium pack.

  #### Returns [CompendiumPackDirectoryContext](../interfaces/foundry.CompendiumPackDirectoryContext.md)

### `Protected`\_prepareTabs

* \_prepareTabs(group: string): Record<string, [ApplicationTab](../interfaces/foundry.applications.types.ApplicationTab.md)>

  `Protected`

  Prepare application tab data for a single tab group.

  #### Parameters

  + group: string

    The ID of the tab group to prepare

  #### Returns Record<string, [ApplicationTab](../interfaces/foundry.applications.types.ApplicationTab.md)>

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).\_prepareTabs

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
  Â Â Â Â options: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.md),  
  ): Promise<void>

  `Protected`

  Actions performed before any render of the Application.
  Pre-render steps are awaited by the render process.

  #### Parameters

  + context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.md)

    Prepared context data
  + options: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.md)

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

* \_renderFrameButtons(options: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.md)): Promise<void>

  `Protected`

  Render buttons that are inserted directly into the frame header. Header controls should be preferred over frame
  buttons, which should be used sparingly.

  #### Parameters

  + options: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.md)

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
  Â Â Â Â options: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.md),  
  ): void

  `Protected`

  Replace the HTML of the application with the result provided by the rendering backend.
  An Application subclass should implement this method in order for the Application to be renderable.

  #### Parameters

  + result: any

    The result returned by the application rendering backend
  + content: HTMLElement

    The content element into which the rendered result must be inserted
  + options: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.md)

    Options which configure application rendering behavior

  #### Returns void

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).\_replaceHTML

### `Protected`\_sortRelative

* \_sortRelative(pack: [CompendiumCollection](foundry.documents.collections.CompendiumCollection.md)<any>, sortData: object): void

  `Protected`

  Handle sorting a compendium pack relative to others in the directory.

  #### Parameters

  + pack: [CompendiumCollection](foundry.documents.collections.CompendiumCollection.md)<any>

    The compendium pack.
  + sortData: object

    Sort data.

  #### Returns void

### `Protected`\_tearDown

* \_tearDown(options: [ApplicationClosingOptions](../interfaces/foundry.applications.types.ApplicationClosingOptions.md)): void

  `Protected`

  Remove elements from the DOM and trigger garbage collection as part of application closure.

  #### Parameters

  + options: [ApplicationClosingOptions](../interfaces/foundry.applications.types.ApplicationClosingOptions.md)

  #### Returns void

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).\_tearDown

### `Protected`\_updateFrame

* \_updateFrame(options: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.md)): void

  `Protected`

  When the Application is rendered, optionally update aspects of the window frame.

  #### Parameters

  + options: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.md)

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