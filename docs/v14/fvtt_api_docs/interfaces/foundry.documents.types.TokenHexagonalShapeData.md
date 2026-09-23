---
title: "TokenHexagonalShapeData | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.documents.types.TokenHexagonalShapeData.html"
category: "interfaces"
---

# Interface TokenHexagonalShapeData

The hexagonal shape of a Token.

interface TokenHexagonalShapeData {  
Â Â Â Â [anchor](#anchor): [Point](foundry.types.Point.md);  
Â Â Â Â [center](#center): [Point](foundry.types.Point.md);  
Â Â Â Â [offsets](#offsets): { even: [GridOffset2D](foundry.grid.types.GridOffset2D.md)[]; odd: [GridOffset2D](foundry.grid.types.GridOffset2D.md)[] };  
Â Â Â Â [points](#points): number[];  
}

##### Index

### Properties

[anchor](#anchor)
[center](#center)
[offsets](#offsets)
[points](#points)

## Properties

### anchor

anchor: [Point](foundry.types.Point.md)

The snapping anchor in normalized coordiantes, i.e.
the top-left grid hex center in the snapped position

### center

center: [Point](foundry.types.Point.md)

The center of the shape in normalized coordiantes

### offsets

offsets: { even: [GridOffset2D](foundry.grid.types.GridOffset2D.md)[]; odd: [GridOffset2D](foundry.grid.types.GridOffset2D.md)[] }

The occupied offsets in even/odd rows/columns

### points

points: number[]

The points in normalized coordinates