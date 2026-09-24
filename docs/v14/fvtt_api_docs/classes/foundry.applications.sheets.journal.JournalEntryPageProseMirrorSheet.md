---
title: "JournalEntryPageProseMirrorSheet | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.applications.sheets.journal.JournalEntryPageProseMirrorSheet.html"
category: "classes"
---

# Class JournalEntryPageProseMirrorSheet

An Application responsible for displaying a single text-type JournalEntryPage Document, and editing it with a
ProseMirror editor.

#### Hierarchy ([View Summary](../hierarchy.md#foundry.applications.sheets.journal.JournalEntryPageProseMirrorSheet))

* [JournalEntryPageTextSheet](foundry.applications.sheets.journal.JournalEntryPageTextSheet.md)
  + JournalEntryPageProseMirrorSheet

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

[\_attachFrameListeners](#_attachframelisteners)
[\_canRender](#_canrender)
[\_configureRenderParts](#_configurerenderparts)
[\_insertElement](#_insertelement)
[\_isEditorDirty](#_iseditordirty)
[\_onAutosave](#_onautosave)
[\_onNewSteps](#_onnewsteps)
[\_onRender](#_onrender)
[\_prepareContentContext](#_preparecontentcontext)
[\_prepareContext](#_preparecontext)
[\_preparePartContext](#_preparepartcontext)
[\_prepareSubmitData](#_preparesubmitdata)
[\_onCloseView](#_oncloseview)
[\_onConfigurePlugins](#_onconfigureplugins)
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

* new JournalEntryPageProseMirrorSheet(  
  Â Â Â Â options: any,  
  Â Â Â Â ...args: any[],  
  ): JournalEntryPageProseMirrorSheet

  #### Parameters

  + options: any
  + ...args: any[]

  #### Returns JournalEntryPageProseMirrorSheet

  #### Inherit Doc

  Inherited from JournalEntryPageTextSheet.constructor

## Properties

### isV2

isV2: boolean = ...

Indicates that the sheet renders with App V2 rather than V1.

Inherited from JournalEntryPageTextSheet.isV2

### toc

toc: Record<string, [JournalEntryPageHeading](../interfaces/foundry.types.JournalEntryPageHeading.md)>

The table of contents for this text page.

Inherited from JournalEntryPageTextSheet.toc

### `Static` `Internal`\_appId

\_appId: number = 0

An incrementing integer Application ID.

Inherited from JournalEntryPageTextSheet.\_appId

### `Static` `Internal`\_maxZ

\_maxZ: number = ...

The current maximum z-index of any displayed Application.

Inherited from JournalEntryPageTextSheet.\_maxZ

### `Static`BASE\_APPLICATION

BASE\_APPLICATION: typeof [ApplicationV2](foundry.applications.api.ApplicationV2.md) = ApplicationV2

Designates which upstream Application class in this class' inheritance chain is the base application.
Any DEFAULT\_OPTIONS of super-classes further upstream of the BASE\_APPLICATION are ignored.
Hook events for super-classes further upstream of the BASE\_APPLICATION are not dispatched.

Inherited from JournalEntryPageTextSheet.BASE\_APPLICATION

### `Static`DEFAULT\_OPTIONS

DEFAULT\_OPTIONS: { window: { icon: string } } = ...

Overrides JournalEntryPageTextSheet.DEFAULT\_OPTIONS

### `Static`EDIT\_PARTS

EDIT\_PARTS: {  
Â Â Â Â content: { template: string };  
Â Â Â Â footer: [HandlebarsTemplatePart](../interfaces/foundry.HandlebarsTemplatePart.md);  
Â Â Â Â header: [HandlebarsTemplatePart](../interfaces/foundry.HandlebarsTemplatePart.md);  
} = ...

#### Inherit Doc

Overrides JournalEntryPageTextSheet.EDIT\_PARTS

### `Static`emittedEvents

emittedEvents: readonly [unknown, "closeView"] = ...

#### Inherit Doc

Inherited from JournalEntryPageTextSheet.emittedEvents

### `Static`format

format: number = JOURNAL\_ENTRY\_PAGE\_FORMATS.HTML

The format used to edit text content in this sheet.

Inherited from JournalEntryPageTextSheet.format

### `Static`isV2

isV2: boolean = true

Indicates that the sheet renders with App V2 rather than V1.

Inherited from JournalEntryPageTextSheet.isV2

### `Static`RENDER\_STATES

RENDER\_STATES: Record<string, number> = ...

The sequence of rendering states that describe the Application life-cycle.

Inherited from JournalEntryPageTextSheet.RENDER\_STATES

### `Static`TABS

TABS: Record<string, [ApplicationTabsConfiguration](../interfaces/foundry.applications.types.ApplicationTabsConfiguration.md)> = {}

Configuration of application tabs, with an entry per tab group.

Inherited from JournalEntryPageTextSheet.TABS

### `Static`VIEW\_PARTS

VIEW\_PARTS: { content: { root: boolean; template: string } } = ...

Overrides JournalEntryPageTextSheet.VIEW\_PARTS

### `Protected` `Static`\_converter

\_converter: Converter = ...

Bi-directional HTML <-> Markdown converter.

Inherited from JournalEntryPageTextSheet.\_converter

## Accessors

### isView

* get isView(): boolean

  Whether the sheet is in view mode.

  #### Returns boolean

  Inherited from JournalEntryPageTextSheet.isView

### page

* get page(): [documents](../modules/foundry.documents.md).[JournalEntryPage](foundry.documents.JournalEntryPage.md)

  The JournalEntryPage for this sheet.

  #### Returns [documents](../modules/foundry.documents.md).[JournalEntryPage](foundry.documents.JournalEntryPage.md)

  Inherited from JournalEntryPageTextSheet.page

## Methods

### \_attachFrameListeners

* \_attachFrameListeners(): void

  #### Returns void

  #### Inherit Doc

### \_canRender

* \_canRender(options: any): boolean

  #### Parameters

  + options: any

  #### Returns boolean

### \_configureRenderParts

* \_configureRenderParts(options: any): any

  #### Parameters

  + options: any

  #### Returns any

  Inherited from JournalEntryPageTextSheet.\_configureRenderParts

### \_insertElement

* \_insertElement(element: any, options: any): Promise<any>

  #### Parameters

  + element: any
  + options: any

  #### Returns Promise<any>

  #### Inherit Doc

  Inherited from JournalEntryPageTextSheet.\_insertElement

### \_isEditorDirty

* \_isEditorDirty(): any

  #### Returns any

  Overrides JournalEntryPageTextSheet.\_isEditorDirty

### \_onAutosave

* \_onAutosave(content: string): void

  `Internal`

  Update the parent sheet if it is open when the server autosaves the contents of this editor.

  #### Parameters

  + content: string

    The updated editor contents.

  #### Returns void

### \_onNewSteps

* \_onNewSteps(): void

  `Internal`

  Update the UI appropriately when receiving new steps from another client.

  #### Returns void

### \_onRender

* \_onRender(context: any, options: any): Promise<void>

  #### Parameters

  + context: any
  + options: any

  #### Returns Promise<void>

  #### Inherit Doc

  Inherited from JournalEntryPageTextSheet.\_onRender

### \_prepareContentContext

* \_prepareContentContext(context: any, options: any): Promise<void>

  #### Parameters

  + context: any
  + options: any

  #### Returns Promise<void>

  #### Inherit Doc

  Overrides JournalEntryPageTextSheet.\_prepareContentContext

### \_prepareContext

* \_prepareContext(options: any): Promise<any>

  #### Parameters

  + options: any

  #### Returns Promise<any>

  #### Inherit Doc

  Inherited from JournalEntryPageTextSheet.\_prepareContext

### \_preparePartContext

* \_preparePartContext(partId: any, context: any, options: any): Promise<any>

  #### Parameters

  + partId: any
  + context: any
  + options: any

  #### Returns Promise<any>

  #### Inherit Doc

  Inherited from JournalEntryPageTextSheet.\_preparePartContext

### \_prepareSubmitData

* \_prepareSubmitData(event: any, form: any, formData: any, updateData: any): any

  #### Parameters

  + event: any
  + form: any
  + formData: any
  + updateData: any

  #### Returns any

  #### Inherit Doc

  Inherited from JournalEntryPageTextSheet.\_prepareSubmitData

### `Protected`\_onCloseView

* \_onCloseView(): void

  `Protected`

  Actions performed when this sheet is closed in some parent view.

  #### Returns void

  Inherited from JournalEntryPageTextSheet.\_onCloseView

### `Protected`\_onConfigurePlugins

* \_onConfigurePlugins(event: ProseMirrorPluginsEvent): void

  `Protected`

  Configure plugins for the ProseMirror instance.

  #### Parameters

  + event: ProseMirrorPluginsEvent

  #### Returns void

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

  Inherited from JournalEntryPageTextSheet.\_prepareFooterContext

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

  Inherited from JournalEntryPageTextSheet.\_prepareHeaderContext

### `Protected`\_prepareHeadingLevels

* \_prepareHeadingLevels(): Record<string, string>

  `Protected`

  Prepare heading level choices.

  #### Returns Record<string, string>

  Inherited from JournalEntryPageTextSheet.\_prepareHeadingLevels

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

  Inherited from JournalEntryPageTextSheet.\_migrateConstructorParams

### `Static`inheritanceChain

* inheritanceChain(): Generator<typeof [ApplicationV2](foundry.applications.api.ApplicationV2.md), void, unknown>

  Iterate over the inheritance chain of this Application.
  The chain includes this Application itself and all parents until the base application is encountered.

  #### Returns Generator<typeof [ApplicationV2](foundry.applications.api.ApplicationV2.md), void, unknown>

  #### See

  [ApplicationV2.BASE\_APPLICATION](foundry.applications.api.ApplicationV2.md#base_application)

  #### Yields

  Inherited from JournalEntryPageTextSheet.inheritanceChain

### `Static`instances

* instances(): Generator<typeof [ApplicationV2](foundry.applications.api.ApplicationV2.md), any, any>

  Iterate over the instances of this Application.

  #### Returns Generator<typeof [ApplicationV2](foundry.applications.api.ApplicationV2.md), any, any>

  #### Yields

  Inherited from JournalEntryPageTextSheet.instances

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

  Inherited from JournalEntryPageTextSheet.parseCSSDimension

### `Static`waitForImages

* waitForImages(element: HTMLElement): Promise<void>

  Wait for any images in the given element to load.

  #### Parameters

  + element: HTMLElement

    The element.

  #### Returns Promise<void>

  Inherited from JournalEntryPageTextSheet.waitForImages