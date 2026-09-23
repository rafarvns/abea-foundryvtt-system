---
title: "HTMLGridOffset2DTagsElement | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.applications.elements.HTMLGridOffset2DTagsElement.html"
category: "classes"
---

# Class HTMLGridOffset2DTagsElement

A custom HTMLElement used to render a tagged set of 2D grid offsets.

#### Hierarchy ([View Summary](../hierarchy.md#foundry.applications.elements.HTMLGridOffset2DTagsElement))

* [HTMLStringTagsElement](foundry.applications.elements.HTMLStringTagsElement.md)
  + HTMLGridOffset2DTagsElement

##### Index

### Constructors

[constructor](#constructor)

### Properties

[\_value](#_value)
[\_internals](#_internals)
[\_primaryInput](#_primaryinput)
[formAssociated](#formassociated)
[icons](#icons)
[labels](#labels)
[observedAttributes](#observedattributes)
[tagName](#tagname)

### Accessors

[abortSignal](#abortsignal)
[disabled](#disabled)
[editable](#editable)
[form](#form)
[name](#name)
[value](#value)

### Methods

[\_activateListeners](#_activatelisteners)
[\_applyInputAttributes](#_applyinputattributes)
[\_buildElements](#_buildelements)
[\_getValue](#_getvalue)
[\_refresh](#_refresh)
[\_setValue](#_setvalue)
[\_toggleDisabled](#_toggledisabled)
[\_validateTag](#_validatetag)
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

* new HTMLGridOffset2DTagsElement(  
  Â Â Â Â options?: [HTMLStringTagsOptions](../interfaces/foundry.HTMLStringTagsOptions.md),  
  ): HTMLGridOffset2DTagsElement

  #### Parameters

  + `Optional`options: [HTMLStringTagsOptions](../interfaces/foundry.HTMLStringTagsOptions.md) = {}

  #### Returns HTMLGridOffset2DTagsElement

  Inherited from [HTMLStringTagsElement](foundry.applications.elements.HTMLStringTagsElement.md).[constructor](foundry.applications.elements.HTMLStringTagsElement.md#constructor)

## Properties

### \_value

\_value: Set<any>

Inherited from [HTMLStringTagsElement](foundry.applications.elements.HTMLStringTagsElement.md).[\_value](foundry.applications.elements.HTMLStringTagsElement.md#_value)

### `Protected`\_internals

\_internals: ElementInternals

Attached ElementInternals which provides form handling functionality.

Inherited from [HTMLStringTagsElement](foundry.applications.elements.HTMLStringTagsElement.md).[\_internals](foundry.applications.elements.HTMLStringTagsElement.md#_internals)

### `Protected`\_primaryInput

\_primaryInput: HTMLElement

The primary input (if any). Used to determine what element should receive focus when an associated label is clicked
on.

Inherited from [HTMLStringTagsElement](foundry.applications.elements.HTMLStringTagsElement.md).[\_primaryInput](foundry.applications.elements.HTMLStringTagsElement.md#_primaryinput)

### `Static`formAssociated

formAssociated: boolean = true

Declare that this custom element provides form element functionality.

Inherited from [HTMLStringTagsElement](foundry.applications.elements.HTMLStringTagsElement.md).[formAssociated](foundry.applications.elements.HTMLStringTagsElement.md#formassociated)

### `Static`icons

icons: { add: string; remove: string } = ...

Overrides HTMLStringTagsElement.icons

### `Static`labels

labels: { add: string; placeholder: string; remove: string } = ...

Overrides HTMLStringTagsElement.labels

### `Static`observedAttributes

observedAttributes: string[] = ...

Attributes requiring change notifications

Inherited from [HTMLStringTagsElement](foundry.applications.elements.HTMLStringTagsElement.md).[observedAttributes](foundry.applications.elements.HTMLStringTagsElement.md#observedattributes)

### `Static`tagName

tagName: string = "grid-offset-2d-tags"

Overrides [HTMLStringTagsElement](foundry.applications.elements.HTMLStringTagsElement.md).[tagName](foundry.applications.elements.HTMLStringTagsElement.md#tagname)

## Accessors

### abortSignal

* get abortSignal(): AbortSignal

  An AbortSignal that can be passed to event listeners registered in subclasses. The signal will ensure that the
  listener is removed when the element is disconnected from the DOM. Not available in the constructor.

  #### Returns AbortSignal

  Inherited from HTMLStringTagsElement.abortSignal

### disabled

* get disabled(): boolean

  Is this element disabled?

  #### Returns boolean

  Inherited from HTMLStringTagsElement.disabled

### editable

* get editable(): boolean

  Is this field editable? The field can be neither disabled nor readonly.

  #### Returns boolean

  Inherited from HTMLStringTagsElement.editable

### form

* get form(): HTMLFormElement

  The form this element belongs to.

  #### Returns HTMLFormElement

  Inherited from HTMLStringTagsElement.form

### name

* get name(): string

  The input element name.

  #### Returns string

  Inherited from HTMLStringTagsElement.name

### value

* get value(): [FormInputValueType](foundry.applications.elements.AbstractFormInputElement.md#forminputvaluetype)

  The value of the input element.

  #### Returns [FormInputValueType](foundry.applications.elements.AbstractFormInputElement.md#forminputvaluetype)

  Inherited from HTMLStringTagsElement.value

## Methods

### \_activateListeners

* \_activateListeners(): void

  #### Returns void

  Inherited from [HTMLStringTagsElement](foundry.applications.elements.HTMLStringTagsElement.md).[\_activateListeners](foundry.applications.elements.HTMLStringTagsElement.md#_activatelisteners)

### \_applyInputAttributes

* \_applyInputAttributes(input: HTMLElement): void

  `Internal`

  Apply key attributes on the containing custom HTML element to input elements contained within it.

  #### Parameters

  + input: HTMLElement

  #### Returns void

  Inherited from [HTMLStringTagsElement](foundry.applications.elements.HTMLStringTagsElement.md).[\_applyInputAttributes](foundry.applications.elements.HTMLStringTagsElement.md#_applyinputattributes)

### \_buildElements

* \_buildElements(): HTMLDivElement[]

  #### Returns HTMLDivElement[]

  Inherited from [HTMLStringTagsElement](foundry.applications.elements.HTMLStringTagsElement.md).[\_buildElements](foundry.applications.elements.HTMLStringTagsElement.md#_buildelements)

### \_getValue

* \_getValue(): any[]

  #### Returns any[]

  Inherited from [HTMLStringTagsElement](foundry.applications.elements.HTMLStringTagsElement.md).[\_getValue](foundry.applications.elements.HTMLStringTagsElement.md#_getvalue)

### \_refresh

* \_refresh(): void

  #### Returns void

  Inherited from [HTMLStringTagsElement](foundry.applications.elements.HTMLStringTagsElement.md).[\_refresh](foundry.applications.elements.HTMLStringTagsElement.md#_refresh)

### \_setValue

* \_setValue(value: any): void

  #### Parameters

  + value: any

  #### Returns void

  Inherited from [HTMLStringTagsElement](foundry.applications.elements.HTMLStringTagsElement.md).[\_setValue](foundry.applications.elements.HTMLStringTagsElement.md#_setvalue)

### \_toggleDisabled

* \_toggleDisabled(disabled: any): void

  #### Parameters

  + disabled: any

  #### Returns void

  Inherited from [HTMLStringTagsElement](foundry.applications.elements.HTMLStringTagsElement.md).[\_toggleDisabled](foundry.applications.elements.HTMLStringTagsElement.md#_toggledisabled)

### \_validateTag

* \_validateTag(tag: any): void

  #### Parameters

  + tag: any

  #### Returns void

  Overrides [HTMLStringTagsElement](foundry.applications.elements.HTMLStringTagsElement.md).[\_validateTag](foundry.applications.elements.HTMLStringTagsElement.md#_validatetag)

### adoptedCallback

* adoptedCallback(): void

  Called when the element is moved into a new Document.

  #### Returns void

  Inherited from [HTMLStringTagsElement](foundry.applications.elements.HTMLStringTagsElement.md).[adoptedCallback](foundry.applications.elements.HTMLStringTagsElement.md#adoptedcallback)

### attributeChangedCallback

* attributeChangedCallback(attrName: any, oldValue: any, newValue: any): void

  #### Parameters

  + attrName: any
  + oldValue: any
  + newValue: any

  #### Returns void

  Inherited from [HTMLStringTagsElement](foundry.applications.elements.HTMLStringTagsElement.md).[attributeChangedCallback](foundry.applications.elements.HTMLStringTagsElement.md#attributechangedcallback)

### connectedCallback

* connectedCallback(): void

  Initialize the custom element, constructing its HTML.

  #### Returns void

  Inherited from [HTMLStringTagsElement](foundry.applications.elements.HTMLStringTagsElement.md).[connectedCallback](foundry.applications.elements.HTMLStringTagsElement.md#connectedcallback)

### disconnectedCallback

* disconnectedCallback(): void

  #### Returns void

  Inherited from [HTMLStringTagsElement](foundry.applications.elements.HTMLStringTagsElement.md).[disconnectedCallback](foundry.applications.elements.HTMLStringTagsElement.md#disconnectedcallback)

### focus

* focus(options: any): void

  #### Parameters

  + options: any

  #### Returns void

  #### Inherit Doc

  Inherited from [HTMLStringTagsElement](foundry.applications.elements.HTMLStringTagsElement.md).[focus](foundry.applications.elements.HTMLStringTagsElement.md#focus)

### formDisabledCallback

* formDisabledCallback(disabled: any): void

  #### Parameters

  + disabled: any

  #### Returns void

  Inherited from [HTMLStringTagsElement](foundry.applications.elements.HTMLStringTagsElement.md).[formDisabledCallback](foundry.applications.elements.HTMLStringTagsElement.md#formdisabledcallback)

### `Protected`\_disconnect

* \_disconnect(): void

  `Protected`

  A method provided for subclasses to perform tear-down workflows as an alternative to overriding
  disconnectedCallback.

  #### Returns void

  Inherited from [HTMLStringTagsElement](foundry.applications.elements.HTMLStringTagsElement.md).[\_disconnect](foundry.applications.elements.HTMLStringTagsElement.md#_disconnect)

### `Protected`\_initializeTags

* \_initializeTags(values?: string[]): void

  `Protected`

  Initialize innerText or an initial value attribute of the element as a comma-separated list of currently assigned
  string tags.

  #### Parameters

  + `Optional`values: string[]

    An array of initial values.

  #### Returns void

  Inherited from [HTMLStringTagsElement](foundry.applications.elements.HTMLStringTagsElement.md).[\_initializeTags](foundry.applications.elements.HTMLStringTagsElement.md#_initializetags)

### `Protected`\_onClick

* \_onClick(event: PointerEvent): void

  `Protected`

  Special handling when the custom element is clicked. This should be implemented to transfer focus to an
  appropriate internal element.

  #### Parameters

  + event: PointerEvent

  #### Returns void

  Inherited from [HTMLStringTagsElement](foundry.applications.elements.HTMLStringTagsElement.md).[\_onClick](foundry.applications.elements.HTMLStringTagsElement.md#_onclick)

### `Static`create

* create(config: [FormInputConfig](../interfaces/foundry.data.types.FormInputConfig.md) & [StringTagsInputConfig](../interfaces/foundry.StringTagsInputConfig.md)): [HTMLStringTagsElement](foundry.applications.elements.HTMLStringTagsElement.md)

  Create a HTMLStringTagsElement using provided configuration data.

  #### Parameters

  + config: [FormInputConfig](../interfaces/foundry.data.types.FormInputConfig.md) & [StringTagsInputConfig](../interfaces/foundry.StringTagsInputConfig.md)

  #### Returns [HTMLStringTagsElement](foundry.applications.elements.HTMLStringTagsElement.md)

  Inherited from [HTMLStringTagsElement](foundry.applications.elements.HTMLStringTagsElement.md).[create](foundry.applications.elements.HTMLStringTagsElement.md#create)

### `Static`renderTag

* renderTag(tag: string, label?: string, editable?: boolean): HTMLDivElement

  Render the tagged string as an HTML element.

  #### Parameters

  + tag: string

    The raw tag value
  + `Optional`label: string

    An optional tag label
  + `Optional`editable: boolean = true

    Is the tag editable?

  #### Returns HTMLDivElement

  A rendered HTML element for the tag

  Inherited from [HTMLStringTagsElement](foundry.applications.elements.HTMLStringTagsElement.md).[renderTag](foundry.applications.elements.HTMLStringTagsElement.md#rendertag)