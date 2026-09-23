---
title: "RollTableDirectory | Foundry Virtual Tabletop - API Documentation - Version 13"
url: "https://foundryvtt.com/api/classes/foundry.applications.sidebar.tabs.RollTableDirectory.html"
category: "classes"
---

* [Foundry Virtual Tabletop - API Documentation - Version 13](../modules.html)
* [foundry](../modules/foundry.html)
* [applications](../modules/foundry.applications.html)
* [sidebar](../modules/foundry.applications.sidebar.html)
* [tabs](../modules/foundry.applications.sidebar.tabs.html)
* [RollTableDirectory](foundry.applications.sidebar.tabs.RollTableDirectory.html)

# Class RollTableDirectory

The World RollTable directory listing.

#### Hierarchy ([View Summary](../hierarchy.html#foundry.applications.sidebar.tabs.RollTableDirectory))

* [DocumentDirectory](foundry.applications.sidebar.DocumentDirectory.html)
  + RollTableDirectory

##### Index

### Properties

[options](foundry.applications.sidebar.tabs.RollTableDirectory.html#options)
[position](foundry.applications.sidebar.tabs.RollTableDirectory.html#position)
[tabGroups](foundry.applications.sidebar.tabs.RollTableDirectory.html#tabgroups)
[\_appId](foundry.applications.sidebar.tabs.RollTableDirectory.html#_appid)
[\_maxZ](foundry.applications.sidebar.tabs.RollTableDirectory.html#_maxz)
[BASE\_APPLICATION](foundry.applications.sidebar.tabs.RollTableDirectory.html#base_application)
[DEFAULT\_OPTIONS](foundry.applications.sidebar.tabs.RollTableDirectory.html#default_options)
[emittedEvents](foundry.applications.sidebar.tabs.RollTableDirectory.html#emittedevents)
[PARTS](foundry.applications.sidebar.tabs.RollTableDirectory.html#parts)
[RENDER\_STATES](foundry.applications.sidebar.tabs.RollTableDirectory.html#render_states)
[tabName](foundry.applications.sidebar.tabs.RollTableDirectory.html#tabname)
[TABS](foundry.applications.sidebar.tabs.RollTableDirectory.html#tabs)
[\_entryPartial](foundry.applications.sidebar.tabs.RollTableDirectory.html#_entrypartial)
[\_folderPartial](foundry.applications.sidebar.tabs.RollTableDirectory.html#_folderpartial)

### Accessors

[active](foundry.applications.sidebar.tabs.RollTableDirectory.html#active)
[classList](foundry.applications.sidebar.tabs.RollTableDirectory.html#classlist)
[collection](foundry.applications.sidebar.tabs.RollTableDirectory.html#collection)
[documentClass](foundry.applications.sidebar.tabs.RollTableDirectory.html#documentclass)
[documentName](foundry.applications.sidebar.tabs.RollTableDirectory.html#documentname)
[element](foundry.applications.sidebar.tabs.RollTableDirectory.html#element)
[form](foundry.applications.sidebar.tabs.RollTableDirectory.html#form)
[hasFrame](foundry.applications.sidebar.tabs.RollTableDirectory.html#hasframe)
[id](foundry.applications.sidebar.tabs.RollTableDirectory.html#id)
[isPopout](foundry.applications.sidebar.tabs.RollTableDirectory.html#ispopout)
[minimized](foundry.applications.sidebar.tabs.RollTableDirectory.html#minimized)
[popout](foundry.applications.sidebar.tabs.RollTableDirectory.html#popout)
[rendered](foundry.applications.sidebar.tabs.RollTableDirectory.html#rendered)
[state](foundry.applications.sidebar.tabs.RollTableDirectory.html#state)
[tabName](foundry.applications.sidebar.tabs.RollTableDirectory.html#tabname-1)
[title](foundry.applications.sidebar.tabs.RollTableDirectory.html#title)
[window](foundry.applications.sidebar.tabs.RollTableDirectory.html#window)

### Methods

[\_awaitTransition](foundry.applications.sidebar.tabs.RollTableDirectory.html#_awaittransition)
[\_canRender](foundry.applications.sidebar.tabs.RollTableDirectory.html#_canrender)
[\_configureRenderParts](foundry.applications.sidebar.tabs.RollTableDirectory.html#_configurerenderparts)
[\_doEvent](foundry.applications.sidebar.tabs.RollTableDirectory.html#_doevent)
[\_getEntryContextOptions](foundry.applications.sidebar.tabs.RollTableDirectory.html#_getentrycontextoptions)
[\_initializeApplicationOptions](foundry.applications.sidebar.tabs.RollTableDirectory.html#_initializeapplicationoptions)
[\_onClose](foundry.applications.sidebar.tabs.RollTableDirectory.html#_onclose)
[\_onDragStart](foundry.applications.sidebar.tabs.RollTableDirectory.html#_ondragstart)
[\_onDrop](foundry.applications.sidebar.tabs.RollTableDirectory.html#_ondrop)
[\_onFirstRender](foundry.applications.sidebar.tabs.RollTableDirectory.html#_onfirstrender)
[\_onRender](foundry.applications.sidebar.tabs.RollTableDirectory.html#_onrender)
[\_prepareContext](foundry.applications.sidebar.tabs.RollTableDirectory.html#_preparecontext)
[\_preparePartContext](foundry.applications.sidebar.tabs.RollTableDirectory.html#_preparepartcontext)
[\_preSyncPartState](foundry.applications.sidebar.tabs.RollTableDirectory.html#_presyncpartstate)
[\_renderFrame](foundry.applications.sidebar.tabs.RollTableDirectory.html#_renderframe)
[\_renderHTML](foundry.applications.sidebar.tabs.RollTableDirectory.html#_renderhtml)
[\_syncPartState](foundry.applications.sidebar.tabs.RollTableDirectory.html#_syncpartstate)
[activate](foundry.applications.sidebar.tabs.RollTableDirectory.html#activate)
[addEventListener](foundry.applications.sidebar.tabs.RollTableDirectory.html#addeventlistener)
[bringToFront](foundry.applications.sidebar.tabs.RollTableDirectory.html#bringtofront)
[changeTab](foundry.applications.sidebar.tabs.RollTableDirectory.html#changetab)
[close](foundry.applications.sidebar.tabs.RollTableDirectory.html#close)
[collapseAll](foundry.applications.sidebar.tabs.RollTableDirectory.html#collapseall)
[dispatchEvent](foundry.applications.sidebar.tabs.RollTableDirectory.html#dispatchevent)
[maximize](foundry.applications.sidebar.tabs.RollTableDirectory.html#maximize)
[minimize](foundry.applications.sidebar.tabs.RollTableDirectory.html#minimize)
[removeEventListener](foundry.applications.sidebar.tabs.RollTableDirectory.html#removeeventlistener)
[render](foundry.applications.sidebar.tabs.RollTableDirectory.html#render)
[renderPopout](foundry.applications.sidebar.tabs.RollTableDirectory.html#renderpopout)
[setPosition](foundry.applications.sidebar.tabs.RollTableDirectory.html#setposition)
[submit](foundry.applications.sidebar.tabs.RollTableDirectory.html#submit)
[toggleControls](foundry.applications.sidebar.tabs.RollTableDirectory.html#togglecontrols)
[\_attachFrameListeners](foundry.applications.sidebar.tabs.RollTableDirectory.html#_attachframelisteners)
[\_canCreateEntry](foundry.applications.sidebar.tabs.RollTableDirectory.html#_cancreateentry)
[\_canCreateFolder](foundry.applications.sidebar.tabs.RollTableDirectory.html#_cancreatefolder)
[\_canDragDrop](foundry.applications.sidebar.tabs.RollTableDirectory.html#_candragdrop)
[\_canDragStart](foundry.applications.sidebar.tabs.RollTableDirectory.html#_candragstart)
[\_configureRenderOptions](foundry.applications.sidebar.tabs.RollTableDirectory.html#_configurerenderoptions)
[\_createContextMenu](foundry.applications.sidebar.tabs.RollTableDirectory.html#_createcontextmenu)
[\_createContextMenus](foundry.applications.sidebar.tabs.RollTableDirectory.html#_createcontextmenus)
[\_createDroppedEntry](foundry.applications.sidebar.tabs.RollTableDirectory.html#_createdroppedentry)
[\_createDroppedFolderContent](foundry.applications.sidebar.tabs.RollTableDirectory.html#_createdroppedfoldercontent)
[\_createDroppedFolderDocuments](foundry.applications.sidebar.tabs.RollTableDirectory.html#_createdroppedfolderdocuments)
[\_entryAlreadyExists](foundry.applications.sidebar.tabs.RollTableDirectory.html#_entryalreadyexists)
[\_entryBelongsToFolder](foundry.applications.sidebar.tabs.RollTableDirectory.html#_entrybelongstofolder)
[\_getDroppedEntryFromData](foundry.applications.sidebar.tabs.RollTableDirectory.html#_getdroppedentryfromdata)
[\_getEntryDragData](foundry.applications.sidebar.tabs.RollTableDirectory.html#_getentrydragdata)
[\_getFolderContextOptions](foundry.applications.sidebar.tabs.RollTableDirectory.html#_getfoldercontextoptions)
[\_getFolderDragData](foundry.applications.sidebar.tabs.RollTableDirectory.html#_getfolderdragdata)
[\_getHeaderControls](foundry.applications.sidebar.tabs.RollTableDirectory.html#_getheadercontrols)
[\_getTabsConfig](foundry.applications.sidebar.tabs.RollTableDirectory.html#_gettabsconfig)
[\_handleDroppedEntry](foundry.applications.sidebar.tabs.RollTableDirectory.html#_handledroppedentry)
[\_handleDroppedFolder](foundry.applications.sidebar.tabs.RollTableDirectory.html#_handledroppedfolder)
[\_handleDroppedForeignFolder](foundry.applications.sidebar.tabs.RollTableDirectory.html#_handledroppedforeignfolder)
[\_headerControlButtons](foundry.applications.sidebar.tabs.RollTableDirectory.html#_headercontrolbuttons)
[\_insertElement](foundry.applications.sidebar.tabs.RollTableDirectory.html#_insertelement)
[\_matchSearchEntries](foundry.applications.sidebar.tabs.RollTableDirectory.html#_matchsearchentries)
[\_matchSearchFolders](foundry.applications.sidebar.tabs.RollTableDirectory.html#_matchsearchfolders)
[\_onActivate](foundry.applications.sidebar.tabs.RollTableDirectory.html#_onactivate)
[\_onChangeForm](foundry.applications.sidebar.tabs.RollTableDirectory.html#_onchangeform)
[\_onClickAction](foundry.applications.sidebar.tabs.RollTableDirectory.html#_onclickaction)
[\_onClickEntry](foundry.applications.sidebar.tabs.RollTableDirectory.html#_onclickentry)
[\_onClickTab](foundry.applications.sidebar.tabs.RollTableDirectory.html#_onclicktab)
[\_onCreateEntry](foundry.applications.sidebar.tabs.RollTableDirectory.html#_oncreateentry)
[\_onCreateFolder](foundry.applications.sidebar.tabs.RollTableDirectory.html#_oncreatefolder)
[\_onDeactivate](foundry.applications.sidebar.tabs.RollTableDirectory.html#_ondeactivate)
[\_onDragHighlight](foundry.applications.sidebar.tabs.RollTableDirectory.html#_ondraghighlight)
[\_onDragOver](foundry.applications.sidebar.tabs.RollTableDirectory.html#_ondragover)
[\_onMatchSearchEntry](foundry.applications.sidebar.tabs.RollTableDirectory.html#_onmatchsearchentry)
[\_onPosition](foundry.applications.sidebar.tabs.RollTableDirectory.html#_onposition)
[\_onSearchFilter](foundry.applications.sidebar.tabs.RollTableDirectory.html#_onsearchfilter)
[\_onSubmitForm](foundry.applications.sidebar.tabs.RollTableDirectory.html#_onsubmitform)
[\_onToggleFolder](foundry.applications.sidebar.tabs.RollTableDirectory.html#_ontogglefolder)
[\_organizeDroppedFoldersAndDocuments](foundry.applications.sidebar.tabs.RollTableDirectory.html#_organizedroppedfoldersanddocuments)
[\_postRender](foundry.applications.sidebar.tabs.RollTableDirectory.html#_postrender)
[\_preClose](foundry.applications.sidebar.tabs.RollTableDirectory.html#_preclose)
[\_preFirstRender](foundry.applications.sidebar.tabs.RollTableDirectory.html#_prefirstrender)
[\_prepareDirectoryContext](foundry.applications.sidebar.tabs.RollTableDirectory.html#_preparedirectorycontext)
[\_prepareDuplicateData](foundry.applications.sidebar.tabs.RollTableDirectory.html#_prepareduplicatedata)
[\_prepareFooterContext](foundry.applications.sidebar.tabs.RollTableDirectory.html#_preparefootercontext)
[\_prepareHeaderContext](foundry.applications.sidebar.tabs.RollTableDirectory.html#_prepareheadercontext)
[\_prepareTabs](foundry.applications.sidebar.tabs.RollTableDirectory.html#_preparetabs)
[\_prePosition](foundry.applications.sidebar.tabs.RollTableDirectory.html#_preposition)
[\_preRender](foundry.applications.sidebar.tabs.RollTableDirectory.html#_prerender)
[\_removeElement](foundry.applications.sidebar.tabs.RollTableDirectory.html#_removeelement)
[\_renderHeaderControl](foundry.applications.sidebar.tabs.RollTableDirectory.html#_renderheadercontrol)
[\_replaceHTML](foundry.applications.sidebar.tabs.RollTableDirectory.html#_replacehtml)
[\_tearDown](foundry.applications.sidebar.tabs.RollTableDirectory.html#_teardown)
[\_updateFrame](foundry.applications.sidebar.tabs.RollTableDirectory.html#_updateframe)
[\_updatePosition](foundry.applications.sidebar.tabs.RollTableDirectory.html#_updateposition)
[\_getFolderContextOptions](foundry.applications.sidebar.tabs.RollTableDirectory.html#_getfoldercontextoptions-2)
[\_handleDroppedFolder](foundry.applications.sidebar.tabs.RollTableDirectory.html#_handledroppedfolder-2)
[inheritanceChain](foundry.applications.sidebar.tabs.RollTableDirectory.html#inheritancechain)
[parseCSSDimension](foundry.applications.sidebar.tabs.RollTableDirectory.html#parsecssdimension)
[waitForImages](foundry.applications.sidebar.tabs.RollTableDirectory.html#waitforimages)

## Properties

### options

options: Readonly<[DocumentDirectoryConfiguration](../types/foundry.DocumentDirectoryConfiguration.html)>

Application instance configuration options.

Inherited from DocumentDirectory.options

### position

position: [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.html) = ...

The current position of the application with respect to the window.document.body.

Inherited from DocumentDirectory.position

### tabGroups

tabGroups: Record<string, null | string> = ...

If this Application uses tabbed navigation groups, this mapping is updated whenever the changeTab method is called.
Reports the active tab for each group, with a value of `null` indicating no tab is active.
Subclasses may override this property to define default tabs for each group.

Inherited from DocumentDirectory.tabGroups

### `Static` `Internal`\_appId

\_appId: number = 0

An incrementing integer Application ID.

Inherited from DocumentDirectory.\_appId

### `Static` `Internal`\_maxZ

\_maxZ: number = ...

The current maximum z-index of any displayed Application.

Inherited from DocumentDirectory.\_maxZ

### `Static`BASE\_APPLICATION

BASE\_APPLICATION: typeof [ApplicationV2](foundry.applications.api.ApplicationV2.html) = ApplicationV2

Designates which upstream Application class in this class' inheritance chain is the base application.
Any DEFAULT\_OPTIONS of super-classes further upstream of the BASE\_APPLICATION are ignored.
Hook events for super-classes further upstream of the BASE\_APPLICATION are not dispatched.

Inherited from DocumentDirectory.BASE\_APPLICATION

### `Static`DEFAULT\_OPTIONS

DEFAULT\_OPTIONS: { collection: string } = ...

Overrides DocumentDirectory.DEFAULT\_OPTIONS

### `Static`emittedEvents

emittedEvents: readonly [  
Â Â Â Â "render",  
Â Â Â Â "close",  
Â Â Â Â "position",  
Â Â Â Â "activate",  
Â Â Â Â "deactivate",  
] = ...

Inherited from DocumentDirectory.emittedEvents

### `Static`PARTS

PARTS: {  
Â Â Â Â directory: { scrollable: string[]; template: string };  
Â Â Â Â footer: { template: string };  
Â Â Â Â header: { template: string };  
} = ...

Inherited from DocumentDirectory.PARTS

### `Static`RENDER\_STATES

RENDER\_STATES: Record<string, number> = ...

The sequence of rendering states that describe the Application life-cycle.

Inherited from DocumentDirectory.RENDER\_STATES

### `Static`tabName

tabName: string = "tables"

Overrides DocumentDirectory.tabName

### `Static`TABS

TABS: Record<string, [ApplicationTabsConfiguration](../interfaces/foundry.applications.types.ApplicationTabsConfiguration.html)> = {}

Configuration of application tabs, with an entry per tab group.

Inherited from DocumentDirectory.TABS

### `Protected` `Static`\_entryPartial

\_entryPartial: string = "templates/sidebar/partials/document-partial.hbs"

The path to the template used to render a single entry within the directory.

Inherited from DocumentDirectory.\_entryPartial

### `Protected` `Static`\_folderPartial

\_folderPartial: string = "templates/sidebar/partials/folder-partial.hbs"

The path to the template used to render a single folder within the directory.

Inherited from DocumentDirectory.\_folderPartial

## Accessors

### active

* get active(): boolean

  Whether this tab is currently active in the sidebar.

  #### Returns boolean

  Inherited from DocumentDirectory.active

### classList

* get classList(): DOMTokenList

  The CSS class list of this Application instance

  #### Returns DOMTokenList

  Inherited from DocumentDirectory.classList

### collection

* get collection(): DirectoryCollection

  The Document collection that this directory represents.

  #### Returns DirectoryCollection

  Inherited from DocumentDirectory.collection

### documentClass

* get documentClass(): [Constructor](../types/foundry.types.Constructor.html)<[TDocument](foundry.applications.sidebar.DocumentDirectory.html#tdocument)>

  The implementation of the Document type that this directory represents.

  #### Returns [Constructor](../types/foundry.types.Constructor.html)<[TDocument](foundry.applications.sidebar.DocumentDirectory.html#tdocument)>

  Inherited from DocumentDirectory.documentClass

### documentName

* get documentName(): string

  The named Document type that this directory represents.

  #### Returns string

  Inherited from DocumentDirectory.documentName

### element

* get element(): HTMLElement

  The HTMLElement which renders this Application into the DOM.

  #### Returns HTMLElement

  Inherited from DocumentDirectory.element

### form

* get form(): null | HTMLFormElement

  Does this Application have a top-level form element?

  #### Returns null | HTMLFormElement

  Inherited from DocumentDirectory.form

### hasFrame

* get hasFrame(): boolean

  Does this Application instance render within an outer window frame?

  #### Returns boolean

  Inherited from DocumentDirectory.hasFrame

### id

* get id(): string

  The HTML element ID of this Application instance.
  This provides a readonly view into the internal ID used by this application.
  This getter should not be overridden by subclasses, which should instead configure the ID in `DEFAULT_OPTIONS` or
  by defining a `uniqueId` during `_initializeApplicationOptions`.

  #### Returns string

  Inherited from DocumentDirectory.id

### isPopout

* get isPopout(): boolean

  Whether this is the popped-out tab or the in-sidebar one.

  #### Returns boolean

  Inherited from DocumentDirectory.isPopout

### minimized

* get minimized(): boolean

  Is this Application instance currently minimized?

  #### Returns boolean

  Inherited from DocumentDirectory.minimized

### popout

* get popout(): | void  
  | [AbstractSidebarTab](foundry.applications.sidebar.AbstractSidebarTab.html)<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.html), [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html)>

  A reference to the popped-out version of this tab, if one exists.

  #### Returns void | [AbstractSidebarTab](foundry.applications.sidebar.AbstractSidebarTab.html)<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.html), [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html)>

  Inherited from DocumentDirectory.popout

### rendered

* get rendered(): boolean

  Is this Application instance currently rendered?

  #### Returns boolean

  Inherited from DocumentDirectory.rendered

### state

* get state(): number

  The current render state of the Application.

  #### Returns number

  Inherited from DocumentDirectory.state

### tabName

* get tabName(): string

  The base name of the sidebar tab.

  #### Returns string

  Inherited from DocumentDirectory.tabName

### title

* get title(): string

  #### Returns string

  Inherited from DocumentDirectory.title

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

  Inherited from DocumentDirectory.window

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

  Inherited from DocumentDirectory.\_awaitTransition

### \_canRender

* \_canRender(options: any): false | void

  #### Parameters

  + options: any

  #### Returns false | void

  #### Inherit Doc

  Inherited from DocumentDirectory.\_canRender

### \_configureRenderParts

* \_configureRenderParts(options: any): any

  #### Parameters

  + options: any

  #### Returns any

  #### Inherit Doc

  Inherited from DocumentDirectory.\_configureRenderParts

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

  Inherited from DocumentDirectory.\_doEvent

### \_getEntryContextOptions

* \_getEntryContextOptions(): (  
  Â Â Â Â | [ContextMenuEntry](../interfaces/foundry.ContextMenuEntry.html)  
  Â Â Â Â | { callback: (li: any) => void; icon: string; name: string }  
  )[]

  #### Returns ([ContextMenuEntry](../interfaces/foundry.ContextMenuEntry.html) | { callback: (li: any) => void; icon: string; name: string })[]

  #### Inherit Doc

  Overrides DocumentDirectory.\_getEntryContextOptions

### \_initializeApplicationOptions

* \_initializeApplicationOptions(options: any): any

  #### Parameters

  + options: any

  #### Returns any

  #### Inherit Doc

  Inherited from DocumentDirectory.\_initializeApplicationOptions

### \_onClose

* \_onClose(options: any): void

  #### Parameters

  + options: any

  #### Returns void

  #### Inherit Doc

  Inherited from DocumentDirectory.\_onClose

### \_onDragStart

* \_onDragStart(event: any): void

  #### Parameters

  + event: any

  #### Returns void

  Inherited from DocumentDirectory.\_onDragStart

### \_onDrop

* \_onDrop(event: any): undefined | Promise<void>

  #### Parameters

  + event: any

  #### Returns undefined | Promise<void>

  Inherited from DocumentDirectory.\_onDrop

### \_onFirstRender

* \_onFirstRender(context: any, options: any): Promise<void>

  #### Parameters

  + context: any
  + options: any

  #### Returns Promise<void>

  #### Inherit Doc

  Inherited from DocumentDirectory.\_onFirstRender

### \_onRender

* \_onRender(context: any, options: any): Promise<void>

  #### Parameters

  + context: any
  + options: any

  #### Returns Promise<void>

  #### Inherit Doc

  Inherited from DocumentDirectory.\_onRender

### \_prepareContext

* \_prepareContext(  
  Â Â Â Â options: any,  
  ): Promise<  
  Â Â Â Â [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.html) & {  
  Â Â Â Â Â Â Â Â canCreateEntry: boolean;  
  Â Â Â Â Â Â Â Â canCreateFolder: boolean;  
  Â Â Â Â Â Â Â Â documentName: string;  
  Â Â Â Â Â Â Â Â folderIcon: string;  
  Â Â Â Â Â Â Â Â sidebarIcon: any;  
  Â Â Â Â },  
  >

  #### Parameters

  + options: any

  #### Returns Promise< Â Â Â Â [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.html) & { Â Â Â Â Â Â Â Â canCreateEntry: boolean; Â Â Â Â Â Â Â Â canCreateFolder: boolean; Â Â Â Â Â Â Â Â documentName: string; Â Â Â Â Â Â Â Â folderIcon: string; Â Â Â Â Â Â Â Â sidebarIcon: any; Â Â Â Â }, >

  #### Inherit Doc

  Inherited from DocumentDirectory.\_prepareContext

### \_preparePartContext

* \_preparePartContext(partId: any, context: any, options: any): Promise<any>

  #### Parameters

  + partId: any
  + context: any
  + options: any

  #### Returns Promise<any>

  #### Inherit Doc

  Inherited from DocumentDirectory.\_preparePartContext

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

  Inherited from DocumentDirectory.\_preSyncPartState

### \_renderFrame

* \_renderFrame(options: any): Promise<HTMLElement>

  #### Parameters

  + options: any

  #### Returns Promise<HTMLElement>

  #### Inherit Doc

  Inherited from DocumentDirectory.\_renderFrame

### `Abstract`\_renderHTML

* \_renderHTML(  
  Â Â Â Â context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.html),  
  Â Â Â Â options: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.html),  
  ): Promise<any>

  Render an HTMLElement for the Application.
  An Application subclass must implement this method in order for the Application to be renderable.

  #### Parameters

  + context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.html)

    Context data for the render operation
  + options: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.html)

    Options which configure application rendering behavior

  #### Returns Promise<any>

  The result of HTML rendering may be implementation specific.
  Whatever value is returned here is passed to \_replaceHTML

  Inherited from DocumentDirectory.\_renderHTML

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

  Inherited from DocumentDirectory.\_syncPartState

### activate

* activate(): void

  Activate this tab in the sidebar.

  #### Returns void

  Inherited from DocumentDirectory.activate

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

  Inherited from DocumentDirectory.addEventListener

### bringToFront

* bringToFront(): void

  Bring this Application window to the front of the rendering stack by increasing its z-index.
  Once ApplicationV1 is deprecated we should switch from \_maxZ to ApplicationV2#maxZ
  We should also eliminate ui.activeWindow in favor of only ApplicationV2#frontApp

  #### Returns void

  Inherited from DocumentDirectory.bringToFront

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

  Inherited from DocumentDirectory.changeTab

### close

* close(options?: Partial<[ApplicationClosingOptions](../interfaces/foundry.applications.types.ApplicationClosingOptions.html)>): Promise<[RollTableDirectory](foundry.applications.sidebar.tabs.RollTableDirectory.html)>

  Close the Application, removing it from the DOM.

  #### Parameters

  + `Optional`options: Partial<[ApplicationClosingOptions](../interfaces/foundry.applications.types.ApplicationClosingOptions.html)> = {}

    Options which modify how the application is closed.

  #### Returns Promise<[RollTableDirectory](foundry.applications.sidebar.tabs.RollTableDirectory.html)>

  A Promise which resolves to the closed Application instance

  Inherited from DocumentDirectory.close

### collapseAll

* collapseAll(): void

  Collapse all open folders in this directory.

  #### Returns void

  Inherited from DocumentDirectory.collapseAll

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

  Inherited from DocumentDirectory.dispatchEvent

### maximize

* maximize(): Promise<void>

  Restore the Application to its original dimensions.

  #### Returns Promise<void>

  Inherited from DocumentDirectory.maximize

### minimize

* minimize(): Promise<void>

  Minimize the Application, collapsing it to a minimal header.

  #### Returns Promise<void>

  Inherited from DocumentDirectory.minimize

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

  Inherited from DocumentDirectory.removeEventListener

### render

* render(options: any, \_options: any): Promise<[RollTableDirectory](foundry.applications.sidebar.tabs.RollTableDirectory.html)>

  #### Parameters

  + options: any
  + \_options: any

  #### Returns Promise<[RollTableDirectory](foundry.applications.sidebar.tabs.RollTableDirectory.html)>

  #### Inherit Doc

  Inherited from DocumentDirectory.render

### renderPopout

* renderPopout(): Promise<  
  Â Â Â Â [AbstractSidebarTab](foundry.applications.sidebar.AbstractSidebarTab.html)<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.html), [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html)>,  
  >

  Pop-out this sidebar tab as a new application.

  #### Returns Promise<[AbstractSidebarTab](foundry.applications.sidebar.AbstractSidebarTab.html)<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.html), [ApplicationRenderOptions](../interfaces/foundry.applications.types.ApplicationRenderOptions.html)>>

  Inherited from DocumentDirectory.renderPopout

### setPosition

* setPosition(position?: Partial<[ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.html)>): void | [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.html)

  Update the Application element position using provided data which is merged with the prior position.

  #### Parameters

  + `Optional`position: Partial<[ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.html)>

    New Application positioning data

  #### Returns void | [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.html)

  The updated application position

  Inherited from DocumentDirectory.setPosition

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

  Inherited from DocumentDirectory.submit

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

  Inherited from DocumentDirectory.toggleControls

### `Protected`\_attachFrameListeners

* \_attachFrameListeners(): void

  `Protected`

  Attach event listeners to the Application frame.

  #### Returns void

  Inherited from DocumentDirectory.\_attachFrameListeners

### `Protected`\_canCreateEntry

* \_canCreateEntry(): boolean

  `Protected`

  Determine if the current user has permission to create directory entries.

  #### Returns boolean

  Inherited from DocumentDirectory.\_canCreateEntry

### `Protected`\_canCreateFolder

* \_canCreateFolder(): boolean

  `Protected`

  Determine if the current user has permission to create folders in this directory.

  #### Returns boolean

  Inherited from DocumentDirectory.\_canCreateFolder

### `Protected`\_canDragDrop

* \_canDragDrop(selector: string): boolean

  `Protected`

  Determine if drop operations are permitted.

  #### Parameters

  + selector: string

    The candidate HTML selector for dragging

  #### Returns boolean

  Can the current user drag this selector?

  Inherited from DocumentDirectory.\_canDragDrop

### `Protected`\_canDragStart

* \_canDragStart(selector: string): boolean

  `Protected`

  Determine if drag operations are permitted.

  #### Parameters

  + selector: string

    The candidate HTML selector for dragging

  #### Returns boolean

  Can the current user drag this selector?

  Inherited from DocumentDirectory.\_canDragStart

### `Protected`\_configureRenderOptions

* \_configureRenderOptions(options: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.html)): void

  `Protected`

  Modify the provided options passed to a render request.

  #### Parameters

  + options: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.html)

    Options which configure application rendering behavior

  #### Returns void

  Inherited from DocumentDirectory.\_configureRenderOptions

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

  Inherited from DocumentDirectory.\_createContextMenu

### `Protected`\_createContextMenus

* \_createContextMenus(): void

  `Protected`

  Register context menu entries and fire hooks.

  #### Returns void

  Inherited from DocumentDirectory.\_createContextMenus

### `Protected`\_createDroppedEntry

* \_createDroppedEntry(  
  Â Â Â Â entry: DirectoryMixinEntry,  
  Â Â Â Â updates?: object,  
  ): Promise<[documents](../modules/foundry.documents.html).[RollTable](foundry.documents.RollTable.html)>

  `Protected`

  Create a new entry in this directory from one that was dropped on it.

  #### Parameters

  + entry: DirectoryMixinEntry

    The dropped entry.
  + `Optional`updates: object = {}

    Modifications to the creation data.

  #### Returns Promise<[documents](../modules/foundry.documents.html).[RollTable](foundry.documents.RollTable.html)>

  Inherited from DocumentDirectory.\_createDroppedEntry

### `Protected`\_createDroppedFolderContent

* \_createDroppedFolderContent(  
  Â Â Â Â folder: [documents](../modules/foundry.documents.html).[Folder](foundry.documents.Folder.html),  
  Â Â Â Â targetFolder?: [documents](../modules/foundry.documents.html).[Folder](foundry.documents.Folder.html),  
  ): Promise<[documents](../modules/foundry.documents.html).[Folder](foundry.documents.Folder.html)[]>

  `Protected`

  Import a dropped folder and its children into this collection if they do not already exist.

  #### Parameters

  + folder: [documents](../modules/foundry.documents.html).[Folder](foundry.documents.Folder.html)

    The folder being dropped.
  + `Optional`targetFolder: [documents](../modules/foundry.documents.html).[Folder](foundry.documents.Folder.html)

    A folder to import into if not the directory root.

  #### Returns Promise<[documents](../modules/foundry.documents.html).[Folder](foundry.documents.Folder.html)[]>

  Inherited from DocumentDirectory.\_createDroppedFolderContent

### `Protected`\_createDroppedFolderDocuments

* \_createDroppedFolderDocuments(  
  Â Â Â Â folder: [documents](../modules/foundry.documents.html).[Folder](foundry.documents.Folder.html),  
  Â Â Â Â documents: object[] | [documents](../modules/foundry.documents.html).[RollTable](foundry.documents.RollTable.html)[],  
  ): Promise<void>

  `Protected`

  Create a set of documents in a dropped folder.

  #### Parameters

  + folder: [documents](../modules/foundry.documents.html).[Folder](foundry.documents.Folder.html)

    The dropped folder.
  + documents: object[] | [documents](../modules/foundry.documents.html).[RollTable](foundry.documents.RollTable.html)[]

    The documents to create, or their indices.

  #### Returns Promise<void>

  Inherited from DocumentDirectory.\_createDroppedFolderDocuments

### `Protected`\_entryAlreadyExists

* \_entryAlreadyExists(entry: ClientDocument): boolean

  `Protected`

  Test if the given entry is already present in this directory.

  #### Parameters

  + entry: ClientDocument

    The directory entry.

  #### Returns boolean

  Inherited from DocumentDirectory.\_entryAlreadyExists

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

  Inherited from DocumentDirectory.\_entryBelongsToFolder

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

  Inherited from DocumentDirectory.\_getDroppedEntryFromData

### `Protected`\_getEntryDragData

* \_getEntryDragData(entryId: string): any

  `Protected`

  Get drag data for an entry in this directory.

  #### Parameters

  + entryId: string

    The entry's ID.

  #### Returns any

  Inherited from DocumentDirectory.\_getEntryDragData

### `Protected`\_getFolderContextOptions

* \_getFolderContextOptions(): [ContextMenuEntry](../interfaces/foundry.ContextMenuEntry.html)[]

  `Protected`

  Get context menu entries for folders in this directory.

  #### Returns [ContextMenuEntry](../interfaces/foundry.ContextMenuEntry.html)[]

  Inherited from DocumentDirectory.\_getFolderContextOptions

### `Protected`\_getFolderDragData

* \_getFolderDragData(folderId: string): any

  `Protected`

  Get drag data for a folder in this directory.

  #### Parameters

  + folderId: string

    The folder ID.

  #### Returns any

  Inherited from DocumentDirectory.\_getFolderDragData

### `Protected`\_getHeaderControls

* \_getHeaderControls(): [ApplicationHeaderControlsEntry](../interfaces/foundry.applications.types.ApplicationHeaderControlsEntry.html)[]

  `Protected`

  Configure the array of header control menu options

  #### Returns [ApplicationHeaderControlsEntry](../interfaces/foundry.applications.types.ApplicationHeaderControlsEntry.html)[]

  Inherited from DocumentDirectory.\_getHeaderControls

### `Protected`\_getTabsConfig

* \_getTabsConfig(group: string): null | [ApplicationTabsConfiguration](../interfaces/foundry.applications.types.ApplicationTabsConfiguration.html)

  `Protected`

  Get the configuration for a tabs group.

  #### Parameters

  + group: string

    The ID of a tabs group

  #### Returns null | [ApplicationTabsConfiguration](../interfaces/foundry.applications.types.ApplicationTabsConfiguration.html)

  Inherited from DocumentDirectory.\_getTabsConfig

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

  Inherited from DocumentDirectory.\_handleDroppedEntry

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

  Inherited from DocumentDirectory.\_handleDroppedFolder

### `Protected`\_handleDroppedForeignFolder

* \_handleDroppedForeignFolder(  
  Â Â Â Â folder: [documents](../modules/foundry.documents.html).[Folder](foundry.documents.Folder.html),  
  Â Â Â Â closestFolderId: string,  
  Â Â Â Â sortData: object,  
  ): Promise<null | { folder: [documents](../modules/foundry.documents.html).[Folder](foundry.documents.Folder.html); sortNeeded: boolean }>

  `Protected`

  Handle importing a new folder's into the directory.

  #### Parameters

  + folder: [documents](../modules/foundry.documents.html).[Folder](foundry.documents.Folder.html)

    The dropped folder.
  + closestFolderId: string

    The ID of the closest folder to the drop target.
  + sortData: object

    Sort data for the folder.

  #### Returns Promise<null | { folder: [documents](../modules/foundry.documents.html).[Folder](foundry.documents.Folder.html); sortNeeded: boolean }>

  Inherited from DocumentDirectory.\_handleDroppedForeignFolder

### `Protected`\_headerControlButtons

* \_headerControlButtons(): Generator<[ApplicationHeaderControlsEntry](../interfaces/foundry.applications.types.ApplicationHeaderControlsEntry.html), any, any>

  `Protected`

  Iterate over header control buttons, filtering for controls which are visible for the current client.

  #### Returns Generator<[ApplicationHeaderControlsEntry](../interfaces/foundry.applications.types.ApplicationHeaderControlsEntry.html), any, any>

  #### Yields

  Inherited from DocumentDirectory.\_headerControlButtons

### `Protected`\_insertElement

* \_insertElement(element: HTMLElement): void

  `Protected`

  Insert the application HTML element into the DOM.
  Subclasses may override this method to customize how the application is inserted.

  #### Parameters

  + element: HTMLElement

    The element to insert

  #### Returns void

  Inherited from DocumentDirectory.\_insertElement

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

  Inherited from DocumentDirectory.\_matchSearchEntries

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

  Inherited from DocumentDirectory.\_matchSearchFolders

### `Protected`\_onActivate

* \_onActivate(): void

  `Protected`

  Actions performed when this tab is activated in the sidebar.

  #### Returns void

  Inherited from DocumentDirectory.\_onActivate

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

  Inherited from DocumentDirectory.\_onChangeForm

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

  Inherited from DocumentDirectory.\_onClickAction

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

  Inherited from DocumentDirectory.\_onClickEntry

### `Protected`\_onClickTab

* \_onClickTab(event: PointerEvent): void

  `Protected`

  Handle click events on a tab within the Application.

  #### Parameters

  + event: PointerEvent

  #### Returns void

  Inherited from DocumentDirectory.\_onClickTab

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

  Inherited from DocumentDirectory.\_onCreateEntry

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

  Inherited from DocumentDirectory.\_onCreateFolder

### `Protected`\_onDeactivate

* \_onDeactivate(): void

  `Protected`

  Actions performed when this tab is deactivated in the sidebar.

  #### Returns void

  Inherited from DocumentDirectory.\_onDeactivate

### `Protected`\_onDragHighlight

* \_onDragHighlight(event: DragEvent): void

  `Protected`

  Highlight folders as drop targets when a drag event enters or exits their area.

  #### Parameters

  + event: DragEvent

    The in-progress drag event.

  #### Returns void

  Inherited from DocumentDirectory.\_onDragHighlight

### `Protected`\_onDragOver

* \_onDragOver(event: DragEvent): void

  `Protected`

  Handle drag events over the directory.

  #### Parameters

  + event: DragEvent

  #### Returns void

  Inherited from DocumentDirectory.\_onDragOver

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

  Inherited from DocumentDirectory.\_onMatchSearchEntry

### `Protected`\_onPosition

* \_onPosition(position: [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.html)): void

  `Protected`

  Actions performed after the Application is re-positioned.

  #### Parameters

  + position: [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.html)

    The requested application position

  #### Returns void

  Inherited from DocumentDirectory.\_onPosition

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

  Inherited from DocumentDirectory.\_onSearchFilter

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

  Inherited from DocumentDirectory.\_onSubmitForm

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

  Inherited from DocumentDirectory.\_onToggleFolder

### `Protected`\_organizeDroppedFoldersAndDocuments

* \_organizeDroppedFoldersAndDocuments(  
  Â Â Â Â folder: [documents](../modules/foundry.documents.html).[Folder](foundry.documents.Folder.html),  
  Â Â Â Â targetFolder?: [documents](../modules/foundry.documents.html).[Folder](foundry.documents.Folder.html),  
  ): Promise<  
  Â Â Â Â {  
  Â Â Â Â Â Â Â Â documentsToCreate: object[]  
  Â Â Â Â Â Â Â Â | [documents](../modules/foundry.documents.html).[RollTable](foundry.documents.RollTable.html)[];  
  Â Â Â Â Â Â Â Â foldersToCreate: [documents](../modules/foundry.documents.html).[Folder](foundry.documents.Folder.html)[];  
  Â Â Â Â },  
  >

  `Protected`

  Organize a dropped folder and its children into a list of folders and documents to create.

  #### Parameters

  + folder: [documents](../modules/foundry.documents.html).[Folder](foundry.documents.Folder.html)

    The dropped folder.
  + `Optional`targetFolder: [documents](../modules/foundry.documents.html).[Folder](foundry.documents.Folder.html)

    A folder to import into if not the directory root.

  #### Returns Promise< Â Â Â Â { Â Â Â Â Â Â Â Â documentsToCreate: object[] Â Â Â Â Â Â Â Â | [documents](../modules/foundry.documents.html).[RollTable](foundry.documents.RollTable.html)[]; Â Â Â Â Â Â Â Â foldersToCreate: [documents](../modules/foundry.documents.html).[Folder](foundry.documents.Folder.html)[]; Â Â Â Â }, >

  Inherited from DocumentDirectory.\_organizeDroppedFoldersAndDocuments

### `Protected`\_postRender

* \_postRender(  
  Â Â Â Â context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.html),  
  Â Â Â Â options: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.html),  
  ): Promise<void>

  `Protected`

  Perform post-render finalization actions.

  #### Parameters

  + context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.html)

    Prepared context data.
  + options: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.html)

    Provided render options.

  #### Returns Promise<void>

  Inherited from DocumentDirectory.\_postRender

### `Protected`\_preClose

* \_preClose(options: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.html)): Promise<void>

  `Protected`

  Actions performed before closing the Application.
  Pre-close steps are awaited by the close process.

  #### Parameters

  + options: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.html)

    Provided render options

  #### Returns Promise<void>

  Inherited from DocumentDirectory.\_preClose

### `Protected`\_preFirstRender

* \_preFirstRender(  
  Â Â Â Â context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.html),  
  Â Â Â Â options: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.html),  
  ): Promise<void>

  `Protected`

  Actions performed before a first render of the Application.

  #### Parameters

  + context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.html)

    Prepared context data
  + options: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.html)

    Provided render options

  #### Returns Promise<void>

  Inherited from DocumentDirectory.\_preFirstRender

### `Protected`\_prepareDirectoryContext

* \_prepareDirectoryContext(  
  Â Â Â Â context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.html),  
  Â Â Â Â options: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.html),  
  ): Promise<void>

  `Protected`

  Prepare render context for the directory part.

  #### Parameters

  + context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.html)
  + options: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.html)

  #### Returns Promise<void>

  Inherited from DocumentDirectory.\_prepareDirectoryContext

### `Protected`\_prepareDuplicateData

* \_prepareDuplicateData(document: Document): object

  `Protected`

  Prepares the data for a duplicated Document.

  #### Parameters

  + document: Document

    The Document that is duplicated

  #### Returns object

  The partial data of the duplicate that overrides the original data

  Inherited from DocumentDirectory.\_prepareDuplicateData

### `Protected`\_prepareFooterContext

* \_prepareFooterContext(  
  Â Â Â Â context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.html),  
  Â Â Â Â options: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.html),  
  ): Promise<void>

  `Protected`

  Prepare render context for the footer part.

  #### Parameters

  + context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.html)
  + options: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.html)

  #### Returns Promise<void>

  Inherited from DocumentDirectory.\_prepareFooterContext

### `Protected`\_prepareHeaderContext

* \_prepareHeaderContext(  
  Â Â Â Â context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.html),  
  Â Â Â Â options: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.html),  
  ): Promise<void>

  `Protected`

  Prepare render context for the header part.

  #### Parameters

  + context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.html)
  + options: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.html)

  #### Returns Promise<void>

  Inherited from DocumentDirectory.\_prepareHeaderContext

### `Protected`\_prepareTabs

* \_prepareTabs(group: string): Record<string, [ApplicationTab](../interfaces/foundry.applications.types.ApplicationTab.html)>

  `Protected`

  Prepare application tab data for a single tab group.

  #### Parameters

  + group: string

    The ID of the tab group to prepare

  #### Returns Record<string, [ApplicationTab](../interfaces/foundry.applications.types.ApplicationTab.html)>

  Inherited from DocumentDirectory.\_prepareTabs

### `Protected`\_prePosition

* \_prePosition(position: [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.html)): void

  `Protected`

  Actions performed before the Application is re-positioned.
  Pre-position steps are not awaited because setPosition is synchronous.

  #### Parameters

  + position: [ApplicationPosition](../interfaces/foundry.applications.types.ApplicationPosition.html)

    The requested application position

  #### Returns void

  Inherited from DocumentDirectory.\_prePosition

### `Protected`\_preRender

* \_preRender(  
  Â Â Â Â context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.html),  
  Â Â Â Â options: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.html),  
  ): Promise<void>

  `Protected`

  Actions performed before any render of the Application.
  Pre-render steps are awaited by the render process.

  #### Parameters

  + context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.html)

    Prepared context data
  + options: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.html)

    Provided render options

  #### Returns Promise<void>

  Inherited from DocumentDirectory.\_preRender

### `Protected`\_removeElement

* \_removeElement(element: HTMLElement): void

  `Protected`

  Remove the application HTML element from the DOM.
  Subclasses may override this method to customize how the application element is removed.

  #### Parameters

  + element: HTMLElement

    The element to be removed

  #### Returns void

  Inherited from DocumentDirectory.\_removeElement

### `Protected`\_renderHeaderControl

* \_renderHeaderControl(control: [ApplicationHeaderControlsEntry](../interfaces/foundry.applications.types.ApplicationHeaderControlsEntry.html)): HTMLLIElement

  `Protected`

  Render a header control button.

  #### Parameters

  + control: [ApplicationHeaderControlsEntry](../interfaces/foundry.applications.types.ApplicationHeaderControlsEntry.html)

  #### Returns HTMLLIElement

  Inherited from DocumentDirectory.\_renderHeaderControl

### `Protected`\_replaceHTML

* \_replaceHTML(  
  Â Â Â Â result: any,  
  Â Â Â Â content: HTMLElement,  
  Â Â Â Â options: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.html),  
  ): void

  `Protected`

  Replace the HTML of the application with the result provided by the rendering backend.
  An Application subclass should implement this method in order for the Application to be renderable.

  #### Parameters

  + result: any

    The result returned by the application rendering backend
  + content: HTMLElement

    The content element into which the rendered result must be inserted
  + options: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.html)

    Options which configure application rendering behavior

  #### Returns void

  Inherited from DocumentDirectory.\_replaceHTML

### `Protected`\_tearDown

* \_tearDown(options: [ApplicationClosingOptions](../interfaces/foundry.applications.types.ApplicationClosingOptions.html)): void

  `Protected`

  Remove elements from the DOM and trigger garbage collection as part of application closure.

  #### Parameters

  + options: [ApplicationClosingOptions](../interfaces/foundry.applications.types.ApplicationClosingOptions.html)

  #### Returns void

  Inherited from DocumentDirectory.\_tearDown

### `Protected`\_updateFrame

* \_updateFrame(options: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.html)): void

  `Protected`

  When the Application is rendered, optionally update aspects of the window frame.

  #### Parameters

  + options: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.html)

    Options provided at render-time

  #### Returns void

  Inherited from DocumentDirectory.\_updateFrame

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

  Inherited from DocumentDirectory.\_updatePosition

### `Static`\_getFolderContextOptions

* \_getFolderContextOptions(): [ContextMenuEntry](../interfaces/foundry.ContextMenuEntry.html)[]

  `Internal`

  Get context menu entries for folders in a directory.

  #### Returns [ContextMenuEntry](../interfaces/foundry.ContextMenuEntry.html)[]

  Inherited from DocumentDirectory.\_getFolderContextOptions

### `Static`\_handleDroppedFolder

* \_handleDroppedFolder(  
  Â Â Â Â target: HTMLElement,  
  Â Â Â Â data: object,  
  Â Â Â Â config: {  
  Â Â Â Â Â Â Â Â folders: [documents](../modules/foundry.documents.html).[Folder](foundry.documents.Folder.html)[];  
  Â Â Â Â Â Â Â Â label: string;  
  Â Â Â Â Â Â Â Â maxFolderDepth: number;  
  Â Â Â Â Â Â Â Â type: string;  
  Â Â Â Â },  
  ): Promise<void | { folder: [documents](../modules/foundry.documents.html).[Folder](foundry.documents.Folder.html); sortData: object }>

  `Internal`

  Helper method to handle dropping a folder onto the directory.

  #### Parameters

  + target: HTMLElement

    The drop target element.
  + data: object

    The drop data.
  + config: {  
    Â Â Â Â folders: [documents](../modules/foundry.documents.html).[Folder](foundry.documents.Folder.html)[];  
    Â Â Â Â label: string;  
    Â Â Â Â maxFolderDepth: number;  
    Â Â Â Â type: string;  
    }
    - ##### folders: [documents](../modules/foundry.documents.html).[Folder](foundry.documents.Folder.html)[]

      The sibling folders.
    - ##### label: string

      The label for entries in the directory.
    - ##### maxFolderDepth: number

      The maximum folder depth in this directory.
    - ##### type: string

      The type of entries in the directory.

  #### Returns Promise<void | { folder: [documents](../modules/foundry.documents.html).[Folder](foundry.documents.Folder.html); sortData: object }>

  Inherited from DocumentDirectory.\_handleDroppedFolder

### `Static`inheritanceChain

* inheritanceChain(): Generator<typeof [ApplicationV2](foundry.applications.api.ApplicationV2.html), void, unknown>

  Iterate over the inheritance chain of this Application.
  The chain includes this Application itself and all parents until the base application is encountered.

  #### Returns Generator<typeof [ApplicationV2](foundry.applications.api.ApplicationV2.html), void, unknown>

  #### See

  [ApplicationV2.BASE\_APPLICATION](foundry.applications.api.ApplicationV2.html#base_application)

  #### Yields

  Inherited from DocumentDirectory.inheritanceChain

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

  Inherited from DocumentDirectory.parseCSSDimension

### `Static`waitForImages

* waitForImages(element: HTMLElement): Promise<void>

  Wait for any images in the given element to load.

  #### Parameters

  + element: HTMLElement

    The element.

  #### Returns Promise<void>

  Inherited from DocumentDirectory.waitForImages