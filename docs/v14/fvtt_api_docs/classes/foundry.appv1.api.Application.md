---
title: "Application | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.appv1.api.Application.html"
category: "classes"
---

# Class Application`Abstract`

The legacy application window that is rendered for some UI elements in Foundry VTT.

#### Deprecated

since v13

#### Hierarchy ([View Summary](../hierarchy.md#foundry.appv1.api.Application))

* Application
  + [Dialog](foundry.appv1.api.Dialog.md)
  + [FormApplication](foundry.appv1.api.FormApplication.md)

##### Index

### Constructors

[constructor](#constructor)

### Properties

[\_dragDrop](#_dragdrop)
[\_element](#_element)
[\_minimized](#_minimized)
[\_scrollPositions](#_scrollpositions)
[\_searchFilters](#_searchfilters)
[\_tabs](#_tabs)
[appId](#appid)
[options](#options)
[position](#position)
[\_priorState](#_priorstate)
[\_state](#_state)
[RENDER\_STATES](#render_states)

### Accessors

[closing](#closing)
[element](#element)
[id](#id)
[popOut](#popout)
[rendered](#rendered)
[template](#template)
[title](#title)
[defaultOptions](#defaultoptions)

### Methods

[\_contextMenu](#_contextmenu)
[\_createDragDropHandlers](#_createdragdrophandlers)
[\_createSearchFilters](#_createsearchfilters)
[\_createTabHandlers](#_createtabhandlers)
[\_injectHTML](#_injecthtml)
[\_onResize](#_onresize)
[\_onToggleMinimize](#_ontoggleminimize)
[\_renderInner](#_renderinner)
[\_replaceHTML](#_replacehtml)
[activateListeners](#activatelisteners)
[activateTab](#activatetab)
[bringToFront](#bringtofront)
[bringToTop](#bringtotop)
[close](#close)
[getData](#getdata)
[maximize](#maximize)
[minimize](#minimize)
[render](#render)
[setPosition](#setposition)
[\_activateCoreListeners](#_activatecorelisteners)
[\_callHooks](#_callhooks)
[\_canDragDrop](#_candragdrop)
[\_canDragStart](#_candragstart)
[\_getHeaderButtons](#_getheaderbuttons)
[\_onChangeTab](#_onchangetab)
[\_onDragOver](#_ondragover)
[\_onDragStart](#_ondragstart)
[\_onDrop](#_ondrop)
[\_onSearchFilter](#_onsearchfilter)
[\_render](#_render)
[\_renderOuter](#_renderouter)
[\_restoreScrollPositions](#_restorescrollpositions)
[\_saveScrollPositions](#_savescrollpositions)
[\_waitForImages](#_waitforimages)
[\_getInheritanceChain](#_getinheritancechain)

## Constructors

### constructor

* new Application(options?: [ApplicationV1Options](../interfaces/foundry.ApplicationV1Options.md)): Application

  #### Parameters

  + `Optional`options: [ApplicationV1Options](../interfaces/foundry.ApplicationV1Options.md) = {}

    Configuration options which control how the application is rendered.

  #### Returns Application

## Properties

### `Internal`\_dragDrop

\_dragDrop: [DragDrop](foundry.applications.ux.DragDrop.md)[]

DragDrop workflow handlers which are active for this Application

### `Internal`\_element

\_element: jQuery

An internal reference to the HTML element this application renders

### `Internal`\_minimized

\_minimized: boolean | null

Track whether the Application is currently minimized

### `Internal`\_scrollPositions

\_scrollPositions: object | null

Track the most recent scroll positions for any vertically scrolling containers

### `Internal`\_searchFilters

\_searchFilters: [SearchFilter](foundry.applications.ux.SearchFilter.md)[]

SearchFilter handlers which are active for this Application

### `Internal`\_tabs

\_tabs: [Tabs](foundry.applications.ux.Tabs.md)[]

Tab navigation handlers which are active for this Application

### appId

appId: number

The application ID is a unique incrementing integer which is used to identify every application window
drawn by the VTT

### options

options: object

The options provided to this application upon initialization

### position

position: object

Track the current position and dimensions of the Application UI

### `Protected`\_priorState

\_priorState: number

The prior render state of this Application.
This allows for rendering logic to understand if the application is being rendered for the first time.

#### See

### `Protected`\_state

\_state: number

The current render state of the Application

#### See

[Application.RENDER\_STATES](#render_states)

### `Static`RENDER\_STATES

RENDER\_STATES: Readonly<  
Â Â Â Â {  
Â Â Â Â Â Â Â Â CLOSED: -1;  
Â Â Â Â Â Â Â Â CLOSING: -2;  
Â Â Â Â Â Â Â Â ERROR: -3;  
Â Â Â Â Â Â Â Â NONE: 0;  
Â Â Â Â Â Â Â Â RENDERED: 2;  
Â Â Â Â Â Â Â Â RENDERING: 1;  
Â Â Â Â },  
> = ...

The sequence of rendering states that track the Application life-cycle.

## Accessors

### closing

* get closing(): boolean

  Whether the Application is currently closing.

  #### Returns boolean

### element

* get element(): jQuery

  Return the active application element, if it currently exists in the DOM

  #### Returns jQuery

### id

* get id(): string

  Return the CSS application ID which uniquely references this UI element

  #### Returns string

### popOut

* get popOut(): boolean

  Control the rendering style of the application. If popOut is true, the application is rendered in its own
  wrapper window, otherwise only the inner app content is rendered

  #### Returns boolean

### rendered

* get rendered(): boolean

  Return a flag for whether the Application instance is currently rendered

  #### Returns boolean

### template

* get template(): string

  The path to the HTML template file which should be used to render the inner content of the app

  #### Returns string

### title

* get title(): string

  An Application window should define its own title definition logic which may be dynamic depending on its data

  #### Returns string

### `Static`defaultOptions

* get defaultOptions(): [ApplicationV1Options](../interfaces/foundry.ApplicationV1Options.md)

  Assign the default options configuration which is used by this Application class. The options and values defined
  in this object are merged with any provided option values which are passed to the constructor upon initialization.
  Application subclasses may include additional options which are specific to their usage.

  #### Returns [ApplicationV1Options](../interfaces/foundry.ApplicationV1Options.md)

## Methods

### \_contextMenu

* \_contextMenu(html: jQuery): void

  `Internal`

  Create a [foundry.applications.ux.ContextMenu](foundry.applications.ux.ContextMenu.md) for this Application.

  #### Parameters

  + html: jQuery

    The Application's HTML.

  #### Returns void

### \_createDragDropHandlers

* \_createDragDropHandlers(): [DragDrop](foundry.applications.ux.DragDrop.md)[]

  `Internal`

  Create drag-and-drop workflow handlers for this Application

  #### Returns [DragDrop](foundry.applications.ux.DragDrop.md)[]

  An array of DragDrop handlers

### \_createSearchFilters

* \_createSearchFilters(): [SearchFilter](foundry.applications.ux.SearchFilter.md)[]

  `Internal`

  Create search filter handlers for this Application

  #### Returns [SearchFilter](foundry.applications.ux.SearchFilter.md)[]

  An array of SearchFilter handlers

### \_createTabHandlers

* \_createTabHandlers(): [Tabs](foundry.applications.ux.Tabs.md)[]

  `Internal`

  Create tabbed navigation handlers for this Application

  #### Returns [Tabs](foundry.applications.ux.Tabs.md)[]

  An array of Tabs handlers

### \_injectHTML

* \_injectHTML(html: jQuery): void

  `Internal`

  Customize how a new HTML Application is added and first appears in the DOM

  #### Parameters

  + html: jQuery

    The HTML element which is ready to be added to the DOM

  #### Returns void

### \_onResize

* \_onResize(event: Event): void

  `Internal`

  Additional actions to take when the application window is resized

  #### Parameters

  + event: Event

  #### Returns void

### \_onToggleMinimize

* \_onToggleMinimize(ev: Event): void

  `Internal`

  Handle application minimization behavior - collapsing content and reducing the size of the header

  #### Parameters

  + ev: Event

  #### Returns void

### \_renderInner

* \_renderInner(data: object): Promise<jQuery>

  `Internal`

  Render the inner application content

  #### Parameters

  + data: object

    The data used to render the inner template

  #### Returns Promise<jQuery>

  A promise resolving to the constructed jQuery object

### \_replaceHTML

* \_replaceHTML(element: jQuery, html: jQuery): void

  `Internal`

  Customize how inner HTML is replaced when the application is refreshed

  #### Parameters

  + element: jQuery

    The original HTML processed as a jQuery object
  + html: jQuery

    New updated HTML as a jQuery object

  #### Returns void

### activateListeners

* activateListeners(html: jQuery): void

  After rendering, activate event listeners which provide interactivity for the Application.
  This is where user-defined Application subclasses should attach their event-handling logic.

  #### Parameters

  + html: jQuery

  #### Returns void

### activateTab

* activateTab(  
  Â Â Â Â tabName: string,  
  Â Â Â Â options?: { group: string; triggerCallback: boolean },  
  ): void

  Change the currently active tab

  #### Parameters

  + tabName: string

    The target tab name to switch to
  + options: { group: string; triggerCallback: boolean } = {}

    Options which configure changing the tab

    - ##### group: string

      A specific named tab group, useful if multiple sets of tabs are present
    - ##### triggerCallback: boolean

      Whether to trigger tab-change callback functions

  #### Returns void

### bringToFront

* bringToFront(): void

  A convenience alias for [bringToTop](#bringtotop) for when operating on an object that is either an Application or an
  [ApplicationV2](foundry.applications.api.ApplicationV2.md)

  #### Returns void

### bringToTop

* bringToTop(): void

  Bring the application to the top of the rendering stack

  #### Returns void

### close

* close(options?: object): Promise<void>

  Close the application and un-register references to it within UI mappings
  This function returns a Promise which resolves once the window closing animation concludes

  #### Parameters

  + `Optional`options: object = {}

    Options which affect how the Application is closed

  #### Returns Promise<void>

  A Promise which resolves once the application is closed

  #### Fires

  closeApplication

### getData

* getData(options?: object): object | Promise<object>

  An application should define the data object used to render its template.
  This function may either return an Object directly, or a Promise which resolves to an Object
  If undefined, the default implementation will return an empty object allowing only for rendering of static HTML

  #### Parameters

  + options: object = {}

  #### Returns object | Promise<object>

### maximize

* maximize(): Promise<void>

  Maximize the pop-out window, expanding it to its original size
  Take no action for applications which are not of the pop-out variety or are already maximized

  #### Returns Promise<void>

  A Promise which resolves once the maximization action has completed

### minimize

* minimize(): Promise<void>

  Minimize the pop-out window, collapsing it to a small tab
  Take no action for applications which are not of the pop-out variety or apps which are already minimized

  #### Returns Promise<void>

  A Promise which resolves once the minimization action has completed

### render

* render(  
  Â Â Â Â force?: boolean,  
  Â Â Â Â options?: {  
  Â Â Â Â Â Â Â Â focus?: boolean;  
  Â Â Â Â Â Â Â Â height?: number;  
  Â Â Â Â Â Â Â Â left?: number;  
  Â Â Â Â Â Â Â Â renderContext?: string;  
  Â Â Â Â Â Â Â Â renderData?: object;  
  Â Â Â Â Â Â Â Â scale?: number;  
  Â Â Â Â Â Â Â Â top?: number;  
  Â Â Â Â Â Â Â Â width?: number;  
  Â Â Â Â },  
  ): Application

  Render the Application by evaluating its HTML template against the object of data provided by the getData method
  If the Application is rendered as a pop-out window, wrap the contained HTML in an outer frame with window controls

  #### Parameters

  + force: boolean = false

    Add the rendered application to the DOM if it is not already present. If false, the
    Application will only be re-rendered if it is already present.
  + options: {  
    Â Â Â Â focus?: boolean;  
    Â Â Â Â height?: number;  
    Â Â Â Â left?: number;  
    Â Â Â Â renderContext?: string;  
    Â Â Â Â renderData?: object;  
    Â Â Â Â scale?: number;  
    Â Â Â Â top?: number;  
    Â Â Â Â width?: number;  
    } = {}

    Additional rendering options which are applied to customize the way that the Application
    is rendered in the DOM.

    - ##### `Optional`focus?: boolean

      Apply focus to the application, maximizing it and bringing it to the top
      of the vertical stack.
    - ##### `Optional`height?: number

      The rendered height
    - ##### `Optional`left?: number

      The left positioning attribute
    - ##### `Optional`renderContext?: string

      A context-providing string which suggests what event triggered the render
    - ##### `Optional`renderData?: object

      The data change which motivated the render request
    - ##### `Optional`scale?: number

      The rendered transformation scale
    - ##### `Optional`top?: number

      The top positioning attribute
    - ##### `Optional`width?: number

      The rendered width

  #### Returns Application

  The rendered Application instance

### setPosition

* setPosition(  
  Â Â Â Â position?: {  
  Â Â Â Â Â Â Â Â height: string | number | null;  
  Â Â Â Â Â Â Â Â left: number | null;  
  Â Â Â Â Â Â Â Â scale: number | null;  
  Â Â Â Â Â Â Â Â top: number | null;  
  Â Â Â Â Â Â Â Â width: number | null;  
  Â Â Â Â },  
  ): | void  
  | {  
  Â Â Â Â height: number;  
  Â Â Â Â left: number;  
  Â Â Â Â scale: number;  
  Â Â Â Â top: number;  
  Â Â Â Â width: number;  
  }

  Set the application position and store its new location.
  Returns the updated position object for the application containing the new values.

  #### Parameters

  + position: {  
    Â Â Â Â height: string | number | null;  
    Â Â Â Â left: number | null;  
    Â Â Â Â scale: number | null;  
    Â Â Â Â top: number | null;  
    Â Â Â Â width: number | null;  
    } = {}

    Positional data

    - ##### height: string | number | null

      The application height in pixels
    - ##### left: number | null

      The left offset position in pixels
    - ##### scale: number | null

      The application scale as a numeric factor where 1.0 is default
    - ##### top: number | null

      The top offset position in pixels
    - ##### width: number | null

      The application width in pixels

  #### Returns Â Â Â Â | void Â Â Â Â | { Â Â Â Â Â Â Â Â height: number; Â Â Â Â Â Â Â Â left: number; Â Â Â Â Â Â Â Â scale: number; Â Â Â Â Â Â Â Â top: number; Â Â Â Â Â Â Â Â width: number; Â Â Â Â }

### `Protected`\_activateCoreListeners

* \_activateCoreListeners(html: jQuery): void

  `Protected`

  Activate required listeners which must be enabled on every Application.
  These are internal interactions which should not be overridden by downstream subclasses.

  #### Parameters

  + html: jQuery

  #### Returns void

### `Protected`\_callHooks

* \_callHooks(  
  Â Â Â Â hookName: string | ((className: string) => string),  
  Â Â Â Â ...hookArgs: any[],  
  ): void

  `Protected`

  Call all hooks for all applications in the inheritance chain.

  #### Parameters

  + hookName: string | ((className: string) => string)

    The hook being triggered, which formatted
    with the Application class name
  + ...hookArgs: any[]

    The arguments passed to the hook calls

  #### Returns void

### `Protected`\_canDragDrop

* \_canDragDrop(selector: string): boolean

  `Protected`

  Define whether a user is able to conclude a drag-and-drop workflow for a given drop selector

  #### Parameters

  + selector: string

    The candidate HTML selector for the drop target

  #### Returns boolean

  Can the current user drop on this selector?

### `Protected`\_canDragStart

* \_canDragStart(selector: string): boolean

  `Protected`

  Define whether a user is able to begin a dragstart workflow for a given drag selector

  #### Parameters

  + selector: string

    The candidate HTML selector for dragging

  #### Returns boolean

  Can the current user drag this selector?

### `Protected`\_getHeaderButtons

* \_getHeaderButtons(): [ApplicationV1HeaderButton](../types/foundry.ApplicationV1HeaderButton.md)[]

  `Protected`

  Specify the set of config buttons which should appear in the Application header.
  Buttons should be returned as an Array of objects.
  The header buttons which are added to the application can be modified by the getApplicationV1HeaderButtons hook.

  #### Returns [ApplicationV1HeaderButton](../types/foundry.ApplicationV1HeaderButton.md)[]

  #### Fires

  getApplicationHeaderButtons

### `Protected`\_onChangeTab

* \_onChangeTab(event: MouseEvent | null, tabs: [Tabs](foundry.applications.ux.Tabs.md), active: string): void

  `Protected`

  Handle changes to the active tab in a configured Tabs controller

  #### Parameters

  + event: MouseEvent | null

    A left click event
  + tabs: [Tabs](foundry.applications.ux.Tabs.md)

    The Tabs controller
  + active: string

    The new active tab name

  #### Returns void

### `Protected`\_onDragOver

* \_onDragOver(event: DragEvent): void

  `Protected`

  Callback actions which occur when a dragged element is over a drop target.

  #### Parameters

  + event: DragEvent

    The originating DragEvent

  #### Returns void

### `Protected`\_onDragStart

* \_onDragStart(event: DragEvent): void

  `Protected`

  Callback actions which occur at the beginning of a drag start workflow.

  #### Parameters

  + event: DragEvent

    The originating DragEvent

  #### Returns void

### `Protected`\_onDrop

* \_onDrop(event: DragEvent): void

  `Protected`

  Callback actions which occur when a dragged element is dropped on a target.

  #### Parameters

  + event: DragEvent

    The originating DragEvent

  #### Returns void

### `Protected`\_onSearchFilter

* \_onSearchFilter(  
  Â Â Â Â event: KeyboardEvent,  
  Â Â Â Â query: string,  
  Â Â Â Â rgx: RegExp,  
  Â Â Â Â html: HTMLElement,  
  ): void

  `Protected`

  Handle changes to search filtering controllers which are bound to the Application

  #### Parameters

  + event: KeyboardEvent

    The key-up event from keyboard input
  + query: string

    The raw string input to the search field
  + rgx: RegExp

    The regular expression to test against
  + html: HTMLElement

    The HTML element which should be filtered

  #### Returns void

### `Protected`\_render

* \_render(force?: boolean, options?: object): Promise<void>

  `Protected`

  An asynchronous inner function which handles the rendering of the Application

  #### Parameters

  + force: boolean = false

    Render and display the application even if it is not currently displayed.
  + options: object = {}

    Additional options which update the current values of the Application#options object

  #### Returns Promise<void>

  A Promise that resolves to the Application once rendering is complete

  #### Fires

  renderApplication

### `Protected`\_renderOuter

* \_renderOuter(): Promise<jQuery>

  `Protected`

  Render the outer application wrapper

  #### Returns Promise<jQuery>

  A promise resolving to the constructed jQuery object

### `Protected`\_restoreScrollPositions

* \_restoreScrollPositions(html: jQuery): void

  `Protected`

  Restore the scroll positions of containers within the app after re-rendering the content

  #### Parameters

  + html: jQuery

    The HTML object being traversed

  #### Returns void

### `Protected`\_saveScrollPositions

* \_saveScrollPositions(html: jQuery): void

  `Protected`

  Persist the scroll positions of containers within the app before re-rendering the content

  #### Parameters

  + html: jQuery

    The HTML object being traversed

  #### Returns void

### `Protected`\_waitForImages

* \_waitForImages(): Promise<void>

  `Protected`

  Wait for any images present in the Application to load.

  #### Returns Promise<void>

  A Promise that resolves when all images have loaded.

### `Static`\_getInheritanceChain

* \_getInheritanceChain(): Function[]

  `Internal`

  Return the inheritance chain for this Application class up to (and including) it's base Application class.

  #### Returns Function[]