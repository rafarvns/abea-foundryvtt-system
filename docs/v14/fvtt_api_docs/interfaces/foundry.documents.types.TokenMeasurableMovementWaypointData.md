---
title: "TokenMeasurableMovementWaypointData | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.documents.types.TokenMeasurableMovementWaypointData.html"
category: "interfaces"
---

# Interface TokenMeasurableMovementWaypointData

interface TokenMeasurableMovementWaypointData {  
Â Â Â Â [cost](#cost)?: number | [TokenMovementCostFunction](../types/foundry.documents.types.TokenMovementCostFunction.md);  
}

##### Index

### Properties

[cost?](#cost)

## Properties

### `Optional`cost

cost?: number | [TokenMovementCostFunction](../types/foundry.documents.types.TokenMovementCostFunction.md)

A predetermined cost (nonnegative) or cost function
to be used instead of `options.cost`.