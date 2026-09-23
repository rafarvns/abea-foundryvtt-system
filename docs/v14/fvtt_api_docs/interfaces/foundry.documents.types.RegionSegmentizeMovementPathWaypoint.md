---
title: "RegionSegmentizeMovementPathWaypoint | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.documents.types.RegionSegmentizeMovementPathWaypoint.html"
category: "interfaces"
---

# Interface RegionSegmentizeMovementPathWaypoint

interface RegionSegmentizeMovementPathWaypoint {  
Â Â Â Â [elevation](#elevation): number;  
Â Â Â Â [teleport](#teleport)?: boolean;  
Â Â Â Â [x](#x): number;  
Â Â Â Â [y](#y): number;  
}

##### Index

### Properties

[elevation](#elevation)
[teleport?](#teleport)
[x](#x)
[y](#y)

## Properties

### elevation

elevation: number

The elevation in grid units.

### `Optional`teleport

teleport?: boolean

Teleport from the previous to this waypoint? Default: `false`.

### x

x: number

The x-coordinate in pixels (integer).

### y

y: number

The y-coordinate in pixels (integer).