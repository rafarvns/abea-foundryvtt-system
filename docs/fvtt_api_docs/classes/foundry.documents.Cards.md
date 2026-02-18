---
title: "Cards | Foundry Virtual Tabletop - API Documentation - Version 13"
url: "https://foundryvtt.com/api/classes/foundry.documents.Cards.html"
category: "classes"
---

* [Foundry Virtual Tabletop - API Documentation - Version 13](../modules.html)
* [foundry](../modules/foundry.html)
* [documents](../modules/foundry.documents.html)
* [Cards](foundry.documents.Cards.html)

# Class Cards

The client-side Cards document which extends the common BaseCards model.
Each Cards document contains CardsData which defines its data schema.

### Hook Events

* [hookEvents.dealCards](../functions/hookEvents.dealCards.html)
* [hookEvents.passCards](../functions/hookEvents.passCards.html)
* [hookEvents.returnCards](../functions/hookEvents.returnCards.html)

#### Mixes

ClientDocumentMixin

#### See

* [foundry.documents.collections.CardStacks](foundry.documents.collections.CardStacks.html): The world-level collection of Cards documents
* [foundry.applications.sheets.CardsConfig](foundry.applications.sheets.CardsConfig.html): The Cards configuration application

#### Hierarchy ([View Summary](../hierarchy.html#foundry.documents.Cards))

* [BaseCards](foundry.documents.BaseCards.html)<this>
  + Cards

##### Index

### Constructors

[constructor](foundry.documents.Cards.html#constructor)

### Properties

[\_source](foundry.documents.Cards.html#_source)
[parent](foundry.documents.Cards.html#parent)
[\_schema](foundry.documents.Cards.html#_schema)
[DEFAULT\_ICON](foundry.documents.Cards.html#default_icon)
[LOCALIZATION\_PREFIXES](foundry.documents.Cards.html#localization_prefixes)
[metadata](foundry.documents.Cards.html#metadata)

### Accessors

[availableCards](foundry.documents.Cards.html#availablecards)
[canClone](foundry.documents.Cards.html#canclone)
[compendium](foundry.documents.Cards.html#compendium)
[drawnCards](foundry.documents.Cards.html#drawncards)
[id](foundry.documents.Cards.html#id)
[inCompendium](foundry.documents.Cards.html#incompendium)
[invalid](foundry.documents.Cards.html#invalid)
[isEmbedded](foundry.documents.Cards.html#isembedded)
[schema](foundry.documents.Cards.html#schema)
[thumbnail](foundry.documents.Cards.html#thumbnail)
[typeLabel](foundry.documents.Cards.html#typelabel)
[uuid](foundry.documents.Cards.html#uuid)
[validationFailures](foundry.documents.Cards.html#validationfailures)
[baseDocument](foundry.documents.Cards.html#basedocument)
[collectionName](foundry.documents.Cards.html#collectionname)
[database](foundry.documents.Cards.html#database)
[documentName](foundry.documents.Cards.html#documentname)
[hasTypeData](foundry.documents.Cards.html#hastypedata)
[hierarchy](foundry.documents.Cards.html#hierarchy)
[implementation](foundry.documents.Cards.html#implementation)
[schema](foundry.documents.Cards.html#schema-2)
[TYPES](foundry.documents.Cards.html#types)

### Methods

[\_configure](foundry.documents.Cards.html#_configure)
[\_getParentCollection](foundry.documents.Cards.html#_getparentcollection)
[\_initialize](foundry.documents.Cards.html#_initialize)
[\_preCreate](foundry.documents.Cards.html#_precreate)
[\_preDelete](foundry.documents.Cards.html#_predelete)
[canUserModify](foundry.documents.Cards.html#canusermodify)
[clone](foundry.documents.Cards.html#clone)
[createEmbeddedDocuments](foundry.documents.Cards.html#createembeddeddocuments)
[deal](foundry.documents.Cards.html#deal)
[dealDialog](foundry.documents.Cards.html#dealdialog)
[delete](foundry.documents.Cards.html#delete)
[deleteDialog](foundry.documents.Cards.html#deletedialog)
[deleteEmbeddedDocuments](foundry.documents.Cards.html#deleteembeddeddocuments)
[draw](foundry.documents.Cards.html#draw)
[drawDialog](foundry.documents.Cards.html#drawdialog)
[getEmbeddedCollection](foundry.documents.Cards.html#getembeddedcollection)
[getEmbeddedDocument](foundry.documents.Cards.html#getembeddeddocument)
[getFlag](foundry.documents.Cards.html#getflag)
[getUserLevel](foundry.documents.Cards.html#getuserlevel)
[migrateSystemData](foundry.documents.Cards.html#migratesystemdata)
[pass](foundry.documents.Cards.html#pass)
[passDialog](foundry.documents.Cards.html#passdialog)
[playDialog](foundry.documents.Cards.html#playdialog)
[recall](foundry.documents.Cards.html#recall)
[reset](foundry.documents.Cards.html#reset)
[resetDialog](foundry.documents.Cards.html#resetdialog)
[setFlag](foundry.documents.Cards.html#setflag)
[shuffle](foundry.documents.Cards.html#shuffle)
[testUserPermission](foundry.documents.Cards.html#testuserpermission)
[toJSON](foundry.documents.Cards.html#tojson)
[toObject](foundry.documents.Cards.html#toobject)
[traverseEmbeddedDocuments](foundry.documents.Cards.html#traverseembeddeddocuments)
[unsetFlag](foundry.documents.Cards.html#unsetflag)
[update](foundry.documents.Cards.html#update)
[updateEmbeddedDocuments](foundry.documents.Cards.html#updateembeddeddocuments)
[updateSource](foundry.documents.Cards.html#updatesource)
[validate](foundry.documents.Cards.html#validate)
[\_drawCards](foundry.documents.Cards.html#_drawcards)
[\_initializeSource](foundry.documents.Cards.html#_initializesource)
[\_onCreate](foundry.documents.Cards.html#_oncreate)
[\_onDelete](foundry.documents.Cards.html#_ondelete)
[\_onUpdate](foundry.documents.Cards.html#_onupdate)
[\_preUpdate](foundry.documents.Cards.html#_preupdate)
[sortShuffled](foundry.documents.Cards.html#sortshuffled)
[sortStandard](foundry.documents.Cards.html#sortstandard)
[\_addDataFieldMigration](foundry.documents.Cards.html#_adddatafieldmigration)
[\_addDataFieldShim](foundry.documents.Cards.html#_adddatafieldshim)
[\_addDataFieldShims](foundry.documents.Cards.html#_adddatafieldshims)
[\_clearFieldsRecursively](foundry.documents.Cards.html#_clearfieldsrecursively)
[\_initializationOrder](foundry.documents.Cards.html#_initializationorder)
[\_logDataFieldMigration](foundry.documents.Cards.html#_logdatafieldmigration)
[canUserCreate](foundry.documents.Cards.html#canusercreate)
[cleanData](foundry.documents.Cards.html#cleandata)
[create](foundry.documents.Cards.html#create)
[createDialog](foundry.documents.Cards.html#createdialog)
[createDocuments](foundry.documents.Cards.html#createdocuments)
[defineSchema](foundry.documents.Cards.html#defineschema)
[deleteDocuments](foundry.documents.Cards.html#deletedocuments)
[fromJSON](foundry.documents.Cards.html#fromjson)
[fromSource](foundry.documents.Cards.html#fromsource)
[get](foundry.documents.Cards.html#get)
[getCollectionName](foundry.documents.Cards.html#getcollectionname)
[migrateData](foundry.documents.Cards.html#migratedata)
[migrateDataSafe](foundry.documents.Cards.html#migratedatasafe)
[shimData](foundry.documents.Cards.html#shimdata)
[updateDocuments](foundry.documents.Cards.html#updatedocuments)
[validateJoint](foundry.documents.Cards.html#validatejoint)
[\_onCreateOperation](foundry.documents.Cards.html#_oncreateoperation)
[\_onDeleteOperation](foundry.documents.Cards.html#_ondeleteoperation)
[\_onUpdateOperation](foundry.documents.Cards.html#_onupdateoperation)
[\_preCreateOperation](foundry.documents.Cards.html#_precreateoperation)
[\_preDeleteOperation](foundry.documents.Cards.html#_predeleteoperation)
[\_preUpdateOperation](foundry.documents.Cards.html#_preupdateoperation)

## Constructors

### constructor

* new Cards(  
  Â Â Â Â data?: Partial<[CardsData](../interfaces/foundry.documents.types.CardsData.html)>,  
  Â Â Â Â options?: [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html),  
  ): [documents](../modules/foundry.documents.html).[Cards](foundry.documents.Cards.html)

  #### Parameters

  + `Optional`data: Partial<[CardsData](../interfaces/foundry.documents.types.CardsData.html)> = {}

    Initial data used to construct the data object. The provided object will be
    owned by the constructed model instance and may be mutated.
  + `Optional`options: [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html) = {}

    Context and data validation options which affects initial model construction.

  #### Returns [documents](../modules/foundry.documents.html).[Cards](foundry.documents.Cards.html)

  Inherited from [BaseCards](foundry.documents.BaseCards.html).[constructor](foundry.documents.BaseCards.html#constructor)

## Properties

### \_source

\_source: [CardsData](../interfaces/foundry.documents.types.CardsData.html)

The source data object for this DataModel instance.
Once constructed, the source object is sealed such that no keys may be added nor removed.

Inherited from [BaseCards](foundry.documents.BaseCards.html).[\_source](foundry.documents.BaseCards.html#_source)

### parent

parent: null | [DataModel](foundry.abstract.DataModel.html)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.html)>

An immutable reverse-reference to a parent DataModel to which this model belongs.

Inherited from [BaseCards](foundry.documents.BaseCards.html).[parent](foundry.documents.BaseCards.html#parent)

### `Static` `Internal`\_schema

\_schema: [SchemaField](foundry.data.fields.SchemaField.html)

The defined and cached Data Schema for all instances of this DataModel.

Inherited from [BaseCards](foundry.documents.BaseCards.html).[\_schema](foundry.documents.BaseCards.html#_schema)

### `Static`DEFAULT\_ICON

DEFAULT\_ICON: string = "icons/svg/card-hand.svg"

The default icon used for a cards stack that does not have a custom image set

Inherited from [BaseCards](foundry.documents.BaseCards.html).[DEFAULT\_ICON](foundry.documents.BaseCards.html#default_icon)

### `Static`LOCALIZATION\_PREFIXES

LOCALIZATION\_PREFIXES: string[] = ...

Inherited from [BaseCards](foundry.documents.BaseCards.html).[LOCALIZATION\_PREFIXES](foundry.documents.BaseCards.html#localization_prefixes)

### `Static`metadata

metadata: object = ...

Default metadata which applies to each instance of this Document type.

Inherited from [BaseCards](foundry.documents.BaseCards.html).[metadata](foundry.documents.BaseCards.html#metadata)

## Accessors

### availableCards

* get availableCards(): [documents](../modules/foundry.documents.html).[Card](foundry.documents.Card.html)[]

  The Card documents within this stack which are available to be drawn.

  #### Returns [documents](../modules/foundry.documents.html).[Card](foundry.documents.Card.html)[]

### canClone

* get canClone(): boolean

  Can this Cards document be cloned in a duplicate workflow?

  #### Returns boolean

### `Abstract`compendium

* get compendium(): any

  A reference to the Compendium Collection containing this Document, if any, and otherwise null.

  #### Returns any

  Inherited from ClientDocumentMixin(BaseCards).compendium

### drawnCards

* get drawnCards(): [documents](../modules/foundry.documents.html).[Card](foundry.documents.Card.html)[]

  The Card documents which belong to this stack but have already been drawn.

  #### Returns [documents](../modules/foundry.documents.html).[Card](foundry.documents.Card.html)[]

### id

* get id(): null | string

  The canonical identifier for this Document.

  #### Returns null | string

  Inherited from ClientDocumentMixin(BaseCards).id

### inCompendium

* get inCompendium(): boolean

  Is this document in a compendium?

  #### Returns boolean

  Inherited from ClientDocumentMixin(BaseCards).inCompendium

### invalid

* get invalid(): boolean

  Is the current state of this DataModel invalid?
  The model is invalid if there is any unresolved failure.

  #### Returns boolean

  Inherited from ClientDocumentMixin(BaseCards).invalid

### isEmbedded

* get isEmbedded(): boolean

  Is this document embedded within a parent document?

  #### Returns boolean

  Inherited from ClientDocumentMixin(BaseCards).isEmbedded

### schema

* get schema(): [SchemaField](foundry.data.fields.SchemaField.html)

  Define the data schema for this document instance.

  #### Returns [SchemaField](foundry.data.fields.SchemaField.html)

  Inherited from ClientDocumentMixin(BaseCards).schema

### thumbnail

* get thumbnail(): string

  Provide a thumbnail image path used to represent this document.

  #### Returns string

### typeLabel

* get typeLabel(): string

  Returns the localized Label for the type of Card Stack this is

  #### Returns string

### uuid

* get uuid(): string

  A Universally Unique Identifier (uuid) for this Document instance.

  #### Returns string

  Inherited from ClientDocumentMixin(BaseCards).uuid

### validationFailures

* get validationFailures(): {  
  Â Â Â Â fields: null  
  Â Â Â Â | [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.html);  
  Â Â Â Â joint: null | [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.html);  
  }

  An array of validation failure instances which may have occurred when this instance was last validated.

  #### Returns { Â Â Â Â fields: null | [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.html); Â Â Â Â joint: null | [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.html); }

  Inherited from ClientDocumentMixin(BaseCards).validationFailures

### `Static`baseDocument

* get baseDocument(): typeof [Document](foundry.abstract.Document.html)

  The base document definition that this document class extends from.

  #### Returns typeof [Document](foundry.abstract.Document.html)

  Inherited from ClientDocumentMixin(BaseCards).baseDocument

### `Static`collectionName

* get collectionName(): string

  The named collection to which this Document belongs.

  #### Returns string

  Inherited from ClientDocumentMixin(BaseCards).collectionName

### `Static`database

* get database(): [abstract](../modules/foundry.abstract.html).[DatabaseBackend](foundry.abstract.DatabaseBackend.html)

  The database backend used to execute operations and handle results.

  #### Returns [abstract](../modules/foundry.abstract.html).[DatabaseBackend](foundry.abstract.DatabaseBackend.html)

  Inherited from ClientDocumentMixin(BaseCards).database

### `Static`documentName

* get documentName(): string

  The canonical name of this Document type, for example "Actor".

  #### Returns string

  Inherited from ClientDocumentMixin(BaseCards).documentName

### `Static`hasTypeData

* get hasTypeData(): boolean

  Does this Document support additional subtypes?

  #### Returns boolean

  Inherited from ClientDocumentMixin(BaseCards).hasTypeData

### `Static`hierarchy

* get hierarchy(): Readonly<Record<string, any>>

  The Embedded Document hierarchy for this Document.

  #### Returns Readonly<Record<string, any>>

  Inherited from ClientDocumentMixin(BaseCards).hierarchy

### `Static`implementation

* get implementation(): typeof [Document](foundry.abstract.Document.html)

  Return a reference to the configured subclass of this base Document type.

  #### Returns typeof [Document](foundry.abstract.Document.html)

  Inherited from ClientDocumentMixin(BaseCards).implementation

### `Static`schema

* get schema(): [SchemaField](foundry.data.fields.SchemaField.html)

  Ensure that all Document classes share the same schema of their base declaration.

  #### Returns [SchemaField](foundry.data.fields.SchemaField.html)

  Inherited from ClientDocumentMixin(BaseCards).schema

### `Static`TYPES

* get TYPES(): string[]

  The allowed types which may exist for this Document class.

  #### Returns string[]

  Inherited from ClientDocumentMixin(BaseCards).TYPES

## Methods

### \_configure

* \_configure(\_\_namedParameters?: { pack?: null; parentCollection?: null }): void

  #### Parameters

  + \_\_namedParameters: { pack?: null; parentCollection?: null } = {}

  #### Returns void

  Inherited from [BaseCards](foundry.documents.BaseCards.html).[\_configure](foundry.documents.BaseCards.html#_configure)

### \_getParentCollection

* \_getParentCollection(parentCollection?: null | string): null | string

  `Internal`

  Identify the collection in a parent Document that this Document belongs to, if any.

  #### Parameters

  + `Optional`parentCollection: null | string

    An explicitly provided parent collection name.

  #### Returns null | string

  Inherited from [BaseCards](foundry.documents.BaseCards.html).[\_getParentCollection](foundry.documents.BaseCards.html#_getparentcollection)

### \_initialize

* \_initialize(options: any): void

  Initialize the instance by copying data from the source object to instance attributes.
  This mirrors the workflow of SchemaField#initialize but with some added functionality.

  #### Parameters

  + options: any

    Options provided to the model constructor

  #### Returns void

  Inherited from [BaseCards](foundry.documents.BaseCards.html).[\_initialize](foundry.documents.BaseCards.html#_initialize)

### \_preCreate

* \_preCreate(data: any, options: any, user: any): Promise<undefined | false>

  Pre-process a creation operation for a single Document instance. Pre-operation events only occur for the client
  which requested the operation.

  Modifications to the pending Document instance must be performed using [updateSource](foundry.documents.Cards.html#updatesource).

  #### Parameters

  + data: any

    The initial data object provided to the document creation request
  + options: any

    Additional options which modify the creation request
  + user: any

    The User requesting the document creation

  #### Returns Promise<undefined | false>

  Return false to exclude this Document from the creation operation

  Overrides [BaseCards](foundry.documents.BaseCards.html).[\_preCreate](foundry.documents.BaseCards.html#_precreate)

### \_preDelete

* \_preDelete(options: any, user: any): Promise<boolean | void>

  Pre-process a deletion operation for a single Document instance. Pre-operation events only occur for the client
  which requested the operation.

  #### Parameters

  + options: any

    Additional options which modify the deletion request
  + user: any

    The User requesting the document deletion

  #### Returns Promise<boolean | void>

  A return value of false indicates the deletion operation should be cancelled.

  Overrides [BaseCards](foundry.documents.BaseCards.html).[\_preDelete](foundry.documents.BaseCards.html#_predelete)

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

  Inherited from [BaseCards](foundry.documents.BaseCards.html).[canUserModify](foundry.documents.BaseCards.html#canusermodify)

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

  Inherited from [BaseCards](foundry.documents.BaseCards.html).[clone](foundry.documents.BaseCards.html#clone)

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

  Inherited from [BaseCards](foundry.documents.BaseCards.html).[createEmbeddedDocuments](foundry.documents.BaseCards.html#createembeddeddocuments)

### deal

* deal(  
  Â Â Â Â to: [documents](../modules/foundry.documents.html).[Cards](foundry.documents.Cards.html)[],  
  Â Â Â Â number?: number,  
  Â Â Â Â options?: {  
  Â Â Â Â Â Â Â Â action?: string;  
  Â Â Â Â Â Â Â Â chatNotification?: boolean;  
  Â Â Â Â Â Â Â Â how?: number;  
  Â Â Â Â Â Â Â Â updateData?: object;  
  Â Â Â Â },  
  ): Promise<[documents](../modules/foundry.documents.html).[Cards](foundry.documents.Cards.html)>

  Deal one or more cards from this Cards document to each of a provided array of Cards destinations.
  Cards are allocated from the top of the deck in cyclical order until the required number of Cards have been dealt.

  #### Parameters

  + to: [documents](../modules/foundry.documents.html).[Cards](foundry.documents.Cards.html)[]

    An array of other Cards documents to which cards are dealt
  + `Optional`number: number = 1

    The number of cards to deal to each other document
  + `Optional`options: {  
    Â Â Â Â action?: string;  
    Â Â Â Â chatNotification?: boolean;  
    Â Â Â Â how?: number;  
    Â Â Â Â updateData?: object;  
    } = {}

    Options which modify how the deal operation is performed

    - ##### `Optional`action?: string

      The name of the action being performed, used as part of the dispatched
      Hook event
    - ##### `Optional`chatNotification?: boolean

      Create a ChatMessage which notifies that this action has occurred
    - ##### `Optional`how?: number

      How to draw, a value from CONST.CARD\_DRAW\_MODES
    - ##### `Optional`updateData?: object

      Modifications to make to each Card as part of the deal operation,
      for example the displayed face

  #### Returns Promise<[documents](../modules/foundry.documents.html).[Cards](foundry.documents.Cards.html)>

  This Cards document after the deal operation has completed

### dealDialog

* dealDialog(): Promise<null | [documents](../modules/foundry.documents.html).[Cards](foundry.documents.Cards.html)>

  Display a dialog which prompts the user to deal cards to some number of hand-type Cards documents.

  #### Returns Promise<null | [documents](../modules/foundry.documents.html).[Cards](foundry.documents.Cards.html)>

  #### See

  [Cards#deal](foundry.documents.Cards.html#deal)

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

  Inherited from [BaseCards](foundry.documents.BaseCards.html).[delete](foundry.documents.BaseCards.html#delete)

### deleteDialog

* deleteDialog(options?: {}): Promise<any>

  #### Parameters

  + options: {} = {}

  #### Returns Promise<any>

  #### Inherit Doc

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

  Inherited from [BaseCards](foundry.documents.BaseCards.html).[deleteEmbeddedDocuments](foundry.documents.BaseCards.html#deleteembeddeddocuments)

### draw

* draw(  
  Â Â Â Â from: [documents](../modules/foundry.documents.html).[Cards](foundry.documents.Cards.html),  
  Â Â Â Â number?: number,  
  Â Â Â Â options?: { how?: number; updateData?: object },  
  ): Promise<[documents](../modules/foundry.documents.html).[Card](foundry.documents.Card.html)[]>

  Draw one or more cards from some other Cards document.

  #### Parameters

  + from: [documents](../modules/foundry.documents.html).[Cards](foundry.documents.Cards.html)

    Some other Cards document from which to draw
  + `Optional`number: number = 1

    The number of cards to draw
  + `Optional`options: { how?: number; updateData?: object } = {}

    Options which modify how the draw operation is performed

    - ##### `Optional`how?: number

      How to draw, a value from CONST.CARD\_DRAW\_MODES
    - ##### `Optional`updateData?: object

      Modifications to make to each Card as part of the draw operation,
      for example the displayed face

  #### Returns Promise<[documents](../modules/foundry.documents.html).[Card](foundry.documents.Card.html)[]>

  An array of the Card documents which were drawn

### drawDialog

* drawDialog(): Promise<null | [documents](../modules/foundry.documents.html).[Card](foundry.documents.Card.html)[]>

  Display a dialog which prompts the user to draw cards from some other deck-type Cards documents.

  #### Returns Promise<null | [documents](../modules/foundry.documents.html).[Card](foundry.documents.Card.html)[]>

  #### See

  [Cards#draw](foundry.documents.Cards.html#draw)

### getEmbeddedCollection

* getEmbeddedCollection(embeddedName: string): DocumentCollection

  Obtain a reference to the Array of source data within the data object for a certain embedded Document name

  #### Parameters

  + embeddedName: string

    The name of the embedded Document type

  #### Returns DocumentCollection

  The Collection instance of embedded Documents of the requested type

  Inherited from [BaseCards](foundry.documents.BaseCards.html).[getEmbeddedCollection](foundry.documents.BaseCards.html#getembeddedcollection)

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

  Inherited from [BaseCards](foundry.documents.BaseCards.html).[getEmbeddedDocument](foundry.documents.BaseCards.html#getembeddeddocument)

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

  Inherited from [BaseCards](foundry.documents.BaseCards.html).[getFlag](foundry.documents.BaseCards.html#getflag)

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

  Inherited from [BaseCards](foundry.documents.BaseCards.html).[getUserLevel](foundry.documents.BaseCards.html#getuserlevel)

### migrateSystemData

* migrateSystemData(): object

  For Documents which include game system data, migrate the system data object to conform to its latest data model.
  The data model is defined by the template.json specification included by the game system.

  #### Returns object

  The migrated system data object

  Inherited from [BaseCards](foundry.documents.BaseCards.html).[migrateSystemData](foundry.documents.BaseCards.html#migratesystemdata)

### pass

* pass(  
  Â Â Â Â to: [documents](../modules/foundry.documents.html).[Cards](foundry.documents.Cards.html),  
  Â Â Â Â ids: string[],  
  Â Â Â Â options?: {  
  Â Â Â Â Â Â Â Â action?: string;  
  Â Â Â Â Â Â Â Â chatNotification?: boolean;  
  Â Â Â Â Â Â Â Â updateData?: object;  
  Â Â Â Â },  
  ): Promise<[documents](../modules/foundry.documents.html).[Card](foundry.documents.Card.html)[]>

  Pass an array of specific Card documents from this document to some other Cards stack.

  #### Parameters

  + to: [documents](../modules/foundry.documents.html).[Cards](foundry.documents.Cards.html)

    Some other Cards document that is the destination for the pass operation
  + ids: string[]

    The embedded Card ids which should be passed
  + `Optional`options: { action?: string; chatNotification?: boolean; updateData?: object } = {}

    Additional options which modify the pass operation

    - ##### `Optional`action?: string

      The name of the action being performed, used as part of the dispatched
      Hook event
    - ##### `Optional`chatNotification?: boolean

      Create a ChatMessage which notifies that this action has occurred
    - ##### `Optional`updateData?: object

      Modifications to make to each Card as part of the pass operation,
      for example the displayed face

  #### Returns Promise<[documents](../modules/foundry.documents.html).[Card](foundry.documents.Card.html)[]>

  An array of the Card embedded documents created within the destination stack

### passDialog

* passDialog(): Promise<null | [documents](../modules/foundry.documents.html).[Cards](foundry.documents.Cards.html)>

  Display a dialog which prompts the user to pass cards from this document to some other Cards document.

  #### Returns Promise<null | [documents](../modules/foundry.documents.html).[Cards](foundry.documents.Cards.html)>

  #### See

  [Cards#deal](foundry.documents.Cards.html#deal)

### playDialog

* playDialog(card: [documents](../modules/foundry.documents.html).[Card](foundry.documents.Card.html)): Promise<null | [documents](../modules/foundry.documents.html).[Card](foundry.documents.Card.html)[]>

  Display a dialog which prompts the user to play a specific Card to some other Cards document

  #### Parameters

  + card: [documents](../modules/foundry.documents.html).[Card](foundry.documents.Card.html)

    The specific card being played as part of this dialog

  #### Returns Promise<null | [documents](../modules/foundry.documents.html).[Card](foundry.documents.Card.html)[]>

  #### See

  [Cards#pass](foundry.documents.Cards.html#pass)

### recall

* recall(  
  Â Â Â Â options?: { chatNotification?: boolean; updateData?: object },  
  ): Promise<[documents](../modules/foundry.documents.html).[Cards](foundry.documents.Cards.html)>

  Recall the Cards stack, retrieving all original cards from other stacks where they may have been drawn if this is a
  deck, otherwise returning all the cards in this stack to the decks where they originated.

  #### Parameters

  + `Optional`options: { chatNotification?: boolean; updateData?: object }

    Options which modify the recall operation

    - ##### `Optional`chatNotification?: boolean

      Create a ChatMessage which notifies that this action has occurred
    - ##### `Optional`updateData?: object

      Modifications to make to each Card as part of the recall operation,
      for example the displayed face

  #### Returns Promise<[documents](../modules/foundry.documents.html).[Cards](foundry.documents.Cards.html)>

  The Cards document after the recall operation has completed.

### reset

* reset(): void

  Reset the state of this data instance back to mirror the contained source data, erasing any changes.

  #### Returns void

  Inherited from [BaseCards](foundry.documents.BaseCards.html).[reset](foundry.documents.BaseCards.html#reset)

### resetDialog

* resetDialog(): Promise<null | false | [documents](../modules/foundry.documents.html).[Cards](foundry.documents.Cards.html)>

  Display a confirmation dialog for whether the user wishes to reset a Cards stack

  #### Returns Promise<null | false | [documents](../modules/foundry.documents.html).[Cards](foundry.documents.Cards.html)>

  #### See

  [Cards#recall](foundry.documents.Cards.html#recall)

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

  Inherited from [BaseCards](foundry.documents.BaseCards.html).[setFlag](foundry.documents.BaseCards.html#setflag)

### shuffle

* shuffle(  
  Â Â Â Â options?: { chatNotification?: boolean; updateData?: object },  
  ): Promise<[documents](../modules/foundry.documents.html).[Cards](foundry.documents.Cards.html)>

  Shuffle this Cards stack, randomizing the sort order of all the cards it contains.

  #### Parameters

  + `Optional`options: { chatNotification?: boolean; updateData?: object } = {}

    Options which modify how the shuffle operation is performed.

    - ##### `Optional`chatNotification?: boolean

      Create a ChatMessage which notifies that this action has occurred
    - ##### `Optional`updateData?: object

      Modifications to make to each Card as part of the shuffle operation,
      for example the displayed face.

  #### Returns Promise<[documents](../modules/foundry.documents.html).[Cards](foundry.documents.Cards.html)>

  The Cards document after the shuffle operation has completed

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

  Inherited from [BaseCards](foundry.documents.BaseCards.html).[testUserPermission](foundry.documents.BaseCards.html#testuserpermission)

### toJSON

* toJSON(): object

  Extract the source data for the DataModel into a simple object format that can be serialized.

  #### Returns object

  The document source data expressed as a plain object

  Inherited from [BaseCards](foundry.documents.BaseCards.html).[toJSON](foundry.documents.BaseCards.html#tojson)

### toObject

* toObject(source?: boolean): any

  Copy and transform the DataModel into a plain object.
  Draw the values of the extracted object from the data source (by default) otherwise from its transformed values.

  #### Parameters

  + source: boolean = true

    Draw values from the underlying data source rather than transformed values

  #### Returns any

  The extracted primitive object

  Inherited from [BaseCards](foundry.documents.BaseCards.html).[toObject](foundry.documents.BaseCards.html#toobject)

### traverseEmbeddedDocuments

* traverseEmbeddedDocuments(\_parentPath?: string): Generator<any, void, any>

  Iterate over all embedded Documents that are hierarchical children of this Document.

  #### Parameters

  + `Optional`\_parentPath: string

    A parent field path already traversed

  #### Returns Generator<any, void, any>

  #### Yields

  Inherited from [BaseCards](foundry.documents.BaseCards.html).[traverseEmbeddedDocuments](foundry.documents.BaseCards.html#traverseembeddeddocuments)

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

  Inherited from [BaseCards](foundry.documents.BaseCards.html).[unsetFlag](foundry.documents.BaseCards.html#unsetflag)

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

  Inherited from [BaseCards](foundry.documents.BaseCards.html).[update](foundry.documents.BaseCards.html#update)

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

  Inherited from [BaseCards](foundry.documents.BaseCards.html).[updateEmbeddedDocuments](foundry.documents.BaseCards.html#updateembeddeddocuments)

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

  Inherited from [BaseCards](foundry.documents.BaseCards.html).[updateSource](foundry.documents.BaseCards.html#updatesource)

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

  Inherited from [BaseCards](foundry.documents.BaseCards.html).[validate](foundry.documents.BaseCards.html#validate)

### `Protected`\_drawCards

* \_drawCards(number: number, how: number): [documents](../modules/foundry.documents.html).[Card](foundry.documents.Card.html)[]

  `Protected`

  An internal helper method for drawing a certain number of Card documents from this Cards stack.

  #### Parameters

  + number: number

    The number of cards to draw
  + how: number

    A draw mode from CONST.CARD\_DRAW\_MODES

  #### Returns [documents](../modules/foundry.documents.html).[Card](foundry.documents.Card.html)[]

  An array of drawn Card documents

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

  Inherited from [BaseCards](foundry.documents.BaseCards.html).[\_initializeSource](foundry.documents.BaseCards.html#_initializesource)

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

  Inherited from [BaseCards](foundry.documents.BaseCards.html).[\_onCreate](foundry.documents.BaseCards.html#_oncreate)

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

  Inherited from [BaseCards](foundry.documents.BaseCards.html).[\_onDelete](foundry.documents.BaseCards.html#_ondelete)

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

  Inherited from [BaseCards](foundry.documents.BaseCards.html).[\_onUpdate](foundry.documents.BaseCards.html#_onupdate)

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

  Inherited from [BaseCards](foundry.documents.BaseCards.html).[\_preUpdate](foundry.documents.BaseCards.html#_preupdate)

### `Protected`sortShuffled

* sortShuffled(a: [documents](../modules/foundry.documents.html).[Card](foundry.documents.Card.html), b: [documents](../modules/foundry.documents.html).[Card](foundry.documents.Card.html)): number

  `Protected`

  A sorting function that is used to determine the order of Card documents within a shuffled stack.

  #### Parameters

  + a: [documents](../modules/foundry.documents.html).[Card](foundry.documents.Card.html)

    The card being sorted
  + b: [documents](../modules/foundry.documents.html).[Card](foundry.documents.Card.html)

    Another card being sorted against

  #### Returns number

### `Protected`sortStandard

* sortStandard(a: [documents](../modules/foundry.documents.html).[Card](foundry.documents.Card.html), b: [documents](../modules/foundry.documents.html).[Card](foundry.documents.Card.html)): number

  `Protected`

  A sorting function that is used to determine the standard order of Card documents within an un-shuffled stack.
  Sorting with "en" locale to ensure the same order regardless of which client sorts the deck.

  #### Parameters

  + a: [documents](../modules/foundry.documents.html).[Card](foundry.documents.Card.html)

    The card being sorted
  + b: [documents](../modules/foundry.documents.html).[Card](foundry.documents.Card.html)

    Another card being sorted against

  #### Returns number

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

  Inherited from [BaseCards](foundry.documents.BaseCards.html).[\_addDataFieldMigration](foundry.documents.BaseCards.html#_adddatafieldmigration)

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

  Inherited from [BaseCards](foundry.documents.BaseCards.html).[\_addDataFieldShim](foundry.documents.BaseCards.html#_adddatafieldshim)

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

  Inherited from [BaseCards](foundry.documents.BaseCards.html).[\_addDataFieldShims](foundry.documents.BaseCards.html#_adddatafieldshims)

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

  Inherited from [BaseCards](foundry.documents.BaseCards.html).[\_clearFieldsRecursively](foundry.documents.BaseCards.html#_clearfieldsrecursively)

### `Static`\_initializationOrder

* \_initializationOrder(): Generator<any[], void, unknown>

  #### Returns Generator<any[], void, unknown>

  Inherited from [BaseCards](foundry.documents.BaseCards.html).[\_initializationOrder](foundry.documents.BaseCards.html#_initializationorder)

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

  Inherited from [BaseCards](foundry.documents.BaseCards.html).[\_logDataFieldMigration](foundry.documents.BaseCards.html#_logdatafieldmigration)

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

  Inherited from [BaseCards](foundry.documents.BaseCards.html).[canUserCreate](foundry.documents.BaseCards.html#canusercreate)

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

  Inherited from [BaseCards](foundry.documents.BaseCards.html).[cleanData](foundry.documents.BaseCards.html#cleandata)

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

  Inherited from [BaseCards](foundry.documents.BaseCards.html).[create](foundry.documents.BaseCards.html#create)

### `Static`createDialog

* createDialog(  
  Â Â Â Â data?: {},  
  Â Â Â Â createOptions?: {},  
  Â Â Â Â \_\_namedParameters?: {},  
  ): Promise<any>

  #### Parameters

  + data: {} = {}
  + createOptions: {} = {}
  + \_\_namedParameters: {} = {}

  #### Returns Promise<any>

  Overrides ClientDocumentMixin(BaseCards).createDialog

### `Static`createDocuments

* createDocuments(  
  Â Â Â Â data?: any[],  
  Â Â Â Â context?: {},  
  ): Promise<[Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[]>

  Create multiple Documents using provided input data.
  Data is provided as an array of objects where each individual object becomes one new Document.

  #### Parameters

  + data: any[] = []

    An array of data objects or existing Documents to persist.
  + context: {} = {}

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

  Overrides [BaseCards](foundry.documents.BaseCards.html).[createDocuments](foundry.documents.BaseCards.html#createdocuments)

### `Static`defineSchema

* defineSchema(): {  
  Â Â Â Â \_id: [DocumentIdField](foundry.data.fields.DocumentIdField.html);  
  Â Â Â Â \_stats: [DocumentStatsField](foundry.data.fields.DocumentStatsField.html);  
  Â Â Â Â cards: [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.html);  
  Â Â Â Â description: [HTMLField](foundry.data.fields.HTMLField.html);  
  Â Â Â Â displayCount: [BooleanField](foundry.data.fields.BooleanField.html);  
  Â Â Â Â flags: [DocumentFlagsField](foundry.data.fields.DocumentFlagsField.html);  
  Â Â Â Â folder: [ForeignDocumentField](foundry.data.fields.ForeignDocumentField.html);  
  Â Â Â Â height: [NumberField](foundry.data.fields.NumberField.html);  
  Â Â Â Â img: [FilePathField](foundry.data.fields.FilePathField.html);  
  Â Â Â Â name: [StringField](foundry.data.fields.StringField.html);  
  Â Â Â Â ownership: [DocumentOwnershipField](foundry.data.fields.DocumentOwnershipField.html);  
  Â Â Â Â rotation: [AngleField](foundry.data.fields.AngleField.html);  
  Â Â Â Â sort: [IntegerSortField](foundry.data.fields.IntegerSortField.html);  
  Â Â Â Â system: [TypeDataField](foundry.data.fields.TypeDataField.html);  
  Â Â Â Â type: [DocumentTypeField](foundry.data.fields.DocumentTypeField.html);  
  Â Â Â Â width: [NumberField](foundry.data.fields.NumberField.html);  
  }

  Define the data schema for models of this type.
  The schema is populated the first time it is accessed and cached for future reuse.

  The schema, through its fields, provide the essential cleaning, validation, and initialization methods to turn the
  [\_source](foundry.documents.Cards.html#_source) values into direct properties of the data model. The schema is a static property of the model and
  is reused by all instances to perform validation.

  The schemas defined by the core software in classes like [foundry.documents.BaseActor](foundry.documents.BaseActor.html) are validated by the
  server, where user code does not run. However, almost all documents have a `flags` field to store data, and many
  have a `system` field that can be configured to be a [foundry.abstract.TypeDataModel](foundry.abstract.TypeDataModel.html) instance. Those models
  are *not* constructed on the server and rely purely on client-side code, which means certain extra-sensitive fields
  must be also be registered through your package manifest. [foundry.packages.types.ServerSanitizationFields](../interfaces/foundry.packages.types.ServerSanitizationFields.html)

  #### Returns { Â Â Â Â \_id: [DocumentIdField](foundry.data.fields.DocumentIdField.html); Â Â Â Â \_stats: [DocumentStatsField](foundry.data.fields.DocumentStatsField.html); Â Â Â Â cards: [EmbeddedCollectionField](foundry.data.fields.EmbeddedCollectionField.html); Â Â Â Â description: [HTMLField](foundry.data.fields.HTMLField.html); Â Â Â Â displayCount: [BooleanField](foundry.data.fields.BooleanField.html); Â Â Â Â flags: [DocumentFlagsField](foundry.data.fields.DocumentFlagsField.html); Â Â Â Â folder: [ForeignDocumentField](foundry.data.fields.ForeignDocumentField.html); Â Â Â Â height: [NumberField](foundry.data.fields.NumberField.html); Â Â Â Â img: [FilePathField](foundry.data.fields.FilePathField.html); Â Â Â Â name: [StringField](foundry.data.fields.StringField.html); Â Â Â Â ownership: [DocumentOwnershipField](foundry.data.fields.DocumentOwnershipField.html); Â Â Â Â rotation: [AngleField](foundry.data.fields.AngleField.html); Â Â Â Â sort: [IntegerSortField](foundry.data.fields.IntegerSortField.html); Â Â Â Â system: [TypeDataField](foundry.data.fields.TypeDataField.html); Â Â Â Â type: [DocumentTypeField](foundry.data.fields.DocumentTypeField.html); Â Â Â Â width: [NumberField](foundry.data.fields.NumberField.html); }

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

  Inherited from [BaseCards](foundry.documents.BaseCards.html).[defineSchema](foundry.documents.BaseCards.html#defineschema)

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

  Inherited from [BaseCards](foundry.documents.BaseCards.html).[deleteDocuments](foundry.documents.BaseCards.html#deletedocuments)

### `Static`fromJSON

* fromJSON(json: string): [DataModel](foundry.abstract.DataModel.html)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.html)>

  Create a DataModel instance using a provided serialized JSON string.

  #### Parameters

  + json: string

    Serialized document data in string format

  #### Returns [DataModel](foundry.abstract.DataModel.html)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.html)>

  A constructed data model instance

  Inherited from [BaseCards](foundry.documents.BaseCards.html).[fromJSON](foundry.documents.BaseCards.html#fromjson)

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

  Inherited from [BaseCards](foundry.documents.BaseCards.html).[fromSource](foundry.documents.BaseCards.html#fromsource)

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

  Inherited from [BaseCards](foundry.documents.BaseCards.html).[get](foundry.documents.BaseCards.html#get)

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

  Inherited from [BaseCards](foundry.documents.BaseCards.html).[getCollectionName](foundry.documents.BaseCards.html#getcollectionname)

### `Static`migrateData

* migrateData(source: any): object

  Migrate candidate source data for this DataModel which may require initial cleaning or transformations.

  #### Parameters

  + source: any

    The candidate source data from which the model will be constructed

  #### Returns object

  Migrated source data, which is the same object as the `source` argument

  Inherited from [BaseCards](foundry.documents.BaseCards.html).[migrateData](foundry.documents.BaseCards.html#migratedata)

### `Static`migrateDataSafe

* migrateDataSafe(source: object): object

  Wrap data migration in a try/catch which attempts it safely

  #### Parameters

  + source: object

    The candidate source data from which the model will be constructed

  #### Returns object

  Migrated source data, which is the same object as the `source` argument

  Inherited from [BaseCards](foundry.documents.BaseCards.html).[migrateDataSafe](foundry.documents.BaseCards.html#migratedatasafe)

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

  Inherited from [BaseCards](foundry.documents.BaseCards.html).[shimData](foundry.documents.BaseCards.html#shimdata)

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

  Inherited from [BaseCards](foundry.documents.BaseCards.html).[updateDocuments](foundry.documents.BaseCards.html#updatedocuments)

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

  Inherited from [BaseCards](foundry.documents.BaseCards.html).[validateJoint](foundry.documents.BaseCards.html#validatejoint)

### `Protected` `Static`\_onCreateOperation

* \_onCreateOperation(  
  Â Â Â Â documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[],  
  Â Â Â Â operation: [DatabaseCreateOperation](../interfaces/foundry.abstract.types.DatabaseCreateOperation.html),  
  Â Â Â Â user: [BaseUser](foundry.documents.BaseUser.html),  
  ): Promise<void>

  `Protected`

  Post-process a creation operation, reacting to database changes which have occurred. Post-operation events occur
  for all connected clients.

  This batch-wise workflow occurs after individual [\_onCreate](foundry.documents.Cards.html#_oncreate) workflows.

  #### Parameters

  + documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[]

    The Document instances which were created
  + operation: [DatabaseCreateOperation](../interfaces/foundry.abstract.types.DatabaseCreateOperation.html)

    Parameters of the database creation operation
  + user: [BaseUser](foundry.documents.BaseUser.html)

    The User who performed the creation operation

  #### Returns Promise<void>

  Inherited from [BaseCards](foundry.documents.BaseCards.html).[\_onCreateOperation](foundry.documents.BaseCards.html#_oncreateoperation)

### `Protected` `Static`\_onDeleteOperation

* \_onDeleteOperation(  
  Â Â Â Â documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[],  
  Â Â Â Â operation: [DatabaseDeleteOperation](../interfaces/foundry.abstract.types.DatabaseDeleteOperation.html),  
  Â Â Â Â user: [BaseUser](foundry.documents.BaseUser.html),  
  ): Promise<void>

  `Protected`

  Post-process a deletion operation, reacting to database changes which have occurred. Post-operation events occur
  for all connected clients.

  This batch-wise workflow occurs after individual [\_onDelete](foundry.documents.Cards.html#_ondelete) workflows.

  #### Parameters

  + documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[]

    The Document instances which were deleted
  + operation: [DatabaseDeleteOperation](../interfaces/foundry.abstract.types.DatabaseDeleteOperation.html)

    Parameters of the database deletion operation
  + user: [BaseUser](foundry.documents.BaseUser.html)

    The User who performed the deletion operation

  #### Returns Promise<void>

  Inherited from [BaseCards](foundry.documents.BaseCards.html).[\_onDeleteOperation](foundry.documents.BaseCards.html#_ondeleteoperation)

### `Protected` `Static`\_onUpdateOperation

* \_onUpdateOperation(  
  Â Â Â Â documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[],  
  Â Â Â Â operation: [DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.html),  
  Â Â Â Â user: [BaseUser](foundry.documents.BaseUser.html),  
  ): Promise<void>

  `Protected`

  Post-process an update operation, reacting to database changes which have occurred. Post-operation events occur
  for all connected clients.

  This batch-wise workflow occurs after individual [\_onUpdate](foundry.documents.Cards.html#_onupdate) workflows.

  #### Parameters

  + documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[]

    The Document instances which were updated
  + operation: [DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.html)

    Parameters of the database update operation
  + user: [BaseUser](foundry.documents.BaseUser.html)

    The User who performed the update operation

  #### Returns Promise<void>

  Inherited from [BaseCards](foundry.documents.BaseCards.html).[\_onUpdateOperation](foundry.documents.BaseCards.html#_onupdateoperation)

### `Protected` `Static`\_preCreateOperation

* \_preCreateOperation(  
  Â Â Â Â documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[],  
  Â Â Â Â operation: [DatabaseCreateOperation](../interfaces/foundry.abstract.types.DatabaseCreateOperation.html),  
  Â Â Â Â user: [BaseUser](foundry.documents.BaseUser.html),  
  ): Promise<boolean | void>

  `Protected`

  Pre-process a creation operation, potentially altering its instructions or input data. Pre-operation events only
  occur for the client which requested the operation.

  This batch-wise workflow occurs after individual [\_preCreate](foundry.documents.Cards.html#_precreate) workflows and provides a final pre-flight check
  before a database operation occurs.

  Modifications to pending documents must mutate the documents array or alter individual document instances using
  [updateSource](foundry.documents.Cards.html#updatesource).

  #### Parameters

  + documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[]

    Pending document instances to be created
  + operation: [DatabaseCreateOperation](../interfaces/foundry.abstract.types.DatabaseCreateOperation.html)

    Parameters of the database creation operation
  + user: [BaseUser](foundry.documents.BaseUser.html)

    The User requesting the creation operation

  #### Returns Promise<boolean | void>

  Return false to cancel the creation operation entirely

  Inherited from [BaseCards](foundry.documents.BaseCards.html).[\_preCreateOperation](foundry.documents.BaseCards.html#_precreateoperation)

### `Protected` `Static`\_preDeleteOperation

* \_preDeleteOperation(  
  Â Â Â Â documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[],  
  Â Â Â Â operation: [DatabaseDeleteOperation](../interfaces/foundry.abstract.types.DatabaseDeleteOperation.html),  
  Â Â Â Â user: [BaseUser](foundry.documents.BaseUser.html),  
  ): Promise<boolean | void>

  `Protected`

  Pre-process a deletion operation, potentially altering its instructions or input data. Pre-operation events only
  occur for the client which requested the operation.

  This batch-wise workflow occurs after individual [\_preDelete](foundry.documents.Cards.html#_predelete) workflows and provides a final pre-flight check
  before a database operation occurs.

  Modifications to the requested deletions are performed by mutating the operation object.
  [updateSource](foundry.documents.Cards.html#updatesource).

  #### Parameters

  + documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[]

    Document instances to be deleted
  + operation: [DatabaseDeleteOperation](../interfaces/foundry.abstract.types.DatabaseDeleteOperation.html)

    Parameters of the database update operation
  + user: [BaseUser](foundry.documents.BaseUser.html)

    The User requesting the deletion operation

  #### Returns Promise<boolean | void>

  Return false to cancel the deletion operation entirely

  Inherited from [BaseCards](foundry.documents.BaseCards.html).[\_preDeleteOperation](foundry.documents.BaseCards.html#_predeleteoperation)

### `Protected` `Static`\_preUpdateOperation

* \_preUpdateOperation(  
  Â Â Â Â documents: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[],  
  Â Â Â Â operation: [DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.html),  
  Â Â Â Â user: [BaseUser](foundry.documents.BaseUser.html),  
  ): Promise<boolean | void>

  `Protected`

  Pre-process an update operation, potentially altering its instructions or input data. Pre-operation events only
  occur for the client which requested the operation.

  This batch-wise workflow occurs after individual [\_preUpdate](foundry.documents.Cards.html#_preupdate) workflows and provides a final pre-flight check
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

  Inherited from [BaseCards](foundry.documents.BaseCards.html).[\_preUpdateOperation](foundry.documents.BaseCards.html#_preupdateoperation)