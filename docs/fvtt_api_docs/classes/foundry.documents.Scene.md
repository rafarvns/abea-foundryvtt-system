---
title: "Scene | Foundry Virtual Tabletop - API Documentation - Version 13"
url: "https://foundryvtt.com/api/classes/foundry.documents.Scene.html"
category: "classes"
---

* [Foundry Virtual Tabletop - API Documentation - Version 13](../modules.html)
* [foundry](../modules/foundry.html)
* [documents](../modules/foundry.documents.html)
* [Scene](foundry.documents.Scene.html)

# Class Scene

The client-side Scene document which extends the common BaseScene model.

#### Mixes

ClientDocumentMixin

#### See

* [foundry.documents.collections.Scenes](foundry.documents.collections.Scenes.html): The world-level collection of Scene documents
* [foundry.applications.sheets.SceneConfig](foundry.applications.sheets.SceneConfig.html): The Scene configuration application

#### Hierarchy ([View Summary](../hierarchy.html#foundry.documents.Scene))

* [BaseScene](foundry.documents.BaseScene.html)<this>
  + Scene

##### Index

### Constructors

[constructor](foundry.documents.Scene.html#constructor)

### Properties

[\_source](foundry.documents.Scene.html#_source)
[\_view](foundry.documents.Scene.html#_view)
[\_viewPosition](foundry.documents.Scene.html#_viewposition)
[dimensions](foundry.documents.Scene.html#dimensions)
[grid](foundry.documents.Scene.html#grid)
[parent](foundry.documents.Scene.html#parent)
[\_schema](foundry.documents.Scene.html#_schema)
[LOCALIZATION\_PREFIXES](foundry.documents.Scene.html#localization_prefixes)
[metadata](foundry.documents.Scene.html#metadata)

### Accessors

[compendium](foundry.documents.Scene.html#compendium)
[id](foundry.documents.Scene.html#id)
[inCompendium](foundry.documents.Scene.html#incompendium)
[invalid](foundry.documents.Scene.html#invalid)
[isEmbedded](foundry.documents.Scene.html#isembedded)
[isView](foundry.documents.Scene.html#isview)
[schema](foundry.documents.Scene.html#schema)
[thumbnail](foundry.documents.Scene.html#thumbnail)
[uuid](foundry.documents.Scene.html#uuid)
[validationFailures](foundry.documents.Scene.html#validationfailures)
[baseDocument](foundry.documents.Scene.html#basedocument)
[collectionName](foundry.documents.Scene.html#collectionname)
[database](foundry.documents.Scene.html#database)
[defaultGrid](foundry.documents.Scene.html#defaultgrid)
[documentName](foundry.documents.Scene.html#documentname)
[hasTypeData](foundry.documents.Scene.html#hastypedata)
[hierarchy](foundry.documents.Scene.html#hierarchy)
[implementation](foundry.documents.Scene.html#implementation)
[schema](foundry.documents.Scene.html#schema-2)
[TYPES](foundry.documents.Scene.html#types)

### Methods

[\_configure](foundry.documents.Scene.html#_configure)
[\_getParentCollection](foundry.documents.Scene.html#_getparentcollection)
[\_initialize](foundry.documents.Scene.html#_initialize)
[\_onClickDocumentLink](foundry.documents.Scene.html#_onclickdocumentlink)
[\_onCreate](foundry.documents.Scene.html#_oncreate)
[\_onDelete](foundry.documents.Scene.html#_ondelete)
[\_onUpdate](foundry.documents.Scene.html#_onupdate)
[\_onUpdateDescendantDocuments](foundry.documents.Scene.html#_onupdatedescendantdocuments)
[\_preCreate](foundry.documents.Scene.html#_precreate)
[\_preCreateDescendantDocuments](foundry.documents.Scene.html#_precreatedescendantdocuments)
[\_preDeleteDescendantDocuments](foundry.documents.Scene.html#_predeletedescendantdocuments)
[\_preUpdate](foundry.documents.Scene.html#_preupdate)
[\_preUpdateDescendantDocuments](foundry.documents.Scene.html#_preupdatedescendantdocuments)
[activate](foundry.documents.Scene.html#activate)
[canUserModify](foundry.documents.Scene.html#canusermodify)
[clearMovementHistories](foundry.documents.Scene.html#clearmovementhistories)
[clone](foundry.documents.Scene.html#clone)
[createEmbeddedDocuments](foundry.documents.Scene.html#createembeddeddocuments)
[createThumbnail](foundry.documents.Scene.html#createthumbnail)
[delete](foundry.documents.Scene.html#delete)
[deleteEmbeddedDocuments](foundry.documents.Scene.html#deleteembeddeddocuments)
[getDimensions](foundry.documents.Scene.html#getdimensions)
[getEmbeddedCollection](foundry.documents.Scene.html#getembeddedcollection)
[getEmbeddedDocument](foundry.documents.Scene.html#getembeddeddocument)
[getFlag](foundry.documents.Scene.html#getflag)
[getUserLevel](foundry.documents.Scene.html#getuserlevel)
[migrateSystemData](foundry.documents.Scene.html#migratesystemdata)
[prepareBaseData](foundry.documents.Scene.html#preparebasedata)
[pullUsers](foundry.documents.Scene.html#pullusers)
[reset](foundry.documents.Scene.html#reset)
[setFlag](foundry.documents.Scene.html#setflag)
[testUserPermission](foundry.documents.Scene.html#testuserpermission)
[toCompendium](foundry.documents.Scene.html#tocompendium)
[toJSON](foundry.documents.Scene.html#tojson)
[toObject](foundry.documents.Scene.html#toobject)
[traverseEmbeddedDocuments](foundry.documents.Scene.html#traverseembeddeddocuments)
[unsetFlag](foundry.documents.Scene.html#unsetflag)
[unview](foundry.documents.Scene.html#unview)
[update](foundry.documents.Scene.html#update)
[updateEmbeddedDocuments](foundry.documents.Scene.html#updateembeddeddocuments)
[updateSource](foundry.documents.Scene.html#updatesource)
[updateTokenRegions](foundry.documents.Scene.html#updatetokenregions)
[validate](foundry.documents.Scene.html#validate)
[view](foundry.documents.Scene.html#view)
[\_initializeSource](foundry.documents.Scene.html#_initializesource)
[\_onActivate](foundry.documents.Scene.html#_onactivate)
[\_preDelete](foundry.documents.Scene.html#_predelete)
[\_addDataFieldMigration](foundry.documents.Scene.html#_adddatafieldmigration)
[\_addDataFieldShim](foundry.documents.Scene.html#_adddatafieldshim)
[\_addDataFieldShims](foundry.documents.Scene.html#_adddatafieldshims)
[\_clearFieldsRecursively](foundry.documents.Scene.html#_clearfieldsrecursively)
[\_initializationOrder](foundry.documents.Scene.html#_initializationorder)
[\_logDataFieldMigration](foundry.documents.Scene.html#_logdatafieldmigration)
[\_onUpdateOperation](foundry.documents.Scene.html#_onupdateoperation)
[\_preCreateOperation](foundry.documents.Scene.html#_precreateoperation)
[canUserCreate](foundry.documents.Scene.html#canusercreate)
[cleanData](foundry.documents.Scene.html#cleandata)
[create](foundry.documents.Scene.html#create)
[createDocuments](foundry.documents.Scene.html#createdocuments)
[defineSchema](foundry.documents.Scene.html#defineschema)
[deleteDocuments](foundry.documents.Scene.html#deletedocuments)
[fromJSON](foundry.documents.Scene.html#fromjson)
[fromSource](foundry.documents.Scene.html#fromsource)
[get](foundry.documents.Scene.html#get)
[getCollectionName](foundry.documents.Scene.html#getcollectionname)
[migrateData](foundry.documents.Scene.html#migratedata)
[migrateDataSafe](foundry.documents.Scene.html#migratedatasafe)
[shimData](foundry.documents.Scene.html#shimdata)
[updateDocuments](foundry.documents.Scene.html#updatedocuments)
[validateJoint](foundry.documents.Scene.html#validatejoint)
[\_onCreateOperation](foundry.documents.Scene.html#_oncreateoperation)
[\_onDeleteOperation](foundry.documents.Scene.html#_ondeleteoperation)
[\_preDeleteOperation](foundry.documents.Scene.html#_predeleteoperation)
[\_preUpdateOperation](foundry.documents.Scene.html#_preupdateoperation)

## Constructors

### constructor

* new Scene(  
  Â Â Â Â data?: Partial<[SceneData](../interfaces/foundry.documents.types.SceneData.html)>,  
  Â Â Â Â options?: [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html),  
  ): [documents](../modules/foundry.documents.html).[Scene](foundry.documents.Scene.html)

  #### Parameters

  + `Optional`data: Partial<[SceneData](../interfaces/foundry.documents.types.SceneData.html)> = {}

    Initial data used to construct the data object. The provided object will be
    owned by the constructed model instance and may be mutated.
  + `Optional`options: [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html) = {}

    Context and data validation options which affects initial model construction.

  #### Returns [documents](../modules/foundry.documents.html).[Scene](foundry.documents.Scene.html)

  Inherited from [BaseScene](foundry.documents.BaseScene.html).[constructor](foundry.documents.BaseScene.html#constructor)

## Properties

### \_source

\_source: [SceneData](../interfaces/foundry.documents.types.SceneData.html)

The source data object for this DataModel instance.
Once constructed, the source object is sealed such that no keys may be added nor removed.

Inherited from [BaseScene](foundry.documents.BaseScene.html).[\_source](foundry.documents.BaseScene.html#_source)

### `Internal`\_view

\_view: boolean = ...

Track whether the scene is the active view

### `Internal`\_viewPosition

\_viewPosition: [CanvasViewPosition](../interfaces/foundry.types.CanvasViewPosition.html) = {}

Track the viewed position of each scene (while in memory only, not persisted)
When switching back to a previously viewed scene, we can automatically pan to the previous position.

### dimensions

dimensions: [SceneDimensions](../interfaces/foundry.documents.types.SceneDimensions.html) = ...

Determine the canvas dimensions this Scene would occupy, if rendered

### grid

grid: [BaseGrid](foundry.grid.BaseGrid.html)<[GridCoordinates2D](../types/foundry.grid.types.GridCoordinates2D.html), [GridCoordinates3D](../types/foundry.grid.types.GridCoordinates3D.html)> = ...

The grid instance.

### parent

parent: null | [DataModel](foundry.abstract.DataModel.html)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.html)>

An immutable reverse-reference to a parent DataModel to which this model belongs.

Inherited from [BaseScene](foundry.documents.BaseScene.html).[parent](foundry.documents.BaseScene.html#parent)

### `Static` `Internal`\_schema

\_schema: [SchemaField](foundry.data.fields.SchemaField.html)

The defined and cached Data Schema for all instances of this DataModel.

Inherited from [BaseScene](foundry.documents.BaseScene.html).[\_schema](foundry.documents.BaseScene.html#_schema)

### `Static`LOCALIZATION\_PREFIXES

LOCALIZATION\_PREFIXES: string[] = ...

Inherited from [BaseScene](foundry.documents.BaseScene.html).[LOCALIZATION\_PREFIXES](foundry.documents.BaseScene.html#localization_prefixes)

### `Static`metadata

metadata: object = ...

Default metadata which applies to each instance of this Document type.

Inherited from [BaseScene](foundry.documents.BaseScene.html).[metadata](foundry.documents.BaseScene.html#metadata)

## Accessors

### `Abstract`compendium

* get compendium(): any

  A reference to the Compendium Collection containing this Document, if any, and otherwise null.

  #### Returns any

  Inherited from ClientDocumentMixin(BaseScene).compendium

### id

* get id(): null | string

  The canonical identifier for this Document.

  #### Returns null | string

  Inherited from ClientDocumentMixin(BaseScene).id

### inCompendium

* get inCompendium(): boolean

  Is this document in a compendium?

  #### Returns boolean

  Inherited from ClientDocumentMixin(BaseScene).inCompendium

### invalid

* get invalid(): boolean

  Is the current state of this DataModel invalid?
  The model is invalid if there is any unresolved failure.

  #### Returns boolean

  Inherited from ClientDocumentMixin(BaseScene).invalid

### isEmbedded

* get isEmbedded(): boolean

  Is this document embedded within a parent document?

  #### Returns boolean

  Inherited from ClientDocumentMixin(BaseScene).isEmbedded

### isView

* get isView(): boolean

  A convenience accessor for whether the Scene is currently viewed

  #### Returns boolean

### schema

* get schema(): [SchemaField](foundry.data.fields.SchemaField.html)

  Define the data schema for this document instance.

  #### Returns [SchemaField](foundry.data.fields.SchemaField.html)

  Inherited from ClientDocumentMixin(BaseScene).schema

### thumbnail

* get thumbnail(): null | string

  Provide a thumbnail image path used to represent this document.

  #### Returns null | string

### uuid

* get uuid(): string

  A Universally Unique Identifier (uuid) for this Document instance.

  #### Returns string

  Inherited from ClientDocumentMixin(BaseScene).uuid

### validationFailures

* get validationFailures(): {  
  Â Â Â Â fields: null  
  Â Â Â Â | [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.html);  
  Â Â Â Â joint: null | [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.html);  
  }

  An array of validation failure instances which may have occurred when this instance was last validated.

  #### Returns { Â Â Â Â fields: null | [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.html); Â Â Â Â joint: null | [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.html); }

  Inherited from ClientDocumentMixin(BaseScene).validationFailures

### `Static`baseDocument

* get baseDocument(): typeof [Document](foundry.abstract.Document.html)

  The base document definition that this document class extends from.

  #### Returns typeof [Document](foundry.abstract.Document.html)

  Inherited from ClientDocumentMixin(BaseScene).baseDocument

### `Static`collectionName

* get collectionName(): string

  The named collection to which this Document belongs.

  #### Returns string

  Inherited from ClientDocumentMixin(BaseScene).collectionName

### `Static`database

* get database(): [abstract](../modules/foundry.abstract.html).[DatabaseBackend](foundry.abstract.DatabaseBackend.html)

  The database backend used to execute operations and handle results.

  #### Returns [abstract](../modules/foundry.abstract.html).[DatabaseBackend](foundry.abstract.DatabaseBackend.html)

  Inherited from ClientDocumentMixin(BaseScene).database

### `Static`defaultGrid

* get defaultGrid(): [BaseGrid](foundry.grid.BaseGrid.html)<[GridCoordinates2D](../types/foundry.grid.types.GridCoordinates2D.html), [GridCoordinates3D](../types/foundry.grid.types.GridCoordinates3D.html)>

  The default grid defined by the system.

  #### Returns [BaseGrid](foundry.grid.BaseGrid.html)<[GridCoordinates2D](../types/foundry.grid.types.GridCoordinates2D.html), [GridCoordinates3D](../types/foundry.grid.types.GridCoordinates3D.html)>

### `Static`documentName

* get documentName(): string

  The canonical name of this Document type, for example "Actor".

  #### Returns string

  Inherited from ClientDocumentMixin(BaseScene).documentName

### `Static`hasTypeData

* get hasTypeData(): boolean

  Does this Document support additional subtypes?

  #### Returns boolean

  Inherited from ClientDocumentMixin(BaseScene).hasTypeData

### `Static`hierarchy

* get hierarchy(): Readonly<Record<string, any>>

  The Embedded Document hierarchy for this Document.

  #### Returns Readonly<Record<string, any>>

  Inherited from ClientDocumentMixin(BaseScene).hierarchy

### `Static`implementation

* get implementation(): typeof [Document](foundry.abstract.Document.html)

  Return a reference to the configured subclass of this base Document type.

  #### Returns typeof [Document](foundry.abstract.Document.html)

  Inherited from ClientDocumentMixin(BaseScene).implementation

### `Static`schema

* get schema(): [SchemaField](foundry.data.fields.SchemaField.html)

  Ensure that all Document classes share the same schema of their base declaration.

  #### Returns [SchemaField](foundry.data.fields.SchemaField.html)

  Inherited from ClientDocumentMixin(BaseScene).schema

### `Static`TYPES

* get TYPES(): string[]

  The allowed types which may exist for this Document class.

  #### Returns string[]

  Inherited from ClientDocumentMixin(BaseScene).TYPES

## Methods

### \_configure

* \_configure(\_\_namedParameters?: { pack?: null; parentCollection?: null }): void

  #### Parameters

  + \_\_namedParameters: { pack?: null; parentCollection?: null } = {}

  #### Returns void

  Inherited from [BaseScene](foundry.documents.BaseScene.html).[\_configure](foundry.documents.BaseScene.html#_configure)

### \_getParentCollection

* \_getParentCollection(parentCollection?: null | string): null | string

  `Internal`

  Identify the collection in a parent Document that this Document belongs to, if any.

  #### Parameters

  + `Optional`parentCollection: null | string

    An explicitly provided parent collection name.

  #### Returns null | string

  Inherited from [BaseScene](foundry.documents.BaseScene.html).[\_getParentCollection](foundry.documents.BaseScene.html#_getparentcollection)

### \_initialize

* \_initialize(options: any): void

  Initialize the instance by copying data from the source object to instance attributes.
  This mirrors the workflow of SchemaField#initialize but with some added functionality.

  #### Parameters

  + options: any

    Options provided to the model constructor

  #### Returns void

  Inherited from [BaseScene](foundry.documents.BaseScene.html).[\_initialize](foundry.documents.BaseScene.html#_initialize)

### \_onClickDocumentLink

* \_onClickDocumentLink(event: any): any

  #### Parameters

  + event: any

  #### Returns any

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

  Overrides [BaseScene](foundry.documents.BaseScene.html).[\_onCreate](foundry.documents.BaseScene.html#_oncreate)

### \_onDelete

* \_onDelete(options: any, userId: any): void

  Post-process a deletion operation for a single Document instance. Post-operation events occur for all connected
  clients.

  #### Parameters

  + options: any

    Additional options which modify the deletion request
  + userId: any

    The id of the User requesting the document update

  #### Returns void

  Overrides [BaseScene](foundry.documents.BaseScene.html).[\_onDelete](foundry.documents.BaseScene.html#_ondelete)

### \_onUpdate

* \_onUpdate(changed: any, options: any, userId: any): undefined | Promise<any>

  Post-process an update operation for a single Document instance. Post-operation events occur for all connected
  clients.

  #### Parameters

  + changed: any

    The differential data that was changed relative to the documents prior values
  + options: any

    Additional options which modify the update request
  + userId: any

    The id of the User requesting the document update

  #### Returns undefined | Promise<any>

  Overrides [BaseScene](foundry.documents.BaseScene.html).[\_onUpdate](foundry.documents.BaseScene.html#_onupdate)

### \_onUpdateDescendantDocuments

* \_onUpdateDescendantDocuments(  
  Â Â Â Â parent: any,  
  Â Â Â Â collection: any,  
  Â Â Â Â documents: any,  
  Â Â Â Â changes: any,  
  Â Â Â Â options: any,  
  Â Â Â Â userId: any,  
  ): void

  #### Parameters

  + parent: any
  + collection: any
  + documents: any
  + changes: any
  + options: any
  + userId: any

  #### Returns void

  #### Inherit Doc

### \_preCreate

* \_preCreate(data: any, options: any, user: any): Promise<undefined | false>

  Pre-process a creation operation for a single Document instance. Pre-operation events only occur for the client
  which requested the operation.

  Modifications to the pending Document instance must be performed using [updateSource](foundry.documents.Scene.html#updatesource).

  #### Parameters

  + data: any

    The initial data object provided to the document creation request
  + options: any

    Additional options which modify the creation request
  + user: any

    The User requesting the document creation

  #### Returns Promise<undefined | false>

  Return false to exclude this Document from the creation operation

  Overrides [BaseScene](foundry.documents.BaseScene.html).[\_preCreate](foundry.documents.BaseScene.html#_precreate)

### \_preCreateDescendantDocuments

* \_preCreateDescendantDocuments(  
  Â Â Â Â parent: any,  
  Â Â Â Â collection: any,  
  Â Â Â Â data: any,  
  Â Â Â Â options: any,  
  Â Â Â Â userId: any,  
  ): void

  #### Parameters

  + parent: any
  + collection: any
  + data: any
  + options: any
  + userId: any

  #### Returns void

  #### Inherit Doc

### \_preDeleteDescendantDocuments

* \_preDeleteDescendantDocuments(  
  Â Â Â Â parent: any,  
  Â Â Â Â collection: any,  
  Â Â Â Â ids: any,  
  Â Â Â Â options: any,  
  Â Â Â Â userId: any,  
  ): void

  #### Parameters

  + parent: any
  + collection: any
  + ids: any
  + options: any
  + userId: any

  #### Returns void

  #### Inherit Doc

### \_preUpdate

* \_preUpdate(  
  Â Â Â Â changed: any,  
  Â Â Â Â options: any,  
  Â Â Â Â user: any,  
  ): Promise<undefined | false | Readonly<[Notification](../interfaces/foundry.Notification.html)>>

  Pre-process an update operation for a single Document instance. Pre-operation events only occur for the client
  which requested the operation.

  #### Parameters

  + changed: any

    The candidate changes to the Document
  + options: any

    Additional options which modify the update request
  + user: any

    The User requesting the document update

  #### Returns Promise<undefined | false | Readonly<[Notification](../interfaces/foundry.Notification.html)>>

  A return value of false indicates the update operation should be cancelled.

  Overrides [BaseScene](foundry.documents.BaseScene.html).[\_preUpdate](foundry.documents.BaseScene.html#_preupdate)

### \_preUpdateDescendantDocuments

* \_preUpdateDescendantDocuments(  
  Â Â Â Â parent: any,  
  Â Â Â Â collection: any,  
  Â Â Â Â changes: any,  
  Â Â Â Â options: any,  
  Â Â Â Â userId: any,  
  ): void

  #### Parameters

  + parent: any
  + collection: any
  + changes: any
  + options: any
  + userId: any

  #### Returns void

  #### Inherit Doc

### activate

* activate(): Promise<[documents](../modules/foundry.documents.html).[Scene](foundry.documents.Scene.html)>

  Set this scene as currently active

  #### Returns Promise<[documents](../modules/foundry.documents.html).[Scene](foundry.documents.Scene.html)>

  A Promise which resolves to the current scene once it has been successfully activated

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

  Inherited from [BaseScene](foundry.documents.BaseScene.html).[canUserModify](foundry.documents.BaseScene.html#canusermodify)

### clearMovementHistories

* clearMovementHistories(): Promise<void>

  Clear the movement history of all Tokens within this Scene.

  #### Returns Promise<void>

### clone

* clone(  
  Â Â Â Â createData?: {},  
  Â Â Â Â options?: {},  
  ):  
  Â Â Â Â | [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>  
  Â Â Â Â | Promise<[Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>>

  #### Parameters

  + createData: {} = {}
  + options: {} = {}

  #### Returns Â Â Â Â | [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)> Â Â Â Â | Promise<[Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>>

  Overrides [BaseScene](foundry.documents.BaseScene.html).[clone](foundry.documents.BaseScene.html#clone)

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

  Inherited from [BaseScene](foundry.documents.BaseScene.html).[createEmbeddedDocuments](foundry.documents.BaseScene.html#createembeddeddocuments)

### createThumbnail

* createThumbnail(  
  Â Â Â Â options?: {  
  Â Â Â Â Â Â Â Â format?: string;  
  Â Â Â Â Â Â Â Â height?: number;  
  Â Â Â Â Â Â Â Â img?: null | string;  
  Â Â Â Â Â Â Â Â quality?: number;  
  Â Â Â Â Â Â Â Â width?: number;  
  Â Â Â Â },  
  ): Promise<object>

  Create a 300px by 100px thumbnail image for this scene background

  #### Parameters

  + `Optional`options: {  
    Â Â Â Â format?: string;  
    Â Â Â Â height?: number;  
    Â Â Â Â img?: null | string;  
    Â Â Â Â quality?: number;  
    Â Â Â Â width?: number;  
    } = {}

    Options which modify thumbnail creation

    - ##### `Optional`format?: string

      Which image format should be used? image/png, image/jpeg, or image/webp
    - ##### `Optional`height?: number

      The desired thumbnail height. Default is 100px;
    - ##### `Optional`img?: null | string

      A background image to use for thumbnail creation, otherwise the current
      scene background is used.
    - ##### `Optional`quality?: number

      What compression quality should be used for jpeg or webp, between 0 and 1
    - ##### `Optional`width?: number

      The desired thumbnail width. Default is 300px

  #### Returns Promise<object>

  The created thumbnail data.

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

  Inherited from [BaseScene](foundry.documents.BaseScene.html).[delete](foundry.documents.BaseScene.html#delete)

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

  Inherited from [BaseScene](foundry.documents.BaseScene.html).[deleteEmbeddedDocuments](foundry.documents.BaseScene.html#deleteembeddeddocuments)

### getDimensions

* getDimensions(): [SceneDimensions](../interfaces/foundry.documents.types.SceneDimensions.html)

  Get the Canvas dimensions which would be used to display this Scene.
  Apply padding to enlarge the playable space and round to the nearest 2x grid size to ensure symmetry.
  The rounding accomplishes that the padding buffer around the map always contains whole grid spaces.

  #### Returns [SceneDimensions](../interfaces/foundry.documents.types.SceneDimensions.html)

### getEmbeddedCollection

* getEmbeddedCollection(embeddedName: string): DocumentCollection

  Obtain a reference to the Array of source data within the data object for a certain embedded Document name

  #### Parameters

  + embeddedName: string

    The name of the embedded Document type

  #### Returns DocumentCollection

  The Collection instance of embedded Documents of the requested type

  Inherited from [BaseScene](foundry.documents.BaseScene.html).[getEmbeddedCollection](foundry.documents.BaseScene.html#getembeddedcollection)

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

  Inherited from [BaseScene](foundry.documents.BaseScene.html).[getEmbeddedDocument](foundry.documents.BaseScene.html#getembeddeddocument)

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

  Inherited from [BaseScene](foundry.documents.BaseScene.html).[getFlag](foundry.documents.BaseScene.html#getflag)

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

  Inherited from [BaseScene](foundry.documents.BaseScene.html).[getUserLevel](foundry.documents.BaseScene.html#getuserlevel)

### migrateSystemData

* migrateSystemData(): object

  For Documents which include game system data, migrate the system data object to conform to its latest data model.
  The data model is defined by the template.json specification included by the game system.

  #### Returns object

  The migrated system data object

  Inherited from [BaseScene](foundry.documents.BaseScene.html).[migrateSystemData](foundry.documents.BaseScene.html#migratesystemdata)

### prepareBaseData

* prepareBaseData(): void

  #### Returns void

  #### Inherit Doc

### pullUsers

* pullUsers(users?: any[]): void

  Pull the specified users to this Scene.

  #### Parameters

  + `Optional`users: any[] = []

    An array of User documents or IDs.

  #### Returns void

### reset

* reset(): void

  #### Returns void

  Overrides [BaseScene](foundry.documents.BaseScene.html).[reset](foundry.documents.BaseScene.html#reset)

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

  Inherited from [BaseScene](foundry.documents.BaseScene.html).[setFlag](foundry.documents.BaseScene.html#setflag)

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

  Inherited from [BaseScene](foundry.documents.BaseScene.html).[testUserPermission](foundry.documents.BaseScene.html#testuserpermission)

### toCompendium

* toCompendium(pack: any, options?: {}): any

  #### Parameters

  + pack: any
  + options: {} = {}

  #### Returns any

  #### Inherit Doc

### toJSON

* toJSON(): object

  Extract the source data for the DataModel into a simple object format that can be serialized.

  #### Returns object

  The document source data expressed as a plain object

  Inherited from [BaseScene](foundry.documents.BaseScene.html).[toJSON](foundry.documents.BaseScene.html#tojson)

### toObject

* toObject(source?: boolean): any

  Copy and transform the DataModel into a plain object.
  Draw the values of the extracted object from the data source (by default) otherwise from its transformed values.

  #### Parameters

  + source: boolean = true

    Draw values from the underlying data source rather than transformed values

  #### Returns any

  The extracted primitive object

  Overrides [BaseScene](foundry.documents.BaseScene.html).[toObject](foundry.documents.BaseScene.html#toobject)

### traverseEmbeddedDocuments

* traverseEmbeddedDocuments(\_parentPath?: string): Generator<any, void, any>

  Iterate over all embedded Documents that are hierarchical children of this Document.

  #### Parameters

  + `Optional`\_parentPath: string

    A parent field path already traversed

  #### Returns Generator<any, void, any>

  #### Yields

  Inherited from [BaseScene](foundry.documents.BaseScene.html).[traverseEmbeddedDocuments](foundry.documents.BaseScene.html#traverseembeddeddocuments)

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

  Inherited from [BaseScene](foundry.documents.BaseScene.html).[unsetFlag](foundry.documents.BaseScene.html#unsetflag)

### unview

* unview(): Promise<undefined | [documents](../modules/foundry.documents.html).[Scene](foundry.documents.Scene.html)>

  Unview the current Scene, clearing the game canvas.

  #### Returns Promise<undefined | [documents](../modules/foundry.documents.html).[Scene](foundry.documents.Scene.html)>

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

  Inherited from [BaseScene](foundry.documents.BaseScene.html).[update](foundry.documents.BaseScene.html#update)

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

  Inherited from [BaseScene](foundry.documents.BaseScene.html).[updateEmbeddedDocuments](foundry.documents.BaseScene.html#updateembeddeddocuments)

### updateSource

* updateSource(changes?: {}, options?: {}): object

  Update the DataModel locally by applying an object of changes to its source data.
  The provided changes are expanded, cleaned, validated, and stored to the source data object for this model.
  The provided changes argument is mutated in this process.
  The source data is then re-initialized to apply those changes to the prepared data.
  The method returns an object of differential changes which modified the original data.

  #### Parameters

  + changes: {} = {}

    New values which should be applied to the data model
  + options: {} = {}

    Options which determine how the new data is merged

  #### Returns object

  An object containing differential keys and values that were changed

  #### Throws

  An error if the requested data model changes were invalid

  Inherited from [BaseScene](foundry.documents.BaseScene.html).[updateSource](foundry.documents.BaseScene.html#updatesource)

### updateTokenRegions

* updateTokenRegions(): Promise<[TokenDocument](foundry.documents.TokenDocument.html)[]>

  For all Tokens in this Scene identify the Regions that each Token is contained in and update the regions of each
  Token accordingly.

  This function doesn't need to be called by the systems/modules unless
  [foundry.documents.TokenDocument#testInsideRegion](foundry.documents.TokenDocument.html#testinsideregion) is overridden and non-Token properties other than
  `Scene#grid.type` and `Scene#grid.size` change that are used in the override of
  [foundry.documents.TokenDocument#testInsideRegion](foundry.documents.TokenDocument.html#testinsideregion).

  #### Returns Promise<[TokenDocument](foundry.documents.TokenDocument.html)[]>

  The array of Tokens whose regions changed
* updateTokenRegions(tokens: Iterable<[TokenDocument](foundry.documents.TokenDocument.html)>): Promise<[TokenDocument](foundry.documents.TokenDocument.html)[]>

  For the given Tokens in this Scene identify the Regions that each Token is contained in and update the regions of
  each Token accordingly.

  This function doesn't need to be called by the systems/modules unless
  [foundry.documents.TokenDocument#testInsideRegion](foundry.documents.TokenDocument.html#testinsideregion) is overridden and non-Token properties other than
  `Scene#grid.type` and `Scene#grid.size` change that are used in the override of
  [foundry.documents.TokenDocument#testInsideRegion](foundry.documents.TokenDocument.html#testinsideregion).

  #### Parameters

  + tokens: Iterable<[TokenDocument](foundry.documents.TokenDocument.html)>

    The Tokens whoses regions should be updates

  #### Returns Promise<[TokenDocument](foundry.documents.TokenDocument.html)[]>

  The array of Tokens whose regions changed

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

  Inherited from [BaseScene](foundry.documents.BaseScene.html).[validate](foundry.documents.BaseScene.html#validate)

### view

* view(): Promise<[documents](../modules/foundry.documents.html).[Scene](foundry.documents.Scene.html)>

  Set this scene as the current view

  #### Returns Promise<[documents](../modules/foundry.documents.html).[Scene](foundry.documents.Scene.html)>

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

  Inherited from [BaseScene](foundry.documents.BaseScene.html).[\_initializeSource](foundry.documents.BaseScene.html#_initializesource)

### `Protected`\_onActivate

* \_onActivate(active: boolean): void

  `Protected`

  Handle Scene activation workflow if the active state is changed to true.

  #### Parameters

  + active: boolean

    Is the scene now active?

  #### Returns void

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

  Inherited from [BaseScene](foundry.documents.BaseScene.html).[\_preDelete](foundry.documents.BaseScene.html#_predelete)

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

  Inherited from [BaseScene](foundry.documents.BaseScene.html).[\_addDataFieldMigration](foundry.documents.BaseScene.html#_adddatafieldmigration)

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

  Inherited from [BaseScene](foundry.documents.BaseScene.html).[\_addDataFieldShim](foundry.documents.BaseScene.html#_adddatafieldshim)

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

  Inherited from [BaseScene](foundry.documents.BaseScene.html).[\_addDataFieldShims](foundry.documents.BaseScene.html#_adddatafieldshims)

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

  Inherited from [BaseScene](foundry.documents.BaseScene.html).[\_clearFieldsRecursively](foundry.documents.BaseScene.html#_clearfieldsrecursively)

### `Static`\_initializationOrder

* \_initializationOrder(): Generator<any[], void, unknown>

  #### Returns Generator<any[], void, unknown>

  Inherited from [BaseScene](foundry.documents.BaseScene.html).[\_initializationOrder](foundry.documents.BaseScene.html#_initializationorder)

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

  Inherited from [BaseScene](foundry.documents.BaseScene.html).[\_logDataFieldMigration](foundry.documents.BaseScene.html#_logdatafieldmigration)

### `Static`\_onUpdateOperation

* \_onUpdateOperation(documents: any, operation: any, user: any): Promise<void>

  #### Parameters

  + documents: any
  + operation: any
  + user: any

  #### Returns Promise<void>

  Overrides [BaseScene](foundry.documents.BaseScene.html).[\_onUpdateOperation](foundry.documents.BaseScene.html#_onupdateoperation)

### `Static`\_preCreateOperation

* \_preCreateOperation(documents: any, operation: any, user: any): Promise<void>

  Pre-process a creation operation, potentially altering its instructions or input data. Pre-operation events only
  occur for the client which requested the operation.

  This batch-wise workflow occurs after individual [\_preCreate](foundry.documents.Scene.html#_precreate) workflows and provides a final pre-flight check
  before a database operation occurs.

  Modifications to pending documents must mutate the documents array or alter individual document instances using
  [updateSource](foundry.documents.Scene.html#updatesource).

  #### Parameters

  + documents: any

    Pending document instances to be created
  + operation: any

    Parameters of the database creation operation
  + user: any

    The User requesting the creation operation

  #### Returns Promise<void>

  Return false to cancel the creation operation entirely

  Overrides [BaseScene](foundry.documents.BaseScene.html).[\_preCreateOperation](foundry.documents.BaseScene.html#_precreateoperation)

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

  Inherited from [BaseScene](foundry.documents.BaseScene.html).[canUserCreate](foundry.documents.BaseScene.html#canusercreate)

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

  Inherited from [BaseScene](foundry.documents.BaseScene.html).[cleanData](foundry.documents.BaseScene.html#cleandata)

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

  Inherited from [BaseScene](foundry.documents.BaseScene.html).[create](foundry.documents.BaseScene.html#create)

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

  Inherited from [BaseScene](foundry.documents.BaseScene.html).[createDocuments](foundry.documents.BaseScene.html#createdocuments)

### `Static`defineSchema

* defineSchema(): {  
  Â Â Â Â \_id: [DocumentIdField](foundry.data.fields.DocumentIdField.html);  
  Â Â Â Â \_stats: [DocumentStatsField](foundry.data.fields.DocumentStatsField.html);  
  Â Â Â Â active: [BooleanField](foundry.data.fields.BooleanField.html);  
  Â Â Â Â background: [TextureData](foundry.data.TextureData.html);  
  Â Â Â Â backgroundColor: [ColorField](foundry.data.fields.ColorField.html);  
  Â Â Â Â drawings: [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.html);  
  Â Â Â Â environment: [SchemaField](foundry.data.fields.SchemaField.html);  
  Â Â Â Â flags: [DocumentFlagsField](foundry.data.fields.DocumentFlagsField.html);  
  Â Â Â Â fog: [SchemaField](foundry.data.fields.SchemaField.html);  
  Â Â Â Â folder: [ForeignDocumentField](foundry.data.fields.ForeignDocumentField.html);  
  Â Â Â Â foreground: [FilePathField](foundry.data.fields.FilePathField.html);  
  Â Â Â Â foregroundElevation: [NumberField](foundry.data.fields.NumberField.html);  
  Â Â Â Â grid: [SchemaField](foundry.data.fields.SchemaField.html);  
  Â Â Â Â height: [NumberField](foundry.data.fields.NumberField.html);  
  Â Â Â Â initial: [SchemaField](foundry.data.fields.SchemaField.html);  
  Â Â Â Â journal: [ForeignDocumentField](foundry.data.fields.ForeignDocumentField.html);  
  Â Â Â Â journalEntryPage: [ForeignDocumentField](foundry.data.fields.ForeignDocumentField.html);  
  Â Â Â Â lights: [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.html);  
  Â Â Â Â name: [StringField](foundry.data.fields.StringField.html);  
  Â Â Â Â navigation: [BooleanField](foundry.data.fields.BooleanField.html);  
  Â Â Â Â navName: [StringField](foundry.data.fields.StringField.html);  
  Â Â Â Â navOrder: [NumberField](foundry.data.fields.NumberField.html);  
  Â Â Â Â notes: [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.html);  
  Â Â Â Â ownership: [DocumentOwnershipField](foundry.data.fields.DocumentOwnershipField.html);  
  Â Â Â Â padding: [NumberField](foundry.data.fields.NumberField.html);  
  Â Â Â Â playlist: [ForeignDocumentField](foundry.data.fields.ForeignDocumentField.html);  
  Â Â Â Â playlistSound: [ForeignDocumentField](foundry.data.fields.ForeignDocumentField.html);  
  Â Â Â Â regions: [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.html);  
  Â Â Â Â sort: [IntegerSortField](foundry.data.fields.IntegerSortField.html);  
  Â Â Â Â sounds: [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.html);  
  Â Â Â Â templates: [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.html);  
  Â Â Â Â thumb: [FilePathField](foundry.data.fields.FilePathField.html);  
  Â Â Â Â tiles: [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.html);  
  Â Â Â Â tokens: [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.html);  
  Â Â Â Â tokenVision: [BooleanField](foundry.data.fields.BooleanField.html);  
  Â Â Â Â walls: [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.html);  
  Â Â Â Â weather: [StringField](foundry.data.fields.StringField.html);  
  Â Â Â Â width: [NumberField](foundry.data.fields.NumberField.html);  
  }

  Define the data schema for models of this type.
  The schema is populated the first time it is accessed and cached for future reuse.

  The schema, through its fields, provide the essential cleaning, validation, and initialization methods to turn the
  [\_source](foundry.documents.Scene.html#_source) values into direct properties of the data model. The schema is a static property of the model and
  is reused by all instances to perform validation.

  The schemas defined by the core software in classes like [foundry.documents.BaseActor](foundry.documents.BaseActor.html) are validated by the
  server, where user code does not run. However, almost all documents have a `flags` field to store data, and many
  have a `system` field that can be configured to be a [foundry.abstract.TypeDataModel](foundry.abstract.TypeDataModel.html) instance. Those models
  are *not* constructed on the server and rely purely on client-side code, which means certain extra-sensitive fields
  must be also be registered through your package manifest. [foundry.packages.types.ServerSanitizationFields](../interfaces/foundry.packages.types.ServerSanitizationFields.html)

  #### Returns { Â Â Â Â \_id: [DocumentIdField](foundry.data.fields.DocumentIdField.html); Â Â Â Â \_stats: [DocumentStatsField](foundry.data.fields.DocumentStatsField.html); Â Â Â Â active: [BooleanField](foundry.data.fields.BooleanField.html); Â Â Â Â background: [TextureData](foundry.data.TextureData.html); Â Â Â Â backgroundColor: [ColorField](foundry.data.fields.ColorField.html); Â Â Â Â drawings: [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.html); Â Â Â Â environment: [SchemaField](foundry.data.fields.SchemaField.html); Â Â Â Â flags: [DocumentFlagsField](foundry.data.fields.DocumentFlagsField.html); Â Â Â Â fog: [SchemaField](foundry.data.fields.SchemaField.html); Â Â Â Â folder: [ForeignDocumentField](foundry.data.fields.ForeignDocumentField.html); Â Â Â Â foreground: [FilePathField](foundry.data.fields.FilePathField.html); Â Â Â Â foregroundElevation: [NumberField](foundry.data.fields.NumberField.html); Â Â Â Â grid: [SchemaField](foundry.data.fields.SchemaField.html); Â Â Â Â height: [NumberField](foundry.data.fields.NumberField.html); Â Â Â Â initial: [SchemaField](foundry.data.fields.SchemaField.html); Â Â Â Â journal: [ForeignDocumentField](foundry.data.fields.ForeignDocumentField.html); Â Â Â Â journalEntryPage: [ForeignDocumentField](foundry.data.fields.ForeignDocumentField.html); Â Â Â Â lights: [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.html); Â Â Â Â name: [StringField](foundry.data.fields.StringField.html); Â Â Â Â navigation: [BooleanField](foundry.data.fields.BooleanField.html); Â Â Â Â navName: [StringField](foundry.data.fields.StringField.html); Â Â Â Â navOrder: [NumberField](foundry.data.fields.NumberField.html); Â Â Â Â notes: [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.html); Â Â Â Â ownership: [DocumentOwnershipField](foundry.data.fields.DocumentOwnershipField.html); Â Â Â Â padding: [NumberField](foundry.data.fields.NumberField.html); Â Â Â Â playlist: [ForeignDocumentField](foundry.data.fields.ForeignDocumentField.html); Â Â Â Â playlistSound: [ForeignDocumentField](foundry.data.fields.ForeignDocumentField.html); Â Â Â Â regions: [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.html); Â Â Â Â sort: [IntegerSortField](foundry.data.fields.IntegerSortField.html); Â Â Â Â sounds: [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.html); Â Â Â Â templates: [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.html); Â Â Â Â thumb: [FilePathField](foundry.data.fields.FilePathField.html); Â Â Â Â tiles: [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.html); Â Â Â Â tokens: [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.html); Â Â Â Â tokenVision: [BooleanField](foundry.data.fields.BooleanField.html); Â Â Â Â walls: [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.html); Â Â Â Â weather: [StringField](foundry.data.fields.StringField.html); Â Â Â Â width: [NumberField](foundry.data.fields.NumberField.html); }

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

  Inherited from [BaseScene](foundry.documents.BaseScene.html).[defineSchema](foundry.documents.BaseScene.html#defineschema)

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

  Inherited from [BaseScene](foundry.documents.BaseScene.html).[deleteDocuments](foundry.documents.BaseScene.html#deletedocuments)

### `Static`fromJSON

* fromJSON(json: string): [DataModel](foundry.abstract.DataModel.html)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.html)>

  Create a DataModel instance using a provided serialized JSON string.

  #### Parameters

  + json: string

    Serialized document data in string format

  #### Returns [DataModel](foundry.abstract.DataModel.html)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.html)>

  A constructed data model instance

  Inherited from [BaseScene](foundry.documents.BaseScene.html).[fromJSON](foundry.documents.BaseScene.html#fromjson)

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

  Inherited from [BaseScene](foundry.documents.BaseScene.html).[fromSource](foundry.documents.BaseScene.html#fromsource)

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

  Inherited from [BaseScene](foundry.documents.BaseScene.html).[get](foundry.documents.BaseScene.html#get)

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

  Inherited from [BaseScene](foundry.documents.BaseScene.html).[getCollectionName](foundry.documents.BaseScene.html#getcollectionname)

### `Static`migrateData

* migrateData(source: any): object

  Migrate candidate source data for this DataModel which may require initial cleaning or transformations.

  #### Parameters

  + source: any

    The candidate source data from which the model will be constructed

  #### Returns object

  Migrated source data, which is the same object as the `source` argument

  Inherited from [BaseScene](foundry.documents.BaseScene.html).[migrateData](foundry.documents.BaseScene.html#migratedata)

### `Static`migrateDataSafe

* migrateDataSafe(source: object): object

  Wrap data migration in a try/catch which attempts it safely

  #### Parameters

  + source: object

    The candidate source data from which the model will be constructed

  #### Returns object

  Migrated source data, which is the same object as the `source` argument

  Inherited from [BaseScene](foundry.documents.BaseScene.html).[migrateDataSafe](foundry.documents.BaseScene.html#migratedatasafe)

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

  Inherited from [BaseScene](foundry.documents.BaseScene.html).[shimData](foundry.documents.BaseScene.html#shimdata)

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

  Inherited from [BaseScene](foundry.documents.BaseScene.html).[updateDocuments](foundry.documents.BaseScene.html#updatedocuments)

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

  Inherited from [BaseScene](foundry.documents.BaseScene.html).[validateJoint](foundry.documents.BaseScene.html#validatejoint)

### `Protected` `Static`\_onCreateOperation

* \_onCreateOperation(  
  Â Â Â Â documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[],  
  Â Â Â Â operation: [DatabaseCreateOperation](../interfaces/foundry.abstract.types.DatabaseCreateOperation.html),  
  Â Â Â Â user: [BaseUser](foundry.documents.BaseUser.html),  
  ): Promise<void>

  `Protected`

  Post-process a creation operation, reacting to database changes which have occurred. Post-operation events occur
  for all connected clients.

  This batch-wise workflow occurs after individual [\_onCreate](foundry.documents.Scene.html#_oncreate) workflows.

  #### Parameters

  + documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[]

    The Document instances which were created
  + operation: [DatabaseCreateOperation](../interfaces/foundry.abstract.types.DatabaseCreateOperation.html)

    Parameters of the database creation operation
  + user: [BaseUser](foundry.documents.BaseUser.html)

    The User who performed the creation operation

  #### Returns Promise<void>

  Inherited from [BaseScene](foundry.documents.BaseScene.html).[\_onCreateOperation](foundry.documents.BaseScene.html#_oncreateoperation)

### `Protected` `Static`\_onDeleteOperation

* \_onDeleteOperation(  
  Â Â Â Â documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[],  
  Â Â Â Â operation: [DatabaseDeleteOperation](../interfaces/foundry.abstract.types.DatabaseDeleteOperation.html),  
  Â Â Â Â user: [BaseUser](foundry.documents.BaseUser.html),  
  ): Promise<void>

  `Protected`

  Post-process a deletion operation, reacting to database changes which have occurred. Post-operation events occur
  for all connected clients.

  This batch-wise workflow occurs after individual [\_onDelete](foundry.documents.Scene.html#_ondelete) workflows.

  #### Parameters

  + documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[]

    The Document instances which were deleted
  + operation: [DatabaseDeleteOperation](../interfaces/foundry.abstract.types.DatabaseDeleteOperation.html)

    Parameters of the database deletion operation
  + user: [BaseUser](foundry.documents.BaseUser.html)

    The User who performed the deletion operation

  #### Returns Promise<void>

  Inherited from [BaseScene](foundry.documents.BaseScene.html).[\_onDeleteOperation](foundry.documents.BaseScene.html#_ondeleteoperation)

### `Protected` `Static`\_preDeleteOperation

* \_preDeleteOperation(  
  Â Â Â Â documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[],  
  Â Â Â Â operation: [DatabaseDeleteOperation](../interfaces/foundry.abstract.types.DatabaseDeleteOperation.html),  
  Â Â Â Â user: [BaseUser](foundry.documents.BaseUser.html),  
  ): Promise<boolean | void>

  `Protected`

  Pre-process a deletion operation, potentially altering its instructions or input data. Pre-operation events only
  occur for the client which requested the operation.

  This batch-wise workflow occurs after individual [\_preDelete](foundry.documents.Scene.html#_predelete) workflows and provides a final pre-flight check
  before a database operation occurs.

  Modifications to the requested deletions are performed by mutating the operation object.
  [updateSource](foundry.documents.Scene.html#updatesource).

  #### Parameters

  + documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[]

    Document instances to be deleted
  + operation: [DatabaseDeleteOperation](../interfaces/foundry.abstract.types.DatabaseDeleteOperation.html)

    Parameters of the database update operation
  + user: [BaseUser](foundry.documents.BaseUser.html)

    The User requesting the deletion operation

  #### Returns Promise<boolean | void>

  Return false to cancel the deletion operation entirely

  Inherited from [BaseScene](foundry.documents.BaseScene.html).[\_preDeleteOperation](foundry.documents.BaseScene.html#_predeleteoperation)

### `Protected` `Static`\_preUpdateOperation

* \_preUpdateOperation(  
  Â Â Â Â documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[],  
  Â Â Â Â operation: [DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.html),  
  Â Â Â Â user: [BaseUser](foundry.documents.BaseUser.html),  
  ): Promise<boolean | void>

  `Protected`

  Pre-process an update operation, potentially altering its instructions or input data. Pre-operation events only
  occur for the client which requested the operation.

  This batch-wise workflow occurs after individual [\_preUpdate](foundry.documents.Scene.html#_preupdate) workflows and provides a final pre-flight check
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

  Inherited from [BaseScene](foundry.documents.BaseScene.html).[\_preUpdateOperation](foundry.documents.BaseScene.html#_preupdateoperation)