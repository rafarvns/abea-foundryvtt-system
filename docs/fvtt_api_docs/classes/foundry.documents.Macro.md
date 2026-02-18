---
title: "Macro | Foundry Virtual Tabletop - API Documentation - Version 13"
url: "https://foundryvtt.com/api/classes/foundry.documents.Macro.html"
category: "classes"
---

* [Foundry Virtual Tabletop - API Documentation - Version 13](../modules.html)
* [foundry](../modules/foundry.html)
* [documents](../modules/foundry.documents.html)
* [Macro](foundry.documents.Macro.html)

# Class Macro

The client-side Macro document which extends the common BaseMacro model.

#### Mixes

ClientDocumentMixin

#### See

* [foundry.documents.collections.Macros](foundry.documents.collections.Macros.html): The world-level collection of Macro documents
* [foundry.applications.sheets.MacroConfig](foundry.applications.sheets.MacroConfig.html): The Macro configuration application

#### Hierarchy ([View Summary](../hierarchy.html#foundry.documents.Macro))

* [BaseMacro](foundry.documents.BaseMacro.html)<this>
  + Macro

##### Index

### Constructors

[constructor](foundry.documents.Macro.html#constructor)

### Properties

[\_source](foundry.documents.Macro.html#_source)
[parent](foundry.documents.Macro.html#parent)
[\_schema](foundry.documents.Macro.html#_schema)
[DEFAULT\_ICON](foundry.documents.Macro.html#default_icon)
[LOCALIZATION\_PREFIXES](foundry.documents.Macro.html#localization_prefixes)
[metadata](foundry.documents.Macro.html#metadata)

### Accessors

[canExecute](foundry.documents.Macro.html#canexecute)
[compendium](foundry.documents.Macro.html#compendium)
[id](foundry.documents.Macro.html#id)
[inCompendium](foundry.documents.Macro.html#incompendium)
[invalid](foundry.documents.Macro.html#invalid)
[isAuthor](foundry.documents.Macro.html#isauthor)
[isEmbedded](foundry.documents.Macro.html#isembedded)
[schema](foundry.documents.Macro.html#schema)
[thumbnail](foundry.documents.Macro.html#thumbnail)
[uuid](foundry.documents.Macro.html#uuid)
[validationFailures](foundry.documents.Macro.html#validationfailures)
[baseDocument](foundry.documents.Macro.html#basedocument)
[collectionName](foundry.documents.Macro.html#collectionname)
[database](foundry.documents.Macro.html#database)
[documentName](foundry.documents.Macro.html#documentname)
[hasTypeData](foundry.documents.Macro.html#hastypedata)
[hierarchy](foundry.documents.Macro.html#hierarchy)
[implementation](foundry.documents.Macro.html#implementation)
[schema](foundry.documents.Macro.html#schema-2)
[TYPES](foundry.documents.Macro.html#types)

### Methods

[\_configure](foundry.documents.Macro.html#_configure)
[\_getParentCollection](foundry.documents.Macro.html#_getparentcollection)
[\_initialize](foundry.documents.Macro.html#_initialize)
[\_onClickDocumentLink](foundry.documents.Macro.html#_onclickdocumentlink)
[\_onCreate](foundry.documents.Macro.html#_oncreate)
[\_preCreate](foundry.documents.Macro.html#_precreate)
[canUserExecute](foundry.documents.Macro.html#canuserexecute)
[canUserModify](foundry.documents.Macro.html#canusermodify)
[clone](foundry.documents.Macro.html#clone)
[createEmbeddedDocuments](foundry.documents.Macro.html#createembeddeddocuments)
[delete](foundry.documents.Macro.html#delete)
[deleteEmbeddedDocuments](foundry.documents.Macro.html#deleteembeddeddocuments)
[execute](foundry.documents.Macro.html#execute)
[getEmbeddedCollection](foundry.documents.Macro.html#getembeddedcollection)
[getEmbeddedDocument](foundry.documents.Macro.html#getembeddeddocument)
[getFlag](foundry.documents.Macro.html#getflag)
[getUserLevel](foundry.documents.Macro.html#getuserlevel)
[migrateSystemData](foundry.documents.Macro.html#migratesystemdata)
[reset](foundry.documents.Macro.html#reset)
[setFlag](foundry.documents.Macro.html#setflag)
[testUserPermission](foundry.documents.Macro.html#testuserpermission)
[toJSON](foundry.documents.Macro.html#tojson)
[toObject](foundry.documents.Macro.html#toobject)
[traverseEmbeddedDocuments](foundry.documents.Macro.html#traverseembeddeddocuments)
[unsetFlag](foundry.documents.Macro.html#unsetflag)
[update](foundry.documents.Macro.html#update)
[updateEmbeddedDocuments](foundry.documents.Macro.html#updateembeddeddocuments)
[updateSource](foundry.documents.Macro.html#updatesource)
[validate](foundry.documents.Macro.html#validate)
[\_initializeSource](foundry.documents.Macro.html#_initializesource)
[\_onDelete](foundry.documents.Macro.html#_ondelete)
[\_onUpdate](foundry.documents.Macro.html#_onupdate)
[\_preDelete](foundry.documents.Macro.html#_predelete)
[\_preUpdate](foundry.documents.Macro.html#_preupdate)
[\_addDataFieldMigration](foundry.documents.Macro.html#_adddatafieldmigration)
[\_addDataFieldShim](foundry.documents.Macro.html#_adddatafieldshim)
[\_addDataFieldShims](foundry.documents.Macro.html#_adddatafieldshims)
[\_clearFieldsRecursively](foundry.documents.Macro.html#_clearfieldsrecursively)
[\_initializationOrder](foundry.documents.Macro.html#_initializationorder)
[\_logDataFieldMigration](foundry.documents.Macro.html#_logdatafieldmigration)
[canUserCreate](foundry.documents.Macro.html#canusercreate)
[cleanData](foundry.documents.Macro.html#cleandata)
[create](foundry.documents.Macro.html#create)
[createDocuments](foundry.documents.Macro.html#createdocuments)
[defineSchema](foundry.documents.Macro.html#defineschema)
[deleteDocuments](foundry.documents.Macro.html#deletedocuments)
[fromJSON](foundry.documents.Macro.html#fromjson)
[fromSource](foundry.documents.Macro.html#fromsource)
[get](foundry.documents.Macro.html#get)
[getCollectionName](foundry.documents.Macro.html#getcollectionname)
[migrateData](foundry.documents.Macro.html#migratedata)
[migrateDataSafe](foundry.documents.Macro.html#migratedatasafe)
[shimData](foundry.documents.Macro.html#shimdata)
[updateDocuments](foundry.documents.Macro.html#updatedocuments)
[validateJoint](foundry.documents.Macro.html#validatejoint)
[\_onCreateOperation](foundry.documents.Macro.html#_oncreateoperation)
[\_onDeleteOperation](foundry.documents.Macro.html#_ondeleteoperation)
[\_onUpdateOperation](foundry.documents.Macro.html#_onupdateoperation)
[\_preCreateOperation](foundry.documents.Macro.html#_precreateoperation)
[\_preDeleteOperation](foundry.documents.Macro.html#_predeleteoperation)
[\_preUpdateOperation](foundry.documents.Macro.html#_preupdateoperation)

## Constructors

### constructor

* new Macro(  
  Â Â Â Â data?: Partial<[MacroData](../interfaces/foundry.documents.types.MacroData.html)>,  
  Â Â Â Â options?: [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html),  
  ): [documents](../modules/foundry.documents.html).[Macro](foundry.documents.Macro.html)

  #### Parameters

  + `Optional`data: Partial<[MacroData](../interfaces/foundry.documents.types.MacroData.html)> = {}

    Initial data used to construct the data object. The provided object will be
    owned by the constructed model instance and may be mutated.
  + `Optional`options: [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html) = {}

    Context and data validation options which affects initial model construction.

  #### Returns [documents](../modules/foundry.documents.html).[Macro](foundry.documents.Macro.html)

  Inherited from [BaseMacro](foundry.documents.BaseMacro.html).[constructor](foundry.documents.BaseMacro.html#constructor)

## Properties

### \_source

\_source: [MacroData](../interfaces/foundry.documents.types.MacroData.html)

The source data object for this DataModel instance.
Once constructed, the source object is sealed such that no keys may be added nor removed.

Inherited from [BaseMacro](foundry.documents.BaseMacro.html).[\_source](foundry.documents.BaseMacro.html#_source)

### parent

parent: null | [DataModel](foundry.abstract.DataModel.html)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.html)>

An immutable reverse-reference to a parent DataModel to which this model belongs.

Inherited from [BaseMacro](foundry.documents.BaseMacro.html).[parent](foundry.documents.BaseMacro.html#parent)

### `Static` `Internal`\_schema

\_schema: [SchemaField](foundry.data.fields.SchemaField.html)

The defined and cached Data Schema for all instances of this DataModel.

Inherited from [BaseMacro](foundry.documents.BaseMacro.html).[\_schema](foundry.documents.BaseMacro.html#_schema)

### `Static`DEFAULT\_ICON

DEFAULT\_ICON: string = "icons/svg/dice-target.svg"

The default icon used for newly created Macro documents.

Inherited from [BaseMacro](foundry.documents.BaseMacro.html).[DEFAULT\_ICON](foundry.documents.BaseMacro.html#default_icon)

### `Static`LOCALIZATION\_PREFIXES

LOCALIZATION\_PREFIXES: string[] = ...

Inherited from [BaseMacro](foundry.documents.BaseMacro.html).[LOCALIZATION\_PREFIXES](foundry.documents.BaseMacro.html#localization_prefixes)

### `Static`metadata

metadata: object = ...

Default metadata which applies to each instance of this Document type.

Inherited from [BaseMacro](foundry.documents.BaseMacro.html).[metadata](foundry.documents.BaseMacro.html#metadata)

## Accessors

### canExecute

* get canExecute(): boolean

  Test whether the current User is capable of executing this Macro.

  #### Returns boolean

### `Abstract`compendium

* get compendium(): any

  A reference to the Compendium Collection containing this Document, if any, and otherwise null.

  #### Returns any

  Inherited from ClientDocumentMixin(BaseMacro).compendium

### id

* get id(): null | string

  The canonical identifier for this Document.

  #### Returns null | string

  Inherited from ClientDocumentMixin(BaseMacro).id

### inCompendium

* get inCompendium(): boolean

  Is this document in a compendium?

  #### Returns boolean

  Inherited from ClientDocumentMixin(BaseMacro).inCompendium

### invalid

* get invalid(): boolean

  Is the current state of this DataModel invalid?
  The model is invalid if there is any unresolved failure.

  #### Returns boolean

  Inherited from ClientDocumentMixin(BaseMacro).invalid

### isAuthor

* get isAuthor(): boolean

  Is the current User the author of this macro?

  #### Returns boolean

### isEmbedded

* get isEmbedded(): boolean

  Is this document embedded within a parent document?

  #### Returns boolean

  Inherited from ClientDocumentMixin(BaseMacro).isEmbedded

### schema

* get schema(): [SchemaField](foundry.data.fields.SchemaField.html)

  Define the data schema for this document instance.

  #### Returns [SchemaField](foundry.data.fields.SchemaField.html)

  Inherited from ClientDocumentMixin(BaseMacro).schema

### thumbnail

* get thumbnail(): string

  Provide a thumbnail image path used to represent this document.

  #### Returns string

### uuid

* get uuid(): string

  A Universally Unique Identifier (uuid) for this Document instance.

  #### Returns string

  Inherited from ClientDocumentMixin(BaseMacro).uuid

### validationFailures

* get validationFailures(): {  
  Â Â Â Â fields: null  
  Â Â Â Â | [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.html);  
  Â Â Â Â joint: null | [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.html);  
  }

  An array of validation failure instances which may have occurred when this instance was last validated.

  #### Returns { Â Â Â Â fields: null | [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.html); Â Â Â Â joint: null | [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.html); }

  Inherited from ClientDocumentMixin(BaseMacro).validationFailures

### `Static`baseDocument

* get baseDocument(): typeof [Document](foundry.abstract.Document.html)

  The base document definition that this document class extends from.

  #### Returns typeof [Document](foundry.abstract.Document.html)

  Inherited from ClientDocumentMixin(BaseMacro).baseDocument

### `Static`collectionName

* get collectionName(): string

  The named collection to which this Document belongs.

  #### Returns string

  Inherited from ClientDocumentMixin(BaseMacro).collectionName

### `Static`database

* get database(): [abstract](../modules/foundry.abstract.html).[DatabaseBackend](foundry.abstract.DatabaseBackend.html)

  The database backend used to execute operations and handle results.

  #### Returns [abstract](../modules/foundry.abstract.html).[DatabaseBackend](foundry.abstract.DatabaseBackend.html)

  Inherited from ClientDocumentMixin(BaseMacro).database

### `Static`documentName

* get documentName(): string

  The canonical name of this Document type, for example "Actor".

  #### Returns string

  Inherited from ClientDocumentMixin(BaseMacro).documentName

### `Static`hasTypeData

* get hasTypeData(): boolean

  Does this Document support additional subtypes?

  #### Returns boolean

  Inherited from ClientDocumentMixin(BaseMacro).hasTypeData

### `Static`hierarchy

* get hierarchy(): Readonly<Record<string, any>>

  The Embedded Document hierarchy for this Document.

  #### Returns Readonly<Record<string, any>>

  Inherited from ClientDocumentMixin(BaseMacro).hierarchy

### `Static`implementation

* get implementation(): typeof [Document](foundry.abstract.Document.html)

  Return a reference to the configured subclass of this base Document type.

  #### Returns typeof [Document](foundry.abstract.Document.html)

  Inherited from ClientDocumentMixin(BaseMacro).implementation

### `Static`schema

* get schema(): [SchemaField](foundry.data.fields.SchemaField.html)

  Ensure that all Document classes share the same schema of their base declaration.

  #### Returns [SchemaField](foundry.data.fields.SchemaField.html)

  Inherited from ClientDocumentMixin(BaseMacro).schema

### `Static`TYPES

* get TYPES(): string[]

  The allowed types which may exist for this Document class.

  #### Returns string[]

  Inherited from ClientDocumentMixin(BaseMacro).TYPES

## Methods

### \_configure

* \_configure(\_\_namedParameters?: { pack?: null; parentCollection?: null }): void

  #### Parameters

  + \_\_namedParameters: { pack?: null; parentCollection?: null } = {}

  #### Returns void

  Inherited from [BaseMacro](foundry.documents.BaseMacro.html).[\_configure](foundry.documents.BaseMacro.html#_configure)

### \_getParentCollection

* \_getParentCollection(parentCollection?: null | string): null | string

  `Internal`

  Identify the collection in a parent Document that this Document belongs to, if any.

  #### Parameters

  + `Optional`parentCollection: null | string

    An explicitly provided parent collection name.

  #### Returns null | string

  Inherited from [BaseMacro](foundry.documents.BaseMacro.html).[\_getParentCollection](foundry.documents.BaseMacro.html#_getparentcollection)

### \_initialize

* \_initialize(options: any): void

  Initialize the instance by copying data from the source object to instance attributes.
  This mirrors the workflow of SchemaField#initialize but with some added functionality.

  #### Parameters

  + options: any

    Options provided to the model constructor

  #### Returns void

  Inherited from [BaseMacro](foundry.documents.BaseMacro.html).[\_initialize](foundry.documents.BaseMacro.html#_initialize)

### \_onClickDocumentLink

* \_onClickDocumentLink(event: any): void | Promise<unknown>

  #### Parameters

  + event: any

  #### Returns void | Promise<unknown>

  #### Inherit Doc

### \_onCreate

* \_onCreate(data: any, options: any, userId: any): void

  Post-process a creation operation for a single Document instance. Post-operation events occur for all connected
  clients.

  #### Parameters

  + data: any

    The initial data object provided to the document creation request
  + options: any

    Additional options which modify the creation request
  + userId: any

    The id of the User requesting the document update

  #### Returns void

  Overrides [BaseMacro](foundry.documents.BaseMacro.html).[\_onCreate](foundry.documents.BaseMacro.html#_oncreate)

### \_preCreate

* \_preCreate(data: any, options: any, user: any): Promise<undefined | false>

  Pre-process a creation operation for a single Document instance. Pre-operation events only occur for the client
  which requested the operation.

  Modifications to the pending Document instance must be performed using [updateSource](foundry.documents.Macro.html#updatesource).

  #### Parameters

  + data: any

    The initial data object provided to the document creation request
  + options: any

    Additional options which modify the creation request
  + user: any

    The User requesting the document creation

  #### Returns Promise<undefined | false>

  Return false to exclude this Document from the creation operation

  Inherited from [BaseMacro](foundry.documents.BaseMacro.html).[\_preCreate](foundry.documents.BaseMacro.html#_precreate)

### canUserExecute

* canUserExecute(user: [documents](../modules/foundry.documents.html).[User](foundry.documents.User.html)): boolean

  Test whether the given User is capable of executing this Macro.

  #### Parameters

  + user: [documents](../modules/foundry.documents.html).[User](foundry.documents.User.html)

    The User to test.

  #### Returns boolean

  Can this User execute this Macro?

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

  Inherited from [BaseMacro](foundry.documents.BaseMacro.html).[canUserModify](foundry.documents.BaseMacro.html#canusermodify)

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

  Inherited from [BaseMacro](foundry.documents.BaseMacro.html).[clone](foundry.documents.BaseMacro.html#clone)

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

  Inherited from [BaseMacro](foundry.documents.BaseMacro.html).[createEmbeddedDocuments](foundry.documents.BaseMacro.html#createembeddeddocuments)

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

  Inherited from [BaseMacro](foundry.documents.BaseMacro.html).[delete](foundry.documents.BaseMacro.html#delete)

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

  Inherited from [BaseMacro](foundry.documents.BaseMacro.html).[deleteEmbeddedDocuments](foundry.documents.BaseMacro.html#deleteembeddeddocuments)

### execute

* execute(  
  Â Â Â Â scope?: {  
  Â Â Â Â Â Â Â Â actor?: any;  
  Â Â Â Â Â Â Â Â event?: Event | [RegionEvent](../interfaces/foundry.documents.types.RegionEvent.html);  
  Â Â Â Â Â Â Â Â speaker?: any;  
  Â Â Â Â Â Â Â Â token?: any;  
  Â Â Â Â },  
  ): void  
  | Promise<unknown>

  Execute the Macro command.

  #### Parameters

  + `Optional`scope: { actor?: any; event?: Event | [RegionEvent](../interfaces/foundry.documents.types.RegionEvent.html); speaker?: any; token?: any } = {}

    Macro execution scope which is passed to script macros

    - ##### `Optional`actor?: any

      An Actor who is the protagonist of the executed action
    - ##### `Optional`event?: Event | [RegionEvent](../interfaces/foundry.documents.types.RegionEvent.html)

      An optional event passed to the executed macro
    - ##### `Optional`speaker?: any

      The speaker data
    - ##### `Optional`token?: any

      A Token which is the protagonist of the executed action

  #### Returns void | Promise<unknown>

  A promise containing a created [foundry.documents.ChatMessage](foundry.documents.ChatMessage.html)
  (or `undefined`) if a chat macro or the return value if a script macro.
  A void return is possible if the user is not permitted to execute macros
  or a script macro execution fails.

### getEmbeddedCollection

* getEmbeddedCollection(embeddedName: string): DocumentCollection

  Obtain a reference to the Array of source data within the data object for a certain embedded Document name

  #### Parameters

  + embeddedName: string

    The name of the embedded Document type

  #### Returns DocumentCollection

  The Collection instance of embedded Documents of the requested type

  Inherited from [BaseMacro](foundry.documents.BaseMacro.html).[getEmbeddedCollection](foundry.documents.BaseMacro.html#getembeddedcollection)

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

  Inherited from [BaseMacro](foundry.documents.BaseMacro.html).[getEmbeddedDocument](foundry.documents.BaseMacro.html#getembeddeddocument)

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

  Inherited from [BaseMacro](foundry.documents.BaseMacro.html).[getFlag](foundry.documents.BaseMacro.html#getflag)

### getUserLevel

* getUserLevel(user: any): [DocumentOwnershipNumber](../types/CONST.DocumentOwnershipNumber.html)

  Get the explicit permission level that a User has over this Document, a value in CONST.DOCUMENT\_OWNERSHIP\_LEVELS.
  Compendium content ignores the ownership field in favor of User role-based ownership. Otherwise, Documents use
  granular per-User ownership definitions and Embedded Documents defer to their parent ownership.

  This method returns the value recorded in Document ownership, regardless of the User's role, for example a
  GAMEMASTER user might still return a result of NONE if they are not explicitly denoted as having a level.

  To test whether a user has a certain capability over the document, testUserPermission should be used.

  #### Parameters

  + user: any

    The User being tested

  #### Returns [DocumentOwnershipNumber](../types/CONST.DocumentOwnershipNumber.html)

  A numeric permission level from [CONST.DOCUMENT\_OWNERSHIP\_LEVELS](../variables/CONST.DOCUMENT_OWNERSHIP_LEVELS.html)

  Inherited from [BaseMacro](foundry.documents.BaseMacro.html).[getUserLevel](foundry.documents.BaseMacro.html#getuserlevel)

### migrateSystemData

* migrateSystemData(): object

  For Documents which include game system data, migrate the system data object to conform to its latest data model.
  The data model is defined by the template.json specification included by the game system.

  #### Returns object

  The migrated system data object

  Inherited from [BaseMacro](foundry.documents.BaseMacro.html).[migrateSystemData](foundry.documents.BaseMacro.html#migratesystemdata)

### reset

* reset(): void

  Reset the state of this data instance back to mirror the contained source data, erasing any changes.

  #### Returns void

  Inherited from [BaseMacro](foundry.documents.BaseMacro.html).[reset](foundry.documents.BaseMacro.html#reset)

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

  Inherited from [BaseMacro](foundry.documents.BaseMacro.html).[setFlag](foundry.documents.BaseMacro.html#setflag)

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

  Inherited from [BaseMacro](foundry.documents.BaseMacro.html).[testUserPermission](foundry.documents.BaseMacro.html#testuserpermission)

### toJSON

* toJSON(): object

  Extract the source data for the DataModel into a simple object format that can be serialized.

  #### Returns object

  The document source data expressed as a plain object

  Inherited from [BaseMacro](foundry.documents.BaseMacro.html).[toJSON](foundry.documents.BaseMacro.html#tojson)

### toObject

* toObject(source?: boolean): any

  Copy and transform the DataModel into a plain object.
  Draw the values of the extracted object from the data source (by default) otherwise from its transformed values.

  #### Parameters

  + source: boolean = true

    Draw values from the underlying data source rather than transformed values

  #### Returns any

  The extracted primitive object

  Inherited from [BaseMacro](foundry.documents.BaseMacro.html).[toObject](foundry.documents.BaseMacro.html#toobject)

### traverseEmbeddedDocuments

* traverseEmbeddedDocuments(\_parentPath?: string): Generator<any, void, any>

  Iterate over all embedded Documents that are hierarchical children of this Document.

  #### Parameters

  + `Optional`\_parentPath: string

    A parent field path already traversed

  #### Returns Generator<any, void, any>

  #### Yields

  Inherited from [BaseMacro](foundry.documents.BaseMacro.html).[traverseEmbeddedDocuments](foundry.documents.BaseMacro.html#traverseembeddeddocuments)

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

  Inherited from [BaseMacro](foundry.documents.BaseMacro.html).[unsetFlag](foundry.documents.BaseMacro.html#unsetflag)

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

  Inherited from [BaseMacro](foundry.documents.BaseMacro.html).[update](foundry.documents.BaseMacro.html#update)

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

  Inherited from [BaseMacro](foundry.documents.BaseMacro.html).[updateEmbeddedDocuments](foundry.documents.BaseMacro.html#updateembeddeddocuments)

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

  Inherited from [BaseMacro](foundry.documents.BaseMacro.html).[updateSource](foundry.documents.BaseMacro.html#updatesource)

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

  Inherited from [BaseMacro](foundry.documents.BaseMacro.html).[validate](foundry.documents.BaseMacro.html#validate)

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

  Inherited from [BaseMacro](foundry.documents.BaseMacro.html).[\_initializeSource](foundry.documents.BaseMacro.html#_initializesource)

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

  Inherited from [BaseMacro](foundry.documents.BaseMacro.html).[\_onDelete](foundry.documents.BaseMacro.html#_ondelete)

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

  Inherited from [BaseMacro](foundry.documents.BaseMacro.html).[\_onUpdate](foundry.documents.BaseMacro.html#_onupdate)

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

  Inherited from [BaseMacro](foundry.documents.BaseMacro.html).[\_preDelete](foundry.documents.BaseMacro.html#_predelete)

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

  Inherited from [BaseMacro](foundry.documents.BaseMacro.html).[\_preUpdate](foundry.documents.BaseMacro.html#_preupdate)

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

  Inherited from [BaseMacro](foundry.documents.BaseMacro.html).[\_addDataFieldMigration](foundry.documents.BaseMacro.html#_adddatafieldmigration)

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

  Inherited from [BaseMacro](foundry.documents.BaseMacro.html).[\_addDataFieldShim](foundry.documents.BaseMacro.html#_adddatafieldshim)

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

  Inherited from [BaseMacro](foundry.documents.BaseMacro.html).[\_addDataFieldShims](foundry.documents.BaseMacro.html#_adddatafieldshims)

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

  Inherited from [BaseMacro](foundry.documents.BaseMacro.html).[\_clearFieldsRecursively](foundry.documents.BaseMacro.html#_clearfieldsrecursively)

### `Static`\_initializationOrder

* \_initializationOrder(): Generator<any[], void, unknown>

  #### Returns Generator<any[], void, unknown>

  Inherited from [BaseMacro](foundry.documents.BaseMacro.html).[\_initializationOrder](foundry.documents.BaseMacro.html#_initializationorder)

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

  Inherited from [BaseMacro](foundry.documents.BaseMacro.html).[\_logDataFieldMigration](foundry.documents.BaseMacro.html#_logdatafieldmigration)

### `Static`canUserCreate

* canUserCreate(user: any): any

  #### Parameters

  + user: any

  #### Returns any

  Inherited from [BaseMacro](foundry.documents.BaseMacro.html).[canUserCreate](foundry.documents.BaseMacro.html#canusercreate)

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

  Inherited from [BaseMacro](foundry.documents.BaseMacro.html).[cleanData](foundry.documents.BaseMacro.html#cleandata)

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

  Inherited from [BaseMacro](foundry.documents.BaseMacro.html).[create](foundry.documents.BaseMacro.html#create)

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

  Inherited from [BaseMacro](foundry.documents.BaseMacro.html).[createDocuments](foundry.documents.BaseMacro.html#createdocuments)

### `Static`defineSchema

* defineSchema(): {  
  Â Â Â Â \_id: [DocumentIdField](foundry.data.fields.DocumentIdField.html);  
  Â Â Â Â \_stats: [DocumentStatsField](foundry.data.fields.DocumentStatsField.html);  
  Â Â Â Â author: [DocumentAuthorField](foundry.data.fields.DocumentAuthorField.html);  
  Â Â Â Â command: [StringField](foundry.data.fields.StringField.html);  
  Â Â Â Â flags: [DocumentFlagsField](foundry.data.fields.DocumentFlagsField.html);  
  Â Â Â Â folder: [ForeignDocumentField](foundry.data.fields.ForeignDocumentField.html);  
  Â Â Â Â img: [FilePathField](foundry.data.fields.FilePathField.html);  
  Â Â Â Â name: [StringField](foundry.data.fields.StringField.html);  
  Â Â Â Â ownership: [DocumentOwnershipField](foundry.data.fields.DocumentOwnershipField.html);  
  Â Â Â Â scope: [StringField](foundry.data.fields.StringField.html);  
  Â Â Â Â sort: [IntegerSortField](foundry.data.fields.IntegerSortField.html);  
  Â Â Â Â type: [DocumentTypeField](foundry.data.fields.DocumentTypeField.html);  
  }

  Define the data schema for models of this type.
  The schema is populated the first time it is accessed and cached for future reuse.

  The schema, through its fields, provide the essential cleaning, validation, and initialization methods to turn the
  [\_source](foundry.documents.Macro.html#_source) values into direct properties of the data model. The schema is a static property of the model and
  is reused by all instances to perform validation.

  The schemas defined by the core software in classes like [foundry.documents.BaseActor](foundry.documents.BaseActor.html) are validated by the
  server, where user code does not run. However, almost all documents have a `flags` field to store data, and many
  have a `system` field that can be configured to be a [foundry.abstract.TypeDataModel](foundry.abstract.TypeDataModel.html) instance. Those models
  are *not* constructed on the server and rely purely on client-side code, which means certain extra-sensitive fields
  must be also be registered through your package manifest. [foundry.packages.types.ServerSanitizationFields](../interfaces/foundry.packages.types.ServerSanitizationFields.html)

  #### Returns { Â Â Â Â \_id: [DocumentIdField](foundry.data.fields.DocumentIdField.html); Â Â Â Â \_stats: [DocumentStatsField](foundry.data.fields.DocumentStatsField.html); Â Â Â Â author: [DocumentAuthorField](foundry.data.fields.DocumentAuthorField.html); Â Â Â Â command: [StringField](foundry.data.fields.StringField.html); Â Â Â Â flags: [DocumentFlagsField](foundry.data.fields.DocumentFlagsField.html); Â Â Â Â folder: [ForeignDocumentField](foundry.data.fields.ForeignDocumentField.html); Â Â Â Â img: [FilePathField](foundry.data.fields.FilePathField.html); Â Â Â Â name: [StringField](foundry.data.fields.StringField.html); Â Â Â Â ownership: [DocumentOwnershipField](foundry.data.fields.DocumentOwnershipField.html); Â Â Â Â scope: [StringField](foundry.data.fields.StringField.html); Â Â Â Â sort: [IntegerSortField](foundry.data.fields.IntegerSortField.html); Â Â Â Â type: [DocumentTypeField](foundry.data.fields.DocumentTypeField.html); }

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

  Inherited from [BaseMacro](foundry.documents.BaseMacro.html).[defineSchema](foundry.documents.BaseMacro.html#defineschema)

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

  Inherited from [BaseMacro](foundry.documents.BaseMacro.html).[deleteDocuments](foundry.documents.BaseMacro.html#deletedocuments)

### `Static`fromJSON

* fromJSON(json: string): [DataModel](foundry.abstract.DataModel.html)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.html)>

  Create a DataModel instance using a provided serialized JSON string.

  #### Parameters

  + json: string

    Serialized document data in string format

  #### Returns [DataModel](foundry.abstract.DataModel.html)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.html)>

  A constructed data model instance

  Inherited from [BaseMacro](foundry.documents.BaseMacro.html).[fromJSON](foundry.documents.BaseMacro.html#fromjson)

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

  Inherited from [BaseMacro](foundry.documents.BaseMacro.html).[fromSource](foundry.documents.BaseMacro.html#fromsource)

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

  Inherited from [BaseMacro](foundry.documents.BaseMacro.html).[get](foundry.documents.BaseMacro.html#get)

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

  Inherited from [BaseMacro](foundry.documents.BaseMacro.html).[getCollectionName](foundry.documents.BaseMacro.html#getcollectionname)

### `Static`migrateData

* migrateData(source: any): object

  Migrate candidate source data for this DataModel which may require initial cleaning or transformations.

  #### Parameters

  + source: any

    The candidate source data from which the model will be constructed

  #### Returns object

  Migrated source data, which is the same object as the `source` argument

  Inherited from [BaseMacro](foundry.documents.BaseMacro.html).[migrateData](foundry.documents.BaseMacro.html#migratedata)

### `Static`migrateDataSafe

* migrateDataSafe(source: object): object

  Wrap data migration in a try/catch which attempts it safely

  #### Parameters

  + source: object

    The candidate source data from which the model will be constructed

  #### Returns object

  Migrated source data, which is the same object as the `source` argument

  Inherited from [BaseMacro](foundry.documents.BaseMacro.html).[migrateDataSafe](foundry.documents.BaseMacro.html#migratedatasafe)

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

  Inherited from [BaseMacro](foundry.documents.BaseMacro.html).[shimData](foundry.documents.BaseMacro.html#shimdata)

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

  Inherited from [BaseMacro](foundry.documents.BaseMacro.html).[updateDocuments](foundry.documents.BaseMacro.html#updatedocuments)

### `Static`validateJoint

* validateJoint(data: any): void

  #### Parameters

  + data: any

  #### Returns void

  Inherited from [BaseMacro](foundry.documents.BaseMacro.html).[validateJoint](foundry.documents.BaseMacro.html#validatejoint)

### `Protected` `Static`\_onCreateOperation

* \_onCreateOperation(  
  Â Â Â Â documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[],  
  Â Â Â Â operation: [DatabaseCreateOperation](../interfaces/foundry.abstract.types.DatabaseCreateOperation.html),  
  Â Â Â Â user: [BaseUser](foundry.documents.BaseUser.html),  
  ): Promise<void>

  `Protected`

  Post-process a creation operation, reacting to database changes which have occurred. Post-operation events occur
  for all connected clients.

  This batch-wise workflow occurs after individual [\_onCreate](foundry.documents.Macro.html#_oncreate) workflows.

  #### Parameters

  + documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[]

    The Document instances which were created
  + operation: [DatabaseCreateOperation](../interfaces/foundry.abstract.types.DatabaseCreateOperation.html)

    Parameters of the database creation operation
  + user: [BaseUser](foundry.documents.BaseUser.html)

    The User who performed the creation operation

  #### Returns Promise<void>

  Inherited from [BaseMacro](foundry.documents.BaseMacro.html).[\_onCreateOperation](foundry.documents.BaseMacro.html#_oncreateoperation)

### `Protected` `Static`\_onDeleteOperation

* \_onDeleteOperation(  
  Â Â Â Â documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[],  
  Â Â Â Â operation: [DatabaseDeleteOperation](../interfaces/foundry.abstract.types.DatabaseDeleteOperation.html),  
  Â Â Â Â user: [BaseUser](foundry.documents.BaseUser.html),  
  ): Promise<void>

  `Protected`

  Post-process a deletion operation, reacting to database changes which have occurred. Post-operation events occur
  for all connected clients.

  This batch-wise workflow occurs after individual [\_onDelete](foundry.documents.Macro.html#_ondelete) workflows.

  #### Parameters

  + documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[]

    The Document instances which were deleted
  + operation: [DatabaseDeleteOperation](../interfaces/foundry.abstract.types.DatabaseDeleteOperation.html)

    Parameters of the database deletion operation
  + user: [BaseUser](foundry.documents.BaseUser.html)

    The User who performed the deletion operation

  #### Returns Promise<void>

  Inherited from [BaseMacro](foundry.documents.BaseMacro.html).[\_onDeleteOperation](foundry.documents.BaseMacro.html#_ondeleteoperation)

### `Protected` `Static`\_onUpdateOperation

* \_onUpdateOperation(  
  Â Â Â Â documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[],  
  Â Â Â Â operation: [DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.html),  
  Â Â Â Â user: [BaseUser](foundry.documents.BaseUser.html),  
  ): Promise<void>

  `Protected`

  Post-process an update operation, reacting to database changes which have occurred. Post-operation events occur
  for all connected clients.

  This batch-wise workflow occurs after individual [\_onUpdate](foundry.documents.Macro.html#_onupdate) workflows.

  #### Parameters

  + documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[]

    The Document instances which were updated
  + operation: [DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.html)

    Parameters of the database update operation
  + user: [BaseUser](foundry.documents.BaseUser.html)

    The User who performed the update operation

  #### Returns Promise<void>

  Inherited from [BaseMacro](foundry.documents.BaseMacro.html).[\_onUpdateOperation](foundry.documents.BaseMacro.html#_onupdateoperation)

### `Protected` `Static`\_preCreateOperation

* \_preCreateOperation(  
  Â Â Â Â documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[],  
  Â Â Â Â operation: [DatabaseCreateOperation](../interfaces/foundry.abstract.types.DatabaseCreateOperation.html),  
  Â Â Â Â user: [BaseUser](foundry.documents.BaseUser.html),  
  ): Promise<boolean | void>

  `Protected`

  Pre-process a creation operation, potentially altering its instructions or input data. Pre-operation events only
  occur for the client which requested the operation.

  This batch-wise workflow occurs after individual [\_preCreate](foundry.documents.Macro.html#_precreate) workflows and provides a final pre-flight check
  before a database operation occurs.

  Modifications to pending documents must mutate the documents array or alter individual document instances using
  [updateSource](foundry.documents.Macro.html#updatesource).

  #### Parameters

  + documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[]

    Pending document instances to be created
  + operation: [DatabaseCreateOperation](../interfaces/foundry.abstract.types.DatabaseCreateOperation.html)

    Parameters of the database creation operation
  + user: [BaseUser](foundry.documents.BaseUser.html)

    The User requesting the creation operation

  #### Returns Promise<boolean | void>

  Return false to cancel the creation operation entirely

  Inherited from [BaseMacro](foundry.documents.BaseMacro.html).[\_preCreateOperation](foundry.documents.BaseMacro.html#_precreateoperation)

### `Protected` `Static`\_preDeleteOperation

* \_preDeleteOperation(  
  Â Â Â Â documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[],  
  Â Â Â Â operation: [DatabaseDeleteOperation](../interfaces/foundry.abstract.types.DatabaseDeleteOperation.html),  
  Â Â Â Â user: [BaseUser](foundry.documents.BaseUser.html),  
  ): Promise<boolean | void>

  `Protected`

  Pre-process a deletion operation, potentially altering its instructions or input data. Pre-operation events only
  occur for the client which requested the operation.

  This batch-wise workflow occurs after individual [\_preDelete](foundry.documents.Macro.html#_predelete) workflows and provides a final pre-flight check
  before a database operation occurs.

  Modifications to the requested deletions are performed by mutating the operation object.
  [updateSource](foundry.documents.Macro.html#updatesource).

  #### Parameters

  + documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[]

    Document instances to be deleted
  + operation: [DatabaseDeleteOperation](../interfaces/foundry.abstract.types.DatabaseDeleteOperation.html)

    Parameters of the database update operation
  + user: [BaseUser](foundry.documents.BaseUser.html)

    The User requesting the deletion operation

  #### Returns Promise<boolean | void>

  Return false to cancel the deletion operation entirely

  Inherited from [BaseMacro](foundry.documents.BaseMacro.html).[\_preDeleteOperation](foundry.documents.BaseMacro.html#_predeleteoperation)

### `Protected` `Static`\_preUpdateOperation

* \_preUpdateOperation(  
  Â Â Â Â documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[],  
  Â Â Â Â operation: [DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.html),  
  Â Â Â Â user: [BaseUser](foundry.documents.BaseUser.html),  
  ): Promise<boolean | void>

  `Protected`

  Pre-process an update operation, potentially altering its instructions or input data. Pre-operation events only
  occur for the client which requested the operation.

  This batch-wise workflow occurs after individual [\_preUpdate](foundry.documents.Macro.html#_preupdate) workflows and provides a final pre-flight check
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

  Inherited from [BaseMacro](foundry.documents.BaseMacro.html).[\_preUpdateOperation](foundry.documents.BaseMacro.html#_preupdateoperation)