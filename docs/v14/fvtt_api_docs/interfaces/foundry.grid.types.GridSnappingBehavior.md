---
title: "GridSnappingBehavior | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.grid.types.GridSnappingBehavior.html"
category: "interfaces"
---

# Interface GridSnappingBehavior

A snapping behavior is defined by the snapping mode at the given resolution of the grid.

interface GridSnappingBehavior {  
Â Â Â Â [mode](#mode): number;  
Â Â Â Â [resolution](#resolution)?: number;  
}

##### Index

### Properties

[mode](#mode)
[resolution?](#resolution)

## Properties

### mode

mode: number

The snapping mode (a union of [CONST.GRID\_SNAPPING\_MODES](../variables/CONST.GRID_SNAPPING_MODES.md)).

### `Optional`resolution

resolution?: number

The resolution (a positive integer). Default: `1`.