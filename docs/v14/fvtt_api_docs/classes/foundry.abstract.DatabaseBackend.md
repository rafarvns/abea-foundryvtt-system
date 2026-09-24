---
title: "DatabaseBackend | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.abstract.DatabaseBackend.html"
category: "classes"
---

# Class DatabaseBackend`Abstract`

An abstract base class extended on both the client and server which defines how Documents are retrieved, created,
updated, and deleted.

#### Hierarchy ([View Summary](../hierarchy.md#foundry.abstract.DatabaseBackend))

* DatabaseBackend
  + [ClientDatabaseBackend](foundry.data.ClientDatabaseBackend.md)

##### Index

### Methods

[create](#create)
[delete](#delete)
[get](#get)
[getCompendiumScopes](#getcompendiumscopes)
[getFlagScopes](#getflagscopes)
[update](#update)
[\_log](#_log)
[\_logError](#_logerror)
[\_logOperation](#_logoperation)

## Methods

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

### getCompendiumScopes

* getCompendiumScopes(): string[]

  Describe the scopes which are suitable as the namespace for a flag key

  #### Returns string[]

### getFlagScopes

* getFlagScopes(): string[]

  Describe the scopes which are suitable as the namespace for a flag key

  #### Returns string[]

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

### `Protected` `Abstract`\_log

* \_log(level: string, message: string): void

  `Protected`

  Log a database operations message.

  #### Parameters

  + level: string

    The logging level
  + message: string

    The message

  #### Returns void

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