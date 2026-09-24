---
title: "SchemaField | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.data.fields.SchemaField.html"
category: "classes"
---

# Class SchemaField

A special class of [foundry.data.fields.DataField](foundry.data.fields.DataField.md) which defines a data schema.

#### Hierarchy ([View Summary](../hierarchy.md#foundry.data.fields.SchemaField))

* [DataField](foundry.data.fields.DataField.md)
  + SchemaField
    - [TextureData](foundry.data.TextureData.md)
    - [PackageCompatibility](foundry.packages.PackageCompatibility.md)
    - [RelatedPackage](foundry.packages.RelatedPackage.md)
    - [DataModelSchemaField](foundry.data.fields.DataModelSchemaField.md)
    - [DocumentStatsField](foundry.data.fields.DocumentStatsField.md)
    - [GridOffsetField](foundry.data.fields.GridOffsetField.md)
    - [VFXPointField](foundry.canvas.vfx.fields.VFXPointField.md)
    - [PackageRelationships](foundry.PackageRelationships.md)

##### Index

### Constructors

[constructor](#constructor)

### Properties

[fields](#fields)
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
[[iterator]](#iterator)
[apply](#apply)
[applyChange](#applychange)
[clean](#clean)
[entries](#entries)
[extendFields](#extendfields)
[get](#get)
[getField](#getfield)
[getInitialValue](#getinitialvalue)
[has](#has)
[initialize](#initialize)
[keys](#keys)
[removeFields](#removefields)
[toFormGroup](#toformgroup)
[toInput](#toinput)
[toObject](#toobject)
[validate](#validate)
[validators](#validators)
[values](#values)
[\_applyChangeCustom](#_applychangecustom)
[\_applyChangeDowngrade](#_applychangedowngrade)
[\_applyChangeMultiply](#_applychangemultiply)
[\_applyChangeOverride](#_applychangeoverride)
[\_applyChangeSubtract](#_applychangesubtract)
[\_applyChangeUpgrade](#_applychangeupgrade)
[\_castChangeDelta](#_castchangedelta)
[\_initialize](#_initialize)
[\_migrate](#_migrate)
[\_replaceDataRefs](#_replacedatarefs)
[\_toInput](#_toinput)
[\_validateSpecial](#_validatespecial)
[\_handleValidationFailure](#_handlevalidationfailure)
[expandObject](#expandobject)
[reconstructOperator](#reconstructoperator)

## Constructors

### constructor

* new SchemaField(  
  Â Â Â Â fields: [DataSchema](../types/foundry.abstract.types.DataSchema.md),  
  Â Â Â Â options?: [DataFieldOptions](../interfaces/foundry.data.types.DataFieldOptions.md),  
  Â Â Â Â context?: [DataFieldContext](../interfaces/foundry.data.types.DataFieldContext.md),  
  ): SchemaField

  #### Parameters

  + fields: [DataSchema](../types/foundry.abstract.types.DataSchema.md)

    The contained field definitions
  + `Optional`options: [DataFieldOptions](../interfaces/foundry.data.types.DataFieldOptions.md)

    Options which configure the behavior of the field
  + `Optional`context: [DataFieldContext](../interfaces/foundry.data.types.DataFieldContext.md) = {}

    Additional context which describes the field

  #### Returns SchemaField

  Overrides [DataField](foundry.data.fields.DataField.md).[constructor](foundry.data.fields.DataField.md#constructor)

## Properties

### fields

fields: [DataSchema](../types/foundry.abstract.types.DataSchema.md)

The contained field definitions.

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

* get \_defaults(): [DataFieldOptions](../interfaces/foundry.data.types.DataFieldOptions.md) & { nullable: boolean; required: boolean }

  Default parameters for this field type

  #### Returns [DataFieldOptions](../interfaces/foundry.data.types.DataFieldOptions.md) & { nullable: boolean; required: boolean }

  Overrides DataField.\_defaults

### `Static`hasFormSupport

* get hasFormSupport(): boolean

  Does this form field class have defined form support?

  #### Returns boolean

  Inherited from DataField.hasFormSupport

## Methods

### \_applyChangeAdd

* \_applyChangeAdd(value: any, delta: any, model: any, change: any): any

  #### Parameters

  + value: any
  + delta: any
  + model: any
  + change: any

  #### Returns any

  Overrides [DataField](foundry.data.fields.DataField.md).[\_applyChangeAdd](foundry.data.fields.DataField.md#_applychangeadd)

### \_cast

* \_cast(value: any): any

  #### Parameters

  + value: any

  #### Returns any

  Overrides [DataField](foundry.data.fields.DataField.md).[\_cast](foundry.data.fields.DataField.md#_cast)

### \_cleanType

* \_cleanType(data: any, options: any, \_state: any): any

  Apply any cleaning logic specific to this DataField type.

  #### Parameters

  + data: any

    A candidate value that has been cast to the appropriate type
  + options: any

    Options for how the field is cleaned
  + \_state: any

    Internal state variables which are used during recursion

  #### Returns any

  The cleaned value

  Overrides [DataField](foundry.data.fields.DataField.md).[\_cleanType](foundry.data.fields.DataField.md#_cleantype)

### \_getField

* \_getField(  
  Â Â Â Â parts: any,  
  Â Â Â Â \_\_namedParameters?: {},  
  ): [DataField](foundry.data.fields.DataField.md) | SchemaField | undefined

  #### Parameters

  + parts: any
  + \_\_namedParameters: {} = {}

  #### Returns [DataField](foundry.data.fields.DataField.md) | SchemaField | undefined

  Overrides [DataField](foundry.data.fields.DataField.md).[\_getField](foundry.data.fields.DataField.md#_getfield)

### \_updateCommit

* \_updateCommit(source: any, key: any, value: any, diff: any, options: any): void

  #### Parameters

  + source: any
  + key: any
  + value: any
  + diff: any
  + options: any

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

* \_validateModel(changes: any, options?: {}): void

  #### Parameters

  + changes: any
  + options: {} = {}

  #### Returns void

  Overrides [DataField](foundry.data.fields.DataField.md).[\_validateModel](foundry.data.fields.DataField.md#_validatemodel)

### \_validateRecursive

* \_validateRecursive(data: any, options: any): void

  #### Parameters

  + data: any
  + options: any

  #### Returns void

  Overrides [DataField](foundry.data.fields.DataField.md).[\_validateRecursive](foundry.data.fields.DataField.md#_validaterecursive)

### \_validateType

* \_validateType(data: any, options?: {}): void

  #### Parameters

  + data: any
  + options: {} = {}

  #### Returns void

  Overrides [DataField](foundry.data.fields.DataField.md).[\_validateType](foundry.data.fields.DataField.md#_validatetype)

### [iterator]

* "[iterator]"(): Generator<any, void, unknown>

  Iterate over a SchemaField by iterating over its fields.

  #### Returns Generator<any, void, unknown>

  #### Yields

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

### entries

* entries(): [string, [DataField](foundry.data.fields.DataField.md)][]

  An array of [name, DataField] tuples which define the schema.

  #### Returns [string, [DataField](foundry.data.fields.DataField.md)][]

### extendFields

* extendFields(fields: [DataSchema](../types/foundry.abstract.types.DataSchema.md)): void

  Extend this schema definition with additional fields.

  #### Parameters

  + fields: [DataSchema](../types/foundry.abstract.types.DataSchema.md)

    The additional fields.

  #### Returns void

### get

* get(fieldName: string): void | [DataField](foundry.data.fields.DataField.md)

  Get a DataField instance from the schema by name.

  #### Parameters

  + fieldName: string

    The field name

  #### Returns void | [DataField](foundry.data.fields.DataField.md)

  The DataField instance or undefined

### getField

* getField(  
  Â Â Â Â pathOrKey: string | string[],  
  Â Â Â Â options?: { source?: object },  
  ): [DataField](foundry.data.fields.DataField.md) | undefined

  Traverse the schema, obtaining the DataField definition for a particular field.

  #### Parameters

  + pathOrKey: string | string[]

    A field path or property key if `options.source` is given.
    Examples: `["abilities", "strength"]` or `"abilities.strength"`.
  + `Optional`options: { source?: object } = {}

    Additional options

    - ##### `Optional`source?: object

      The (partial) source data of the field

  #### Returns [DataField](foundry.data.fields.DataField.md) | undefined

  The corresponding DataField definition for that field, or undefined

### getInitialValue

* getInitialValue(source: any): any

  #### Parameters

  + source: any

  #### Returns any

  Overrides [DataField](foundry.data.fields.DataField.md).[getInitialValue](foundry.data.fields.DataField.md#getinitialvalue)

### has

* has(fieldName: string): boolean

  Test whether a certain field name belongs to this schema definition.

  #### Parameters

  + fieldName: string

    The field name

  #### Returns boolean

  Does the named field exist in this schema?

### initialize

* initialize(value: any, model: any, options?: {}): any

  #### Parameters

  + value: any
  + model: any
  + options: {} = {}

  #### Returns any

  Overrides [DataField](foundry.data.fields.DataField.md).[initialize](foundry.data.fields.DataField.md#initialize)

### keys

* keys(): string[]

  An array of field names which are present in the schema.

  #### Returns string[]

### removeFields

* removeFields(fields: string[]): void

  Remove fields from this schema definition.

  #### Parameters

  + fields: string[]

    The fields to remove.

  #### Returns void

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

### values

* values(): [DataField](foundry.data.fields.DataField.md)[]

  An array of DataField instances which are present in the schema.

  #### Returns [DataField](foundry.data.fields.DataField.md)[]

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

### `Protected`\_initialize

* \_initialize(fields: [DataSchema](../types/foundry.abstract.types.DataSchema.md)): [DataSchema](../types/foundry.abstract.types.DataSchema.md)

  `Protected`

  Initialize and validate the structure of the provided field definitions.

  #### Parameters

  + fields: [DataSchema](../types/foundry.abstract.types.DataSchema.md)

    The provided field definitions

  #### Returns [DataSchema](../types/foundry.abstract.types.DataSchema.md)

  The validated schema

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

### `Static`\_handleValidationFailure

* \_handleValidationFailure(  
  Â Â Â Â field: [DataField](foundry.data.fields.DataField.md),  
  Â Â Â Â data: object,  
  Â Â Â Â key: string,  
  Â Â Â Â parentFailure: [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.md),  
  Â Â Â Â fieldFailure: [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.md),  
  Â Â Â Â options: DataModelValidationOptions,  
  ): void

  `Internal`

  An internal helper function that attempts fallback to a valid initial value in the case of validation failure.

  #### Parameters

  + field: [DataField](foundry.data.fields.DataField.md)

    The child data field being handled
  + data: object

    Data attempted for validation at the parent level
  + key: string

    The key of this field being validated
  + parentFailure: [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.md)

    The validation failure at the parent level
  + fieldFailure: [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.md)

    The validation failure at this field level
  + options: DataModelValidationOptions

    Handling options

  #### Returns void

### `Static`expandObject

* expandObject(  
  Â Â Â Â data: object,  
  Â Â Â Â options: [DataModelCleaningOptions](../interfaces/foundry.data.types.DataModelCleaningOptions.md),  
  Â Â Â Â \_state: [data](../modules/foundry.data.md).[types](../modules/foundry.data.types.md).[DataModelUpdateState](../interfaces/foundry.data.types.DataModelUpdateState.md),  
  ): void

  Expand a transacted object.

  #### Parameters

  + data: object

    The object.
  + options: [DataModelCleaningOptions](../interfaces/foundry.data.types.DataModelCleaningOptions.md)

    Cleaning operation options.
  + \_state: [data](../modules/foundry.data.md).[types](../modules/foundry.data.types.md).[DataModelUpdateState](../interfaces/foundry.data.types.DataModelUpdateState.md)

    Cleaning operation state.

  #### Returns void

### `Static`reconstructOperator

* reconstructOperator(data: object, k: string, v: any): void

  When iterating over the keys and values of an object, reconstruct serialized DataFieldOperator values.

  #### Parameters

  + data: object
  + k: string
  + v: any

  #### Returns void