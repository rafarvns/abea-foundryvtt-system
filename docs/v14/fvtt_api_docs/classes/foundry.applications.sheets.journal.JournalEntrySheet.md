---
title: "JournalEntrySheet | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.applications.sheets.journal.JournalEntrySheet.html"
category: "classes"
---

# Class JournalEntrySheet

The Application responsible for displaying and editing a single JournalEntry Document.

#### Mixes

HandlebarsApplication

#### Hierarchy

* any
  + JournalEntrySheet

##### Index

### Constructors

[constructor](#constructor)

### Properties

[\_pages](#_pages)
[\_appId](#_appid)
[\_maxZ](#_maxz)
[BASE\_APPLICATION](#base_application)
[DEFAULT\_OPTIONS](#default_options)
[emittedEvents](#emittedevents)
[OWNERSHIP\_ICONS](#ownership_icons)
[PARTS](#parts)
[RENDER\_STATES](#render_states)
[TABS](#tabs)
[VIEW\_MODES](#view_modes)

### Accessors

[entry](#entry)
[isMultiple](#ismultiple)
[locked](#locked)
[mode](#mode)
[observer](#observer)
[pageId](#pageid)
[pageIndex](#pageindex)
[pagesInView](#pagesinview)
[searchMode](#searchmode)
[sidebarExpanded](#sidebarexpanded)
[title](#title)

### Methods

[\_attachFrameListeners](#_attachframelisteners)
[\_configureRenderOptions](#_configurerenderoptions)
[\_configureRenderParts](#_configurerenderparts)
[\_getHeaderControls](#_getheadercontrols)
[\_initializeApplicationOptions](#_initializeapplicationoptions)
[\_onClose](#_onclose)
[\_onFirstRender](#_onfirstrender)
[\_onRender](#_onrender)
[\_onRevealSecret](#_onrevealsecret)
[\_prepareContext](#_preparecontext)
[\_preparePartContext](#_preparepartcontext)
[\_preSyncPartState](#_presyncpartstate)
[\_replaceHTML](#_replacehtml)
[\_tearDown](#_teardown)
[\_updateFrame](#_updateframe)
[createPageDialog](#createpagedialog)
[getPageSheet](#getpagesheet)
[goToPage](#gotopage)
[isPageVisible](#ispagevisible)
[nextPage](#nextpage)
[previousPage](#previouspage)
[toggleSearchMode](#togglesearchmode)
[toggleSidebar](#togglesidebar)
[viewedPageDocuments](#viewedpagedocuments)
[\_activatePagesInView](#_activatepagesinview)
[\_canDragDrop](#_candragdrop)
[\_canDragStart](#_candragstart)
[\_getEntryContextOptions](#_getentrycontextoptions)
[\_observeHeadings](#_observeheadings)
[\_observePages](#_observepages)
[\_onClickImage](#_onclickimage)
[\_onContextMenuClose](#_oncontextmenuclose)
[\_onContextMenuOpen](#_oncontextmenuopen)
[\_onDragStart](#_ondragstart)
[\_onDrop](#_ondrop)
[\_onEditPage](#_oneditpage)
[\_onPageScroll](#_onpagescroll)
[\_onSearchFilter](#_onsearchfilter)
[\_onShowPlayers](#_onshowplayers)
[\_preparePageData](#_preparepagedata)
[\_preparePagesContext](#_preparepagescontext)
[\_prepareSidebarContext](#_preparesidebarcontext)
[\_prepareTableOfContents](#_preparetableofcontents)
[\_renderHeadings](#_renderheadings)
[\_renderPageView](#_renderpageview)
[\_renderPageViews](#_renderpageviews)
[\_setCurrentPage](#_setcurrentpage)
[\_synchronizeSidebar](#_synchronizesidebar)
[\_updateButtonState](#_updatebuttonstate)
[\_migrateConstructorParams](#_migrateconstructorparams)
[inheritanceChain](#inheritancechain)
[instances](#instances)
[parseCSSDimension](#parsecssdimension)
[waitForImages](#waitforimages)

## Constructors

### constructor

* new JournalEntrySheet(options: any, ...args: any[]): JournalEntrySheet

  #### Parameters

  + options: any
  + ...args: any[]

  #### Returns JournalEntrySheet

  #### Inherit Doc

  Inherited from HandlebarsApplicationMixin(DocumentSheetV2).constructor

## Properties

### `Protected`\_pages

\_pages: Record<string, [JournalSheetPageContext](../interfaces/foundry.applications.sheets.journal.JournalSheetPageContext.md)> = {}

The cached list of processed page entries.

### `Static` `Internal`\_appId

\_appId: number = 0

An incrementing integer Application ID.

Inherited from HandlebarsApplicationMixin(DocumentSheetV2).\_appId

### `Static` `Internal`\_maxZ

\_maxZ: number = ...

The current maximum z-index of any displayed Application.

Inherited from HandlebarsApplicationMixin(DocumentSheetV2).\_maxZ

### `Static`BASE\_APPLICATION

BASE\_APPLICATION: typeof [ApplicationV2](foundry.applications.api.ApplicationV2.md) = ApplicationV2

Designates which upstream Application class in this class' inheritance chain is the base application.
Any DEFAULT\_OPTIONS of super-classes further upstream of the BASE\_APPLICATION are ignored.
Hook events for super-classes further upstream of the BASE\_APPLICATION are not dispatched.

Inherited from HandlebarsApplicationMixin(DocumentSheetV2).BASE\_APPLICATION

### `Static`DEFAULT\_OPTIONS

DEFAULT\_OPTIONS: {  
Â Â Â Â actions: {  
Â Â Â Â Â Â Â Â configCategories: (this: JournalEntrySheet) => void;  
Â Â Â Â Â Â Â Â createPage: () => any;  
Â Â Â Â Â Â Â Â editPage: (event: PointerEvent, target: HTMLElement) => any;  
Â Â Â Â Â Â Â Â goToHeading: (  
Â Â Â Â Â Â Â Â Â Â Â Â this: JournalEntrySheet,  
Â Â Â Â Â Â Â Â Â Â Â Â event: PointerEvent,  
Â Â Â Â Â Â Â Â Â Â Â Â target: HTMLElement,  
Â Â Â Â Â Â Â Â ) => void;  
Â Â Â Â Â Â Â Â nextPage: () => any;  
Â Â Â Â Â Â Â Â previousPage: () => any;  
Â Â Â Â Â Â Â Â showPlayers: () => void;  
Â Â Â Â Â Â Â Â toggleLock: (this: JournalEntrySheet) => void;  
Â Â Â Â Â Â Â Â toggleMode: (this: JournalEntrySheet) => any;  
Â Â Â Â Â Â Â Â toggleSearch: () => any;  
Â Â Â Â Â Â Â Â toggleSidebar: () => void;  
Â Â Â Â };  
Â Â Â Â classes: string[];  
Â Â Â Â form: { submitOnChange: boolean };  
Â Â Â Â position: { height: number; width: number };  
Â Â Â Â viewPermission: 0;  
Â Â Â Â window: { resizable: boolean };  
} = ...

Overrides HandlebarsApplicationMixin(DocumentSheetV2).DEFAULT\_OPTIONS

### `Static`emittedEvents

emittedEvents: readonly ["prerender", "render", "close", "position"] = ...

Inherited from HandlebarsApplicationMixin(DocumentSheetV2).emittedEvents

### `Static`OWNERSHIP\_ICONS

OWNERSHIP\_ICONS: { "0": string; "2": string; "3": string } = ...

Icons for page ownership.

### `Static`PARTS

PARTS: {  
Â Â Â Â pages: { scrollable: string[]; template: string };  
Â Â Â Â sidebar: { scrollable: string[]; template: string; templates: string[] };  
} = ...

Overrides HandlebarsApplicationMixin(DocumentSheetV2).PARTS

### `Static`RENDER\_STATES

RENDER\_STATES: Record<string, number> = ...

The sequence of rendering states that describe the Application life-cycle.

Inherited from HandlebarsApplicationMixin(DocumentSheetV2).RENDER\_STATES

### `Static`TABS

TABS: Record<string, [ApplicationTabsConfiguration](../interfaces/foundry.applications.types.ApplicationTabsConfiguration.md)> = {}

Configuration of application tabs, with an entry per tab group.

Inherited from HandlebarsApplicationMixin(DocumentSheetV2).TABS

### `Static`VIEW\_MODES

VIEW\_MODES: { MULTIPLE: number; SINGLE: number } = ...

The available view modes for journal entries.

## Accessors

### entry

* get entry(): [documents](../modules/foundry.documents.md).[JournalEntry](foundry.documents.JournalEntry.md)

  The JournalEntry for this sheet.

  #### Returns [documents](../modules/foundry.documents.md).[JournalEntry](foundry.documents.JournalEntry.md)

### isMultiple

* get isMultiple(): boolean

  Whether the sheet is in multi-page mode.

  #### Returns boolean

### locked

* get locked(): boolean

  Whether the journal is locked and disallows modifications to the table of contents.

  #### Returns boolean

### mode

* get mode(): { MULTIPLE: number; SINGLE: number }

  Get the JournalEntry's current view mode.

  #### Returns { MULTIPLE: number; SINGLE: number }

### observer

* get observer(): IntersectionObserver

  The currently active IntersectionObserver.

  #### Returns IntersectionObserver

### pageId

* get pageId(): string

  The ID of the currently-viewed page.

  #### Returns string

### pageIndex

* get pageIndex(): number

  The index of the currently-viewed page in the list of available pages.

  #### Returns number

### pagesInView

* get pagesInView(): HTMLElement[]

  The pages that are currently scrolled into view and marked as 'active' in the sidebar.

  #### Returns HTMLElement[]

### searchMode

* get searchMode(): string

  Get the JournalEntry's current search mode.

  #### Returns string

### sidebarExpanded

* get sidebarExpanded(): boolean

  The expanded state of the sidebar.

  #### Returns boolean

### title

* get title(): string

  #### Returns string

## Methods

### \_attachFrameListeners

* \_attachFrameListeners(): void

  #### Returns void

  #### Inherit Doc

### \_configureRenderOptions

* \_configureRenderOptions(options: any): void

  #### Parameters

  + options: any

  #### Returns void

  #### Inherit Doc

### \_configureRenderParts

* \_configureRenderParts(options: any): any

  #### Parameters

  + options: any

  #### Returns any

  #### Inherit Doc

### \_getHeaderControls

* \_getHeaderControls(): any

  #### Returns any

  #### Inherit Doc

### \_initializeApplicationOptions

* \_initializeApplicationOptions(options: any): any

  #### Parameters

  + options: any

  #### Returns any

  #### Inherit Doc

### \_onClose

* \_onClose(options: any): void

  #### Parameters

  + options: any

  #### Returns void

  #### Inherit Doc

### \_onFirstRender

* \_onFirstRender(context: any, options: any): Promise<void>

  #### Parameters

  + context: any
  + options: any

  #### Returns Promise<void>

  #### Inherit Doc

### \_onRender

* \_onRender(context: any, options: any): Promise<void>

  #### Parameters

  + context: any
  + options: any

  #### Returns Promise<void>

  #### Inherit Doc

### \_onRevealSecret

* \_onRevealSecret(event: any): void

  #### Parameters

  + event: any

  #### Returns void

### \_prepareContext

* \_prepareContext(options: any): Promise<any>

  #### Parameters

  + options: any

  #### Returns Promise<any>

  #### Inherit Doc

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

### \_replaceHTML

* \_replaceHTML(result: any, content: any, options: any): void

  #### Parameters

  + result: any
  + content: any
  + options: any

  #### Returns void

  #### Inherit Doc

### \_tearDown

* \_tearDown(options: any): void

  #### Parameters

  + options: any

  #### Returns void

  #### Inherit Doc

### \_updateFrame

* \_updateFrame(options: any): void

  #### Parameters

  + options: any

  #### Returns void

  #### Inherit Doc

### createPageDialog

* createPageDialog(): any

  Prompt the user with a Dialog for creation of a new JournalEntryPage.

  #### Returns any

### getPageSheet

* getPageSheet(page: string | [documents](../modules/foundry.documents.md).[JournalEntryPage](foundry.documents.JournalEntryPage.md)): JournalPageSheet

  Retrieve the sheet instance for rendering this page inline.

  #### Parameters

  + page: string | [documents](../modules/foundry.documents.md).[JournalEntryPage](foundry.documents.JournalEntryPage.md)

    The page instance or its ID.

  #### Returns JournalPageSheet

### goToPage

* goToPage(pageId: string, options?: { anchor?: string }): any

  Turn to a specific page.

  #### Parameters

  + pageId: string

    The ID of the page to turn to.
  + `Optional`options: { anchor?: string } = {}
    - ##### `Optional`anchor?: string

      Optionally an anchor slug to focus within that page.

  #### Returns any

### isPageVisible

* isPageVisible(page: [documents](../modules/foundry.documents.md).[JournalEntryPage](foundry.documents.JournalEntryPage.md)): boolean

  Determine whether a given page is visible to the current user.

  #### Parameters

  + page: [documents](../modules/foundry.documents.md).[JournalEntryPage](foundry.documents.JournalEntryPage.md)

    The page.

  #### Returns boolean

### nextPage

* nextPage(): any

  Turn to the next page.

  #### Returns any

### previousPage

* previousPage(): any

  Turn to the previous page.

  #### Returns any

### toggleSearchMode

* toggleSearchMode(): any

  Toggle the search mode for this journal entry between name and full text search.

  #### Returns any

### toggleSidebar

* toggleSidebar(): void

  Toggle the collapsed or expanded state of the sidebar.

  #### Returns void

### viewedPageDocuments

* viewedPageDocuments(): Generator<any, void, unknown>

  Iterate over the JournalEntryPage documents which are currently visible in the sheet.

  #### Returns Generator<any, void, unknown>

  #### Yields

### `Protected`\_activatePagesInView

* \_activatePagesInView(): void

  `Protected`

  Highlights the currently-viewed page in the sidebar.

  #### Returns void

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

### `Protected`\_getEntryContextOptions

* \_getEntryContextOptions(): ContextMenuEntry[]

  `Protected`

  Get the set of ContextMenu options which should be used for journal entry pages in the sidebar.

  #### Returns ContextMenuEntry[]

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

### `Protected`\_onClickImage

* \_onClickImage(event: PointerEvent): void

  `Protected`

  Handle clicking an image to pop it out for fullscreen view.

  #### Parameters

  + event: PointerEvent

    The triggering click event.

  #### Returns void

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

### `Protected`\_onDragStart

* \_onDragStart(event: DragEvent): void

  `Protected`

  Handle drag operations.

  #### Parameters

  + event: DragEvent

  #### Returns void

### `Protected`\_onDrop

* \_onDrop(event: DragEvent): Promise<any>

  `Protected`

  Handle drop operations.

  #### Parameters

  + event: DragEvent

  #### Returns Promise<any>

### `Protected`\_onEditPage

* \_onEditPage(event: PointerEvent, target: HTMLElement): any

  `Protected`

  Handle editing one of the journal entry's pages.

  #### Parameters

  + event: PointerEvent

    The triggering event.
  + target: HTMLElement

    The action target.

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

    An array of element that have scrolled into or out of view.
  + observer: IntersectionObserver

    The IntersectionObserver that invoked this callback.

  #### Returns void

### `Protected`\_onSearchFilter

* \_onSearchFilter(  
  Â Â Â Â event: KeyboardEvent,  
  Â Â Â Â query: string,  
  Â Â Â Â rgx: RegExp,  
  Â Â Â Â html: HTMLElement,  
  ): void

  `Protected`

  Handle journal entry search and filtering.

  #### Parameters

  + event: KeyboardEvent

    The keyboard input event.
  + query: string

    The input search string.
  + rgx: RegExp

    The regular expression query that should be matched against.
  + html: HTMLElement

    The container to filter items from.

  #### Returns void

### `Protected`\_onShowPlayers

* \_onShowPlayers(): void

  `Protected`

  Handle a request to show the JournalEntry to other Users.

  #### Returns void

### `Protected`\_preparePageData

* \_preparePageData(): Record<string, [JournalSheetPageContext](../interfaces/foundry.applications.sheets.journal.JournalSheetPageContext.md)>

  `Protected`

  Prepare pages for display.

  #### Returns Record<string, [JournalSheetPageContext](../interfaces/foundry.applications.sheets.journal.JournalSheetPageContext.md)>

### `Protected`\_preparePagesContext

* \_preparePagesContext(  
  Â Â Â Â context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.md),  
  Â Â Â Â options: [JournalSheetRenderOptions](../interfaces/foundry.applications.sheets.journal.JournalSheetRenderOptions.md),  
  ): Promise<void>

  `Protected`

  Prepare render context for the pages part.

  #### Parameters

  + context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.md)
  + options: [JournalSheetRenderOptions](../interfaces/foundry.applications.sheets.journal.JournalSheetRenderOptions.md)

  #### Returns Promise<void>

### `Protected`\_prepareSidebarContext

* \_prepareSidebarContext(  
  Â Â Â Â context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.md),  
  Â Â Â Â options: [JournalSheetRenderOptions](../interfaces/foundry.applications.sheets.journal.JournalSheetRenderOptions.md),  
  ): Promise<void>

  `Protected`

  Prepare render context for the sidebar part.

  #### Parameters

  + context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.md)
  + options: [JournalSheetRenderOptions](../interfaces/foundry.applications.sheets.journal.JournalSheetRenderOptions.md)

  #### Returns Promise<void>

### `Protected`\_prepareTableOfContents

* \_prepareTableOfContents(): Promise<  
  Â Â Â Â ([JournalSheetPageContext](../interfaces/foundry.applications.sheets.journal.JournalSheetPageContext.md) & [JournalSheetCategoryContext](../interfaces/foundry.applications.sheets.journal.JournalSheetCategoryContext.md))[],  
  >

  `Protected`

  Prepare the sidebar table of contents.

  #### Returns Promise<([JournalSheetPageContext](../interfaces/foundry.applications.sheets.journal.JournalSheetPageContext.md) & [JournalSheetCategoryContext](../interfaces/foundry.applications.sheets.journal.JournalSheetCategoryContext.md))[]>

### `Protected`\_renderHeadings

* \_renderHeadings(  
  Â Â Â Â pageNode: HTMLElement,  
  Â Â Â Â toc: Record<string, [JournalEntryPageHeading](../interfaces/foundry.types.JournalEntryPageHeading.md)>,  
  ): Promise<void>

  `Protected`

  Add headings to the table of contents for the given node.

  #### Parameters

  + pageNode: HTMLElement

    The HTML node of the page's rendered contents.
  + toc: Record<string, [JournalEntryPageHeading](../interfaces/foundry.types.JournalEntryPageHeading.md)>

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

* \_renderPageViews(  
  Â Â Â Â context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.md),  
  Â Â Â Â options: [JournalSheetRenderOptions](../interfaces/foundry.applications.sheets.journal.JournalSheetRenderOptions.md),  
  ): Promise<void>

  `Protected`

  Update child views inside the main sheet.

  #### Parameters

  + context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.md)
  + options: [JournalSheetRenderOptions](../interfaces/foundry.applications.sheets.journal.JournalSheetRenderOptions.md)

  #### Returns Promise<void>

### `Protected`\_setCurrentPage

* \_setCurrentPage(options?: [JournalSheetRenderOptions](../interfaces/foundry.applications.sheets.journal.JournalSheetRenderOptions.md)): void

  `Protected`

  Update which page of the journal sheet should be currently rendered.
  This can be controlled by options passed into the render method, or by subclass override.

  #### Parameters

  + `Optional`options: [JournalSheetRenderOptions](../interfaces/foundry.applications.sheets.journal.JournalSheetRenderOptions.md) = {}

  #### Returns void

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

### `Static`\_migrateConstructorParams

* \_migrateConstructorParams(  
  Â Â Â Â first: unknown,  
  Â Â Â Â rest: unknown[],  
  ): Partial<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.md) & [DocumentSheetConfiguration](../interfaces/foundry.DocumentSheetConfiguration.md)>

  `Internal`

  Provide a deprecation path for converted V1 document sheets.

  #### Parameters

  + first: unknown

    The first parameter received by this class's constructor
  + rest: unknown[]

    Any additional parameters received

  #### Returns Partial<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.md) & [DocumentSheetConfiguration](../interfaces/foundry.DocumentSheetConfiguration.md)>

### `Static`inheritanceChain

* inheritanceChain(): Generator<typeof [ApplicationV2](foundry.applications.api.ApplicationV2.md), void, unknown>

  Iterate over the inheritance chain of this Application.
  The chain includes this Application itself and all parents until the base application is encountered.

  #### Returns Generator<typeof [ApplicationV2](foundry.applications.api.ApplicationV2.md), void, unknown>

  #### See

  [ApplicationV2.BASE\_APPLICATION](foundry.applications.api.ApplicationV2.md#base_application)

  #### Yields

  Inherited from HandlebarsApplicationMixin(DocumentSheetV2).inheritanceChain

### `Static`instances

* instances(): Generator<typeof [ApplicationV2](foundry.applications.api.ApplicationV2.md), any, any>

  Iterate over the instances of this Application.

  #### Returns Generator<typeof [ApplicationV2](foundry.applications.api.ApplicationV2.md), any, any>

  #### Yields

  Inherited from HandlebarsApplicationMixin(DocumentSheetV2).instances

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

  Inherited from HandlebarsApplicationMixin(DocumentSheetV2).parseCSSDimension

### `Static`waitForImages

* waitForImages(element: HTMLElement): Promise<void>

  Wait for any images in the given element to load.

  #### Parameters

  + element: HTMLElement

    The element.

  #### Returns Promise<void>

  Inherited from HandlebarsApplicationMixin(DocumentSheetV2).waitForImages