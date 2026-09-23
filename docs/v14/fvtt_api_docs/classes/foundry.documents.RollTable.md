---
title: "RollTable | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.documents.RollTable.html"
category: "classes"
---

# Class RollTable

The client-side RollTable document which extends the common BaseRollTable model.

#### Mixes

ClientDocumentMixin

#### See

* [foundry.documents.collections.RollTables](foundry.documents.collections.RollTables.md): The world-level collection of RollTable documents
* [foundry.documents.TableResult](foundry.documents.TableResult.md): The embedded TableResult document
* [foundry.applications.sheets.RollTableSheet](foundry.applications.sheets.RollTableSheet.md): The RollTable sheet application

#### Hierarchy ([View Summary](../hierarchy.md#foundry.documents.RollTable))

* [BaseRollTable](foundry.documents.BaseRollTable.md)<this>
  + RollTable

##### Index

### Constructors

[constructor](#constructor)

### Properties

[\_source](#_source)
[parent](#parent)
[\_schema](#_schema)
[DEFAULT\_ICON](#default_icon)
[LOCALIZATION\_PREFIXES](#localization_prefixes)
[metadata](#metadata)

### Accessors

[compendium](#compendium)
[id](#id)
[inCompendium](#incompendium)
[invalid](#invalid)
[isEmbedded](#isembedded)
[schema](#schema)
[thumbnail](#thumbnail)
[uuid](#uuid)
[validationFailures](#validationfailures)
[baseDocument](#basedocument)
[collectionName](#collectionname)
[database](#database)
[documentName](#documentname)
[hasTypeData](#hastypedata)
[hierarchy](#hierarchy)
[implementation](#implementation)
[schema](#schema-1)
[TYPES](#types)

### Methods

[\_configure](#_configure)
[\_createFigureEmbed](#_createfigureembed)
[\_getParentCollection](#_getparentcollection)
[\_initializationOrder](#_initializationorder)
[\_initialize](#_initialize)
[\_onCreateDescendantDocuments](#_oncreatedescendantdocuments)
[\_onDeleteDescendantDocuments](#_ondeletedescendantdocuments)
[\_updateDiff](#_updatediff)
[canUserModify](#canusermodify)
[clone](#clone)
[createEmbeddedDocuments](#createembeddeddocuments)
[delete](#delete)
[deleteEmbeddedDocuments](#deleteembeddeddocuments)
[draw](#draw)
[drawMany](#drawmany)
[getEmbeddedCollection](#getembeddedcollection)
[getEmbeddedDocument](#getembeddeddocument)
[getFieldForProperty](#getfieldforproperty)
[getFlag](#getflag)
[getResultsForRoll](#getresultsforroll)
[getUserLevel](#getuserlevel)
[migrateSystemData](#migratesystemdata)
[normalize](#normalize)
[onEmbed](#onembed)
[prepareDerivedData](#preparederiveddata)
[reset](#reset)
[resetResults](#resetresults)
[roll](#roll)
[setFlag](#setflag)
[testUserPermission](#testuserpermission)
[toCompendium](#tocompendium)
[toJSON](#tojson)
[toMessage](#tomessage)
[toObject](#toobject)
[traverseEmbeddedDocuments](#traverseembeddeddocuments)
[unsetFlag](#unsetflag)
[update](#update)
[updateEmbeddedDocuments](#updateembeddeddocuments)
[updateSource](#updatesource)
[validate](#validate)
[\_buildEmbedHTML](#_buildembedhtml)
[\_getInnerModel](#_getinnermodel)
[\_initializeSource](#_initializesource)
[\_onClickEmbedAction](#_onclickembedaction)
[\_onCreate](#_oncreate)
[\_onDelete](#_ondelete)
[\_onUpdate](#_onupdate)
[\_preCreate](#_precreate)
[\_preDelete](#_predelete)
[\_preUpdate](#_preupdate)
[\_preUpdateSource](#_preupdatesource)
[\_updateCommit](#_updatecommit)
[\_addDataFieldMigration](#_adddatafieldmigration)
[\_addDataFieldShim](#_adddatafieldshim)
[\_addDataFieldShims](#_adddatafieldshims)
[\_clearFieldsRecursively](#_clearfieldsrecursively)
[\_logDataFieldMigration](#_logdatafieldmigration)
[\_preCleanData](#_precleandata)
[canUserCreate](#canusercreate)
[cleanData](#cleandata)
[create](#create)
[createDocuments](#createdocuments)
[defineSchema](#defineschema)
[deleteDocuments](#deletedocuments)
[fromFolder](#fromfolder)
[fromJSON](#fromjson)
[fromSource](#fromsource)
[get](#get)
[getCollectionName](#getcollectionname)
[migrateData](#migratedata)
[migrateDataSafe](#migratedatasafe)
[shimData](#shimdata)
[updateDocuments](#updatedocuments)
[validateJoint](#validatejoint)
[\_cleanData](#_cleandata)
[\_onCreateOperation](#_oncreateoperation)
[\_onDeleteOperation](#_ondeleteoperation)
[\_onUpdateOperation](#_onupdateoperation)
[\_preCreateOperation](#_precreateoperation)
[\_preDeleteOperation](#_predeleteoperation)
[\_preUpdateOperation](#_preupdateoperation)

## Constructors

### constructor

* new RollTable(  
  Â Â Â Â data?: Partial<[RollTableData](../interfaces/foundry.documents.types.RollTableData.md)>,  
  Â Â Â Â options?: [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md),  
  ): [documents](../modules/foundry.documents.md).RollTable

  #### Parameters

  + `Optional`data: Partial<[RollTableData](../interfaces/foundry.documents.types.RollTableData.md)> = {}

    Initial data used to construct the data object. The provided object will be
    owned by the constructed model instance and may be mutated.
  + `Optional`options: [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md) = {}

    Context and data validation options which affects initial model construction.

  #### Returns [documents](../modules/foundry.documents.md).RollTable

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.md).[constructor](foundry.documents.BaseRollTable.md#constructor)

## Properties

### \_source

\_source: [RollTableData](../interfaces/foundry.documents.types.RollTableData.md)

The source data object for this DataModel instance.
Once constructed, the source object is sealed such that no keys may be added nor removed.

Inherited from [BaseRollTable](foundry.documents.BaseRollTable.md).[\_source](foundry.documents.BaseRollTable.md#_source)

### parent

parent: [DataModel](foundry.abstract.DataModel.md)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md)> | null

An immutable reverse-reference to a parent DataModel to which this model belongs.

Inherited from [BaseRollTable](foundry.documents.BaseRollTable.md).[parent](foundry.documents.BaseRollTable.md#parent)

### `Static` `Internal`\_schema

\_schema: [DataModelSchemaField](foundry.data.fields.DataModelSchemaField.md)

The defined and cached Data Schema for all instances of this DataModel.

Inherited from [BaseRollTable](foundry.documents.BaseRollTable.md).[\_schema](foundry.documents.BaseRollTable.md#_schema)

### `Static`DEFAULT\_ICON

DEFAULT\_ICON: string = "icons/svg/d20-grey.svg"

The default icon used for newly created Macro documents

Inherited from [BaseRollTable](foundry.documents.BaseRollTable.md).[DEFAULT\_ICON](foundry.documents.BaseRollTable.md#default_icon)

### `Static`LOCALIZATION\_PREFIXES

LOCALIZATION\_PREFIXES: string[] = ...

Inherited from [BaseRollTable](foundry.documents.BaseRollTable.md).[LOCALIZATION\_PREFIXES](foundry.documents.BaseRollTable.md#localization_prefixes)

### `Static`metadata

metadata: object = ...

Default metadata which applies to each instance of this Document type.

Inherited from [BaseRollTable](foundry.documents.BaseRollTable.md).[metadata](foundry.documents.BaseRollTable.md#metadata)

## Accessors

### `Abstract`compendium

* get compendium(): any

  A reference to the Compendium Collection containing this Document, if any, and otherwise null.

  #### Returns any

  Inherited from ClientDocumentMixin(BaseRollTable).compendium

### id

* get id(): string | null

  The canonical identifier for this Document.

  #### Returns string | null

  Inherited from ClientDocumentMixin(BaseRollTable).id

### inCompendium

* get inCompendium(): boolean

  Is this document in a compendium?

  #### Returns boolean

  Inherited from ClientDocumentMixin(BaseRollTable).inCompendium

### invalid

* get invalid(): boolean

  Is the current state of this DataModel invalid?
  The model is invalid if there is any unresolved failure.

  #### Returns boolean

  Inherited from ClientDocumentMixin(BaseRollTable).invalid

### isEmbedded

* get isEmbedded(): boolean

  Is this document embedded within a parent document?

  #### Returns boolean

  Inherited from ClientDocumentMixin(BaseRollTable).isEmbedded

### schema

* get schema(): [DataModelSchemaField](foundry.data.fields.DataModelSchemaField.md)

  Define the data schema for this document instance.

  #### Returns [DataModelSchemaField](foundry.data.fields.DataModelSchemaField.md)

  Inherited from ClientDocumentMixin(BaseRollTable).schema

### thumbnail

* get thumbnail(): string

  Provide a thumbnail image path used to represent this document.

  #### Returns string

### uuid

* get uuid(): string | null

  A Universally Unique Identifier (uuid) for this Document instance.

  #### Returns string | null

  Inherited from ClientDocumentMixin(BaseRollTable).uuid

### validationFailures

* get validationFailures(): {  
  Â Â Â Â fields: [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.md)  
  Â Â Â Â | null;  
  Â Â Â Â joint: [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.md) | null;  
  }

  An array of validation failure instances which may have occurred when this instance was last validated.

  #### Returns { Â Â Â Â fields: [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.md) | null; Â Â Â Â joint: [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.md) | null; }

  Inherited from ClientDocumentMixin(BaseRollTable).validationFailures

### `Static`baseDocument

* get baseDocument(): typeof [Document](foundry.abstract.Document.md)

  The base document definition that this document class extends from.

  #### Returns typeof [Document](foundry.abstract.Document.md)

  Inherited from ClientDocumentMixin(BaseRollTable).baseDocument

### `Static`collectionName

* get collectionName(): string

  The named collection to which this Document belongs.

  #### Returns string

  Inherited from ClientDocumentMixin(BaseRollTable).collectionName

### `Static`database

* get database(): [abstract](../modules/foundry.abstract.md).[DatabaseBackend](foundry.abstract.DatabaseBackend.md)

  The database backend used to execute operations and handle results.

  #### Returns [abstract](../modules/foundry.abstract.md).[DatabaseBackend](foundry.abstract.DatabaseBackend.md)

  Inherited from ClientDocumentMixin(BaseRollTable).database

### `Static`documentName

* get documentName(): string

  The canonical name of this Document type, for example "Actor".

  #### Returns string

  Inherited from ClientDocumentMixin(BaseRollTable).documentName

### `Static`hasTypeData

* get hasTypeData(): boolean

  Does this Document support additional subtypes?

  #### Returns boolean

  Inherited from ClientDocumentMixin(BaseRollTable).hasTypeData

### `Static`hierarchy

* get hierarchy(): Readonly<Record<string, any>>

  The Embedded Document hierarchy for this Document.

  #### Returns Readonly<Record<string, any>>

  Inherited from ClientDocumentMixin(BaseRollTable).hierarchy

### `Static`implementation

* get implementation(): typeof [Document](foundry.abstract.Document.md)

  Return a reference to the configured subclass of this base Document type.

  #### Returns typeof [Document](foundry.abstract.Document.md)

  Inherited from ClientDocumentMixin(BaseRollTable).implementation

### `Static`schema

* get schema(): [DataModelSchemaField](foundry.data.fields.DataModelSchemaField.md)

  Ensure that all Document classes share the same schema of their base declaration.

  #### Returns [DataModelSchemaField](foundry.data.fields.DataModelSchemaField.md)

  Inherited from ClientDocumentMixin(BaseRollTable).schema

### `Static`TYPES

* get TYPES(): string[]

  The allowed types which may exist for this Document class.

  #### Returns string[]

  Inherited from ClientDocumentMixin(BaseRollTable).TYPES

## Methods

### \_configure

* \_configure(\_\_namedParameters?: { pack?: null; parentCollection?: null }): void

  #### Parameters

  + \_\_namedParameters: { pack?: null; parentCollection?: null } = {}

  #### Returns void

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.md).[\_configure](foundry.documents.BaseRollTable.md#_configure)

### \_createFigureEmbed

* \_createFigureEmbed(content: any, config: any, options: any): Promise<any>

  #### Parameters

  + content: any
  + config: any
  + options: any

  #### Returns Promise<any>

  #### Inherit Doc

### \_getParentCollection

* \_getParentCollection(parentCollection?: string | null): string | null

  `Internal`

  Identify the collection in a parent Document that this Document belongs to, if any.

  #### Parameters

  + `Optional`parentCollection: string | null

    An explicitly provided parent collection name.

  #### Returns string | null

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.md).[\_getParentCollection](foundry.documents.BaseRollTable.md#_getparentcollection)

### \_initializationOrder

* \_initializationOrder(): Generator<  
  Â Â Â Â (string | [DataField](foundry.data.fields.DataField.md) | undefined)[],  
  Â Â Â Â void,  
  Â Â Â Â unknown,  
  >

  #### Returns Generator<(string | [DataField](foundry.data.fields.DataField.md) | undefined)[], void, unknown>

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.md).[\_initializationOrder](foundry.documents.BaseRollTable.md#_initializationorder)

### \_initialize

* \_initialize(options: any): void

  Initialize the instance by copying data from the source object to instance attributes.
  This mirrors the workflow of SchemaField#initialize but with some added functionality.

  #### Parameters

  + options: any

    Options provided to the model constructor

  #### Returns void

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.md).[\_initialize](foundry.documents.BaseRollTable.md#_initialize)

### \_onCreateDescendantDocuments

* \_onCreateDescendantDocuments(  
  Â Â Â Â parent: any,  
  Â Â Â Â collection: any,  
  Â Â Â Â documents: any,  
  Â Â Â Â data: any,  
  Â Â Â Â options: any,  
  Â Â Â Â userId: any,  
  ): void

  #### Parameters

  + parent: any
  + collection: any
  + documents: any
  + data: any
  + options: any
  + userId: any

  #### Returns void

  #### Inherit Doc

### \_onDeleteDescendantDocuments

* \_onDeleteDescendantDocuments(  
  Â Â Â Â parent: any,  
  Â Â Â Â collection: any,  
  Â Â Â Â documents: any,  
  Â Â Â Â ids: any,  
  Â Â Â Â options: any,  
  Â Â Â Â userId: any,  
  ): void

  #### Parameters

  + parent: any
  + collection: any
  + documents: any
  + ids: any
  + options: any
  + userId: any

  #### Returns void

  #### Inherit Doc

### \_updateDiff

* \_updateDiff(copy: any, changes: any, options: any, \_state: any): object

  Perform the first step of the DataModel#\_updateSource workflow which applies changes to a copy of model source
  data and records the resulting diff.

  #### Parameters

  + copy: any

    A mutable copy of model source data
  + changes: any

    New values which should be applied to the data model
  + options: any

    Options which determine how the new data is merged
  + \_state: any

    Data cleaning state

  #### Returns object

  The resulting difference applied to source data

  #### Throws

  A failure if the proposed change is invalid

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.md).[\_updateDiff](foundry.documents.BaseRollTable.md#_updatediff)

### canUserModify

* canUserModify(user: [BaseUser](foundry.documents.BaseUser.md), action: string, data?: object): boolean

  Test whether a given User has permission to perform some action on this Document

  #### Parameters

  + user: [BaseUser](foundry.documents.BaseUser.md)

    The User attempting modification
  + action: string

    The attempted action
  + `Optional`data: object = {}

    Data involved in the attempted action

  #### Returns boolean

  Does the User have permission?

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.md).[canUserModify](foundry.documents.BaseRollTable.md#canusermodify)

### clone

* clone(  
  Â Â Â Â data?: object,  
  Â Â Â Â context?: [\_DataModelConstructionOptions](../interfaces/foundry.abstract.types._DataModelConstructionOptions.md) & Pick<  
  Â Â Â Â Â Â Â Â [DataModelValidationOptions](../interfaces/foundry.abstract.types.DataModelValidationOptions.md),  
  Â Â Â Â Â Â Â Â "dropInvalidEmbedded"  
  Â Â Â Â Â Â Â Â | "fallback"  
  Â Â Â Â Â Â Â Â | "strict",  
  Â Â Â Â > & [\_DocumentConstructionContext](../interfaces/foundry.abstract.types._DocumentConstructionContext.md) & [DocumentCloneOptions](../interfaces/foundry.abstract.types.DocumentCloneOptions.md),  
  ):  
  Â Â Â Â | [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>  
  Â Â Â Â | Promise<[Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>>

  Clone a document, creating a new document by combining current data with provided overrides.
  The cloned document is ephemeral and not yet saved to the database.

  #### Parameters

  + `Optional`data: object = {}

    Additional data which overrides current document data at the time of creation
  + `Optional`context: [\_DataModelConstructionOptions](../interfaces/foundry.abstract.types._DataModelConstructionOptions.md) & Pick<  
    Â Â Â Â [DataModelValidationOptions](../interfaces/foundry.abstract.types.DataModelValidationOptions.md),  
    Â Â Â Â "dropInvalidEmbedded"  
    Â Â Â Â | "fallback"  
    Â Â Â Â | "strict",  
    > & [\_DocumentConstructionContext](../interfaces/foundry.abstract.types._DocumentConstructionContext.md) & [DocumentCloneOptions](../interfaces/foundry.abstract.types.DocumentCloneOptions.md) = {}

    Additional context options passed to the create method

  #### Returns Â Â Â Â | [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)> Â Â Â Â | Promise<[Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>>

  The cloned Document instance

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.md).[clone](foundry.documents.BaseRollTable.md#clone)

### createEmbeddedDocuments

* createEmbeddedDocuments(  
  Â Â Â Â embeddedName: string,  
  Â Â Â Â data?: object[],  
  Â Â Â Â operation?: [DatabaseCreateOperation](../interfaces/foundry.abstract.types.DatabaseCreateOperation.md),  
  ): Promise<[Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>[]>

  Create multiple embedded Document instances within this parent Document using provided input data.

  #### Parameters

  + embeddedName: string

    The name of the embedded Document type
  + data: object[] = []

    An array of data objects used to create multiple documents
  + `Optional`operation: [DatabaseCreateOperation](../interfaces/foundry.abstract.types.DatabaseCreateOperation.md) = {}

    Parameters of the database creation workflow

  #### Returns Promise<[Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>[]>

  An array of created Document instances

  #### See

  [Document.createDocuments](foundry.abstract.Document.md#createdocuments)

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.md).[createEmbeddedDocuments](foundry.documents.BaseRollTable.md#createembeddeddocuments)

### delete

* delete(  
  Â Â Â Â operation?: Partial<Omit<[DatabaseDeleteOperation](../interfaces/foundry.abstract.types.DatabaseDeleteOperation.md), "ids" | "deleteAll">>,  
  ): Promise<[Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)> | undefined>

  Delete this Document, removing it from the database.

  #### Parameters

  + `Optional`operation: Partial<Omit<[DatabaseDeleteOperation](../interfaces/foundry.abstract.types.DatabaseDeleteOperation.md), "ids" | "deleteAll">> = {}

    Parameters of the deletion
    operation

  #### Returns Promise<[Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)> | undefined>

  The deleted Document instance, or undefined if not deleted

  #### See

  [Document.deleteDocuments](foundry.abstract.Document.md#deletedocuments)

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.md).[delete](foundry.documents.BaseRollTable.md#delete)

### deleteEmbeddedDocuments

* deleteEmbeddedDocuments(  
  Â Â Â Â embeddedName: string,  
  Â Â Â Â ids: string[],  
  Â Â Â Â operation?: [DatabaseDeleteOperation](../interfaces/foundry.abstract.types.DatabaseDeleteOperation.md),  
  ): Promise<[Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>[]>

  Delete multiple embedded Document instances within a parent Document using provided string ids.

  #### Parameters

  + embeddedName: string

    The name of the embedded Document type
  + ids: string[]

    An array of string ids for each Document to be deleted
  + `Optional`operation: [DatabaseDeleteOperation](../interfaces/foundry.abstract.types.DatabaseDeleteOperation.md) = {}

    Parameters of the database deletion workflow

  #### Returns Promise<[Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>[]>

  An array of deleted Document instances

  #### See

  [Document.deleteDocuments](foundry.abstract.Document.md#deletedocuments)

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.md).[deleteEmbeddedDocuments](foundry.documents.BaseRollTable.md#deleteembeddeddocuments)

### draw

* draw(  
  Â Â Â Â options?: {  
  Â Â Â Â Â Â Â Â displayChat?: boolean;  
  Â Â Â Â Â Â Â Â messageMode?: string;  
  Â Â Â Â Â Â Â Â recursive?: boolean;  
  Â Â Â Â Â Â Â Â results?: [documents](../modules/foundry.documents.md).[TableResult](foundry.documents.TableResult.md)[];  
  Â Â Â Â Â Â Â Â roll?: [Roll](foundry.dice.Roll.md);  
  Â Â Â Â },  
  ): Promise<{ RollTableDraw: any }>

  Draw a result from the RollTable based on the table formula or a provided Roll instance

  #### Parameters

  + `Optional`options: {  
    Â Â Â Â displayChat?: boolean;  
    Â Â Â Â messageMode?: string;  
    Â Â Â Â recursive?: boolean;  
    Â Â Â Â results?: [documents](../modules/foundry.documents.md).[TableResult](foundry.documents.TableResult.md)[];  
    Â Â Â Â roll?: [Roll](foundry.dice.Roll.md);  
    } = {}

    Optional arguments which customize the draw behavior

    - ##### `Optional`displayChat?: boolean

      Whether to automatically display the results in chat
    - ##### `Optional`messageMode?: string

      A chat message visibility mode to apply to the resulting message
    - ##### `Optional`recursive?: boolean

      Allow drawing recursively from inner RollTable results
    - ##### `Optional`results?: [documents](../modules/foundry.documents.md).[TableResult](foundry.documents.TableResult.md)[]

      One or more table results which have been drawn
    - ##### `Optional`roll?: [Roll](foundry.dice.Roll.md)

      An existing Roll instance to use for drawing from the table

  #### Returns Promise<{ RollTableDraw: any }>

  A Promise which resolves to an object containing the executed roll and the
  produced results.

### drawMany

* drawMany(  
  Â Â Â Â number: number,  
  Â Â Â Â options?: {  
  Â Â Â Â Â Â Â Â displayChat?: boolean;  
  Â Â Â Â Â Â Â Â messageMode?: string;  
  Â Â Â Â Â Â Â Â recursive?: boolean;  
  Â Â Â Â Â Â Â Â roll?: [Roll](foundry.dice.Roll.md);  
  Â Â Â Â },  
  ): Promise<{ RollTableDraw: any }>

  Draw multiple results from a RollTable, constructing a final synthetic Roll as a dice pool of inner rolls.

  #### Parameters

  + number: number

    The number of results to draw
  + `Optional`options: {  
    Â Â Â Â displayChat?: boolean;  
    Â Â Â Â messageMode?: string;  
    Â Â Â Â recursive?: boolean;  
    Â Â Â Â roll?: [Roll](foundry.dice.Roll.md);  
    } = {}

    Optional arguments which customize the draw

    - ##### `Optional`displayChat?: boolean

      Automatically display the drawn results in chat? Default is true
    - ##### `Optional`messageMode?: string

      A chat message visibility mode to apply to the resulting message
    - ##### `Optional`recursive?: boolean

      Allow drawing recursively from inner RollTable results
    - ##### `Optional`roll?: [Roll](foundry.dice.Roll.md)

      An optional pre-configured Roll instance which defines the dice
      roll to use

  #### Returns Promise<{ RollTableDraw: any }>

  The drawn results

### getEmbeddedCollection

* getEmbeddedCollection(  
  Â Â Â Â embeddedName: string,  
  ): [Collection](foundry.utils.Collection.md)<string, [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>>

  Obtain a reference to the Array of source data within the data object for a certain embedded Document name

  #### Parameters

  + embeddedName: string

    The name of the embedded Document type

  #### Returns [Collection](foundry.utils.Collection.md)<string, [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>>

  The Collection instance of embedded Documents of the requested type

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.md).[getEmbeddedCollection](foundry.documents.BaseRollTable.md#getembeddedcollection)

### getEmbeddedDocument

* getEmbeddedDocument(  
  Â Â Â Â embeddedName: string,  
  Â Â Â Â id: string,  
  Â Â Â Â options?: { invalid?: boolean; strict?: boolean },  
  ): [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>

  Get an embedded document by its id from a named collection in the parent document.

  #### Parameters

  + embeddedName: string

    The name of the embedded Document type
  + id: string

    The id of the child document to retrieve
  + `Optional`options: { invalid?: boolean; strict?: boolean } = {}

    Additional options which modify how embedded documents are retrieved

    - ##### `Optional`invalid?: boolean

      Allow retrieving an invalid Embedded Document.
    - ##### `Optional`strict?: boolean

      Throw an Error if the requested id does not exist. See Collection#get

  #### Returns [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>

  The retrieved embedded Document instance, or undefined

  #### Throws

  If the embedded collection does not exist, or if strict is true and the Embedded Document could not be
  found.

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.md).[getEmbeddedDocument](foundry.documents.BaseRollTable.md#getembeddeddocument)

### getFieldForProperty

* getFieldForProperty(key: string | string[]): [DataField](foundry.data.fields.DataField.md) | undefined

  Traverse the data model instance, obtaining the DataField definition for a field of a particular property.

  #### Parameters

  + key: string | string[]

    A property key like ["abilities", "strength"] or "abilities.strength"

  #### Returns [DataField](foundry.data.fields.DataField.md) | undefined

  The corresponding DataField definition for that field, or undefined

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.md).[getFieldForProperty](foundry.documents.BaseRollTable.md#getfieldforproperty)

### getFlag

* getFlag(scope: string, key: string): any

  Get the value of a "flag" for this document
  See the setFlag method for more details on flags

  #### Parameters

  + scope: string

    The flag scope which namespaces the key
  + key: string

    The flag key

  #### Returns any

  The flag value

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.md).[getFlag](foundry.documents.BaseRollTable.md#getflag)

### getResultsForRoll

* getResultsForRoll(value: number): [documents](../modules/foundry.documents.md).[TableResult](foundry.documents.TableResult.md)[]

  Get an Array of valid results for a given rolled total

  #### Parameters

  + value: number

    The rolled value

  #### Returns [documents](../modules/foundry.documents.md).[TableResult](foundry.documents.TableResult.md)[]

  An Array of results

### getUserLevel

* getUserLevel(user?: [BaseUser](foundry.documents.BaseUser.md)): [DocumentOwnershipNumber](../types/CONST.DocumentOwnershipNumber.md)

  Get the explicit permission level that a User has over this Document, a value in CONST.DOCUMENT\_OWNERSHIP\_LEVELS.
  Compendium content ignores the ownership field in favor of User role-based ownership. Otherwise, Documents use
  granular per-User ownership definitions and Embedded Documents defer to their parent ownership.

  This method returns the value recorded in Document ownership, regardless of the User's role, for example a
  GAMEMASTER user might still return a result of NONE if they are not explicitly denoted as having a level.

  To test whether a user has a certain capability over the document, testUserPermission should be used.

  #### Parameters

  + `Optional`user: [BaseUser](foundry.documents.BaseUser.md)

    The User being tested

  #### Returns [DocumentOwnershipNumber](../types/CONST.DocumentOwnershipNumber.md)

  A numeric permission level from [CONST.DOCUMENT\_OWNERSHIP\_LEVELS](../variables/CONST.DOCUMENT_OWNERSHIP_LEVELS.md)

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.md).[getUserLevel](foundry.documents.BaseRollTable.md#getuserlevel)

### migrateSystemData

* migrateSystemData(): object

  For Documents which include game system data, migrate the system data object to conform to its latest data model.
  The data model is defined by the template.json specification included by the game system.

  #### Returns object

  The migrated system data object

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.md).[migrateSystemData](foundry.documents.BaseRollTable.md#migratesystemdata)

### normalize

* normalize(options?: { save?: boolean }): Promise<[documents](../modules/foundry.documents.md).RollTable>

  Normalize the probabilities of rolling each item in the RollTable based on their assigned weights

  #### Parameters

  + `Optional`options: { save?: boolean } = {}
    - ##### `Optional`save?: boolean

      Save the clone to the database? If false, an updated clone is returned.

  #### Returns Promise<[documents](../modules/foundry.documents.md).RollTable>

### onEmbed

* onEmbed(element: any): void

  #### Parameters

  + element: any

  #### Returns void

### prepareDerivedData

* prepareDerivedData(): void

  #### Returns void

  #### Inherit Doc

### reset

* reset(): void

  Reset the state of this data instance back to mirror the contained source data, erasing any changes.

  #### Returns void

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.md).[reset](foundry.documents.BaseRollTable.md#reset)

### resetResults

* resetResults(): Promise<[documents](../modules/foundry.documents.md).RollTable>

  Reset the state of the RollTable to return any drawn items to the table

  #### Returns Promise<[documents](../modules/foundry.documents.md).RollTable>

### roll

* roll(  
  Â Â Â Â options?: {  
  Â Â Â Â Â Â Â Â \_depth?: number;  
  Â Â Â Â Â Â Â Â normalize?: boolean;  
  Â Â Â Â Â Â Â Â recursive?: boolean;  
  Â Â Â Â Â Â Â Â roll?: [Roll](foundry.dice.Roll.md);  
  Â Â Â Â },  
  ): Promise<[RollTableDraw](../interfaces/foundry.documents.types.RollTableDraw.md)>

  Evaluate a RollTable by rolling its formula and retrieving a drawn result.

  Note that this function only performs the roll and identifies the result, the RollTable#draw function should be
  called to formalize the draw from the table.

  #### Parameters

  + `Optional`options: { \_depth?: number; normalize?: boolean; recursive?: boolean; roll?: [Roll](foundry.dice.Roll.md) } = {}

    Options which modify rolling behavior

    - ##### `Optional`\_depth?: number

      An internal flag used to track recursion depth
    - ##### `Optional`normalize?: boolean

      Normalize the table before rolling.
    - ##### `Optional`recursive?: boolean

      If a RollTable document is drawn as a result, recursively roll it
    - ##### `Optional`roll?: [Roll](foundry.dice.Roll.md)

      An alternative dice Roll to use instead of the default table formula

  #### Returns Promise<[RollTableDraw](../interfaces/foundry.documents.types.RollTableDraw.md)>

  The Roll and results drawn by that Roll

  #### Example: Draw results using the default table formula

  ```
  const defaultResults = await table.roll();
  Copy
  ```

  #### Example: Draw results using a custom roll formula

  ```
  const roll = new Roll("1d20 + @abilities.wis.mod", actor.getRollData());  
  const customResults = await table.roll({roll});
  Copy
  ```

### setFlag

* setFlag(  
  Â Â Â Â scope: string,  
  Â Â Â Â key: string,  
  Â Â Â Â value: any,  
  ): Promise<[Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>>

  Assign a "flag" to this document.
  Flags represent key-value type data which can be used to store flexible or arbitrary data required by either
  the core software, game systems, or user-created modules.

  Each flag should be set using a scope which provides a namespace for the flag to help prevent collisions.

  Flags set by the core software use the "core" scope.
  Flags set by game systems or modules should use the canonical name attribute for the module
  Flags set by an individual world should "world" as the scope.

  Flag values can assume almost any data type. Setting a flag value to null will delete that flag.

  #### Parameters

  + scope: string

    The flag scope which namespaces the key
  + key: string

    The flag key
  + value: any

    The flag value

  #### Returns Promise<[Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>>

  A Promise resolving to the updated document

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.md).[setFlag](foundry.documents.BaseRollTable.md#setflag)

### testUserPermission

* testUserPermission(  
  Â Â Â Â user: [BaseUser](foundry.documents.BaseUser.md),  
  Â Â Â Â permission: [DocumentOwnershipLevel](../types/CONST.DocumentOwnershipLevel.md),  
  Â Â Â Â options?: { exact?: boolean },  
  ): boolean

  Test whether a certain User has a requested permission level (or greater) over the Document

  #### Parameters

  + user: [BaseUser](foundry.documents.BaseUser.md)

    The User being tested
  + permission: [DocumentOwnershipLevel](../types/CONST.DocumentOwnershipLevel.md)

    The permission level from DOCUMENT\_OWNERSHIP\_LEVELS to test
  + options: { exact?: boolean } = {}

    Additional options involved in the permission test

    - ##### `Optional`exact?: boolean

      Require the exact permission level requested?

  #### Returns boolean

  Does the user have this permission level over the Document?

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.md).[testUserPermission](foundry.documents.BaseRollTable.md#testuserpermission)

### toCompendium

* toCompendium(pack: any, options?: {}): any

  #### Parameters

  + pack: any
  + options: {} = {}

  #### Returns any

### toJSON

* toJSON(): object

  Extract the source data for the DataModel into a simple object format that can be serialized.

  #### Returns object

  The document source data expressed as a plain object

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.md).[toJSON](foundry.documents.BaseRollTable.md#tojson)

### toMessage

* toMessage(  
  Â Â Â Â results: [documents](../modules/foundry.documents.md).[TableResult](foundry.documents.TableResult.md)[],  
  Â Â Â Â options?: { messageData?: object; messageOptions?: object; roll?: [Roll](foundry.dice.Roll.md) },  
  ): Promise<  
  Â Â Â Â | [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>  
  Â Â Â Â | [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>[]  
  Â Â Â Â | undefined,  
  >

  Display a result drawn from a RollTable in the Chat Log along.
  Optionally also display the Roll which produced the result and configure aspects of the displayed messages.

  #### Parameters

  + results: [documents](../modules/foundry.documents.md).[TableResult](foundry.documents.TableResult.md)[]

    An Array of one or more TableResult Documents which were drawn and should
    be displayed.
  + `Optional`options: { messageData?: object; messageOptions?: object; roll?: [Roll](foundry.dice.Roll.md) } = {}

    Additional options which modify message creation

    - ##### `Optional`messageData?: object

      Additional data which customizes the created messages
    - ##### `Optional`messageOptions?: object

      Additional options which customize the created messages
    - ##### `Optional`roll?: [Roll](foundry.dice.Roll.md)

      An optional Roll instance which produced the drawn results

  #### Returns Promise< Â Â Â Â | [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)> Â Â Â Â | [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>[] Â Â Â Â | undefined, >

### toObject

* toObject(source?: boolean): any

  Copy and transform the DataModel into a plain object.
  Draw the values of the extracted object from the data source (by default) otherwise from its transformed values.

  #### Parameters

  + source: boolean = true

    Draw values from the underlying data source rather than transformed values

  #### Returns any

  The extracted primitive object

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.md).[toObject](foundry.documents.BaseRollTable.md#toobject)

### traverseEmbeddedDocuments

* traverseEmbeddedDocuments(\_parentPath?: string): Generator<any, void, any>

  Iterate over all embedded Documents that are hierarchical children of this Document.

  #### Parameters

  + `Optional`\_parentPath: string

    A parent field path already traversed

  #### Returns Generator<any, void, any>

  #### Yields

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.md).[traverseEmbeddedDocuments](foundry.documents.BaseRollTable.md#traverseembeddeddocuments)

### unsetFlag

* unsetFlag(  
  Â Â Â Â scope: string,  
  Â Â Â Â key: string,  
  ): Promise<[Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>>

  Remove a flag assigned to the document.

  #### Parameters

  + scope: string

    The flag scope which namespaces the key
  + key: string

    The flag key

  #### Returns Promise<[Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>>

  The updated document instance

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.md).[unsetFlag](foundry.documents.BaseRollTable.md#unsetflag)

### update

* update(  
  Â Â Â Â data?: object,  
  Â Â Â Â operation?: Partial<Omit<[DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.md), "updates">>,  
  ): Promise<[Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)> | undefined>

  Update this Document using incremental data, saving it to the database.

  #### Parameters

  + `Optional`data: object = {}

    Differential update data which modifies the existing values of this document
  + `Optional`operation: Partial<Omit<[DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.md), "updates">> = {}

    Parameters of the update operation

  #### Returns Promise<[Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)> | undefined>

  The updated Document instance, or undefined not updated

  #### See

  [Document.updateDocuments](foundry.abstract.Document.md#updatedocuments)

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.md).[update](foundry.documents.BaseRollTable.md#update)

### updateEmbeddedDocuments

* updateEmbeddedDocuments(  
  Â Â Â Â embeddedName: string,  
  Â Â Â Â updates?: object[],  
  Â Â Â Â operation?: [DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.md),  
  ): Promise<[Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>[]>

  Update multiple embedded Document instances within a parent Document using provided differential data.

  #### Parameters

  + embeddedName: string

    The name of the embedded Document type
  + updates: object[] = []

    An array of differential data objects, each used to update a
    single Document
  + `Optional`operation: [DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.md) = {}

    Parameters of the database update workflow

  #### Returns Promise<[Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>[]>

  An array of updated Document instances

  #### See

  [Document.updateDocuments](foundry.abstract.Document.md#updatedocuments)

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.md).[updateEmbeddedDocuments](foundry.documents.BaseRollTable.md#updateembeddeddocuments)

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

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.md).[updateSource](foundry.documents.BaseRollTable.md#updatesource)

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

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.md).[validate](foundry.documents.BaseRollTable.md#validate)

### `Protected`\_buildEmbedHTML

* \_buildEmbedHTML(  
  Â Â Â Â config: [RollTableHTMLEmbedConfig](../types/foundry.types.RollTableHTMLEmbedConfig.md),  
  Â Â Â Â options?: any,  
  ): Promise<HTMLElement | null>

  `Protected`

  Create embedded roll table markup.

  #### Parameters

  + config: [RollTableHTMLEmbedConfig](../types/foundry.types.RollTableHTMLEmbedConfig.md)

    Configuration for embedding behavior.
  + `Optional`options: any = {}

    The original enrichment options for cases where the Document embed content
    also contains text that must be enriched.

  #### Returns Promise<HTMLElement | null>

  #### Example: Embed the content of a Roll Table as a figure.

  `@Embed[RollTable.kRfycm1iY3XCvP8c]`
  becomes

  ```
  <figure class="content-embed" data-content-embed data-uuid="RollTable.kRfycm1iY3XCvP8c" data-id="kRfycm1iY3XCvP8c">  
    <table class="roll-table-embed">  
      <thead>  
        <tr>  
          <th>Roll</th>  
          <th>Result</th>  
        </tr>  
      </thead>  
      <tbody>  
        <tr>  
          <td>1&mdash;10</td>  
          <td>  
            <a class="inline-roll roll" data-formula="1d6">  
              <i class="fa-solid fa-dice-d20"></i>  
              1d6  
            </a>  
            Orcs attack!  
          </td>  
        </tr>  
        <tr>  
          <td>11&mdash;20</td>  
          <td>No encounter</td>  
        </tr>  
      </tbody>  
    </table>  
    <figcaption>  
      <div class="embed-caption">  
        <p>This is the Roll Table description.</p>  
      </div>  
      <cite>  
        <a class="content-link" data-link data-uuid="RollTable.kRfycm1iY3XCvP8c" data-id="kRfycm1iY3XCvP8c"  
           data-type="RollTable" data-tooltip="Rollable Table">  
          <i class="fa-solid fa-table-list"></i>  
          Rollable Table  
      </cite>  
    </figcaption>  
  </figure>
  Copy
  ```

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

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.md).[\_getInnerModel](foundry.documents.BaseRollTable.md#_getinnermodel)

### `Protected`\_initializeSource

* \_initializeSource(  
  Â Â Â Â data: object | [DataModel](foundry.abstract.DataModel.md)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md)>,  
  Â Â Â Â options?: [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md),  
  ): object

  `Protected`

  Initialize the source data for a new DataModel instance.
  One-time migrations and initial cleaning operations are applied to the source data.

  #### Parameters

  + data: object | [DataModel](foundry.abstract.DataModel.md)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md)>

    The candidate source data from which the model will be constructed
  + `Optional`options: [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md) = {}

    Options provided to the model constructor

  #### Returns object

  Migrated and cleaned source data which will be stored to the model instance,
  which is the same object as the `data` argument

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.md).[\_initializeSource](foundry.documents.BaseRollTable.md#_initializesource)

### `Protected`\_onClickEmbedAction

* \_onClickEmbedAction(event: PointerEvent, action: string): Promise<void>

  `Protected`

  Handle a roll from within embedded content.

  #### Parameters

  + event: PointerEvent

    The originating event
  + action: string

    The named action that was clicked

  #### Returns Promise<void>

### `Protected`\_onCreate

* \_onCreate(data: object, options: object, userId: string): void

  `Protected`

  Post-process a creation operation for a single Document instance. Post-operation events occur for all connected
  clients.

  #### Parameters

  + data: object

    The initial data object provided to the document creation request
  + options: object

    Additional options which modify the creation request
  + userId: string

    The id of the User requesting the document update

  #### Returns void

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.md).[\_onCreate](foundry.documents.BaseRollTable.md#_oncreate)

### `Protected`\_onDelete

* \_onDelete(options: object, userId: string): void

  `Protected`

  Post-process a deletion operation for a single Document instance. Post-operation events occur for all connected
  clients.

  #### Parameters

  + options: object

    Additional options which modify the deletion request
  + userId: string

    The id of the User requesting the document update

  #### Returns void

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.md).[\_onDelete](foundry.documents.BaseRollTable.md#_ondelete)

### `Protected`\_onUpdate

* \_onUpdate(changed: object, options: object, userId: string): void

  `Protected`

  Post-process an update operation for a single Document instance. Post-operation events occur for all connected
  clients.

  #### Parameters

  + changed: object

    The differential data that was changed relative to the documents prior values
  + options: object

    Additional options which modify the update request
  + userId: string

    The id of the User requesting the document update

  #### Returns void

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.md).[\_onUpdate](foundry.documents.BaseRollTable.md#_onupdate)

### `Protected`\_preCreate

* \_preCreate(  
  Â Â Â Â data: object,  
  Â Â Â Â options: object,  
  Â Â Â Â user: [BaseUser](foundry.documents.BaseUser.md),  
  ): Promise<boolean | void>

  `Protected`

  Pre-process a creation operation for a single Document instance. Pre-operation events only occur for the client
  which requested the operation.

  Modifications to the pending Document instance must be performed using [updateSource](#updatesource).

  #### Parameters

  + data: object

    The initial data object provided to the document creation request
  + options: object

    Additional options which modify the creation request
  + user: [BaseUser](foundry.documents.BaseUser.md)

    The User requesting the document creation

  #### Returns Promise<boolean | void>

  Return false to exclude this Document from the creation operation

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.md).[\_preCreate](foundry.documents.BaseRollTable.md#_precreate)

### `Protected`\_preDelete

* \_preDelete(options: object, user: [BaseUser](foundry.documents.BaseUser.md)): Promise<boolean | void>

  `Protected`

  Pre-process a deletion operation for a single Document instance. Pre-operation events only occur for the client
  which requested the operation.

  #### Parameters

  + options: object

    Additional options which modify the deletion request
  + user: [BaseUser](foundry.documents.BaseUser.md)

    The User requesting the document deletion

  #### Returns Promise<boolean | void>

  A return value of false indicates the deletion operation should be cancelled.

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.md).[\_preDelete](foundry.documents.BaseRollTable.md#_predelete)

### `Protected`\_preUpdate

* \_preUpdate(  
  Â Â Â Â changes: object,  
  Â Â Â Â options: object,  
  Â Â Â Â user: [BaseUser](foundry.documents.BaseUser.md),  
  ): Promise<boolean | void>

  `Protected`

  Pre-process an update operation for a single Document instance. Pre-operation events only occur for the client
  which requested the operation.

  #### Parameters

  + changes: object

    The candidate changes to the Document
  + options: object

    Additional options which modify the update request
  + user: [BaseUser](foundry.documents.BaseUser.md)

    The User requesting the document update

  #### Returns Promise<boolean | void>

  A return value of false indicates the update operation should be cancelled.

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.md).[\_preUpdate](foundry.documents.BaseRollTable.md#_preupdate)

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

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.md).[\_preUpdateSource](foundry.documents.BaseRollTable.md#_preupdatesource)

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

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.md).[\_updateCommit](foundry.documents.BaseRollTable.md#_updatecommit)

### `Static`\_addDataFieldMigration

* \_addDataFieldMigration(  
  Â Â Â Â data: object,  
  Â Â Â Â oldKey: string,  
  Â Â Â Â newKey: string,  
  Â Â Â Â apply?: (data: object) => any,  
  ): boolean

  `Internal`

  Define a simple migration from one field name to another.
  The value of the data can be transformed during the migration by an optional application function.

  #### Parameters

  + data: object

    The data object being migrated
  + oldKey: string

    The old field name
  + newKey: string

    The new field name
  + `Optional`apply: (data: object) => any

    An application function, otherwise the old value is applied

  #### Returns boolean

  Whether a migration was applied.

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.md).[\_addDataFieldMigration](foundry.documents.BaseRollTable.md#_adddatafieldmigration)

### `Static`\_addDataFieldShim

* \_addDataFieldShim(  
  Â Â Â Â data: object,  
  Â Â Â Â oldKey: string,  
  Â Â Â Â newKey: string,  
  Â Â Â Â options?: { value?: any; warning?: string },  
  ): void

  `Internal`

  A reusable helper for adding a migration shim
  The value of the data can be transformed during the migration by an optional application function.

  #### Parameters

  + data: object

    The data object being shimmed
  + oldKey: string

    The old field name
  + newKey: string

    The new field name
  + `Optional`options: { value?: any; warning?: string } = {}

    Options passed to [foundry.utils.logCompatibilityWarning](../functions/foundry.utils.logCompatibilityWarning.md)

    - ##### `Optional`value?: any

      The value of the shim
    - ##### `Optional`warning?: string

      The deprecation message

  #### Returns void

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.md).[\_addDataFieldShim](foundry.documents.BaseRollTable.md#_adddatafieldshim)

### `Static`\_addDataFieldShims

* \_addDataFieldShims(  
  Â Â Â Â data: object,  
  Â Â Â Â shims: { [oldKey: string]: string },  
  Â Â Â Â options?: { value?: any; warning?: string },  
  ): void

  `Internal`

  A reusable helper for adding migration shims.

  #### Parameters

  + data: object

    The data object being shimmed
  + shims: { [oldKey: string]: string }

    The mapping of old keys to new keys
  + `Optional`options: { value?: any; warning?: string }

    Options passed to [foundry.utils.logCompatibilityWarning](../functions/foundry.utils.logCompatibilityWarning.md)

    - ##### `Optional`value?: any

      The value of the shim
    - ##### `Optional`warning?: string

      The deprecation message

  #### Returns void

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.md).[\_addDataFieldShims](foundry.documents.BaseRollTable.md#_adddatafieldshims)

### `Static`\_clearFieldsRecursively

* \_clearFieldsRecursively(  
  Â Â Â Â data: object,  
  Â Â Â Â fieldNames: string[],  
  Â Â Â Â options?: { callback?: [RecursiveFieldClearCallback](../types/foundry.abstract.types.RecursiveFieldClearCallback.md) },  
  ): void

  `Internal`

  Clear the fields from the given Document data recursively.

  #### Parameters

  + data: object

    The (partial) Document data
  + fieldNames: string[]

    The fields that are cleared
  + `Optional`options: { callback?: [RecursiveFieldClearCallback](../types/foundry.abstract.types.RecursiveFieldClearCallback.md) } = {}
    - ##### `Optional`callback?: [RecursiveFieldClearCallback](../types/foundry.abstract.types.RecursiveFieldClearCallback.md)

      A callback that is invoked on each field in order to clear
      it.

  #### Returns void

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.md).[\_clearFieldsRecursively](foundry.documents.BaseRollTable.md#_clearfieldsrecursively)

### `Static`\_logDataFieldMigration

* \_logDataFieldMigration(oldKey: string, newKey: string, options?: object): void

  `Internal`

  Log a compatbility warning for the data field migration.

  #### Parameters

  + oldKey: string

    The old field name
  + newKey: string

    The new field name
  + `Optional`options: object = {}

    Options passed to [foundry.utils.logCompatibilityWarning](../functions/foundry.utils.logCompatibilityWarning.md)

  #### Returns void

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.md).[\_logDataFieldMigration](foundry.documents.BaseRollTable.md#_logdatafieldmigration)

### `Static`\_preCleanData

* \_preCleanData(data: any, options: any, \_state: any): void

  Apply preliminary model-specific cleaning rules or alter cleaning options or initial state.
  Subclass models may implement this function to configure the cleaning workflow.
  Any mutations to data, options, or \_state parameters are performed inplace.

  #### Parameters

  + data: any

    The provided input data for cleaning
  + options: any

    Options which define how cleaning should be performed
  + \_state: any

    The data cleaning state

  #### Returns void

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.md).[\_preCleanData](foundry.documents.BaseRollTable.md#_precleandata)

### `Static`canUserCreate

* canUserCreate(user: [BaseUser](foundry.documents.BaseUser.md)): boolean

  Test whether a given User has sufficient permissions to create Documents of this type in general. This does not
  guarantee that the User is able to create all Documents of this type, as certain document-specific requirements
  may also be present.

  Generally speaking, this method is used to verify whether a User should be presented with the option to create
  Documents of this type in the UI.

  #### Parameters

  + user: [BaseUser](foundry.documents.BaseUser.md)

    The User being tested

  #### Returns boolean

  Does the User have a sufficient role to create?

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.md).[canUserCreate](foundry.documents.BaseRollTable.md#canusercreate)

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

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.md).[cleanData](foundry.documents.BaseRollTable.md#cleandata)

### `Static`create

* create(  
  Â Â Â Â data?:  
  Â Â Â Â Â Â Â Â | object  
  Â Â Â Â Â Â Â Â | [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>  
  Â Â Â Â Â Â Â Â | (object | [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>)[],  
  Â Â Â Â operation?: Partial<Omit<[DatabaseCreateOperation](../interfaces/foundry.abstract.types.DatabaseCreateOperation.md), "data">>,  
  ): Promise<  
  Â Â Â Â | [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>  
  Â Â Â Â | [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>[]  
  Â Â Â Â | undefined,  
  >

  Create a new Document using provided input data, saving it to the database.

  #### Parameters

  + `Optional`data:   
    Â Â Â Â | object  
    Â Â Â Â | [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>  
    Â Â Â Â | (object | [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>)[] = {}

    Initial data used to create this Document, or a Document
    instance to persist.
  + `Optional`operation: Partial<Omit<[DatabaseCreateOperation](../interfaces/foundry.abstract.types.DatabaseCreateOperation.md), "data">> = {}

    Parameters of the creation operation

  #### Returns Promise< Â Â Â Â | [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)> Â Â Â Â | [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>[] Â Â Â Â | undefined, >

  The created Document instance(s)

  #### See

  [Document.createDocuments](foundry.abstract.Document.md#createdocuments)

  #### Example: Create a World-level Item

  ```
  const data = [{name: "Special Sword", type: "weapon"}];  
  const created = await Item.implementation.create(data);
  Copy
  ```

  #### Example: Create an Actor-owned Item

  ```
  const data = [{name: "Special Sword", type: "weapon"}];  
  const actor = game.actors.getName("My Hero");  
  const created = await Item.implementation.create(data, {parent: actor});
  Copy
  ```

  #### Example: Create an Item in a Compendium pack

  ```
  const data = [{name: "Special Sword", type: "weapon"}];  
  const created = await Item.implementation.create(data, {pack: "mymodule.mypack"});
  Copy
  ```

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.md).[create](foundry.documents.BaseRollTable.md#create)

### `Static`createDocuments

* createDocuments(  
  Â Â Â Â data?: (object | [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>)[],  
  Â Â Â Â operation?: Partial<Omit<[DatabaseCreateOperation](../interfaces/foundry.abstract.types.DatabaseCreateOperation.md), "data">>,  
  ): Promise<[Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>[]>

  Create multiple Documents using provided input data.
  Data is provided as an array of objects where each individual object becomes one new Document.

  #### Parameters

  + data: (object | [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>)[] = []

    An array of data objects or existing Documents to persist.
  + `Optional`operation: Partial<Omit<[DatabaseCreateOperation](../interfaces/foundry.abstract.types.DatabaseCreateOperation.md), "data">> = {}

    Parameters of the requested creation
    operation

  #### Returns Promise<[Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>[]>

  An array of created Document instances

  #### Example: Create a single Document

  ```
  const data = [{name: "New Actor", type: "character", img: "path/to/profile.jpg"}];  
  const created = await Actor.implementation.createDocuments(data);
  Copy
  ```

  #### Example: Create multiple Documents

  ```
  const data = [{name: "Tim", type: "npc"], [{name: "Tom", type: "npc"}];  
  const created = await Actor.implementation.createDocuments(data);
  Copy
  ```

  #### Example: Create multiple embedded Documents within a parent

  ```
  const actor = game.actors.getName("Tim");  
  const data = [{name: "Sword", type: "weapon"}, {name: "Breastplate", type: "equipment"}];  
  const created = await Item.implementation.createDocuments(data, {parent: actor});
  Copy
  ```

  #### Example: Create a Document within a Compendium pack

  ```
  const data = [{name: "Compendium Actor", type: "character", img: "path/to/profile.jpg"}];  
  const created = await Actor.implementation.createDocuments(data, {pack: "mymodule.mypack"});
  Copy
  ```

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.md).[createDocuments](foundry.documents.BaseRollTable.md#createdocuments)

### `Static`defineSchema

* defineSchema(): {  
  Â Â Â Â \_id: [DocumentIdField](foundry.data.fields.DocumentIdField.md);  
  Â Â Â Â \_stats: [DocumentStatsField](foundry.data.fields.DocumentStatsField.md);  
  Â Â Â Â description: [HTMLField](foundry.data.fields.HTMLField.md);  
  Â Â Â Â displayRoll: [BooleanField](foundry.data.fields.BooleanField.md);  
  Â Â Â Â flags: [DocumentFlagsField](foundry.data.fields.DocumentFlagsField.md);  
  Â Â Â Â folder: [ForeignDocumentField](foundry.data.fields.ForeignDocumentField.md);  
  Â Â Â Â formula: [StringField](foundry.data.fields.StringField.md);  
  Â Â Â Â img: [FilePathField](foundry.data.fields.FilePathField.md);  
  Â Â Â Â name: [StringField](foundry.data.fields.StringField.md);  
  Â Â Â Â ownership: [DocumentOwnershipField](foundry.data.fields.DocumentOwnershipField.md);  
  Â Â Â Â replacement: [BooleanField](foundry.data.fields.BooleanField.md);  
  Â Â Â Â results: [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.md);  
  Â Â Â Â sort: [IntegerSortField](foundry.data.fields.IntegerSortField.md);  
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

  #### Returns { Â Â Â Â \_id: [DocumentIdField](foundry.data.fields.DocumentIdField.md); Â Â Â Â \_stats: [DocumentStatsField](foundry.data.fields.DocumentStatsField.md); Â Â Â Â description: [HTMLField](foundry.data.fields.HTMLField.md); Â Â Â Â displayRoll: [BooleanField](foundry.data.fields.BooleanField.md); Â Â Â Â flags: [DocumentFlagsField](foundry.data.fields.DocumentFlagsField.md); Â Â Â Â folder: [ForeignDocumentField](foundry.data.fields.ForeignDocumentField.md); Â Â Â Â formula: [StringField](foundry.data.fields.StringField.md); Â Â Â Â img: [FilePathField](foundry.data.fields.FilePathField.md); Â Â Â Â name: [StringField](foundry.data.fields.StringField.md); Â Â Â Â ownership: [DocumentOwnershipField](foundry.data.fields.DocumentOwnershipField.md); Â Â Â Â replacement: [BooleanField](foundry.data.fields.BooleanField.md); Â Â Â Â results: [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.md); Â Â Â Â sort: [IntegerSortField](foundry.data.fields.IntegerSortField.md); }

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

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.md).[defineSchema](foundry.documents.BaseRollTable.md#defineschema)

### `Static`deleteDocuments

* deleteDocuments(  
  Â Â Â Â ids?: string[],  
  Â Â Â Â operation?: Partial<Omit<[DatabaseDeleteOperation](../interfaces/foundry.abstract.types.DatabaseDeleteOperation.md), "ids">>,  
  ): Promise<[Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>[]>

  Delete one or multiple existing Documents using an array of provided ids.
  Data is provided as an array of string ids for the documents to delete.

  #### Parameters

  + ids: string[] = []

    An array of string ids for the documents to be deleted
  + `Optional`operation: Partial<Omit<[DatabaseDeleteOperation](../interfaces/foundry.abstract.types.DatabaseDeleteOperation.md), "ids">> = {}

    Parameters of the database deletion
    operation

  #### Returns Promise<[Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>[]>

  An array of deleted Document instances

  #### Throws

  If an invalid operation is attempted.

  #### Example: Delete a single Document

  ```
  const tim = game.actors.getName("Tim");  
  const deleted = await Actor.implementation.deleteDocuments([tim.id]);
  Copy
  ```

  #### Example: Delete multiple Documents

  ```
  const tim = game.actors.getName("Tim");  
  const tom = game.actors.getName("Tom");  
  const deleted = await Actor.implementation.deleteDocuments([tim.id, tom.id]);
  Copy
  ```

  #### Example: Delete multiple embedded Documents within a parent

  ```
  const tim = game.actors.getName("Tim");  
  const sword = tim.items.getName("Sword");  
  const shield = tim.items.getName("Shield");  
  const deleted = await Item.implementation.deleteDocuments([sword.id, shield.id], parent: actor});
  Copy
  ```

  #### Example: Delete Documents within a Compendium pack

  ```
  const actor = await pack.getDocument(documentId);  
  const deleted = await Actor.implementation.deleteDocuments([actor.id], {pack: "mymodule.mypack"});
  Copy
  ```

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.md).[deleteDocuments](foundry.documents.BaseRollTable.md#deletedocuments)

### `Static`fromFolder

* fromFolder(folder: Folder, options?: object): Promise<[documents](../modules/foundry.documents.md).RollTable>

  Create a new RollTable document using all of the Documents from a specific Folder as new results.

  #### Parameters

  + folder: Folder

    The Folder document from which to create a roll table
  + options: object = {}

    Additional options passed to the RollTable.create method

  #### Returns Promise<[documents](../modules/foundry.documents.md).RollTable>

### `Static`fromJSON

* fromJSON(json: string): [DataModel](foundry.abstract.DataModel.md)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md)>

  Create a DataModel instance using a provided serialized JSON string.

  #### Parameters

  + json: string

    Serialized document data in string format

  #### Returns [DataModel](foundry.abstract.DataModel.md)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md)>

  A constructed data model instance

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.md).[fromJSON](foundry.documents.BaseRollTable.md#fromjson)

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

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.md).[fromSource](foundry.documents.BaseRollTable.md#fromsource)

### `Static`get

* get(  
  Â Â Â Â documentId: string,  
  Â Â Â Â operation?: [DatabaseGetOperation](../interfaces/foundry.abstract.types.DatabaseGetOperation.md),  
  ): [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)> | null

  Get a World-level Document of this type by its id.

  #### Parameters

  + documentId: string

    The Document ID
  + `Optional`operation: [DatabaseGetOperation](../interfaces/foundry.abstract.types.DatabaseGetOperation.md) = {}

    Parameters of the get operation

  #### Returns [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)> | null

  The retrieved Document, or null

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.md).[get](foundry.documents.BaseRollTable.md#get)

### `Static`getCollectionName

* getCollectionName(name: string): string | null

  A compatibility method that returns the appropriate name of an embedded collection within this Document.

  #### Parameters

  + name: string

    An existing collection name or a document name.

  #### Returns string | null

  The provided collection name if it exists, the first available collection for the
  document name provided, or null if no appropriate embedded collection could be found.

  #### Example: Passing an existing collection name.

  ```
  Actor.implementation.getCollectionName("items");  
  // returns "items"
  Copy
  ```

  #### Example: Passing a document name.

  ```
  Actor.implementation.getCollectionName("Item");  
  // returns "items"
  Copy
  ```

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.md).[getCollectionName](foundry.documents.BaseRollTable.md#getcollectionname)

### `Static`migrateData

* migrateData(source: any, options: any): object

  Migrate candidate source data for this DataModel which may require initial cleaning or transformations.

  #### Parameters

  + source: any

    Candidate source data for the module, before further cleaning
  + options: any

    Additional options for how the field is cleaned

  #### Returns object

  Migrated source data, ready for further cleaning

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.md).[migrateData](foundry.documents.BaseRollTable.md#migratedata)

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

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.md).[migrateDataSafe](foundry.documents.BaseRollTable.md#migratedatasafe)

### `Static`shimData

* shimData(source: any, options: any): object

  Take data which conforms to the current data schema and add backwards-compatible accessors to it in order to
  support older code which uses this data.

  #### Parameters

  + source: any

    Data which matches the current schema
  + options: any

    Additional shimming options

  #### Returns object

  Data with added backwards-compatible properties, which is the same object as
  the `data` argument

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.md).[shimData](foundry.documents.BaseRollTable.md#shimdata)

### `Static`updateDocuments

* updateDocuments(  
  Â Â Â Â updates?: object[],  
  Â Â Â Â operation?: Partial<Omit<[DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.md), "updates">>,  
  ): Promise<[Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>[]>

  Update multiple Document instances using provided differential data.
  Data is provided as an array of objects where each individual object updates one existing Document.

  #### Parameters

  + updates: object[] = []

    An array of differential data objects, each used to update a single Document
  + `Optional`operation: Partial<Omit<[DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.md), "updates">> = {}

    Parameters of the database update
    operation

  #### Returns Promise<[Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>[]>

  An array of updated Document instances

  #### Example: Update a single Document

  ```
  const updates = [{_id: "12ekjf43kj2312ds", name: "Timothy"}];  
  const updated = await Actor.implementation.updateDocuments(updates);
  Copy
  ```

  #### Example: Update multiple Documents

  ```
  const updates = [{_id: "12ekjf43kj2312ds", name: "Timothy"}, {_id: "kj549dk48k34jk34", name: "Thomas"}]};  
  const updated = await Actor.implementation.updateDocuments(updates);
  Copy
  ```

  #### Example: Update multiple embedded Documents within a parent

  ```
  const actor = game.actors.getName("Timothy");  
  const updates = [{_id: sword.id, name: "Magic Sword"}, {_id: shield.id, name: "Magic Shield"}];  
  const updated = await Item.implementation.updateDocuments(updates, {parent: actor});
  Copy
  ```

  #### Example: Update Documents within a Compendium pack

  ```
  const actor = await pack.getDocument(documentId);  
  const updated = await Actor.implementation.updateDocuments([{_id: actor.id, name: "New Name"}],  
    {pack: "mymodule.mypack"});
  Copy
  ```

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.md).[updateDocuments](foundry.documents.BaseRollTable.md#updatedocuments)

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

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.md).[validateJoint](foundry.documents.BaseRollTable.md#validatejoint)

### `Protected` `Static`\_cleanData

* \_cleanData(  
  Â Â Â Â data: object,  
  Â Â Â Â options: Readonly<[DataModelCleaningOptions](../interfaces/foundry.data.types.DataModelCleaningOptions.md)>,  
  Â Â Â Â \_state: [data](../modules/foundry.data.md).[types](../modules/foundry.data.types.md).[DataModelUpdateState](../interfaces/foundry.data.types.DataModelUpdateState.md),  
  ): object

  `Protected`

  Apply final custom model-specific cleaning rules after data schema fields are cleaned.
  Subclass models can implement this function as an ideal place to apply custom imputation or cleaning.
  Cleaning must be done in-place rather than returning a different object.

  #### Parameters

  + data: object

    The provided input data for cleaning
  + options: Readonly<[DataModelCleaningOptions](../interfaces/foundry.data.types.DataModelCleaningOptions.md)>

    Options which define how cleaning was performed
  + \_state: [data](../modules/foundry.data.md).[types](../modules/foundry.data.types.md).[DataModelUpdateState](../interfaces/foundry.data.types.DataModelUpdateState.md)

    The data cleaning state

  #### Returns object

  The original data object, with cleaning performed inplace

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.md).[\_cleanData](foundry.documents.BaseRollTable.md#_cleandata)

### `Protected` `Static`\_onCreateOperation

* \_onCreateOperation(  
  Â Â Â Â documents: [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>[],  
  Â Â Â Â operation: [DatabaseCreateOperation](../interfaces/foundry.abstract.types.DatabaseCreateOperation.md),  
  Â Â Â Â user: [BaseUser](foundry.documents.BaseUser.md),  
  ): Promise<void>

  `Protected`

  Post-process a creation operation, reacting to database changes which have occurred. Post-operation events occur
  for all connected clients.

  This batch-wise workflow occurs after individual [\_onCreate](#_oncreate) workflows.

  #### Parameters

  + documents: [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>[]

    The Document instances which were created
  + operation: [DatabaseCreateOperation](../interfaces/foundry.abstract.types.DatabaseCreateOperation.md)

    Parameters of the database creation operation
  + user: [BaseUser](foundry.documents.BaseUser.md)

    The User who performed the creation operation

  #### Returns Promise<void>

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.md).[\_onCreateOperation](foundry.documents.BaseRollTable.md#_oncreateoperation)

### `Protected` `Static`\_onDeleteOperation

* \_onDeleteOperation(  
  Â Â Â Â documents: [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>[],  
  Â Â Â Â operation: [DatabaseDeleteOperation](../interfaces/foundry.abstract.types.DatabaseDeleteOperation.md),  
  Â Â Â Â user: [BaseUser](foundry.documents.BaseUser.md),  
  ): Promise<void>

  `Protected`

  Post-process a deletion operation, reacting to database changes which have occurred. Post-operation events occur
  for all connected clients.

  This batch-wise workflow occurs after individual [\_onDelete](#_ondelete) workflows.

  #### Parameters

  + documents: [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>[]

    The Document instances which were deleted
  + operation: [DatabaseDeleteOperation](../interfaces/foundry.abstract.types.DatabaseDeleteOperation.md)

    Parameters of the database deletion operation
  + user: [BaseUser](foundry.documents.BaseUser.md)

    The User who performed the deletion operation

  #### Returns Promise<void>

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.md).[\_onDeleteOperation](foundry.documents.BaseRollTable.md#_ondeleteoperation)

### `Protected` `Static`\_onUpdateOperation

* \_onUpdateOperation(  
  Â Â Â Â documents: [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>[],  
  Â Â Â Â operation: [DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.md),  
  Â Â Â Â user: [BaseUser](foundry.documents.BaseUser.md),  
  ): Promise<void>

  `Protected`

  Post-process an update operation, reacting to database changes which have occurred. Post-operation events occur
  for all connected clients.

  This batch-wise workflow occurs after individual [\_onUpdate](#_onupdate) workflows.

  #### Parameters

  + documents: [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>[]

    The Document instances which were updated
  + operation: [DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.md)

    Parameters of the database update operation
  + user: [BaseUser](foundry.documents.BaseUser.md)

    The User who performed the update operation

  #### Returns Promise<void>

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.md).[\_onUpdateOperation](foundry.documents.BaseRollTable.md#_onupdateoperation)

### `Protected` `Static`\_preCreateOperation

* \_preCreateOperation(  
  Â Â Â Â documents: [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>[],  
  Â Â Â Â operation: [DatabaseCreateOperation](../interfaces/foundry.abstract.types.DatabaseCreateOperation.md),  
  Â Â Â Â user: [BaseUser](foundry.documents.BaseUser.md),  
  ): Promise<boolean | void>

  `Protected`

  Pre-process a creation operation, potentially altering its instructions or input data. Pre-operation events only
  occur for the client which requested the operation.

  This batch-wise workflow occurs after individual [\_preCreate](#_precreate) workflows and provides a final pre-flight check
  before a database operation occurs.

  Modifications to pending documents must mutate the documents array or alter individual document instances using
  [updateSource](#updatesource).

  #### Parameters

  + documents: [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>[]

    Pending document instances to be created
  + operation: [DatabaseCreateOperation](../interfaces/foundry.abstract.types.DatabaseCreateOperation.md)

    Parameters of the database creation operation
  + user: [BaseUser](foundry.documents.BaseUser.md)

    The User requesting the creation operation

  #### Returns Promise<boolean | void>

  Return false to cancel the creation operation entirely

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.md).[\_preCreateOperation](foundry.documents.BaseRollTable.md#_precreateoperation)

### `Protected` `Static`\_preDeleteOperation

* \_preDeleteOperation(  
  Â Â Â Â documents: [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>[],  
  Â Â Â Â operation: [DatabaseDeleteOperation](../interfaces/foundry.abstract.types.DatabaseDeleteOperation.md),  
  Â Â Â Â user: [BaseUser](foundry.documents.BaseUser.md),  
  ): Promise<boolean | void>

  `Protected`

  Pre-process a deletion operation, potentially altering its instructions or input data. Pre-operation events only
  occur for the client which requested the operation.

  This batch-wise workflow occurs after individual [\_preDelete](#_predelete) workflows and provides a final pre-flight check
  before a database operation occurs.

  Modifications to the requested deletions are performed by mutating the operation object.
  [updateSource](#updatesource).

  #### Parameters

  + documents: [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>[]

    Document instances to be deleted
  + operation: [DatabaseDeleteOperation](../interfaces/foundry.abstract.types.DatabaseDeleteOperation.md)

    Parameters of the database update operation
  + user: [BaseUser](foundry.documents.BaseUser.md)

    The User requesting the deletion operation

  #### Returns Promise<boolean | void>

  Return false to cancel the deletion operation entirely

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.md).[\_preDeleteOperation](foundry.documents.BaseRollTable.md#_predeleteoperation)

### `Protected` `Static`\_preUpdateOperation

* \_preUpdateOperation(  
  Â Â Â Â documents: [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>[],  
  Â Â Â Â operation: [DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.md),  
  Â Â Â Â user: [BaseUser](foundry.documents.BaseUser.md),  
  ): Promise<boolean | void>

  `Protected`

  Pre-process an update operation, potentially altering its instructions or input data. Pre-operation events only
  occur for the client which requested the operation.

  This batch-wise workflow occurs after individual [\_preUpdate](#_preupdate) workflows and provides a final pre-flight check
  before a database operation occurs.

  Modifications to the requested updates are performed by mutating the data array of the operation.

  #### Parameters

  + documents: [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>[]

    Document instances to be updated
  + operation: [DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.md)

    Parameters of the database update operation
  + user: [BaseUser](foundry.documents.BaseUser.md)

    The User requesting the update operation

  #### Returns Promise<boolean | void>

  Return false to cancel the update operation entirely

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.md).[\_preUpdateOperation](foundry.documents.BaseRollTable.md#_preupdateoperation)