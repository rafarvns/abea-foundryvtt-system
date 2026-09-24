---
title: "DocumentDirectory | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.applications.sidebar.DocumentDirectory.html"
category: "classes"
---

# Class DocumentDirectory<TDocument>

An abstract class for rendering a foldered directory of Documents.

#### Template: TDocument

#### Mixes

HandlebarsApplication

#### Type Parameters

* TDocument extends ClientDocument = ClientDocument

#### Hierarchy ([View Summary](../hierarchy.md#foundry.applications.sidebar.DocumentDirectory))

* [AbstractSidebarTab](foundry.applications.sidebar.AbstractSidebarTab.md)<  
  Â Â Â Â [DocumentDirectoryConfiguration](../types/foundry.DocumentDirectoryConfiguration.md),  
  Â Â Â Â [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.md),  
  Â Â Â Â this,  
  >
  + DocumentDirectory
    - [Compendium](foundry.applications.sidebar.apps.Compendium.md)
    - [ActorDirectory](foundry.applications.sidebar.tabs.ActorDirectory.md)
    - [CardsDirectory](foundry.applications.sidebar.tabs.CardsDirectory.md)
    - [ItemDirectory](foundry.applications.sidebar.tabs.ItemDirectory.md)
    - [JournalDirectory](foundry.applications.sidebar.tabs.JournalDirectory.md)
    - [MacroDirectory](foundry.applications.sidebar.tabs.MacroDirectory.md)
    - [PlaylistDirectory](foundry.applications.sidebar.tabs.PlaylistDirectory.md)
    - [RollTableDirectory](foundry.applications.sidebar.tabs.RollTableDirectory.md)
    - [SceneDirectory](foundry.applications.sidebar.tabs.SceneDirectory.md)

##### Index

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
[\_entryPartial](#_entrypartial)
[\_folderPartial](#_folderpartial)

### Accessors

[active](#active)
[children](#children)
[classList](#classlist)
[collection](#collection)
[documentClass](#documentclass)
[documentName](#documentname)
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
[\_canRender](#_canrender)
[\_configureRenderParts](#_configurerenderparts)
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
[collapseAll](#collapseall)
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
[\_canCreateEntry](#_cancreateentry)
[\_canCreateFolder](#_cancreatefolder)
[\_canDragDrop](#_candragdrop)
[\_canDragStart](#_candragstart)
[\_configureRenderOptions](#_configurerenderoptions)
[\_createContextMenu](#_createcontextmenu)
[\_createContextMenus](#_createcontextmenus)
[\_createDroppedEntry](#_createdroppedentry)
[\_createDroppedFolderContent](#_createdroppedfoldercontent)
[\_createDroppedFolderDocuments](#_createdroppedfolderdocuments)
[\_entryAlreadyExists](#_entryalreadyexists)
[\_entryBelongsToFolder](#_entrybelongstofolder)
[\_getDroppedEntryFromData](#_getdroppedentryfromdata)
[\_getEntryContextOptions](#_getentrycontextoptions)
[\_getEntryDragData](#_getentrydragdata)
[\_getFolderContextOptions](#_getfoldercontextoptions)
[\_getFolderDragData](#_getfolderdragdata)
[\_getFrameButtons](#_getframebuttons)
[\_getHeaderControls](#_getheadercontrols)
[\_getTabsConfig](#_gettabsconfig)
[\_handleDroppedEntry](#_handledroppedentry)
[\_handleDroppedFolder](#_handledroppedfolder)
[\_handleDroppedForeignFolder](#_handledroppedforeignfolder)
[\_headerControlButtons](#_headercontrolbuttons)
[\_headerControlContextEntries](#_headercontrolcontextentries)
[\_insertElement](#_insertelement)
[\_matchSearchEntries](#_matchsearchentries)
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
[\_onDetach](#_ondetach)
[\_onDragHighlight](#_ondraghighlight)
[\_onDragOver](#_ondragover)
[\_onMatchSearchEntry](#_onmatchsearchentry)
[\_onPosition](#_onposition)
[\_onSearchFilter](#_onsearchfilter)
[\_onSubmitForm](#_onsubmitform)
[\_onToggleFolder](#_ontogglefolder)
[\_organizeDroppedFoldersAndDocuments](#_organizedroppedfoldersanddocuments)
[\_postRender](#_postrender)
[\_preClose](#_preclose)
[\_preFirstRender](#_prefirstrender)
[\_prepareDirectoryContext](#_preparedirectorycontext)
[\_prepareDuplicateData](#_prepareduplicatedata)
[\_prepareFooterContext](#_preparefootercontext)
[\_prepareHeaderContext](#_prepareheadercontext)
[\_prepareTabs](#_preparetabs)
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
[\_getFolderContextOptions](#_getfoldercontextoptions-2)
[\_handleDroppedFolder](#_handledroppedfolder-2)
[inheritanceChain](#inheritancechain)
[instances](#instances)
[parseCSSDimension](#parsecssdimension)
[waitForImages](#waitforimages)

## Properties

### options

options: Readonly<[DocumentDirectoryConfiguration](../types/foundry.DocumentDirectoryConfiguration.md)>

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
Â Â Â Â Â Â Â Â activateEntry: (  
Â Â Â Â Â Â Â Â Â Â Â Â this: DocumentDirectory<ClientDocument>,  
Â Â Â Â Â Â Â Â Â Â Â Â ...args: any[],  
Â Â Â Â Â Â Â Â ) => Promise<void>;  
Â Â Â Â Â Â Â Â collapseFolders: (this: DocumentDirectory<ClientDocument>) => void;  
Â Â Â Â Â Â Â Â createEntry: (  
Â Â Â Â Â Â Â Â Â Â Â Â this: DocumentDirectory<ClientDocument>,  
Â Â Â Â Â Â Â Â Â Â Â Â ...args: any[],  
Â Â Â Â Â Â Â Â ) => any;  
Â Â Â Â Â Â Â Â createFolder: (  
Â Â Â Â Â Â Â Â Â Â Â Â this: DocumentDirectory<ClientDocument>,  
Â Â Â Â Â Â Â Â Â Â Â Â ...args: any[],  
Â Â Â Â Â Â Â Â ) => void;  
Â Â Â Â Â Â Â Â showIssues: (this: DocumentDirectory<ClientDocument>) => void;  
Â Â Â Â Â Â Â Â toggleFolder: (  
Â Â Â Â Â Â Â Â Â Â Â Â this: DocumentDirectory<ClientDocument>,  
Â Â Â Â Â Â Â Â Â Â Â Â ...args: any[],  
Â Â Â Â Â Â Â Â ) => any;  
Â Â Â Â Â Â Â Â toggleSearch: (this: DocumentDirectory<ClientDocument>) => void;  
Â Â Â Â Â Â Â Â toggleSort: (this: DocumentDirectory<ClientDocument>) => void;  
Â Â Â Â };  
Â Â Â Â classes: string[];  
Â Â Â Â collection: null;  
Â Â Â Â renderUpdateKeys: string[];  
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
Â Â Â Â directory: { scrollable: string[]; template: string };  
Â Â Â Â footer: { template: string };  
Â Â Â Â header: { template: string };  
} = ...

Overrides HandlebarsApplicationMixin(AbstractSidebarTab).PARTS

### `Static`RENDER\_STATES

RENDER\_STATES: Record<string, number> = ...

The sequence of rendering states that describe the Application life-cycle.

Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).RENDER\_STATES

### `Static` `Abstract`tabName

tabName: string

The base name of the sidebar tab.

### `Static`TABS

TABS: Record<string, [ApplicationTabsConfiguration](../interfaces/foundry.applications.types.ApplicationTabsConfiguration.md)> = {}

Configuration of application tabs, with an entry per tab group.

Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).TABS

### `Protected` `Static`\_entryPartial

\_entryPartial: string = "templates/sidebar/partials/document-partial.hbs"

The path to the template used to render a single entry within the directory.

### `Protected` `Static`\_folderPartial

\_folderPartial: string = "templates/sidebar/partials/folder-partial.hbs"

The path to the template used to render a single folder within the directory.

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

### collection

* get collection(): DirectoryCollection

  The Document collection that this directory represents.

  #### Returns DirectoryCollection

### documentClass

* get documentClass(): [Constructor](../types/foundry.types.Constructor.md)<[TDocument](#tdocument)>

  The implementation of the Document type that this directory represents.

  #### Returns [Constructor](../types/foundry.types.Constructor.md)<[TDocument](#tdocument)>

### documentName

* get documentName(): string

  The named Document type that this directory represents.

  #### Returns string

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

  #### Returns string

  Overrides HandlebarsApplicationMixin(AbstractSidebarTab).title

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

### \_canRender

* \_canRender(options: any): false | void

  #### Parameters

  + options: any

  #### Returns false | void

  #### Inherit Doc

  Overrides HandlebarsApplicationMixin(AbstractSidebarTab).\_canRender

### \_configureRenderParts

* \_configureRenderParts(options: any): any

  #### Parameters

  + options: any

  #### Returns any

  #### Inherit Doc

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

* \_initializeApplicationOptions(options: any): any

  #### Parameters

  + options: any

  #### Returns any

  #### Inherit Doc

  Overrides HandlebarsApplicationMixin(AbstractSidebarTab).\_initializeApplicationOptions

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

* \_prepareContext(  
  Â Â Â Â options: any,  
  ): Promise<  
  Â Â Â Â [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.md) & {  
  Â Â Â Â Â Â Â Â canCreateEntry: boolean;  
  Â Â Â Â Â Â Â Â canCreateFolder: boolean;  
  Â Â Â Â Â Â Â Â documentName: string;  
  Â Â Â Â Â Â Â Â folderIcon: string;  
  Â Â Â Â Â Â Â Â sidebarIcon: any;  
  Â Â Â Â },  
  >

  #### Parameters

  + options: any

  #### Returns Promise< Â Â Â Â [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.md) & { Â Â Â Â Â Â Â Â canCreateEntry: boolean; Â Â Â Â Â Â Â Â canCreateFolder: boolean; Â Â Â Â Â Â Â Â documentName: string; Â Â Â Â Â Â Â Â folderIcon: string; Â Â Â Â Â Â Â Â sidebarIcon: any; Â Â Â Â }, >

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
  ): Promise<DocumentDirectory<[TDocument](#tdocument)>>

  Close the Application, removing it from the DOM.

  #### Parameters

  + `Optional`options: Partial<[ApplicationClosingOptions](../interfaces/foundry.applications.types.ApplicationClosingOptions.md)> = {}

    Options which modify how the application is closed.

  #### Returns Promise<DocumentDirectory<[TDocument](#tdocument)>>

  A Promise which resolves to the closed Application instance

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).close

### collapseAll

* collapseAll(): void

  Collapse all open folders in this directory.

  #### Returns void

### detachWindow

* detachWindow(  
  Â Â Â Â options?: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.md),  
  ): Promise<DocumentDirectory<[TDocument](#tdocument)>>

  Detach an application from the main workspace, and render it in a separate browser window.
  If this application is a registered child, detaching it breaks the parent link and gives it its own window.

  #### Parameters

  + `Optional`options: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.md) = {}

    Render options.

  #### Returns Promise<DocumentDirectory<[TDocument](#tdocument)>>

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

* render(options: any, \_options: any): Promise<DocumentDirectory<[TDocument](#tdocument)>>

  #### Parameters

  + options: any
  + \_options: any

  #### Returns Promise<DocumentDirectory<[TDocument](#tdocument)>>

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

### `Protected`\_canCreateEntry

* \_canCreateEntry(): boolean

  `Protected`

  Determine if the current user has permission to create directory entries.

  #### Returns boolean

### `Protected`\_canCreateFolder

* \_canCreateFolder(): boolean

  `Protected`

  Determine if the current user has permission to create folders in this directory.

  #### Returns boolean

### `Protected`\_canDragDrop

* \_canDragDrop(selector: string): boolean

  `Protected`

  Determine if drop operations are permitted.

  #### Parameters

  + selector: string

    The candidate HTML selector for dragging

  #### Returns boolean

  Can the current user drag this selector?

### `Protected`\_canDragStart

* \_canDragStart(selector: string): boolean

  `Protected`

  Determine if drag operations are permitted.

  #### Parameters

  + selector: string

    The candidate HTML selector for dragging

  #### Returns boolean

  Can the current user drag this selector?

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

### `Protected`\_createContextMenus

* \_createContextMenus(): void

  `Protected`

  Register context menu entries and fire hooks.

  #### Returns void

### `Protected`\_createDroppedEntry

* \_createDroppedEntry(  
  Â Â Â Â entry: DirectoryMixinEntry,  
  Â Â Â Â updates?: object,  
  ): Promise<[TDocument](#tdocument)>

  `Protected`

  Create a new entry in this directory from one that was dropped on it.

  #### Parameters

  + entry: DirectoryMixinEntry

    The dropped entry.
  + `Optional`updates: object = {}

    Modifications to the creation data.

  #### Returns Promise<[TDocument](#tdocument)>

### `Protected`\_createDroppedFolderContent

* \_createDroppedFolderContent(  
  Â Â Â Â folder: [documents](../modules/foundry.documents.md).[Folder](foundry.documents.Folder.md),  
  Â Â Â Â targetFolder?: [documents](../modules/foundry.documents.md).[Folder](foundry.documents.Folder.md),  
  ): Promise<[documents](../modules/foundry.documents.md).[Folder](foundry.documents.Folder.md)[]>

  `Protected`

  Import a dropped folder and its children into this collection if they do not already exist.

  #### Parameters

  + folder: [documents](../modules/foundry.documents.md).[Folder](foundry.documents.Folder.md)

    The folder being dropped.
  + `Optional`targetFolder: [documents](../modules/foundry.documents.md).[Folder](foundry.documents.Folder.md)

    A folder to import into if not the directory root.

  #### Returns Promise<[documents](../modules/foundry.documents.md).[Folder](foundry.documents.Folder.md)[]>

### `Protected`\_createDroppedFolderDocuments

* \_createDroppedFolderDocuments(  
  Â Â Â Â folder: [documents](../modules/foundry.documents.md).[Folder](foundry.documents.Folder.md),  
  Â Â Â Â documents: object[] | [TDocument](#tdocument)[],  
  ): Promise<void>

  `Protected`

  Create a set of documents in a dropped folder.

  #### Parameters

  + folder: [documents](../modules/foundry.documents.md).[Folder](foundry.documents.Folder.md)

    The dropped folder.
  + documents: object[] | [TDocument](#tdocument)[]

    The documents to create, or their indices.

  #### Returns Promise<void>

### `Protected`\_entryAlreadyExists

* \_entryAlreadyExists(entry: ClientDocument): boolean

  `Protected`

  Test if the given entry is already present in this directory.

  #### Parameters

  + entry: ClientDocument

    The directory entry.

  #### Returns boolean

### `Protected`\_entryBelongsToFolder

* \_entryBelongsToFolder(entry: DirectoryMixinEntry, folder: string): boolean

  `Protected`

  Determine whether a given directory entry belongs to the given folder.

  #### Parameters

  + entry: DirectoryMixinEntry

    The entry.
  + folder: string

    The target folder ID.

  #### Returns boolean

### `Protected`\_getDroppedEntryFromData

* \_getDroppedEntryFromData(data: object): Promise<ClientDocument>

  `Protected`

  Get the entry instance from its dropped data.

  #### Parameters

  + data: object

    The drag data.

  #### Returns Promise<ClientDocument>

  #### Throws

  If the correct instance type could not be retrieved.

### `Protected`\_getEntryContextOptions

* \_getEntryContextOptions(): [ContextMenuEntry](../interfaces/foundry.ContextMenuEntry.md)[]

  `Protected`

  Get context menu entries for entries in this directory.

  #### Returns [ContextMenuEntry](../interfaces/foundry.ContextMenuEntry.md)[]

### `Protected`\_getEntryDragData

* \_getEntryDragData(entryId: string): any

  `Protected`

  Get drag data for an entry in this directory.

  #### Parameters

  + entryId: string

    The entry's ID.

  #### Returns any

### `Protected`\_getFolderContextOptions

* \_getFolderContextOptions(): [ContextMenuEntry](../interfaces/foundry.ContextMenuEntry.md)[]

  `Protected`

  Get context menu entries for folders in this directory.

  #### Returns [ContextMenuEntry](../interfaces/foundry.ContextMenuEntry.md)[]

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

  Handle dropping a new entry into this directory.

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

### `Protected`\_handleDroppedForeignFolder

* \_handleDroppedForeignFolder(  
  Â Â Â Â folder: [documents](../modules/foundry.documents.md).[Folder](foundry.documents.Folder.md),  
  Â Â Â Â closestFolderId: string,  
  Â Â Â Â sortData: object,  
  ): Promise<{ folder: [documents](../modules/foundry.documents.md).[Folder](foundry.documents.Folder.md); sortNeeded: boolean } | null>

  `Protected`

  Handle importing a new folder's into the directory.

  #### Parameters

  + folder: [documents](../modules/foundry.documents.md).[Folder](foundry.documents.Folder.md)

    The dropped folder.
  + closestFolderId: string

    The ID of the closest folder to the drop target.
  + sortData: object

    Sort data for the folder.

  #### Returns Promise<{ folder: [documents](../modules/foundry.documents.md).[Folder](foundry.documents.Folder.md); sortNeeded: boolean } | null>

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

### `Protected`\_matchSearchEntries

* \_matchSearchEntries(  
  Â Â Â Â query: RegExp,  
  Â Â Â Â entryIds: Set<string>,  
  Â Â Â Â folderIds: Set<string>,  
  Â Â Â Â autoExpandIds: Set<string>,  
  Â Â Â Â options?: object,  
  ): void

  `Protected`

  Identify entries in the collection which match a provided search query.

  #### Parameters

  + query: RegExp

    The search query.
  + entryIds: Set<string>

    The set of matched entry IDs.
  + folderIds: Set<string>

    The set of matched folder IDs.
  + autoExpandIds: Set<string>

    The set of folder IDs that should be auto-expanded.
  + `Optional`options: object = {}

    Additional options for subclass-specific behavior.

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

* \_onClickEntry(  
  Â Â Â Â event: PointerEvent,  
  Â Â Â Â target: HTMLElement,  
  Â Â Â Â options?: { \_skipDeprecation?: boolean },  
  ): Promise<void>

  `Protected`

  Handle activating a directory entry.

  #### Parameters

  + event: PointerEvent

    The triggering click event.
  + target: HTMLElement

    The action target element.
  + `Optional`options: { \_skipDeprecation?: boolean } = {}
    - ##### `Optional`\_skipDeprecation?: boolean

      Internal use only.

  #### Returns Promise<void>

### `Protected`\_onClickTab

* \_onClickTab(event: PointerEvent): void

  `Protected`

  Handle click events on a tab within the Application.

  #### Parameters

  + event: PointerEvent

  #### Returns void

  Inherited from HandlebarsApplicationMixin(AbstractSidebarTab).\_onClickTab

### `Protected`\_onCreateEntry

* \_onCreateEntry(event: PointerEvent, target: HTMLElement): any

  `Protected`

  Handle creating a new entry in this directory.

  #### Parameters

  + event: PointerEvent

    The triggering click event.
  + target: HTMLElement

    The action target element.

  #### Returns any

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

### `Protected`\_onMatchSearchEntry

* \_onMatchSearchEntry(  
  Â Â Â Â query: string,  
  Â Â Â Â entryIds: Set<string>,  
  Â Â Â Â element: HTMLElement,  
  Â Â Â Â options?: object,  
  ): void

  `Protected`

  Handle matching a given directory entry with the search filter.

  #### Parameters

  + query: string

    The input search string.
  + entryIds: Set<string>

    The matched directory entry IDs.
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

### `Protected`\_onToggleFolder

* \_onToggleFolder(  
  Â Â Â Â event: PointerEvent,  
  Â Â Â Â target: HTMLElement,  
  Â Â Â Â options?: { \_skipDeprecation?: boolean },  
  ): any

  `Protected`

  Handle toggling a folder's expanded state.

  #### Parameters

  + event: PointerEvent

    The triggering click event.
  + target: HTMLElement

    The action target element.
  + `Optional`options: { \_skipDeprecation?: boolean } = {}
    - ##### `Optional`\_skipDeprecation?: boolean

      Internal use only.

  #### Returns any

### `Protected`\_organizeDroppedFoldersAndDocuments

* \_organizeDroppedFoldersAndDocuments(  
  Â Â Â Â folder: [documents](../modules/foundry.documents.md).[Folder](foundry.documents.Folder.md),  
  Â Â Â Â targetFolder?: [documents](../modules/foundry.documents.md).[Folder](foundry.documents.Folder.md),  
  ): Promise<  
  Â Â Â Â {  
  Â Â Â Â Â Â Â Â documentsToCreate: object[]  
  Â Â Â Â Â Â Â Â | [TDocument](#tdocument)[];  
  Â Â Â Â Â Â Â Â foldersToCreate: [documents](../modules/foundry.documents.md).[Folder](foundry.documents.Folder.md)[];  
  Â Â Â Â },  
  >

  `Protected`

  Organize a dropped folder and its children into a list of folders and documents to create.

  #### Parameters

  + folder: [documents](../modules/foundry.documents.md).[Folder](foundry.documents.Folder.md)

    The dropped folder.
  + `Optional`targetFolder: [documents](../modules/foundry.documents.md).[Folder](foundry.documents.Folder.md)

    A folder to import into if not the directory root.

  #### Returns Promise< Â Â Â Â { Â Â Â Â Â Â Â Â documentsToCreate: object[] Â Â Â Â Â Â Â Â | [TDocument](#tdocument)[]; Â Â Â Â Â Â Â Â foldersToCreate: [documents](../modules/foundry.documents.md).[Folder](foundry.documents.Folder.md)[]; Â Â Â Â }, >

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
  Â Â Â Â context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.md),  
  Â Â Â Â options: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.md),  
  ): Promise<void>

  `Protected`

  Prepare render context for the directory part.

  #### Parameters

  + context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.md)
  + options: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.md)

  #### Returns Promise<void>

### `Protected`\_prepareDuplicateData

* \_prepareDuplicateData(document: Document): object

  `Protected`

  Prepares the data for a duplicated Document.

  #### Parameters

  + document: Document

    The Document that is duplicated

  #### Returns object

  The partial data of the duplicate that overrides the original data

### `Protected`\_prepareFooterContext

* \_prepareFooterContext(  
  Â Â Â Â context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.md),  
  Â Â Â Â options: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.md),  
  ): Promise<void>

  `Protected`

  Prepare render context for the footer part.

  #### Parameters

  + context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.md)
  + options: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.md)

  #### Returns Promise<void>

### `Protected`\_prepareHeaderContext

* \_prepareHeaderContext(  
  Â Â Â Â context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.md),  
  Â Â Â Â options: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.md),  
  ): Promise<void>

  `Protected`

  Prepare render context for the header part.

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

### `Static`\_getFolderContextOptions

* \_getFolderContextOptions(): [ContextMenuEntry](../interfaces/foundry.ContextMenuEntry.md)[]

  `Internal`

  Get context menu entries for folders in a directory.

  #### Returns [ContextMenuEntry](../interfaces/foundry.ContextMenuEntry.md)[]

### `Static`\_handleDroppedFolder

* \_handleDroppedFolder(  
  Â Â Â Â target: HTMLElement,  
  Â Â Â Â data: object,  
  Â Â Â Â config: {  
  Â Â Â Â Â Â Â Â folders: [documents](../modules/foundry.documents.md).[Folder](foundry.documents.Folder.md)[];  
  Â Â Â Â Â Â Â Â label: string;  
  Â Â Â Â Â Â Â Â maxFolderDepth: number;  
  Â Â Â Â Â Â Â Â type: string;  
  Â Â Â Â },  
  ): Promise<void | { folder: [documents](../modules/foundry.documents.md).[Folder](foundry.documents.Folder.md); sortData: object }>

  `Internal`

  Helper method to handle dropping a folder onto the directory.

  #### Parameters

  + target: HTMLElement

    The drop target element.
  + data: object

    The drop data.
  + config: {  
    Â Â Â Â folders: [documents](../modules/foundry.documents.md).[Folder](foundry.documents.Folder.md)[];  
    Â Â Â Â label: string;  
    Â Â Â Â maxFolderDepth: number;  
    Â Â Â Â type: string;  
    }
    - ##### folders: [documents](../modules/foundry.documents.md).[Folder](foundry.documents.Folder.md)[]

      The sibling folders.
    - ##### label: string

      The label for entries in the directory.
    - ##### maxFolderDepth: number

      The maximum folder depth in this directory.
    - ##### type: string

      The type of entries in the directory.

  #### Returns Promise<void | { folder: [documents](../modules/foundry.documents.md).[Folder](foundry.documents.Folder.md); sortData: object }>

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