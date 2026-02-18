---
title: "RollTable | Foundry Virtual Tabletop - API Documentation - Version 13"
url: "https://foundryvtt.com/api/classes/foundry.documents.RollTable.html"
category: "classes"
---

* [Foundry Virtual Tabletop - API Documentation - Version 13](../modules.html)
* [foundry](../modules/foundry.html)
* [documents](../modules/foundry.documents.html)
* [RollTable](foundry.documents.RollTable.html)

# Class RollTable

The client-side RollTable document which extends the common BaseRollTable model.

#### Mixes

ClientDocumentMixin

#### See

* [foundry.documents.collections.RollTables](foundry.documents.collections.RollTables.html): The world-level collection of RollTable documents
* [foundry.documents.TableResult](foundry.documents.TableResult.html): The embedded TableResult document
* [foundry.applications.sheets.RollTableSheet](foundry.applications.sheets.RollTableSheet.html): The RollTable sheet application

#### Hierarchy ([View Summary](../hierarchy.html#foundry.documents.RollTable))

* [BaseRollTable](foundry.documents.BaseRollTable.html)<this>
  + RollTable

##### Index

### Constructors

[constructor](foundry.documents.RollTable.html#constructor)

### Properties

[\_source](foundry.documents.RollTable.html#_source)
[parent](foundry.documents.RollTable.html#parent)
[\_schema](foundry.documents.RollTable.html#_schema)
[DEFAULT\_ICON](foundry.documents.RollTable.html#default_icon)
[LOCALIZATION\_PREFIXES](foundry.documents.RollTable.html#localization_prefixes)
[metadata](foundry.documents.RollTable.html#metadata)

### Accessors

[compendium](foundry.documents.RollTable.html#compendium)
[id](foundry.documents.RollTable.html#id)
[inCompendium](foundry.documents.RollTable.html#incompendium)
[invalid](foundry.documents.RollTable.html#invalid)
[isEmbedded](foundry.documents.RollTable.html#isembedded)
[schema](foundry.documents.RollTable.html#schema)
[thumbnail](foundry.documents.RollTable.html#thumbnail)
[uuid](foundry.documents.RollTable.html#uuid)
[validationFailures](foundry.documents.RollTable.html#validationfailures)
[baseDocument](foundry.documents.RollTable.html#basedocument)
[collectionName](foundry.documents.RollTable.html#collectionname)
[database](foundry.documents.RollTable.html#database)
[documentName](foundry.documents.RollTable.html#documentname)
[hasTypeData](foundry.documents.RollTable.html#hastypedata)
[hierarchy](foundry.documents.RollTable.html#hierarchy)
[implementation](foundry.documents.RollTable.html#implementation)
[schema](foundry.documents.RollTable.html#schema-2)
[TYPES](foundry.documents.RollTable.html#types)

### Methods

[\_configure](foundry.documents.RollTable.html#_configure)
[\_createFigureEmbed](foundry.documents.RollTable.html#_createfigureembed)
[\_getParentCollection](foundry.documents.RollTable.html#_getparentcollection)
[\_initialize](foundry.documents.RollTable.html#_initialize)
[\_onCreateDescendantDocuments](foundry.documents.RollTable.html#_oncreatedescendantdocuments)
[\_onDeleteDescendantDocuments](foundry.documents.RollTable.html#_ondeletedescendantdocuments)
[canUserModify](foundry.documents.RollTable.html#canusermodify)
[clone](foundry.documents.RollTable.html#clone)
[createEmbeddedDocuments](foundry.documents.RollTable.html#createembeddeddocuments)
[delete](foundry.documents.RollTable.html#delete)
[deleteEmbeddedDocuments](foundry.documents.RollTable.html#deleteembeddeddocuments)
[draw](foundry.documents.RollTable.html#draw)
[drawMany](foundry.documents.RollTable.html#drawmany)
[getEmbeddedCollection](foundry.documents.RollTable.html#getembeddedcollection)
[getEmbeddedDocument](foundry.documents.RollTable.html#getembeddeddocument)
[getFlag](foundry.documents.RollTable.html#getflag)
[getResultsForRoll](foundry.documents.RollTable.html#getresultsforroll)
[getUserLevel](foundry.documents.RollTable.html#getuserlevel)
[migrateSystemData](foundry.documents.RollTable.html#migratesystemdata)
[normalize](foundry.documents.RollTable.html#normalize)
[onEmbed](foundry.documents.RollTable.html#onembed)
[reset](foundry.documents.RollTable.html#reset)
[resetResults](foundry.documents.RollTable.html#resetresults)
[roll](foundry.documents.RollTable.html#roll)
[setFlag](foundry.documents.RollTable.html#setflag)
[testUserPermission](foundry.documents.RollTable.html#testuserpermission)
[toCompendium](foundry.documents.RollTable.html#tocompendium)
[toJSON](foundry.documents.RollTable.html#tojson)
[toMessage](foundry.documents.RollTable.html#tomessage)
[toObject](foundry.documents.RollTable.html#toobject)
[traverseEmbeddedDocuments](foundry.documents.RollTable.html#traverseembeddeddocuments)
[unsetFlag](foundry.documents.RollTable.html#unsetflag)
[update](foundry.documents.RollTable.html#update)
[updateEmbeddedDocuments](foundry.documents.RollTable.html#updateembeddeddocuments)
[updateSource](foundry.documents.RollTable.html#updatesource)
[validate](foundry.documents.RollTable.html#validate)
[\_buildEmbedHTML](foundry.documents.RollTable.html#_buildembedhtml)
[\_initializeSource](foundry.documents.RollTable.html#_initializesource)
[\_onClickEmbedAction](foundry.documents.RollTable.html#_onclickembedaction)
[\_onCreate](foundry.documents.RollTable.html#_oncreate)
[\_onDelete](foundry.documents.RollTable.html#_ondelete)
[\_onUpdate](foundry.documents.RollTable.html#_onupdate)
[\_preCreate](foundry.documents.RollTable.html#_precreate)
[\_preDelete](foundry.documents.RollTable.html#_predelete)
[\_preUpdate](foundry.documents.RollTable.html#_preupdate)
[\_addDataFieldMigration](foundry.documents.RollTable.html#_adddatafieldmigration)
[\_addDataFieldShim](foundry.documents.RollTable.html#_adddatafieldshim)
[\_addDataFieldShims](foundry.documents.RollTable.html#_adddatafieldshims)
[\_clearFieldsRecursively](foundry.documents.RollTable.html#_clearfieldsrecursively)
[\_initializationOrder](foundry.documents.RollTable.html#_initializationorder)
[\_logDataFieldMigration](foundry.documents.RollTable.html#_logdatafieldmigration)
[canUserCreate](foundry.documents.RollTable.html#canusercreate)
[cleanData](foundry.documents.RollTable.html#cleandata)
[create](foundry.documents.RollTable.html#create)
[createDocuments](foundry.documents.RollTable.html#createdocuments)
[defineSchema](foundry.documents.RollTable.html#defineschema)
[deleteDocuments](foundry.documents.RollTable.html#deletedocuments)
[fromFolder](foundry.documents.RollTable.html#fromfolder)
[fromJSON](foundry.documents.RollTable.html#fromjson)
[fromSource](foundry.documents.RollTable.html#fromsource)
[get](foundry.documents.RollTable.html#get)
[getCollectionName](foundry.documents.RollTable.html#getcollectionname)
[migrateData](foundry.documents.RollTable.html#migratedata)
[migrateDataSafe](foundry.documents.RollTable.html#migratedatasafe)
[shimData](foundry.documents.RollTable.html#shimdata)
[updateDocuments](foundry.documents.RollTable.html#updatedocuments)
[validateJoint](foundry.documents.RollTable.html#validatejoint)
[\_onCreateOperation](foundry.documents.RollTable.html#_oncreateoperation)
[\_onDeleteOperation](foundry.documents.RollTable.html#_ondeleteoperation)
[\_onUpdateOperation](foundry.documents.RollTable.html#_onupdateoperation)
[\_preCreateOperation](foundry.documents.RollTable.html#_precreateoperation)
[\_preDeleteOperation](foundry.documents.RollTable.html#_predeleteoperation)
[\_preUpdateOperation](foundry.documents.RollTable.html#_preupdateoperation)

## Constructors

### constructor

* new RollTable(  
  Â Â Â Â data?: Partial<[RollTableData](../interfaces/foundry.documents.types.RollTableData.html)>,  
  Â Â Â Â options?: [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html),  
  ): [documents](../modules/foundry.documents.html).[RollTable](foundry.documents.RollTable.html)

  #### Parameters

  + `Optional`data: Partial<[RollTableData](../interfaces/foundry.documents.types.RollTableData.html)> = {}

    Initial data used to construct the data object. The provided object will be
    owned by the constructed model instance and may be mutated.
  + `Optional`options: [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html) = {}

    Context and data validation options which affects initial model construction.

  #### Returns [documents](../modules/foundry.documents.html).[RollTable](foundry.documents.RollTable.html)

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.html).[constructor](foundry.documents.BaseRollTable.html#constructor)

## Properties

### \_source

\_source: [RollTableData](../interfaces/foundry.documents.types.RollTableData.html)

The source data object for this DataModel instance.
Once constructed, the source object is sealed such that no keys may be added nor removed.

Inherited from [BaseRollTable](foundry.documents.BaseRollTable.html).[\_source](foundry.documents.BaseRollTable.html#_source)

### parent

parent: null | [DataModel](foundry.abstract.DataModel.html)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.html)>

An immutable reverse-reference to a parent DataModel to which this model belongs.

Inherited from [BaseRollTable](foundry.documents.BaseRollTable.html).[parent](foundry.documents.BaseRollTable.html#parent)

### `Static` `Internal`\_schema

\_schema: [SchemaField](foundry.data.fields.SchemaField.html)

The defined and cached Data Schema for all instances of this DataModel.

Inherited from [BaseRollTable](foundry.documents.BaseRollTable.html).[\_schema](foundry.documents.BaseRollTable.html#_schema)

### `Static`DEFAULT\_ICON

DEFAULT\_ICON: string = "icons/svg/d20-grey.svg"

The default icon used for newly created Macro documents

Inherited from [BaseRollTable](foundry.documents.BaseRollTable.html).[DEFAULT\_ICON](foundry.documents.BaseRollTable.html#default_icon)

### `Static`LOCALIZATION\_PREFIXES

LOCALIZATION\_PREFIXES: string[] = ...

Inherited from [BaseRollTable](foundry.documents.BaseRollTable.html).[LOCALIZATION\_PREFIXES](foundry.documents.BaseRollTable.html#localization_prefixes)

### `Static`metadata

metadata: object = ...

Default metadata which applies to each instance of this Document type.

Inherited from [BaseRollTable](foundry.documents.BaseRollTable.html).[metadata](foundry.documents.BaseRollTable.html#metadata)

## Accessors

### `Abstract`compendium

* get compendium(): any

  A reference to the Compendium Collection containing this Document, if any, and otherwise null.

  #### Returns any

  Inherited from ClientDocumentMixin(BaseRollTable).compendium

### id

* get id(): null | string

  The canonical identifier for this Document.

  #### Returns null | string

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

* get schema(): [SchemaField](foundry.data.fields.SchemaField.html)

  Define the data schema for this document instance.

  #### Returns [SchemaField](foundry.data.fields.SchemaField.html)

  Inherited from ClientDocumentMixin(BaseRollTable).schema

### thumbnail

* get thumbnail(): string

  Provide a thumbnail image path used to represent this document.

  #### Returns string

### uuid

* get uuid(): string

  A Universally Unique Identifier (uuid) for this Document instance.

  #### Returns string

  Inherited from ClientDocumentMixin(BaseRollTable).uuid

### validationFailures

* get validationFailures(): {  
  Â Â Â Â fields: null  
  Â Â Â Â | [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.html);  
  Â Â Â Â joint: null | [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.html);  
  }

  An array of validation failure instances which may have occurred when this instance was last validated.

  #### Returns { Â Â Â Â fields: null | [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.html); Â Â Â Â joint: null | [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.html); }

  Inherited from ClientDocumentMixin(BaseRollTable).validationFailures

### `Static`baseDocument

* get baseDocument(): typeof [Document](foundry.abstract.Document.html)

  The base document definition that this document class extends from.

  #### Returns typeof [Document](foundry.abstract.Document.html)

  Inherited from ClientDocumentMixin(BaseRollTable).baseDocument

### `Static`collectionName

* get collectionName(): string

  The named collection to which this Document belongs.

  #### Returns string

  Inherited from ClientDocumentMixin(BaseRollTable).collectionName

### `Static`database

* get database(): [abstract](../modules/foundry.abstract.html).[DatabaseBackend](foundry.abstract.DatabaseBackend.html)

  The database backend used to execute operations and handle results.

  #### Returns [abstract](../modules/foundry.abstract.html).[DatabaseBackend](foundry.abstract.DatabaseBackend.html)

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

* get implementation(): typeof [Document](foundry.abstract.Document.html)

  Return a reference to the configured subclass of this base Document type.

  #### Returns typeof [Document](foundry.abstract.Document.html)

  Inherited from ClientDocumentMixin(BaseRollTable).implementation

### `Static`schema

* get schema(): [SchemaField](foundry.data.fields.SchemaField.html)

  Ensure that all Document classes share the same schema of their base declaration.

  #### Returns [SchemaField](foundry.data.fields.SchemaField.html)

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

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.html).[\_configure](foundry.documents.BaseRollTable.html#_configure)

### \_createFigureEmbed

* \_createFigureEmbed(content: any, config: any, options: any): Promise<any>

  #### Parameters

  + content: any
  + config: any
  + options: any

  #### Returns Promise<any>

  #### Inherit Doc

### \_getParentCollection

* \_getParentCollection(parentCollection?: null | string): null | string

  `Internal`

  Identify the collection in a parent Document that this Document belongs to, if any.

  #### Parameters

  + `Optional`parentCollection: null | string

    An explicitly provided parent collection name.

  #### Returns null | string

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.html).[\_getParentCollection](foundry.documents.BaseRollTable.html#_getparentcollection)

### \_initialize

* \_initialize(options: any): void

  Initialize the instance by copying data from the source object to instance attributes.
  This mirrors the workflow of SchemaField#initialize but with some added functionality.

  #### Parameters

  + options: any

    Options provided to the model constructor

  #### Returns void

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.html).[\_initialize](foundry.documents.BaseRollTable.html#_initialize)

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

### canUserModify

* canUserModify(user: [BaseUser](foundry.documents.BaseUser.html), action: string, data?: object): boolean

  Test whether a given User has permission to perform some action on this Document

  #### Parameters

  + user: [BaseUser](foundry.documents.BaseUser.html)

    The User attempting modification
  + action: string

    The attempted action
  + `Optional`data: object = {}

    Data involved in the attempted action

  #### Returns boolean

  Does the User have permission?

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.html).[canUserModify](foundry.documents.BaseRollTable.html#canusermodify)

### clone

* clone(  
  Â Â Â Â data?: object,  
  Â Â Â Â context?: [DataModelConstructionOptions](../interfaces/foundry.abstract.types.DataModelConstructionOptions.html) & Pick<  
  Â Â Â Â Â Â Â Â [DataModelValidationOptions](../interfaces/foundry.abstract.types.DataModelValidationOptions.html),  
  Â Â Â Â Â Â Â Â "strict"  
  Â Â Â Â Â Â Â Â | "fallback"  
  Â Â Â Â Â Â Â Â | "dropInvalidEmbedded",  
  Â Â Â Â > & [\_DocumentConstructionContext](../interfaces/foundry.abstract.types._DocumentConstructionContext.html) & [DocumentCloneOptions](../interfaces/foundry.abstract.types.DocumentCloneOptions.html),  
  ):  
  Â Â Â Â | [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>  
  Â Â Â Â | Promise<[Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>>

  Clone a document, creating a new document by combining current data with provided overrides.
  The cloned document is ephemeral and not yet saved to the database.

  #### Parameters

  + `Optional`data: object = {}

    Additional data which overrides current document data at the time of creation
  + `Optional`context: [DataModelConstructionOptions](../interfaces/foundry.abstract.types.DataModelConstructionOptions.html) & Pick<  
    Â Â Â Â [DataModelValidationOptions](../interfaces/foundry.abstract.types.DataModelValidationOptions.html),  
    Â Â Â Â "strict"  
    Â Â Â Â | "fallback"  
    Â Â Â Â | "dropInvalidEmbedded",  
    > & [\_DocumentConstructionContext](../interfaces/foundry.abstract.types._DocumentConstructionContext.html) & [DocumentCloneOptions](../interfaces/foundry.abstract.types.DocumentCloneOptions.html) = {}

    Additional context options passed to the create method

  #### Returns Â Â Â Â | [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)> Â Â Â Â | Promise<[Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>>

  The cloned Document instance

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.html).[clone](foundry.documents.BaseRollTable.html#clone)

### createEmbeddedDocuments

* createEmbeddedDocuments(  
  Â Â Â Â embeddedName: string,  
  Â Â Â Â data?: object[],  
  Â Â Â Â operation?: [DatabaseCreateOperation](../interfaces/foundry.abstract.types.DatabaseCreateOperation.html),  
  ): Promise<[Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[]>

  Create multiple embedded Document instances within this parent Document using provided input data.

  #### Parameters

  + embeddedName: string

    The name of the embedded Document type
  + data: object[] = []

    An array of data objects used to create multiple documents
  + `Optional`operation: [DatabaseCreateOperation](../interfaces/foundry.abstract.types.DatabaseCreateOperation.html) = {}

    Parameters of the database creation workflow

  #### Returns Promise<[Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[]>

  An array of created Document instances

  #### See

  [Document.createDocuments](foundry.abstract.Document.html#createdocuments)

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.html).[createEmbeddedDocuments](foundry.documents.BaseRollTable.html#createembeddeddocuments)

### delete

* delete(  
  Â Â Â Â operation?: Partial<Omit<[DatabaseDeleteOperation](../interfaces/foundry.abstract.types.DatabaseDeleteOperation.html), "ids">>,  
  ): Promise<undefined | [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>>

  Delete this Document, removing it from the database.

  #### Parameters

  + `Optional`operation: Partial<Omit<[DatabaseDeleteOperation](../interfaces/foundry.abstract.types.DatabaseDeleteOperation.html), "ids">> = {}

    Parameters of the deletion operation

  #### Returns Promise<undefined | [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>>

  The deleted Document instance, or undefined if not deleted

  #### See

  [Document.deleteDocuments](foundry.abstract.Document.html#deletedocuments)

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.html).[delete](foundry.documents.BaseRollTable.html#delete)

### deleteEmbeddedDocuments

* deleteEmbeddedDocuments(  
  Â Â Â Â embeddedName: string,  
  Â Â Â Â ids: string[],  
  Â Â Â Â operation?: [DatabaseDeleteOperation](../interfaces/foundry.abstract.types.DatabaseDeleteOperation.html),  
  ): Promise<[Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[]>

  Delete multiple embedded Document instances within a parent Document using provided string ids.

  #### Parameters

  + embeddedName: string

    The name of the embedded Document type
  + ids: string[]

    An array of string ids for each Document to be deleted
  + `Optional`operation: [DatabaseDeleteOperation](../interfaces/foundry.abstract.types.DatabaseDeleteOperation.html) = {}

    Parameters of the database deletion workflow

  #### Returns Promise<[Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[]>

  An array of deleted Document instances

  #### See

  [Document.deleteDocuments](foundry.abstract.Document.html#deletedocuments)

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.html).[deleteEmbeddedDocuments](foundry.documents.BaseRollTable.html#deleteembeddeddocuments)

### draw

* draw(  
  Â Â Â Â options?: {  
  Â Â Â Â Â Â Â Â displayChat?: boolean;  
  Â Â Â Â Â Â Â Â recursive?: boolean;  
  Â Â Â Â Â Â Â Â results?: [documents](../modules/foundry.documents.html).[TableResult](foundry.documents.TableResult.html)[];  
  Â Â Â Â Â Â Â Â roll?: [Roll](foundry.dice.Roll.html);  
  Â Â Â Â Â Â Â Â rollMode?: string;  
  Â Â Â Â },  
  ): Promise<{ RollTableDraw: any }>

  Draw a result from the RollTable based on the table formula or a provided Roll instance

  #### Parameters

  + `Optional`options: {  
    Â Â Â Â displayChat?: boolean;  
    Â Â Â Â recursive?: boolean;  
    Â Â Â Â results?: [documents](../modules/foundry.documents.html).[TableResult](foundry.documents.TableResult.html)[];  
    Â Â Â Â roll?: [Roll](foundry.dice.Roll.html);  
    Â Â Â Â rollMode?: string;  
    } = {}

    Optional arguments which customize the draw behavior

    - ##### `Optional`displayChat?: boolean

      Whether to automatically display the results in chat
    - ##### `Optional`recursive?: boolean

      Allow drawing recursively from inner RollTable results
    - ##### `Optional`results?: [documents](../modules/foundry.documents.html).[TableResult](foundry.documents.TableResult.html)[]

      One or more table results which have been drawn
    - ##### `Optional`roll?: [Roll](foundry.dice.Roll.html)

      An existing Roll instance to use for drawing from the table
    - ##### `Optional`rollMode?: string

      The chat roll mode to use when displaying the result

  #### Returns Promise<{ RollTableDraw: any }>

  A Promise which resolves to an object containing the executed roll and the
  produced results.

### drawMany

* drawMany(  
  Â Â Â Â number: number,  
  Â Â Â Â options?: {  
  Â Â Â Â Â Â Â Â displayChat?: boolean;  
  Â Â Â Â Â Â Â Â recursive?: boolean;  
  Â Â Â Â Â Â Â Â roll?: [Roll](foundry.dice.Roll.html);  
  Â Â Â Â Â Â Â Â rollMode?: string;  
  Â Â Â Â },  
  ): Promise<{ RollTableDraw: any }>

  Draw multiple results from a RollTable, constructing a final synthetic Roll as a dice pool of inner rolls.

  #### Parameters

  + number: number

    The number of results to draw
  + `Optional`options: { displayChat?: boolean; recursive?: boolean; roll?: [Roll](foundry.dice.Roll.html); rollMode?: string } = {}

    Optional arguments which customize the draw

    - ##### `Optional`displayChat?: boolean

      Automatically display the drawn results in chat? Default is true
    - ##### `Optional`recursive?: boolean

      Allow drawing recursively from inner RollTable results
    - ##### `Optional`roll?: [Roll](foundry.dice.Roll.html)

      An optional pre-configured Roll instance which defines the dice
      roll to use
    - ##### `Optional`rollMode?: string

      Customize the roll mode used to display the drawn results

  #### Returns Promise<{ RollTableDraw: any }>

  The drawn results

### getEmbeddedCollection

* getEmbeddedCollection(embeddedName: string): DocumentCollection

  Obtain a reference to the Array of source data within the data object for a certain embedded Document name

  #### Parameters

  + embeddedName: string

    The name of the embedded Document type

  #### Returns DocumentCollection

  The Collection instance of embedded Documents of the requested type

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.html).[getEmbeddedCollection](foundry.documents.BaseRollTable.html#getembeddedcollection)

### getEmbeddedDocument

* getEmbeddedDocument(  
  Â Â Â Â embeddedName: string,  
  Â Â Â Â id: string,  
  Â Â Â Â options?: { invalid?: boolean; strict?: boolean },  
  ): [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>

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

  #### Returns [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>

  The retrieved embedded Document instance, or undefined

  #### Throws

  If the embedded collection does not exist, or if strict is true and the Embedded Document could not be
  found.

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.html).[getEmbeddedDocument](foundry.documents.BaseRollTable.html#getembeddeddocument)

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

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.html).[getFlag](foundry.documents.BaseRollTable.html#getflag)

### getResultsForRoll

* getResultsForRoll(value: number): [documents](../modules/foundry.documents.html).[TableResult](foundry.documents.TableResult.html)[]

  Get an Array of valid results for a given rolled total

  #### Parameters

  + value: number

    The rolled value

  #### Returns [documents](../modules/foundry.documents.html).[TableResult](foundry.documents.TableResult.html)[]

  An Array of results

### getUserLevel

* getUserLevel(user?: [BaseUser](foundry.documents.BaseUser.html)): [DocumentOwnershipNumber](../types/CONST.DocumentOwnershipNumber.html)

  Get the explicit permission level that a User has over this Document, a value in CONST.DOCUMENT\_OWNERSHIP\_LEVELS.
  Compendium content ignores the ownership field in favor of User role-based ownership. Otherwise, Documents use
  granular per-User ownership definitions and Embedded Documents defer to their parent ownership.

  This method returns the value recorded in Document ownership, regardless of the User's role, for example a
  GAMEMASTER user might still return a result of NONE if they are not explicitly denoted as having a level.

  To test whether a user has a certain capability over the document, testUserPermission should be used.

  #### Parameters

  + `Optional`user: [BaseUser](foundry.documents.BaseUser.html)

    The User being tested

  #### Returns [DocumentOwnershipNumber](../types/CONST.DocumentOwnershipNumber.html)

  A numeric permission level from [CONST.DOCUMENT\_OWNERSHIP\_LEVELS](../variables/CONST.DOCUMENT_OWNERSHIP_LEVELS.html)

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.html).[getUserLevel](foundry.documents.BaseRollTable.html#getuserlevel)

### migrateSystemData

* migrateSystemData(): object

  For Documents which include game system data, migrate the system data object to conform to its latest data model.
  The data model is defined by the template.json specification included by the game system.

  #### Returns object

  The migrated system data object

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.html).[migrateSystemData](foundry.documents.BaseRollTable.html#migratesystemdata)

### normalize

* normalize(): Promise<[documents](../modules/foundry.documents.html).[RollTable](foundry.documents.RollTable.html)>

  Normalize the probabilities of rolling each item in the RollTable based on their assigned weights

  #### Returns Promise<[documents](../modules/foundry.documents.html).[RollTable](foundry.documents.RollTable.html)>

### onEmbed

* onEmbed(element: any): void

  #### Parameters

  + element: any

  #### Returns void

### reset

* reset(): void

  Reset the state of this data instance back to mirror the contained source data, erasing any changes.

  #### Returns void

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.html).[reset](foundry.documents.BaseRollTable.html#reset)

### resetResults

* resetResults(): Promise<[documents](../modules/foundry.documents.html).[RollTable](foundry.documents.RollTable.html)>

  Reset the state of the RollTable to return any drawn items to the table

  #### Returns Promise<[documents](../modules/foundry.documents.html).[RollTable](foundry.documents.RollTable.html)>

### roll

* roll(  
  Â Â Â Â options?: { \_depth?: number; recursive?: boolean; roll?: [Roll](foundry.dice.Roll.html) },  
  ): Promise<[RollTableDraw](../interfaces/foundry.documents.types.RollTableDraw.html)>

  Evaluate a RollTable by rolling its formula and retrieving a drawn result.

  Note that this function only performs the roll and identifies the result, the RollTable#draw function should be
  called to formalize the draw from the table.

  #### Parameters

  + `Optional`options: { \_depth?: number; recursive?: boolean; roll?: [Roll](foundry.dice.Roll.html) } = {}

    Options which modify rolling behavior

    - ##### `Optional`\_depth?: number

      An internal flag used to track recursion depth
    - ##### `Optional`recursive?: boolean

      If a RollTable document is drawn as a result, recursively roll it
    - ##### `Optional`roll?: [Roll](foundry.dice.Roll.html)

      An alternative dice Roll to use instead of the default table formula

  #### Returns Promise<[RollTableDraw](../interfaces/foundry.documents.types.RollTableDraw.html)>

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
  ): Promise<[Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>>

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

  #### Returns Promise<[Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>>

  A Promise resolving to the updated document

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.html).[setFlag](foundry.documents.BaseRollTable.html#setflag)

### testUserPermission

* testUserPermission(  
  Â Â Â Â user: [BaseUser](foundry.documents.BaseUser.html),  
  Â Â Â Â permission: [DocumentOwnershipLevel](../types/CONST.DocumentOwnershipLevel.html),  
  Â Â Â Â options?: { exact?: boolean },  
  ): boolean

  Test whether a certain User has a requested permission level (or greater) over the Document

  #### Parameters

  + user: [BaseUser](foundry.documents.BaseUser.html)

    The User being tested
  + permission: [DocumentOwnershipLevel](../types/CONST.DocumentOwnershipLevel.html)

    The permission level from DOCUMENT\_OWNERSHIP\_LEVELS to test
  + options: { exact?: boolean } = {}

    Additional options involved in the permission test

    - ##### `Optional`exact?: boolean

      Require the exact permission level requested?

  #### Returns boolean

  Does the user have this permission level over the Document?

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.html).[testUserPermission](foundry.documents.BaseRollTable.html#testuserpermission)

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

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.html).[toJSON](foundry.documents.BaseRollTable.html#tojson)

### toMessage

* toMessage(  
  Â Â Â Â results: [documents](../modules/foundry.documents.html).[TableResult](foundry.documents.TableResult.html)[],  
  Â Â Â Â options?: { messageData?: object; messageOptions?: object; roll?: [Roll](foundry.dice.Roll.html) },  
  ): Promise<  
  Â Â Â Â | undefined  
  Â Â Â Â | [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>  
  Â Â Â Â | [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[],  
  >

  Display a result drawn from a RollTable in the Chat Log along.
  Optionally also display the Roll which produced the result and configure aspects of the displayed messages.

  #### Parameters

  + results: [documents](../modules/foundry.documents.html).[TableResult](foundry.documents.TableResult.html)[]

    An Array of one or more TableResult Documents which were drawn and should
    be displayed.
  + `Optional`options: { messageData?: object; messageOptions?: object; roll?: [Roll](foundry.dice.Roll.html) } = {}

    Additional options which modify message creation

    - ##### `Optional`messageData?: object

      Additional data which customizes the created messages
    - ##### `Optional`messageOptions?: object

      Additional options which customize the created messages
    - ##### `Optional`roll?: [Roll](foundry.dice.Roll.html)

      An optional Roll instance which produced the drawn results

  #### Returns Promise< Â Â Â Â | undefined Â Â Â Â | [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)> Â Â Â Â | [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[], >

### toObject

* toObject(source?: boolean): any

  Copy and transform the DataModel into a plain object.
  Draw the values of the extracted object from the data source (by default) otherwise from its transformed values.

  #### Parameters

  + source: boolean = true

    Draw values from the underlying data source rather than transformed values

  #### Returns any

  The extracted primitive object

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.html).[toObject](foundry.documents.BaseRollTable.html#toobject)

### traverseEmbeddedDocuments

* traverseEmbeddedDocuments(\_parentPath?: string): Generator<any, void, any>

  Iterate over all embedded Documents that are hierarchical children of this Document.

  #### Parameters

  + `Optional`\_parentPath: string

    A parent field path already traversed

  #### Returns Generator<any, void, any>

  #### Yields

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.html).[traverseEmbeddedDocuments](foundry.documents.BaseRollTable.html#traverseembeddeddocuments)

### unsetFlag

* unsetFlag(  
  Â Â Â Â scope: string,  
  Â Â Â Â key: string,  
  ): Promise<[Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>>

  Remove a flag assigned to the document

  #### Parameters

  + scope: string

    The flag scope which namespaces the key
  + key: string

    The flag key

  #### Returns Promise<[Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>>

  The updated document instance

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.html).[unsetFlag](foundry.documents.BaseRollTable.html#unsetflag)

### update

* update(  
  Â Â Â Â data?: object,  
  Â Â Â Â operation?: Partial<Omit<[DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.html), "updates">>,  
  ): Promise<undefined | [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>>

  Update this Document using incremental data, saving it to the database.

  #### Parameters

  + `Optional`data: object = {}

    Differential update data which modifies the existing values of this document
  + `Optional`operation: Partial<Omit<[DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.html), "updates">> = {}

    Parameters of the update operation

  #### Returns Promise<undefined | [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>>

  The updated Document instance, or undefined not updated

  #### See

  [Document.updateDocuments](foundry.abstract.Document.html#updatedocuments)

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.html).[update](foundry.documents.BaseRollTable.html#update)

### updateEmbeddedDocuments

* updateEmbeddedDocuments(  
  Â Â Â Â embeddedName: string,  
  Â Â Â Â updates?: object[],  
  Â Â Â Â operation?: [DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.html),  
  ): Promise<[Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[]>

  Update multiple embedded Document instances within a parent Document using provided differential data.

  #### Parameters

  + embeddedName: string

    The name of the embedded Document type
  + updates: object[] = []

    An array of differential data objects, each used to update a
    single Document
  + `Optional`operation: [DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.html) = {}

    Parameters of the database update workflow

  #### Returns Promise<[Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[]>

  An array of updated Document instances

  #### See

  [Document.updateDocuments](foundry.abstract.Document.html#updatedocuments)

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.html).[updateEmbeddedDocuments](foundry.documents.BaseRollTable.html#updateembeddeddocuments)

### updateSource

* updateSource(changes?: object, options?: [DataModelUpdateOptions](../interfaces/foundry.abstract.types.DataModelUpdateOptions.html)): object

  Update the DataModel locally by applying an object of changes to its source data.
  The provided changes are expanded, cleaned, validated, and stored to the source data object for this model.
  The provided changes argument is mutated in this process.
  The source data is then re-initialized to apply those changes to the prepared data.
  The method returns an object of differential changes which modified the original data.

  #### Parameters

  + changes: object = {}

    New values which should be applied to the data model
  + options: [DataModelUpdateOptions](../interfaces/foundry.abstract.types.DataModelUpdateOptions.html) = {}

    Options which determine how the new data is merged

  #### Returns object

  An object containing differential keys and values that were changed

  #### Throws

  An error if the requested data model changes were invalid

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.html).[updateSource](foundry.documents.BaseRollTable.html#updatesource)

### validate

* validate(options?: [DataModelValidationOptions](../interfaces/foundry.abstract.types.DataModelValidationOptions.html)): boolean

  Validate the data contained in the document to check for type and content.
  If changes are provided, missing types are added to it before cleaning and validation.
  This mutates the provided changes. This function throws an error if data within the document is not valid.

  #### Parameters

  + options: [DataModelValidationOptions](../interfaces/foundry.abstract.types.DataModelValidationOptions.html) = {}

    Options which modify how the model is validated

  #### Returns boolean

  Whether the data source or proposed change is reported as valid.
  A boolean is always returned if validation is non-strict.

  #### Throws

  An error thrown if validation is strict and a failure occurs.

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.html).[validate](foundry.documents.BaseRollTable.html#validate)

### `Protected`\_buildEmbedHTML

* \_buildEmbedHTML(  
  Â Â Â Â config: [RollTableHTMLEmbedConfig](../types/foundry.types.RollTableHTMLEmbedConfig.html),  
  Â Â Â Â options?: any,  
  ): Promise<null | HTMLElement>

  `Protected`

  Create embedded roll table markup.

  #### Parameters

  + config: [RollTableHTMLEmbedConfig](../types/foundry.types.RollTableHTMLEmbedConfig.html)

    Configuration for embedding behavior.
  + `Optional`options: any = {}

    The original enrichment options for cases where the Document embed content
    also contains text that must be enriched.

  #### Returns Promise<null | HTMLElement>

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
            <a class="inline-roll roll" data-mode="roll" data-formula="1d6">  
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

### `Protected`\_initializeSource

* \_initializeSource(  
  Â Â Â Â data: object | [DataModel](foundry.abstract.DataModel.html)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.html)>,  
  Â Â Â Â options?: object,  
  ): object

  `Protected`

  Initialize the source data for a new DataModel instance.
  One-time migrations and initial cleaning operations are applied to the source data.

  #### Parameters

  + data: object | [DataModel](foundry.abstract.DataModel.html)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.html)>

    The candidate source data from which the model will be constructed
  + `Optional`options: object = {}

    Options provided to the model constructor

  #### Returns object

  Migrated and cleaned source data which will be stored to the model instance,
  which is the same object as the `data` argument

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.html).[\_initializeSource](foundry.documents.BaseRollTable.html#_initializesource)

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

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.html).[\_onCreate](foundry.documents.BaseRollTable.html#_oncreate)

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

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.html).[\_onDelete](foundry.documents.BaseRollTable.html#_ondelete)

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

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.html).[\_onUpdate](foundry.documents.BaseRollTable.html#_onupdate)

### `Protected`\_preCreate

* \_preCreate(  
  Â Â Â Â data: object,  
  Â Â Â Â options: object,  
  Â Â Â Â user: [BaseUser](foundry.documents.BaseUser.html),  
  ): Promise<boolean | void>

  `Protected`

  Pre-process a creation operation for a single Document instance. Pre-operation events only occur for the client
  which requested the operation.

  Modifications to the pending Document instance must be performed using [updateSource](foundry.documents.RollTable.html#updatesource).

  #### Parameters

  + data: object

    The initial data object provided to the document creation request
  + options: object

    Additional options which modify the creation request
  + user: [BaseUser](foundry.documents.BaseUser.html)

    The User requesting the document creation

  #### Returns Promise<boolean | void>

  Return false to exclude this Document from the creation operation

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.html).[\_preCreate](foundry.documents.BaseRollTable.html#_precreate)

### `Protected`\_preDelete

* \_preDelete(options: object, user: [BaseUser](foundry.documents.BaseUser.html)): Promise<boolean | void>

  `Protected`

  Pre-process a deletion operation for a single Document instance. Pre-operation events only occur for the client
  which requested the operation.

  #### Parameters

  + options: object

    Additional options which modify the deletion request
  + user: [BaseUser](foundry.documents.BaseUser.html)

    The User requesting the document deletion

  #### Returns Promise<boolean | void>

  A return value of false indicates the deletion operation should be cancelled.

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.html).[\_preDelete](foundry.documents.BaseRollTable.html#_predelete)

### `Protected`\_preUpdate

* \_preUpdate(  
  Â Â Â Â changes: object,  
  Â Â Â Â options: object,  
  Â Â Â Â user: [BaseUser](foundry.documents.BaseUser.html),  
  ): Promise<boolean | void>

  `Protected`

  Pre-process an update operation for a single Document instance. Pre-operation events only occur for the client
  which requested the operation.

  #### Parameters

  + changes: object

    The candidate changes to the Document
  + options: object

    Additional options which modify the update request
  + user: [BaseUser](foundry.documents.BaseUser.html)

    The User requesting the document update

  #### Returns Promise<boolean | void>

  A return value of false indicates the update operation should be cancelled.

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.html).[\_preUpdate](foundry.documents.BaseRollTable.html#_preupdate)

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

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.html).[\_addDataFieldMigration](foundry.documents.BaseRollTable.html#_adddatafieldmigration)

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

    Options passed to [foundry.utils.logCompatibilityWarning](../functions/foundry.utils.logCompatibilityWarning.html)

    - ##### `Optional`value?: any

      The value of the shim
    - ##### `Optional`warning?: string

      The deprecation message

  #### Returns void

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.html).[\_addDataFieldShim](foundry.documents.BaseRollTable.html#_adddatafieldshim)

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

    Options passed to [foundry.utils.logCompatibilityWarning](../functions/foundry.utils.logCompatibilityWarning.html)

    - ##### `Optional`value?: any

      The value of the shim
    - ##### `Optional`warning?: string

      The deprecation message

  #### Returns void

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.html).[\_addDataFieldShims](foundry.documents.BaseRollTable.html#_adddatafieldshims)

### `Static`\_clearFieldsRecursively

* \_clearFieldsRecursively(  
  Â Â Â Â data: object,  
  Â Â Â Â fieldNames: string[],  
  Â Â Â Â options?: { callback?: [RecursiveFieldClearCallback](../types/foundry.RecursiveFieldClearCallback.html) },  
  ): void

  `Internal`

  Clear the fields from the given Document data recursively.

  #### Parameters

  + data: object

    The (partial) Document data
  + fieldNames: string[]

    The fields that are cleared
  + `Optional`options: { callback?: [RecursiveFieldClearCallback](../types/foundry.RecursiveFieldClearCallback.html) } = {}
    - ##### `Optional`callback?: [RecursiveFieldClearCallback](../types/foundry.RecursiveFieldClearCallback.html)

      A callback that is invoked on each field in order to clear
      it.

  #### Returns void

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.html).[\_clearFieldsRecursively](foundry.documents.BaseRollTable.html#_clearfieldsrecursively)

### `Static`\_initializationOrder

* \_initializationOrder(): Generator<any[], void, unknown>

  #### Returns Generator<any[], void, unknown>

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.html).[\_initializationOrder](foundry.documents.BaseRollTable.html#_initializationorder)

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

    Options passed to [foundry.utils.logCompatibilityWarning](../functions/foundry.utils.logCompatibilityWarning.html)

  #### Returns void

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.html).[\_logDataFieldMigration](foundry.documents.BaseRollTable.html#_logdatafieldmigration)

### `Static`canUserCreate

* canUserCreate(user: [BaseUser](foundry.documents.BaseUser.html)): boolean

  Test whether a given User has sufficient permissions to create Documents of this type in general. This does not
  guarantee that the User is able to create all Documents of this type, as certain document-specific requirements
  may also be present.

  Generally speaking, this method is used to verify whether a User should be presented with the option to create
  Documents of this type in the UI.

  #### Parameters

  + user: [BaseUser](foundry.documents.BaseUser.html)

    The User being tested

  #### Returns boolean

  Does the User have a sufficient role to create?

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.html).[canUserCreate](foundry.documents.BaseRollTable.html#canusercreate)

### `Static`cleanData

* cleanData(source?: object, options?: object): object

  Clean a data source object to conform to a specific provided schema.

  #### Parameters

  + `Optional`source: object = {}

    The source data object
  + `Optional`options: object = {}

    Additional options which are passed to field cleaning methods

  #### Returns object

  The cleaned source data, which is the same object as the `source` argument

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.html).[cleanData](foundry.documents.BaseRollTable.html#cleandata)

### `Static`create

* create(  
  Â Â Â Â data?:  
  Â Â Â Â Â Â Â Â | object  
  Â Â Â Â Â Â Â Â | [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>  
  Â Â Â Â Â Â Â Â | (object | [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>)[],  
  Â Â Â Â operation?: Partial<Omit<[DatabaseCreateOperation](../interfaces/foundry.abstract.types.DatabaseCreateOperation.html), "data">>,  
  ): Promise<  
  Â Â Â Â | undefined  
  Â Â Â Â | [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>  
  Â Â Â Â | [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[],  
  >

  Create a new Document using provided input data, saving it to the database.

  #### Parameters

  + `Optional`data:   
    Â Â Â Â | object  
    Â Â Â Â | [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>  
    Â Â Â Â | (object | [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>)[] = {}

    Initial data used to create this Document, or a Document
    instance to persist.
  + `Optional`operation: Partial<Omit<[DatabaseCreateOperation](../interfaces/foundry.abstract.types.DatabaseCreateOperation.html), "data">> = {}

    Parameters of the creation operation

  #### Returns Promise< Â Â Â Â | undefined Â Â Â Â | [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)> Â Â Â Â | [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[], >

  The created Document instance(s)

  #### See

  [Document.createDocuments](foundry.abstract.Document.html#createdocuments)

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

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.html).[create](foundry.documents.BaseRollTable.html#create)

### `Static`createDocuments

* createDocuments(  
  Â Â Â Â data?: (object | [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>)[],  
  Â Â Â Â operation?: Partial<Omit<[DatabaseCreateOperation](../interfaces/foundry.abstract.types.DatabaseCreateOperation.html), "data">>,  
  ): Promise<[Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[]>

  Create multiple Documents using provided input data.
  Data is provided as an array of objects where each individual object becomes one new Document.

  #### Parameters

  + data: (object | [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>)[] = []

    An array of data objects or existing Documents to persist.
  + `Optional`operation: Partial<Omit<[DatabaseCreateOperation](../interfaces/foundry.abstract.types.DatabaseCreateOperation.html), "data">> = {}

    Parameters of the requested creation
    operation

  #### Returns Promise<[Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[]>

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

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.html).[createDocuments](foundry.documents.BaseRollTable.html#createdocuments)

### `Static`defineSchema

* defineSchema(): {  
  Â Â Â Â \_id: [DocumentIdField](foundry.data.fields.DocumentIdField.html);  
  Â Â Â Â \_stats: [DocumentStatsField](foundry.data.fields.DocumentStatsField.html);  
  Â Â Â Â description: [HTMLField](foundry.data.fields.HTMLField.html);  
  Â Â Â Â displayRoll: [BooleanField](foundry.data.fields.BooleanField.html);  
  Â Â Â Â flags: [DocumentFlagsField](foundry.data.fields.DocumentFlagsField.html);  
  Â Â Â Â folder: [ForeignDocumentField](foundry.data.fields.ForeignDocumentField.html);  
  Â Â Â Â formula: [StringField](foundry.data.fields.StringField.html);  
  Â Â Â Â img: [FilePathField](foundry.data.fields.FilePathField.html);  
  Â Â Â Â name: [StringField](foundry.data.fields.StringField.html);  
  Â Â Â Â ownership: [DocumentOwnershipField](foundry.data.fields.DocumentOwnershipField.html);  
  Â Â Â Â replacement: [BooleanField](foundry.data.fields.BooleanField.html);  
  Â Â Â Â results: [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.html);  
  Â Â Â Â sort: [IntegerSortField](foundry.data.fields.IntegerSortField.html);  
  }

  Define the data schema for models of this type.
  The schema is populated the first time it is accessed and cached for future reuse.

  The schema, through its fields, provide the essential cleaning, validation, and initialization methods to turn the
  [\_source](foundry.documents.RollTable.html#_source) values into direct properties of the data model. The schema is a static property of the model and
  is reused by all instances to perform validation.

  The schemas defined by the core software in classes like [foundry.documents.BaseActor](foundry.documents.BaseActor.html) are validated by the
  server, where user code does not run. However, almost all documents have a `flags` field to store data, and many
  have a `system` field that can be configured to be a [foundry.abstract.TypeDataModel](foundry.abstract.TypeDataModel.html) instance. Those models
  are *not* constructed on the server and rely purely on client-side code, which means certain extra-sensitive fields
  must be also be registered through your package manifest. [foundry.packages.types.ServerSanitizationFields](../interfaces/foundry.packages.types.ServerSanitizationFields.html)

  #### Returns { Â Â Â Â \_id: [DocumentIdField](foundry.data.fields.DocumentIdField.html); Â Â Â Â \_stats: [DocumentStatsField](foundry.data.fields.DocumentStatsField.html); Â Â Â Â description: [HTMLField](foundry.data.fields.HTMLField.html); Â Â Â Â displayRoll: [BooleanField](foundry.data.fields.BooleanField.html); Â Â Â Â flags: [DocumentFlagsField](foundry.data.fields.DocumentFlagsField.html); Â Â Â Â folder: [ForeignDocumentField](foundry.data.fields.ForeignDocumentField.html); Â Â Â Â formula: [StringField](foundry.data.fields.StringField.html); Â Â Â Â img: [FilePathField](foundry.data.fields.FilePathField.html); Â Â Â Â name: [StringField](foundry.data.fields.StringField.html); Â Â Â Â ownership: [DocumentOwnershipField](foundry.data.fields.DocumentOwnershipField.html); Â Â Â Â replacement: [BooleanField](foundry.data.fields.BooleanField.html); Â Â Â Â results: [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.html); Â Â Â Â sort: [IntegerSortField](foundry.data.fields.IntegerSortField.html); }

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

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.html).[defineSchema](foundry.documents.BaseRollTable.html#defineschema)

### `Static`deleteDocuments

* deleteDocuments(  
  Â Â Â Â ids?: string[],  
  Â Â Â Â operation?: Partial<Omit<[DatabaseDeleteOperation](../interfaces/foundry.abstract.types.DatabaseDeleteOperation.html), "ids">>,  
  ): Promise<[Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[]>

  Delete one or multiple existing Documents using an array of provided ids.
  Data is provided as an array of string ids for the documents to delete.

  #### Parameters

  + ids: string[] = []

    An array of string ids for the documents to be deleted
  + `Optional`operation: Partial<Omit<[DatabaseDeleteOperation](../interfaces/foundry.abstract.types.DatabaseDeleteOperation.html), "ids">> = {}

    Parameters of the database deletion
    operation

  #### Returns Promise<[Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[]>

  An array of deleted Document instances

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

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.html).[deleteDocuments](foundry.documents.BaseRollTable.html#deletedocuments)

### `Static`fromFolder

* fromFolder(folder: Folder, options?: object): Promise<[documents](../modules/foundry.documents.html).[RollTable](foundry.documents.RollTable.html)>

  Create a new RollTable document using all of the Documents from a specific Folder as new results.

  #### Parameters

  + folder: Folder

    The Folder document from which to create a roll table
  + options: object = {}

    Additional options passed to the RollTable.create method

  #### Returns Promise<[documents](../modules/foundry.documents.html).[RollTable](foundry.documents.RollTable.html)>

### `Static`fromJSON

* fromJSON(json: string): [DataModel](foundry.abstract.DataModel.html)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.html)>

  Create a DataModel instance using a provided serialized JSON string.

  #### Parameters

  + json: string

    Serialized document data in string format

  #### Returns [DataModel](foundry.abstract.DataModel.html)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.html)>

  A constructed data model instance

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.html).[fromJSON](foundry.documents.BaseRollTable.html#fromjson)

### `Static`fromSource

* fromSource(  
  Â Â Â Â source: object,  
  Â Â Â Â context?: Omit<[DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.html), "strict"> & [DataModelFromSourceOptions](../interfaces/foundry.abstract.types.DataModelFromSourceOptions.html),  
  ): [DataModel](foundry.abstract.DataModel.html)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.html)>

  Create a new instance of this DataModel from a source record.
  The source is presumed to be trustworthy and is not strictly validated.

  #### Parameters

  + source: object

    Initial document data which comes from a trusted source.
  + `Optional`context: Omit<[DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.html), "strict"> & [DataModelFromSourceOptions](../interfaces/foundry.abstract.types.DataModelFromSourceOptions.html) = {}

    Model construction context

  #### Returns [DataModel](foundry.abstract.DataModel.html)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.html)>

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.html).[fromSource](foundry.documents.BaseRollTable.html#fromsource)

### `Static`get

* get(  
  Â Â Â Â documentId: string,  
  Â Â Â Â operation?: [DatabaseGetOperation](../interfaces/foundry.abstract.types.DatabaseGetOperation.html),  
  ): null | [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>

  Get a World-level Document of this type by its id.

  #### Parameters

  + documentId: string

    The Document ID
  + `Optional`operation: [DatabaseGetOperation](../interfaces/foundry.abstract.types.DatabaseGetOperation.html) = {}

    Parameters of the get operation

  #### Returns null | [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>

  The retrieved Document, or null

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.html).[get](foundry.documents.BaseRollTable.html#get)

### `Static`getCollectionName

* getCollectionName(name: string): null | string

  A compatibility method that returns the appropriate name of an embedded collection within this Document.

  #### Parameters

  + name: string

    An existing collection name or a document name.

  #### Returns null | string

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

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.html).[getCollectionName](foundry.documents.BaseRollTable.html#getcollectionname)

### `Static`migrateData

* migrateData(source: any): object

  Migrate candidate source data for this DataModel which may require initial cleaning or transformations.

  #### Parameters

  + source: any

    The candidate source data from which the model will be constructed

  #### Returns object

  Migrated source data, which is the same object as the `source` argument

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.html).[migrateData](foundry.documents.BaseRollTable.html#migratedata)

### `Static`migrateDataSafe

* migrateDataSafe(source: object): object

  Wrap data migration in a try/catch which attempts it safely

  #### Parameters

  + source: object

    The candidate source data from which the model will be constructed

  #### Returns object

  Migrated source data, which is the same object as the `source` argument

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.html).[migrateDataSafe](foundry.documents.BaseRollTable.html#migratedatasafe)

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

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.html).[shimData](foundry.documents.BaseRollTable.html#shimdata)

### `Static`updateDocuments

* updateDocuments(  
  Â Â Â Â updates?: object[],  
  Â Â Â Â operation?: Partial<Omit<[DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.html), "updates">>,  
  ): Promise<[Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[]>

  Update multiple Document instances using provided differential data.
  Data is provided as an array of objects where each individual object updates one existing Document.

  #### Parameters

  + updates: object[] = []

    An array of differential data objects, each used to update a single Document
  + `Optional`operation: Partial<Omit<[DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.html), "updates">> = {}

    Parameters of the database update
    operation

  #### Returns Promise<[Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[]>

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

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.html).[updateDocuments](foundry.documents.BaseRollTable.html#updatedocuments)

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

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.html).[validateJoint](foundry.documents.BaseRollTable.html#validatejoint)

### `Protected` `Static`\_onCreateOperation

* \_onCreateOperation(  
  Â Â Â Â documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[],  
  Â Â Â Â operation: [DatabaseCreateOperation](../interfaces/foundry.abstract.types.DatabaseCreateOperation.html),  
  Â Â Â Â user: [BaseUser](foundry.documents.BaseUser.html),  
  ): Promise<void>

  `Protected`

  Post-process a creation operation, reacting to database changes which have occurred. Post-operation events occur
  for all connected clients.

  This batch-wise workflow occurs after individual [\_onCreate](foundry.documents.RollTable.html#_oncreate) workflows.

  #### Parameters

  + documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[]

    The Document instances which were created
  + operation: [DatabaseCreateOperation](../interfaces/foundry.abstract.types.DatabaseCreateOperation.html)

    Parameters of the database creation operation
  + user: [BaseUser](foundry.documents.BaseUser.html)

    The User who performed the creation operation

  #### Returns Promise<void>

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.html).[\_onCreateOperation](foundry.documents.BaseRollTable.html#_oncreateoperation)

### `Protected` `Static`\_onDeleteOperation

* \_onDeleteOperation(  
  Â Â Â Â documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[],  
  Â Â Â Â operation: [DatabaseDeleteOperation](../interfaces/foundry.abstract.types.DatabaseDeleteOperation.html),  
  Â Â Â Â user: [BaseUser](foundry.documents.BaseUser.html),  
  ): Promise<void>

  `Protected`

  Post-process a deletion operation, reacting to database changes which have occurred. Post-operation events occur
  for all connected clients.

  This batch-wise workflow occurs after individual [\_onDelete](foundry.documents.RollTable.html#_ondelete) workflows.

  #### Parameters

  + documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[]

    The Document instances which were deleted
  + operation: [DatabaseDeleteOperation](../interfaces/foundry.abstract.types.DatabaseDeleteOperation.html)

    Parameters of the database deletion operation
  + user: [BaseUser](foundry.documents.BaseUser.html)

    The User who performed the deletion operation

  #### Returns Promise<void>

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.html).[\_onDeleteOperation](foundry.documents.BaseRollTable.html#_ondeleteoperation)

### `Protected` `Static`\_onUpdateOperation

* \_onUpdateOperation(  
  Â Â Â Â documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[],  
  Â Â Â Â operation: [DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.html),  
  Â Â Â Â user: [BaseUser](foundry.documents.BaseUser.html),  
  ): Promise<void>

  `Protected`

  Post-process an update operation, reacting to database changes which have occurred. Post-operation events occur
  for all connected clients.

  This batch-wise workflow occurs after individual [\_onUpdate](foundry.documents.RollTable.html#_onupdate) workflows.

  #### Parameters

  + documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[]

    The Document instances which were updated
  + operation: [DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.html)

    Parameters of the database update operation
  + user: [BaseUser](foundry.documents.BaseUser.html)

    The User who performed the update operation

  #### Returns Promise<void>

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.html).[\_onUpdateOperation](foundry.documents.BaseRollTable.html#_onupdateoperation)

### `Protected` `Static`\_preCreateOperation

* \_preCreateOperation(  
  Â Â Â Â documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[],  
  Â Â Â Â operation: [DatabaseCreateOperation](../interfaces/foundry.abstract.types.DatabaseCreateOperation.html),  
  Â Â Â Â user: [BaseUser](foundry.documents.BaseUser.html),  
  ): Promise<boolean | void>

  `Protected`

  Pre-process a creation operation, potentially altering its instructions or input data. Pre-operation events only
  occur for the client which requested the operation.

  This batch-wise workflow occurs after individual [\_preCreate](foundry.documents.RollTable.html#_precreate) workflows and provides a final pre-flight check
  before a database operation occurs.

  Modifications to pending documents must mutate the documents array or alter individual document instances using
  [updateSource](foundry.documents.RollTable.html#updatesource).

  #### Parameters

  + documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[]

    Pending document instances to be created
  + operation: [DatabaseCreateOperation](../interfaces/foundry.abstract.types.DatabaseCreateOperation.html)

    Parameters of the database creation operation
  + user: [BaseUser](foundry.documents.BaseUser.html)

    The User requesting the creation operation

  #### Returns Promise<boolean | void>

  Return false to cancel the creation operation entirely

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.html).[\_preCreateOperation](foundry.documents.BaseRollTable.html#_precreateoperation)

### `Protected` `Static`\_preDeleteOperation

* \_preDeleteOperation(  
  Â Â Â Â documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[],  
  Â Â Â Â operation: [DatabaseDeleteOperation](../interfaces/foundry.abstract.types.DatabaseDeleteOperation.html),  
  Â Â Â Â user: [BaseUser](foundry.documents.BaseUser.html),  
  ): Promise<boolean | void>

  `Protected`

  Pre-process a deletion operation, potentially altering its instructions or input data. Pre-operation events only
  occur for the client which requested the operation.

  This batch-wise workflow occurs after individual [\_preDelete](foundry.documents.RollTable.html#_predelete) workflows and provides a final pre-flight check
  before a database operation occurs.

  Modifications to the requested deletions are performed by mutating the operation object.
  [updateSource](foundry.documents.RollTable.html#updatesource).

  #### Parameters

  + documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[]

    Document instances to be deleted
  + operation: [DatabaseDeleteOperation](../interfaces/foundry.abstract.types.DatabaseDeleteOperation.html)

    Parameters of the database update operation
  + user: [BaseUser](foundry.documents.BaseUser.html)

    The User requesting the deletion operation

  #### Returns Promise<boolean | void>

  Return false to cancel the deletion operation entirely

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.html).[\_preDeleteOperation](foundry.documents.BaseRollTable.html#_predeleteoperation)

### `Protected` `Static`\_preUpdateOperation

* \_preUpdateOperation(  
  Â Â Â Â documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[],  
  Â Â Â Â operation: [DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.html),  
  Â Â Â Â user: [BaseUser](foundry.documents.BaseUser.html),  
  ): Promise<boolean | void>

  `Protected`

  Pre-process an update operation, potentially altering its instructions or input data. Pre-operation events only
  occur for the client which requested the operation.

  This batch-wise workflow occurs after individual [\_preUpdate](foundry.documents.RollTable.html#_preupdate) workflows and provides a final pre-flight check
  before a database operation occurs.

  Modifications to the requested updates are performed by mutating the data array of the operation.

  #### Parameters

  + documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[]

    Document instances to be updated
  + operation: [DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.html)

    Parameters of the database update operation
  + user: [BaseUser](foundry.documents.BaseUser.html)

    The User requesting the update operation

  #### Returns Promise<boolean | void>

  Return false to cancel the update operation entirely

  Inherited from [BaseRollTable](foundry.documents.BaseRollTable.html).[\_preUpdateOperation](foundry.documents.BaseRollTable.html#_preupdateoperation)