---
title: "JournalEntryPageHandlebarsSheet | Foundry Virtual Tabletop - API Documentation - Version 13"
url: "https://foundryvtt.com/api/classes/foundry.applications.sheets.journal.JournalEntryPageHandlebarsSheet.html"
category: "classes"
---

* [Foundry Virtual Tabletop - API Documentation - Version 13](../modules.html)
* [foundry](../modules/foundry.html)
* [applications](../modules/foundry.applications.html)
* [sheets](../modules/foundry.applications.sheets.html)
* [journal](../modules/foundry.applications.sheets.journal.html)
* [JournalEntryPageHandlebarsSheet](foundry.applications.sheets.journal.JournalEntryPageHandlebarsSheet.html)

# Class JournalEntryPageHandlebarsSheet

An abstract subclass that contains specialised handlebars logic for JournalEntryPageSheets.

#### Mixes

HandlebarsApplication

#### Hierarchy ([View Summary](../hierarchy.html#foundry.applications.sheets.journal.JournalEntryPageHandlebarsSheet))

* [JournalEntryPageSheet](foundry.applications.sheets.journal.JournalEntryPageSheet.html)<this>
  + JournalEntryPageHandlebarsSheet
    - [JournalEntryPageTextSheet](foundry.applications.sheets.journal.JournalEntryPageTextSheet.html)
    - [JournalEntryPageImageSheet](foundry.applications.sheets.journal.JournalEntryPageImageSheet.html)
    - [JournalEntryPagePDFSheet](foundry.applications.sheets.journal.JournalEntryPagePDFSheet.html)
    - [JournalEntryPageVideoSheet](foundry.applications.sheets.journal.JournalEntryPageVideoSheet.html)

##### Index

### Constructors

[constructor](foundry.applications.sheets.journal.JournalEntryPageHandlebarsSheet.html#constructor)

### Properties

[isV2](foundry.applications.sheets.journal.JournalEntryPageHandlebarsSheet.html#isv2)
[toc](foundry.applications.sheets.journal.JournalEntryPageHandlebarsSheet.html#toc)
[\_appId](foundry.applications.sheets.journal.JournalEntryPageHandlebarsSheet.html#_appid)
[\_maxZ](foundry.applications.sheets.journal.JournalEntryPageHandlebarsSheet.html#_maxz)
[BASE\_APPLICATION](foundry.applications.sheets.journal.JournalEntryPageHandlebarsSheet.html#base_application)
[DEFAULT\_OPTIONS](foundry.applications.sheets.journal.JournalEntryPageHandlebarsSheet.html#default_options)
[EDIT\_PARTS](foundry.applications.sheets.journal.JournalEntryPageHandlebarsSheet.html#edit_parts)
[emittedEvents](foundry.applications.sheets.journal.JournalEntryPageHandlebarsSheet.html#emittedevents)
[isV2](foundry.applications.sheets.journal.JournalEntryPageHandlebarsSheet.html#isv2-1)
[RENDER\_STATES](foundry.applications.sheets.journal.JournalEntryPageHandlebarsSheet.html#render_states)
[TABS](foundry.applications.sheets.journal.JournalEntryPageHandlebarsSheet.html#tabs)
[VIEW\_PARTS](foundry.applications.sheets.journal.JournalEntryPageHandlebarsSheet.html#view_parts)

### Accessors

[isView](foundry.applications.sheets.journal.JournalEntryPageHandlebarsSheet.html#isview)
[page](foundry.applications.sheets.journal.JournalEntryPageHandlebarsSheet.html#page)

### Methods

[\_configureRenderParts](foundry.applications.sheets.journal.JournalEntryPageHandlebarsSheet.html#_configurerenderparts)
[\_insertElement](foundry.applications.sheets.journal.JournalEntryPageHandlebarsSheet.html#_insertelement)
[\_onRender](foundry.applications.sheets.journal.JournalEntryPageHandlebarsSheet.html#_onrender)
[\_prepareContext](foundry.applications.sheets.journal.JournalEntryPageHandlebarsSheet.html#_preparecontext)
[\_preparePartContext](foundry.applications.sheets.journal.JournalEntryPageHandlebarsSheet.html#_preparepartcontext)
[\_prepareSubmitData](foundry.applications.sheets.journal.JournalEntryPageHandlebarsSheet.html#_preparesubmitdata)
[\_onCloseView](foundry.applications.sheets.journal.JournalEntryPageHandlebarsSheet.html#_oncloseview)
[\_prepareContentContext](foundry.applications.sheets.journal.JournalEntryPageHandlebarsSheet.html#_preparecontentcontext)
[\_prepareFooterContext](foundry.applications.sheets.journal.JournalEntryPageHandlebarsSheet.html#_preparefootercontext)
[\_prepareHeaderContext](foundry.applications.sheets.journal.JournalEntryPageHandlebarsSheet.html#_prepareheadercontext)
[\_prepareHeadingLevels](foundry.applications.sheets.journal.JournalEntryPageHandlebarsSheet.html#_prepareheadinglevels)
[\_migrateConstructorParams](foundry.applications.sheets.journal.JournalEntryPageHandlebarsSheet.html#_migrateconstructorparams)
[inheritanceChain](foundry.applications.sheets.journal.JournalEntryPageHandlebarsSheet.html#inheritancechain)
[parseCSSDimension](foundry.applications.sheets.journal.JournalEntryPageHandlebarsSheet.html#parsecssdimension)
[waitForImages](foundry.applications.sheets.journal.JournalEntryPageHandlebarsSheet.html#waitforimages)

## Constructors

### constructor

* new JournalEntryPageHandlebarsSheet(  
  Â Â Â Â options: any,  
  Â Â Â Â ...args: any[],  
  ): [JournalEntryPageHandlebarsSheet](foundry.applications.sheets.journal.JournalEntryPageHandlebarsSheet.html)

  #### Parameters

  + options: any
  + ...args: any[]

  #### Returns [JournalEntryPageHandlebarsSheet](foundry.applications.sheets.journal.JournalEntryPageHandlebarsSheet.html)

  #### Inherit Doc

  Inherited from HandlebarsApplicationMixin(JournalEntryPageSheet).constructor

## Properties

### isV2

isV2: boolean = ...

Indicates that the sheet renders with App V2 rather than V1.

Inherited from HandlebarsApplicationMixin(JournalEntryPageSheet).isV2

### toc

toc: Record<string, [JournalEntryPageHeading](../interfaces/foundry.types.JournalEntryPageHeading.html)>

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

BASE\_APPLICATION: typeof [ApplicationV2](foundry.applications.api.ApplicationV2.html) = ApplicationV2

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

EDIT\_PARTS: Record<string, [HandlebarsTemplatePart](../interfaces/foundry.HandlebarsTemplatePart.html)> = ...

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

TABS: Record<string, [ApplicationTabsConfiguration](../interfaces/foundry.applications.types.ApplicationTabsConfiguration.html)> = {}

Configuration of application tabs, with an entry per tab group.

Inherited from HandlebarsApplicationMixin(JournalEntryPageSheet).TABS

### `Static`VIEW\_PARTS

VIEW\_PARTS: Record<string, [HandlebarsTemplatePart](../interfaces/foundry.HandlebarsTemplatePart.html)> = {}

Handlebars part to render in view mode.

## Accessors

### isView

* get isView(): boolean

  Whether the sheet is in view mode.

  #### Returns boolean

  Inherited from HandlebarsApplicationMixin(JournalEntryPageSheet).isView

### page

* get page(): [documents](../modules/foundry.documents.html).[JournalEntryPage](foundry.documents.JournalEntryPage.html)

  The JournalEntryPage for this sheet.

  #### Returns [documents](../modules/foundry.documents.html).[JournalEntryPage](foundry.documents.JournalEntryPage.html)

  Inherited from HandlebarsApplicationMixin(JournalEntryPageSheet).page

## Methods

### \_configureRenderParts

* \_configureRenderParts(options: any): any

  #### Parameters

  + options: any

  #### Returns any

### \_insertElement

* \_insertElement(element: any): void

  #### Parameters

  + element: any

  #### Returns void

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
  Â Â Â Â context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.html),  
  Â Â Â Â options: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.html),  
  ): Promise<void>

  `Protected`

  Prepare render context for the content part.

  #### Parameters

  + context: [ApplicationRenderContext](../interfaces/foundry.applications.types.ApplicationRenderContext.html)
  + options: [HandlebarsRenderOptions](../interfaces/foundry.HandlebarsRenderOptions.html)

  #### Returns Promise<void>

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
  ): Partial<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.html) & [DocumentSheetConfiguration](../interfaces/foundry.DocumentSheetConfiguration.html)>

  `Internal`

  Provide a deprecation path for converted V1 document sheets.

  #### Parameters

  + first: unknown

    The first parameter received by this class's constructor
  + rest: unknown[]

    Any additional parameters received

  #### Returns Partial<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.html) & [DocumentSheetConfiguration](../interfaces/foundry.DocumentSheetConfiguration.html)>

### `Static`inheritanceChain

* inheritanceChain(): Generator<typeof [ApplicationV2](foundry.applications.api.ApplicationV2.html), void, unknown>

  Iterate over the inheritance chain of this Application.
  The chain includes this Application itself and all parents until the base application is encountered.

  #### Returns Generator<typeof [ApplicationV2](foundry.applications.api.ApplicationV2.html), void, unknown>

  #### See

  [ApplicationV2.BASE\_APPLICATION](foundry.applications.api.ApplicationV2.html#base_application)

  #### Yields

  Inherited from HandlebarsApplicationMixin(JournalEntryPageSheet).inheritanceChain

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