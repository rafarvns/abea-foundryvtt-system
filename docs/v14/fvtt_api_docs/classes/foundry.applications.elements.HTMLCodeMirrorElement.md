---
title: "HTMLCodeMirrorElement | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.applications.elements.HTMLCodeMirrorElement.html"
category: "classes"
---

# Class HTMLCodeMirrorElement

A custom HTML element responsible for displaying a CodeMirror rich text editor.

#### Hierarchy ([View Summary](../hierarchy.md#foundry.applications.elements.HTMLCodeMirrorElement))

* [AbstractFormInputElement](foundry.applications.elements.AbstractFormInputElement.md)
  + HTMLCodeMirrorElement

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
[cursor](#cursor)
[disabled](#disabled)
[editable](#editable)
[form](#form)
[indent](#indent)
[language](#language)
[managed](#managed)
[name](#name)
[nowrap](#nowrap)
[value](#value)

### Methods

[\_applyInputAttributes](#_applyinputattributes)
[\_buildElements](#_buildelements)
[\_getValue](#_getvalue)
[\_setValue](#_setvalue)
[adoptedCallback](#adoptedcallback)
[attributeChangedCallback](#attributechangedcallback)
[connectedCallback](#connectedcallback)
[disconnectedCallback](#disconnectedcallback)
[focus](#focus)
[formDisabledCallback](#formdisabledcallback)
[posAtCoords](#posatcoords)
[scrollTo](#scrollto)
[\_activateListeners](#_activatelisteners)
[\_disconnect](#_disconnect)
[\_onClick](#_onclick)
[\_refresh](#_refresh)
[\_toggleDisabled](#_toggledisabled)
[create](#create)

## Constructors

### constructor

* new HTMLCodeMirrorElement(  
  Â Â Â Â options?: [HTMLCodeMirrorOptions](../interfaces/foundry.HTMLCodeMirrorOptions.md),  
  ): HTMLCodeMirrorElement

  #### Parameters

  + `Optional`options: [HTMLCodeMirrorOptions](../interfaces/foundry.HTMLCodeMirrorOptions.md) = {}

  #### Returns HTMLCodeMirrorElement

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

\_value: string

The underlying value of the element.

Inherited from [AbstractFormInputElement](foundry.applications.elements.AbstractFormInputElement.md).[\_value](foundry.applications.elements.AbstractFormInputElement.md#_value)

### `Static`formAssociated

formAssociated: boolean = true

Declare that this custom element provides form element functionality.

Inherited from [AbstractFormInputElement](foundry.applications.elements.AbstractFormInputElement.md).[formAssociated](foundry.applications.elements.AbstractFormInputElement.md#formassociated)

### `Static`observedAttributes

observedAttributes: string[] = ...

Attributes requiring change notifications

Overrides [AbstractFormInputElement](foundry.applications.elements.AbstractFormInputElement.md).[observedAttributes](foundry.applications.elements.AbstractFormInputElement.md#observedattributes)

### `Static`tagName

tagName: "code-mirror"

Overrides [AbstractFormInputElement](foundry.applications.elements.AbstractFormInputElement.md).[tagName](foundry.applications.elements.AbstractFormInputElement.md#tagname)

## Accessors

### abortSignal

* get abortSignal(): AbortSignal

  An AbortSignal that can be passed to event listeners registered in subclasses. The signal will ensure that the
  listener is removed when the element is disconnected from the DOM. Not available in the constructor.

  #### Returns AbortSignal

  Inherited from AbstractFormInputElement.abortSignal

### cursor

* get cursor(): number | null

  The position of the cursor.

  #### Returns number | null

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

### indent

* get indent(): number

  This element's indent attribute, which determines the number of spaces added upon pressing the TAB key.
  A value of 0 disables this feature entirely.

  #### Returns number
* set indent(value: number): void

  Set this element's indent attribute.

  #### Parameters

  + value: number

  #### Returns void

### language

* get language(): [CodeMirrorLanguage](../types/foundry.data.types.CodeMirrorLanguage.md)

  This element's language attribute or its default if no value is set

  #### Returns [CodeMirrorLanguage](../types/foundry.data.types.CodeMirrorLanguage.md)
* set language(value: [CodeMirrorLanguage](../types/foundry.data.types.CodeMirrorLanguage.md)): void

  Set this element's language attribute.

  #### Parameters

  + value: [CodeMirrorLanguage](../types/foundry.data.types.CodeMirrorLanguage.md)

  #### Returns void

### managed

* get managed(): boolean

  Whether the editor is externally managed by some other process that takes responsibility for its contents and for
  firing events. If not set, the editor will fire its own events.

  #### Returns boolean
* set managed(value: boolean): void

  Set the editor's managed attribute.

  #### Parameters

  + value: boolean

  #### Returns void

### name

* get name(): string

  The input element name.

  #### Returns string

  Inherited from AbstractFormInputElement.name

### nowrap

* get nowrap(): boolean

  The element's nowrap attribute, which if present disables line-wrapping

  #### Returns boolean
* set nowrap(value: boolean): void

  Set this element's nowrap attribute.

  #### Parameters

  + value: boolean

  #### Returns void

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

### \_buildElements

* \_buildElements(): HTMLElement[]

  #### Returns HTMLElement[]

  Overrides [AbstractFormInputElement](foundry.applications.elements.AbstractFormInputElement.md).[\_buildElements](foundry.applications.elements.AbstractFormInputElement.md#_buildelements)

### \_getValue

* \_getValue(): string

  #### Returns string

  Overrides [AbstractFormInputElement](foundry.applications.elements.AbstractFormInputElement.md).[\_getValue](foundry.applications.elements.AbstractFormInputElement.md#_getvalue)

### \_setValue

* \_setValue(value: any): void

  Translate user-provided input value into the format that should be stored.

  #### Parameters

  + value: any

    A new value to assign to the element

  #### Returns void

  #### Throws

  An error if the provided value is invalid

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

  Overrides [AbstractFormInputElement](foundry.applications.elements.AbstractFormInputElement.md).[attributeChangedCallback](foundry.applications.elements.AbstractFormInputElement.md#attributechangedcallback)

### connectedCallback

* connectedCallback(): void

  Initialize the custom element, constructing its HTML.

  #### Returns void

  Overrides [AbstractFormInputElement](foundry.applications.elements.AbstractFormInputElement.md).[connectedCallback](foundry.applications.elements.AbstractFormInputElement.md#connectedcallback)

### disconnectedCallback

* disconnectedCallback(): void

  Call for garbage collection upon this element being removed from the DOM.

  #### Returns void

  Overrides [AbstractFormInputElement](foundry.applications.elements.AbstractFormInputElement.md).[disconnectedCallback](foundry.applications.elements.AbstractFormInputElement.md#disconnectedcallback)

### focus

* focus(): void

  #### Returns void

  Overrides [AbstractFormInputElement](foundry.applications.elements.AbstractFormInputElement.md).[focus](foundry.applications.elements.AbstractFormInputElement.md#focus)

### formDisabledCallback

* formDisabledCallback(disabled: any): void

  #### Parameters

  + disabled: any

  #### Returns void

  Inherited from [AbstractFormInputElement](foundry.applications.elements.AbstractFormInputElement.md).[formDisabledCallback](foundry.applications.elements.AbstractFormInputElement.md#formdisabledcallback)

### posAtCoords

* posAtCoords(coords: [Point](../interfaces/foundry.types.Point.md)): number

  Given screen co-ordinates, returns the position in the editor's text content at those co-ordinates.

  #### Parameters

  + coords: [Point](../interfaces/foundry.types.Point.md)

    The screen co-ordinates.

  #### Returns number

### scrollTo

* scrollTo(x: any, y: any): void

  #### Parameters

  + x: any
  + y: any

  #### Returns void

  #### Inherit Doc

  Overrides AbstractFormInputElement.scrollTo

### `Protected`\_activateListeners

* \_activateListeners(): void

  `Protected`

  Activate event listeners which add dynamic behavior to the custom element.

  #### Returns void

  Inherited from [AbstractFormInputElement](foundry.applications.elements.AbstractFormInputElement.md).[\_activateListeners](foundry.applications.elements.AbstractFormInputElement.md#_activatelisteners)

### `Protected`\_disconnect

* \_disconnect(): void

  `Protected`

  A method provided for subclasses to perform tear-down workflows as an alternative to overriding
  disconnectedCallback.

  #### Returns void

  Inherited from [AbstractFormInputElement](foundry.applications.elements.AbstractFormInputElement.md).[\_disconnect](foundry.applications.elements.AbstractFormInputElement.md#_disconnect)

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

  #### Parameters

  + disabled: boolean

  #### Returns void

  Overrides [AbstractFormInputElement](foundry.applications.elements.AbstractFormInputElement.md).[\_toggleDisabled](foundry.applications.elements.AbstractFormInputElement.md#_toggledisabled)

### `Static`create

* create(  
  Â Â Â Â config: [FormInputConfig](../interfaces/foundry.data.types.FormInputConfig.md)<string> & [CodeMirrorInputConfig](../interfaces/foundry.data.types.CodeMirrorInputConfig.md),  
  ): HTMLCodeMirrorElement

  Create an HTMLCodeMirrorElement element for a StringField (typically a JSONField or JavascriptField).

  #### Parameters

  + config: [FormInputConfig](../interfaces/foundry.data.types.FormInputConfig.md)<string> & [CodeMirrorInputConfig](../interfaces/foundry.data.types.CodeMirrorInputConfig.md)

  #### Returns HTMLCodeMirrorElement