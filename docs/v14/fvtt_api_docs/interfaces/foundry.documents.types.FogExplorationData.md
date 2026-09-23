---
title: "FogExplorationData | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.documents.types.FogExplorationData.html"
category: "interfaces"
---

# Interface FogExplorationData

interface FogExplorationData {  
Â Â Â Â [\_id](#_id): string | null;  
Â Â Â Â [explored](#explored): string;  
Â Â Â Â [flags](#flags): [DocumentFlags](../types/foundry.data.types.DocumentFlags.md);  
Â Â Â Â [positions](#positions)?: object;  
Â Â Â Â [scene](#scene): string;  
Â Â Â Â [timestamp](#timestamp): number;  
Â Â Â Â [user](#user): string;  
}

##### Index

### Properties

[\_id](#_id)
[explored](#explored)
[flags](#flags)
[positions?](#positions)
[scene](#scene)
[timestamp](#timestamp)
[user](#user)

## Properties

### \_id

\_id: string | null

The \_id which uniquely identifies this FogExploration document

### explored

explored: string

The base64 image/jpeg of the explored fog polygon

### flags

flags: [DocumentFlags](../types/foundry.data.types.DocumentFlags.md)

An object of optional key/value flags

### `Optional`positions

positions?: object

Optional custom exploration data

### scene

scene: string

The \_id of the Scene document to which this fog applies

### timestamp

timestamp: number

The timestamp at which this fog exploration was last updated

### user

user: string

The \_id of the User document to which this fog applies