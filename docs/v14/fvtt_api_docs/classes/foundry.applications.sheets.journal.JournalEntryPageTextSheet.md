---
title: "JournalEntryPageTextSheet | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.applications.sheets.journal.JournalEntryPageTextSheet.html"
category: "classes"
---

# Class JournalEntryPageTextSheet

An abstract Application responsible for displaying and editing a single text-type JournalEntryPage Document.

#### Hierarchy ([View Summary](../hierarchy.md#foundry.applications.sheets.journal.JournalEntryPageTextSheet))

* [JournalEntryPageHandlebarsSheet](foundry.applications.sheets.journal.JournalEntryPageHandlebarsSheet.md)
  + JournalEntryPageTextSheet
    - [JournalEntryPageCodeMirrorSheet](foundry.applications.sheets.journal.JournalEntryPageCodeMirrorSheet.md)
    - [JournalEntryPageProseMirrorSheet](foundry.applications.sheets.journal.JournalEntryPageProseMirrorSheet.md)

##### Index

### Constructors

[constructor](#constructor)

### Properties

[isV2](#isv2)
[toc](#toc)
[\_appId](#_appid)
[\_maxZ](#_maxz)
[BASE\_APPLICATION](#base_application)
[DEFAULT\_OPTIONS](#default_options)
[EDIT\_PARTS](#edit_parts)
[emittedEvents](#emittedevents)
[format](#format)
[isV2](#isv2-1)
[RENDER\_STATES](#render_states)
[TABS](#tabs)
[VIEW\_PARTS](#view_parts)
[\_converter](#_converter)

### Accessors

[isView](#isview)
[page](#page)

### Methods

[\_configureRenderParts](#_configurerenderparts)
[\_insertElement](#_insertelement)
[\_onRender](#_onrender)
[\_prepareContext](#_preparecontext)
[\_preparePartContext](#_preparepartcontext)
[\_prepareSubmitData](#_preparesubmitdata)
[\_isEditorDirty](#_iseditordirty)
[\_onCloseView](#_oncloseview)
[\_prepareContentContext](#_preparecontentcontext)
[\_prepareFooterContext](#_preparefootercontext)
[\_prepareHeaderContext](#_prepareheadercontext)
[\_prepareHeadingLevels](#_prepareheadinglevels)
[\_migrateConstructorParams](#_migrateconstructorparams)
[inheritanceChain](#inheritancechain)
[instances](#instances)
[parseCSSDimension](#parsecssdimension)
[waitForImages](#waitforimages)

## Constructors

### constructor

* new JournalEntryPageTextSheet(  
  Â Â Â Â options: any,  
  Â Â Â Â ...args: any[],  
  ): JournalEntryPageTextSheet

  #### Parameters

  + options: any
  + ...args: any[]

  #### Returns JournalEntryPageTextSheet

  #### Inherit Doc

  Inherited from JournalEntryPageHandlebarsSheet.constructor

## Properties

### isV2

isV2: boolean = ...

Indicates that the sheet renders with App V2 rather than V1.

Inherited from JournalEntryPageHandlebarsSheet.isV2

### toc

toc: Record<string, [JournalEntryPageHeading](../interfaces/foundry.types.JournalEntryPageHeading.md)>

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

BASE\_APPLICATION: typeof [ApplicationV2](foundry.applications.api.ApplicationV2.md) = ApplicationV2

Designates which upstream Application class in this class' inheritance chain is the base application.
Any DEFAULT\_OPTIONS of super-classes further upstream of the BASE\_APPLICATION are ignored.
Hook events for super-classes further upstream of the BASE\_APPLICATION are not dispatched.

Inherited from JournalEntryPageHandlebarsSheet.BASE\_APPLICATION

### `Static`DEFAULT\_OPTIONS

DEFAULT\_OPTIONS: { classes: string[]; includeTOC: boolean } = ...

Overrides JournalEntryPageHandlebarsSheet.DEFAULT\_OPTIONS

### `Static`EDIT\_PARTS

EDIT\_PARTS: Record<string, [HandlebarsTemplatePart](../interfaces/foundry.HandlebarsTemplatePart.md)> = ...

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

TABS: Record<string, [ApplicationTabsConfiguration](../interfaces/foundry.applications.types.ApplicationTabsConfiguration.md)> = {}

Configuration of application tabs, with an entry per tab group.

Inherited from JournalEntryPageHandlebarsSheet.TABS

### `Static`VIEW\_PARTS

VIEW\_PARTS: Record<string, [HandlebarsTemplatePart](../interfaces/foundry.HandlebarsTemplatePart.md)> = {}

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

* get page(): [documents](../modules/foundry.documents.md).[JournalEntryPage](foundry.documents.JournalEntryPage.md)

  The JournalEntryPage for this sheet.

  #### Returns [documents](../modules/foundry.documents.md).[JournalEntryPage](foundry.documents.JournalEntryPage.md)

  Inherited from JournalEntryPageHandlebarsSheet.page

## Methods

### \_configureRenderParts

* \_configureRenderParts(options: any): any

  #### Parameters

  + options: any

  #### Returns any

  Inherited from JournalEntryPageHandlebarsSheet.\_configureRenderParts

### \_insertElement

* \_insertElement(element: any, options: any): Promise<any>

  #### Parameters

  + element: any
  + options: any

  #### Returns Promise<any>

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
  Â Â Â Â context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.md),  
  Â Â Â Â options: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.md),  
  ): Promise<void>

  `Protected`

  Prepare render context for the content part.

  #### Parameters

  + context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.md)
  + options: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.md)

  #### Returns Promise<void>

  Inherited from JournalEntryPageHandlebarsSheet.\_prepareContentContext

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

  Inherited from JournalEntryPageHandlebarsSheet.\_prepareFooterContext

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
  ): Partial<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.md) & [DocumentSheetConfiguration](../interfaces/foundry.DocumentSheetConfiguration.md)>

  `Internal`

  Provide a deprecation path for converted V1 document sheets.

  #### Parameters

  + first: unknown

    The first parameter received by this class's constructor
  + rest: unknown[]

    Any additional parameters received

  #### Returns Partial<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.md) & [DocumentSheetConfiguration](../interfaces/foundry.DocumentSheetConfiguration.md)>

  Inherited from JournalEntryPageHandlebarsSheet.\_migrateConstructorParams

### `Static`inheritanceChain

* inheritanceChain(): Generator<typeof [ApplicationV2](foundry.applications.api.ApplicationV2.md), void, unknown>

  Iterate over the inheritance chain of this Application.
  The chain includes this Application itself and all parents until the base application is encountered.

  #### Returns Generator<typeof [ApplicationV2](foundry.applications.api.ApplicationV2.md), void, unknown>

  #### See

  [ApplicationV2.BASE\_APPLICATION](foundry.applications.api.ApplicationV2.md#base_application)

  #### Yields

  Inherited from JournalEntryPageHandlebarsSheet.inheritanceChain

### `Static`instances

* instances(): Generator<typeof [ApplicationV2](foundry.applications.api.ApplicationV2.md), any, any>

  Iterate over the instances of this Application.

  #### Returns Generator<typeof [ApplicationV2](foundry.applications.api.ApplicationV2.md), any, any>

  #### Yields

  Inherited from JournalEntryPageHandlebarsSheet.instances

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