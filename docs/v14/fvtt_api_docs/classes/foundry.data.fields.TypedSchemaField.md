---
title: "TypedSchemaField | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.data.fields.TypedSchemaField.html"
category: "classes"
---

# Class TypedSchemaField

A subclass of [foundry.data.fields.DataField](foundry.data.fields.DataField.md) that defines a union of schema-constrained objects discriminable
via a `type` property.

#### Hierarchy ([View Summary](../hierarchy.md#foundry.data.fields.TypedSchemaField))

* [DataField](foundry.data.fields.DataField.md)
  + TypedSchemaField

##### Index

### Constructors

[constructor](#constructor)

### Properties

[name](#name)
[options](#options)
[parent](#parent)
[persisted](#persisted)
[types](#types)
[hierarchical](#hierarchical)
[recursive](#recursive)

### Accessors

[fieldPath](#fieldpath)
[\_defaults](#_defaults)
[hasFormSupport](#hasformsupport)

### Methods

[\_cast](#_cast)
[\_cleanType](#_cleantype)
[\_getField](#_getfield)
[\_updateCommit](#_updatecommit)
[\_updateDiff](#_updatediff)
[\_validateModel](#_validatemodel)
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
[\_applyChangeAdd](#_applychangeadd)
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
[\_validateRecursive](#_validaterecursive)
[\_validateSpecial](#_validatespecial)

## Constructors

### constructor

* new TypedSchemaField(  
  Â Â Â Â types: Record<string, any>,  
  Â Â Â Â options?: [DataFieldOptions](../interfaces/foundry.data.types.DataFieldOptions.md),  
  Â Â Â Â context?: [DataFieldContext](../interfaces/foundry.data.types.DataFieldContext.md),  
  ): TypedSchemaField

  #### Parameters

  + types: Record<string, any>

    The different types this field can represent
  + `Optional`options: [DataFieldOptions](../interfaces/foundry.data.types.DataFieldOptions.md)

    Options for configuring the field
  + `Optional`context: [DataFieldContext](../interfaces/foundry.data.types.DataFieldContext.md)

    Additional context describing the field

  #### Returns TypedSchemaField

  Overrides [DataField](foundry.data.fields.DataField.md).[constructor](foundry.data.fields.DataField.md#constructor)

## Properties

### `Internal`name

name: string | undefined

The field name of this DataField instance.
This is assigned by SchemaField#initialize.

Inherited from [DataField](foundry.data.fields.DataField.md).[name](foundry.data.fields.DataField.md#name)

### options

options: [DataFieldOptions](../interfaces/foundry.data.types.DataFieldOptions.md)

The initially provided options which configure the data field

Inherited from [DataField](foundry.data.fields.DataField.md).[options](foundry.data.fields.DataField.md#options)

### `Internal`parent

parent: any

A reference to the parent schema to which this DataField belongs.
This is assigned by SchemaField#initialize.

Inherited from [DataField](foundry.data.fields.DataField.md).[parent](foundry.data.fields.DataField.md#parent)

### persisted

persisted: boolean = true

Is a value of this field written to source data? A Non-persisted value is initialized (with its initial value), and
ActiveEffects can use the field for change application.

Inherited from [DataField](foundry.data.fields.DataField.md).[persisted](foundry.data.fields.DataField.md#persisted)

### types

types: { [type: string]: [SchemaField](foundry.data.fields.SchemaField.md) }

The types of this field.

### `Static`hierarchical

hierarchical: boolean = false

Whether this field defines part of a Document/Embedded Document hierarchy.

Inherited from [DataField](foundry.data.fields.DataField.md).[hierarchical](foundry.data.fields.DataField.md#hierarchical)

### `Static`recursive

recursive: boolean = true

Overrides [DataField](foundry.data.fields.DataField.md).[recursive](foundry.data.fields.DataField.md#recursive)

## Accessors

### fieldPath

* get fieldPath(): string

  A dot-separated string representation of the field path within the parent schema.

  #### Returns string

  Inherited from DataField.fieldPath

### `Static`\_defaults

* get \_defaults(): [DataFieldOptions](../interfaces/foundry.data.types.DataFieldOptions.md) & { required: boolean }

  Default parameters for this field type

  #### Returns [DataFieldOptions](../interfaces/foundry.data.types.DataFieldOptions.md) & { required: boolean }

  Overrides DataField.\_defaults

### `Static`hasFormSupport

* get hasFormSupport(): boolean

  Does this form field class have defined form support?

  #### Returns boolean

  Inherited from DataField.hasFormSupport

## Methods

### \_cast

* \_cast(value: any): any

  #### Parameters

  + value: any

  #### Returns any

  Overrides [DataField](foundry.data.fields.DataField.md).[\_cast](foundry.data.fields.DataField.md#_cast)

### \_cleanType

* \_cleanType(value: any, options: any, \_state: any): any

  #### Parameters

  + value: any
  + options: any
  + \_state: any

  #### Returns any

  Overrides [DataField](foundry.data.fields.DataField.md).[\_cleanType](foundry.data.fields.DataField.md#_cleantype)

### \_getField

* \_getField(  
  Â Â Â Â parts: any,  
  Â Â Â Â \_\_namedParameters?: {},  
  ): [DataField](foundry.data.fields.DataField.md) | [SchemaField](foundry.data.fields.SchemaField.md) | TypedSchemaField | undefined

  #### Parameters

  + parts: any
  + \_\_namedParameters: {} = {}

  #### Returns [DataField](foundry.data.fields.DataField.md) | [SchemaField](foundry.data.fields.SchemaField.md) | TypedSchemaField | undefined

  Overrides [DataField](foundry.data.fields.DataField.md).[\_getField](foundry.data.fields.DataField.md#_getfield)

### \_updateCommit

* \_updateCommit(source: any, key: any, value: any, diff: any, options: any): void

  `Internal`

  Commit a prepared update to DataModel#\_source.

  #### Parameters

  + source: any

    The parent source object within which the `key` field exists
  + key: any

    The named field in source to commit
  + value: any

    The new value of the field which should be committed to source
  + diff: any

    The reported change to the field
  + options: any

    Options which modify how this update workflow is performed.

  #### Returns void

  Overrides [DataField](foundry.data.fields.DataField.md).[\_updateCommit](foundry.data.fields.DataField.md#_updatecommit)

### \_updateDiff

* \_updateDiff(key: any, value: any, options: any, state: any): void

  `Internal`

  Update the source data for a DataModel which includes this DataField.
  Updates are performed depth-first; validated and recorded from leaf-nodes upwards.

  This method is responsible for preparing and validating the requested update.
  If the update is valid, it is responsible for updating the pending source copy and recording the diff.
  If the update is invalid it must avoid recording a diff or staging an update to the source copy.
  If validation fails, this workflow may optionally permit `fallback` to a valid initial value.

  ```
                                   a partial node of source data, relative to which this field belongs.
  ```

  #### Parameters

  + key: any

    The name of this field within the context of the source data.
  + value: any

    The candidate value that should be applied as an update.
  + options: any

    Options which modify how this update workflow is performed.
  + state: any

    Stateful data that is transacted throughout the model hierarchy during an
    update operation.

  #### Returns void

  #### Throws

  An error if the requested update cannot be performed.

  Overrides [DataField](foundry.data.fields.DataField.md).[\_updateDiff](foundry.data.fields.DataField.md#_updatediff)

### \_validateModel

* \_validateModel(data: object, options?: object): void

  `Internal`

  Certain fields may declare joint data validation criteria.
  This method will only be called if the field is designated as recursive.
  This method should throw if any validation error occurred, even if resolved by fallback or dropping.

  #### Parameters

  + data: object

    Candidate data for joint model validation
  + options: object = {}

    Options which modify joint model validation

  #### Returns void

  #### Throws

  An error if joint model validation fails

  Inherited from [DataField](foundry.data.fields.DataField.md).[\_validateModel](foundry.data.fields.DataField.md#_validatemodel)

### \_validateType

* \_validateType(value: any, options: any): void | [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.md)

  #### Parameters

  + value: any
  + options: any

  #### Returns void | [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.md)

  Overrides [DataField](foundry.data.fields.DataField.md).[\_validateType](foundry.data.fields.DataField.md#_validatetype)

### apply

* apply(fn: any, data?: {}, options?: {}): {}

  #### Parameters

  + fn: any
  + data: {} = {}
  + options: {} = {}

  #### Returns {}

  Overrides [DataField](foundry.data.fields.DataField.md).[apply](foundry.data.fields.DataField.md#apply)

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

  Inherited from [DataField](foundry.data.fields.DataField.md).[applyChange](foundry.data.fields.DataField.md#applychange)

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

  Inherited from [DataField](foundry.data.fields.DataField.md).[clean](foundry.data.fields.DataField.md#clean)

### getInitialValue

* getInitialValue(source: object): any

  Attempt to retrieve a valid initial value for the DataField.

  #### Parameters

  + source: object

    Model source data object within which an initial value is required for this field

  #### Returns any

  A proposed initial value

  Inherited from [DataField](foundry.data.fields.DataField.md).[getInitialValue](foundry.data.fields.DataField.md#getinitialvalue)

### initialize

* initialize(value: any, model: any, options: any): any

  #### Parameters

  + value: any
  + model: any
  + options: any

  #### Returns any

  Overrides [DataField](foundry.data.fields.DataField.md).[initialize](foundry.data.fields.DataField.md#initialize)

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

  Inherited from [DataField](foundry.data.fields.DataField.md).[toFormGroup](foundry.data.fields.DataField.md#toformgroup)

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

  Inherited from [DataField](foundry.data.fields.DataField.md).[toInput](foundry.data.fields.DataField.md#toinput)

### toObject

* toObject(value: any): any

  #### Parameters

  + value: any

  #### Returns any

  Overrides [DataField](foundry.data.fields.DataField.md).[toObject](foundry.data.fields.DataField.md#toobject)

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

  Inherited from [DataField](foundry.data.fields.DataField.md).[validate](foundry.data.fields.DataField.md#validate)

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

  Inherited from [DataField](foundry.data.fields.DataField.md).[validators](foundry.data.fields.DataField.md#validators)

### `Protected`\_applyChangeAdd

* \_applyChangeAdd(  
  Â Â Â Â value: any,  
  Â Â Â Â delta: any,  
  Â Â Â Â model: DataModel,  
  Â Â Â Â change: [EffectChangeData](../interfaces/foundry.documents.types.EffectChangeData.md),  
  ): any

  `Protected`

  Apply an "add" change to this field.

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

  Inherited from [DataField](foundry.data.fields.DataField.md).[\_applyChangeAdd](foundry.data.fields.DataField.md#_applychangeadd)

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

  Inherited from [DataField](foundry.data.fields.DataField.md).[\_applyChangeCustom](foundry.data.fields.DataField.md#_applychangecustom)

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

  Inherited from [DataField](foundry.data.fields.DataField.md).[\_applyChangeDowngrade](foundry.data.fields.DataField.md#_applychangedowngrade)

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

  Inherited from [DataField](foundry.data.fields.DataField.md).[\_applyChangeMultiply](foundry.data.fields.DataField.md#_applychangemultiply)

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

  Inherited from [DataField](foundry.data.fields.DataField.md).[\_applyChangeOverride](foundry.data.fields.DataField.md#_applychangeoverride)

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

  Inherited from [DataField](foundry.data.fields.DataField.md).[\_applyChangeSubtract](foundry.data.fields.DataField.md#_applychangesubtract)

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

  Inherited from [DataField](foundry.data.fields.DataField.md).[\_applyChangeUpgrade](foundry.data.fields.DataField.md#_applychangeupgrade)

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

  Inherited from [DataField](foundry.data.fields.DataField.md).[\_castChangeDelta](foundry.data.fields.DataField.md#_castchangedelta)

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

  Inherited from [DataField](foundry.data.fields.DataField.md).[\_migrate](foundry.data.fields.DataField.md#_migrate)

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

  Inherited from [DataField](foundry.data.fields.DataField.md).[\_replaceDataRefs](foundry.data.fields.DataField.md#_replacedatarefs)

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

  Inherited from [DataField](foundry.data.fields.DataField.md).[\_toInput](foundry.data.fields.DataField.md#_toinput)

### `Protected`\_validateRecursive

* \_validateRecursive(  
  Â Â Â Â value: any,  
  Â Â Â Â options?: [DataFieldValidationOptions](../interfaces/foundry.data.types.DataFieldValidationOptions.md),  
  ): boolean | void

  `Protected`

  For fields which have hierarchical data structures, define how their inner fields should be validated.
  This method is called after \_validateSpecial and \_validateType. It can be assumed that those tests passed.
  This method should throw if any validation error occurred, even if resolved by fallback or dropping.

  #### Parameters

  + value: any

    The candidate value
  + `Optional`options: [DataFieldValidationOptions](../interfaces/foundry.data.types.DataFieldValidationOptions.md)

    Options which affect validation behavior

  #### Returns boolean | void

  A boolean to indicate with certainty whether the value is valid

  #### Throws

  An error with a specific reason the value is invalid

  Inherited from [DataField](foundry.data.fields.DataField.md).[\_validateRecursive](foundry.data.fields.DataField.md#_validaterecursive)

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

  Inherited from [DataField](foundry.data.fields.DataField.md).[\_validateSpecial](foundry.data.fields.DataField.md#_validatespecial)