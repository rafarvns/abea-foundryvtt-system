---
title: "TokenHexagonalOffsetsData | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.documents.types.TokenHexagonalOffsetsData.html"
category: "interfaces"
---

# Interface TokenHexagonalOffsetsData

The hexagonal offsets of a Token.

interface TokenHexagonalOffsetsData {  
Â Â Â Â [anchor](#anchor): [Point](foundry.types.Point.md);  
Â Â Â Â [even](#even): [GridOffset2D](foundry.grid.types.GridOffset2D.md)[];  
Â Â Â Â [odd](#odd): [GridOffset2D](foundry.grid.types.GridOffset2D.md)[];  
}

##### Index

### Properties

[anchor](#anchor)
[even](#even)
[odd](#odd)

## Properties

### anchor

anchor: [Point](foundry.types.Point.md)

The anchor in normalized coordiantes

### even

even: [GridOffset2D](foundry.grid.types.GridOffset2D.md)[]

The occupied offsets in an even grid in the 0th row/column

### odd

odd: [GridOffset2D](foundry.grid.types.GridOffset2D.md)[]

The occupied offsets in an odd grid in the 0th row/column