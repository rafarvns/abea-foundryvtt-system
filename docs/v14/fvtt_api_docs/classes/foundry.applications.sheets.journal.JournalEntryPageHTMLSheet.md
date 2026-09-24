---
title: "JournalEntryPageHTMLSheet | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.applications.sheets.journal.JournalEntryPageHTMLSheet.html"
category: "classes"
---

# Class JournalEntryPageHTMLSheet

An Application responsible for displaying a single text-type JournalEntryPage Document, and editing it with an HTML
editor.

#### Hierarchy ([View Summary](../hierarchy.md#foundry.applications.sheets.journal.JournalEntryPageHTMLSheet))

* [JournalEntryPageCodeMirrorSheet](foundry.applications.sheets.journal.JournalEntryPageCodeMirrorSheet.md)
  + JournalEntryPageHTMLSheet

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
[\_configureRenderParts](#_configurerenderparts)
[\_insertElement](#_insertelement)
[\_isEditorDirty](#_iseditordirty)
[\_onRender](#_onrender)
[\_prepareContentContext](#_preparecontentcontext)
[\_prepareContext](#_preparecontext)
[\_preparePartContext](#_preparepartcontext)
[\_prepareSubmitData](#_preparesubmitdata)
[\_preSyncPartState](#_presyncpartstate)
[\_syncPartState](#_syncpartstate)
[\_onCloseView](#_oncloseview)
[\_onDrop](#_ondrop)
[\_onDropContentLink](#_ondropcontentlink)
[\_prepareFooterContext](#_preparefootercontext)
[\_prepareHeaderContext](#_prepareheadercontext)
[\_prepareHeadingLevels](#_prepareheadinglevels)
[\_migrateConstructorParams](#_migrateconstructorparams)
[formatHTML](#formathtml)
[inheritanceChain](#inheritancechain)
[instances](#instances)
[parseCSSDimension](#parsecssdimension)
[waitForImages](#waitforimages)

## Constructors

### constructor

* new JournalEntryPageHTMLSheet(  
  Â Â Â Â options: any,  
  Â Â Â Â ...args: any[],  
  ): JournalEntryPageHTMLSheet

  #### Parameters

  + options: any
  + ...args: any[]

  #### Returns JournalEntryPageHTMLSheet

  #### Inherit Doc

  Inherited from JournalEntryPageCodeMirrorSheet.constructor

## Properties

### isV2

isV2: boolean = ...

Indicates that the sheet renders with App V2 rather than V1.

Inherited from JournalEntryPageCodeMirrorSheet.isV2

### toc

toc: Record<string, [JournalEntryPageHeading](../interfaces/foundry.types.JournalEntryPageHeading.md)>

The table of contents for this text page.

Inherited from JournalEntryPageCodeMirrorSheet.toc

### `Static` `Internal`\_appId

\_appId: number = 0

An incrementing integer Application ID.

Inherited from JournalEntryPageCodeMirrorSheet.\_appId

### `Static` `Internal`\_maxZ

\_maxZ: number = ...

The current maximum z-index of any displayed Application.

Inherited from JournalEntryPageCodeMirrorSheet.\_maxZ

### `Static`BASE\_APPLICATION

BASE\_APPLICATION: typeof [ApplicationV2](foundry.applications.api.ApplicationV2.md) = ApplicationV2

Designates which upstream Application class in this class' inheritance chain is the base application.
Any DEFAULT\_OPTIONS of super-classes further upstream of the BASE\_APPLICATION are ignored.
Hook events for super-classes further upstream of the BASE\_APPLICATION are not dispatched.

Inherited from JournalEntryPageCodeMirrorSheet.BASE\_APPLICATION

### `Static`DEFAULT\_OPTIONS

DEFAULT\_OPTIONS: { window: { icon: string } } = ...

Overrides JournalEntryPageCodeMirrorSheet.DEFAULT\_OPTIONS

### `Static`EDIT\_PARTS

EDIT\_PARTS: {  
Â Â Â Â content: { classes: string[]; template: string };  
Â Â Â Â footer: [HandlebarsTemplatePart](../interfaces/foundry.HandlebarsTemplatePart.md);  
Â Â Â Â header: [HandlebarsTemplatePart](../interfaces/foundry.HandlebarsTemplatePart.md);  
} = ...

#### Inherit Doc

Overrides JournalEntryPageCodeMirrorSheet.EDIT\_PARTS

### `Static`emittedEvents

emittedEvents: readonly [unknown, "closeView"] = ...

#### Inherit Doc

Inherited from JournalEntryPageCodeMirrorSheet.emittedEvents

### `Static`format

format: number = JOURNAL\_ENTRY\_PAGE\_FORMATS.HTML

The format used to edit text content in this sheet.

Inherited from JournalEntryPageCodeMirrorSheet.format

### `Static`isV2

isV2: boolean = true

Indicates that the sheet renders with App V2 rather than V1.

Inherited from JournalEntryPageCodeMirrorSheet.isV2

### `Static`RENDER\_STATES

RENDER\_STATES: Record<string, number> = ...

The sequence of rendering states that describe the Application life-cycle.

Inherited from JournalEntryPageCodeMirrorSheet.RENDER\_STATES

### `Static`TABS

TABS: Record<string, [ApplicationTabsConfiguration](../interfaces/foundry.applications.types.ApplicationTabsConfiguration.md)> = {}

Configuration of application tabs, with an entry per tab group.

Inherited from JournalEntryPageCodeMirrorSheet.TABS

### `Static`VIEW\_PARTS

VIEW\_PARTS: { content: { root: boolean; template: string } } = ...

#### Inherit Doc

Inherited from JournalEntryPageCodeMirrorSheet.VIEW\_PARTS

### `Protected` `Static`\_converter

\_converter: Converter = ...

Bi-directional HTML <-> Markdown converter.

Inherited from JournalEntryPageCodeMirrorSheet.\_converter

## Accessors

### isView

* get isView(): boolean

  Whether the sheet is in view mode.

  #### Returns boolean

  Inherited from JournalEntryPageCodeMirrorSheet.isView

### page

* get page(): [documents](../modules/foundry.documents.md).[JournalEntryPage](foundry.documents.JournalEntryPage.md)

  The JournalEntryPage for this sheet.

  #### Returns [documents](../modules/foundry.documents.md).[JournalEntryPage](foundry.documents.JournalEntryPage.md)

  Inherited from JournalEntryPageCodeMirrorSheet.page

## Methods

### \_attachFrameListeners

* \_attachFrameListeners(): void

  #### Returns void

  #### Inherit Doc

  Inherited from JournalEntryPageCodeMirrorSheet.\_attachFrameListeners

### \_configureRenderParts

* \_configureRenderParts(options: any): any

  #### Parameters

  + options: any

  #### Returns any

  Inherited from JournalEntryPageCodeMirrorSheet.\_configureRenderParts

### \_insertElement

* \_insertElement(element: any, options: any): Promise<any>

  #### Parameters

  + element: any
  + options: any

  #### Returns Promise<any>

  #### Inherit Doc

  Inherited from JournalEntryPageCodeMirrorSheet.\_insertElement

### \_isEditorDirty

* \_isEditorDirty(): boolean

  #### Returns boolean

  Inherited from JournalEntryPageCodeMirrorSheet.\_isEditorDirty

### \_onRender

* \_onRender(context: any, options: any): Promise<void>

  #### Parameters

  + context: any
  + options: any

  #### Returns Promise<void>

  #### Inherit Doc

  Inherited from JournalEntryPageCodeMirrorSheet.\_onRender

### \_prepareContentContext

* \_prepareContentContext(context: any, options: any): Promise<void>

  #### Parameters

  + context: any
  + options: any

  #### Returns Promise<void>

  #### Inherit Doc

  Overrides JournalEntryPageCodeMirrorSheet.\_prepareContentContext

### \_prepareContext

* \_prepareContext(options: any): Promise<any>

  #### Parameters

  + options: any

  #### Returns Promise<any>

  #### Inherit Doc

  Inherited from JournalEntryPageCodeMirrorSheet.\_prepareContext

### \_preparePartContext

* \_preparePartContext(partId: any, context: any, options: any): Promise<any>

  #### Parameters

  + partId: any
  + context: any
  + options: any

  #### Returns Promise<any>

  #### Inherit Doc

  Inherited from JournalEntryPageCodeMirrorSheet.\_preparePartContext

### \_prepareSubmitData

* \_prepareSubmitData(event: any, form: any, formData: any, updateData: any): any

  #### Parameters

  + event: any
  + form: any
  + formData: any
  + updateData: any

  #### Returns any

  #### Inherit Doc

  Overrides JournalEntryPageCodeMirrorSheet.\_prepareSubmitData

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

  Inherited from JournalEntryPageCodeMirrorSheet.\_preSyncPartState

### \_syncPartState

* \_syncPartState(  
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

  Inherited from JournalEntryPageCodeMirrorSheet.\_syncPartState

### `Protected`\_onCloseView

* \_onCloseView(): void

  `Protected`

  Actions performed when this sheet is closed in some parent view.

  #### Returns void

  Inherited from JournalEntryPageCodeMirrorSheet.\_onCloseView

### `Protected`\_onDrop

* \_onDrop(event: DragEvent): Promise<void> | undefined

  `Protected`

  Handle dropping something onto the code-mirror editor.

  #### Parameters

  + event: DragEvent

    The triggering event.

  #### Returns Promise<void> | undefined

  Inherited from JournalEntryPageCodeMirrorSheet.\_onDrop

### `Protected`\_onDropContentLink

* \_onDropContentLink(event: DragEvent, eventData: object): Promise<void>

  `Protected`

  Handle dropping a content link onto the code-mirror editor.

  #### Parameters

  + event: DragEvent

    The originating drop event.
  + eventData: object

    The parsed event data.

  #### Returns Promise<void>

  Inherited from JournalEntryPageCodeMirrorSheet.\_onDropContentLink

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

  Inherited from JournalEntryPageCodeMirrorSheet.\_prepareFooterContext

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

  Inherited from JournalEntryPageCodeMirrorSheet.\_prepareHeaderContext

### `Protected`\_prepareHeadingLevels

* \_prepareHeadingLevels(): Record<string, string>

  `Protected`

  Prepare heading level choices.

  #### Returns Record<string, string>

  Inherited from JournalEntryPageCodeMirrorSheet.\_prepareHeadingLevels

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

  Inherited from JournalEntryPageCodeMirrorSheet.\_migrateConstructorParams

### `Static`formatHTML

* formatHTML(html: string, options?: { spaces?: string | number }): string

  Auto-format an HTML string.

  #### Parameters

  + html: string

    The HTML string.
  + `Optional`options: { spaces?: string | number } = {}
    - ##### `Optional`spaces?: string | number

      The number of spaces to indent by, or a string to use as indentation.

  #### Returns string

### `Static`inheritanceChain

* inheritanceChain(): Generator<typeof [ApplicationV2](foundry.applications.api.ApplicationV2.md), void, unknown>

  Iterate over the inheritance chain of this Application.
  The chain includes this Application itself and all parents until the base application is encountered.

  #### Returns Generator<typeof [ApplicationV2](foundry.applications.api.ApplicationV2.md), void, unknown>

  #### See

  [ApplicationV2.BASE\_APPLICATION](foundry.applications.api.ApplicationV2.md#base_application)

  #### Yields

  Inherited from JournalEntryPageCodeMirrorSheet.inheritanceChain

### `Static`instances

* instances(): Generator<typeof [ApplicationV2](foundry.applications.api.ApplicationV2.md), any, any>

  Iterate over the instances of this Application.

  #### Returns Generator<typeof [ApplicationV2](foundry.applications.api.ApplicationV2.md), any, any>

  #### Yields

  Inherited from JournalEntryPageCodeMirrorSheet.instances

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

  Inherited from JournalEntryPageCodeMirrorSheet.parseCSSDimension

### `Static`waitForImages

* waitForImages(element: HTMLElement): Promise<void>

  Wait for any images in the given element to load.

  #### Parameters

  + element: HTMLElement

    The element.

  #### Returns Promise<void>

  Inherited from JournalEntryPageCodeMirrorSheet.waitForImages