---
title: "JournalEntryPageSheet | Foundry Virtual Tabletop - API Documentation - Version 13"
url: "https://foundryvtt.com/api/classes/foundry.applications.sheets.journal.JournalEntryPageSheet.html"
category: "classes"
---

* [Foundry Virtual Tabletop - API Documentation - Version 13](../modules.html)
* [foundry](../modules/foundry.html)
* [applications](../modules/foundry.applications.html)
* [sheets](../modules/foundry.applications.sheets.html)
* [journal](../modules/foundry.applications.sheets.journal.html)
* [JournalEntryPageSheet](foundry.applications.sheets.journal.JournalEntryPageSheet.html)

# Class JournalEntryPageSheet

An abstract Application responsible for displaying and editing a single JournalEntryPage Document.

#### Mixes

HandlebarsApplication

#### Hierarchy ([View Summary](../hierarchy.html#foundry.applications.sheets.journal.JournalEntryPageSheet))

* [DocumentSheetV2](foundry.applications.api.DocumentSheetV2.html)
  + JournalEntryPageSheet
    - [JournalEntryPageHandlebarsSheet](foundry.applications.sheets.journal.JournalEntryPageHandlebarsSheet.html)

##### Index

### Constructors

[constructor](foundry.applications.sheets.journal.JournalEntryPageSheet.html#constructor)

### Properties

[isV2](foundry.applications.sheets.journal.JournalEntryPageSheet.html#isv2)
[toc](foundry.applications.sheets.journal.JournalEntryPageSheet.html#toc)
[\_appId](foundry.applications.sheets.journal.JournalEntryPageSheet.html#_appid)
[\_maxZ](foundry.applications.sheets.journal.JournalEntryPageSheet.html#_maxz)
[BASE\_APPLICATION](foundry.applications.sheets.journal.JournalEntryPageSheet.html#base_application)
[DEFAULT\_OPTIONS](foundry.applications.sheets.journal.JournalEntryPageSheet.html#default_options)
[emittedEvents](foundry.applications.sheets.journal.JournalEntryPageSheet.html#emittedevents)
[isV2](foundry.applications.sheets.journal.JournalEntryPageSheet.html#isv2-1)
[RENDER\_STATES](foundry.applications.sheets.journal.JournalEntryPageSheet.html#render_states)
[TABS](foundry.applications.sheets.journal.JournalEntryPageSheet.html#tabs)

### Accessors

[isView](foundry.applications.sheets.journal.JournalEntryPageSheet.html#isview)
[page](foundry.applications.sheets.journal.JournalEntryPageSheet.html#page)

### Methods

[\_insertElement](foundry.applications.sheets.journal.JournalEntryPageSheet.html#_insertelement)
[\_onRender](foundry.applications.sheets.journal.JournalEntryPageSheet.html#_onrender)
[\_prepareContext](foundry.applications.sheets.journal.JournalEntryPageSheet.html#_preparecontext)
[\_onCloseView](foundry.applications.sheets.journal.JournalEntryPageSheet.html#_oncloseview)
[\_prepareHeadingLevels](foundry.applications.sheets.journal.JournalEntryPageSheet.html#_prepareheadinglevels)
[\_migrateConstructorParams](foundry.applications.sheets.journal.JournalEntryPageSheet.html#_migrateconstructorparams)
[inheritanceChain](foundry.applications.sheets.journal.JournalEntryPageSheet.html#inheritancechain)
[parseCSSDimension](foundry.applications.sheets.journal.JournalEntryPageSheet.html#parsecssdimension)
[waitForImages](foundry.applications.sheets.journal.JournalEntryPageSheet.html#waitforimages)

## Constructors

### constructor

* new JournalEntryPageSheet(options: any, ...args: any[]): [JournalEntryPageSheet](foundry.applications.sheets.journal.JournalEntryPageSheet.html)

  #### Parameters

  + options: any
  + ...args: any[]

  #### Returns [JournalEntryPageSheet](foundry.applications.sheets.journal.JournalEntryPageSheet.html)

  #### Inherit Doc

  Inherited from DocumentSheetV2.constructor

## Properties

### isV2

isV2: boolean = ...

Indicates that the sheet renders with App V2 rather than V1.

### toc

toc: Record<string, [JournalEntryPageHeading](../interfaces/foundry.types.JournalEntryPageHeading.html)>

The table of contents for this text page.

### `Static` `Internal`\_appId

\_appId: number = 0

An incrementing integer Application ID.

Inherited from DocumentSheetV2.\_appId

### `Static` `Internal`\_maxZ

\_maxZ: number = ...

The current maximum z-index of any displayed Application.

Inherited from DocumentSheetV2.\_maxZ

### `Static`BASE\_APPLICATION

BASE\_APPLICATION: typeof [ApplicationV2](foundry.applications.api.ApplicationV2.html) = ApplicationV2

Designates which upstream Application class in this class' inheritance chain is the base application.
Any DEFAULT\_OPTIONS of super-classes further upstream of the BASE\_APPLICATION are ignored.
Hook events for super-classes further upstream of the BASE\_APPLICATION are not dispatched.

Inherited from DocumentSheetV2.BASE\_APPLICATION

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

Overrides DocumentSheetV2.DEFAULT\_OPTIONS

### `Static`emittedEvents

emittedEvents: readonly [unknown, "closeView"] = ...

#### Inherit Doc

Overrides DocumentSheetV2.emittedEvents

### `Static`isV2

isV2: boolean = true

Indicates that the sheet renders with App V2 rather than V1.

### `Static`RENDER\_STATES

RENDER\_STATES: Record<string, number> = ...

The sequence of rendering states that describe the Application life-cycle.

Inherited from DocumentSheetV2.RENDER\_STATES

### `Static`TABS

TABS: Record<string, [ApplicationTabsConfiguration](../interfaces/foundry.applications.types.ApplicationTabsConfiguration.html)> = {}

Configuration of application tabs, with an entry per tab group.

Inherited from DocumentSheetV2.TABS

## Accessors

### isView

* get isView(): boolean

  Whether the sheet is in view mode.

  #### Returns boolean

### page

* get page(): [documents](../modules/foundry.documents.html).[JournalEntryPage](foundry.documents.JournalEntryPage.html)

  The JournalEntryPage for this sheet.

  #### Returns [documents](../modules/foundry.documents.html).[JournalEntryPage](foundry.documents.JournalEntryPage.html)

## Methods

### \_insertElement

* \_insertElement(element: any): void

  #### Parameters

  + element: any

  #### Returns void

  #### Inherit Doc

### \_onRender

* \_onRender(context: any, options: any): Promise<void>

  #### Parameters

  + context: any
  + options: any

  #### Returns Promise<void>

  #### Inherit Doc

### \_prepareContext

* \_prepareContext(options: any): Promise<any>

  #### Parameters

  + options: any

  #### Returns Promise<any>

  #### Inherit Doc

### `Protected`\_onCloseView

* \_onCloseView(): void

  `Protected`

  Actions performed when this sheet is closed in some parent view.

  #### Returns void

### `Protected`\_prepareHeadingLevels

* \_prepareHeadingLevels(): Record<string, string>

  `Protected`

  Prepare heading level choices.

  #### Returns Record<string, string>

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

  Inherited from DocumentSheetV2.\_migrateConstructorParams

### `Static`inheritanceChain

* inheritanceChain(): Generator<typeof [ApplicationV2](foundry.applications.api.ApplicationV2.html), void, unknown>

  Iterate over the inheritance chain of this Application.
  The chain includes this Application itself and all parents until the base application is encountered.

  #### Returns Generator<typeof [ApplicationV2](foundry.applications.api.ApplicationV2.html), void, unknown>

  #### See

  [ApplicationV2.BASE\_APPLICATION](foundry.applications.api.ApplicationV2.html#base_application)

  #### Yields

  Inherited from DocumentSheetV2.inheritanceChain

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

  Inherited from DocumentSheetV2.parseCSSDimension

### `Static`waitForImages

* waitForImages(element: HTMLElement): Promise<void>

  Wait for any images in the given element to load.

  #### Parameters

  + element: HTMLElement

    The element.

  #### Returns Promise<void>

  Inherited from DocumentSheetV2.waitForImages