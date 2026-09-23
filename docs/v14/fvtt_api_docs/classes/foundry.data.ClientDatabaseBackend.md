---
title: "ClientDatabaseBackend | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.data.ClientDatabaseBackend.html"
category: "classes"
---

# Class ClientDatabaseBackend

The client-side database backend implementation which handles Document modification operations.

#### Hierarchy ([View Summary](../hierarchy.md#foundry.data.ClientDatabaseBackend))

* [abstract](../modules/foundry.abstract.md).[DatabaseBackend](foundry.abstract.DatabaseBackend.md)
  + ClientDatabaseBackend

##### Index

### Methods

[\_activateSocketListeners](#_activatesocketlisteners)
[\_log](#_log)
[create](#create)
[delete](#delete)
[get](#get)
[getCompendiumScopes](#getcompendiumscopes)
[getFlagScopes](#getflagscopes)
[modifyDocumentBatch](#modifydocumentbatch)
[update](#update)
[\_logError](#_logerror)
[\_logOperation](#_logoperation)

## Methods

### \_activateSocketListeners

* \_activateSocketListeners(  
  Â Â Â Â socket: Socket<DefaultEventsMap, DefaultEventsMap>,  
  ): void

  `Internal`

  Activate the Socket event listeners used to receive responses from events which modify database documents

  #### Parameters

  + socket: Socket<DefaultEventsMap, DefaultEventsMap>

    The active game socket

  #### Returns void

### \_log

* \_log(level: any, message: any): void

  #### Parameters

  + level: any
  + message: any

  #### Returns void

  Overrides [DatabaseBackend](foundry.abstract.DatabaseBackend.md).[\_log](foundry.abstract.DatabaseBackend.md#_log)

### create

* create(  
  Â Â Â Â documentClass: typeof [Document](foundry.abstract.Document.md),  
  Â Â Â Â operation: [DatabaseCreateOperation](../interfaces/foundry.abstract.types.DatabaseCreateOperation.md),  
  Â Â Â Â user?: [BaseUser](foundry.documents.BaseUser.md),  
  ): Promise<[Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>[]>

  Create new Documents using provided data and context.
  It is recommended to use [Document.createDocuments](foundry.abstract.Document.md#createdocuments) or [Document.create](foundry.abstract.Document.md#create) rather than calling this
  method directly.

  #### Parameters

  + documentClass: typeof [Document](foundry.abstract.Document.md)

    The Document class definition
  + operation: [DatabaseCreateOperation](../interfaces/foundry.abstract.types.DatabaseCreateOperation.md)

    Parameters of the create operation
  + `Optional`user: [BaseUser](foundry.documents.BaseUser.md)

    The requesting User

  #### Returns Promise<[Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>[]>

  An array of created Document instances

  Inherited from [DatabaseBackend](foundry.abstract.DatabaseBackend.md).[create](foundry.abstract.DatabaseBackend.md#create)

### delete

* delete(  
  Â Â Â Â documentClass: typeof [Document](foundry.abstract.Document.md),  
  Â Â Â Â operation: [DatabaseDeleteOperation](../interfaces/foundry.abstract.types.DatabaseDeleteOperation.md),  
  Â Â Â Â user?: [BaseUser](foundry.documents.BaseUser.md),  
  ): Promise<[Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>[]>

  Delete Documents using provided ids and context.
  It is recommended to use [foundry.abstract.Document.deleteDocuments](foundry.abstract.Document.md#deletedocuments) or
  [foundry.abstract.Document#delete](foundry.abstract.Document.md#delete) rather than calling this method directly.

  #### Parameters

  + documentClass: typeof [Document](foundry.abstract.Document.md)

    The Document class definition
  + operation: [DatabaseDeleteOperation](../interfaces/foundry.abstract.types.DatabaseDeleteOperation.md)

    Parameters of the delete operation
  + `Optional`user: [BaseUser](foundry.documents.BaseUser.md)

    The requesting User

  #### Returns Promise<[Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>[]>

  An array of deleted Document instances

  Inherited from [DatabaseBackend](foundry.abstract.DatabaseBackend.md).[delete](foundry.abstract.DatabaseBackend.md#delete)

### get

* get(  
  Â Â Â Â documentClass: typeof [Document](foundry.abstract.Document.md),  
  Â Â Â Â operation: [DatabaseGetOperation](../interfaces/foundry.abstract.types.DatabaseGetOperation.md),  
  Â Â Â Â user?: [BaseUser](foundry.documents.BaseUser.md),  
  ): Promise<object[] | [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>[]>

  Retrieve Documents based on provided query parameters.
  It recommended to use CompendiumCollection#getDocuments or CompendiumCollection#getIndex rather
  than calling this method directly.

  #### Parameters

  + documentClass: typeof [Document](foundry.abstract.Document.md)

    The Document class definition
  + operation: [DatabaseGetOperation](../interfaces/foundry.abstract.types.DatabaseGetOperation.md)

    Parameters of the get operation
  + `Optional`user: [BaseUser](foundry.documents.BaseUser.md)

    The requesting User

  #### Returns Promise<object[] | [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>[]>

  An array of retrieved Document instances or index objects

  Inherited from [DatabaseBackend](foundry.abstract.DatabaseBackend.md).[get](foundry.abstract.DatabaseBackend.md#get)

### getCompendiumScopes

* getCompendiumScopes(): string[]

  Describe the scopes which are suitable as the namespace for a flag key

  #### Returns string[]

  Overrides [DatabaseBackend](foundry.abstract.DatabaseBackend.md).[getCompendiumScopes](foundry.abstract.DatabaseBackend.md#getcompendiumscopes)

### getFlagScopes

* getFlagScopes(): any[]

  Describe the scopes which are suitable as the namespace for a flag key

  #### Returns any[]

  Overrides [DatabaseBackend](foundry.abstract.DatabaseBackend.md).[getFlagScopes](foundry.abstract.DatabaseBackend.md#getflagscopes)

### modifyDocumentBatch

* modifyDocumentBatch(  
  Â Â Â Â operations: [DatabaseWriteOperation](../types/foundry.abstract.types.DatabaseWriteOperation.md)[],  
  ): Promise<ClientDocument[][]>

  Bundle multiple Document-modification operations into a single, batched request.

  #### Parameters

  + operations: [DatabaseWriteOperation](../types/foundry.abstract.types.DatabaseWriteOperation.md)[]

  #### Returns Promise<ClientDocument[][]>

  #### See

  [foundry.documents.modifyBatch](../functions/foundry.documents.modifyBatch.md)

### update

* update(  
  Â Â Â Â documentClass: typeof [Document](foundry.abstract.Document.md),  
  Â Â Â Â operation: [DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.md),  
  Â Â Â Â user?: [BaseUser](foundry.documents.BaseUser.md),  
  ): Promise<[Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>[]>

  Update Documents using provided data and context.
  It is recommended to use [Document.updateDocuments](foundry.abstract.Document.md#updatedocuments) or [Document#update](foundry.abstract.Document.md#update) rather than calling this
  method directly.

  #### Parameters

  + documentClass: typeof [Document](foundry.abstract.Document.md)

    The Document class definition
  + operation: [DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.md)

    Parameters of the update operation
  + `Optional`user: [BaseUser](foundry.documents.BaseUser.md)

    The requesting User

  #### Returns Promise<[Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>[]>

  An array of updated Document instances

  Inherited from [DatabaseBackend](foundry.abstract.DatabaseBackend.md).[update](foundry.abstract.DatabaseBackend.md#update)

### `Protected`\_logError

* \_logError(  
  Â Â Â Â user: [BaseUser](foundry.documents.BaseUser.md),  
  Â Â Â Â action: string,  
  Â Â Â Â subject: [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>,  
  Â Â Â Â context?: {  
  Â Â Â Â Â Â Â Â pack?: string;  
  Â Â Â Â Â Â Â Â parent?: [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>;  
  Â Â Â Â },  
  ): string

  `Protected`

  Construct a standardized error message given the context of an attempted operation

  #### Parameters

  + user: [BaseUser](foundry.documents.BaseUser.md)
  + action: string
  + subject: [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>
  + `Optional`context: { pack?: string; parent?: [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)> } = {}

  #### Returns string

  Inherited from [DatabaseBackend](foundry.abstract.DatabaseBackend.md).[\_logError](foundry.abstract.DatabaseBackend.md#_logerror)

### `Protected`\_logOperation

* \_logOperation(  
  Â Â Â Â action: string,  
  Â Â Â Â type: string,  
  Â Â Â Â documents: Document[],  
  Â Â Â Â context?: {  
  Â Â Â Â Â Â Â Â dryRun?: boolean;  
  Â Â Â Â Â Â Â Â level?: string;  
  Â Â Â Â Â Â Â Â pack?: string;  
  Â Â Â Â Â Â Â Â parent?: [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>;  
  Â Â Â Â },  
  ): void

  `Protected`

  Log a database operation for an embedded document, capturing the action taken and relevant IDs

  #### Parameters

  + action: string

    The action performed
  + type: string

    The document type
  + documents: Document[]

    The documents modified
  + `Optional`context: {  
    Â Â Â Â dryRun?: boolean;  
    Â Â Â Â level?: string;  
    Â Â Â Â pack?: string;  
    Â Â Â Â parent?: [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>;  
    } = {}

    The context of the log request

    - ##### `Optional`dryRun?: boolean

      Whether this operation is part of a dry run: abort true and level isn't
      "debug"
    - ##### `Optional`level?: string

      The logging level
    - ##### `Optional`pack?: string

      A compendium pack within which the operation occurred
    - ##### `Optional`parent?: [Document](foundry.abstract.Document.md)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.md)>

      A parent document

  #### Returns void

  Inherited from [DatabaseBackend](foundry.abstract.DatabaseBackend.md).[\_logOperation](foundry.abstract.DatabaseBackend.md#_logoperation)