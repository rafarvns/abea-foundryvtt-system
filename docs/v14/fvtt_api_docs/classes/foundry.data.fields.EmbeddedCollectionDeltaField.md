---
title: "EmbeddedCollectionDeltaField | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.data.fields.EmbeddedCollectionDeltaField.html"
category: "classes"
---

# Class EmbeddedCollectionDeltaField

A subclass of [foundry.data.fields.EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.md) which manages a collection of delta objects
relative to another collection.

#### Hierarchy ([View Summary](../hierarchy.md#foundry.data.fields.EmbeddedCollectionDeltaField))

* [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.md)
  + EmbeddedCollectionDeltaField

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
[model](#model)
[schema](#schema)
[\_defaults](#_defaults)
[hasFormSupport](#hasformsupport)
[implementation](#implementation)

### Methods

[\_applyChangeAdd](#_applychangeadd)
[\_applyChangeSubtract](#_applychangesubtract)
[\_cast](#_cast)
[\_castChangeDelta](#_castchangedelta)
[\_cleanElement](#_cleanelement)
[\_cleanType](#_cleantype)
[\_commitElement](#_commitelement)
[\_getField](#_getfield)
[\_updateCommit](#_updatecommit)
[\_updateDiff](#_updatediff)
[\_updateElement](#_updateelement)
[\_validateModel](#_validatemodel)
[\_validateRecursive](#_validaterecursive)
[\_validateType](#_validatetype)
[apply](#apply)
[applyChange](#applychange)
[clean](#clean)
[getCollection](#getcollection)
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
[\_applyChangeUpgrade](#_applychangeupgrade)
[\_migrate](#_migrate)
[\_replaceDataRefs](#_replacedatarefs)
[\_toInput](#_toinput)
[\_validateSpecial](#_validatespecial)
[\_handleValidationFailure](#_handlevalidationfailure)
[\_validateElementType](#_validateelementtype)

## Constructors

### constructor

* new EmbeddedCollectionDeltaField(  
  Â Â Â Â element: typeof [Document](foundry.abstract.Document.md),  
  Â Â Â Â options?: [DataFieldOptions](../interfaces/foundry.data.types.DataFieldOptions.md),  
  Â Â Â Â context?: [DataFieldContext](../interfaces/foundry.data.types.DataFieldContext.md),  
  ): EmbeddedCollectionDeltaField

  #### Parameters

  + element: typeof [Document](foundry.abstract.Document.md)

    The type of Document which belongs to this embedded collection
  + `Optional`options: [DataFieldOptions](../interfaces/foundry.data.types.DataFieldOptions.md) = {}

    Options which configure the behavior of the field
  + `Optional`context: [DataFieldContext](../interfaces/foundry.data.types.DataFieldContext.md) = {}

    Additional context which describes the field

  #### Returns EmbeddedCollectionDeltaField

  Inherited from [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.md).[constructor](foundry.data.fields.EmbeddedCollectionField.md#constructor)

## Properties

### element

element: typeof [Document](foundry.abstract.Document.md)

The data type of each element in this array

Inherited from [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.md).[element](foundry.data.fields.EmbeddedCollectionField.md#element)

### `Internal`name

name: string | undefined

The field name of this DataField instance.
This is assigned by SchemaField#initialize.

Inherited from [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.md).[name](foundry.data.fields.EmbeddedCollectionField.md#name)

### options

options: [DataFieldOptions](../interfaces/foundry.data.types.DataFieldOptions.md)

The initially provided options which configure the data field

Inherited from [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.md).[options](foundry.data.fields.EmbeddedCollectionField.md#options)

### `Internal`parent

parent: any

A reference to the parent schema to which this DataField belongs.
This is assigned by SchemaField#initialize.

Inherited from [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.md).[parent](foundry.data.fields.EmbeddedCollectionField.md#parent)

### persisted

persisted: boolean = true

Is a value of this field written to source data? A Non-persisted value is initialized (with its initial value), and
ActiveEffects can use the field for change application.

Inherited from [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.md).[persisted](foundry.data.fields.EmbeddedCollectionField.md#persisted)

### `Static`hierarchical

hierarchical: boolean = true

Inherited from [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.md).[hierarchical](foundry.data.fields.EmbeddedCollectionField.md#hierarchical)

### `Static`recursive

recursive: boolean = true

Inherited from [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.md).[recursive](foundry.data.fields.EmbeddedCollectionField.md#recursive)

## Accessors

### fieldPath

* get fieldPath(): string

  A dot-separated string representation of the field path within the parent schema.

  #### Returns string

  Inherited from EmbeddedCollectionField.fieldPath

### model

* get model(): typeof [Document](foundry.abstract.Document.md)

  A reference to the DataModel subclass of the embedded document element

  #### Returns typeof [Document](foundry.abstract.Document.md)

  Inherited from EmbeddedCollectionField.model

### schema

* get schema(): [SchemaField](foundry.data.fields.SchemaField.md)

  The DataSchema of the contained Document model.

  #### Returns [SchemaField](foundry.data.fields.SchemaField.md)

  Inherited from EmbeddedCollectionDeltaField.[schema](#schema)

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

  Inherited from EmbeddedCollectionField.\_defaults

### `Static`hasFormSupport

* get hasFormSupport(): boolean

  Does this form field class have defined form support?

  #### Returns boolean

  Inherited from EmbeddedCollectionField.hasFormSupport

### `Static`implementation

* get implementation(): typeof [EmbeddedCollectionDelta](foundry.abstract.EmbeddedCollectionDelta.md)

  #### Returns typeof [EmbeddedCollectionDelta](foundry.abstract.EmbeddedCollectionDelta.md)

  Overrides EmbeddedCollectionField.implementation

## Methods

### \_applyChangeAdd

* \_applyChangeAdd(value: any, delta: any, model: any, change: any): any

  #### Parameters

  + value: any
  + delta: any
  + model: any
  + change: any

  #### Returns any

  Inherited from [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.md).[\_applyChangeAdd](foundry.data.fields.EmbeddedCollectionField.md#_applychangeadd)

### \_applyChangeSubtract

* \_applyChangeSubtract(  
  Â Â Â Â value: unknown[],  
  Â Â Â Â delta: unknown[],  
  Â Â Â Â model: any,  
  Â Â Â Â change: any,  
  ): unknown[]

  #### Parameters

  + value: unknown[]
  + delta: unknown[]
  + model: any
  + change: any

  #### Returns unknown[]

  Inherited from [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.md).[\_applyChangeSubtract](foundry.data.fields.EmbeddedCollectionField.md#_applychangesubtract)

### \_cast

* \_cast(value: any): any[]

  #### Parameters

  + value: any

  #### Returns any[]

  Inherited from [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.md).[\_cast](foundry.data.fields.EmbeddedCollectionField.md#_cast)

### \_castChangeDelta

* \_castChangeDelta(raw: any, replacementData: any): any[]

  #### Parameters

  + raw: any
  + replacementData: any

  #### Returns any[]

  Inherited from [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.md).[\_castChangeDelta](foundry.data.fields.EmbeddedCollectionField.md#_castchangedelta)

### \_cleanElement

* \_cleanElement(value: any, options: any, \_state: any): any

  #### Parameters

  + value: any
  + options: any
  + \_state: any

  #### Returns any

  Overrides [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.md).[\_cleanElement](foundry.data.fields.EmbeddedCollectionField.md#_cleanelement)

### \_cleanType

* \_cleanType(value: any, options: any, \_state: any): any

  #### Parameters

  + value: any
  + options: any
  + \_state: any

  #### Returns any

  Inherited from [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.md).[\_cleanType](foundry.data.fields.EmbeddedCollectionField.md#_cleantype)

### \_commitElement

* \_commitElement(  
  Â Â Â Â obj: any,  
  Â Â Â Â src: any,  
  Â Â Â Â existing: any,  
  Â Â Â Â changed: any,  
  Â Â Â Â options: any,  
  ): void

  Commit a single element into the destination source array.
  Subclasses may override this method to apply specialized logic for individual elements.

  #### Parameters

  + obj: any

    The element being committed
  + src: any

    The destination source array under construction
  + existing: any

    Map of pre-update source records
  + changed: any

    Map of diff entries
  + options: any

    Update options

  #### Returns void

  Overrides [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.md).[\_commitElement](foundry.data.fields.EmbeddedCollectionField.md#_commitelement)

### \_getField

* \_getField(parts: any, \_\_namedParameters?: {}): any

  #### Parameters

  + parts: any
  + \_\_namedParameters: {} = {}

  #### Returns any

  Inherited from [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.md).[\_getField](foundry.data.fields.EmbeddedCollectionField.md#_getfield)

### \_updateCommit

* \_updateCommit(source: any, key: any, value: any, diff: any, options: any): void

  #### Parameters

  + source: any
  + key: any
  + value: any
  + diff: any
  + options: any

  #### Returns void

  Inherited from [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.md).[\_updateCommit](foundry.data.fields.EmbeddedCollectionField.md#_updatecommit)

### \_updateDiff

* \_updateDiff(key: any, value: any, options: any, state: any): void

  #### Parameters

  + key: any
  + value: any
  + options: any
  + state: any

  #### Returns void

  Inherited from [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.md).[\_updateDiff](foundry.data.fields.EmbeddedCollectionField.md#_updatediff)

### \_updateElement

* \_updateElement(v: any, existingSource: any, ctx: any): void

  Apply an embedded collection update for a single element of the requested value array. Each element is one of:
  an update to an existing record, the creation of a new record, or (for subclasses such as
  [EmbeddedCollectionDeltaField](#)) a tombstone marking a deletion. Subclasses may override this method to
  intercept element-level update behavior.

  #### Parameters

  + v: any

    The element being processed.
  + existingSource: any

    The existing source record matched by `_id`, if any.
  + ctx: any

    Loop-local context shared across elements.

  #### Returns void

  Overrides [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.md).[\_updateElement](foundry.data.fields.EmbeddedCollectionField.md#_updateelement)

### \_validateModel

* \_validateModel(changes: any, options: any): void

  #### Parameters

  + changes: any
  + options: any

  #### Returns void

  Inherited from [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.md).[\_validateModel](foundry.data.fields.EmbeddedCollectionField.md#_validatemodel)

### \_validateRecursive

* \_validateRecursive(  
  Â Â Â Â value: any,  
  Â Â Â Â options: any,  
  ): [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.md) | undefined

  #### Parameters

  + value: any
  + options: any

  #### Returns [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.md) | undefined

  Overrides [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.md).[\_validateRecursive](foundry.data.fields.EmbeddedCollectionField.md#_validaterecursive)

### \_validateType

* \_validateType(value: any, options: any): void

  #### Parameters

  + value: any
  + options: any

  #### Returns void

  Inherited from [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.md).[\_validateType](foundry.data.fields.EmbeddedCollectionField.md#_validatetype)

### apply

* apply(fn: any, value?: any[], options?: {}): {}[]

  #### Parameters

  + fn: any
  + value: any[] = []
  + options: {} = {}

  #### Returns {}[]

  Inherited from [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.md).[apply](foundry.data.fields.EmbeddedCollectionField.md#apply)

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

  Inherited from [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.md).[applyChange](foundry.data.fields.EmbeddedCollectionField.md#applychange)

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

  Inherited from [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.md).[clean](foundry.data.fields.EmbeddedCollectionField.md#clean)

### getCollection

* getCollection(  
  Â Â Â Â parent: [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>,  
  ): DocumentCollection

  Return the embedded document(s) as a Collection.

  #### Parameters

  + parent: [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>

    The parent document.

  #### Returns DocumentCollection

  Inherited from [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.md).[getCollection](foundry.data.fields.EmbeddedCollectionField.md#getcollection)

### getInitialValue

* getInitialValue(source: any): any

  #### Parameters

  + source: any

  #### Returns any

  Inherited from [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.md).[getInitialValue](foundry.data.fields.EmbeddedCollectionField.md#getinitialvalue)

### initialize

* initialize(value: any, model: any, options?: {}): any

  #### Parameters

  + value: any
  + model: any
  + options: {} = {}

  #### Returns any

  Inherited from [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.md).[initialize](foundry.data.fields.EmbeddedCollectionField.md#initialize)

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

  Inherited from [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.md).[toFormGroup](foundry.data.fields.EmbeddedCollectionField.md#toformgroup)

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

  Inherited from [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.md).[toInput](foundry.data.fields.EmbeddedCollectionField.md#toinput)

### toObject

* toObject(value: any): any

  #### Parameters

  + value: any

  #### Returns any

  Inherited from [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.md).[toObject](foundry.data.fields.EmbeddedCollectionField.md#toobject)

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

  Inherited from [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.md).[validate](foundry.data.fields.EmbeddedCollectionField.md#validate)

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

  Inherited from [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.md).[validators](foundry.data.fields.EmbeddedCollectionField.md#validators)

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

  Inherited from [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.md).[\_applyChangeCustom](foundry.data.fields.EmbeddedCollectionField.md#_applychangecustom)

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

  Inherited from [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.md).[\_applyChangeDowngrade](foundry.data.fields.EmbeddedCollectionField.md#_applychangedowngrade)

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

  Inherited from [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.md).[\_applyChangeMultiply](foundry.data.fields.EmbeddedCollectionField.md#_applychangemultiply)

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

  Inherited from [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.md).[\_applyChangeOverride](foundry.data.fields.EmbeddedCollectionField.md#_applychangeoverride)

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

  Inherited from [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.md).[\_applyChangeUpgrade](foundry.data.fields.EmbeddedCollectionField.md#_applychangeupgrade)

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

  Inherited from [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.md).[\_migrate](foundry.data.fields.EmbeddedCollectionField.md#_migrate)

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

  Inherited from [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.md).[\_replaceDataRefs](foundry.data.fields.EmbeddedCollectionField.md#_replacedatarefs)

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

  Inherited from [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.md).[\_toInput](foundry.data.fields.EmbeddedCollectionField.md#_toinput)

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

  Inherited from [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.md).[\_validateSpecial](foundry.data.fields.EmbeddedCollectionField.md#_validatespecial)

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

  Inherited from [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.md).[\_handleValidationFailure](foundry.data.fields.EmbeddedCollectionField.md#_handlevalidationfailure)

### `Static`\_validateElementType

* \_validateElementType(element: any): any

  #### Parameters

  + element: any

  #### Returns any

  Inherited from [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.md).[\_validateElementType](foundry.data.fields.EmbeddedCollectionField.md#_validateelementtype)