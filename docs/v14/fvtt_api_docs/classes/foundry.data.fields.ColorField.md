---
title: "ColorField | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.data.fields.ColorField.html"
category: "classes"
---

# Class ColorField

A special [foundry.data.fields.StringField](foundry.data.fields.StringField.md) which records a standardized CSS color string.

#### Hierarchy ([View Summary](../hierarchy.md#foundry.data.fields.ColorField))

* [StringField](foundry.data.fields.StringField.md)
  + ColorField

##### Index

### Constructors

[constructor](#constructor)

### Properties

[blank](#blank)
[choices](#choices)
[name](#name)
[options](#options)
[parent](#parent)
[persisted](#persisted)
[textSearch](#textsearch)
[trim](#trim)
[hierarchical](#hierarchical)
[recursive](#recursive)

### Accessors

[fieldPath](#fieldpath)
[\_defaults](#_defaults)
[hasFormSupport](#hasformsupport)

### Methods

[\_applyChangeSubtract](#_applychangesubtract)
[\_cast](#_cast)
[\_replaceDataRefs](#_replacedatarefs)
[\_toInput](#_toinput)
[\_updateCommit](#_updatecommit)
[\_updateDiff](#_updatediff)
[\_validateModel](#_validatemodel)
[\_validateSpecial](#_validatespecial)
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
[\_applyChangeUpgrade](#_applychangeupgrade)
[\_castChangeDelta](#_castchangedelta)
[\_cleanType](#_cleantype)
[\_getField](#_getfield)
[\_isValidChoice](#_isvalidchoice)
[\_migrate](#_migrate)
[\_validateRecursive](#_validaterecursive)
[\_prepareChoiceConfig](#_preparechoiceconfig)

## Constructors

### constructor

* new ColorField(  
  Â Â Â Â options?: [StringFieldOptions](../interfaces/foundry.data.types.StringFieldOptions.md),  
  Â Â Â Â context?: [DataFieldContext](../interfaces/foundry.data.types.DataFieldContext.md),  
  ): ColorField

  #### Parameters

  + `Optional`options: [StringFieldOptions](../interfaces/foundry.data.types.StringFieldOptions.md) = {}

    Options which configure the behavior of the field
  + `Optional`context: [DataFieldContext](../interfaces/foundry.data.types.DataFieldContext.md) = {}

    Additional context which describes the field

  #### Returns ColorField

  Inherited from [StringField](foundry.data.fields.StringField.md).[constructor](foundry.data.fields.StringField.md#constructor)

## Properties

### blank

blank: boolean

Is the string allowed to be blank (empty)?

Inherited from [DocumentAuthorField](foundry.data.fields.DocumentAuthorField.md).[blank](foundry.data.fields.DocumentAuthorField.md#blank)

### choices

choices: object | Function | string[] = ...

An array of values or an object of values/labels which represent
allowed choices for the field. A function may be provided which dynamically
returns the array of choices.

Inherited from [DocumentAuthorField](foundry.data.fields.DocumentAuthorField.md).[choices](foundry.data.fields.DocumentAuthorField.md#choices)

### `Internal`name

name: string | undefined

The field name of this DataField instance.
This is assigned by SchemaField#initialize.

Inherited from [StringField](foundry.data.fields.StringField.md).[name](foundry.data.fields.StringField.md#name)

### options

options: [DataFieldOptions](../interfaces/foundry.data.types.DataFieldOptions.md)

The initially provided options which configure the data field

Inherited from [StringField](foundry.data.fields.StringField.md).[options](foundry.data.fields.StringField.md#options)

### `Internal`parent

parent: any

A reference to the parent schema to which this DataField belongs.
This is assigned by SchemaField#initialize.

Inherited from [StringField](foundry.data.fields.StringField.md).[parent](foundry.data.fields.StringField.md#parent)

### persisted

persisted: boolean = true

Is a value of this field written to source data? A Non-persisted value is initialized (with its initial value), and
ActiveEffects can use the field for change application.

Inherited from [StringField](foundry.data.fields.StringField.md).[persisted](foundry.data.fields.StringField.md#persisted)

### textSearch

textSearch: boolean = ...

Is this string field a target for text search?

Inherited from [StringField](foundry.data.fields.StringField.md).[textSearch](foundry.data.fields.StringField.md#textsearch)

### trim

trim: boolean = ...

Should any provided string be trimmed as part of cleaning?

Inherited from [StringField](foundry.data.fields.StringField.md).[trim](foundry.data.fields.StringField.md#trim)

### `Static`hierarchical

hierarchical: boolean = false

Whether this field defines part of a Document/Embedded Document hierarchy.

Inherited from [StringField](foundry.data.fields.StringField.md).[hierarchical](foundry.data.fields.StringField.md#hierarchical)

### `Static`recursive

recursive: boolean = false

Does this field type contain other fields in a recursive structure?
Examples of recursive fields are SchemaField, ArrayField, or TypeDataField
Examples of non-recursive fields are StringField, NumberField, or ObjectField

Inherited from [StringField](foundry.data.fields.StringField.md).[recursive](foundry.data.fields.StringField.md#recursive)

## Accessors

### fieldPath

* get fieldPath(): string

  A dot-separated string representation of the field path within the parent schema.

  #### Returns string

  Inherited from StringField.fieldPath

### `Static`\_defaults

* get \_defaults(): [DataFieldOptions](../interfaces/foundry.data.types.DataFieldOptions.md) & {  
  Â Â Â Â blank: boolean;  
  Â Â Â Â choices: undefined;  
  Â Â Â Â textSearch: boolean;  
  Â Â Â Â trim: boolean;  
  } & { blank: boolean; initial: null; nullable: boolean }

  Default parameters for this field type

  #### Returns [DataFieldOptions](../interfaces/foundry.data.types.DataFieldOptions.md) & { Â Â Â Â blank: boolean; Â Â Â Â choices: undefined; Â Â Â Â textSearch: boolean; Â Â Â Â trim: boolean; } & { blank: boolean; initial: null; nullable: boolean }

  Overrides StringField.\_defaults

### `Static`hasFormSupport

* get hasFormSupport(): boolean

  Does this form field class have defined form support?

  #### Returns boolean

  Inherited from StringField.hasFormSupport

## Methods

### \_applyChangeSubtract

* \_applyChangeSubtract(  
  Â Â Â Â value: string,  
  Â Â Â Â delta: string,  
  Â Â Â Â model: any,  
  Â Â Â Â change: any,  
  ): string

  #### Parameters

  + value: string
  + delta: string
  + model: any
  + change: any

  #### Returns string

  Inherited from [StringField](foundry.data.fields.StringField.md).[\_applyChangeSubtract](foundry.data.fields.StringField.md#_applychangesubtract)

### \_cast

* \_cast(value: any): string

  #### Parameters

  + value: any

  #### Returns string

  Overrides [StringField](foundry.data.fields.StringField.md).[\_cast](foundry.data.fields.StringField.md#_cast)

### \_replaceDataRefs

* \_replaceDataRefs(  
  Â Â Â Â raw: any,  
  Â Â Â Â data: any,  
  Â Â Â Â \_\_namedParameters?: { strict?: boolean },  
  ): string

  Recursively replace data references in a string change value.

  #### Parameters

  + raw: any
  + data: any

    An object providing replacements
  + \_\_namedParameters: { strict?: boolean } = {}

    Additional options to configure the data replacement

  #### Returns string

  The expression with data references resolved

  Inherited from [StringField](foundry.data.fields.StringField.md).[\_replaceDataRefs](foundry.data.fields.StringField.md#_replacedatarefs)

### \_toInput

* \_toInput(config: any): [HTMLColorPickerElement](foundry.applications.elements.HTMLColorPickerElement.md)

  #### Parameters

  + config: any

  #### Returns [HTMLColorPickerElement](foundry.applications.elements.HTMLColorPickerElement.md)

  Overrides [StringField](foundry.data.fields.StringField.md).[\_toInput](foundry.data.fields.StringField.md#_toinput)

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

  Inherited from [StringField](foundry.data.fields.StringField.md).[\_updateCommit](foundry.data.fields.StringField.md#_updatecommit)

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

  Inherited from [StringField](foundry.data.fields.StringField.md).[\_updateDiff](foundry.data.fields.StringField.md#_updatediff)

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

  Inherited from [StringField](foundry.data.fields.StringField.md).[\_validateModel](foundry.data.fields.StringField.md#_validatemodel)

### \_validateSpecial

* \_validateSpecial(value: any): boolean | void

  Special validation rules which supersede regular field validation.
  This validator screens for certain values which are otherwise incompatible with this field like null or undefined.

  #### Parameters

  + value: any

    The candidate value

  #### Returns boolean | void

  A boolean to indicate with certainty whether the value is valid

  #### Throws

  An error with a specific reason the value is invalid

  Inherited from [StringField](foundry.data.fields.StringField.md).[\_validateSpecial](foundry.data.fields.StringField.md#_validatespecial)

### \_validateType

* \_validateType(value: any, options: any): true | undefined

  #### Parameters

  + value: any
  + options: any

  #### Returns true | undefined

  Overrides [StringField](foundry.data.fields.StringField.md).[\_validateType](foundry.data.fields.StringField.md#_validatetype)

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

  Inherited from [StringField](foundry.data.fields.StringField.md).[apply](foundry.data.fields.StringField.md#apply)

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

  Inherited from [StringField](foundry.data.fields.StringField.md).[applyChange](foundry.data.fields.StringField.md#applychange)

### clean

* clean(value: any, options: any, \_state: any): any

  Preprocess and clean source data to ensure that it conforms to the correct data type for this field and is ready
  to be used by data model construction or update operations.
  Data cleaning is synchronous and automatically applied as the first step of construction and update operations.

  #### Parameters

  + value: any

    An initial requested value
  + options: any

    Additional options for how the field is cleaned
  + \_state: any

    Internal state variables which are used during recursion

  #### Returns any

  The cleaned value

  Inherited from [StringField](foundry.data.fields.StringField.md).[clean](foundry.data.fields.StringField.md#clean)

### getInitialValue

* getInitialValue(source: any): any

  #### Parameters

  + source: any

  #### Returns any

  Inherited from [StringField](foundry.data.fields.StringField.md).[getInitialValue](foundry.data.fields.StringField.md#getinitialvalue)

### initialize

* initialize(value: any, model: any, options?: {}): any

  #### Parameters

  + value: any
  + model: any
  + options: {} = {}

  #### Returns any

  Overrides [StringField](foundry.data.fields.StringField.md).[initialize](foundry.data.fields.StringField.md#initialize)

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

  Inherited from [StringField](foundry.data.fields.StringField.md).[toFormGroup](foundry.data.fields.StringField.md#toformgroup)

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

  Inherited from [StringField](foundry.data.fields.StringField.md).[toInput](foundry.data.fields.StringField.md#toinput)

### toObject

* toObject(value: any): any

  Export the current value of the field into a serializable object.

  #### Parameters

  + value: any

    The initialized value of the field

  #### Returns any

  An exported representation of the field

  Inherited from [StringField](foundry.data.fields.StringField.md).[toObject](foundry.data.fields.StringField.md#toobject)

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

  Inherited from [StringField](foundry.data.fields.StringField.md).[validate](foundry.data.fields.StringField.md#validate)

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

  Inherited from [StringField](foundry.data.fields.StringField.md).[validators](foundry.data.fields.StringField.md#validators)

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

  Inherited from [StringField](foundry.data.fields.StringField.md).[\_applyChangeAdd](foundry.data.fields.StringField.md#_applychangeadd)

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

  Inherited from [StringField](foundry.data.fields.StringField.md).[\_applyChangeCustom](foundry.data.fields.StringField.md#_applychangecustom)

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

  Inherited from [StringField](foundry.data.fields.StringField.md).[\_applyChangeDowngrade](foundry.data.fields.StringField.md#_applychangedowngrade)

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

  Inherited from [StringField](foundry.data.fields.StringField.md).[\_applyChangeMultiply](foundry.data.fields.StringField.md#_applychangemultiply)

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

  Inherited from [StringField](foundry.data.fields.StringField.md).[\_applyChangeOverride](foundry.data.fields.StringField.md#_applychangeoverride)

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

  Inherited from [StringField](foundry.data.fields.StringField.md).[\_applyChangeUpgrade](foundry.data.fields.StringField.md#_applychangeupgrade)

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

  Inherited from [StringField](foundry.data.fields.StringField.md).[\_castChangeDelta](foundry.data.fields.StringField.md#_castchangedelta)

### `Protected`\_cleanType

* \_cleanType(  
  Â Â Â Â value: any,  
  Â Â Â Â options?: Readonly<[DataModelCleaningOptions](../interfaces/foundry.data.types.DataModelCleaningOptions.md)>,  
  Â Â Â Â \_state?: [data](../modules/foundry.data.md).[types](../modules/foundry.data.types.md).[DataModelUpdateState](../interfaces/foundry.data.types.DataModelUpdateState.md),  
  ): any

  `Protected`

  Apply any cleaning logic specific to this DataField type.

  #### Parameters

  + value: any

    A candidate value that has been cast to the appropriate type
  + `Optional`options: Readonly<[DataModelCleaningOptions](../interfaces/foundry.data.types.DataModelCleaningOptions.md)>

    Options for how the field is cleaned
  + `Optional`\_state: [data](../modules/foundry.data.md).[types](../modules/foundry.data.types.md).[DataModelUpdateState](../interfaces/foundry.data.types.DataModelUpdateState.md)

    Internal state variables which are used during recursion

  #### Returns any

  The cleaned value

  Inherited from [StringField](foundry.data.fields.StringField.md).[\_cleanType](foundry.data.fields.StringField.md#_cleantype)

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

  Inherited from [StringField](foundry.data.fields.StringField.md).[\_getField](foundry.data.fields.StringField.md#_getfield)

### `Protected`\_isValidChoice

* \_isValidChoice(value: string): boolean

  `Protected`

  Test whether a provided value is a valid choice from the allowed choice set

  #### Parameters

  + value: string

    The provided value

  #### Returns boolean

  Is the choice valid?

  Inherited from [StringField](foundry.data.fields.StringField.md).[\_isValidChoice](foundry.data.fields.StringField.md#_isvalidchoice)

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

  Inherited from [StringField](foundry.data.fields.StringField.md).[\_migrate](foundry.data.fields.StringField.md#_migrate)

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

  Inherited from [StringField](foundry.data.fields.StringField.md).[\_validateRecursive](foundry.data.fields.StringField.md#_validaterecursive)

### `Static`\_prepareChoiceConfig

* \_prepareChoiceConfig(  
  Â Â Â Â config?: [FormInputConfig](../interfaces/foundry.data.types.FormInputConfig.md) & Partial<[ChoiceInputConfig](../interfaces/foundry.data.types.ChoiceInputConfig.md)>,  
  ): void

  `Internal`

  Prepare form input configuration to accept a limited choice set of options.

  #### Parameters

  + `Optional`config: [FormInputConfig](../interfaces/foundry.data.types.FormInputConfig.md) & Partial<[ChoiceInputConfig](../interfaces/foundry.data.types.ChoiceInputConfig.md)>

  #### Returns void

  Inherited from [StringField](foundry.data.fields.StringField.md).[\_prepareChoiceConfig](foundry.data.fields.StringField.md#_preparechoiceconfig)