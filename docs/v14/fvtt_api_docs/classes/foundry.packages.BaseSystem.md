---
title: "BaseSystem | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.packages.BaseSystem.html"
category: "classes"
---

# Class BaseSystem

The data schema used to define System manifest files.
Extends the basic PackageData schema with some additional system-specific fields.

#### Hierarchy ([View Summary](../hierarchy.md#foundry.packages.BaseSystem))

* [BasePackage](foundry.packages.BasePackage.md)
  + BaseSystem
    - [System](foundry.packages.System.md)

##### Index

### Constructors

[constructor](#constructor)

### Properties

[\_source](#_source)
[\_unknownKeys](#_unknownkeys)
[availability](#availability)
[exclusive](#exclusive)
[hasStorage](#hasstorage)
[locked](#locked)
[owned](#owned)
[parent](#parent)
[strictDataCleaning](#strictdatacleaning)
[tags](#tags)
[\_schema](#_schema)
[icon](#icon)
[LOCALIZATION\_PREFIXES](#localization_prefixes)
[type](#type)

### Accessors

[incompatibleWithCoreVersion](#incompatiblewithcoreversion)
[invalid](#invalid)
[schema](#schema)
[type](#type-1)
[unavailable](#unavailable)
[validationFailures](#validationfailures)
[collection](#collection)
[schema](#schema-1)

### Methods

[\_initializeSource](#_initializesource)
[\_testRequiredDependencies](#_testrequireddependencies)
[\_testSupportedSystems](#_testsupportedsystems)
[clone](#clone)
[getFieldForProperty](#getfieldforproperty)
[reset](#reset)
[toJSON](#tojson)
[toObject](#toobject)
[updateSource](#updatesource)
[validate](#validate)
[\_configure](#_configure)
[\_getInnerModel](#_getinnermodel)
[\_initializationOrder](#_initializationorder)
[\_initialize](#_initialize)
[\_preUpdateSource](#_preupdatesource)
[\_updateCommit](#_updatecommit)
[\_updateDiff](#_updatediff)
[\_cleanData](#_cleandata)
[\_logWarning](#_logwarning)
[\_migrateStyles](#_migratestyles)
[cleanData](#cleandata)
[defineSchema](#defineschema)
[fromJSON](#fromjson)
[fromRemoteManifest](#fromremotemanifest)
[fromSource](#fromsource)
[isIncompatibleWithCoreVersion](#isincompatiblewithcoreversion)
[migrateData](#migratedata)
[migrateDataSafe](#migratedatasafe)
[shimData](#shimdata)
[testAvailability](#testavailability)
[testDependencyCompatibility](#testdependencycompatibility)
[validateId](#validateid)
[validateJoint](#validatejoint)
[validateVersion](#validateversion)
[\_preCleanData](#_precleandata)

## Constructors

### constructor

* new BaseSystem(data: [PackageManifestData](../interfaces/foundry.packages.types.PackageManifestData.md), options?: object): BaseSystem

  #### Parameters

  + data: [PackageManifestData](../interfaces/foundry.packages.types.PackageManifestData.md)

    Source data for the package
  + `Optional`options: object = {}

    Options which affect DataModel construction

  #### Returns BaseSystem

  Inherited from [BasePackage](foundry.packages.BasePackage.md).[constructor](foundry.packages.BasePackage.md#constructor)

## Properties

### \_source

\_source: [SystemManifestData](../interfaces/foundry.packages.types.SystemManifestData.md)

The source data object for this DataModel instance.
Once constructed, the source object is sealed such that no keys may be added nor removed.

Inherited from [BasePackage](foundry.packages.BasePackage.md).[\_source](foundry.packages.BasePackage.md#_source)

### `Internal`\_unknownKeys

\_unknownKeys: string[] = ...

An array of top-level manifest keys that were provided which are not supported by the schema.

Inherited from [BasePackage](foundry.packages.BasePackage.md).[\_unknownKeys](foundry.packages.BasePackage.md#_unknownkeys)

### availability

availability: number

An availability code in PACKAGE\_AVAILABILITY\_CODES which defines whether this package can be used.

Inherited from [BasePackage](foundry.packages.BasePackage.md).[availability](foundry.packages.BasePackage.md#availability)

### exclusive

exclusive: boolean

A flag which tracks whether this package is a free Exclusive pack

Inherited from [BasePackage](foundry.packages.BasePackage.md).[exclusive](foundry.packages.BasePackage.md#exclusive)

### hasStorage

hasStorage: boolean

A flag which tracks if this package has files stored in the persistent storage folder

Inherited from [BasePackage](foundry.packages.BasePackage.md).[hasStorage](foundry.packages.BasePackage.md#hasstorage)

### locked

locked: boolean

A flag which tracks whether this package is currently locked.

Inherited from [BasePackage](foundry.packages.BasePackage.md).[locked](foundry.packages.BasePackage.md#locked)

### owned

owned: boolean | null

A flag which tracks whether this package is owned, if it is protected.

Inherited from [BasePackage](foundry.packages.BasePackage.md).[owned](foundry.packages.BasePackage.md#owned)

### parent

parent: [DataModel](foundry.abstract.DataModel.md)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md)> | null

An immutable reverse-reference to a parent DataModel to which this model belongs.

Inherited from [BasePackage](foundry.packages.BasePackage.md).[parent](foundry.packages.BasePackage.md#parent)

### strictDataCleaning

strictDataCleaning: boolean = false

Does the system template request strict type checking of data compared to template.json inferred types.

### tags

tags: string[]

A set of Tags that indicate what kind of Package this is, provided by the Website

Inherited from [BasePackage](foundry.packages.BasePackage.md).[tags](foundry.packages.BasePackage.md#tags)

### `Static` `Internal`\_schema

\_schema: [DataModelSchemaField](foundry.data.fields.DataModelSchemaField.md)

The defined and cached Data Schema for all instances of this DataModel.

Inherited from [BasePackage](foundry.packages.BasePackage.md).[\_schema](foundry.packages.BasePackage.md#_schema)

### `Static`icon

icon: string = "fa-dice"

The default icon used for this type of Package.

### `Static`LOCALIZATION\_PREFIXES

LOCALIZATION\_PREFIXES: string[] = ...

Inherited from [BasePackage](foundry.packages.BasePackage.md).[LOCALIZATION\_PREFIXES](foundry.packages.BasePackage.md#localization_prefixes)

### `Static`type

type: string = "system"

Overrides [BasePackage](foundry.packages.BasePackage.md).[type](foundry.packages.BasePackage.md#type)

## Accessors

### incompatibleWithCoreVersion

* get incompatibleWithCoreVersion(): boolean

  Is this Package incompatible with the currently installed core Foundry VTT software version?

  #### Returns boolean

  Inherited from BasePackage.incompatibleWithCoreVersion

### invalid

* get invalid(): boolean

  Is the current state of this DataModel invalid?
  The model is invalid if there is any unresolved failure.

  #### Returns boolean

  Inherited from BasePackage.invalid

### schema

* get schema(): [DataModelSchemaField](foundry.data.fields.DataModelSchemaField.md)

  Define the data schema for this document instance.

  #### Returns [DataModelSchemaField](foundry.data.fields.DataModelSchemaField.md)

  Inherited from BasePackage.schema

### type

* get type(): string

  The type of this package instance. A value in CONST.PACKAGE\_TYPES.

  #### Returns string

  Inherited from BasePackage.type

### unavailable

* get unavailable(): boolean

  A flag which defines whether this package is unavailable to be used.

  #### Returns boolean

  Inherited from BasePackage.unavailable

### validationFailures

* get validationFailures(): {  
  Â Â Â Â fields: [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.md)  
  Â Â Â Â | null;  
  Â Â Â Â joint: [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.md) | null;  
  }

  An array of validation failure instances which may have occurred when this instance was last validated.

  #### Returns { Â Â Â Â fields: [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.md) | null; Â Â Â Â joint: [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.md) | null; }

  Inherited from BasePackage.validationFailures

### `Static`collection

* get collection(): string

  The named collection to which this package type belongs

  #### Returns string

  Inherited from BasePackage.collection

### `Static`schema

* get schema(): [DataModelSchemaField](foundry.data.fields.DataModelSchemaField.md)

  The Data Schema for all instances of this DataModel.

  #### Returns [DataModelSchemaField](foundry.data.fields.DataModelSchemaField.md)

  Inherited from BasePackage.schema

## Methods

### \_initializeSource

* \_initializeSource(  
  Â Â Â Â data: any,  
  Â Â Â Â \_\_namedParameters?: { installed?: boolean },  
  ): object

  #### Parameters

  + data: any
  + \_\_namedParameters: { installed?: boolean } = {}

  #### Returns object

  Inherited from [BasePackage](foundry.packages.BasePackage.md).[\_initializeSource](foundry.packages.BasePackage.md#_initializesource)

### \_testRequiredDependencies

* \_testRequiredDependencies(  
  Â Â Â Â modulesCollection: [Collection](foundry.utils.Collection.md)<string, [Module](foundry.packages.Module.md)>,  
  ): Promise<boolean>

  `Internal`

  Test that the dependencies of a package are satisfied as compatible.
  This method assumes that all packages in modulesCollection have already had their own availability tested.

  #### Parameters

  + modulesCollection: [Collection](foundry.utils.Collection.md)<string, [Module](foundry.packages.Module.md)>

    A collection which defines the set of available modules

  #### Returns Promise<boolean>

  Are all required dependencies satisfied?

  Inherited from [BasePackage](foundry.packages.BasePackage.md).[\_testRequiredDependencies](foundry.packages.BasePackage.md#_testrequireddependencies)

### \_testSupportedSystems

* \_testSupportedSystems(  
  Â Â Â Â systemCollection: [Collection](foundry.utils.Collection.md)<string, [System](foundry.packages.System.md)>,  
  ): Promise<boolean>

  `Internal`

  Test compatibility of a package's supported systems.

  #### Parameters

  + systemCollection: [Collection](foundry.utils.Collection.md)<string, [System](foundry.packages.System.md)>

    A collection which defines the set of available systems.

  #### Returns Promise<boolean>

  True if all supported systems which are currently installed
  are compatible or if the package has no supported systems.
  Returns false otherwise, or if no supported systems are
  installed.

  Inherited from [BasePackage](foundry.packages.BasePackage.md).[\_testSupportedSystems](foundry.packages.BasePackage.md#_testsupportedsystems)

### clone

* clone(  
  Â Â Â Â data?: object,  
  Â Â Â Â context?: [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md),  
  ):  
  Â Â Â Â | [DataModel](foundry.abstract.DataModel.md)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md)>  
  Â Â Â Â | Promise<[DataModel](foundry.abstract.DataModel.md)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md)>>

  Clone a model, creating a new data model by combining current data with provided overrides.

  #### Parameters

  + `Optional`data: object = {}

    Additional data which overrides current document data at the time of creation
  + `Optional`context: [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md) = {}

    Context options passed to the data model constructor

  #### Returns Â Â Â Â | [DataModel](foundry.abstract.DataModel.md)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md)> Â Â Â Â | Promise<[DataModel](foundry.abstract.DataModel.md)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md)>>

  The cloned instance

  Inherited from [BasePackage](foundry.packages.BasePackage.md).[clone](foundry.packages.BasePackage.md#clone)

### getFieldForProperty

* getFieldForProperty(key: string | string[]): [DataField](foundry.data.fields.DataField.md) | undefined

  Traverse the data model instance, obtaining the DataField definition for a field of a particular property.

  #### Parameters

  + key: string | string[]

    A property key like ["abilities", "strength"] or "abilities.strength"

  #### Returns [DataField](foundry.data.fields.DataField.md) | undefined

  The corresponding DataField definition for that field, or undefined

  Inherited from [BasePackage](foundry.packages.BasePackage.md).[getFieldForProperty](foundry.packages.BasePackage.md#getfieldforproperty)

### reset

* reset(): void

  Reset the state of this data instance back to mirror the contained source data, erasing any changes.

  #### Returns void

  Inherited from [BasePackage](foundry.packages.BasePackage.md).[reset](foundry.packages.BasePackage.md#reset)

### toJSON

* toJSON(): object

  Extract the source data for the DataModel into a simple object format that can be serialized.

  #### Returns object

  The document source data expressed as a plain object

  Inherited from [BasePackage](foundry.packages.BasePackage.md).[toJSON](foundry.packages.BasePackage.md#tojson)

### toObject

* toObject(source?: boolean): object

  Copy and transform the DataModel into a plain object.
  Draw the values of the extracted object from the data source (by default) otherwise from its transformed values.

  #### Parameters

  + `Optional`source: boolean = true

    Draw values from the underlying data source rather than transformed values

  #### Returns object

  The extracted primitive object

  Inherited from [BasePackage](foundry.packages.BasePackage.md).[toObject](foundry.packages.BasePackage.md#toobject)

### updateSource

* updateSource(changes?: object, options?: [DataModelUpdateOptions](../interfaces/foundry.abstract.types.DataModelUpdateOptions.md)): object

  Update the DataModel locally by applying an object of changes to its source data.
  The provided changes are expanded, cleaned, validated, and stored to the source data object for this model.
  The provided changes argument is mutated in this process.
  The source data is then re-initialized to apply those changes to the prepared data.
  The method returns an object of differential changes which modified the original data.

  #### Parameters

  + changes: object = {}

    New values which should be applied to the data model
  + options: [DataModelUpdateOptions](../interfaces/foundry.abstract.types.DataModelUpdateOptions.md) = {}

    Options which determine how the new data is merged

  #### Returns object

  An object containing differential keys and values that were changed

  #### Throws

  An error if the requested data model changes were invalid

  Inherited from [BasePackage](foundry.packages.BasePackage.md).[updateSource](foundry.packages.BasePackage.md#updatesource)

### validate

* validate(options?: [DataModelValidationOptions](../interfaces/foundry.abstract.types.DataModelValidationOptions.md)): boolean

  Validate the data contained in the document to check for type and content.
  This method is intended to validate complete model records, verifying both individual field validation as well
  as joint model validity.

  For validating sets of partial model changes, it is preferred to call DataModel#updateSource as a `dryRun`. This
  method provides a convenience alias for such a workflow if `changes` are provided.

  Warning: if fallback handling is allowed, this process will mutate provided changes or model source data.

  #### Parameters

  + options: [DataModelValidationOptions](../interfaces/foundry.abstract.types.DataModelValidationOptions.md) = {}

    Options which modify how the model is validated

  #### Returns boolean

  Whether the data source or proposed change is reported as valid.
  A boolean is always returned if validation is non-strict.

  #### Throws

  An error thrown if validation is strict and a failure occurs.

  Inherited from [BasePackage](foundry.packages.BasePackage.md).[validate](foundry.packages.BasePackage.md#validate)

### `Protected`\_configure

* \_configure(options?: object): void

  `Protected`

  Configure the data model instance before validation and initialization workflows are performed.

  #### Parameters

  + `Optional`options: object = {}

    Additional options modifying the configuration

  #### Returns void

  Inherited from [BasePackage](foundry.packages.BasePackage.md).[\_configure](foundry.packages.BasePackage.md#_configure)

### `Protected`\_getInnerModel

* \_getInnerModel(  
  Â Â Â Â field: [DataField](foundry.data.fields.DataField.md),  
  Â Â Â Â element?: { index?: number; value: object },  
  Â Â Â Â options?: Readonly<[DataModelCleaningOptions](../interfaces/foundry.data.types.DataModelCleaningOptions.md)>,  
  ): [DataModel](foundry.abstract.DataModel.md)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md)> | null

  `Protected`

  Resolve a previously-initialized embedded DataModel that corresponds to an element being cleaned. Called during
  recursive data cleaning when a parent field contains EmbeddedDataField elements, or a single nested DataModel
  field (such as a TypeDataField), in order to propagate the inner DataModel into \_state.model for the recursive
  clean operation. A single (non-collection) inner model resolves to itself; collection elements are matched by
  stable \_id when one is present, otherwise by positional index.

  Subclasses may override when data preparation reshapes the field property in a way that the default cannot
  interpret, for example wrapping the container in a non-iterable type or replacing it with a derived view.

  #### Parameters

  + field: [DataField](foundry.data.fields.DataField.md)

    The schema field being recursed into.
  + element: { index?: number; value: object } = {}
    - ##### `Optional`index?: number

      The positional index of the element within a container, if applicable.
    - ##### value: object

      The cleaned candidate value for the element being processed.
  + `Optional`options: Readonly<[DataModelCleaningOptions](../interfaces/foundry.data.types.DataModelCleaningOptions.md)> = {}

    The cleaning options in effect for the operation.

  #### Returns [DataModel](foundry.abstract.DataModel.md)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md)> | null

  The corresponding previously-initialized inner DataModel, or null.

  Inherited from [BasePackage](foundry.packages.BasePackage.md).[\_getInnerModel](foundry.packages.BasePackage.md#_getinnermodel)

### `Protected`\_initializationOrder

* \_initializationOrder(): Generator<[string, [DataField](foundry.data.fields.DataField.md)], any, any>

  `Protected`

  A generator that orders the DataFields in the DataSchema into an expected initialization order.

  #### Returns Generator<[string, [DataField](foundry.data.fields.DataField.md)], any, any>

  #### Yields

  Inherited from [BasePackage](foundry.packages.BasePackage.md).[\_initializationOrder](foundry.packages.BasePackage.md#_initializationorder)

### `Protected`\_initialize

* \_initialize(options?: object): void

  `Protected`

  Initialize the instance by copying data from the source object to instance attributes.
  This mirrors the workflow of SchemaField#initialize but with some added functionality.

  #### Parameters

  + `Optional`options: object = {}

    Options provided to the model constructor

  #### Returns void

  Inherited from [BasePackage](foundry.packages.BasePackage.md).[\_initialize](foundry.packages.BasePackage.md#_initialize)

### `Protected`\_preUpdateSource

* \_preUpdateSource(  
  Â Â Â Â changes: object,  
  Â Â Â Â options: [DataModelUpdateOptions](../interfaces/foundry.abstract.types.DataModelUpdateOptions.md),  
  Â Â Â Â \_state: [data](../modules/foundry.data.md).[types](../modules/foundry.data.types.md).[DataModelUpdateState](../interfaces/foundry.data.types.DataModelUpdateState.md),  
  ): void

  `Protected`

  Prepare the state object that is transacted through an updateSource operation.

  #### Parameters

  + changes: object

    New values which should be applied to the data model
  + options: [DataModelUpdateOptions](../interfaces/foundry.abstract.types.DataModelUpdateOptions.md)

    Options which determine how the new data is merged
  + \_state: [data](../modules/foundry.data.md).[types](../modules/foundry.data.types.md).[DataModelUpdateState](../interfaces/foundry.data.types.DataModelUpdateState.md)

    Data model update state

  #### Returns void

  Inherited from [BasePackage](foundry.packages.BasePackage.md).[\_preUpdateSource](foundry.packages.BasePackage.md#_preupdatesource)

### `Protected`\_updateCommit

* \_updateCommit(  
  Â Â Â Â copy: object,  
  Â Â Â Â diff: object,  
  Â Â Â Â options: [DataModelUpdateOptions](../interfaces/foundry.abstract.types.DataModelUpdateOptions.md),  
  Â Â Â Â \_state: [data](../modules/foundry.data.md).[types](../modules/foundry.data.types.md).[DataModelUpdateState](../interfaces/foundry.data.types.DataModelUpdateState.md),  
  ): void

  `Protected`

  Perform the second step of the DataModel#\_updateSource workflow which applies the prepared diff to the model.

  #### Parameters

  + copy: object

    The prepared copy of source data with changes applied
  + diff: object

    The differential changes that were applied to source
  + options: [DataModelUpdateOptions](../interfaces/foundry.abstract.types.DataModelUpdateOptions.md)

    Options which determine how the new data is merged
  + \_state: [data](../modules/foundry.data.md).[types](../modules/foundry.data.types.md).[DataModelUpdateState](../interfaces/foundry.data.types.DataModelUpdateState.md)

    Data cleaning state which might include instructions for final commit

  #### Returns void

  Inherited from [BasePackage](foundry.packages.BasePackage.md).[\_updateCommit](foundry.packages.BasePackage.md#_updatecommit)

### `Protected`\_updateDiff

* \_updateDiff(  
  Â Â Â Â copy: object,  
  Â Â Â Â changes: object,  
  Â Â Â Â options: [DataModelUpdateOptions](../interfaces/foundry.abstract.types.DataModelUpdateOptions.md),  
  Â Â Â Â \_state: [data](../modules/foundry.data.md).[types](../modules/foundry.data.types.md).[DataModelUpdateState](../interfaces/foundry.data.types.DataModelUpdateState.md),  
  ): object

  `Protected`

  Perform the first step of the DataModel#\_updateSource workflow which applies changes to a copy of model source
  data and records the resulting diff.

  #### Parameters

  + copy: object

    A mutable copy of model source data
  + changes: object

    New values which should be applied to the data model
  + options: [DataModelUpdateOptions](../interfaces/foundry.abstract.types.DataModelUpdateOptions.md)

    Options which determine how the new data is merged
  + \_state: [data](../modules/foundry.data.md).[types](../modules/foundry.data.types.md).[DataModelUpdateState](../interfaces/foundry.data.types.DataModelUpdateState.md)

    Data cleaning state

  #### Returns object

  The resulting difference applied to source data

  #### Throws

  A failure if the proposed change is invalid

  Inherited from [BasePackage](foundry.packages.BasePackage.md).[\_updateDiff](foundry.packages.BasePackage.md#_updatediff)

### `Static`\_cleanData

* \_cleanData(data: any, \_options: any, \_state: any): void

  #### Parameters

  + data: any
  + \_options: any
  + \_state: any

  #### Returns void

  Inherited from [BasePackage](foundry.packages.BasePackage.md).[\_cleanData](foundry.packages.BasePackage.md#_cleandata)

### `Static`\_logWarning

* \_logWarning(  
  Â Â Â Â packageId: string,  
  Â Â Â Â message: string,  
  Â Â Â Â options?: { installed?: object },  
  ): void

  `Internal`

  A wrapper around the default compatibility warning logger which handles some package-specific interactions.

  #### Parameters

  + packageId: string

    The package ID being logged
  + message: string

    The warning or error being logged
  + options: { installed?: object } = {}

    Logging options passed to foundry.utils.logCompatibilityWarning

    - ##### `Optional`installed?: object

      Is the package installed?

  #### Returns void

  Inherited from [BasePackage](foundry.packages.BasePackage.md).[\_logWarning](foundry.packages.BasePackage.md#_logwarning)

### `Static`\_migrateStyles

* \_migrateStyles(data: [PackageManifestData](../interfaces/foundry.packages.types.PackageManifestData.md)): void

  `Internal`

  Migrate to v13-schema styles array from string array

  #### Parameters

  + data: [PackageManifestData](../interfaces/foundry.packages.types.PackageManifestData.md)

  #### Returns void

  #### Deprecated

  since v13

  Inherited from [BasePackage](foundry.packages.BasePackage.md).[\_migrateStyles](foundry.packages.BasePackage.md#_migratestyles)

### `Static`cleanData

* cleanData(  
  Â Â Â Â data?: object,  
  Â Â Â Â options?: [DataModelCleaningOptions](../interfaces/foundry.data.types.DataModelCleaningOptions.md),  
  Â Â Â Â \_state?: Partial<[data](../modules/foundry.data.md).[types](../modules/foundry.data.types.md).[DataModelUpdateState](../interfaces/foundry.data.types.DataModelUpdateState.md)>,  
  ): object

  Clean a data source object to conform to a specific provided schema.

  #### Parameters

  + `Optional`data: object = {}

    Provided model data that requires cleaning
  + `Optional`options: [DataModelCleaningOptions](../interfaces/foundry.data.types.DataModelCleaningOptions.md) = {}

    Options that configure how data cleaning is performed
  + `Optional`\_state: Partial<[data](../modules/foundry.data.md).[types](../modules/foundry.data.types.md).[DataModelUpdateState](../interfaces/foundry.data.types.DataModelUpdateState.md)> = {}

    Internal options used during cleaning recursion

  #### Returns object

  Cleaned data which is suitable for validation and usage

  Inherited from [BasePackage](foundry.packages.BasePackage.md).[cleanData](foundry.packages.BasePackage.md#cleandata)

### `Static`defineSchema

* defineSchema(): {  
  Â Â Â Â authors: [SetField](foundry.data.fields.SetField.md);  
  Â Â Â Â bugs: [StringField](foundry.data.fields.StringField.md);  
  Â Â Â Â changelog: [StringField](foundry.data.fields.StringField.md);  
  Â Â Â Â compatibility: [PackageCompatibility](foundry.packages.PackageCompatibility.md);  
  Â Â Â Â description: [HTMLField](foundry.data.fields.HTMLField.md);  
  Â Â Â Â download: [StringField](foundry.data.fields.StringField.md);  
  Â Â Â Â esmodules: [SetField](foundry.data.fields.SetField.md);  
  Â Â Â Â exclusive: [BooleanField](foundry.data.fields.BooleanField.md);  
  Â Â Â Â flags: [ObjectField](foundry.data.fields.ObjectField.md);  
  Â Â Â Â id: [StringField](foundry.data.fields.StringField.md);  
  Â Â Â Â languages: [SetField](foundry.data.fields.SetField.md);  
  Â Â Â Â license: [StringField](foundry.data.fields.StringField.md);  
  Â Â Â Â manifest: [StringField](foundry.data.fields.StringField.md);  
  Â Â Â Â media: [SetField](foundry.data.fields.SetField.md);  
  Â Â Â Â packFolders: [SetField](foundry.data.fields.SetField.md);  
  Â Â Â Â packs: [PackageCompendiumPacks](foundry.PackageCompendiumPacks.md);  
  Â Â Â Â persistentStorage: [BooleanField](foundry.data.fields.BooleanField.md);  
  Â Â Â Â protected: [BooleanField](foundry.data.fields.BooleanField.md);  
  Â Â Â Â readme: [StringField](foundry.data.fields.StringField.md);  
  Â Â Â Â relationships: [PackageRelationships](foundry.PackageRelationships.md);  
  Â Â Â Â scripts: [SetField](foundry.data.fields.SetField.md);  
  Â Â Â Â socket: [BooleanField](foundry.data.fields.BooleanField.md);  
  Â Â Â Â styles: [ArrayField](foundry.data.fields.ArrayField.md)<[SchemaField](foundry.data.fields.SchemaField.md)>;  
  Â Â Â Â title: [StringField](foundry.data.fields.StringField.md);  
  Â Â Â Â url: [StringField](foundry.data.fields.StringField.md);  
  Â Â Â Â version: [StringField](foundry.data.fields.StringField.md);  
  } & {  
  Â Â Â Â background: [StringField](foundry.data.fields.StringField.md);  
  Â Â Â Â documentTypes: [AdditionalTypesField](foundry.packages.AdditionalTypesField.md);  
  Â Â Â Â grid: [SchemaField](foundry.data.fields.SchemaField.md);  
  Â Â Â Â initiative: [StringField](foundry.data.fields.StringField.md);  
  Â Â Â Â primaryTokenAttribute: [StringField](foundry.data.fields.StringField.md);  
  Â Â Â Â secondaryTokenAttribute: [StringField](foundry.data.fields.StringField.md);  
  Â Â Â Â type: [StringField](foundry.data.fields.StringField.md);  
  }

  Define the data schema for models of this type.
  The schema is populated the first time it is accessed and cached for future reuse.

  The schema, through its fields, provide the essential cleaning, validation, and initialization methods to turn the
  [\_source](#_source) values into direct properties of the data model. The schema is a static property of the model and
  is reused by all instances to perform validation.

  The schemas defined by the core software in classes like [foundry.documents.BaseActor](foundry.documents.BaseActor.md) are validated by the
  server, where user code does not run. However, almost all documents have a `flags` field to store data, and many
  have a `system` field that can be configured to be a [foundry.abstract.TypeDataModel](foundry.abstract.TypeDataModel.md) instance. Those models
  are *not* constructed on the server and rely purely on client-side code, which means certain extra-sensitive fields
  must be also be registered through your package manifest. [foundry.packages.types.ServerSanitizationFields](../interfaces/foundry.packages.types.ServerSanitizationFields.md)

  #### Returns { Â Â Â Â authors: [SetField](foundry.data.fields.SetField.md); Â Â Â Â bugs: [StringField](foundry.data.fields.StringField.md); Â Â Â Â changelog: [StringField](foundry.data.fields.StringField.md); Â Â Â Â compatibility: [PackageCompatibility](foundry.packages.PackageCompatibility.md); Â Â Â Â description: [HTMLField](foundry.data.fields.HTMLField.md); Â Â Â Â download: [StringField](foundry.data.fields.StringField.md); Â Â Â Â esmodules: [SetField](foundry.data.fields.SetField.md); Â Â Â Â exclusive: [BooleanField](foundry.data.fields.BooleanField.md); Â Â Â Â flags: [ObjectField](foundry.data.fields.ObjectField.md); Â Â Â Â id: [StringField](foundry.data.fields.StringField.md); Â Â Â Â languages: [SetField](foundry.data.fields.SetField.md); Â Â Â Â license: [StringField](foundry.data.fields.StringField.md); Â Â Â Â manifest: [StringField](foundry.data.fields.StringField.md); Â Â Â Â media: [SetField](foundry.data.fields.SetField.md); Â Â Â Â packFolders: [SetField](foundry.data.fields.SetField.md); Â Â Â Â packs: [PackageCompendiumPacks](foundry.PackageCompendiumPacks.md); Â Â Â Â persistentStorage: [BooleanField](foundry.data.fields.BooleanField.md); Â Â Â Â protected: [BooleanField](foundry.data.fields.BooleanField.md); Â Â Â Â readme: [StringField](foundry.data.fields.StringField.md); Â Â Â Â relationships: [PackageRelationships](foundry.PackageRelationships.md); Â Â Â Â scripts: [SetField](foundry.data.fields.SetField.md); Â Â Â Â socket: [BooleanField](foundry.data.fields.BooleanField.md); Â Â Â Â styles: [ArrayField](foundry.data.fields.ArrayField.md)<[SchemaField](foundry.data.fields.SchemaField.md)>; Â Â Â Â title: [StringField](foundry.data.fields.StringField.md); Â Â Â Â url: [StringField](foundry.data.fields.StringField.md); Â Â Â Â version: [StringField](foundry.data.fields.StringField.md); } & { Â Â Â Â background: [StringField](foundry.data.fields.StringField.md); Â Â Â Â documentTypes: [AdditionalTypesField](foundry.packages.AdditionalTypesField.md); Â Â Â Â grid: [SchemaField](foundry.data.fields.SchemaField.md); Â Â Â Â initiative: [StringField](foundry.data.fields.StringField.md); Â Â Â Â primaryTokenAttribute: [StringField](foundry.data.fields.StringField.md); Â Â Â Â secondaryTokenAttribute: [StringField](foundry.data.fields.StringField.md); Â Â Â Â type: [StringField](foundry.data.fields.StringField.md); }

  #### Example

  ```
  class SomeModel extends foundry.abstract.DataModel {  
    static defineSchema() {  
      return {  
        foo: new foundry.data.fields.StringField()  
      }  
    }  
  }  
    
  class AnotherModel extends SomeModel {  
    static defineSchema() {  
      // Inheritance and object oriented principles apply to schema definition  
      const schema = super.defineSchema()  
    
      schema.bar = new foundry.data.fields.NumberField()  
    
      return schema;  
    }  
  }
  Copy
  ```

  Overrides [BasePackage](foundry.packages.BasePackage.md).[defineSchema](foundry.packages.BasePackage.md#defineschema)

### `Static`fromJSON

* fromJSON(json: string): [DataModel](foundry.abstract.DataModel.md)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md)>

  Create a DataModel instance using a provided serialized JSON string.

  #### Parameters

  + json: string

    Serialized document data in string format

  #### Returns [DataModel](foundry.abstract.DataModel.md)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md)>

  A constructed data model instance

  Inherited from [BasePackage](foundry.packages.BasePackage.md).[fromJSON](foundry.packages.BasePackage.md#fromjson)

### `Static`fromRemoteManifest

* fromRemoteManifest(  
  Â Â Â Â manifestUrl: string,  
  Â Â Â Â options?: { strict?: boolean },  
  ): Promise<ServerPackage>

  Retrieve the latest Package manifest from a provided remote location.

  #### Parameters

  + manifestUrl: string

    A remote manifest URL to load
  + options: { strict?: boolean } = {}

    Additional options which affect package construction

    - ##### `Optional`strict?: boolean

      Whether to construct the remote package strictly

  #### Returns Promise<ServerPackage>

  A Promise which resolves to a constructed ServerPackage instance

  #### Throws

  An error if the retrieved manifest data is invalid

  Inherited from [BasePackage](foundry.packages.BasePackage.md).[fromRemoteManifest](foundry.packages.BasePackage.md#fromremotemanifest)

### `Static`fromSource

* fromSource(  
  Â Â Â Â source: object,  
  Â Â Â Â context?: Omit<[DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md), "strict"> & [DataModelFromSourceOptions](../interfaces/foundry.abstract.types.DataModelFromSourceOptions.md),  
  ): [DataModel](foundry.abstract.DataModel.md)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md)>

  Create a new instance of this DataModel from a source record.
  The source data is presumed trustworthy and is not strictly validated unless explicitly requested.

  #### Parameters

  + source: object

    Initial document data which comes from a trusted source.
  + `Optional`context: Omit<[DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md), "strict"> & [DataModelFromSourceOptions](../interfaces/foundry.abstract.types.DataModelFromSourceOptions.md) = {}

    Model construction context

  #### Returns [DataModel](foundry.abstract.DataModel.md)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md)>

  Inherited from [BasePackage](foundry.packages.BasePackage.md).[fromSource](foundry.packages.BasePackage.md#fromsource)

### `Static`isIncompatibleWithCoreVersion

* isIncompatibleWithCoreVersion(availability: number): boolean

  Test if a given availability is incompatible with the core version.

  #### Parameters

  + availability: number

    The availability value to test.

  #### Returns boolean

  Inherited from [BasePackage](foundry.packages.BasePackage.md).[isIncompatibleWithCoreVersion](foundry.packages.BasePackage.md#isincompatiblewithcoreversion)

### `Static`migrateData

* migrateData(data: any, options: any): object

  Migrate candidate source data for this DataModel which may require initial cleaning or transformations.

  #### Parameters

  + data: any

    Candidate source data for the module, before further cleaning
  + options: any

    Additional options for how the field is cleaned

  #### Returns object

  Migrated source data, ready for further cleaning

  Inherited from [BasePackage](foundry.packages.BasePackage.md).[migrateData](foundry.packages.BasePackage.md#migratedata)

### `Static`migrateDataSafe

* migrateDataSafe(  
  Â Â Â Â source: object,  
  Â Â Â Â options?: Readonly<[DataModelCleaningOptions](../interfaces/foundry.data.types.DataModelCleaningOptions.md)>,  
  ): object

  Wrap data migration in a try/catch which attempts it safely.

  #### Parameters

  + source: object

    Candidate source data for the module, before further cleaning
  + `Optional`options: Readonly<[DataModelCleaningOptions](../interfaces/foundry.data.types.DataModelCleaningOptions.md)> = {}

    Additional options for how the field is cleaned

  #### Returns object

  Migrated source data, ready for further cleaning

  Inherited from [BasePackage](foundry.packages.BasePackage.md).[migrateDataSafe](foundry.packages.BasePackage.md#migratedatasafe)

### `Static`shimData

* shimData(data: object, options?: { embedded?: boolean }): object

  Take data which conforms to the current data schema and add backwards-compatible accessors to it in order to
  support older code which uses this data.

  #### Parameters

  + data: object

    Data which matches the current schema
  + `Optional`options: { embedded?: boolean } = {}

    Additional shimming options

    - ##### `Optional`embedded?: boolean

      Apply shims to embedded models?

  #### Returns object

  Data with added backwards-compatible properties, which is the same object as
  the `data` argument

  Inherited from [BasePackage](foundry.packages.BasePackage.md).[shimData](foundry.packages.BasePackage.md#shimdata)

### `Static`testAvailability

* testAvailability(  
  Â Â Â Â data: Partial<[PackageManifestData](../interfaces/foundry.packages.types.PackageManifestData.md)>,  
  Â Â Â Â options?: { release?: any },  
  ): number

  Check the given compatibility data against the current installation state and determine its availability.

  #### Parameters

  + data: Partial<[PackageManifestData](../interfaces/foundry.packages.types.PackageManifestData.md)>

    The compatibility data to test.
  + `Optional`options: { release?: any } = {}
    - ##### `Optional`release?: any

      A specific software release for which to test availability.
      Tests against the current release by default.

  #### Returns number

  Inherited from [BasePackage](foundry.packages.BasePackage.md).[testAvailability](foundry.packages.BasePackage.md#testavailability)

### `Static`testDependencyCompatibility

* testDependencyCompatibility(  
  Â Â Â Â compatibility: [PackageCompatibility](foundry.packages.PackageCompatibility.md),  
  Â Â Â Â dependency: [BasePackage](foundry.packages.BasePackage.md)<any>,  
  ): boolean

  Determine if a dependency is within the given compatibility range.

  #### Parameters

  + compatibility: [PackageCompatibility](foundry.packages.PackageCompatibility.md)

    The compatibility range declared for the dependency, if any
  + dependency: [BasePackage](foundry.packages.BasePackage.md)<any>

    The known dependency package

  #### Returns boolean

  Is the dependency compatible with the required range?

  Inherited from [BasePackage](foundry.packages.BasePackage.md).[testDependencyCompatibility](foundry.packages.BasePackage.md#testdependencycompatibility)

### `Static`validateId

* validateId(id: string): void

  Validate that a Package ID is allowed.

  #### Parameters

  + id: string

    The candidate ID

  #### Returns void

  #### Throws

  An error if the candidate ID is invalid

  Inherited from [BasePackage](foundry.packages.BasePackage.md).[validateId](foundry.packages.BasePackage.md#validateid)

### `Static`validateJoint

* validateJoint(data: object): void

  Evaluate joint validation rules which apply validation conditions across multiple fields of the model.
  Field-specific validation rules should be defined as part of the DataSchema for the model.
  This method allows for testing aggregate rules which impose requirements on the overall model.

  #### Parameters

  + data: object

    Candidate data for the model

  #### Returns void

  #### Throws

  An error if a validation failure is detected

  Inherited from [BasePackage](foundry.packages.BasePackage.md).[validateJoint](foundry.packages.BasePackage.md#validatejoint)

### `Static`validateVersion

* validateVersion(version: string): void

  Validate that a version is allowed.

  #### Parameters

  + version: string

    The candidate version

  #### Returns void

  #### Throws

  An error if the version is invalid

  Inherited from [BasePackage](foundry.packages.BasePackage.md).[validateVersion](foundry.packages.BasePackage.md#validateversion)

### `Protected` `Static`\_preCleanData

* \_preCleanData(  
  Â Â Â Â data: object,  
  Â Â Â Â options: [DataModelCleaningOptions](../interfaces/foundry.data.types.DataModelCleaningOptions.md),  
  Â Â Â Â \_state: [data](../modules/foundry.data.md).[types](../modules/foundry.data.types.md).[DataModelUpdateState](../interfaces/foundry.data.types.DataModelUpdateState.md),  
  ): void

  `Protected`

  Apply preliminary model-specific cleaning rules or alter cleaning options or initial state.
  Subclass models may implement this function to configure the cleaning workflow.
  Any mutations to data, options, or \_state parameters are performed inplace.

  #### Parameters

  + data: object

    The provided input data for cleaning
  + options: [DataModelCleaningOptions](../interfaces/foundry.data.types.DataModelCleaningOptions.md)

    Options which define how cleaning should be performed
  + \_state: [data](../modules/foundry.data.md).[types](../modules/foundry.data.types.md).[DataModelUpdateState](../interfaces/foundry.data.types.DataModelUpdateState.md)

    The data cleaning state

  #### Returns void

  Inherited from [BasePackage](foundry.packages.BasePackage.md).[\_preCleanData](foundry.packages.BasePackage.md#_precleandata)