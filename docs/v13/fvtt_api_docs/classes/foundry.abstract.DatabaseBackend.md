---
title: "DatabaseBackend | Foundry Virtual Tabletop - API Documentation - Version 13"
url: "https://foundryvtt.com/api/classes/foundry.abstract.DatabaseBackend.html"
category: "classes"
---

* [Foundry Virtual Tabletop - API Documentation - Version 13](../modules.html)
* [foundry](../modules/foundry.html)
* [abstract](../modules/foundry.abstract.html)
* [DatabaseBackend](foundry.abstract.DatabaseBackend.html)

# Class DatabaseBackend`Abstract`

An abstract base class extended on both the client and server which defines how Documents are retrieved, created,
updated, and deleted.

#### Hierarchy ([View Summary](../hierarchy.html#foundry.abstract.DatabaseBackend))

* DatabaseBackend
  + [ClientDatabaseBackend](foundry.data.ClientDatabaseBackend.html)

##### Index

### Methods

[create](foundry.abstract.DatabaseBackend.html#create)
[delete](foundry.abstract.DatabaseBackend.html#delete)
[get](foundry.abstract.DatabaseBackend.html#get)
[getCompendiumScopes](foundry.abstract.DatabaseBackend.html#getcompendiumscopes)
[getFlagScopes](foundry.abstract.DatabaseBackend.html#getflagscopes)
[update](foundry.abstract.DatabaseBackend.html#update)
[\_log](foundry.abstract.DatabaseBackend.html#_log)
[\_logError](foundry.abstract.DatabaseBackend.html#_logerror)
[\_logOperation](foundry.abstract.DatabaseBackend.html#_logoperation)

## Methods

### create

* create(  
  Â Â Â Â documentClass: typeof [Document](foundry.abstract.Document.html),  
  Â Â Â Â operation: [DatabaseCreateOperation](../interfaces/foundry.abstract.types.DatabaseCreateOperation.html),  
  Â Â Â Â user?: [BaseUser](foundry.documents.BaseUser.html),  
  ): Promise<[Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[]>

  Create new Documents using provided data and context.
  It is recommended to use [foundry.abstract.Document.createDocuments](foundry.abstract.Document.html#createdocuments) or [foundry.abstract.Document.create](foundry.abstract.Document.html#create) rather than calling this
  method directly.

  #### Parameters

  + documentClass: typeof [Document](foundry.abstract.Document.html)

    The Document class definition
  + operation: [DatabaseCreateOperation](../interfaces/foundry.abstract.types.DatabaseCreateOperation.html)

    Parameters of the create operation
  + `Optional`user: [BaseUser](foundry.documents.BaseUser.html)

    The requesting User

  #### Returns Promise<[Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[]>

  An array of created Document instances

### delete

* delete(  
  Â Â Â Â documentClass: typeof [Document](foundry.abstract.Document.html),  
  Â Â Â Â operation: [DatabaseDeleteOperation](../interfaces/foundry.abstract.types.DatabaseDeleteOperation.html),  
  Â Â Â Â user?: [BaseUser](foundry.documents.BaseUser.html),  
  ): Promise<[Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[]>

  Delete Documents using provided ids and context.
  It is recommended to use [foundry.abstract.Document.deleteDocuments](foundry.abstract.Document.html#deletedocuments) or
  [foundry.abstract.Document#delete](foundry.abstract.Document.html#delete) rather than calling this method directly.

  #### Parameters

  + documentClass: typeof [Document](foundry.abstract.Document.html)

    The Document class definition
  + operation: [DatabaseDeleteOperation](../interfaces/foundry.abstract.types.DatabaseDeleteOperation.html)

    Parameters of the delete operation
  + `Optional`user: [BaseUser](foundry.documents.BaseUser.html)

    The requesting User

  #### Returns Promise<[Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[]>

  An array of deleted Document instances

### get

* get(  
  Â Â Â Â documentClass: typeof [Document](foundry.abstract.Document.html),  
  Â Â Â Â operation: [DatabaseGetOperation](../interfaces/foundry.abstract.types.DatabaseGetOperation.html),  
  Â Â Â Â user?: [BaseUser](foundry.documents.BaseUser.html),  
  ): Promise<object[] | [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[]>

  Retrieve Documents based on provided query parameters.
  It recommended to use CompendiumCollection#getDocuments or CompendiumCollection#getIndex rather
  than calling this method directly.

  #### Parameters

  + documentClass: typeof [Document](foundry.abstract.Document.html)

    The Document class definition
  + operation: [DatabaseGetOperation](../interfaces/foundry.abstract.types.DatabaseGetOperation.html)

    Parameters of the get operation
  + `Optional`user: [BaseUser](foundry.documents.BaseUser.html)

    The requesting User

  #### Returns Promise<object[] | [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[]>

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
  Â Â Â Â documentClass: typeof [Document](foundry.abstract.Document.html),  
  Â Â Â Â operation: [DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.html),  
  Â Â Â Â user?: [BaseUser](foundry.documents.BaseUser.html),  
  ): Promise<[Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[]>

  Update Documents using provided data and context.
  It is recommended to use [foundry.abstract.Document.updateDocuments](foundry.abstract.Document.html#updatedocuments) or [foundry.abstract.Document#update](foundry.abstract.Document.html#update) rather than calling this
  method directly.

  #### Parameters

  + documentClass: typeof [Document](foundry.abstract.Document.html)

    The Document class definition
  + operation: [DatabaseUpdateOperation](../interfaces/foundry.abstract.types.DatabaseUpdateOperation.html)

    Parameters of the update operation
  + `Optional`user: [BaseUser](foundry.documents.BaseUser.html)

    The requesting User

  #### Returns Promise<[Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>[]>

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
  Â Â Â Â user: [BaseUser](foundry.documents.BaseUser.html),  
  Â Â Â Â action: string,  
  Â Â Â Â subject: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>,  
  Â Â Â Â context?: {  
  Â Â Â Â Â Â Â Â pack?: string;  
  Â Â Â Â Â Â Â Â parent?: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>;  
  Â Â Â Â },  
  ): string

  `Protected`

  Construct a standardized error message given the context of an attempted operation

  #### Parameters

  + user: [BaseUser](foundry.documents.BaseUser.html)
  + action: string
  + subject: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>
  + `Optional`context: { pack?: string; parent?: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)> } = {}

  #### Returns string

### `Protected`\_logOperation

* \_logOperation(  
  Â Â Â Â action: string,  
  Â Â Â Â type: string,  
  Â Â Â Â documents: Document[],  
  Â Â Â Â context?: {  
  Â Â Â Â Â Â Â Â level?: string;  
  Â Â Â Â Â Â Â Â pack?: string;  
  Â Â Â Â Â Â Â Â parent?: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>;  
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
    Â Â Â Â level?: string;  
    Â Â Â Â pack?: string;  
    Â Â Â Â parent?: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>;  
    } = {}

    The context of the log request

    - ##### `Optional`level?: string

      The logging level
    - ##### `Optional`pack?: string

      A compendium pack within which the operation occurred
    - ##### `Optional`parent?: [Document](foundry.abstract.Document.html)<object, [DocumentConstructionContext](../types/foundry.abstract.types.DocumentConstructionContext.html)>

      A parent document

  #### Returns void