---
title: "TokenConfig | Foundry Virtual Tabletop - API Documentation - Version 13"
url: "https://foundryvtt.com/api/classes/foundry.applications.sheets.TokenConfig.html"
category: "classes"
---

* [Foundry Virtual Tabletop - API Documentation - Version 13](../modules.html)
* [foundry](../modules/foundry.html)
* [applications](../modules/foundry.applications.html)
* [sheets](../modules/foundry.applications.sheets.html)
* [TokenConfig](foundry.applications.sheets.TokenConfig.html)

# Class TokenConfig

The Application responsible for configuring a single token document within a parent Scene

#### Mixes

TokenApplication

#### Hierarchy

* any
  + TokenConfig

##### Index

### Properties

[isPrototype](foundry.applications.sheets.TokenConfig.html#isprototype)

### Accessors

[\_fields](foundry.applications.sheets.TokenConfig.html#_fields)
[actor](foundry.applications.sheets.TokenConfig.html#actor)
[isVisible](foundry.applications.sheets.TokenConfig.html#isvisible)
[token](foundry.applications.sheets.TokenConfig.html#token)

### Methods

[\_initializeTokenPreview](foundry.applications.sheets.TokenConfig.html#_initializetokenpreview)
[\_onChangeForm](foundry.applications.sheets.TokenConfig.html#_onchangeform)
[\_onClose](foundry.applications.sheets.TokenConfig.html#_onclose)
[\_onRender](foundry.applications.sheets.TokenConfig.html#_onrender)
[\_prepareAppearanceTab](foundry.applications.sheets.TokenConfig.html#_prepareappearancetab)
[\_prepareContext](foundry.applications.sheets.TokenConfig.html#_preparecontext)
[\_previewChanges](foundry.applications.sheets.TokenConfig.html#_previewchanges)
[\_processFormData](foundry.applications.sheets.TokenConfig.html#_processformdata)
[\_processSubmitData](foundry.applications.sheets.TokenConfig.html#_processsubmitdata)
[\_toggleDisabled](foundry.applications.sheets.TokenConfig.html#_toggledisabled)
[\_onChangeBar](foundry.applications.sheets.TokenConfig.html#_onchangebar)
[#resetPreview](foundry.applications.sheets.TokenConfig.html#resetpreview)

## Properties

### isPrototype

isPrototype: boolean = false

## Accessors

### \_fields

* get \_fields(): [DataSchema](../types/foundry.abstract.types.DataSchema.html)

  #### Returns [DataSchema](../types/foundry.abstract.types.DataSchema.html)

### actor

* get actor(): any

  #### Returns any

### isVisible

* get isVisible(): any

  #### Returns any

  #### Inherit Doc

### token

* get token(): any

  #### Returns any

## Methods

### \_initializeTokenPreview

* \_initializeTokenPreview(): Promise<void>

  #### Returns Promise<void>

### \_onChangeForm

* \_onChangeForm(formConfig: any, event: any): void

  #### Parameters

  + formConfig: any
  + event: any

  #### Returns void

  #### Inherit Doc

### \_onClose

* \_onClose(options: any): void

  #### Parameters

  + options: any

  #### Returns void

  #### Inherit Doc

### \_onRender

* \_onRender(context: any, options: any): any

  #### Parameters

  + context: any
  + options: any

  #### Returns any

  #### Inherit Doc

### \_prepareAppearanceTab

* \_prepareAppearanceTab(options: any): Promise<any>

  #### Parameters

  + options: any

  #### Returns Promise<any>

  #### Inherit Doc

### \_prepareContext

* \_prepareContext(options: any): Promise<any>

  #### Parameters

  + options: any

  #### Returns Promise<any>

  #### Inherit Doc

### \_previewChanges

* \_previewChanges(changes: any): void

  #### Parameters

  + changes: any

  #### Returns void

  #### Inherit Doc

### \_processFormData

* \_processFormData(event: any, form: any, formData: any): any

  #### Parameters

  + event: any
  + form: any
  + formData: any

  #### Returns any

  #### Inherit Doc

### \_processSubmitData

* \_processSubmitData(  
  Â Â Â Â event: any,  
  Â Â Â Â form: any,  
  Â Â Â Â submitData: any,  
  Â Â Â Â options: any,  
  ): Promise<void>

  #### Parameters

  + event: any
  + form: any
  + submitData: any
  + options: any

  #### Returns Promise<void>

  #### Inherit Doc

### \_toggleDisabled

* \_toggleDisabled(disabled: any): void

  #### Parameters

  + disabled: any

  #### Returns void

  #### Inherit Doc

### `Protected`\_onChangeBar

* \_onChangeBar(event: Event): void

  `Protected`

  Handle changing the attribute bar in the drop-down selector to update the default current and max value

  #### Parameters

  + event: Event

    The select input change event

  #### Returns void

### `Protected`#resetPreview

* "#resetPreview"(): void

  `Protected`

  Reset the temporary preview of the Token when the form is submitted or closed.

  #### Returns void