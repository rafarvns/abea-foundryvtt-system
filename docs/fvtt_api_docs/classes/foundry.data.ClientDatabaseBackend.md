---
title: "ClientDatabaseBackend | Foundry Virtual Tabletop - API Documentation - Version 13"
url: "https://foundryvtt.com/api/classes/foundry.data.ClientDatabaseBackend.html"
category: "classes"
---

* [Foundry Virtual Tabletop - API Documentation - Version 13](../modules.html)
* [foundry](../modules/foundry.html)
* [data](../modules/foundry.data.html)
* [ClientDatabaseBackend](foundry.data.ClientDatabaseBackend.html)

# Class ClientDatabaseBackend

The client-side database backend implementation which handles Document modification operations.

#### Hierarchy ([View Summary](../hierarchy.html#foundry.data.ClientDatabaseBackend))

* [abstract](../modules/foundry.abstract.html).[DatabaseBackend](foundry.abstract.DatabaseBackend.html)
  + ClientDatabaseBackend

##### Index

### Methods

[\_log](foundry.data.ClientDatabaseBackend.html#_log)
[create](foundry.data.ClientDatabaseBackend.html#create)
[delete](foundry.data.ClientDatabaseBackend.html#delete)
[get](foundry.data.ClientDatabaseBackend.html#get)
[getCompendiumScopes](foundry.data.ClientDatabaseBackend.html#getcompendiumscopes)
[getFlagScopes](foundry.data.ClientDatabaseBackend.html#getflagscopes)
[update](foundry.data.ClientDatabaseBackend.html#update)
[\_logError](foundry.data.ClientDatabaseBackend.html#_logerror)
[\_logOperation](foundry.data.ClientDatabaseBackend.html#_logoperation)

## Methods

### \_log

* \_log(level: any, message: any): void

  #### Parameters

  + level: any
  + message: any

  #### Returns void

  Overrides [DatabaseBackend](foundry.abstract.DatabaseBackend.html).[\_log](foundry.abstract.DatabaseBackend.html#_log)

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

  Inherited from [DatabaseBackend](foundry.abstract.DatabaseBackend.html).[create](foundry.abstract.DatabaseBackend.html#create)

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

  Inherited from [DatabaseBackend](foundry.abstract.DatabaseBackend.html).[delete](foundry.abstract.DatabaseBackend.html#delete)

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

  Inherited from [DatabaseBackend](foundry.abstract.DatabaseBackend.html).[get](foundry.abstract.DatabaseBackend.html#get)

### getCompendiumScopes

* getCompendiumScopes(): string[]

  Describe the scopes which are suitable as the namespace for a flag key

  #### Returns string[]

  Overrides [DatabaseBackend](foundry.abstract.DatabaseBackend.html).[getCompendiumScopes](foundry.abstract.DatabaseBackend.html#getcompendiumscopes)

### getFlagScopes

* getFlagScopes(): any[]

  Describe the scopes which are suitable as the namespace for a flag key

  #### Returns any[]

  Overrides [DatabaseBackend](foundry.abstract.DatabaseBackend.html).[getFlagScopes](foundry.abstract.DatabaseBackend.html#getflagscopes)

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

  Inherited from [DatabaseBackend](foundry.abstract.DatabaseBackend.html).[update](foundry.abstract.DatabaseBackend.html#update)

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

  Inherited from [DatabaseBackend](foundry.abstract.DatabaseBackend.html).[\_logError](foundry.abstract.DatabaseBackend.html#_logerror)

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

  Inherited from [DatabaseBackend](foundry.abstract.DatabaseBackend.html).[\_logOperation](foundry.abstract.DatabaseBackend.html#_logoperation)