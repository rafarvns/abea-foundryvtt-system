---
title: "JournalEntryPageHandlebarsSheet | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.applications.sheets.journal.JournalEntryPageHandlebarsSheet.html"
category: "classes"
---

# Class JournalEntryPageHandlebarsSheet

An abstract subclass that contains specialised handlebars logic for JournalEntryPageSheets.

#### Mixes

HandlebarsApplication

#### Hierarchy ([View Summary](../hierarchy.md#foundry.applications.sheets.journal.JournalEntryPageHandlebarsSheet))

* [JournalEntryPageSheet](foundry.applications.sheets.journal.JournalEntryPageSheet.md)<this>
  + JournalEntryPageHandlebarsSheet
    - [JournalEntryPageImageSheet](foundry.applications.sheets.journal.JournalEntryPageImageSheet.md)
    - [JournalEntryPagePDFSheet](foundry.applications.sheets.journal.JournalEntryPagePDFSheet.md)
    - [JournalEntryPageTextSheet](foundry.applications.sheets.journal.JournalEntryPageTextSheet.md)
    - [JournalEntryPageVideoSheet](foundry.applications.sheets.journal.JournalEntryPageVideoSheet.md)

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
[isV2](#isv2-1)
[RENDER\_STATES](#render_states)
[TABS](#tabs)
[VIEW\_PARTS](#view_parts)

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

* new JournalEntryPageHandlebarsSheet(  
  Â Â Â Â options: any,  
  Â Â Â Â ...args: any[],  
  ): JournalEntryPageHandlebarsSheet

  #### Parameters

  + options: any
  + ...args: any[]

  #### Returns JournalEntryPageHandlebarsSheet

  #### Inherit Doc

  Inherited from HandlebarsApplicationMixin(JournalEntryPageSheet).constructor

## Properties

### isV2

isV2: boolean = ...

Indicates that the sheet renders with App V2 rather than V1.

Inherited from HandlebarsApplicationMixin(JournalEntryPageSheet).isV2

### toc

toc: Record<string, [JournalEntryPageHeading](../interfaces/foundry.types.JournalEntryPageHeading.md)>

The table of contents for this text page.

Inherited from HandlebarsApplicationMixin(JournalEntryPageSheet).toc

### `Static` `Internal`\_appId

\_appId: number = 0

An incrementing integer Application ID.

Inherited from HandlebarsApplicationMixin(JournalEntryPageSheet).\_appId

### `Static` `Internal`\_maxZ

\_maxZ: number = ...

The current maximum z-index of any displayed Application.

Inherited from HandlebarsApplicationMixin(JournalEntryPageSheet).\_maxZ

### `Static`BASE\_APPLICATION

BASE\_APPLICATION: typeof [ApplicationV2](foundry.applications.api.ApplicationV2.md) = ApplicationV2

Designates which upstream Application class in this class' inheritance chain is the base application.
Any DEFAULT\_OPTIONS of super-classes further upstream of the BASE\_APPLICATION are ignored.
Hook events for super-classes further upstream of the BASE\_APPLICATION are not dispatched.

Inherited from HandlebarsApplicationMixin(JournalEntryPageSheet).BASE\_APPLICATION

### `Static`DEFAULT\_OPTIONS

DEFAULT\_OPTIONS: {  
Â Â Â Â classes: string[];  
Â Â Â Â form: { submitOnChange: boolean };  
Â Â Â Â includeTOC: boolean;  
Â Â Â Â mode: string;  
Â Â Â Â position: { height: number; width: number };  
Â Â Â Â viewClasses: never[];  
Â Â Â Â viewPermission: 2;  
Â Â Â Â window: { resizable: boolean };  
} = ...

Inherited from HandlebarsApplicationMixin(JournalEntryPageSheet).DEFAULT\_OPTIONS

### `Static`EDIT\_PARTS

EDIT\_PARTS: Record<string, [HandlebarsTemplatePart](../interfaces/foundry.HandlebarsTemplatePart.md)> = ...

Handlebars parts to render in edit mode.

### `Static`emittedEvents

emittedEvents: readonly [unknown, "closeView"] = ...

#### Inherit Doc

Inherited from HandlebarsApplicationMixin(JournalEntryPageSheet).emittedEvents

### `Static`isV2

isV2: boolean = true

Indicates that the sheet renders with App V2 rather than V1.

### `Static`RENDER\_STATES

RENDER\_STATES: Record<string, number> = ...

The sequence of rendering states that describe the Application life-cycle.

Inherited from HandlebarsApplicationMixin(JournalEntryPageSheet).RENDER\_STATES

### `Static`TABS

TABS: Record<string, [ApplicationTabsConfiguration](../interfaces/foundry.applications.types.ApplicationTabsConfiguration.md)> = {}

Configuration of application tabs, with an entry per tab group.

Inherited from HandlebarsApplicationMixin(JournalEntryPageSheet).TABS

### `Static`VIEW\_PARTS

VIEW\_PARTS: Record<string, [HandlebarsTemplatePart](../interfaces/foundry.HandlebarsTemplatePart.md)> = {}

Handlebars part to render in view mode.

## Accessors

### isView

* get isView(): boolean

  Whether the sheet is in view mode.

  #### Returns boolean

  Inherited from HandlebarsApplicationMixin(JournalEntryPageSheet).isView

### page

* get page(): [documents](../modules/foundry.documents.md).[JournalEntryPage](foundry.documents.JournalEntryPage.md)

  The JournalEntryPage for this sheet.

  #### Returns [documents](../modules/foundry.documents.md).[JournalEntryPage](foundry.documents.JournalEntryPage.md)

  Inherited from HandlebarsApplicationMixin(JournalEntryPageSheet).page

## Methods

### \_configureRenderParts

* \_configureRenderParts(options: any): any

  #### Parameters

  + options: any

  #### Returns any

### \_insertElement

* \_insertElement(element: any, options: any): Promise<any>

  #### Parameters

  + element: any
  + options: any

  #### Returns Promise<any>

  #### Inherit Doc

  Inherited from HandlebarsApplicationMixin(JournalEntryPageSheet).\_insertElement

### \_onRender

* \_onRender(context: any, options: any): Promise<void>

  #### Parameters

  + context: any
  + options: any

  #### Returns Promise<void>

  #### Inherit Doc

  Inherited from HandlebarsApplicationMixin(JournalEntryPageSheet).\_onRender

### \_prepareContext

* \_prepareContext(options: any): Promise<any>

  #### Parameters

  + options: any

  #### Returns Promise<any>

  #### Inherit Doc

  Inherited from HandlebarsApplicationMixin(JournalEntryPageSheet).\_prepareContext

### \_preparePartContext

* \_preparePartContext(partId: any, context: any, options: any): Promise<any>

  #### Parameters

  + partId: any
  + context: any
  + options: any

  #### Returns Promise<any>

  #### Inherit Doc

### \_prepareSubmitData

* \_prepareSubmitData(event: any, form: any, formData: any, updateData: any): any

  #### Parameters

  + event: any
  + form: any
  + formData: any
  + updateData: any

  #### Returns any

  #### Inherit Doc

### `Protected`\_onCloseView

* \_onCloseView(): void

  `Protected`

  Actions performed when this sheet is closed in some parent view.

  #### Returns void

  Inherited from HandlebarsApplicationMixin(JournalEntryPageSheet).\_onCloseView

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

### `Protected`\_prepareHeadingLevels

* \_prepareHeadingLevels(): Record<string, string>

  `Protected`

  Prepare heading level choices.

  #### Returns Record<string, string>

  Inherited from HandlebarsApplicationMixin(JournalEntryPageSheet).\_prepareHeadingLevels

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

  Inherited from HandlebarsApplicationMixin(JournalEntryPageSheet).inheritanceChain

### `Static`instances

* instances(): Generator<typeof [ApplicationV2](foundry.applications.api.ApplicationV2.md), any, any>

  Iterate over the instances of this Application.

  #### Returns Generator<typeof [ApplicationV2](foundry.applications.api.ApplicationV2.md), any, any>

  #### Yields

  Inherited from HandlebarsApplicationMixin(JournalEntryPageSheet).instances

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

  Inherited from HandlebarsApplicationMixin(JournalEntryPageSheet).parseCSSDimension

### `Static`waitForImages

* waitForImages(element: HTMLElement): Promise<void>

  Wait for any images in the given element to load.

  #### Parameters

  + element: HTMLElement

    The element.

  #### Returns Promise<void>

  Inherited from HandlebarsApplicationMixin(JournalEntryPageSheet).waitForImages