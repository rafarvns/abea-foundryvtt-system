---
title: "HTMLRangePickerElement | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.applications.elements.HTMLRangePickerElement.html"
category: "classes"
---

# Class HTMLRangePickerElement

A custom HTML element responsible selecting a value on a range slider with a linked number input field.

#### Hierarchy ([View Summary](../hierarchy.md#foundry.applications.elements.HTMLRangePickerElement))

* [AbstractFormInputElement](foundry.applications.elements.AbstractFormInputElement.md)
  + HTMLRangePickerElement

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
[name](#name)
[value](#value)
[valueAsNumber](#valueasnumber)

### Methods

[\_activateListeners](#_activatelisteners)
[\_applyInputAttributes](#_applyinputattributes)
[\_buildElements](#_buildelements)
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
[\_getValue](#_getvalue)
[\_onClick](#_onclick)
[create](#create)

## Constructors

### constructor

* new HTMLRangePickerElement(  
  Â Â Â Â options?: [HTMLRangePickerOptions](../interfaces/foundry.HTMLRangePickerOptions.md),  
  ): HTMLRangePickerElement

  #### Parameters

  + `Optional`options: [HTMLRangePickerOptions](../interfaces/foundry.HTMLRangePickerOptions.md) = {}

  #### Returns HTMLRangePickerElement

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

\_value: number

The underlying value of the element.

Inherited from [AbstractFormInputElement](foundry.applications.elements.AbstractFormInputElement.md).[\_value](foundry.applications.elements.AbstractFormInputElement.md#_value)

### `Static`formAssociated

formAssociated: boolean = true

Declare that this custom element provides form element functionality.

Inherited from [AbstractFormInputElement](foundry.applications.elements.AbstractFormInputElement.md).[formAssociated](foundry.applications.elements.AbstractFormInputElement.md#formassociated)

### `Static`observedAttributes

observedAttributes: string[] = ...

Attributes requiring change notifications

Inherited from [AbstractFormInputElement](foundry.applications.elements.AbstractFormInputElement.md).[observedAttributes](foundry.applications.elements.AbstractFormInputElement.md#observedattributes)

### `Static`tagName

tagName: string = "range-picker"

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

### name

* get name(): string

  The input element name.

  #### Returns string

  Inherited from AbstractFormInputElement.name

### value

* get value(): [FormInputValueType](foundry.applications.elements.AbstractFormInputElement.md#forminputvaluetype)

  The value of the input element.

  #### Returns [FormInputValueType](foundry.applications.elements.AbstractFormInputElement.md#forminputvaluetype)

  Inherited from AbstractFormInputElement.value

### valueAsNumber

* get valueAsNumber(): number

  The value of the input element.

  #### Returns number

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

* \_buildElements(): HTMLInputElement[]

  #### Returns HTMLInputElement[]

  Overrides [AbstractFormInputElement](foundry.applications.elements.AbstractFormInputElement.md).[\_buildElements](foundry.applications.elements.AbstractFormInputElement.md#_buildelements)

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

### `Protected`\_getValue

* \_getValue(): number

  `Protected`

  Return the value of the input element which should be submitted to the form.

  #### Returns number

  Inherited from [AbstractFormInputElement](foundry.applications.elements.AbstractFormInputElement.md).[\_getValue](foundry.applications.elements.AbstractFormInputElement.md#_getvalue)

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

* create(config: [FormInputConfig](../interfaces/foundry.data.types.FormInputConfig.md) & [RangePickerInputConfig](../interfaces/foundry.RangePickerInputConfig.md)): HTMLRangePickerElement

  Create a HTMLRangePickerElement using provided configuration data.

  #### Parameters

  + config: [FormInputConfig](../interfaces/foundry.data.types.FormInputConfig.md) & [RangePickerInputConfig](../interfaces/foundry.RangePickerInputConfig.md)

  #### Returns HTMLRangePickerElement