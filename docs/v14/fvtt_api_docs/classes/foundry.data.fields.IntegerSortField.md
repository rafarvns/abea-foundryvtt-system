---
title: "IntegerSortField | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.data.fields.IntegerSortField.html"
category: "classes"
---

# Class IntegerSortField

A subclass of [foundry.data.fields.NumberField](foundry.data.fields.NumberField.md) which is used for storing integer sort keys.

#### Hierarchy ([View Summary](../hierarchy.md#foundry.data.fields.IntegerSortField))

* [NumberField](foundry.data.fields.NumberField.md)
  + IntegerSortField

##### Index

### Constructors

[constructor](#constructor)

### Properties

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

[\_applyChangeDowngrade](#_applychangedowngrade)
[\_applyChangeMultiply](#_applychangemultiply)
[\_applyChangeSubtract](#_applychangesubtract)
[\_applyChangeUpgrade](#_applychangeupgrade)
[\_cast](#_cast)
[\_castChangeDelta](#_castchangedelta)
[\_cleanType](#_cleantype)
[\_toInput](#_toinput)
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
[\_applyChangeOverride](#_applychangeoverride)
[\_getField](#_getfield)
[\_migrate](#_migrate)
[\_replaceDataRefs](#_replacedatarefs)
[\_validateRecursive](#_validaterecursive)
[\_validateSpecial](#_validatespecial)

## Constructors

### constructor

* new IntegerSortField(  
  Â Â Â Â options?: [NumberFieldOptions](../interfaces/foundry.data.types.NumberFieldOptions.md),  
  Â Â Â Â context?: [DataFieldContext](../interfaces/foundry.data.types.DataFieldContext.md),  
  ): IntegerSortField

  #### Parameters

  + options: [NumberFieldOptions](../interfaces/foundry.data.types.NumberFieldOptions.md) = {}

    Options which configure the behavior of the field
  + `Optional`context: [DataFieldContext](../interfaces/foundry.data.types.DataFieldContext.md) = {}

    Additional context which describes the field

  #### Returns IntegerSortField

  Inherited from [NumberField](foundry.data.fields.NumberField.md).[constructor](foundry.data.fields.NumberField.md#constructor)

## Properties

### `Internal`name

name: string | undefined

The field name of this DataField instance.
This is assigned by SchemaField#initialize.

Inherited from [NumberField](foundry.data.fields.NumberField.md).[name](foundry.data.fields.NumberField.md#name)

### options

options: [DataFieldOptions](../interfaces/foundry.data.types.DataFieldOptions.md)

The initially provided options which configure the data field

Inherited from [NumberField](foundry.data.fields.NumberField.md).[options](foundry.data.fields.NumberField.md#options)

### `Internal`parent

parent: any

A reference to the parent schema to which this DataField belongs.
This is assigned by SchemaField#initialize.

Inherited from [NumberField](foundry.data.fields.NumberField.md).[parent](foundry.data.fields.NumberField.md#parent)

### persisted

persisted: boolean = true

Is a value of this field written to source data? A Non-persisted value is initialized (with its initial value), and
ActiveEffects can use the field for change application.

Inherited from [NumberField](foundry.data.fields.NumberField.md).[persisted](foundry.data.fields.NumberField.md#persisted)

### `Static`hierarchical

hierarchical: boolean = false

Whether this field defines part of a Document/Embedded Document hierarchy.

Inherited from [NumberField](foundry.data.fields.NumberField.md).[hierarchical](foundry.data.fields.NumberField.md#hierarchical)

### `Static`recursive

recursive: boolean = false

Does this field type contain other fields in a recursive structure?
Examples of recursive fields are SchemaField, ArrayField, or TypeDataField
Examples of non-recursive fields are StringField, NumberField, or ObjectField

Inherited from [NumberField](foundry.data.fields.NumberField.md).[recursive](foundry.data.fields.NumberField.md#recursive)

## Accessors

### fieldPath

* get fieldPath(): string

  A dot-separated string representation of the field path within the parent schema.

  #### Returns string

  Inherited from NumberField.fieldPath

### `Static`\_defaults

* get \_defaults(): [DataFieldOptions](../interfaces/foundry.data.types.DataFieldOptions.md) & {  
  Â Â Â Â choices: undefined;  
  Â Â Â Â integer: boolean;  
  Â Â Â Â max: undefined;  
  Â Â Â Â min: undefined;  
  Â Â Â Â nullable: boolean;  
  Â Â Â Â positive: boolean;  
  Â Â Â Â step: undefined;  
  } & {  
  Â Â Â Â initial: number;  
  Â Â Â Â integer: boolean;  
  Â Â Â Â nullable: boolean;  
  Â Â Â Â required: boolean;  
  }

  Default parameters for this field type

  #### Returns [DataFieldOptions](../interfaces/foundry.data.types.DataFieldOptions.md) & { Â Â Â Â choices: undefined; Â Â Â Â integer: boolean; Â Â Â Â max: undefined; Â Â Â Â min: undefined; Â Â Â Â nullable: boolean; Â Â Â Â positive: boolean; Â Â Â Â step: undefined; } & { Â Â Â Â initial: number; Â Â Â Â integer: boolean; Â Â Â Â nullable: boolean; Â Â Â Â required: boolean; }

  Overrides NumberField.\_defaults

### `Static`hasFormSupport

* get hasFormSupport(): boolean

  Does this form field class have defined form support?

  #### Returns boolean

  Inherited from NumberField.hasFormSupport

## Methods

### \_applyChangeDowngrade

* \_applyChangeDowngrade(value: any, delta: any, model: any, change: any): any

  #### Parameters

  + value: any
  + delta: any
  + model: any
  + change: any

  #### Returns any

  Inherited from [NumberField](foundry.data.fields.NumberField.md).[\_applyChangeDowngrade](foundry.data.fields.NumberField.md#_applychangedowngrade)

### \_applyChangeMultiply

* \_applyChangeMultiply(value: any, delta: any, model: any, change: any): number

  #### Parameters

  + value: any
  + delta: any
  + model: any
  + change: any

  #### Returns number

  Inherited from [NumberField](foundry.data.fields.NumberField.md).[\_applyChangeMultiply](foundry.data.fields.NumberField.md#_applychangemultiply)

### \_applyChangeSubtract

* \_applyChangeSubtract(value: any, delta: any, model: any, change: any): number

  #### Parameters

  + value: any
  + delta: any
  + model: any
  + change: any

  #### Returns number

  Inherited from [NumberField](foundry.data.fields.NumberField.md).[\_applyChangeSubtract](foundry.data.fields.NumberField.md#_applychangesubtract)

### \_applyChangeUpgrade

* \_applyChangeUpgrade(value: any, delta: any, model: any, change: any): any

  #### Parameters

  + value: any
  + delta: any
  + model: any
  + change: any

  #### Returns any

  Inherited from [NumberField](foundry.data.fields.NumberField.md).[\_applyChangeUpgrade](foundry.data.fields.NumberField.md#_applychangeupgrade)

### \_cast

* \_cast(value: any): number | null

  #### Parameters

  + value: any

  #### Returns number | null

  Inherited from [NumberField](foundry.data.fields.NumberField.md).[\_cast](foundry.data.fields.NumberField.md#_cast)

### \_castChangeDelta

* \_castChangeDelta(raw: any, replacementData: any): any

  Cast a change delta into an appropriate type to be applied to this field.

  #### Parameters

  + raw: any

    The change delta.
  + replacementData: any

    Data used to resolve "@" expressions.

  #### Returns any

  Inherited from [NumberField](foundry.data.fields.NumberField.md).[\_castChangeDelta](foundry.data.fields.NumberField.md#_castchangedelta)

### \_cleanType

* \_cleanType(value: any, \_options: any, \_state: any): any

  #### Parameters

  + value: any
  + \_options: any
  + \_state: any

  #### Returns any

  Inherited from [NumberField](foundry.data.fields.NumberField.md).[\_cleanType](foundry.data.fields.NumberField.md#_cleantype)

### \_toInput

* \_toInput(  
  Â Â Â Â config: any,  
  ): HTMLInputElement | HTMLSelectElement | [HTMLRangePickerElement](foundry.applications.elements.HTMLRangePickerElement.md)

  #### Parameters

  + config: any

  #### Returns HTMLInputElement | HTMLSelectElement | [HTMLRangePickerElement](foundry.applications.elements.HTMLRangePickerElement.md)

  Inherited from [NumberField](foundry.data.fields.NumberField.md).[\_toInput](foundry.data.fields.NumberField.md#_toinput)

### \_updateCommit

* \_updateCommit(  
  Â Â Â Â source: object,  
  Â Â Â Â key: string,  
  Â Â Â Â value: object,  
  Â Â Â Â diff: object,  
  Â Â Â Â options: [DataModelUpdateOptions](../interfaces/foundry.abstract.types.DataModelUpdateOptions.md),  
  ): void

  `Internal`

  Commit a prepared update to DataModel#\_source.

  #### Parameters

  + source: object

    The parent source object within which the `key` field exists
  + key: string

    The named field in source to commit
  + value: object

    The new value of the field which should be committed to source
  + diff: object

    The reported change to the field
  + options: [DataModelUpdateOptions](../interfaces/foundry.abstract.types.DataModelUpdateOptions.md)

    Options which modify how this update workflow is performed.

  #### Returns void

  Inherited from [NumberField](foundry.data.fields.NumberField.md).[\_updateCommit](foundry.data.fields.NumberField.md#_updatecommit)

### \_updateDiff

* \_updateDiff(  
  Â Â Â Â key: string,  
  Â Â Â Â value: any,  
  Â Â Â Â options: [DataModelUpdateOptions](../interfaces/foundry.abstract.types.DataModelUpdateOptions.md),  
  Â Â Â Â state: [data](../modules/foundry.data.md).[types](../modules/foundry.data.types.md).[DataModelUpdateState](../interfaces/foundry.data.types.DataModelUpdateState.md),  
  ): void

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

  + key: string

    The name of this field within the context of the source data.
  + value: any

    The candidate value that should be applied as an update.
  + options: [DataModelUpdateOptions](../interfaces/foundry.abstract.types.DataModelUpdateOptions.md)

    Options which modify how this update workflow is performed.
  + state: [data](../modules/foundry.data.md).[types](../modules/foundry.data.types.md).[DataModelUpdateState](../interfaces/foundry.data.types.DataModelUpdateState.md)

    Stateful data that is transacted throughout the model hierarchy during an
    update operation.

  #### Returns void

  #### Throws

  An error if the requested update cannot be performed.

  Inherited from [NumberField](foundry.data.fields.NumberField.md).[\_updateDiff](foundry.data.fields.NumberField.md#_updatediff)

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

  Inherited from [NumberField](foundry.data.fields.NumberField.md).[\_validateModel](foundry.data.fields.NumberField.md#_validatemodel)

### \_validateType

* \_validateType(value: any, \_options: any): void

  #### Parameters

  + value: any
  + \_options: any

  #### Returns void

  Inherited from [NumberField](foundry.data.fields.NumberField.md).[\_validateType](foundry.data.fields.NumberField.md#_validatetype)

### apply

* apply(fn: string | Function, value: any, options?: object): object

  Apply a function to this DataField which propagates through recursively to any contained data schema.

  #### Parameters

  + fn: string | Function

    The function to apply
  + value: any

    The current value of this field
  + `Optional`options: object = {}

    Additional options passed to the applied function

  #### Returns object

  The results object

  Inherited from [NumberField](foundry.data.fields.NumberField.md).[apply](foundry.data.fields.NumberField.md#apply)

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

  Inherited from [NumberField](foundry.data.fields.NumberField.md).[applyChange](foundry.data.fields.NumberField.md#applychange)

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

  Inherited from [NumberField](foundry.data.fields.NumberField.md).[clean](foundry.data.fields.NumberField.md#clean)

### getInitialValue

* getInitialValue(source: object): any

  Attempt to retrieve a valid initial value for the DataField.

  #### Parameters

  + source: object

    Model source data object within which an initial value is required for this field

  #### Returns any

  A proposed initial value

  Inherited from [NumberField](foundry.data.fields.NumberField.md).[getInitialValue](foundry.data.fields.NumberField.md#getinitialvalue)

### initialize

* initialize(value: unknown, model: object, options?: object): unknown

  Initialize the original source data into a mutable copy for the DataModel instance.

  #### Parameters

  + value: unknown

    The source value of the field
  + model: object

    The DataModel instance that this field belongs to
  + `Optional`options: object = {}

    Initialization options

  #### Returns unknown

  An initialized copy of the source data

  Inherited from [NumberField](foundry.data.fields.NumberField.md).[initialize](foundry.data.fields.NumberField.md#initialize)

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

  Inherited from [NumberField](foundry.data.fields.NumberField.md).[toFormGroup](foundry.data.fields.NumberField.md#toformgroup)

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

  Inherited from [NumberField](foundry.data.fields.NumberField.md).[toInput](foundry.data.fields.NumberField.md#toinput)

### toObject

* toObject(value: any): any

  Export the current value of the field into a serializable object.

  #### Parameters

  + value: any

    The initialized value of the field

  #### Returns any

  An exported representation of the field

  Inherited from [NumberField](foundry.data.fields.NumberField.md).[toObject](foundry.data.fields.NumberField.md#toobject)

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

  Inherited from [NumberField](foundry.data.fields.NumberField.md).[validate](foundry.data.fields.NumberField.md#validate)

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

  Inherited from [NumberField](foundry.data.fields.NumberField.md).[validators](foundry.data.fields.NumberField.md#validators)

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

  Inherited from [NumberField](foundry.data.fields.NumberField.md).[\_applyChangeAdd](foundry.data.fields.NumberField.md#_applychangeadd)

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

  Inherited from [NumberField](foundry.data.fields.NumberField.md).[\_applyChangeCustom](foundry.data.fields.NumberField.md#_applychangecustom)

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

  Inherited from [NumberField](foundry.data.fields.NumberField.md).[\_applyChangeOverride](foundry.data.fields.NumberField.md#_applychangeoverride)

### `Protected`\_getField

* \_getField(  
  Â Â Â Â parts: string[],  
  Â Â Â Â options?: { source?: object; type?: object },  
  ): [DataField](foundry.data.fields.DataField.md) | undefined

  `Protected`

  Recursively traverse a schema and retrieve a field specification by a given path/key

  #### Parameters

  + parts: string[]

    The field path or property key if `source` is passed as an array of strings
    (in reverse order)
  + `Optional`options: { source?: object; type?: object } = {}

    Additional options

    - ##### `Optional`source?: object

      The source data of the field
    - ##### `Optional`type?: object

      The Document type of the parent field

  #### Returns [DataField](foundry.data.fields.DataField.md) | undefined

  The corresponding DataField definition for that field, or undefined

  Inherited from [NumberField](foundry.data.fields.NumberField.md).[\_getField](foundry.data.fields.NumberField.md#_getfield)

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

  Inherited from [NumberField](foundry.data.fields.NumberField.md).[\_migrate](foundry.data.fields.NumberField.md#_migrate)

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

  Inherited from [NumberField](foundry.data.fields.NumberField.md).[\_replaceDataRefs](foundry.data.fields.NumberField.md#_replacedatarefs)

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

  Inherited from [NumberField](foundry.data.fields.NumberField.md).[\_validateRecursive](foundry.data.fields.NumberField.md#_validaterecursive)

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

  Inherited from [NumberField](foundry.data.fields.NumberField.md).[\_validateSpecial](foundry.data.fields.NumberField.md#_validatespecial)