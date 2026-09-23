---
title: "HTMLMultiSelectElement | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.applications.elements.HTMLMultiSelectElement.html"
category: "classes"
---

# Class HTMLMultiSelectElement

Provide a multi-select workflow using a select element as the input mechanism.

#### Example: Multi-Select HTML Markup

```
<multi-select name="select-many-things">  
  <optgroup label="Basic Options">  
    <option value="foo">Foo</option>  
    <option value="bar">Bar</option>  
    <option value="baz">Baz</option>  
  </optgroup>  
  <optgroup label="Advanced Options">  
   <option value="fizz">Fizz</option>  
    <option value="buzz">Buzz</option>  
  </optgroup>  
</multi-select>
Copy
```

#### Hierarchy ([View Summary](../hierarchy.md#foundry.applications.elements.HTMLMultiSelectElement))

* [AbstractMultiSelectElement](foundry.applications.elements.AbstractMultiSelectElement.md)
  + HTMLMultiSelectElement

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
[disableOption](#disableoption)
[disconnectedCallback](#disconnectedcallback)
[focus](#focus)
[formDisabledCallback](#formdisabledcallback)
[select](#select)
[unselect](#unselect)
[\_disconnect](#_disconnect)
[\_initialize](#_initialize)
[\_onClick](#_onclick)
[create](#create)

## Properties

### \_value

\_value: Set<any> = ...

Inherited from [AbstractMultiSelectElement](foundry.applications.elements.AbstractMultiSelectElement.md).[\_value](foundry.applications.elements.AbstractMultiSelectElement.md#_value)

### `Protected`\_choices

\_choices: Record<string, string> = {}

An object which maps option values to displayed labels.

Inherited from [AbstractMultiSelectElement](foundry.applications.elements.AbstractMultiSelectElement.md).[\_choices](foundry.applications.elements.AbstractMultiSelectElement.md#_choices)

### `Protected`\_disabledOptions

\_disabledOptions: Set<string> = ...

Option values which were originally marked as disabled.

Inherited from [AbstractMultiSelectElement](foundry.applications.elements.AbstractMultiSelectElement.md).[\_disabledOptions](foundry.applications.elements.AbstractMultiSelectElement.md#_disabledoptions)

### `Protected`\_internals

\_internals: ElementInternals

Attached ElementInternals which provides form handling functionality.

Inherited from [AbstractMultiSelectElement](foundry.applications.elements.AbstractMultiSelectElement.md).[\_internals](foundry.applications.elements.AbstractMultiSelectElement.md#_internals)

### `Protected`\_options

\_options: (HTMLOptionElement | HTMLOptGroupElement)[] = []

Predefined  and  elements which were defined in the original HTML.

Inherited from [AbstractMultiSelectElement](foundry.applications.elements.AbstractMultiSelectElement.md).[\_options](foundry.applications.elements.AbstractMultiSelectElement.md#_options)

### `Protected`\_primaryInput

\_primaryInput: HTMLElement

The primary input (if any). Used to determine what element should receive focus when an associated label is clicked
on.

Inherited from [AbstractMultiSelectElement](foundry.applications.elements.AbstractMultiSelectElement.md).[\_primaryInput](foundry.applications.elements.AbstractMultiSelectElement.md#_primaryinput)

### `Static`formAssociated

formAssociated: boolean = true

Declare that this custom element provides form element functionality.

Inherited from [AbstractMultiSelectElement](foundry.applications.elements.AbstractMultiSelectElement.md).[formAssociated](foundry.applications.elements.AbstractMultiSelectElement.md#formassociated)

### `Static`observedAttributes

observedAttributes: string[] = ...

Attributes requiring change notifications

Inherited from [AbstractMultiSelectElement](foundry.applications.elements.AbstractMultiSelectElement.md).[observedAttributes](foundry.applications.elements.AbstractMultiSelectElement.md#observedattributes)

### `Static`tagName

tagName: string = "multi-select"

Overrides [AbstractMultiSelectElement](foundry.applications.elements.AbstractMultiSelectElement.md).[tagName](foundry.applications.elements.AbstractMultiSelectElement.md#tagname)

## Accessors

### abortSignal

* get abortSignal(): AbortSignal

  An AbortSignal that can be passed to event listeners registered in subclasses. The signal will ensure that the
  listener is removed when the element is disconnected from the DOM. Not available in the constructor.

  #### Returns AbortSignal

  Inherited from AbstractMultiSelectElement.abortSignal

### disabled

* get disabled(): boolean

  Is this element disabled?

  #### Returns boolean

  Inherited from AbstractMultiSelectElement.disabled

### editable

* get editable(): boolean

  Is this field editable? The field can be neither disabled nor readonly.

  #### Returns boolean

  Inherited from AbstractMultiSelectElement.editable

### form

* get form(): HTMLFormElement

  The form this element belongs to.

  #### Returns HTMLFormElement

  Inherited from AbstractMultiSelectElement.form

### name

* get name(): string

  The input element name.

  #### Returns string

  Inherited from AbstractMultiSelectElement.name

### value

* get value(): [FormInputValueType](foundry.applications.elements.AbstractFormInputElement.md#forminputvaluetype)

  The value of the input element.

  #### Returns [FormInputValueType](foundry.applications.elements.AbstractFormInputElement.md#forminputvaluetype)

  Inherited from AbstractMultiSelectElement.value

## Methods

### \_activateListeners

* \_activateListeners(): void

  #### Returns void

  Overrides [AbstractMultiSelectElement](foundry.applications.elements.AbstractMultiSelectElement.md).[\_activateListeners](foundry.applications.elements.AbstractMultiSelectElement.md#_activatelisteners)

### \_applyInputAttributes

* \_applyInputAttributes(input: HTMLElement): void

  `Internal`

  Apply key attributes on the containing custom HTML element to input elements contained within it.

  #### Parameters

  + input: HTMLElement

  #### Returns void

  Inherited from [AbstractMultiSelectElement](foundry.applications.elements.AbstractMultiSelectElement.md).[\_applyInputAttributes](foundry.applications.elements.AbstractMultiSelectElement.md#_applyinputattributes)

### \_buildElements

* \_buildElements(): (HTMLDivElement | HTMLSelectElement)[]

  #### Returns (HTMLDivElement | HTMLSelectElement)[]

  Overrides [AbstractMultiSelectElement](foundry.applications.elements.AbstractMultiSelectElement.md).[\_buildElements](foundry.applications.elements.AbstractMultiSelectElement.md#_buildelements)

### \_getValue

* \_getValue(): any[]

  #### Returns any[]

  Inherited from [AbstractMultiSelectElement](foundry.applications.elements.AbstractMultiSelectElement.md).[\_getValue](foundry.applications.elements.AbstractMultiSelectElement.md#_getvalue)

### \_refresh

* \_refresh(): void

  #### Returns void

  Overrides [AbstractMultiSelectElement](foundry.applications.elements.AbstractMultiSelectElement.md).[\_refresh](foundry.applications.elements.AbstractMultiSelectElement.md#_refresh)

### \_setValue

* \_setValue(value: any): void

  #### Parameters

  + value: any

  #### Returns void

  Inherited from [AbstractMultiSelectElement](foundry.applications.elements.AbstractMultiSelectElement.md).[\_setValue](foundry.applications.elements.AbstractMultiSelectElement.md#_setvalue)

### \_toggleDisabled

* \_toggleDisabled(disabled: any): void

  #### Parameters

  + disabled: any

  #### Returns void

  Overrides [AbstractMultiSelectElement](foundry.applications.elements.AbstractMultiSelectElement.md).[\_toggleDisabled](foundry.applications.elements.AbstractMultiSelectElement.md#_toggledisabled)

### adoptedCallback

* adoptedCallback(): void

  Called when the element is moved into a new Document.

  #### Returns void

  Inherited from [AbstractMultiSelectElement](foundry.applications.elements.AbstractMultiSelectElement.md).[adoptedCallback](foundry.applications.elements.AbstractMultiSelectElement.md#adoptedcallback)

### attributeChangedCallback

* attributeChangedCallback(attrName: any, oldValue: any, newValue: any): void

  #### Parameters

  + attrName: any
  + oldValue: any
  + newValue: any

  #### Returns void

  Inherited from [AbstractMultiSelectElement](foundry.applications.elements.AbstractMultiSelectElement.md).[attributeChangedCallback](foundry.applications.elements.AbstractMultiSelectElement.md#attributechangedcallback)

### connectedCallback

* connectedCallback(): void

  Initialize the custom element, constructing its HTML.

  #### Returns void

  Inherited from [AbstractMultiSelectElement](foundry.applications.elements.AbstractMultiSelectElement.md).[connectedCallback](foundry.applications.elements.AbstractMultiSelectElement.md#connectedcallback)

### disableOption

* disableOption(value: string, disabled?: boolean): void

  Toggle the disabled state of a specific option.

  #### Parameters

  + value: string

    The option value to modify
  + `Optional`disabled: boolean = true

    Whether the option should be disabled

  #### Returns void

  Inherited from [AbstractMultiSelectElement](foundry.applications.elements.AbstractMultiSelectElement.md).[disableOption](foundry.applications.elements.AbstractMultiSelectElement.md#disableoption)

### disconnectedCallback

* disconnectedCallback(): void

  #### Returns void

  Inherited from [AbstractMultiSelectElement](foundry.applications.elements.AbstractMultiSelectElement.md).[disconnectedCallback](foundry.applications.elements.AbstractMultiSelectElement.md#disconnectedcallback)

### focus

* focus(options: any): void

  #### Parameters

  + options: any

  #### Returns void

  #### Inherit Doc

  Inherited from [AbstractMultiSelectElement](foundry.applications.elements.AbstractMultiSelectElement.md).[focus](foundry.applications.elements.AbstractMultiSelectElement.md#focus)

### formDisabledCallback

* formDisabledCallback(disabled: any): void

  #### Parameters

  + disabled: any

  #### Returns void

  Inherited from [AbstractMultiSelectElement](foundry.applications.elements.AbstractMultiSelectElement.md).[formDisabledCallback](foundry.applications.elements.AbstractMultiSelectElement.md#formdisabledcallback)

### select

* select(value: string): void

  Mark a choice as selected.

  #### Parameters

  + value: string

    The value to add to the chosen set

  #### Returns void

  Inherited from [AbstractMultiSelectElement](foundry.applications.elements.AbstractMultiSelectElement.md).[select](foundry.applications.elements.AbstractMultiSelectElement.md#select)

### unselect

* unselect(value: string): void

  Mark a choice as un-selected.

  #### Parameters

  + value: string

    The value to delete from the chosen set

  #### Returns void

  Inherited from [AbstractMultiSelectElement](foundry.applications.elements.AbstractMultiSelectElement.md).[unselect](foundry.applications.elements.AbstractMultiSelectElement.md#unselect)

### `Protected`\_disconnect

* \_disconnect(): void

  `Protected`

  A method provided for subclasses to perform tear-down workflows as an alternative to overriding
  disconnectedCallback.

  #### Returns void

  Inherited from [AbstractMultiSelectElement](foundry.applications.elements.AbstractMultiSelectElement.md).[\_disconnect](foundry.applications.elements.AbstractMultiSelectElement.md#_disconnect)

### `Protected`\_initialize

* \_initialize(): void

  `Protected`

  Preserve existing  and  elements which are defined in the original HTML.

  #### Returns void

  Inherited from [AbstractMultiSelectElement](foundry.applications.elements.AbstractMultiSelectElement.md).[\_initialize](foundry.applications.elements.AbstractMultiSelectElement.md#_initialize)

### `Protected`\_onClick

* \_onClick(event: PointerEvent): void

  `Protected`

  Special handling when the custom element is clicked. This should be implemented to transfer focus to an
  appropriate internal element.

  #### Parameters

  + event: PointerEvent

  #### Returns void

  Inherited from [AbstractMultiSelectElement](foundry.applications.elements.AbstractMultiSelectElement.md).[\_onClick](foundry.applications.elements.AbstractMultiSelectElement.md#_onclick)

### `Static`create

* create(  
  Â Â Â Â config: [FormInputConfig](../interfaces/foundry.data.types.FormInputConfig.md)<string[]> & Omit<SelectInputConfig, "blank">,  
  ): HTMLMultiSelectElement

  Create a HTMLMultiSelectElement using provided configuration data.

  #### Parameters

  + config: [FormInputConfig](../interfaces/foundry.data.types.FormInputConfig.md)<string[]> & Omit<SelectInputConfig, "blank">

  #### Returns HTMLMultiSelectElement