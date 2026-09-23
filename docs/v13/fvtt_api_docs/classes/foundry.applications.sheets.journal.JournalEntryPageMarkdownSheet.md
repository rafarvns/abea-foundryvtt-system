---
title: "JournalEntryPageMarkdownSheet | Foundry Virtual Tabletop - API Documentation - Version 13"
url: "https://foundryvtt.com/api/classes/foundry.applications.sheets.journal.JournalEntryPageMarkdownSheet.html"
category: "classes"
---

* [Foundry Virtual Tabletop - API Documentation - Version 13](../modules.html)
* [foundry](../modules/foundry.html)
* [applications](../modules/foundry.applications.html)
* [sheets](../modules/foundry.applications.sheets.html)
* [journal](../modules/foundry.applications.sheets.journal.html)
* [JournalEntryPageMarkdownSheet](foundry.applications.sheets.journal.JournalEntryPageMarkdownSheet.html)

# Class JournalEntryPageMarkdownSheet

An Application responsible for displaying a single text-type JournalEntryPage Document, and editing it with a
Markdown editor.

#### Hierarchy ([View Summary](../hierarchy.html#foundry.applications.sheets.journal.JournalEntryPageMarkdownSheet))

* [JournalEntryPageTextSheet](foundry.applications.sheets.journal.JournalEntryPageTextSheet.html)
  + JournalEntryPageMarkdownSheet

##### Index

### Constructors

[constructor](foundry.applications.sheets.journal.JournalEntryPageMarkdownSheet.html#constructor)

### Properties

[isV2](foundry.applications.sheets.journal.JournalEntryPageMarkdownSheet.html#isv2)
[toc](foundry.applications.sheets.journal.JournalEntryPageMarkdownSheet.html#toc)
[\_appId](foundry.applications.sheets.journal.JournalEntryPageMarkdownSheet.html#_appid)
[\_maxZ](foundry.applications.sheets.journal.JournalEntryPageMarkdownSheet.html#_maxz)
[BASE\_APPLICATION](foundry.applications.sheets.journal.JournalEntryPageMarkdownSheet.html#base_application)
[DEFAULT\_OPTIONS](foundry.applications.sheets.journal.JournalEntryPageMarkdownSheet.html#default_options)
[EDIT\_PARTS](foundry.applications.sheets.journal.JournalEntryPageMarkdownSheet.html#edit_parts)
[emittedEvents](foundry.applications.sheets.journal.JournalEntryPageMarkdownSheet.html#emittedevents)
[format](foundry.applications.sheets.journal.JournalEntryPageMarkdownSheet.html#format)
[isV2](foundry.applications.sheets.journal.JournalEntryPageMarkdownSheet.html#isv2-1)
[RENDER\_STATES](foundry.applications.sheets.journal.JournalEntryPageMarkdownSheet.html#render_states)
[TABS](foundry.applications.sheets.journal.JournalEntryPageMarkdownSheet.html#tabs)
[VIEW\_PARTS](foundry.applications.sheets.journal.JournalEntryPageMarkdownSheet.html#view_parts)
[\_converter](foundry.applications.sheets.journal.JournalEntryPageMarkdownSheet.html#_converter)

### Accessors

[isView](foundry.applications.sheets.journal.JournalEntryPageMarkdownSheet.html#isview)
[page](foundry.applications.sheets.journal.JournalEntryPageMarkdownSheet.html#page)

### Methods

[\_attachFrameListeners](foundry.applications.sheets.journal.JournalEntryPageMarkdownSheet.html#_attachframelisteners)
[\_configureRenderParts](foundry.applications.sheets.journal.JournalEntryPageMarkdownSheet.html#_configurerenderparts)
[\_insertElement](foundry.applications.sheets.journal.JournalEntryPageMarkdownSheet.html#_insertelement)
[\_isEditorDirty](foundry.applications.sheets.journal.JournalEntryPageMarkdownSheet.html#_iseditordirty)
[\_onRender](foundry.applications.sheets.journal.JournalEntryPageMarkdownSheet.html#_onrender)
[\_prepareContentContext](foundry.applications.sheets.journal.JournalEntryPageMarkdownSheet.html#_preparecontentcontext)
[\_prepareContext](foundry.applications.sheets.journal.JournalEntryPageMarkdownSheet.html#_preparecontext)
[\_preparePartContext](foundry.applications.sheets.journal.JournalEntryPageMarkdownSheet.html#_preparepartcontext)
[\_prepareSubmitData](foundry.applications.sheets.journal.JournalEntryPageMarkdownSheet.html#_preparesubmitdata)
[\_preSyncPartState](foundry.applications.sheets.journal.JournalEntryPageMarkdownSheet.html#_presyncpartstate)
[\_syncPartState](foundry.applications.sheets.journal.JournalEntryPageMarkdownSheet.html#_syncpartstate)
[\_onCloseView](foundry.applications.sheets.journal.JournalEntryPageMarkdownSheet.html#_oncloseview)
[\_onDrop](foundry.applications.sheets.journal.JournalEntryPageMarkdownSheet.html#_ondrop)
[\_onDropContentLink](foundry.applications.sheets.journal.JournalEntryPageMarkdownSheet.html#_ondropcontentlink)
[\_prepareFooterContext](foundry.applications.sheets.journal.JournalEntryPageMarkdownSheet.html#_preparefootercontext)
[\_prepareHeaderContext](foundry.applications.sheets.journal.JournalEntryPageMarkdownSheet.html#_prepareheadercontext)
[\_prepareHeadingLevels](foundry.applications.sheets.journal.JournalEntryPageMarkdownSheet.html#_prepareheadinglevels)
[\_migrateConstructorParams](foundry.applications.sheets.journal.JournalEntryPageMarkdownSheet.html#_migrateconstructorparams)
[inheritanceChain](foundry.applications.sheets.journal.JournalEntryPageMarkdownSheet.html#inheritancechain)
[parseCSSDimension](foundry.applications.sheets.journal.JournalEntryPageMarkdownSheet.html#parsecssdimension)
[waitForImages](foundry.applications.sheets.journal.JournalEntryPageMarkdownSheet.html#waitforimages)

## Constructors

### constructor

* new JournalEntryPageMarkdownSheet(  
  Â Â Â Â options: any,  
  Â Â Â Â ...args: any[],  
  ): [JournalEntryPageMarkdownSheet](foundry.applications.sheets.journal.JournalEntryPageMarkdownSheet.html)

  #### Parameters

  + options: any
  + ...args: any[]

  #### Returns [JournalEntryPageMarkdownSheet](foundry.applications.sheets.journal.JournalEntryPageMarkdownSheet.html)

  #### Inherit Doc

  Inherited from JournalEntryPageTextSheet.constructor

## Properties

### isV2

isV2: boolean = ...

Indicates that the sheet renders with App V2 rather than V1.

Inherited from JournalEntryPageTextSheet.isV2

### toc

toc: Record<string, [JournalEntryPageHeading](../interfaces/foundry.types.JournalEntryPageHeading.html)>

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

BASE\_APPLICATION: typeof [ApplicationV2](foundry.applications.api.ApplicationV2.html) = ApplicationV2

Designates which upstream Application class in this class' inheritance chain is the base application.
Any DEFAULT\_OPTIONS of super-classes further upstream of the BASE\_APPLICATION are ignored.
Hook events for super-classes further upstream of the BASE\_APPLICATION are not dispatched.

Inherited from JournalEntryPageTextSheet.BASE\_APPLICATION

### `Static`DEFAULT\_OPTIONS

DEFAULT\_OPTIONS: { window: { contentClasses: string[]; icon: string } } = ...

Overrides JournalEntryPageTextSheet.DEFAULT\_OPTIONS

### `Static`EDIT\_PARTS

EDIT\_PARTS: {  
Â Â Â Â content: { classes: string[]; template: string };  
Â Â Â Â footer: [HandlebarsTemplatePart](../interfaces/foundry.HandlebarsTemplatePart.html);  
Â Â Â Â header: [HandlebarsTemplatePart](../interfaces/foundry.HandlebarsTemplatePart.html);  
} = ...

#### Inherit Doc

Overrides JournalEntryPageTextSheet.EDIT\_PARTS

### `Static`emittedEvents

emittedEvents: readonly [unknown, "closeView"] = ...

#### Inherit Doc

Inherited from JournalEntryPageTextSheet.emittedEvents

### `Static`format

format: 2 = JOURNAL\_ENTRY\_PAGE\_FORMATS.MARKDOWN

Overrides JournalEntryPageTextSheet.format

### `Static`isV2

isV2: boolean = true

Indicates that the sheet renders with App V2 rather than V1.

Inherited from JournalEntryPageTextSheet.isV2

### `Static`RENDER\_STATES

RENDER\_STATES: Record<string, number> = ...

The sequence of rendering states that describe the Application life-cycle.

Inherited from JournalEntryPageTextSheet.RENDER\_STATES

### `Static`TABS

TABS: Record<string, [ApplicationTabsConfiguration](../interfaces/foundry.applications.types.ApplicationTabsConfiguration.html)> = {}

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

* get page(): [documents](../modules/foundry.documents.html).[JournalEntryPage](foundry.documents.JournalEntryPage.html)

  The JournalEntryPage for this sheet.

  #### Returns [documents](../modules/foundry.documents.html).[JournalEntryPage](foundry.documents.JournalEntryPage.html)

  Inherited from JournalEntryPageTextSheet.page

## Methods

### \_attachFrameListeners

* \_attachFrameListeners(): void

  #### Returns void

  #### Inherit Doc

### \_configureRenderParts

* \_configureRenderParts(options: any): any

  #### Parameters

  + options: any

  #### Returns any

  Inherited from JournalEntryPageTextSheet.\_configureRenderParts

### \_insertElement

* \_insertElement(element: any): void

  #### Parameters

  + element: any

  #### Returns void

  #### Inherit Doc

  Inherited from JournalEntryPageTextSheet.\_insertElement

### \_isEditorDirty

* \_isEditorDirty(): boolean

  #### Returns boolean

  Overrides JournalEntryPageTextSheet.\_isEditorDirty

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

  Overrides JournalEntryPageTextSheet.\_prepareSubmitData

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

### `Protected`\_onCloseView

* \_onCloseView(): void

  `Protected`

  Actions performed when this sheet is closed in some parent view.

  #### Returns void

  Inherited from JournalEntryPageTextSheet.\_onCloseView

### `Protected`\_onDrop

* \_onDrop(event: DragEvent): undefined | Promise<void>

  `Protected`

  Handle dropping something onto the markdown editor.

  #### Parameters

  + event: DragEvent

    The triggering event.

  #### Returns undefined | Promise<void>

### `Protected`\_onDropContentLink

* \_onDropContentLink(event: DragEvent, eventData: object): Promise<void>

  `Protected`

  Handle dropping a content link onto the markdown editor.

  #### Parameters

  + event: DragEvent

    The originating drop event.
  + eventData: object

    The parsed event data.

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

  Inherited from JournalEntryPageTextSheet.\_prepareFooterContext

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
  ): Partial<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.html) & [DocumentSheetConfiguration](../interfaces/foundry.DocumentSheetConfiguration.html)>

  `Internal`

  Provide a deprecation path for converted V1 document sheets.

  #### Parameters

  + first: unknown

    The first parameter received by this class's constructor
  + rest: unknown[]

    Any additional parameters received

  #### Returns Partial<[ApplicationConfiguration](../interfaces/foundry.applications.types.ApplicationConfiguration.html) & [DocumentSheetConfiguration](../interfaces/foundry.DocumentSheetConfiguration.html)>

  Inherited from JournalEntryPageTextSheet.\_migrateConstructorParams

### `Static`inheritanceChain

* inheritanceChain(): Generator<typeof [ApplicationV2](foundry.applications.api.ApplicationV2.html), void, unknown>

  Iterate over the inheritance chain of this Application.
  The chain includes this Application itself and all parents until the base application is encountered.

  #### Returns Generator<typeof [ApplicationV2](foundry.applications.api.ApplicationV2.html), void, unknown>

  #### See

  [ApplicationV2.BASE\_APPLICATION](foundry.applications.api.ApplicationV2.html#base_application)

  #### Yields

  Inherited from JournalEntryPageTextSheet.inheritanceChain

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