---
title: "JournalEntryPageTextSheet | Foundry Virtual Tabletop - API Documentation - Version 13"
url: "https://foundryvtt.com/api/classes/foundry.applications.sheets.journal.JournalEntryPageTextSheet.html"
category: "classes"
---

* [Foundry Virtual Tabletop - API Documentation - Version 13](../modules.html)
* [foundry](../modules/foundry.html)
* [applications](../modules/foundry.applications.html)
* [sheets](../modules/foundry.applications.sheets.html)
* [journal](../modules/foundry.applications.sheets.journal.html)
* [JournalEntryPageTextSheet](foundry.applications.sheets.journal.JournalEntryPageTextSheet.html)

# Class JournalEntryPageTextSheet

An abstract Application responsible for displaying and editing a single text-type JournalEntryPage Document.

#### Hierarchy ([View Summary](../hierarchy.html#foundry.applications.sheets.journal.JournalEntryPageTextSheet))

* [JournalEntryPageHandlebarsSheet](foundry.applications.sheets.journal.JournalEntryPageHandlebarsSheet.html)
  + JournalEntryPageTextSheet
    - [JournalEntryPageMarkdownSheet](foundry.applications.sheets.journal.JournalEntryPageMarkdownSheet.html)
    - [JournalEntryPageProseMirrorSheet](foundry.applications.sheets.journal.JournalEntryPageProseMirrorSheet.html)

##### Index

### Constructors

[constructor](foundry.applications.sheets.journal.JournalEntryPageTextSheet.html#constructor)

### Properties

[isV2](foundry.applications.sheets.journal.JournalEntryPageTextSheet.html#isv2)
[toc](foundry.applications.sheets.journal.JournalEntryPageTextSheet.html#toc)
[\_appId](foundry.applications.sheets.journal.JournalEntryPageTextSheet.html#_appid)
[\_maxZ](foundry.applications.sheets.journal.JournalEntryPageTextSheet.html#_maxz)
[BASE\_APPLICATION](foundry.applications.sheets.journal.JournalEntryPageTextSheet.html#base_application)
[DEFAULT\_OPTIONS](foundry.applications.sheets.journal.JournalEntryPageTextSheet.html#default_options)
[EDIT\_PARTS](foundry.applications.sheets.journal.JournalEntryPageTextSheet.html#edit_parts)
[emittedEvents](foundry.applications.sheets.journal.JournalEntryPageTextSheet.html#emittedevents)
[format](foundry.applications.sheets.journal.JournalEntryPageTextSheet.html#format)
[isV2](foundry.applications.sheets.journal.JournalEntryPageTextSheet.html#isv2-1)
[RENDER\_STATES](foundry.applications.sheets.journal.JournalEntryPageTextSheet.html#render_states)
[TABS](foundry.applications.sheets.journal.JournalEntryPageTextSheet.html#tabs)
[VIEW\_PARTS](foundry.applications.sheets.journal.JournalEntryPageTextSheet.html#view_parts)
[\_converter](foundry.applications.sheets.journal.JournalEntryPageTextSheet.html#_converter)

### Accessors

[isView](foundry.applications.sheets.journal.JournalEntryPageTextSheet.html#isview)
[page](foundry.applications.sheets.journal.JournalEntryPageTextSheet.html#page)

### Methods

[\_configureRenderParts](foundry.applications.sheets.journal.JournalEntryPageTextSheet.html#_configurerenderparts)
[\_insertElement](foundry.applications.sheets.journal.JournalEntryPageTextSheet.html#_insertelement)
[\_onRender](foundry.applications.sheets.journal.JournalEntryPageTextSheet.html#_onrender)
[\_prepareContext](foundry.applications.sheets.journal.JournalEntryPageTextSheet.html#_preparecontext)
[\_preparePartContext](foundry.applications.sheets.journal.JournalEntryPageTextSheet.html#_preparepartcontext)
[\_prepareSubmitData](foundry.applications.sheets.journal.JournalEntryPageTextSheet.html#_preparesubmitdata)
[\_isEditorDirty](foundry.applications.sheets.journal.JournalEntryPageTextSheet.html#_iseditordirty)
[\_onCloseView](foundry.applications.sheets.journal.JournalEntryPageTextSheet.html#_oncloseview)
[\_prepareContentContext](foundry.applications.sheets.journal.JournalEntryPageTextSheet.html#_preparecontentcontext)
[\_prepareFooterContext](foundry.applications.sheets.journal.JournalEntryPageTextSheet.html#_preparefootercontext)
[\_prepareHeaderContext](foundry.applications.sheets.journal.JournalEntryPageTextSheet.html#_prepareheadercontext)
[\_prepareHeadingLevels](foundry.applications.sheets.journal.JournalEntryPageTextSheet.html#_prepareheadinglevels)
[\_migrateConstructorParams](foundry.applications.sheets.journal.JournalEntryPageTextSheet.html#_migrateconstructorparams)
[inheritanceChain](foundry.applications.sheets.journal.JournalEntryPageTextSheet.html#inheritancechain)
[parseCSSDimension](foundry.applications.sheets.journal.JournalEntryPageTextSheet.html#parsecssdimension)
[waitForImages](foundry.applications.sheets.journal.JournalEntryPageTextSheet.html#waitforimages)

## Constructors

### constructor

* new JournalEntryPageTextSheet(  
  Â Â Â Â options: any,  
  Â Â Â Â ...args: any[],  
  ): [JournalEntryPageTextSheet](foundry.applications.sheets.journal.JournalEntryPageTextSheet.html)

  #### Parameters

  + options: any
  + ...args: any[]

  #### Returns [JournalEntryPageTextSheet](foundry.applications.sheets.journal.JournalEntryPageTextSheet.html)

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

DEFAULT\_OPTIONS: { classes: string[]; includeTOC: boolean } = ...

Overrides JournalEntryPageHandlebarsSheet.DEFAULT\_OPTIONS

### `Static`EDIT\_PARTS

EDIT\_PARTS: Record<string, [HandlebarsTemplatePart](../interfaces/foundry.HandlebarsTemplatePart.html)> = ...

Handlebars parts to render in edit mode.

Inherited from JournalEntryPageHandlebarsSheet.EDIT\_PARTS

### `Static`emittedEvents

emittedEvents: readonly [unknown, "closeView"] = ...

#### Inherit Doc

Inherited from JournalEntryPageHandlebarsSheet.emittedEvents

### `Static`format

format: number = JOURNAL\_ENTRY\_PAGE\_FORMATS.HTML

The format used to edit text content in this sheet.

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

VIEW\_PARTS: Record<string, [HandlebarsTemplatePart](../interfaces/foundry.HandlebarsTemplatePart.html)> = {}

Handlebars part to render in view mode.

Inherited from JournalEntryPageHandlebarsSheet.VIEW\_PARTS

### `Protected` `Static`\_converter

\_converter: Converter = ...

Bi-directional HTML <-> Markdown converter.

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

  Inherited from JournalEntryPageHandlebarsSheet.\_onRender

### \_prepareContext

* \_prepareContext(options: any): Promise<any>

  #### Parameters

  + options: any

  #### Returns Promise<any>

  #### Inherit Doc

  Overrides JournalEntryPageHandlebarsSheet.\_prepareContext

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

  Overrides JournalEntryPageHandlebarsSheet.\_prepareSubmitData

### `Protected` `Abstract`\_isEditorDirty

* \_isEditorDirty(): boolean

  `Protected`

  Determine if any editors have unsaved changes.

  #### Returns boolean

### `Protected`\_onCloseView

* \_onCloseView(): void

  `Protected`

  Actions performed when this sheet is closed in some parent view.

  #### Returns void

  Inherited from JournalEntryPageHandlebarsSheet.\_onCloseView

### `Protected`\_prepareContentContext

* \_prepareContentContext(  
  Â Â Â Â context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.html),  
  Â Â Â Â options: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.html),  
  ): Promise<void>

  `Protected`

  Prepare render context for the content part.

  #### Parameters

  + context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.html)
  + options: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.html)

  #### Returns Promise<void>

  Inherited from JournalEntryPageHandlebarsSheet.\_prepareContentContext

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