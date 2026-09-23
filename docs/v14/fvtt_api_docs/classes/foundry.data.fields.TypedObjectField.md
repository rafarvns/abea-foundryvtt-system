---
title: "TypedObjectField | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.data.fields.TypedObjectField.html"
category: "classes"
---

# Class TypedObjectField

A subclass of ObjectField that represents a mapping of keys to the provided DataField type.

#### Hierarchy ([View Summary](../hierarchy.md#foundry.data.fields.TypedObjectField))

* [ObjectField](foundry.data.fields.ObjectField.md)
  + TypedObjectField
    - [DocumentFlagsField](foundry.data.fields.DocumentFlagsField.md)

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
[\_cast](#_cast)
[\_cleanType](#_cleantype)
[\_getField](#_getfield)
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
[\_applyChangeDowngrade](#_applychangedowngrade)
[\_applyChangeMultiply](#_applychangemultiply)
[\_applyChangeOverride](#_applychangeoverride)
[\_applyChangeSubtract](#_applychangesubtract)
[\_applyChangeUpgrade](#_applychangeupgrade)
[\_castChangeDelta](#_castchangedelta)
[\_migrate](#_migrate)
[\_replaceDataRefs](#_replacedatarefs)
[\_toInput](#_toinput)
[\_validateSpecial](#_validatespecial)

## Constructors

### constructor

* new TypedObjectField(  
  Â Â Â Â element: [DataField](foundry.data.fields.DataField.md),  
  Â Â Â Â options?: [TypedObjectFieldOptions](../types/foundry.data.types.TypedObjectFieldOptions.md),  
  Â Â Â Â context?: [DataFieldContext](../interfaces/foundry.data.types.DataFieldContext.md),  
  ): TypedObjectField

  #### Parameters

  + element: [DataField](foundry.data.fields.DataField.md)

    The value type of each entry in this object.
  + `Optional`options: [TypedObjectFieldOptions](../types/foundry.data.types.TypedObjectFieldOptions.md)

    Options which configure the behavior of the field.
  + `Optional`context: [DataFieldContext](../interfaces/foundry.data.types.DataFieldContext.md)

    Additional context which describes the field

  #### Returns TypedObjectField

  Overrides [ObjectField](foundry.data.fields.ObjectField.md).[constructor](foundry.data.fields.ObjectField.md#constructor)

## Properties

### element

element: [DataField](foundry.data.fields.DataField.md)

The value type of each entry in this object.

### `Internal`name

name: string | undefined

The field name of this DataField instance.
This is assigned by SchemaField#initialize.

Inherited from [ObjectField](foundry.data.fields.ObjectField.md).[name](foundry.data.fields.ObjectField.md#name)

### options

options: [DataFieldOptions](../interfaces/foundry.data.types.DataFieldOptions.md)

The initially provided options which configure the data field

Inherited from [ObjectField](foundry.data.fields.ObjectField.md).[options](foundry.data.fields.ObjectField.md#options)

### `Internal`parent

parent: any

A reference to the parent schema to which this DataField belongs.
This is assigned by SchemaField#initialize.

Inherited from [ObjectField](foundry.data.fields.ObjectField.md).[parent](foundry.data.fields.ObjectField.md#parent)

### persisted

persisted: boolean = true

Is a value of this field written to source data? A Non-persisted value is initialized (with its initial value), and
ActiveEffects can use the field for change application.

Inherited from [ObjectField](foundry.data.fields.ObjectField.md).[persisted](foundry.data.fields.ObjectField.md#persisted)

### `Static`hierarchical

hierarchical: boolean = false

Whether this field defines part of a Document/Embedded Document hierarchy.

Inherited from [ObjectField](foundry.data.fields.ObjectField.md).[hierarchical](foundry.data.fields.ObjectField.md#hierarchical)

### `Static`recursive

recursive: boolean = true

Overrides [ObjectField](foundry.data.fields.ObjectField.md).[recursive](foundry.data.fields.ObjectField.md#recursive)

## Accessors

### fieldPath

* get fieldPath(): string

  A dot-separated string representation of the field path within the parent schema.

  #### Returns string

  Inherited from ObjectField.fieldPath

### `Static`\_defaults

* get \_defaults(): object

  Default parameters for this field type

  #### Returns object

  Overrides ObjectField.\_defaults

### `Static`hasFormSupport

* get hasFormSupport(): boolean

  Does this form field class have defined form support?

  #### Returns boolean

  Inherited from ObjectField.hasFormSupport

## Methods

### \_applyChangeAdd

* \_applyChangeAdd(value: any, delta: any, model: any, change: any): any

  #### Parameters

  + value: any
  + delta: any
  + model: any
  + change: any

  #### Returns any

  Inherited from [ObjectField](foundry.data.fields.ObjectField.md).[\_applyChangeAdd](foundry.data.fields.ObjectField.md#_applychangeadd)

### \_cast

* \_cast(value: any): any

  #### Parameters

  + value: any

  #### Returns any

  Inherited from [ObjectField](foundry.data.fields.ObjectField.md).[\_cast](foundry.data.fields.ObjectField.md#_cast)

### \_cleanType

* \_cleanType(data: any, options: any, \_state: any): any

  #### Parameters

  + data: any
  + options: any
  + \_state: any

  #### Returns any

  Overrides [ObjectField](foundry.data.fields.ObjectField.md).[\_cleanType](foundry.data.fields.ObjectField.md#_cleantype)

### \_getField

* \_getField(  
  Â Â Â Â parts: any,  
  Â Â Â Â \_\_namedParameters?: {},  
  ): [DataField](foundry.data.fields.DataField.md) | TypedObjectField | undefined

  #### Parameters

  + parts: any
  + \_\_namedParameters: {} = {}

  #### Returns [DataField](foundry.data.fields.DataField.md) | TypedObjectField | undefined

  Overrides [ObjectField](foundry.data.fields.ObjectField.md).[\_getField](foundry.data.fields.ObjectField.md#_getfield)

### \_updateCommit

* \_updateCommit(source: any, key: any, value: any, diff: any, options: any): void

  #### Parameters

  + source: any
  + key: any
  + value: any
  + diff: any
  + options: any

  #### Returns void

  Overrides [ObjectField](foundry.data.fields.ObjectField.md).[\_updateCommit](foundry.data.fields.ObjectField.md#_updatecommit)

### \_updateDiff

* \_updateDiff(key: any, value: any, options: any, state: any): void

  #### Parameters

  + key: any
  + value: any
  + options: any
  + state: any

  #### Returns void

  Overrides [ObjectField](foundry.data.fields.ObjectField.md).[\_updateDiff](foundry.data.fields.ObjectField.md#_updatediff)

### \_validateModel

* \_validateModel(changes: any, options?: {}): void

  #### Parameters

  + changes: any
  + options: {} = {}

  #### Returns void

  Overrides [ObjectField](foundry.data.fields.ObjectField.md).[\_validateModel](foundry.data.fields.ObjectField.md#_validatemodel)

### \_validateRecursive

* \_validateRecursive(data: any, options?: {}): void

  #### Parameters

  + data: any
  + options: {} = {}

  #### Returns void

  Overrides [ObjectField](foundry.data.fields.ObjectField.md).[\_validateRecursive](foundry.data.fields.ObjectField.md#_validaterecursive)

### \_validateType

* \_validateType(value: any, \_options: any): void

  #### Parameters

  + value: any
  + \_options: any

  #### Returns void

  Inherited from [ObjectField](foundry.data.fields.ObjectField.md).[\_validateType](foundry.data.fields.ObjectField.md#_validatetype)

### apply

* apply(fn: any, data?: {}, options?: {}): {}

  #### Parameters

  + fn: any
  + data: {} = {}
  + options: {} = {}

  #### Returns {}

  Overrides [ObjectField](foundry.data.fields.ObjectField.md).[apply](foundry.data.fields.ObjectField.md#apply)

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

  Inherited from [ObjectField](foundry.data.fields.ObjectField.md).[applyChange](foundry.data.fields.ObjectField.md#applychange)

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

  Inherited from [ObjectField](foundry.data.fields.ObjectField.md).[clean](foundry.data.fields.ObjectField.md#clean)

### getInitialValue

* getInitialValue(source: any): any

  #### Parameters

  + source: any

  #### Returns any

  Inherited from [ObjectField](foundry.data.fields.ObjectField.md).[getInitialValue](foundry.data.fields.ObjectField.md#getinitialvalue)

### initialize

* initialize(value: any, model: any, options?: {}): any

  #### Parameters

  + value: any
  + model: any
  + options: {} = {}

  #### Returns any

  Overrides [ObjectField](foundry.data.fields.ObjectField.md).[initialize](foundry.data.fields.ObjectField.md#initialize)

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

  Inherited from [ObjectField](foundry.data.fields.ObjectField.md).[toFormGroup](foundry.data.fields.ObjectField.md#toformgroup)

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

  Inherited from [ObjectField](foundry.data.fields.ObjectField.md).[toInput](foundry.data.fields.ObjectField.md#toinput)

### toObject

* toObject(value: any): any

  #### Parameters

  + value: any

  #### Returns any

  Overrides [ObjectField](foundry.data.fields.ObjectField.md).[toObject](foundry.data.fields.ObjectField.md#toobject)

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

  Inherited from [ObjectField](foundry.data.fields.ObjectField.md).[validate](foundry.data.fields.ObjectField.md#validate)

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

  Inherited from [ObjectField](foundry.data.fields.ObjectField.md).[validators](foundry.data.fields.ObjectField.md#validators)

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

  Inherited from [ObjectField](foundry.data.fields.ObjectField.md).[\_applyChangeCustom](foundry.data.fields.ObjectField.md#_applychangecustom)

### `Protected`\_applyChangeDowngrade

* \_applyChangeDowngrade(  
  Â Â Â Â value: any,  
  Â Â Â Â delta: any,  
  Â Â Â Â model: DataModel,  
  Â Â Â Â change: [EffectChangeData](../interfaces/foundry.documents.types.EffectChangeData.md),  
  ): any

  `Protected`

  Apply a "downgrade" change to this field.

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

  Inherited from [ObjectField](foundry.data.fields.ObjectField.md).[\_applyChangeDowngrade](foundry.data.fields.ObjectField.md#_applychangedowngrade)

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

  Inherited from [ObjectField](foundry.data.fields.ObjectField.md).[\_applyChangeMultiply](foundry.data.fields.ObjectField.md#_applychangemultiply)

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

  Inherited from [ObjectField](foundry.data.fields.ObjectField.md).[\_applyChangeOverride](foundry.data.fields.ObjectField.md#_applychangeoverride)

### `Protected`\_applyChangeSubtract

* \_applyChangeSubtract(  
  Â Â Â Â value: any,  
  Â Â Â Â delta: any,  
  Â Â Â Â model: DataModel,  
  Â Â Â Â change: [EffectChangeData](../interfaces/foundry.documents.types.EffectChangeData.md),  
  ): any

  `Protected`

  Apply a "subtract" change to this field.

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

  Inherited from [ObjectField](foundry.data.fields.ObjectField.md).[\_applyChangeSubtract](foundry.data.fields.ObjectField.md#_applychangesubtract)

### `Protected`\_applyChangeUpgrade

* \_applyChangeUpgrade(  
  Â Â Â Â value: any,  
  Â Â Â Â delta: any,  
  Â Â Â Â model: DataModel,  
  Â Â Â Â change: [EffectChangeData](../interfaces/foundry.documents.types.EffectChangeData.md),  
  ): any

  `Protected`

  Apply an "upgrade" change to this field.

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

  Inherited from [ObjectField](foundry.data.fields.ObjectField.md).[\_applyChangeUpgrade](foundry.data.fields.ObjectField.md#_applychangeupgrade)

### `Protected`\_castChangeDelta

* \_castChangeDelta(delta: any, replacementData?: object): any

  `Protected`

  Cast a change delta into an appropriate type to be applied to this field.

  #### Parameters

  + delta: any

    The change delta.
  + replacementData: object = {}

    Data used to resolve "@" expressions.

  #### Returns any

  Inherited from [ObjectField](foundry.data.fields.ObjectField.md).[\_castChangeDelta](foundry.data.fields.ObjectField.md#_castchangedelta)

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

  Inherited from [ObjectField](foundry.data.fields.ObjectField.md).[\_migrate](foundry.data.fields.ObjectField.md#_migrate)

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

  Inherited from [ObjectField](foundry.data.fields.ObjectField.md).[\_replaceDataRefs](foundry.data.fields.ObjectField.md#_replacedatarefs)

### `Protected`\_toInput

* \_toInput(config: [FormInputConfig](../interfaces/foundry.data.types.FormInputConfig.md)): HTMLElement | HTMLCollection | HTMLElement[]

  `Protected`

  Render this DataField as an HTML element.
  Subclasses should implement this method rather than the public toInput method which wraps it.

  #### Parameters

  + config: [FormInputConfig](../interfaces/foundry.data.types.FormInputConfig.md)

    Form element configuration parameters

  #### Returns HTMLElement | HTMLCollection | HTMLElement[]

  A rendered HTMLElement for the field

  #### Throws

  An Error if this DataField subclass does not support input rendering

  Inherited from [ObjectField](foundry.data.fields.ObjectField.md).[\_toInput](foundry.data.fields.ObjectField.md#_toinput)

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

  Inherited from [ObjectField](foundry.data.fields.ObjectField.md).[\_validateSpecial](foundry.data.fields.ObjectField.md#_validatespecial)