---
title: "Dialog | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.appv1.api.Dialog.html"
category: "classes"
---

# Class Dialog

Create a dialog window displaying a title, a message, and a set of buttons which trigger callback functions.

#### Example: Constructing a custom dialog instance

```
let d = new Dialog({  
 title: "Test Dialog",  
 content: "<p>You must choose either Option 1, or Option 2</p>",  
 buttons: {  
  one: {  
   icon: '<i class="fa-solid fa-check"></i>',  
   label: "Option One",  
   callback: () => console.log("Chose One")  
  },  
  two: {  
   icon: '<i class="fa-solid fa-xmark"></i>',  
   label: "Option Two",  
   callback: () => console.log("Chose Two")  
  }  
 },  
 default: "two",  
 render: html => console.log("Register interactivity in the rendered dialog"),  
 close: html => console.log("This always is logged no matter which option is chosen")  
});  
d.render(true);
Copy
```

#### Deprecated

since v13

#### Hierarchy ([View Summary](../hierarchy.md#foundry.appv1.api.Dialog))

* [Application](foundry.appv1.api.Application.md)
  + Dialog

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
[\_renderOuter](#_renderouter)
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
[submit](#submit)
[\_activateCoreListeners](#_activatecorelisteners)
[\_callHooks](#_callhooks)
[\_canDragDrop](#_candragdrop)
[\_canDragStart](#_candragstart)
[\_getHeaderButtons](#_getheaderbuttons)
[\_onChangeTab](#_onchangetab)
[\_onDragOver](#_ondragover)
[\_onDragStart](#_ondragstart)
[\_onDrop](#_ondrop)
[\_onKeyDown](#_onkeydown)
[\_onSearchFilter](#_onsearchfilter)
[\_render](#_render)
[\_restoreScrollPositions](#_restorescrollpositions)
[\_saveScrollPositions](#_savescrollpositions)
[\_waitForImages](#_waitforimages)
[\_getInheritanceChain](#_getinheritancechain)
[confirm](#confirm)
[prompt](#prompt)
[wait](#wait)

## Constructors

### constructor

* new Dialog(  
  Â Â Â Â data: [DialogData](../interfaces/foundry.DialogData.md),  
  Â Â Â Â options?: [ApplicationV1Options](../interfaces/foundry.ApplicationV1Options.md) & [DialogV1Options](../interfaces/foundry.DialogV1Options.md),  
  ): Dialog

  #### Parameters

  + data: [DialogData](../interfaces/foundry.DialogData.md)

    An object of dialog data which configures how the modal window is rendered
  + `Optional`options: [ApplicationV1Options](../interfaces/foundry.ApplicationV1Options.md) & [DialogV1Options](../interfaces/foundry.DialogV1Options.md)

    Dialog rendering options, see
    [foundry.appv1.api.Application](foundry.appv1.api.Application.md).

  #### Returns Dialog

  Overrides [Application](foundry.appv1.api.Application.md).[constructor](foundry.appv1.api.Application.md#constructor)

## Properties

### `Internal`\_dragDrop

\_dragDrop: [DragDrop](foundry.applications.ux.DragDrop.md)[]

DragDrop workflow handlers which are active for this Application

Inherited from [Application](foundry.appv1.api.Application.md).[\_dragDrop](foundry.appv1.api.Application.md#_dragdrop)

### `Internal`\_element

\_element: jQuery

An internal reference to the HTML element this application renders

Inherited from [Application](foundry.appv1.api.Application.md).[\_element](foundry.appv1.api.Application.md#_element)

### `Internal`\_minimized

\_minimized: boolean | null

Track whether the Application is currently minimized

Inherited from [Application](foundry.appv1.api.Application.md).[\_minimized](foundry.appv1.api.Application.md#_minimized)

### `Internal`\_scrollPositions

\_scrollPositions: object | null

Track the most recent scroll positions for any vertically scrolling containers

Inherited from [Application](foundry.appv1.api.Application.md).[\_scrollPositions](foundry.appv1.api.Application.md#_scrollpositions)

### `Internal`\_searchFilters

\_searchFilters: [SearchFilter](foundry.applications.ux.SearchFilter.md)[]

SearchFilter handlers which are active for this Application

Inherited from [Application](foundry.appv1.api.Application.md).[\_searchFilters](foundry.appv1.api.Application.md#_searchfilters)

### `Internal`\_tabs

\_tabs: [Tabs](foundry.applications.ux.Tabs.md)[]

Tab navigation handlers which are active for this Application

Inherited from [Application](foundry.appv1.api.Application.md).[\_tabs](foundry.appv1.api.Application.md#_tabs)

### appId

appId: number

The application ID is a unique incrementing integer which is used to identify every application window
drawn by the VTT

Inherited from [Application](foundry.appv1.api.Application.md).[appId](foundry.appv1.api.Application.md#appid)

### options

options: object

The options provided to this application upon initialization

Inherited from [Application](foundry.appv1.api.Application.md).[options](foundry.appv1.api.Application.md#options)

### position

position: object

Track the current position and dimensions of the Application UI

Inherited from [Application](foundry.appv1.api.Application.md).[position](foundry.appv1.api.Application.md#position)

### `Protected`\_priorState

\_priorState: number

The prior render state of this Application.
This allows for rendering logic to understand if the application is being rendered for the first time.

#### See

Inherited from [Application](foundry.appv1.api.Application.md).[\_priorState](foundry.appv1.api.Application.md#_priorstate)

### `Protected`\_state

\_state: number

The current render state of the Application

#### See

[Application.RENDER\_STATES](foundry.appv1.api.Application.md#render_states)

Inherited from [Application](foundry.appv1.api.Application.md).[\_state](foundry.appv1.api.Application.md#_state)

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

Inherited from [Application](foundry.appv1.api.Application.md).[RENDER\_STATES](foundry.appv1.api.Application.md#render_states)

## Accessors

### closing

* get closing(): boolean

  Whether the Application is currently closing.

  #### Returns boolean

  Inherited from Application.closing

### element

* get element(): jQuery

  Return the active application element, if it currently exists in the DOM

  #### Returns jQuery

  Inherited from Application.element

### id

* get id(): string

  Return the CSS application ID which uniquely references this UI element

  #### Returns string

  Inherited from Application.id

### popOut

* get popOut(): boolean

  Control the rendering style of the application. If popOut is true, the application is rendered in its own
  wrapper window, otherwise only the inner app content is rendered

  #### Returns boolean

  Inherited from Application.popOut

### rendered

* get rendered(): boolean

  Return a flag for whether the Application instance is currently rendered

  #### Returns boolean

  Inherited from Application.rendered

### template

* get template(): string

  The path to the HTML template file which should be used to render the inner content of the app

  #### Returns string

  Inherited from Application.template

### title

* get title(): string

  An Application window should define its own title definition logic which may be dynamic depending on its data

  #### Returns string

  Overrides Application.title

### `Static`defaultOptions

* get defaultOptions(): [DialogV1Options](../interfaces/foundry.DialogV1Options.md)

  #### Returns [DialogV1Options](../interfaces/foundry.DialogV1Options.md)

  Overrides Application.defaultOptions

## Methods

### \_contextMenu

* \_contextMenu(html: jQuery): void

  `Internal`

  Create a [foundry.applications.ux.ContextMenu](foundry.applications.ux.ContextMenu.md) for this Application.

  #### Parameters

  + html: jQuery

    The Application's HTML.

  #### Returns void

  Inherited from [Application](foundry.appv1.api.Application.md).[\_contextMenu](foundry.appv1.api.Application.md#_contextmenu)

### \_createDragDropHandlers

* \_createDragDropHandlers(): [DragDrop](foundry.applications.ux.DragDrop.md)[]

  `Internal`

  Create drag-and-drop workflow handlers for this Application

  #### Returns [DragDrop](foundry.applications.ux.DragDrop.md)[]

  An array of DragDrop handlers

  Inherited from [Application](foundry.appv1.api.Application.md).[\_createDragDropHandlers](foundry.appv1.api.Application.md#_createdragdrophandlers)

### \_createSearchFilters

* \_createSearchFilters(): [SearchFilter](foundry.applications.ux.SearchFilter.md)[]

  `Internal`

  Create search filter handlers for this Application

  #### Returns [SearchFilter](foundry.applications.ux.SearchFilter.md)[]

  An array of SearchFilter handlers

  Inherited from [Application](foundry.appv1.api.Application.md).[\_createSearchFilters](foundry.appv1.api.Application.md#_createsearchfilters)

### \_createTabHandlers

* \_createTabHandlers(): [Tabs](foundry.applications.ux.Tabs.md)[]

  `Internal`

  Create tabbed navigation handlers for this Application

  #### Returns [Tabs](foundry.applications.ux.Tabs.md)[]

  An array of Tabs handlers

  Inherited from [Application](foundry.appv1.api.Application.md).[\_createTabHandlers](foundry.appv1.api.Application.md#_createtabhandlers)

### \_injectHTML

* \_injectHTML(html: jQuery): void

  `Internal`

  Customize how a new HTML Application is added and first appears in the DOM

  #### Parameters

  + html: jQuery

    The HTML element which is ready to be added to the DOM

  #### Returns void

  Inherited from [Application](foundry.appv1.api.Application.md).[\_injectHTML](foundry.appv1.api.Application.md#_injecthtml)

### \_onResize

* \_onResize(event: Event): void

  `Internal`

  Additional actions to take when the application window is resized

  #### Parameters

  + event: Event

  #### Returns void

  Inherited from [Application](foundry.appv1.api.Application.md).[\_onResize](foundry.appv1.api.Application.md#_onresize)

### \_onToggleMinimize

* \_onToggleMinimize(ev: Event): void

  `Internal`

  Handle application minimization behavior - collapsing content and reducing the size of the header

  #### Parameters

  + ev: Event

  #### Returns void

  Inherited from [Application](foundry.appv1.api.Application.md).[\_onToggleMinimize](foundry.appv1.api.Application.md#_ontoggleminimize)

### \_renderInner

* \_renderInner(data: object): Promise<jQuery>

  `Internal`

  Render the inner application content

  #### Parameters

  + data: object

    The data used to render the inner template

  #### Returns Promise<jQuery>

  A promise resolving to the constructed jQuery object

  Inherited from [Application](foundry.appv1.api.Application.md).[\_renderInner](foundry.appv1.api.Application.md#_renderinner)

### \_renderOuter

* \_renderOuter(): Promise<jQuery>

  Render the outer application wrapper

  #### Returns Promise<jQuery>

  A promise resolving to the constructed jQuery object

  Overrides [Application](foundry.appv1.api.Application.md).[\_renderOuter](foundry.appv1.api.Application.md#_renderouter)

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

  Inherited from [Application](foundry.appv1.api.Application.md).[\_replaceHTML](foundry.appv1.api.Application.md#_replacehtml)

### activateListeners

* activateListeners(html: any): void

  After rendering, activate event listeners which provide interactivity for the Application.
  This is where user-defined Application subclasses should attach their event-handling logic.

  #### Parameters

  + html: any

  #### Returns void

  Overrides [Application](foundry.appv1.api.Application.md).[activateListeners](foundry.appv1.api.Application.md#activatelisteners)

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

  Inherited from [Application](foundry.appv1.api.Application.md).[activateTab](foundry.appv1.api.Application.md#activatetab)

### bringToFront

* bringToFront(): void

  A convenience alias for [bringToTop](foundry.appv1.api.Application.md#bringtotop) for when operating on an object that is either an Application or an
  [ApplicationV2](foundry.applications.api.ApplicationV2.md)

  #### Returns void

  Inherited from [Application](foundry.appv1.api.Application.md).[bringToFront](foundry.appv1.api.Application.md#bringtofront)

### bringToTop

* bringToTop(): void

  Bring the application to the top of the rendering stack

  #### Returns void

  Inherited from [Application](foundry.appv1.api.Application.md).[bringToTop](foundry.appv1.api.Application.md#bringtotop)

### close

* close(options?: {}): Promise<void>

  Close the application and un-register references to it within UI mappings
  This function returns a Promise which resolves once the window closing animation concludes

  #### Parameters

  + options: {} = {}

    Options which affect how the Application is closed

  #### Returns Promise<void>

  A Promise which resolves once the application is closed

  #### Fires

  closeApplication

  Overrides [Application](foundry.appv1.api.Application.md).[close](foundry.appv1.api.Application.md#close)

### getData

* getData(\_options: any): { buttons: {}; content: string }

  An application should define the data object used to render its template.
  This function may either return an Object directly, or a Promise which resolves to an Object
  If undefined, the default implementation will return an empty object allowing only for rendering of static HTML

  #### Parameters

  + \_options: any

  #### Returns { buttons: {}; content: string }

  Overrides [Application](foundry.appv1.api.Application.md).[getData](foundry.appv1.api.Application.md#getdata)

### maximize

* maximize(): Promise<void>

  Maximize the pop-out window, expanding it to its original size
  Take no action for applications which are not of the pop-out variety or are already maximized

  #### Returns Promise<void>

  A Promise which resolves once the maximization action has completed

  Inherited from [Application](foundry.appv1.api.Application.md).[maximize](foundry.appv1.api.Application.md#maximize)

### minimize

* minimize(): Promise<void>

  Minimize the pop-out window, collapsing it to a small tab
  Take no action for applications which are not of the pop-out variety or apps which are already minimized

  #### Returns Promise<void>

  A Promise which resolves once the minimization action has completed

  Inherited from [Application](foundry.appv1.api.Application.md).[minimize](foundry.appv1.api.Application.md#minimize)

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
  ): [Application](foundry.appv1.api.Application.md)

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

  #### Returns [Application](foundry.appv1.api.Application.md)

  The rendered Application instance

  Inherited from [Application](foundry.appv1.api.Application.md).[render](foundry.appv1.api.Application.md#render)

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

  Inherited from [Application](foundry.appv1.api.Application.md).[setPosition](foundry.appv1.api.Application.md#setposition)

### submit

* submit(button: Object, event: PointerEvent): void

  Submit the Dialog by selecting one of its buttons.

  #### Parameters

  + button: Object

    The configuration of the chosen button
  + event: PointerEvent

    The originating click event

  #### Returns void

### `Protected`\_activateCoreListeners

* \_activateCoreListeners(html: jQuery): void

  `Protected`

  Activate required listeners which must be enabled on every Application.
  These are internal interactions which should not be overridden by downstream subclasses.

  #### Parameters

  + html: jQuery

  #### Returns void

  Inherited from [Application](foundry.appv1.api.Application.md).[\_activateCoreListeners](foundry.appv1.api.Application.md#_activatecorelisteners)

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

  Inherited from [Application](foundry.appv1.api.Application.md).[\_callHooks](foundry.appv1.api.Application.md#_callhooks)

### `Protected`\_canDragDrop

* \_canDragDrop(selector: string): boolean

  `Protected`

  Define whether a user is able to conclude a drag-and-drop workflow for a given drop selector

  #### Parameters

  + selector: string

    The candidate HTML selector for the drop target

  #### Returns boolean

  Can the current user drop on this selector?

  Inherited from [Application](foundry.appv1.api.Application.md).[\_canDragDrop](foundry.appv1.api.Application.md#_candragdrop)

### `Protected`\_canDragStart

* \_canDragStart(selector: string): boolean

  `Protected`

  Define whether a user is able to begin a dragstart workflow for a given drag selector

  #### Parameters

  + selector: string

    The candidate HTML selector for dragging

  #### Returns boolean

  Can the current user drag this selector?

  Inherited from [Application](foundry.appv1.api.Application.md).[\_canDragStart](foundry.appv1.api.Application.md#_candragstart)

### `Protected`\_getHeaderButtons

* \_getHeaderButtons(): [ApplicationV1HeaderButton](../types/foundry.ApplicationV1HeaderButton.md)[]

  `Protected`

  Specify the set of config buttons which should appear in the Application header.
  Buttons should be returned as an Array of objects.
  The header buttons which are added to the application can be modified by the getApplicationV1HeaderButtons hook.

  #### Returns [ApplicationV1HeaderButton](../types/foundry.ApplicationV1HeaderButton.md)[]

  #### Fires

  getApplicationHeaderButtons

  Inherited from [Application](foundry.appv1.api.Application.md).[\_getHeaderButtons](foundry.appv1.api.Application.md#_getheaderbuttons)

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

  Inherited from [Application](foundry.appv1.api.Application.md).[\_onChangeTab](foundry.appv1.api.Application.md#_onchangetab)

### `Protected`\_onDragOver

* \_onDragOver(event: DragEvent): void

  `Protected`

  Callback actions which occur when a dragged element is over a drop target.

  #### Parameters

  + event: DragEvent

    The originating DragEvent

  #### Returns void

  Inherited from [Application](foundry.appv1.api.Application.md).[\_onDragOver](foundry.appv1.api.Application.md#_ondragover)

### `Protected`\_onDragStart

* \_onDragStart(event: DragEvent): void

  `Protected`

  Callback actions which occur at the beginning of a drag start workflow.

  #### Parameters

  + event: DragEvent

    The originating DragEvent

  #### Returns void

  Inherited from [Application](foundry.appv1.api.Application.md).[\_onDragStart](foundry.appv1.api.Application.md#_ondragstart)

### `Protected`\_onDrop

* \_onDrop(event: DragEvent): void

  `Protected`

  Callback actions which occur when a dragged element is dropped on a target.

  #### Parameters

  + event: DragEvent

    The originating DragEvent

  #### Returns void

  Inherited from [Application](foundry.appv1.api.Application.md).[\_onDrop](foundry.appv1.api.Application.md#_ondrop)

### `Protected`\_onKeyDown

* \_onKeyDown(event: KeyboardEvent): void | Promise<void>

  `Protected`

  Handle a keydown event while the dialog is active

  #### Parameters

  + event: KeyboardEvent

    The keydown event

  #### Returns void | Promise<void>

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

  Inherited from [Application](foundry.appv1.api.Application.md).[\_onSearchFilter](foundry.appv1.api.Application.md#_onsearchfilter)

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

  Inherited from [Application](foundry.appv1.api.Application.md).[\_render](foundry.appv1.api.Application.md#_render)

### `Protected`\_restoreScrollPositions

* \_restoreScrollPositions(html: jQuery): void

  `Protected`

  Restore the scroll positions of containers within the app after re-rendering the content

  #### Parameters

  + html: jQuery

    The HTML object being traversed

  #### Returns void

  Inherited from [Application](foundry.appv1.api.Application.md).[\_restoreScrollPositions](foundry.appv1.api.Application.md#_restorescrollpositions)

### `Protected`\_saveScrollPositions

* \_saveScrollPositions(html: jQuery): void

  `Protected`

  Persist the scroll positions of containers within the app before re-rendering the content

  #### Parameters

  + html: jQuery

    The HTML object being traversed

  #### Returns void

  Inherited from [Application](foundry.appv1.api.Application.md).[\_saveScrollPositions](foundry.appv1.api.Application.md#_savescrollpositions)

### `Protected`\_waitForImages

* \_waitForImages(): Promise<void>

  `Protected`

  Wait for any images present in the Application to load.

  #### Returns Promise<void>

  A Promise that resolves when all images have loaded.

  Inherited from [Application](foundry.appv1.api.Application.md).[\_waitForImages](foundry.appv1.api.Application.md#_waitforimages)

### `Static`\_getInheritanceChain

* \_getInheritanceChain(): Function[]

  `Internal`

  Return the inheritance chain for this Application class up to (and including) it's base Application class.

  #### Returns Function[]

  Inherited from [Application](foundry.appv1.api.Application.md).[\_getInheritanceChain](foundry.appv1.api.Application.md#_getinheritancechain)

### `Static`confirm

* confirm(config?: [DialogData](../interfaces/foundry.DialogData.md) & [DialogV1ConfirmOptions](../interfaces/foundry.DialogV1ConfirmOptions.md)): Promise<any>

  A helper factory method to create simple confirmation dialog windows which consist of simple yes/no prompts.
  If you require more flexibility, a custom Dialog instance is preferred.

  #### Parameters

  + `Optional`config: [DialogData](../interfaces/foundry.DialogData.md) & [DialogV1ConfirmOptions](../interfaces/foundry.DialogV1ConfirmOptions.md) = {}

    Dialog configuration options

  #### Returns Promise<any>

  A promise which resolves once the user makes a choice or closes the window

  #### Example: Prompt the user with a yes or no question

  ```
  let d = Dialog.confirm({  
   title: "A Yes or No Question",  
   content: "<p>Choose wisely.</p>",  
   yes: () => console.log("You chose ... wisely"),  
   no: () => console.log("You chose ... poorly"),  
   defaultYes: false  
  });
  Copy
  ```

### `Static`prompt

* prompt(config?: any): Promise<any>

  A helper factory method to display a basic "prompt" style Dialog with a single button

  #### Parameters

  + `Optional`config: any = {}

    Dialog configuration options

  #### Returns Promise<any>

  The returned value from the provided callback function, if any

### `Static`wait

* wait(  
  Â Â Â Â data?: [DialogData](../interfaces/foundry.DialogData.md),  
  Â Â Â Â options?: [ApplicationV1Options](../interfaces/foundry.ApplicationV1Options.md) & [DialogV1Options](../interfaces/foundry.DialogV1Options.md),  
  Â Â Â Â renderOptions?: object,  
  ): Promise<any>

  Wrap the Dialog with an enclosing Promise which resolves or rejects when the client makes a choice.

  #### Parameters

  + `Optional`data: [DialogData](../interfaces/foundry.DialogData.md) = {}

    Data passed to the Dialog constructor.
  + `Optional`options: [ApplicationV1Options](../interfaces/foundry.ApplicationV1Options.md) & [DialogV1Options](../interfaces/foundry.DialogV1Options.md) = {}

    Options passed to the Dialog constructor.
  + `Optional`renderOptions: object = {}

    Options passed to the Dialog render call.

  #### Returns Promise<any>

  A Promise that resolves to the chosen result.