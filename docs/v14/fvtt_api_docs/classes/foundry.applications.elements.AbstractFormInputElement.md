---
title: "AbstractFormInputElement | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.applications.elements.AbstractFormInputElement.html"
category: "classes"
---

# Class AbstractFormInputElement<FormInputValueType>`Abstract`

An abstract custom HTMLElement designed for use with form inputs.

#### Template: FormInputValueType

#### Fires

input An "input" event when the value of the input changes

#### Fires

change A "change" event when the value of the element changes

#### Type Parameters

* FormInputValueType extends any

#### Hierarchy ([View Summary](../hierarchy.md#foundry.applications.elements.AbstractFormInputElement))

* [AdoptableHTMLElement](foundry.applications.elements.AdoptableHTMLElement.md)
  + AbstractFormInputElement
    - [AbstractMultiSelectElement](foundry.applications.elements.AbstractMultiSelectElement.md)
    - [HTMLCodeMirrorElement](foundry.applications.elements.HTMLCodeMirrorElement.md)
    - [HTMLColorPickerElement](foundry.applications.elements.HTMLColorPickerElement.md)
    - [HTMLDocumentTagsElement](foundry.applications.elements.HTMLDocumentTagsElement.md)
    - [HTMLFilePickerElement](foundry.applications.elements.HTMLFilePickerElement.md)
    - [HTMLFormulaInputElement](foundry.applications.elements.HTMLFormulaInputElement.md)
    - [HTMLHueSelectorSlider](foundry.applications.elements.HTMLHueSelectorSlider.md)
    - [HTMLRangePickerElement](foundry.applications.elements.HTMLRangePickerElement.md)
    - [HTMLStringTagsElement](foundry.applications.elements.HTMLStringTagsElement.md)
    - [HTMLProseMirrorElement](foundry.applications.elements.HTMLProseMirrorElement.md)

##### Index

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

### Methods

[\_applyInputAttributes](#_applyinputattributes)
[adoptedCallback](#adoptedcallback)
[attributeChangedCallback](#attributechangedcallback)
[connectedCallback](#connectedcallback)
[disconnectedCallback](#disconnectedcallback)
[focus](#focus)
[formDisabledCallback](#formdisabledcallback)
[\_activateListeners](#_activatelisteners)
[\_buildElements](#_buildelements)
[\_disconnect](#_disconnect)
[\_getValue](#_getvalue)
[\_onClick](#_onclick)
[\_refresh](#_refresh)
[\_setValue](#_setvalue)
[\_toggleDisabled](#_toggledisabled)

## Properties

### `Protected`\_internals

\_internals: ElementInternals

Attached ElementInternals which provides form handling functionality.

### `Protected`\_primaryInput

\_primaryInput: HTMLElement

The primary input (if any). Used to determine what element should receive focus when an associated label is clicked
on.

### `Protected`\_value

\_value: [FormInputValueType](#forminputvaluetype)

The underlying value of the element.

### `Static`formAssociated

formAssociated: boolean = true

Declare that this custom element provides form element functionality.

### `Static`observedAttributes

observedAttributes: string[] = ...

Attributes requiring change notifications

### `Static`tagName

tagName: string

The HTML tag name used by this element.

## Accessors

### abortSignal

* get abortSignal(): AbortSignal

  An AbortSignal that can be passed to event listeners registered in subclasses. The signal will ensure that the
  listener is removed when the element is disconnected from the DOM. Not available in the constructor.

  #### Returns AbortSignal

### disabled

* get disabled(): boolean

  Is this element disabled?

  #### Returns boolean

### editable

* get editable(): boolean

  Is this field editable? The field can be neither disabled nor readonly.

  #### Returns boolean

### form

* get form(): HTMLFormElement

  The form this element belongs to.

  #### Returns HTMLFormElement

### name

* get name(): string

  The input element name.

  #### Returns string

### value

* get value(): [FormInputValueType](#forminputvaluetype)

  The value of the input element.

  #### Returns [FormInputValueType](#forminputvaluetype)

## Methods

### \_applyInputAttributes

* \_applyInputAttributes(input: HTMLElement): void

  `Internal`

  Apply key attributes on the containing custom HTML element to input elements contained within it.

  #### Parameters

  + input: HTMLElement

  #### Returns void

### adoptedCallback

* adoptedCallback(): void

  Called when the element is moved into a new Document.

  #### Returns void

  Inherited from [AdoptableHTMLElement](foundry.applications.elements.AdoptableHTMLElement.md).[adoptedCallback](foundry.applications.elements.AdoptableHTMLElement.md#adoptedcallback)

### attributeChangedCallback

* attributeChangedCallback(attrName: any, oldValue: any, newValue: any): void

  #### Parameters

  + attrName: any
  + oldValue: any
  + newValue: any

  #### Returns void

### connectedCallback

* connectedCallback(): void

  Initialize the custom element, constructing its HTML.

  #### Returns void

### disconnectedCallback

* disconnectedCallback(): void

  #### Returns void

  Overrides [AdoptableHTMLElement](foundry.applications.elements.AdoptableHTMLElement.md).[disconnectedCallback](foundry.applications.elements.AdoptableHTMLElement.md#disconnectedcallback)

### focus

* focus(options: any): void

  #### Parameters

  + options: any

  #### Returns void

  #### Inherit Doc

  Overrides AdoptableHTMLElement.focus

### formDisabledCallback

* formDisabledCallback(disabled: any): void

  #### Parameters

  + disabled: any

  #### Returns void

### `Protected`\_activateListeners

* \_activateListeners(): void

  `Protected`

  Activate event listeners which add dynamic behavior to the custom element.

  #### Returns void

### `Protected`\_buildElements

* \_buildElements(): HTMLElement[]

  `Protected`

  Create the HTML elements that should be included in this custom element.
  Elements are returned as an array of ordered children.

  #### Returns HTMLElement[]

### `Protected`\_disconnect

* \_disconnect(): void

  `Protected`

  A method provided for subclasses to perform tear-down workflows as an alternative to overriding
  disconnectedCallback.

  #### Returns void

### `Protected`\_getValue

* \_getValue(): [FormInputValueType](#forminputvaluetype)

  `Protected`

  Return the value of the input element which should be submitted to the form.

  #### Returns [FormInputValueType](#forminputvaluetype)

### `Protected`\_onClick

* \_onClick(event: PointerEvent): void

  `Protected`

  Special handling when the custom element is clicked. This should be implemented to transfer focus to an
  appropriate internal element.

  #### Parameters

  + event: PointerEvent

  #### Returns void

### `Protected`\_refresh

* \_refresh(): void

  `Protected`

  Refresh the active state of the custom element.

  #### Returns void

### `Protected`\_setValue

* \_setValue(value: [FormInputValueType](#forminputvaluetype)): void

  `Protected`

  Translate user-provided input value into the format that should be stored.

  #### Parameters

  + value: [FormInputValueType](#forminputvaluetype)

    A new value to assign to the element

  #### Returns void

  #### Throws

  An error if the provided value is invalid

### `Protected`\_toggleDisabled

* \_toggleDisabled(disabled: boolean): void

  `Protected`

  Special behaviors that the subclass should implement when toggling the disabled state of the input.

  #### Parameters

  + disabled: boolean

    The new disabled state

  #### Returns void