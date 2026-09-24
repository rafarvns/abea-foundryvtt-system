---
title: "AbstractMultiSelectElement | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.applications.elements.AbstractMultiSelectElement.html"
category: "classes"
---

# Class AbstractMultiSelectElement

An abstract base class designed to standardize the behavior for a multi-select UI component.
Multi-select components return an array of values as part of form submission.
Different implementations may provide different experiences around how inputs are presented to the user.

#### Hierarchy ([View Summary](../hierarchy.md#foundry.applications.elements.AbstractMultiSelectElement))

* [AbstractFormInputElement](foundry.applications.elements.AbstractFormInputElement.md)
  + AbstractMultiSelectElement
    - [HTMLMultiSelectElement](foundry.applications.elements.HTMLMultiSelectElement.md)
    - [HTMLMultiCheckboxElement](foundry.applications.elements.HTMLMultiCheckboxElement.md)

##### Index

### Properties

[\_value](#_value)
[\_choices](#_choices)
[\_disabledOptions](#_disabledoptions)
[\_internals](#_internals)
[\_options](#_options)
[\_primaryInput](#_primaryinput)
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
[\_getValue](#_getvalue)
[\_setValue](#_setvalue)
[adoptedCallback](#adoptedcallback)
[attributeChangedCallback](#attributechangedcallback)
[connectedCallback](#connectedcallback)
[disableOption](#disableoption)
[disconnectedCallback](#disconnectedcallback)
[focus](#focus)
[formDisabledCallback](#formdisabledcallback)
[select](#select)
[unselect](#unselect)
[\_activateListeners](#_activatelisteners)
[\_buildElements](#_buildelements)
[\_disconnect](#_disconnect)
[\_initialize](#_initialize)
[\_onClick](#_onclick)
[\_refresh](#_refresh)
[\_toggleDisabled](#_toggledisabled)

## Properties

### \_value

\_value: Set<any> = ...

Overrides [AbstractFormInputElement](foundry.applications.elements.AbstractFormInputElement.md).[\_value](foundry.applications.elements.AbstractFormInputElement.md#_value)

### `Protected`\_choices

\_choices: Record<string, string> = {}

An object which maps option values to displayed labels.

### `Protected`\_disabledOptions

\_disabledOptions: Set<string> = ...

Option values which were originally marked as disabled.

### `Protected`\_internals

\_internals: ElementInternals

Attached ElementInternals which provides form handling functionality.

Inherited from [AbstractFormInputElement](foundry.applications.elements.AbstractFormInputElement.md).[\_internals](foundry.applications.elements.AbstractFormInputElement.md#_internals)

### `Protected`\_options

\_options: (HTMLOptionElement | HTMLOptGroupElement)[] = []

Predefined  and  elements which were defined in the original HTML.

### `Protected`\_primaryInput

\_primaryInput: HTMLElement

The primary input (if any). Used to determine what element should receive focus when an associated label is clicked
on.

Inherited from [AbstractFormInputElement](foundry.applications.elements.AbstractFormInputElement.md).[\_primaryInput](foundry.applications.elements.AbstractFormInputElement.md#_primaryinput)

### `Static`formAssociated

formAssociated: boolean = true

Declare that this custom element provides form element functionality.

Inherited from [AbstractFormInputElement](foundry.applications.elements.AbstractFormInputElement.md).[formAssociated](foundry.applications.elements.AbstractFormInputElement.md#formassociated)

### `Static`observedAttributes

observedAttributes: string[] = ...

Attributes requiring change notifications

Inherited from [AbstractFormInputElement](foundry.applications.elements.AbstractFormInputElement.md).[observedAttributes](foundry.applications.elements.AbstractFormInputElement.md#observedattributes)

### `Static`tagName

tagName: string

The HTML tag name used by this element.

Inherited from [AbstractFormInputElement](foundry.applications.elements.AbstractFormInputElement.md).[tagName](foundry.applications.elements.AbstractFormInputElement.md#tagname)

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

## Methods

### \_applyInputAttributes

* \_applyInputAttributes(input: HTMLElement): void

  `Internal`

  Apply key attributes on the containing custom HTML element to input elements contained within it.

  #### Parameters

  + input: HTMLElement

  #### Returns void

  Inherited from [AbstractFormInputElement](foundry.applications.elements.AbstractFormInputElement.md).[\_applyInputAttributes](foundry.applications.elements.AbstractFormInputElement.md#_applyinputattributes)

### \_getValue

* \_getValue(): any[]

  #### Returns any[]

  Overrides [AbstractFormInputElement](foundry.applications.elements.AbstractFormInputElement.md).[\_getValue](foundry.applications.elements.AbstractFormInputElement.md#_getvalue)

### \_setValue

* \_setValue(value: any): void

  #### Parameters

  + value: any

  #### Returns void

  Overrides [AbstractFormInputElement](foundry.applications.elements.AbstractFormInputElement.md).[\_setValue](foundry.applications.elements.AbstractFormInputElement.md#_setvalue)

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

  Overrides [AbstractFormInputElement](foundry.applications.elements.AbstractFormInputElement.md).[connectedCallback](foundry.applications.elements.AbstractFormInputElement.md#connectedcallback)

### disableOption

* disableOption(value: string, disabled?: boolean): void

  Toggle the disabled state of a specific option.

  #### Parameters

  + value: string

    The option value to modify
  + `Optional`disabled: boolean = true

    Whether the option should be disabled

  #### Returns void

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

### select

* select(value: string): void

  Mark a choice as selected.

  #### Parameters

  + value: string

    The value to add to the chosen set

  #### Returns void

### unselect

* unselect(value: string): void

  Mark a choice as un-selected.

  #### Parameters

  + value: string

    The value to delete from the chosen set

  #### Returns void

### `Protected`\_activateListeners

* \_activateListeners(): void

  `Protected`

  Activate event listeners which add dynamic behavior to the custom element.

  #### Returns void

  Inherited from [AbstractFormInputElement](foundry.applications.elements.AbstractFormInputElement.md).[\_activateListeners](foundry.applications.elements.AbstractFormInputElement.md#_activatelisteners)

### `Protected`\_buildElements

* \_buildElements(): HTMLElement[]

  `Protected`

  Create the HTML elements that should be included in this custom element.
  Elements are returned as an array of ordered children.

  #### Returns HTMLElement[]

  Inherited from [AbstractFormInputElement](foundry.applications.elements.AbstractFormInputElement.md).[\_buildElements](foundry.applications.elements.AbstractFormInputElement.md#_buildelements)

### `Protected`\_disconnect

* \_disconnect(): void

  `Protected`

  A method provided for subclasses to perform tear-down workflows as an alternative to overriding
  disconnectedCallback.

  #### Returns void

  Inherited from [AbstractFormInputElement](foundry.applications.elements.AbstractFormInputElement.md).[\_disconnect](foundry.applications.elements.AbstractFormInputElement.md#_disconnect)

### `Protected`\_initialize

* \_initialize(): void

  `Protected`

  Preserve existing  and  elements which are defined in the original HTML.

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

### `Protected`\_refresh

* \_refresh(): void

  `Protected`

  Refresh the active state of the custom element.

  #### Returns void

  Inherited from [AbstractFormInputElement](foundry.applications.elements.AbstractFormInputElement.md).[\_refresh](foundry.applications.elements.AbstractFormInputElement.md#_refresh)

### `Protected`\_toggleDisabled

* \_toggleDisabled(disabled: boolean): void

  `Protected`

  Special behaviors that the subclass should implement when toggling the disabled state of the input.

  #### Parameters

  + disabled: boolean

    The new disabled state

  #### Returns void

  Inherited from [AbstractFormInputElement](foundry.applications.elements.AbstractFormInputElement.md).[\_toggleDisabled](foundry.applications.elements.AbstractFormInputElement.md#_toggledisabled)