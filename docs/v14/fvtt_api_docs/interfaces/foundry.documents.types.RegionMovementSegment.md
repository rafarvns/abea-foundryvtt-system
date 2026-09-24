---
title: "RegionMovementSegment | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.documents.types.RegionMovementSegment.html"
category: "interfaces"
---

# Interface RegionMovementSegment

interface RegionMovementSegment {  
Â Â Â Â [from](#from): [ElevatedPoint](foundry.types.ElevatedPoint.md);  
Â Â Â Â [teleport](#teleport): boolean;  
Â Â Â Â [to](#to): [ElevatedPoint](foundry.types.ElevatedPoint.md);  
Â Â Â Â [type](#type): [RegionMovementSegmentType](../types/CONST.RegionMovementSegmentType.md);  
}

##### Index

### Properties

[from](#from)
[teleport](#teleport)
[to](#to)
[type](#type)

## Properties

### from

from: [ElevatedPoint](foundry.types.ElevatedPoint.md)

The waypoint that this segment starts from.

### teleport

teleport: boolean

Teleport between the waypoints?

### to

to: [ElevatedPoint](foundry.types.ElevatedPoint.md)

The waypoint that this segment goes to.

### type

type: [RegionMovementSegmentType](../types/CONST.RegionMovementSegmentType.md)

The type of this segment (see [CONST.REGION\_MOVEMENT\_SEGMENTS](../variables/CONST.REGION_MOVEMENT_SEGMENTS.md)).