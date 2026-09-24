---
title: "TokenRegionMovementSegment | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.documents.types.TokenRegionMovementSegment.html"
category: "interfaces"
---

# Interface TokenRegionMovementSegment

interface TokenRegionMovementSegment {  
Â Â Â Â [action](#action): string;  
Â Â Â Â [from](#from): [TokenPosition](foundry.documents.types.TokenPosition.md);  
Â Â Â Â [snapped](#snapped): boolean;  
Â Â Â Â [terrain](#terrain): [DataModel](../classes/foundry.abstract.DataModel.md)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md)> | null;  
Â Â Â Â [to](#to): [TokenPosition](foundry.documents.types.TokenPosition.md);  
Â Â Â Â [type](#type): [RegionMovementSegmentType](../types/CONST.RegionMovementSegmentType.md);  
}

##### Index

### Properties

[action](#action)
[from](#from)
[snapped](#snapped)
[terrain](#terrain)
[to](#to)
[type](#type)

## Properties

### action

action: string

The movement action between the waypoints.

### from

from: [TokenPosition](foundry.documents.types.TokenPosition.md)

The waypoint that this segment starts from.

### snapped

snapped: boolean

Is the destination snapped to the grid?

### terrain

terrain: [DataModel](../classes/foundry.abstract.DataModel.md)<object, [DataModelConstructionContext](../types/foundry.abstract.types.DataModelConstructionContext.md)> | null

The terrain data of this segment.

### to

to: [TokenPosition](foundry.documents.types.TokenPosition.md)

The waypoint that this segment goes to.

### type

type: [RegionMovementSegmentType](../types/CONST.RegionMovementSegmentType.md)

The type of this segment (see [CONST.REGION\_MOVEMENT\_SEGMENTS](../variables/CONST.REGION_MOVEMENT_SEGMENTS.md)).