---
title: "JournalEntryPagePDFSheet | Foundry Virtual Tabletop - API Documentation - Version 13"
url: "https://foundryvtt.com/api/classes/foundry.applications.sheets.journal.JournalEntryPagePDFSheet.html"
category: "classes"
---

* [Foundry Virtual Tabletop - API Documentation - Version 13](../modules.html)
* [foundry](../modules/foundry.html)
* [applications](../modules/foundry.applications.html)
* [sheets](../modules/foundry.applications.sheets.html)
* [journal](../modules/foundry.applications.sheets.journal.html)
* [JournalEntryPagePDFSheet](foundry.applications.sheets.journal.JournalEntryPagePDFSheet.html)

# Class JournalEntryPagePDFSheet

An Application responsible for displaying and editing a single pdf-type JournalEntryPage Document.

#### Hierarchy ([View Summary](../hierarchy.html#foundry.applications.sheets.journal.JournalEntryPagePDFSheet))

* [JournalEntryPageHandlebarsSheet](foundry.applications.sheets.journal.JournalEntryPageHandlebarsSheet.html)
  + JournalEntryPagePDFSheet

##### Index

### Constructors

[constructor](foundry.applications.sheets.journal.JournalEntryPagePDFSheet.html#constructor)

### Properties

[isV2](foundry.applications.sheets.journal.JournalEntryPagePDFSheet.html#isv2)
[toc](foundry.applications.sheets.journal.JournalEntryPagePDFSheet.html#toc)
[\_appId](foundry.applications.sheets.journal.JournalEntryPagePDFSheet.html#_appid)
[\_maxZ](foundry.applications.sheets.journal.JournalEntryPagePDFSheet.html#_maxz)
[BASE\_APPLICATION](foundry.applications.sheets.journal.JournalEntryPagePDFSheet.html#base_application)
[DEFAULT\_OPTIONS](foundry.applications.sheets.journal.JournalEntryPagePDFSheet.html#default_options)
[EDIT\_PARTS](foundry.applications.sheets.journal.JournalEntryPagePDFSheet.html#edit_parts)
[emittedEvents](foundry.applications.sheets.journal.JournalEntryPagePDFSheet.html#emittedevents)
[isV2](foundry.applications.sheets.journal.JournalEntryPagePDFSheet.html#isv2-1)
[RENDER\_STATES](foundry.applications.sheets.journal.JournalEntryPagePDFSheet.html#render_states)
[TABS](foundry.applications.sheets.journal.JournalEntryPagePDFSheet.html#tabs)
[VIEW\_PARTS](foundry.applications.sheets.journal.JournalEntryPagePDFSheet.html#view_parts)
[\_sizes](foundry.applications.sheets.journal.JournalEntryPagePDFSheet.html#_sizes)

### Accessors

[isView](foundry.applications.sheets.journal.JournalEntryPagePDFSheet.html#isview)
[page](foundry.applications.sheets.journal.JournalEntryPagePDFSheet.html#page)

### Methods

[\_configureRenderParts](foundry.applications.sheets.journal.JournalEntryPagePDFSheet.html#_configurerenderparts)
[\_insertElement](foundry.applications.sheets.journal.JournalEntryPagePDFSheet.html#_insertelement)
[\_onRender](foundry.applications.sheets.journal.JournalEntryPagePDFSheet.html#_onrender)
[\_prepareContentContext](foundry.applications.sheets.journal.JournalEntryPagePDFSheet.html#_preparecontentcontext)
[\_prepareContext](foundry.applications.sheets.journal.JournalEntryPagePDFSheet.html#_preparecontext)
[\_preparePartContext](foundry.applications.sheets.journal.JournalEntryPagePDFSheet.html#_preparepartcontext)
[\_prepareSubmitData](foundry.applications.sheets.journal.JournalEntryPagePDFSheet.html#_preparesubmitdata)
[\_getViewerParams](foundry.applications.sheets.journal.JournalEntryPagePDFSheet.html#_getviewerparams)
[\_onCloseView](foundry.applications.sheets.journal.JournalEntryPagePDFSheet.html#_oncloseview)
[\_onLoadPDF](foundry.applications.sheets.journal.JournalEntryPagePDFSheet.html#_onloadpdf)
[\_prepareFooterContext](foundry.applications.sheets.journal.JournalEntryPagePDFSheet.html#_preparefootercontext)
[\_prepareHeaderContext](foundry.applications.sheets.journal.JournalEntryPagePDFSheet.html#_prepareheadercontext)
[\_prepareHeadingLevels](foundry.applications.sheets.journal.JournalEntryPagePDFSheet.html#_prepareheadinglevels)
[\_migrateConstructorParams](foundry.applications.sheets.journal.JournalEntryPagePDFSheet.html#_migrateconstructorparams)
[inheritanceChain](foundry.applications.sheets.journal.JournalEntryPagePDFSheet.html#inheritancechain)
[parseCSSDimension](foundry.applications.sheets.journal.JournalEntryPagePDFSheet.html#parsecssdimension)
[waitForImages](foundry.applications.sheets.journal.JournalEntryPagePDFSheet.html#waitforimages)

## Constructors

### constructor

* new JournalEntryPagePDFSheet(  
  Â Â Â Â options: any,  
  Â Â Â Â ...args: any[],  
  ): [JournalEntryPagePDFSheet](foundry.applications.sheets.journal.JournalEntryPagePDFSheet.html)

  #### Parameters

  + options: any
  + ...args: any[]

  #### Returns [JournalEntryPagePDFSheet](foundry.applications.sheets.journal.JournalEntryPagePDFSheet.html)

  #### Inherit Doc

  Inherited from JournalEntryPageHandlebarsSheet.constructor

## Properties

### isV2

isV2: boolean = ...

Indicates that the sheet renders with App V2 rather than V1.

Inherited from JournalEntryPageHandlebarsSheet.isV2

### toc

toc: Record<string, [JournalEntryPageHeading](../interfaces/foundry.types.JournalEntryPageHeading.html)>

The table of contents for this text page.

Inherited from JournalEntryPageHandlebarsSheet.toc

### `Static` `Internal`\_appId

\_appId: number = 0

An incrementing integer Application ID.

Inherited from JournalEntryPageHandlebarsSheet.\_appId

### `Static` `Internal`\_maxZ

\_maxZ: number = ...

The current maximum z-index of any displayed Application.

Inherited from JournalEntryPageHandlebarsSheet.\_maxZ

### `Static`BASE\_APPLICATION

BASE\_APPLICATION: typeof [ApplicationV2](foundry.applications.api.ApplicationV2.html) = ApplicationV2

Designates which upstream Application class in this class' inheritance chain is the base application.
Any DEFAULT\_OPTIONS of super-classes further upstream of the BASE\_APPLICATION are ignored.
Hook events for super-classes further upstream of the BASE\_APPLICATION are not dispatched.

Inherited from JournalEntryPageHandlebarsSheet.BASE\_APPLICATION

### `Static`DEFAULT\_OPTIONS

DEFAULT\_OPTIONS: { classes: string[]; window: { icon: string } } = ...

Overrides JournalEntryPageHandlebarsSheet.DEFAULT\_OPTIONS

### `Static`EDIT\_PARTS

EDIT\_PARTS: {  
Â Â Â Â content: { classes: string[]; template: string };  
Â Â Â Â footer: [HandlebarsTemplatePart](../interfaces/foundry.HandlebarsTemplatePart.html);  
Â Â Â Â header: [HandlebarsTemplatePart](../interfaces/foundry.HandlebarsTemplatePart.html);  
} = ...

#### Inherit Doc

Overrides JournalEntryPageHandlebarsSheet.EDIT\_PARTS

### `Static`emittedEvents

emittedEvents: readonly [unknown, "closeView"] = ...

#### Inherit Doc

Inherited from JournalEntryPageHandlebarsSheet.emittedEvents

### `Static`isV2

isV2: boolean = true

Indicates that the sheet renders with App V2 rather than V1.

Inherited from JournalEntryPageHandlebarsSheet.isV2

### `Static`RENDER\_STATES

RENDER\_STATES: Record<string, number> = ...

The sequence of rendering states that describe the Application life-cycle.

Inherited from JournalEntryPageHandlebarsSheet.RENDER\_STATES

### `Static`TABS

TABS: Record<string, [ApplicationTabsConfiguration](../interfaces/foundry.applications.types.ApplicationTabsConfiguration.html)> = {}

Configuration of application tabs, with an entry per tab group.

Inherited from JournalEntryPageHandlebarsSheet.TABS

### `Static`VIEW\_PARTS

VIEW\_PARTS: { content: { root: boolean; template: string } } = ...

#### Inherit Doc

Overrides JournalEntryPageHandlebarsSheet.VIEW\_PARTS

### `Protected` `Static`\_sizes

\_sizes: Record<string, number> = {}

Maintain a cache of PDF sizes to avoid making HEAD requests every render.

## Accessors

### isView

* get isView(): boolean

  Whether the sheet is in view mode.

  #### Returns boolean

  Inherited from JournalEntryPageHandlebarsSheet.isView

### page

* get page(): [documents](../modules/foundry.documents.html).[JournalEntryPage](foundry.documents.JournalEntryPage.html)

  The JournalEntryPage for this sheet.

  #### Returns [documents](../modules/foundry.documents.html).[JournalEntryPage](foundry.documents.JournalEntryPage.html)

  Inherited from JournalEntryPageHandlebarsSheet.page

## Methods

### \_configureRenderParts

* \_configureRenderParts(options: any): any

  #### Parameters

  + options: any

  #### Returns any

  Inherited from JournalEntryPageHandlebarsSheet.\_configureRenderParts

### \_insertElement

* \_insertElement(element: any): void

  #### Parameters

  + element: any

  #### Returns void

  #### Inherit Doc

  Inherited from JournalEntryPageHandlebarsSheet.\_insertElement

### \_onRender

* \_onRender(context: any, options: any): Promise<void>

  #### Parameters

  + context: any
  + options: any

  #### Returns Promise<void>

  #### Inherit Doc

  Overrides JournalEntryPageHandlebarsSheet.\_onRender

### \_prepareContentContext

* \_prepareContentContext(context: any, options: any): Promise<void>

  #### Parameters

  + context: any
  + options: any

  #### Returns Promise<void>

  #### Inherit Doc

  Overrides JournalEntryPageHandlebarsSheet.\_prepareContentContext

### \_prepareContext

* \_prepareContext(options: any): Promise<any>

  #### Parameters

  + options: any

  #### Returns Promise<any>

  #### Inherit Doc

  Inherited from JournalEntryPageHandlebarsSheet.\_prepareContext

### \_preparePartContext

* \_preparePartContext(partId: any, context: any, options: any): Promise<any>

  #### Parameters

  + partId: any
  + context: any
  + options: any

  #### Returns Promise<any>

  #### Inherit Doc

  Inherited from JournalEntryPageHandlebarsSheet.\_preparePartContext

### \_prepareSubmitData

* \_prepareSubmitData(event: any, form: any, formData: any, updateData: any): any

  #### Parameters

  + event: any
  + form: any
  + formData: any
  + updateData: any

  #### Returns any

  #### Inherit Doc

  Inherited from JournalEntryPageHandlebarsSheet.\_prepareSubmitData

### `Protected`\_getViewerParams

* \_getViewerParams(): URLSearchParams

  `Protected`

  Marshall URL query parameters to pass to the PDF viewer.

  #### Returns URLSearchParams

### `Protected`\_onCloseView

* \_onCloseView(): void

  `Protected`

  Actions performed when this sheet is closed in some parent view.

  #### Returns void

  Inherited from JournalEntryPageHandlebarsSheet.\_onCloseView

### `Protected`\_onLoadPDF

* \_onLoadPDF(event: PointerEvent): void

  `Protected`

  Handle a request to load a PDF.

  #### Parameters

  + event: PointerEvent

    The triggering event.

  #### Returns void

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

  Inherited from JournalEntryPageHandlebarsSheet.\_prepareFooterContext

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

  Inherited from JournalEntryPageHandlebarsSheet.\_prepareHeaderContext

### `Protected`\_prepareHeadingLevels

* \_prepareHeadingLevels(): Record<string, string>

  `Protected`

  Prepare heading level choices.

  #### Returns Record<string, string>

  Inherited from JournalEntryPageHandlebarsSheet.\_prepareHeadingLevels

### `Static`\_migrateConstructorParams

* \_migrateConstructorParams(  
  Â Â Â Â first: unknown,  
  Â Â Â Â rest: unknown[],  
  ): Partial<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.html) & [DocumentSheetConfiguration](../interfaces/foundry.DocumentSheetConfiguration.html)>

  `Internal`

  Provide a deprecation path for converted V1 document sheets.

  #### Parameters

  + first: unknown

    The first parameter received by this class's constructor
  + rest: unknown[]

    Any additional parameters received

  #### Returns Partial<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.html) & [DocumentSheetConfiguration](../interfaces/foundry.DocumentSheetConfiguration.html)>

  Inherited from JournalEntryPageHandlebarsSheet.\_migrateConstructorParams

### `Static`inheritanceChain

* inheritanceChain(): Generator<typeof [ApplicationV2](foundry.applications.api.ApplicationV2.html), void, unknown>

  Iterate over the inheritance chain of this Application.
  The chain includes this Application itself and all parents until the base application is encountered.

  #### Returns Generator<typeof [ApplicationV2](foundry.applications.api.ApplicationV2.html), void, unknown>

  #### See

  [ApplicationV2.BASE\_APPLICATION](foundry.applications.api.ApplicationV2.html#base_application)

  #### Yields

  Inherited from JournalEntryPageHandlebarsSheet.inheritanceChain

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

  Inherited from JournalEntryPageHandlebarsSheet.parseCSSDimension

### `Static`waitForImages

* waitForImages(element: HTMLElement): Promise<void>

  Wait for any images in the given element to load.

  #### Parameters

  + element: HTMLElement

    The element.

  #### Returns Promise<void>

  Inherited from JournalEntryPageHandlebarsSheet.waitForImages