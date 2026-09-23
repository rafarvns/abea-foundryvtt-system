---
title: "DocumentSocketRequest | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.abstract.types.DocumentSocketRequest.html"
category: "interfaces"
---

# Interface DocumentSocketRequest

interface DocumentSocketRequest {  
Â Â Â Â [action](#action): [DatabaseAction](../types/foundry.abstract.types.DatabaseAction.md);  
Â Â Â Â [broadcast](#broadcast): boolean;  
Â Â Â Â [operation](#operation): [DatabaseOperation](../types/foundry.abstract.types.DatabaseOperation.md);  
Â Â Â Â [type](#type): string;  
Â Â Â Â [userId](#userid): string;  
}

##### Index

### Properties

[action](#action)
[broadcast](#broadcast)
[operation](#operation)
[type](#type)
[userId](#userid)

## Properties

### action

action: [DatabaseAction](../types/foundry.abstract.types.DatabaseAction.md)

The action of the request

### broadcast

broadcast: boolean

Should the response be broadcast to other connected clients?

### operation

operation: [DatabaseOperation](../types/foundry.abstract.types.DatabaseOperation.md)

Operation parameters for the request

### type

type: string

The type of Document being transacted

### userId

userId: string

The id of the requesting User