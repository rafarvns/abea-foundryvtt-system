---
title: "HTMLDocumentTagsElement | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.applications.elements.HTMLDocumentTagsElement.html"
category: "classes"
---

# Class HTMLDocumentTagsElement

A custom HTMLElement used to render a set of associated Documents referenced by UUID.

#### Hierarchy ([View Summary](../hierarchy.md#foundry.applications.elements.HTMLDocumentTagsElement))

* [AbstractFormInputElement](foundry.applications.elements.AbstractFormInputElement.md)
  + HTMLDocumentTagsElement

##### Index

### Constructors

[constructor](#constructor)

### Properties

[\_internals](#_internals)
[\_primaryInput](#_primaryinput)
[\_value](#_value)
[formAssociated](#formassociated)
[observedAttributes](#observedattributes)
[tagName](#tagname)

### Accessors

[abortSignal](#abortsignal)
[disabled](#disabled)
[editable](#editable)
[form](#form)
[max](#max)
[name](#name)
[single](#single)
[type](#type)
[value](#value)

### Methods

[\_activateListeners](#_activatelisteners)
[\_applyInputAttributes](#_applyinputattributes)
[\_buildElements](#_buildelements)
[\_getValue](#_getvalue)
[\_refresh](#_refresh)
[\_setValue](#_setvalue)
[\_toggleDisabled](#_toggledisabled)
[adoptedCallback](#adoptedcallback)
[attributeChangedCallback](#attributechangedcallback)
[connectedCallback](#connectedcallback)
[disconnectedCallback](#disconnectedcallback)
[focus](#focus)
[formDisabledCallback](#formdisabledcallback)
[\_disconnect](#_disconnect)
[\_initializeTags](#_initializetags)
[\_onClick](#_onclick)
[create](#create)
[renderTag](#rendertag)

## Constructors

### constructor

* new HTMLDocumentTagsElement(  
  Â Â Â Â options?: [HTMLDocumentTagsOptions](../interfaces/foundry.HTMLDocumentTagsOptions.md),  
  ): HTMLDocumentTagsElement

  #### Parameters

  + `Optional`options: [HTMLDocumentTagsOptions](../interfaces/foundry.HTMLDocumentTagsOptions.md) = {}

  #### Returns HTMLDocumentTagsElement

  Overrides AbstractFormInputElement.constructor

## Properties

### `Protected`\_internals

\_internals: ElementInternals

Attached ElementInternals which provides form handling functionality.

Inherited from [AbstractFormInputElement](foundry.applications.elements.AbstractFormInputElement.md).[\_internals](foundry.applications.elements.AbstractFormInputElement.md#_internals)

### `Protected`\_primaryInput

\_primaryInput: HTMLElement

The primary input (if any). Used to determine what element should receive focus when an associated label is clicked
on.

Inherited from [AbstractFormInputElement](foundry.applications.elements.AbstractFormInputElement.md).[\_primaryInput](foundry.applications.elements.AbstractFormInputElement.md#_primaryinput)

### `Protected`\_value

\_value: Record<string, string> = {}

Overrides [AbstractFormInputElement](foundry.applications.elements.AbstractFormInputElement.md).[\_value](foundry.applications.elements.AbstractFormInputElement.md#_value)

### `Static`formAssociated

formAssociated: boolean = true

Declare that this custom element provides form element functionality.

Inherited from [AbstractFormInputElement](foundry.applications.elements.AbstractFormInputElement.md).[formAssociated](foundry.applications.elements.AbstractFormInputElement.md#formassociated)

### `Static`observedAttributes

observedAttributes: string[] = ...

Attributes requiring change notifications

Inherited from [AbstractFormInputElement](foundry.applications.elements.AbstractFormInputElement.md).[observedAttributes](foundry.applications.elements.AbstractFormInputElement.md#observedattributes)

### `Static`tagName

tagName: string = "document-tags"

Overrides [AbstractFormInputElement](foundry.applications.elements.AbstractFormInputElement.md).[tagName](foundry.applications.elements.AbstractFormInputElement.md#tagname)

## Accessors

### abortSignal

* get abortSignal(): AbortSignal

  An AbortSignal that can be passed to event listeners registered in subclasses. The signal will ensure that the
  listener is removed when the element is disconnected from the DOM. Not available in the constructor.

  #### Returns AbortSignal

  Inherited from AbstractFormInputElement.abortSignal

### disabled

* get disabled(): boolean

  Is this element disabled?

  #### Returns boolean

  Inherited from AbstractFormInputElement.disabled

### editable

* get editable(): boolean

  Is this field editable? The field can be neither disabled nor readonly.

  #### Returns boolean

  Inherited from AbstractFormInputElement.editable

### form

* get form(): HTMLFormElement

  The form this element belongs to.

  #### Returns HTMLFormElement

  Inherited from AbstractFormInputElement.form

### max

* get max(): number

  Allow a maximum number of documents to be tagged to the element.

  #### Returns number

### name

* get name(): string

  The input element name.

  #### Returns string

  Inherited from AbstractFormInputElement.name

### single

* get single(): boolean

  Restrict to only allow referencing a single Document instead of an array of documents.

  #### Returns boolean

### type

* get type(): string | null

  Restrict this element to documents of a particular type.

  #### Returns string | null

### value

* get value(): [FormInputValueType](foundry.applications.elements.AbstractFormInputElement.md#forminputvaluetype)

  The value of the input element.

  #### Returns [FormInputValueType](foundry.applications.elements.AbstractFormInputElement.md#forminputvaluetype)

  Inherited from AbstractFormInputElement.value

## Methods

### \_activateListeners

* \_activateListeners(): void

  #### Returns void

  Overrides [AbstractFormInputElement](foundry.applications.elements.AbstractFormInputElement.md).[\_activateListeners](foundry.applications.elements.AbstractFormInputElement.md#_activatelisteners)

### \_applyInputAttributes

* \_applyInputAttributes(input: HTMLElement): void

  `Internal`

  Apply key attributes on the containing custom HTML element to input elements contained within it.

  #### Parameters

  + input: HTMLElement

  #### Returns void

  Inherited from [AbstractFormInputElement](foundry.applications.elements.AbstractFormInputElement.md).[\_applyInputAttributes](foundry.applications.elements.AbstractFormInputElement.md#_applyinputattributes)

### \_buildElements

* \_buildElements(): HTMLDivElement[]

  #### Returns HTMLDivElement[]

  Overrides [AbstractFormInputElement](foundry.applications.elements.AbstractFormInputElement.md).[\_buildElements](foundry.applications.elements.AbstractFormInputElement.md#_buildelements)

### \_getValue

* \_getValue(): string | string[]

  #### Returns string | string[]

  Overrides [AbstractFormInputElement](foundry.applications.elements.AbstractFormInputElement.md).[\_getValue](foundry.applications.elements.AbstractFormInputElement.md#_getvalue)

### \_refresh

* \_refresh(): void

  #### Returns void

  Overrides [AbstractFormInputElement](foundry.applications.elements.AbstractFormInputElement.md).[\_refresh](foundry.applications.elements.AbstractFormInputElement.md#_refresh)

### \_setValue

* \_setValue(value: any): void

  #### Parameters

  + value: any

  #### Returns void

  Overrides [AbstractFormInputElement](foundry.applications.elements.AbstractFormInputElement.md).[\_setValue](foundry.applications.elements.AbstractFormInputElement.md#_setvalue)

### \_toggleDisabled

* \_toggleDisabled(disabled: any): void

  #### Parameters

  + disabled: any

  #### Returns void

  Overrides [AbstractFormInputElement](foundry.applications.elements.AbstractFormInputElement.md).[\_toggleDisabled](foundry.applications.elements.AbstractFormInputElement.md#_toggledisabled)

### adoptedCallback

* adoptedCallback(): void

  Called when the element is moved into a new Document.

  #### Returns void

  Inherited from [AbstractFormInputElement](foundry.applications.elements.AbstractFormInputElement.md).[adoptedCallback](foundry.applications.elements.AbstractFormInputElement.md#adoptedcallback)

### attributeChangedCallback

* attributeChangedCallback(attrName: any, oldValue: any, newValue: any): void

  #### Parameters

  + attrName: any
  + oldValue: any
  + newValue: any

  #### Returns void

  Inherited from [AbstractFormInputElement](foundry.applications.elements.AbstractFormInputElement.md).[attributeChangedCallback](foundry.applications.elements.AbstractFormInputElement.md#attributechangedcallback)

### connectedCallback

* connectedCallback(): void

  Initialize the custom element, constructing its HTML.

  #### Returns void

  Inherited from [AbstractFormInputElement](foundry.applications.elements.AbstractFormInputElement.md).[connectedCallback](foundry.applications.elements.AbstractFormInputElement.md#connectedcallback)

### disconnectedCallback

* disconnectedCallback(): void

  #### Returns void

  Inherited from [AbstractFormInputElement](foundry.applications.elements.AbstractFormInputElement.md).[disconnectedCallback](foundry.applications.elements.AbstractFormInputElement.md#disconnectedcallback)

### focus

* focus(options: any): void

  #### Parameters

  + options: any

  #### Returns void

  #### Inherit Doc

  Inherited from [AbstractFormInputElement](foundry.applications.elements.AbstractFormInputElement.md).[focus](foundry.applications.elements.AbstractFormInputElement.md#focus)

### formDisabledCallback

* formDisabledCallback(disabled: any): void

  #### Parameters

  + disabled: any

  #### Returns void

  Inherited from [AbstractFormInputElement](foundry.applications.elements.AbstractFormInputElement.md).[formDisabledCallback](foundry.applications.elements.AbstractFormInputElement.md#formdisabledcallback)

### `Protected`\_disconnect

* \_disconnect(): void

  `Protected`

  A method provided for subclasses to perform tear-down workflows as an alternative to overriding
  disconnectedCallback.

  #### Returns void

  Inherited from [AbstractFormInputElement](foundry.applications.elements.AbstractFormInputElement.md).[\_disconnect](foundry.applications.elements.AbstractFormInputElement.md#_disconnect)

### `Protected`\_initializeTags

* \_initializeTags(values?: string[]): void

  `Protected`

  Initialize innerText or an initial value attribute of the element as a serialized JSON array.

  #### Parameters

  + `Optional`values: string[]

    An array of Document UUIDs to initialize the element with.

  #### Returns void

### `Protected`\_onClick

* \_onClick(event: PointerEvent): void

  `Protected`

  Special handling when the custom element is clicked. This should be implemented to transfer focus to an
  appropriate internal element.

  #### Parameters

  + event: PointerEvent

  #### Returns void

  Inherited from [AbstractFormInputElement](foundry.applications.elements.AbstractFormInputElement.md).[\_onClick](foundry.applications.elements.AbstractFormInputElement.md#_onclick)

### `Static`create

* create(  
  Â Â Â Â config: [FormInputConfig](../interfaces/foundry.data.types.FormInputConfig.md) & [DocumentTagsInputConfig](../interfaces/foundry.DocumentTagsInputConfig.md),  
  ): HTMLDocumentTagsElement

  Create a HTMLDocumentTagsElement using provided configuration data.

  #### Parameters

  + config: [FormInputConfig](../interfaces/foundry.data.types.FormInputConfig.md) & [DocumentTagsInputConfig](../interfaces/foundry.DocumentTagsInputConfig.md)

  #### Returns HTMLDocumentTagsElement

### `Static`renderTag

* renderTag(uuid: string, name: string, editable?: boolean): HTMLDivElement

  Create an HTML string fragment for a single document tag.

  #### Parameters

  + uuid: string

    The document UUID
  + name: string

    The document name
  + `Optional`editable: boolean = true

    Is the tag editable?

  #### Returns HTMLDivElement