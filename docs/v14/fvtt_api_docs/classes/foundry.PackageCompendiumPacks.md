---
title: "PackageCompendiumPacks | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.PackageCompendiumPacks.html"
category: "classes"
---

# Class PackageCompendiumPacks

A special SetField which provides additional validation and initialization behavior specific to compendium packs.

#### Hierarchy ([View Summary](../hierarchy.md#foundry.PackageCompendiumPacks))

* [SetField](foundry.data.fields.SetField.md)
  + PackageCompendiumPacks

##### Index

### Constructors

[constructor](#constructor)

### Properties

[element](#element)
[name](#name)
[options](#options)
[parent](#parent)
[persisted](#persisted)
[hierarchical](#hierarchical)
[recursive](#recursive)

### Accessors

[fieldPath](#fieldpath)
[\_defaults](#_defaults)
[hasFormSupport](#hasformsupport)

### Methods

[\_applyChangeAdd](#_applychangeadd)
[\_applyChangeDowngrade](#_applychangedowngrade)
[\_applyChangeSubtract](#_applychangesubtract)
[\_applyChangeUpgrade](#_applychangeupgrade)
[\_cast](#_cast)
[\_castChangeDelta](#_castchangedelta)
[\_cleanElement](#_cleanelement)
[\_cleanType](#_cleantype)
[\_getField](#_getfield)
[\_toInput](#_toinput)
[\_updateCommit](#_updatecommit)
[\_updateDiff](#_updatediff)
[\_validateModel](#_validatemodel)
[\_validateRecursive](#_validaterecursive)
[\_validateType](#_validatetype)
[apply](#apply)
[applyChange](#applychange)
[clean](#clean)
[getInitialValue](#getinitialvalue)
[initialize](#initialize)
[toFormGroup](#toformgroup)
[toInput](#toinput)
[toObject](#toobject)
[validate](#validate)
[validators](#validators)
[\_applyChangeCustom](#_applychangecustom)
[\_applyChangeMultiply](#_applychangemultiply)
[\_applyChangeOverride](#_applychangeoverride)
[\_migrate](#_migrate)
[\_replaceDataRefs](#_replacedatarefs)
[\_validateSpecial](#_validatespecial)
[\_handleValidationFailure](#_handlevalidationfailure)
[\_validateElementType](#_validateelementtype)

## Constructors

### constructor

* new PackageCompendiumPacks(  
  Â Â Â Â element: [DataField](foundry.data.fields.DataField.md),  
  Â Â Â Â options?: [ArrayFieldOptions](../types/foundry.data.types.ArrayFieldOptions.md),  
  Â Â Â Â context?: [DataFieldContext](../interfaces/foundry.data.types.DataFieldContext.md),  
  ): PackageCompendiumPacks

  #### Parameters

  + element: [DataField](foundry.data.fields.DataField.md)

    The type of element contained in the Array
  + `Optional`options: [ArrayFieldOptions](../types/foundry.data.types.ArrayFieldOptions.md) = {}

    Options which configure the behavior of the field
  + `Optional`context: [DataFieldContext](../interfaces/foundry.data.types.DataFieldContext.md) = {}

    Additional context which describes the field

  #### Returns PackageCompendiumPacks

  Inherited from [SetField](foundry.data.fields.SetField.md).[constructor](foundry.data.fields.SetField.md#constructor)

## Properties

### element

element: [DataField](foundry.data.fields.DataField.md)

The data type of each element in this array

Inherited from [SetField](foundry.data.fields.SetField.md).[element](foundry.data.fields.SetField.md#element)

### `Internal`name

name: string | undefined

The field name of this DataField instance.
This is assigned by SchemaField#initialize.

Inherited from [SetField](foundry.data.fields.SetField.md).[name](foundry.data.fields.SetField.md#name)

### options

options: [DataFieldOptions](../interfaces/foundry.data.types.DataFieldOptions.md)

The initially provided options which configure the data field

Inherited from [SetField](foundry.data.fields.SetField.md).[options](foundry.data.fields.SetField.md#options)

### `Internal`parent

parent: any

A reference to the parent schema to which this DataField belongs.
This is assigned by SchemaField#initialize.

Inherited from [SetField](foundry.data.fields.SetField.md).[parent](foundry.data.fields.SetField.md#parent)

### persisted

persisted: boolean = true

Is a value of this field written to source data? A Non-persisted value is initialized (with its initial value), and
ActiveEffects can use the field for change application.

Inherited from [SetField](foundry.data.fields.SetField.md).[persisted](foundry.data.fields.SetField.md#persisted)

### `Static`hierarchical

hierarchical: boolean = false

Whether this field defines part of a Document/Embedded Document hierarchy.

Inherited from [SetField](foundry.data.fields.SetField.md).[hierarchical](foundry.data.fields.SetField.md#hierarchical)

### `Static`recursive

recursive: boolean = true

Inherited from [SetField](foundry.data.fields.SetField.md).[recursive](foundry.data.fields.SetField.md#recursive)

## Accessors

### fieldPath

* get fieldPath(): string

  A dot-separated string representation of the field path within the parent schema.

  #### Returns string

  Inherited from fields.SetField.fieldPath

### `Static`\_defaults

* get \_defaults(): [DataFieldOptions](../interfaces/foundry.data.types.DataFieldOptions.md) & {  
  Â Â Â Â empty: boolean;  
  Â Â Â Â exact: undefined;  
  Â Â Â Â max: number;  
  Â Â Â Â min: number;  
  Â Â Â Â nullable: boolean;  
  Â Â Â Â required: boolean;  
  }

  Default parameters for this field type

  #### Returns [DataFieldOptions](../interfaces/foundry.data.types.DataFieldOptions.md) & { Â Â Â Â empty: boolean; Â Â Â Â exact: undefined; Â Â Â Â max: number; Â Â Â Â min: number; Â Â Â Â nullable: boolean; Â Â Â Â required: boolean; }

  Inherited from fields.SetField.\_defaults

### `Static`hasFormSupport

* get hasFormSupport(): boolean

  Does this form field class have defined form support?

  #### Returns boolean

  Inherited from fields.SetField.hasFormSupport

## Methods

### \_applyChangeAdd

* \_applyChangeAdd(value: any, delta: any, model: any, change: any): any

  #### Parameters

  + value: any
  + delta: any
  + model: any
  + change: any

  #### Returns any

  Inherited from [SetField](foundry.data.fields.SetField.md).[\_applyChangeAdd](foundry.data.fields.SetField.md#_applychangeadd)

### \_applyChangeDowngrade

* \_applyChangeDowngrade(value: any, delta: any, model: any, change: any): any

  #### Parameters

  + value: any
  + delta: any
  + model: any
  + change: any

  #### Returns any

  Inherited from [SetField](foundry.data.fields.SetField.md).[\_applyChangeDowngrade](foundry.data.fields.SetField.md#_applychangedowngrade)

### \_applyChangeSubtract

* \_applyChangeSubtract(value: any, delta: any, model: any, change: any): any

  #### Parameters

  + value: any
  + delta: any
  + model: any
  + change: any

  #### Returns any

  Inherited from [SetField](foundry.data.fields.SetField.md).[\_applyChangeSubtract](foundry.data.fields.SetField.md#_applychangesubtract)

### \_applyChangeUpgrade

* \_applyChangeUpgrade(value: any, delta: any, model: any, change: any): any

  #### Parameters

  + value: any
  + delta: any
  + model: any
  + change: any

  #### Returns any

  Inherited from [SetField](foundry.data.fields.SetField.md).[\_applyChangeUpgrade](foundry.data.fields.SetField.md#_applychangeupgrade)

### \_cast

* \_cast(value: any): any[]

  #### Parameters

  + value: any

  #### Returns any[]

  Inherited from [SetField](foundry.data.fields.SetField.md).[\_cast](foundry.data.fields.SetField.md#_cast)

### \_castChangeDelta

* \_castChangeDelta(raw: any, replacementData: any): Set<any>

  #### Parameters

  + raw: any
  + replacementData: any

  #### Returns Set<any>

  Inherited from [SetField](foundry.data.fields.SetField.md).[\_castChangeDelta](foundry.data.fields.SetField.md#_castchangedelta)

### \_cleanElement

* \_cleanElement(value: any, options: any, \_state: any): object

  Clean data for an individual element in the ArrayField.

  #### Parameters

  + value: any

    Unclean data for the array entry
  + options: any

    Options which control how data is cleaned
  + \_state: any

    State used during data cleaning

  #### Returns object

  Cleaned data for the array entry

  Overrides [SetField](foundry.data.fields.SetField.md).[\_cleanElement](foundry.data.fields.SetField.md#_cleanelement)

### \_cleanType

* \_cleanType(value: any, options: any, \_state: any): any

  When cleaning an ArrayField we must force {partial: false} since arrays are always fully replaced.
  We take care to preserve the provided array reference, cleaning its elements rather than replacing the array.

  #### Parameters

  + value: any
  + options: any
  + \_state: any

  #### Returns any

  Inherited from [SetField](foundry.data.fields.SetField.md).[\_cleanType](foundry.data.fields.SetField.md#_cleantype)

### \_getField

* \_getField(parts: any, \_\_namedParameters?: {}): any

  #### Parameters

  + parts: any
  + \_\_namedParameters: {} = {}

  #### Returns any

  Inherited from [SetField](foundry.data.fields.SetField.md).[\_getField](foundry.data.fields.SetField.md#_getfield)

### \_toInput

* \_toInput(config: any): any

  #### Parameters

  + config: any

  #### Returns any

  Inherited from [SetField](foundry.data.fields.SetField.md).[\_toInput](foundry.data.fields.SetField.md#_toinput)

### \_updateCommit

* \_updateCommit(  
  Â Â Â Â source: any,  
  Â Â Â Â key: any,  
  Â Â Â Â value: any,  
  Â Â Â Â \_diff: any,  
  Â Â Â Â \_options: any,  
  ): void

  Commit array field changes by replacing array contents while preserving the array reference itself.

  #### Parameters

  + source: any
  + key: any
  + value: any
  + \_diff: any
  + \_options: any

  #### Returns void

  Inherited from [SetField](foundry.data.fields.SetField.md).[\_updateCommit](foundry.data.fields.SetField.md#_updatecommit)

### \_updateDiff

* \_updateDiff(key: any, value: any, options: any, state: any): void

  #### Parameters

  + key: any
  + value: any
  + options: any
  + state: any

  #### Returns void

  Inherited from [SetField](foundry.data.fields.SetField.md).[\_updateDiff](foundry.data.fields.SetField.md#_updatediff)

### \_validateModel

* \_validateModel(data: any, options: any): void

  #### Parameters

  + data: any
  + options: any

  #### Returns void

  Overrides [SetField](foundry.data.fields.SetField.md).[\_validateModel](foundry.data.fields.SetField.md#_validatemodel)

### \_validateRecursive

* \_validateRecursive(value: any, options?: {}): void

  #### Parameters

  + value: any
  + options: {} = {}

  #### Returns void

  Inherited from [SetField](foundry.data.fields.SetField.md).[\_validateRecursive](foundry.data.fields.SetField.md#_validaterecursive)

### \_validateType

* \_validateType(value: any, options: any): void

  #### Parameters

  + value: any
  + options: any

  #### Returns void

  Inherited from [SetField](foundry.data.fields.SetField.md).[\_validateType](foundry.data.fields.SetField.md#_validatetype)

### apply

* apply(fn: any, value?: any[], options?: {}): any[]

  #### Parameters

  + fn: any
  + value: any[] = []
  + options: {} = {}

  #### Returns any[]

  Inherited from [SetField](foundry.data.fields.SetField.md).[apply](foundry.data.fields.SetField.md#apply)

### applyChange

* applyChange<[T](#applychanget)>(  
  Â Â Â Â value: [T](foundry.data.fields.ShaderField.md#applychanget),  
  Â Â Â Â model: DataModel,  
  Â Â Â Â change: ActiveEffectChangeData,  
  Â Â Â Â options?: { replacementData?: Record<string, unknown> },  
  ): [T](foundry.data.fields.ShaderField.md#applychanget)

  Apply an ActiveEffectChange to this field.

  #### Type Parameters

  + T

  #### Parameters

  + value: [T](foundry.data.fields.ShaderField.md#applychanget)

    The field's current value.
  + model: DataModel

    The model instance.
  + change: ActiveEffectChangeData

    The change to apply.
  + options: { replacementData?: Record<string, unknown> } = {}

    Additional options to configure the change application.

    - ##### `Optional`replacementData?: Record<string, unknown>

      Data used to resolve "@" expressions.

  #### Returns [T](foundry.data.fields.ShaderField.md#applychanget)

  The updated value.

  Inherited from [SetField](foundry.data.fields.SetField.md).[applyChange](foundry.data.fields.SetField.md#applychange)

### clean

* clean(  
  Â Â Â Â value: any,  
  Â Â Â Â options?: Readonly<[DataModelCleaningOptions](../interfaces/foundry.data.types.DataModelCleaningOptions.md)>,  
  Â Â Â Â \_state?: [data](../modules/foundry.data.md).[types](../modules/foundry.data.types.md).[DataModelUpdateState](../interfaces/foundry.data.types.DataModelUpdateState.md),  
  ): any

  Preprocess and clean source data to ensure that it conforms to the correct data type for this field and is ready
  to be used by data model construction or update operations.
  Data cleaning is synchronous and automatically applied as the first step of construction and update operations.

  #### Parameters

  + value: any

    An initial requested value
  + `Optional`options: Readonly<[DataModelCleaningOptions](../interfaces/foundry.data.types.DataModelCleaningOptions.md)> = {}

    Additional options for how the field is cleaned
  + `Optional`\_state: [data](../modules/foundry.data.md).[types](../modules/foundry.data.types.md).[DataModelUpdateState](../interfaces/foundry.data.types.DataModelUpdateState.md) = {}

    Internal state variables which are used during recursion

  #### Returns any

  The cleaned value

  Inherited from [SetField](foundry.data.fields.SetField.md).[clean](foundry.data.fields.SetField.md#clean)

### getInitialValue

* getInitialValue(source: any): any

  #### Parameters

  + source: any

  #### Returns any

  Inherited from [SetField](foundry.data.fields.SetField.md).[getInitialValue](foundry.data.fields.SetField.md#getinitialvalue)

### initialize

* initialize(value: any, model: any, options?: {}): Set<any>

  #### Parameters

  + value: any
  + model: any
  + options: {} = {}

  #### Returns Set<any>

  Overrides [SetField](foundry.data.fields.SetField.md).[initialize](foundry.data.fields.SetField.md#initialize)

### toFormGroup

* toFormGroup(  
  Â Â Â Â groupConfig?: [FormGroupConfig](../interfaces/foundry.data.types.FormGroupConfig.md),  
  Â Â Â Â inputConfig?: [FormInputConfig](../interfaces/foundry.data.types.FormInputConfig.md),  
  ): HTMLDivElement

  Render this DataField as a standardized form-group element.

  #### Parameters

  + groupConfig: [FormGroupConfig](../interfaces/foundry.data.types.FormGroupConfig.md) = {}

    Configuration options passed to the wrapping form-group
  + inputConfig: [FormInputConfig](../interfaces/foundry.data.types.FormInputConfig.md) = {}

    Input element configuration options passed to DataField#toInput

  #### Returns HTMLDivElement

  The rendered form group element

  Inherited from [SetField](foundry.data.fields.SetField.md).[toFormGroup](foundry.data.fields.SetField.md#toformgroup)

### toInput

* toInput(config?: [FormInputConfig](../interfaces/foundry.data.types.FormInputConfig.md)): HTMLElement | HTMLCollection | HTMLElement[]

  Render this DataField as an HTML element.

  #### Parameters

  + config: [FormInputConfig](../interfaces/foundry.data.types.FormInputConfig.md) = {}

    Form element configuration parameters

  #### Returns HTMLElement | HTMLCollection | HTMLElement[]

  A rendered HTMLElement for the field

  #### Throws

  An Error if this DataField subclass does not support input rendering

  Inherited from [SetField](foundry.data.fields.SetField.md).[toInput](foundry.data.fields.SetField.md#toinput)

### toObject

* toObject(value: any): any

  #### Parameters

  + value: any

  #### Returns any

  Inherited from [SetField](foundry.data.fields.SetField.md).[toObject](foundry.data.fields.SetField.md#toobject)

### validate

* validate(  
  Â Â Â Â value: any,  
  Â Â Â Â options?: [DataFieldValidationOptions](../interfaces/foundry.data.types.DataFieldValidationOptions.md),  
  ): void | [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.md)

  Validate candidate input for this field, ensuring it meets the field requirements.

  This public method validates recursively, testing both the immediate value of this field as well as the validity
  of any child values for fields with hierarchical data types.

  #### Parameters

  + value: any

    The candidate value to validate
  + `Optional`options: [DataFieldValidationOptions](../interfaces/foundry.data.types.DataFieldValidationOptions.md) = {}

    Options which affect validation behavior

  #### Returns void | [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.md)

  A failure that occurred if validation is non-strict.
  The failure may have been resolved by fallback or dropping
  invalid elements.

  #### Throws

  A failure error type including details of the failure if
  validation is performed strictly.

  Inherited from [SetField](foundry.data.fields.SetField.md).[validate](foundry.data.fields.SetField.md#validate)

### validators

* validators(  
  Â Â Â Â options?: Pick<[DataFieldValidationOptions](../interfaces/foundry.data.types.DataFieldValidationOptions.md), "recursive" | "phase">,  
  ): Generator<[DataFieldValidator](../types/foundry.data.types.DataFieldValidator.md), void, unknown>

  Iterate over validation functions applied to this field.
  Validation happens in a depth-first way, for example consider an outerSchema with an innerField:

  #### Parameters

  + options: Pick<[DataFieldValidationOptions](../interfaces/foundry.data.types.DataFieldValidationOptions.md), "recursive" | "phase"> = {}

  #### Returns Generator<[DataFieldValidator](../types/foundry.data.types.DataFieldValidator.md), void, unknown>

  #### Example: Validator Invocation Order

  ```
  outerSchema  
    _validateSpecial  
    _validateType  
    _validateRecursive  
    outerSchema.options.validate  
      innerField  
        _validateSpecial  
        _validateType  
        innerField.options.validate  
        _validateModel  
    _validateModel
  Copy
  ```

  #### Yields

  Inherited from [SetField](foundry.data.fields.SetField.md).[validators](foundry.data.fields.SetField.md#validators)

### `Protected`\_applyChangeCustom

* \_applyChangeCustom(  
  Â Â Â Â value: any,  
  Â Â Â Â delta: any,  
  Â Â Â Â model: DataModel,  
  Â Â Â Â change: [EffectChangeData](../interfaces/foundry.documents.types.EffectChangeData.md),  
  ): any

  `Protected`

  Apply a custom change to this field.

  #### Parameters

  + value: any

    The field's current value.
  + delta: any

    The change delta.
  + model: DataModel

    The model instance.
  + change: [EffectChangeData](../interfaces/foundry.documents.types.EffectChangeData.md)

    The original change data.

  #### Returns any

  The updated value.

  Inherited from [SetField](foundry.data.fields.SetField.md).[\_applyChangeCustom](foundry.data.fields.SetField.md#_applychangecustom)

### `Protected`\_applyChangeMultiply

* \_applyChangeMultiply(  
  Â Â Â Â value: any,  
  Â Â Â Â delta: any,  
  Â Â Â Â model: DataModel,  
  Â Â Â Â change: [EffectChangeData](../interfaces/foundry.documents.types.EffectChangeData.md),  
  ): any

  `Protected`

  Apply a "multiply" change to this field.

  #### Parameters

  + value: any

    The field's current value.
  + delta: any

    The change delta.
  + model: DataModel

    The model instance.
  + change: [EffectChangeData](../interfaces/foundry.documents.types.EffectChangeData.md)

    The original change data.

  #### Returns any

  The updated value.

  Inherited from [SetField](foundry.data.fields.SetField.md).[\_applyChangeMultiply](foundry.data.fields.SetField.md#_applychangemultiply)

### `Protected`\_applyChangeOverride

* \_applyChangeOverride(  
  Â Â Â Â value: any,  
  Â Â Â Â delta: any,  
  Â Â Â Â model: DataModel,  
  Â Â Â Â change: [EffectChangeData](../interfaces/foundry.documents.types.EffectChangeData.md),  
  ): any

  `Protected`

  Apply an "override" change to this field.

  #### Parameters

  + value: any

    The field's current value.
  + delta: any

    The change delta.
  + model: DataModel

    The model instance.
  + change: [EffectChangeData](../interfaces/foundry.documents.types.EffectChangeData.md)

    The original change data.

  #### Returns any

  The updated value.

  Inherited from [SetField](foundry.data.fields.SetField.md).[\_applyChangeOverride](foundry.data.fields.SetField.md#_applychangeoverride)

### `Protected`\_migrate

* \_migrate(  
  Â Â Â Â value: any,  
  Â Â Â Â options?: Readonly<[DataModelCleaningOptions](../interfaces/foundry.data.types.DataModelCleaningOptions.md)>,  
  Â Â Â Â \_state?: [data](../modules/foundry.data.md).[types](../modules/foundry.data.types.md).[DataModelUpdateState](../interfaces/foundry.data.types.DataModelUpdateState.md),  
  ): any

  `Protected`

  Migrate this field's candidate source data.
  This workflow occurs as a component step of DataField#clean.

  #### Parameters

  + value: any

    Candidate source value for the field
  + `Optional`options: Readonly<[DataModelCleaningOptions](../interfaces/foundry.data.types.DataModelCleaningOptions.md)>

    Options for how the field is cleaned
  + `Optional`\_state: [data](../modules/foundry.data.md).[types](../modules/foundry.data.types.md).[DataModelUpdateState](../interfaces/foundry.data.types.DataModelUpdateState.md)

    Internal state variables transacted during cleaning recursion.

  #### Returns any

  A migrated value suitable for cleaning

  Inherited from [SetField](foundry.data.fields.SetField.md).[\_migrate](foundry.data.fields.SetField.md#_migrate)

### `Protected`\_replaceDataRefs

* \_replaceDataRefs(  
  Â Â Â Â raw: string,  
  Â Â Â Â data: Record<string, unknown>,  
  Â Â Â Â options?: { strict?: boolean },  
  ): string

  `Protected`

  Recursively replace data references in a string change value.

  #### Parameters

  + raw: string
  + data: Record<string, unknown>

    An object providing replacements
  + `Optional`options: { strict?: boolean } = {}

    Additional options to configure the data replacement

    - ##### `Optional`strict?: boolean

      Throw an Error if data replacement fails

  #### Returns string

  The expression with data references resolved

  Inherited from [SetField](foundry.data.fields.SetField.md).[\_replaceDataRefs](foundry.data.fields.SetField.md#_replacedatarefs)

### `Protected`\_validateSpecial

* \_validateSpecial(value: any): boolean | void

  `Protected`

  Special validation rules which supersede regular field validation.
  This validator screens for certain values which are otherwise incompatible with this field like null or undefined.

  #### Parameters

  + value: any

    The candidate value

  #### Returns boolean | void

  A boolean to indicate with certainty whether the value is valid

  #### Throws

  An error with a specific reason the value is invalid

  Inherited from [SetField](foundry.data.fields.SetField.md).[\_validateSpecial](foundry.data.fields.SetField.md#_validatespecial)

### `Static`\_handleValidationFailure

* \_handleValidationFailure(  
  Â Â Â Â field: any,  
  Â Â Â Â value: any,  
  Â Â Â Â index: any,  
  Â Â Â Â parentFailure: any,  
  Â Â Â Â fieldFailure: any,  
  Â Â Â Â options: any,  
  ): void

  `Internal`

  #### Parameters

  + field: any
  + value: any
  + index: any
  + parentFailure: any
  + fieldFailure: any
  + options: any

  #### Returns void

  #### See

  [SchemaField.\_handleValidationFailure](foundry.data.fields.SchemaField.md#_handlevalidationfailure)

  Inherited from [SetField](foundry.data.fields.SetField.md).[\_handleValidationFailure](foundry.data.fields.SetField.md#_handlevalidationfailure)

### `Protected` `Static`\_validateElementType

* \_validateElementType(element: any): ElementType

  `Protected`

  Validate the contained element type of the ArrayField

  #### Parameters

  + element: any

    The type of Array element

  #### Returns ElementType

  The validated element type

  #### Throws

  An error if the element is not a valid type

  Inherited from [SetField](foundry.data.fields.SetField.md).[\_validateElementType](foundry.data.fields.SetField.md#_validateelementtype)