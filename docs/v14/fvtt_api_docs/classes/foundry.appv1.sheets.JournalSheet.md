---
title: "JournalSheet | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.appv1.sheets.JournalSheet.html"
category: "classes"
---

# Class JournalSheet

The Application responsible for displaying and editing a single JournalEntry document.

#### Deprecated

since v13

#### Param: object

The JournalEntry instance which is being edited

#### Param: options

Application options

#### Hierarchy ([View Summary](../hierarchy.md#foundry.appv1.sheets.JournalSheet))

* [DocumentSheet](foundry.appv1.api.DocumentSheet.md)
  + JournalSheet

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
[editors](#editors)
[form](#form)
[object](#object)
[options](#options)
[position](#position)
[\_pages](#_pages)
[\_priorState](#_priorstate)
[\_secrets](#_secrets)
[\_state](#_state)
[INTERSECTION\_RATIO](#intersection_ratio)
[OWNERSHIP\_ICONS](#ownership_icons)
[RENDER\_STATES](#render_states)
[VIEW\_MODES](#view_modes)

### Accessors

[closing](#closing)
[document](#document)
[element](#element)
[id](#id)
[isEditable](#iseditable)
[mode](#mode)
[observer](#observer)
[pageIndex](#pageindex)
[pagesInView](#pagesinview)
[popOut](#popout)
[rendered](#rendered)
[searchMode](#searchmode)
[sidebarCollapsed](#sidebarcollapsed)
[template](#template)
[title](#title)
[defaultOptions](#defaultoptions)
[\_customElements](#_customelements)

### Methods

[\_activateCoreListeners](#_activatecorelisteners)
[\_canDragDrop](#_candragdrop)
[\_canDragStart](#_candragstart)
[\_contextMenu](#_contextmenu)
[\_createDragDropHandlers](#_createdragdrophandlers)
[\_createSearchFilters](#_createsearchfilters)
[\_createTabHandlers](#_createtabhandlers)
[\_getHeaderButtons](#_getheaderbuttons)
[\_injectHTML](#_injecthtml)
[\_onDragStart](#_ondragstart)
[\_onDrop](#_ondrop)
[\_onResize](#_onresize)
[\_onSearchFilter](#_onsearchfilter)
[\_onShowPlayers](#_onshowplayers)
[\_onToggleMinimize](#_ontoggleminimize)
[\_render](#_render)
[\_renderInner](#_renderinner)
[\_renderOuter](#_renderouter)
[\_replaceHTML](#_replacehtml)
[\_updateObject](#_updateobject)
[activateEditor](#activateeditor)
[activateListeners](#activatelisteners)
[activateTab](#activatetab)
[bringToFront](#bringtofront)
[bringToTop](#bringtotop)
[close](#close)
[createPage](#createpage)
[getData](#getdata)
[getPageSheet](#getpagesheet)
[goToPage](#gotopage)
[isPageVisible](#ispagevisible)
[maximize](#maximize)
[minimize](#minimize)
[nextPage](#nextpage)
[previousPage](#previouspage)
[render](#render)
[saveEditor](#saveeditor)
[setPosition](#setposition)
[submit](#submit)
[toggleSearchMode](#togglesearchmode)
[toggleSidebar](#togglesidebar)
[\_activateEditor](#_activateeditor)
[\_activatePageListeners](#_activatepagelisteners)
[\_activatePagesInView](#_activatepagesinview)
[\_callHooks](#_callhooks)
[\_canUserView](#_canuserview)
[\_configureProseMirrorPlugins](#_configureprosemirrorplugins)
[\_createDocumentIdLink](#_createdocumentidlink)
[\_createSecretHandlers](#_createsecrethandlers)
[\_disableFields](#_disablefields)
[\_getCurrentPage](#_getcurrentpage)
[\_getEntryContextOptions](#_getentrycontextoptions)
[\_getPageData](#_getpagedata)
[\_getSecretContent](#_getsecretcontent)
[\_getSubmitData](#_getsubmitdata)
[\_observeHeadings](#_observeheadings)
[\_observePages](#_observepages)
[\_onAction](#_onaction)
[\_onChangeColorPicker](#_onchangecolorpicker)
[\_onChangeInput](#_onchangeinput)
[\_onChangeRange](#_onchangerange)
[\_onChangeTab](#_onchangetab)
[\_onClickImage](#_onclickimage)
[\_onClickPageLink](#_onclickpagelink)
[\_onConfigureSheet](#_onconfiguresheet)
[\_onContextMenuClose](#_oncontextmenuclose)
[\_onContextMenuOpen](#_oncontextmenuopen)
[\_onDragOver](#_ondragover)
[\_onEditImage](#_oneditimage)
[\_onEditPage](#_oneditpage)
[\_onPageScroll](#_onpagescroll)
[\_onSubmit](#_onsubmit)
[\_renderAppV1PageView](#_renderappv1pageview)
[\_renderHeadings](#_renderheadings)
[\_renderPageView](#_renderpageview)
[\_renderPageViews](#_renderpageviews)
[\_restoreScrollPositions](#_restorescrollpositions)
[\_saveScrollPositions](#_savescrollpositions)
[\_synchronizeSidebar](#_synchronizesidebar)
[\_updateButtonState](#_updatebuttonstate)
[\_updateSecret](#_updatesecret)
[\_waitForImages](#_waitforimages)
[\_getInheritanceChain](#_getinheritancechain)

## Constructors

### constructor

* new JournalSheet(  
  Â Â Â Â object: [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>,  
  Â Â Â Â options?: any,  
  ): JournalSheet

  #### Parameters

  + object: [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>

    A Document instance which should be managed by this form.
  + `Optional`options: any = {}

    Optional configuration parameters for how the
    form behaves.

  #### Returns JournalSheet

  Inherited from [DocumentSheet](foundry.appv1.api.DocumentSheet.md).[constructor](foundry.appv1.api.DocumentSheet.md#constructor)

## Properties

### `Internal`\_dragDrop

\_dragDrop: [DragDrop](foundry.applications.ux.DragDrop.md)[]

DragDrop workflow handlers which are active for this Application

Inherited from JournalSheet.[\_dragDrop](#_dragdrop)

### `Internal`\_element

\_element: jQuery

An internal reference to the HTML element this application renders

Inherited from JournalSheet.[\_element](#_element)

### `Internal`\_minimized

\_minimized: boolean | null

Track whether the Application is currently minimized

Inherited from JournalSheet.[\_minimized](#_minimized)

### `Internal`\_scrollPositions

\_scrollPositions: object | null

Track the most recent scroll positions for any vertically scrolling containers

Inherited from JournalSheet.[\_scrollPositions](#_scrollpositions)

### `Internal`\_searchFilters

\_searchFilters: [SearchFilter](foundry.applications.ux.SearchFilter.md)[]

SearchFilter handlers which are active for this Application

Inherited from JournalSheet.[\_searchFilters](#_searchfilters)

### `Internal`\_tabs

\_tabs: [Tabs](foundry.applications.ux.Tabs.md)[]

Tab navigation handlers which are active for this Application

Inherited from JournalSheet.[\_tabs](#_tabs)

### appId

appId: number

The application ID is a unique incrementing integer which is used to identify every application window
drawn by the VTT

Inherited from [DocumentSheet](foundry.appv1.api.DocumentSheet.md).[appId](foundry.appv1.api.DocumentSheet.md#appid)

### editors

editors: Record<string, object>

Keep track of any mce editors which may be active as part of this form
The values of this object are inner-objects with references to the MCE editor and other metadata

Inherited from [DocumentSheet](foundry.appv1.api.DocumentSheet.md).[editors](foundry.appv1.api.DocumentSheet.md#editors)

### form

form: HTMLElement

A convenience reference to the form HTMLElement

Inherited from [DocumentSheet](foundry.appv1.api.DocumentSheet.md).[form](foundry.appv1.api.DocumentSheet.md#form)

### object

object: any

The object target which we are using this form to modify

Inherited from [DocumentSheet](foundry.appv1.api.DocumentSheet.md).[object](foundry.appv1.api.DocumentSheet.md#object)

### options

options: object

The options provided to this application upon initialization

Inherited from [DocumentSheet](foundry.appv1.api.DocumentSheet.md).[options](foundry.appv1.api.DocumentSheet.md#options)

### position

position: object

Track the current position and dimensions of the Application UI

Inherited from JournalSheet.[position](#position)

### `Protected`\_pages

\_pages: object[]

The cached list of processed page entries.
This array is populated in the getData method.

### `Protected`\_priorState

\_priorState: number

The prior render state of this Application.
This allows for rendering logic to understand if the application is being rendered for the first time.

#### See

Inherited from JournalSheet.[\_priorState](#_priorstate)

### `Protected`\_secrets

\_secrets: [HTMLSecret](foundry.applications.ux.HTMLSecret.md)[]

The list of handlers for secret block functionality.

Inherited from [DocumentSheet](foundry.appv1.api.DocumentSheet.md).[\_secrets](foundry.appv1.api.DocumentSheet.md#_secrets)

### `Protected`\_state

\_state: number

The current render state of the Application

#### See

[Application.RENDER\_STATES](foundry.appv1.api.Application.md#render_states)

Inherited from JournalSheet.[\_state](#_state)

### `Static`INTERSECTION\_RATIO

INTERSECTION\_RATIO: number = .25

The minimum amount of content that must be visible before the next page is marked as in view. Cannot be less than
25% without also modifying the IntersectionObserver threshold.

### `Static`OWNERSHIP\_ICONS

OWNERSHIP\_ICONS: { "0": string; "2": string; "3": string } = ...

Icons for page ownership.

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

Inherited from [DocumentSheet](foundry.appv1.api.DocumentSheet.md).[RENDER\_STATES](foundry.appv1.api.DocumentSheet.md#render_states)

### `Static`VIEW\_MODES

VIEW\_MODES: { MULTIPLE: number; SINGLE: number } = ...

Available view modes for journal entries.

## Accessors

### closing

* get closing(): boolean

  Whether the Application is currently closing.

  #### Returns boolean

  Inherited from [JournalTextPageSheet](foundry.appv1.sheets.JournalTextPageSheet.md).[closing](foundry.appv1.sheets.JournalTextPageSheet.md#closing)

### document

* get document(): ClientDocument

  A semantic convenience reference to the Document instance which is the target object for this form.

  #### Returns ClientDocument

  Inherited from DocumentSheet.document

### element

* get element(): jQuery

  Return the active application element, if it currently exists in the DOM

  #### Returns jQuery

  Inherited from [JournalTextPageSheet](foundry.appv1.sheets.JournalTextPageSheet.md).[element](foundry.appv1.sheets.JournalTextPageSheet.md#element)

### id

* get id(): string

  Return the CSS application ID which uniquely references this UI element

  #### Returns string

  Inherited from DocumentSheet.id

### isEditable

* get isEditable(): any

  Is the Form Application currently editable?

  #### Returns any

  Inherited from DocumentSheet.isEditable

### mode

* get mode(): number

  Get the journal entry's current view mode.

  #### Returns number

  #### See

  [JournalSheet.VIEW\_MODES](#view_modes)

### observer

* get observer(): IntersectionObserver

  The currently active IntersectionObserver.

  #### Returns IntersectionObserver

### pageIndex

* get pageIndex(): number

  The index of the currently viewed page.

  #### Returns number

### pagesInView

* get pagesInView(): HTMLElement[]

  The pages that are currently scrolled into view and marked as 'active' in the sidebar.

  #### Returns HTMLElement[]

### popOut

* get popOut(): boolean

  Control the rendering style of the application. If popOut is true, the application is rendered in its own
  wrapper window, otherwise only the inner app content is rendered

  #### Returns boolean

  Inherited from [JournalTextPageSheet](foundry.appv1.sheets.JournalTextPageSheet.md).[popOut](foundry.appv1.sheets.JournalTextPageSheet.md#popout)

### rendered

* get rendered(): boolean

  Return a flag for whether the Application instance is currently rendered

  #### Returns boolean

  Inherited from [JournalTextPageSheet](foundry.appv1.sheets.JournalTextPageSheet.md).[rendered](foundry.appv1.sheets.JournalTextPageSheet.md#rendered)

### searchMode

* get searchMode(): string

  The current search mode for this journal

  #### Returns string

### sidebarCollapsed

* get sidebarCollapsed(): boolean

  Is the table-of-contents sidebar currently collapsed?

  #### Returns boolean

### template

* get template(): string

  The path to the HTML template file which should be used to render the inner content of the app

  #### Returns string

  Inherited from DocumentSheet.template

### title

* get title(): string

  An Application window should define its own title definition logic which may be dynamic depending on its data

  #### Returns string

  Overrides DocumentSheet.title

### `Static`defaultOptions

* get defaultOptions(): [JournalSheetOptions](../interfaces/foundry.JournalSheetOptions.md) & [DocumentSheetV1Options](../interfaces/foundry.DocumentSheetV1Options.md) & [ApplicationV1Options](../interfaces/foundry.ApplicationV1Options.md)

  #### Returns [JournalSheetOptions](../interfaces/foundry.JournalSheetOptions.md) & [DocumentSheetV1Options](../interfaces/foundry.DocumentSheetV1Options.md) & [ApplicationV1Options](../interfaces/foundry.ApplicationV1Options.md)

  Overrides DocumentSheet.defaultOptions

### `Protected` `Static`\_customElements

* get \_customElements(): string[]

  `Protected`

  An array of custom element tag names that should be listened to for changes.

  #### Returns string[]

  Inherited from DocumentSheet.\_customElements

## Methods

### \_activateCoreListeners

* \_activateCoreListeners(html: any): void

  Activate required listeners which must be enabled on every Application.
  These are internal interactions which should not be overridden by downstream subclasses.

  #### Parameters

  + html: any

  #### Returns void

  Inherited from [DocumentSheet](foundry.appv1.api.DocumentSheet.md).[\_activateCoreListeners](foundry.appv1.api.DocumentSheet.md#_activatecorelisteners)

### \_canDragDrop

* \_canDragDrop(selector: any): any

  Define whether a user is able to conclude a drag-and-drop workflow for a given drop selector

  #### Parameters

  + selector: any

    The candidate HTML selector for the drop target

  #### Returns any

  Can the current user drop on this selector?

  Overrides [DocumentSheet](foundry.appv1.api.DocumentSheet.md).[\_canDragDrop](foundry.appv1.api.DocumentSheet.md#_candragdrop)

### \_canDragStart

* \_canDragStart(selector: any): any

  Define whether a user is able to begin a dragstart workflow for a given drag selector

  #### Parameters

  + selector: any

    The candidate HTML selector for dragging

  #### Returns any

  Can the current user drag this selector?

  Overrides [DocumentSheet](foundry.appv1.api.DocumentSheet.md).[\_canDragStart](foundry.appv1.api.DocumentSheet.md#_candragstart)

### \_contextMenu

* \_contextMenu(html: any): void

  `Internal`

  Create a [foundry.applications.ux.ContextMenu](foundry.applications.ux.ContextMenu.md) for this Application.

  #### Parameters

  + html: any

    The Application's HTML.

  #### Returns void

  Overrides [DocumentSheet](foundry.appv1.api.DocumentSheet.md).[\_contextMenu](foundry.appv1.api.DocumentSheet.md#_contextmenu)

### \_createDragDropHandlers

* \_createDragDropHandlers(): [DragDrop](foundry.applications.ux.DragDrop.md)[]

  `Internal`

  Create drag-and-drop workflow handlers for this Application

  #### Returns [DragDrop](foundry.applications.ux.DragDrop.md)[]

  An array of DragDrop handlers

  Inherited from [DocumentSheet](foundry.appv1.api.DocumentSheet.md).[\_createDragDropHandlers](foundry.appv1.api.DocumentSheet.md#_createdragdrophandlers)

### \_createSearchFilters

* \_createSearchFilters(): [SearchFilter](foundry.applications.ux.SearchFilter.md)[]

  `Internal`

  Create search filter handlers for this Application

  #### Returns [SearchFilter](foundry.applications.ux.SearchFilter.md)[]

  An array of SearchFilter handlers

  Inherited from [DocumentSheet](foundry.appv1.api.DocumentSheet.md).[\_createSearchFilters](foundry.appv1.api.DocumentSheet.md#_createsearchfilters)

### \_createTabHandlers

* \_createTabHandlers(): [Tabs](foundry.applications.ux.Tabs.md)[]

  `Internal`

  Create tabbed navigation handlers for this Application

  #### Returns [Tabs](foundry.applications.ux.Tabs.md)[]

  An array of Tabs handlers

  Inherited from [DocumentSheet](foundry.appv1.api.DocumentSheet.md).[\_createTabHandlers](foundry.appv1.api.DocumentSheet.md#_createtabhandlers)

### \_getHeaderButtons

* \_getHeaderButtons(): [ApplicationV1HeaderButton](../types/foundry.ApplicationV1HeaderButton.md)[]

  Specify the set of config buttons which should appear in the Application header.
  Buttons should be returned as an Array of objects.
  The header buttons which are added to the application can be modified by the getApplicationV1HeaderButtons hook.

  #### Returns [ApplicationV1HeaderButton](../types/foundry.ApplicationV1HeaderButton.md)[]

  #### Fires

  getApplicationHeaderButtons

  Overrides [DocumentSheet](foundry.appv1.api.DocumentSheet.md).[\_getHeaderButtons](foundry.appv1.api.DocumentSheet.md#_getheaderbuttons)

### \_injectHTML

* \_injectHTML(html: jQuery): void

  `Internal`

  Customize how a new HTML Application is added and first appears in the DOM

  #### Parameters

  + html: jQuery

    The HTML element which is ready to be added to the DOM

  #### Returns void

  Inherited from [DocumentSheet](foundry.appv1.api.DocumentSheet.md).[\_injectHTML](foundry.appv1.api.DocumentSheet.md#_injecthtml)

### \_onDragStart

* \_onDragStart(event: any): void

  Callback actions which occur at the beginning of a drag start workflow.

  #### Parameters

  + event: any

    The originating DragEvent

  #### Returns void

  Overrides [DocumentSheet](foundry.appv1.api.DocumentSheet.md).[\_onDragStart](foundry.appv1.api.DocumentSheet.md#_ondragstart)

### \_onDrop

* \_onDrop(event: any): Promise<any>

  Callback actions which occur when a dragged element is dropped on a target.

  #### Parameters

  + event: any

    The originating DragEvent

  #### Returns Promise<any>

  Overrides [DocumentSheet](foundry.appv1.api.DocumentSheet.md).[\_onDrop](foundry.appv1.api.DocumentSheet.md#_ondrop)

### \_onResize

* \_onResize(event: Event): void

  `Internal`

  Additional actions to take when the application window is resized

  #### Parameters

  + event: Event

  #### Returns void

  Inherited from [DocumentSheet](foundry.appv1.api.DocumentSheet.md).[\_onResize](foundry.appv1.api.DocumentSheet.md#_onresize)

### \_onSearchFilter

* \_onSearchFilter(event: any, query: any, rgx: any, html: any): void

  Handle changes to search filtering controllers which are bound to the Application

  #### Parameters

  + event: any

    The key-up event from keyboard input
  + query: any

    The raw string input to the search field
  + rgx: any

    The regular expression to test against
  + html: any

    The HTML element which should be filtered

  #### Returns void

  Overrides [DocumentSheet](foundry.appv1.api.DocumentSheet.md).[\_onSearchFilter](foundry.appv1.api.DocumentSheet.md#_onsearchfilter)

### \_onShowPlayers

* \_onShowPlayers(event: Event): Promise<void>

  Handle requests to show the referenced Journal Entry to other Users
  Save the form before triggering the show request, in case content has changed

  #### Parameters

  + event: Event

    The triggering click event

  #### Returns Promise<void>

### \_onToggleMinimize

* \_onToggleMinimize(ev: Event): void

  `Internal`

  Handle application minimization behavior - collapsing content and reducing the size of the header

  #### Parameters

  + ev: Event

  #### Returns void

  Inherited from [DocumentSheet](foundry.appv1.api.DocumentSheet.md).[\_onToggleMinimize](foundry.appv1.api.DocumentSheet.md#_ontoggleminimize)

### \_render

* \_render(  
  Â Â Â Â force?: boolean,  
  Â Â Â Â options?: {  
  Â Â Â Â Â Â Â Â anchor?: string;  
  Â Â Â Â Â Â Â Â collapsed?: boolean;  
  Â Â Â Â Â Â Â Â mode?: number;  
  Â Â Â Â Â Â Â Â pageId?: string;  
  Â Â Â Â Â Â Â Â pageIndex?: number;  
  Â Â Â Â Â Â Â Â tempOwnership?: boolean;  
  Â Â Â Â },  
  ): Promise<void>

  #### Parameters

  + `Optional`force: boolean
  + `Optional`options: {  
    Â Â Â Â anchor?: string;  
    Â Â Â Â collapsed?: boolean;  
    Â Â Â Â mode?: number;  
    Â Â Â Â pageId?: string;  
    Â Â Â Â pageIndex?: number;  
    Â Â Â Â tempOwnership?: boolean;  
    } = {}
    - ##### `Optional`anchor?: string

      Render the sheet with the given anchor for the given page in view.
    - ##### `Optional`collapsed?: boolean

      Render the sheet with the TOC sidebar collapsed?
    - ##### `Optional`mode?: number

      Render the sheet in a given view mode, see [JournalSheet.VIEW\_MODES](#view_modes).
    - ##### `Optional`pageId?: string

      Render the sheet with the page with the given ID in view.
    - ##### `Optional`pageIndex?: number

      Render the sheet with the page at the given index in view.
    - ##### `Optional`tempOwnership?: boolean

      Whether the journal entry or one of its pages is being shown to players
      who might otherwise not have permission to view it.

  #### Returns Promise<void>

  Overrides [DocumentSheet](foundry.appv1.api.DocumentSheet.md).[\_render](foundry.appv1.api.DocumentSheet.md#_render)

### \_renderInner

* \_renderInner(...args: any[]): Promise<jQuery>

  `Internal`

  Render the inner application content

  #### Parameters

  + ...args: any[]

    The data used to render the inner template

  #### Returns Promise<jQuery>

  A promise resolving to the constructed jQuery object

  Inherited from [DocumentSheet](foundry.appv1.api.DocumentSheet.md).[\_renderInner](foundry.appv1.api.DocumentSheet.md#_renderinner)

### \_renderOuter

* \_renderOuter(): Promise<jQuery>

  Render the outer application wrapper

  #### Returns Promise<jQuery>

  A promise resolving to the constructed jQuery object

  Inherited from [DocumentSheet](foundry.appv1.api.DocumentSheet.md).[\_renderOuter](foundry.appv1.api.DocumentSheet.md#_renderouter)

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

  Inherited from [DocumentSheet](foundry.appv1.api.DocumentSheet.md).[\_replaceHTML](foundry.appv1.api.DocumentSheet.md#_replacehtml)

### \_updateObject

* \_updateObject(event: any, formData: any): Promise<any>

  This method is called upon form submission after form data is validated

  #### Parameters

  + event: any

    The initial triggering submission event
  + formData: any

    The object of validated form data with which to update the object

  #### Returns Promise<any>

  A Promise which resolves once the update operation has completed

  Overrides [DocumentSheet](foundry.appv1.api.DocumentSheet.md).[\_updateObject](foundry.appv1.api.DocumentSheet.md#_updateobject)

### activateEditor

* activateEditor(  
  Â Â Â Â name: any,  
  Â Â Â Â options?: {},  
  Â Â Â Â initialContent?: string,  
  ): Promise<EditorView>

  Activate a named text editor

  #### Parameters

  + name: any

    The named data field which the editor modifies.
  + options: {} = {}

    Editor initialization options passed to
    [foundry.applications.ux.TextEditor.create](foundry.applications.ux.TextEditor.md#create).
  + initialContent: string = ""

    Initial text content for the editor area.

  #### Returns Promise<EditorView>

  Inherited from [DocumentSheet](foundry.appv1.api.DocumentSheet.md).[activateEditor](foundry.appv1.api.DocumentSheet.md#activateeditor)

### activateListeners

* activateListeners(html: any): void

  After rendering, activate event listeners which provide interactivity for the Application.
  This is where user-defined Application subclasses should attach their event-handling logic.

  #### Parameters

  + html: any

  #### Returns void

  Overrides [DocumentSheet](foundry.appv1.api.DocumentSheet.md).[activateListeners](foundry.appv1.api.DocumentSheet.md#activatelisteners)

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

  Inherited from [DocumentSheet](foundry.appv1.api.DocumentSheet.md).[activateTab](foundry.appv1.api.DocumentSheet.md#activatetab)

### bringToFront

* bringToFront(): void

  A convenience alias for [bringToTop](foundry.appv1.api.Application.md#bringtotop) for when operating on an object that is either an Application or an
  [ApplicationV2](foundry.applications.api.ApplicationV2.md)

  #### Returns void

  Inherited from [DocumentSheet](foundry.appv1.api.DocumentSheet.md).[bringToFront](foundry.appv1.api.DocumentSheet.md#bringtofront)

### bringToTop

* bringToTop(): void

  Bring the application to the top of the rendering stack

  #### Returns void

  Inherited from [DocumentSheet](foundry.appv1.api.DocumentSheet.md).[bringToTop](foundry.appv1.api.DocumentSheet.md#bringtotop)

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

  Overrides [DocumentSheet](foundry.appv1.api.DocumentSheet.md).[close](foundry.appv1.api.DocumentSheet.md#close)

### createPage

* createPage(): any

  Prompt the user with a Dialog for creation of a new JournalEntryPage

  #### Returns any

### getData

* getData(  
  Â Â Â Â options?: {},  
  ): {  
  Â Â Â Â cssClass: string;  
  Â Â Â Â data: any;  
  Â Â Â Â document: ClientDocument;  
  Â Â Â Â editable: any;  
  Â Â Â Â limited: any;  
  Â Â Â Â options: object;  
  Â Â Â Â owner: any;  
  Â Â Â Â title: string;  
  }

  An application should define the data object used to render its template.
  This function may either return an Object directly, or a Promise which resolves to an Object
  If undefined, the default implementation will return an empty object allowing only for rendering of static HTML

  #### Parameters

  + options: {} = {}

  #### Returns { Â Â Â Â cssClass: string; Â Â Â Â data: any; Â Â Â Â document: ClientDocument; Â Â Â Â editable: any; Â Â Â Â limited: any; Â Â Â Â options: object; Â Â Â Â owner: any; Â Â Â Â title: string; }

  Overrides [DocumentSheet](foundry.appv1.api.DocumentSheet.md).[getData](foundry.appv1.api.DocumentSheet.md#getdata)

### getPageSheet

* getPageSheet(pageId: string): [JournalPageSheet](foundry.appv1.sheets.JournalPageSheet.md)

  Retrieve the sheet instance for rendering this page inline.

  #### Parameters

  + pageId: string

    The ID of the page.

  #### Returns [JournalPageSheet](foundry.appv1.sheets.JournalPageSheet.md)

### goToPage

* goToPage(pageId: string, anchor?: string): [Application](foundry.appv1.api.Application.md) | undefined

  Turn to a specific page.

  #### Parameters

  + pageId: string

    The ID of the page to turn to.
  + `Optional`anchor: string

    Optionally an anchor slug to focus within that page.

  #### Returns [Application](foundry.appv1.api.Application.md) | undefined

### isPageVisible

* isPageVisible(page: [documents](../modules/foundry.documents.md).[JournalEntryPage](foundry.documents.JournalEntryPage.md)): boolean

  Determine whether a page is visible to the current user.

  #### Parameters

  + page: [documents](../modules/foundry.documents.md).[JournalEntryPage](foundry.documents.JournalEntryPage.md)

    The page.

  #### Returns boolean

### maximize

* maximize(): Promise<void>

  Maximize the pop-out window, expanding it to its original size
  Take no action for applications which are not of the pop-out variety or are already maximized

  #### Returns Promise<void>

  A Promise which resolves once the maximization action has completed

  Inherited from [DocumentSheet](foundry.appv1.api.DocumentSheet.md).[maximize](foundry.appv1.api.DocumentSheet.md#maximize)

### minimize

* minimize(): Promise<void>

  Minimize the pop-out window, collapsing it to a small tab
  Take no action for applications which are not of the pop-out variety or apps which are already minimized

  #### Returns Promise<void>

  A Promise which resolves once the minimization action has completed

  Inherited from [DocumentSheet](foundry.appv1.api.DocumentSheet.md).[minimize](foundry.appv1.api.DocumentSheet.md#minimize)

### nextPage

* nextPage(): [Application](foundry.appv1.api.Application.md) | undefined

  Turn to the next page.

  #### Returns [Application](foundry.appv1.api.Application.md) | undefined

### previousPage

* previousPage(): [Application](foundry.appv1.api.Application.md) | undefined

  Turn to the previous page.

  #### Returns [Application](foundry.appv1.api.Application.md) | undefined

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

  Inherited from [DocumentSheet](foundry.appv1.api.DocumentSheet.md).[render](foundry.appv1.api.DocumentSheet.md#render)

### saveEditor

* saveEditor(  
  Â Â Â Â name: string,  
  Â Â Â Â options?: { preventRender?: boolean; remove?: boolean },  
  ): Promise<void>

  Handle saving the content of a specific editor by name

  #### Parameters

  + name: string

    The named editor to save
  + `Optional`options: { preventRender?: boolean; remove?: boolean } = {}
    - ##### `Optional`preventRender?: boolean

      Prevent normal re-rendering of the sheet after saving.
    - ##### `Optional`remove?: boolean

      Remove the editor after saving its content

  #### Returns Promise<void>

  Inherited from [DocumentSheet](foundry.appv1.api.DocumentSheet.md).[saveEditor](foundry.appv1.api.DocumentSheet.md#saveeditor)

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

  Inherited from [DocumentSheet](foundry.appv1.api.DocumentSheet.md).[setPosition](foundry.appv1.api.DocumentSheet.md#setposition)

### submit

* submit(options?: object): Promise<JournalSheet>

  Submit the contents of a Form Application, processing its content as defined by the Application

  #### Parameters

  + `Optional`options: object = {}

    Options passed to the \_onSubmit event handler

  #### Returns Promise<JournalSheet>

  Return a self-reference for convenient method chaining

  Inherited from [DocumentSheet](foundry.appv1.api.DocumentSheet.md).[submit](foundry.appv1.api.DocumentSheet.md#submit)

### toggleSearchMode

* toggleSearchMode(): void

  Toggle the search mode for this journal between "name" and "full" text search

  #### Returns void

### toggleSidebar

* toggleSidebar(): void

  Toggle the collapsed or expanded state of the Journal Entry table-of-contents sidebar.

  #### Returns void

### `Protected`\_activateEditor

* \_activateEditor(div: HTMLElement): void

  `Protected`

  Activate an editor instance present within the form

  #### Parameters

  + div: HTMLElement

    The element which contains the editor

  #### Returns void

  Inherited from [DocumentSheet](foundry.appv1.api.DocumentSheet.md).[\_activateEditor](foundry.appv1.api.DocumentSheet.md#_activateeditor)

### `Protected`\_activatePageListeners

* \_activatePageListeners(): void

  `Protected`

  Activate listeners after page content has been injected.

  #### Returns void

### `Protected`\_activatePagesInView

* \_activatePagesInView(): void

  `Protected`

  Highlights the currently viewed page in the sidebar.

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

  Inherited from [DocumentSheet](foundry.appv1.api.DocumentSheet.md).[\_callHooks](foundry.appv1.api.DocumentSheet.md#_callhooks)

### `Protected`\_canUserView

* \_canUserView(user: User): boolean

  `Protected`

  Test whether a certain User has permission to view this Document Sheet.

  #### Parameters

  + user: User

    The user requesting to render the sheet

  #### Returns boolean

  Does the User have permission to view this sheet?

  Inherited from [DocumentSheet](foundry.appv1.api.DocumentSheet.md).[\_canUserView](foundry.appv1.api.DocumentSheet.md#_canuserview)

### `Protected`\_configureProseMirrorPlugins

* \_configureProseMirrorPlugins(  
  Â Â Â Â name: string,  
  Â Â Â Â options?: { remove?: boolean },  
  ): object

  `Protected`

  Configure ProseMirror plugins for this sheet.

  #### Parameters

  + name: string

    The name of the editor.
  + `Optional`options: { remove?: boolean } = {}

    Additional options to configure the plugins.

    - ##### `Optional`remove?: boolean

      Whether the editor should destroy itself on save.

  #### Returns object

  Inherited from [DocumentSheet](foundry.appv1.api.DocumentSheet.md).[\_configureProseMirrorPlugins](foundry.appv1.api.DocumentSheet.md#_configureprosemirrorplugins)

### `Protected`\_createDocumentIdLink

* \_createDocumentIdLink(html: jQuery): void

  `Protected`

  Create an ID link button in the document sheet header which displays the document ID and copies to clipboard

  #### Parameters

  + html: jQuery

  #### Returns void

  Inherited from [DocumentSheet](foundry.appv1.api.DocumentSheet.md).[\_createDocumentIdLink](foundry.appv1.api.DocumentSheet.md#_createdocumentidlink)

### `Protected`\_createSecretHandlers

* \_createSecretHandlers(): [HTMLSecret](foundry.applications.ux.HTMLSecret.md)[]

  `Protected`

  Create objects for managing the functionality of secret blocks within this Document's content.

  #### Returns [HTMLSecret](foundry.applications.ux.HTMLSecret.md)[]

  Inherited from [DocumentSheet](foundry.appv1.api.DocumentSheet.md).[\_createSecretHandlers](foundry.appv1.api.DocumentSheet.md#_createsecrethandlers)

### `Protected`\_disableFields

* \_disableFields(form: HTMLElement): void

  `Protected`

  If the form is not editable, disable its input fields

  #### Parameters

  + form: HTMLElement

    The form HTML

  #### Returns void

  Inherited from [DocumentSheet](foundry.appv1.api.DocumentSheet.md).[\_disableFields](foundry.appv1.api.DocumentSheet.md#_disablefields)

### `Protected`\_getCurrentPage

* \_getCurrentPage(options?: { pageId?: string; pageIndex?: number }): number

  `Protected`

  Identify which page of the journal sheet should be currently rendered.
  This can be controlled by options passed into the render method or by a subclass override.

  #### Parameters

  + options: { pageId?: string; pageIndex?: number } = {}

    Sheet rendering options

    - ##### `Optional`pageId?: string

      The ID of a page to render
    - ##### `Optional`pageIndex?: number

      A numbered index of page to render

  #### Returns number

  The currently displayed page index

### `Protected`\_getEntryContextOptions

* \_getEntryContextOptions(): ContextMenuEntry[]

  `Protected`

  Get the set of ContextMenu options which should be used for JournalEntryPages in the sidebar.

  #### Returns ContextMenuEntry[]

  The Array of context options passed to the ContextMenu instance.

### `Protected`\_getPageData

* \_getPageData(): [documents](../modules/foundry.documents.md).[JournalEntryPage](foundry.documents.JournalEntryPage.md)[]

  `Protected`

  Prepare pages for display.

  #### Returns [documents](../modules/foundry.documents.md).[JournalEntryPage](foundry.documents.JournalEntryPage.md)[]

  The sorted list of pages.

### `Protected`\_getSecretContent

* \_getSecretContent(secret: HTMLElement): string | void

  `Protected`

  Get the HTML content that a given secret block is embedded in.

  #### Parameters

  + secret: HTMLElement

    The secret block.

  #### Returns string | void

  Inherited from [DocumentSheet](foundry.appv1.api.DocumentSheet.md).[\_getSecretContent](foundry.appv1.api.DocumentSheet.md#_getsecretcontent)

### `Protected`\_getSubmitData

* \_getSubmitData(updateData?: object): object

  `Protected`

  Get an object of update data used to update the form's target object

  #### Parameters

  + updateData: object = {}

    Additional data that should be merged with the form data

  #### Returns object

  The prepared update data

  Inherited from [DocumentSheet](foundry.appv1.api.DocumentSheet.md).[\_getSubmitData](foundry.appv1.api.DocumentSheet.md#_getsubmitdata)

### `Protected`\_observeHeadings

* \_observeHeadings(): void

  `Protected`

  Create an intersection observer to maintain a list of headings that are in view. This is much more performant than
  calling getBoundingClientRect on all headings whenever we want to determine this list.

  #### Returns void

### `Protected`\_observePages

* \_observePages(): void

  `Protected`

  Create an intersection observer to maintain a list of pages that are in view.

  #### Returns void

### `Protected`\_onAction

* \_onAction(event: TriggeredEvent): any

  `Protected`

  Handle clicking the previous and next page buttons.

  #### Parameters

  + event: TriggeredEvent

    The button click event.

  #### Returns any

### `Protected`\_onChangeColorPicker

* \_onChangeColorPicker(event: Event): void

  `Protected`

  Handle the change of a color picker input which enters it's chosen value into a related input field

  #### Parameters

  + event: Event

    The color picker change event

  #### Returns void

  Inherited from [DocumentSheet](foundry.appv1.api.DocumentSheet.md).[\_onChangeColorPicker](foundry.appv1.api.DocumentSheet.md#_onchangecolorpicker)

### `Protected`\_onChangeInput

* \_onChangeInput(event: Event): Promise<any>

  `Protected`

  Handle changes to an input element, submitting the form if options.submitOnChange is true.
  Do not preventDefault in this handler as other interactions on the form may also be occurring.

  #### Parameters

  + event: Event

    The initial change event

  #### Returns Promise<any>

  Inherited from [DocumentSheet](foundry.appv1.api.DocumentSheet.md).[\_onChangeInput](foundry.appv1.api.DocumentSheet.md#_onchangeinput)

### `Protected`\_onChangeRange

* \_onChangeRange(event: Event): void

  `Protected`

  Handle changes to a range type input by propagating those changes to the sibling range-value element

  #### Parameters

  + event: Event

    The initial change event

  #### Returns void

  Inherited from [DocumentSheet](foundry.appv1.api.DocumentSheet.md).[\_onChangeRange](foundry.appv1.api.DocumentSheet.md#_onchangerange)

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

  Inherited from [DocumentSheet](foundry.appv1.api.DocumentSheet.md).[\_onChangeTab](foundry.appv1.api.DocumentSheet.md#_onchangetab)

### `Protected`\_onClickImage

* \_onClickImage(event: MouseEvent): void

  `Protected`

  Handle clicking an image to pop it out for fullscreen view.

  #### Parameters

  + event: MouseEvent

    The click event.

  #### Returns void

### `Protected`\_onClickPageLink

* \_onClickPageLink(event: TriggeredEvent): void

  `Protected`

  Handle clicking an entry in the sidebar to scroll that heading into view.

  #### Parameters

  + event: TriggeredEvent

    The originating click event.

  #### Returns void

### `Protected`\_onConfigureSheet

* \_onConfigureSheet(event: ClickEvent): void

  `Protected`

  Handle requests to configure the default sheet used by this Document

  #### Parameters

  + event: ClickEvent

  #### Returns void

  Inherited from [DocumentSheet](foundry.appv1.api.DocumentSheet.md).[\_onConfigureSheet](foundry.appv1.api.DocumentSheet.md#_onconfiguresheet)

### `Protected`\_onContextMenuClose

* \_onContextMenuClose(target: HTMLElement): void

  `Protected`

  Handle closing the context menu.

  #### Parameters

  + target: HTMLElement

    The element the context menu has been triggered for.

  #### Returns void

### `Protected`\_onContextMenuOpen

* \_onContextMenuOpen(target: HTMLElement): void

  `Protected`

  Handle opening the context menu.

  #### Parameters

  + target: HTMLElement

    The element the context menu has been triggered for.

  #### Returns void

### `Protected`\_onDragOver

* \_onDragOver(event: DragEvent): void

  `Protected`

  Callback actions which occur when a dragged element is over a drop target.

  #### Parameters

  + event: DragEvent

    The originating DragEvent

  #### Returns void

  Inherited from [DocumentSheet](foundry.appv1.api.DocumentSheet.md).[\_onDragOver](foundry.appv1.api.DocumentSheet.md#_ondragover)

### `Protected`\_onEditImage

* \_onEditImage(event: MouseEvent): Promise<[FilePicker](foundry.applications.apps.FilePicker.md)>

  `Protected`

  Handle changing a Document's image.

  #### Parameters

  + event: MouseEvent

    The click event.

  #### Returns Promise<[FilePicker](foundry.applications.apps.FilePicker.md)>

  Inherited from [DocumentSheet](foundry.appv1.api.DocumentSheet.md).[\_onEditImage](foundry.appv1.api.DocumentSheet.md#_oneditimage)

### `Protected`\_onEditPage

* \_onEditPage(event: TriggeredEvent): any

  `Protected`

  Edit one of this JournalEntry's JournalEntryPages.

  #### Parameters

  + event: TriggeredEvent

    The originating page edit event.

  #### Returns any

### `Protected`\_onPageScroll

* \_onPageScroll(  
  Â Â Â Â entries: IntersectionObserverEntry[],  
  Â Â Â Â observer: IntersectionObserver,  
  ): void

  `Protected`

  Handle new pages scrolling into view.

  #### Parameters

  + entries: IntersectionObserverEntry[]

    An Array of elements that have scrolled into or out of view.
  + observer: IntersectionObserver

    The IntersectionObserver that invoked this callback.

  #### Returns void

### `Protected`\_onSubmit

* \_onSubmit(  
  Â Â Â Â event: Event,  
  Â Â Â Â options?: {  
  Â Â Â Â Â Â Â Â preventClose?: boolean;  
  Â Â Â Â Â Â Â Â preventRender?: boolean;  
  Â Â Â Â Â Â Â Â updateData?: object | null;  
  Â Â Â Â },  
  ): Promise<any>

  `Protected`

  Handle standard form submission steps

  #### Parameters

  + event: Event

    The submit event which triggered this handler
  + options: { preventClose?: boolean; preventRender?: boolean; updateData?: object | null } = {}
    - ##### `Optional`preventClose?: boolean

      Override the standard behavior of whether to close the form on submit
    - ##### `Optional`preventRender?: boolean

      Prevent the application from re-rendering as a result of form submission
    - ##### `Optional`updateData?: object | null

      Additional specific data keys/values which override or extend the
      contents of the parsed form. This can be used to update other flags or
      data fields at the same time as processing a form submission to avoid
      multiple database operations.

  #### Returns Promise<any>

  A promise which resolves to the validated update data

  Inherited from [DocumentSheet](foundry.appv1.api.DocumentSheet.md).[\_onSubmit](foundry.appv1.api.DocumentSheet.md#_onsubmit)

### `Protected`\_renderAppV1PageView

* \_renderAppV1PageView(  
  Â Â Â Â element: HTMLElement,  
  Â Â Â Â sheet: [JournalPageSheet](foundry.appv1.sheets.JournalPageSheet.md),  
  ): Promise<void>

  `Protected`

  Render the page view for an app v1 page sheet.

  #### Parameters

  + element: HTMLElement

    The existing page element in the journal entry view.
  + sheet: [JournalPageSheet](foundry.appv1.sheets.JournalPageSheet.md)

    The page sheet.

  #### Returns Promise<void>

### `Protected`\_renderHeadings

* \_renderHeadings(  
  Â Â Â Â pageNode: HTMLElement,  
  Â Â Â Â toc: Record<string, JournalEntryPageHeading>,  
  ): Promise<void>

  `Protected`

  Add headings to the table of contents for the given page node.

  #### Parameters

  + pageNode: HTMLElement

    The HTML node of the page's rendered contents.
  + toc: Record<string, JournalEntryPageHeading>

    The page's table of contents.

  #### Returns Promise<void>

### `Protected`\_renderPageView

* \_renderPageView(  
  Â Â Â Â element: HTMLElement,  
  Â Â Â Â sheet: JournalEntryPageSheet,  
  ): Promise<void>

  `Protected`

  Render the page view for a page sheet.

  #### Parameters

  + element: HTMLElement

    The existing page element in the journal entry view.
  + sheet: JournalEntryPageSheet

    The page sheet.

  #### Returns Promise<void>

### `Protected`\_renderPageViews

* \_renderPageViews(): Promise<void>

  `Protected`

  Update child views inside the main sheet.

  #### Returns Promise<void>

### `Protected`\_restoreScrollPositions

* \_restoreScrollPositions(html: jQuery): void

  `Protected`

  Restore the scroll positions of containers within the app after re-rendering the content

  #### Parameters

  + html: jQuery

    The HTML object being traversed

  #### Returns void

  Inherited from [DocumentSheet](foundry.appv1.api.DocumentSheet.md).[\_restoreScrollPositions](foundry.appv1.api.DocumentSheet.md#_restorescrollpositions)

### `Protected`\_saveScrollPositions

* \_saveScrollPositions(html: jQuery): void

  `Protected`

  Persist the scroll positions of containers within the app before re-rendering the content

  #### Parameters

  + html: jQuery

    The HTML object being traversed

  #### Returns void

  Inherited from [DocumentSheet](foundry.appv1.api.DocumentSheet.md).[\_saveScrollPositions](foundry.appv1.api.DocumentSheet.md#_savescrollpositions)

### `Protected`\_synchronizeSidebar

* \_synchronizeSidebar(): void

  `Protected`

  If the set of active pages has changed, various elements in the sidebar will expand and collapse. For particularly
  long ToCs, this can leave the scroll position of the sidebar in a seemingly random state. We try to do our best to
  sync the sidebar scroll position with the current journal viewport.

  #### Returns void

### `Protected`\_updateButtonState

* \_updateButtonState(): void

  `Protected`

  Update the disabled state of the previous and next page buttons.

  #### Returns void

### `Protected`\_updateSecret

* \_updateSecret(secret: HTMLElement, content: string): void | Promise<any>

  `Protected`

  Update the HTML content that a given secret block is embedded in.

  #### Parameters

  + secret: HTMLElement

    The secret block.
  + content: string

    The new content.

  #### Returns void | Promise<any>

  The updated Document.

  Inherited from [DocumentSheet](foundry.appv1.api.DocumentSheet.md).[\_updateSecret](foundry.appv1.api.DocumentSheet.md#_updatesecret)

### `Protected`\_waitForImages

* \_waitForImages(): Promise<void>

  `Protected`

  Wait for any images present in the Application to load.

  #### Returns Promise<void>

  A Promise that resolves when all images have loaded.

  Inherited from [DocumentSheet](foundry.appv1.api.DocumentSheet.md).[\_waitForImages](foundry.appv1.api.DocumentSheet.md#_waitforimages)

### `Static`\_getInheritanceChain

* \_getInheritanceChain(): Function[]

  `Internal`

  Return the inheritance chain for this Application class up to (and including) it's base Application class.

  #### Returns Function[]

  Inherited from [DocumentSheet](foundry.appv1.api.DocumentSheet.md).[\_getInheritanceChain](foundry.appv1.api.DocumentSheet.md#_getinheritancechain)