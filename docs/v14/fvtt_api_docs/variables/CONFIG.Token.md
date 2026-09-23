---
title: "Token | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/variables/CONFIG.Token.html"
category: "variables"
---

# Variable Token`Const`

Token: {  
Â Â Â Â adjectivesPrefix: string;  
Â Â Â Â barConfig: {  
Â Â Â Â Â Â Â Â bar1: { colors: { empty: [Color](../classes/foundry.utils.Color.md); full: [Color](../classes/foundry.utils.Color.md) } };  
Â Â Â Â Â Â Â Â bar2: { colors: { empty: [Color](../classes/foundry.utils.Color.md); full: [Color](../classes/foundry.utils.Color.md) } };  
Â Â Â Â };  
Â Â Â Â documentClass: typeof [TokenDocument](../classes/foundry.documents.TokenDocument.md);  
Â Â Â Â hudClass: typeof [TokenHUD](../classes/foundry.applications.hud.TokenHUD.md);  
Â Â Â Â movement: {  
Â Â Â Â Â Â Â Â actions: { [action: string]: [TokenMovementActionConfigDescriptor](../interfaces/foundry.types.TokenMovementActionConfigDescriptor.md) };  
Â Â Â Â Â Â Â Â costAggregator: [TokenMovementCostAggregator](../types/foundry.documents.types.TokenMovementCostAggregator.md);  
Â Â Â Â Â Â Â Â defaultAction: string;  
Â Â Â Â Â Â Â Â defaultSpeed: number;  
Â Â Â Â Â Â Â Â TerrainData: typeof [BaseTerrainData](../classes/foundry.data.BaseTerrainData.md);  
Â Â Â Â };  
Â Â Â Â objectClass: typeof [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Token](../classes/foundry.canvas.placeables.Token.md);  
Â Â Â Â prototypeSheetClass: typeof [PrototypeTokenConfig](../classes/foundry.applications.sheets.PrototypeTokenConfig.md);  
Â Â Â Â ring: [TokenRingConfig](../classes/foundry.canvas.placeables.tokens.TokenRingConfig.md);  
Â Â Â Â rulerClass: typeof [TokenRuler](../classes/foundry.canvas.placeables.tokens.TokenRuler.md);  
Â Â Â Â sidebar: { applicationClass: typeof [TokenTab](../classes/foundry.applications.sidebar.tabs.TokenTab.md); order: number };  
} = ...

Configuration for the Token embedded document type and its representation on the game Canvas

#### Type Declaration

* ##### adjectivesPrefix: string
* ##### barConfig: { Â Â Â Â bar1: { colors: { empty: [Color](../classes/foundry.utils.Color.md); full: [Color](../classes/foundry.utils.Color.md) } }; Â Â Â Â bar2: { colors: { empty: [Color](../classes/foundry.utils.Color.md); full: [Color](../classes/foundry.utils.Color.md) } }; }

  Configuration for token resource bars.
* ##### documentClass: typeof [TokenDocument](../classes/foundry.documents.TokenDocument.md)
* ##### hudClass: typeof [TokenHUD](../classes/foundry.applications.hud.TokenHUD.md)
* ##### movement: { Â Â Â Â actions: { [action: string]: [TokenMovementActionConfigDescriptor](../interfaces/foundry.types.TokenMovementActionConfigDescriptor.md) }; Â Â Â Â costAggregator: [TokenMovementCostAggregator](../types/foundry.documents.types.TokenMovementCostAggregator.md); Â Â Â Â defaultAction: string; Â Â Â Â defaultSpeed: number; Â Â Â Â TerrainData: typeof [BaseTerrainData](../classes/foundry.data.BaseTerrainData.md); }

  + ##### actions: { [action: string]: [TokenMovementActionConfigDescriptor](../interfaces/foundry.types.TokenMovementActionConfigDescriptor.md) }
  + ##### costAggregator: [TokenMovementCostAggregator](../types/foundry.documents.types.TokenMovementCostAggregator.md)

    The movement cost aggregator.
  + ##### defaultAction: string
  + ##### defaultSpeed: number

    The default movement animation speed in grid spaces per second.
  + ##### TerrainData: typeof [BaseTerrainData](../classes/foundry.data.BaseTerrainData.md)
* ##### objectClass: typeof [canvas](../modules/foundry.canvas.md).[placeables](../modules/foundry.canvas.placeables.md).[Token](../classes/foundry.canvas.placeables.Token.md)
* ##### prototypeSheetClass: typeof [PrototypeTokenConfig](../classes/foundry.applications.sheets.PrototypeTokenConfig.md)
* ##### ring: [TokenRingConfig](../classes/foundry.canvas.placeables.tokens.TokenRingConfig.md)
* ##### rulerClass: typeof [TokenRuler](../classes/foundry.canvas.placeables.tokens.TokenRuler.md)
* ##### sidebar: { applicationClass: typeof [TokenTab](../classes/foundry.applications.sidebar.tabs.TokenTab.md); order: number }