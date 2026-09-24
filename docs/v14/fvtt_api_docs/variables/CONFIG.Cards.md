---
title: "Cards | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/variables/CONFIG.Cards.html"
category: "variables"
---

# Variable Cards`Const`

Cards: {  
Â Â Â Â collection: typeof [CardStacks](../classes/foundry.documents.collections.CardStacks.md);  
Â Â Â Â compendiumBanner: string;  
Â Â Â Â compendiumIndexFields: string[];  
Â Â Â Â dataModels: Record<string, typeof [TypeDataModel](../classes/foundry.abstract.TypeDataModel.md)>;  
Â Â Â Â documentClass: typeof [documents](../modules/foundry.documents.md).[Cards](../classes/foundry.documents.Cards.md);  
Â Â Â Â embedHandlers: [DocumentEmbedHandler](../types/CONFIG.DocumentEmbedHandler.md)[];  
Â Â Â Â presets: {  
Â Â Â Â Â Â Â Â pokerDark: { label: string; src: string; type: string };  
Â Â Â Â Â Â Â Â pokerLight: { label: string; src: string; type: string };  
Â Â Â Â };  
Â Â Â Â sidebarIcon: string;  
Â Â Â Â typeHints: Record<string, string>;  
Â Â Â Â typeIcons: Record<string, string>;  
Â Â Â Â typeLabels: Record<string, string>;  
} = ...

Configuration for the Cards primary Document type

#### Type Declaration

* ##### collection: typeof [CardStacks](../classes/foundry.documents.collections.CardStacks.md)
* ##### compendiumBanner: string
* ##### compendiumIndexFields: string[]
* ##### dataModels: Record<string, typeof [TypeDataModel](../classes/foundry.abstract.TypeDataModel.md)>
* ##### documentClass: typeof [documents](../modules/foundry.documents.md).[Cards](../classes/foundry.documents.Cards.md)
* ##### embedHandlers: [DocumentEmbedHandler](../types/CONFIG.DocumentEmbedHandler.md)[]
* ##### presets: { Â Â Â Â pokerDark: { label: string; src: string; type: string }; Â Â Â Â pokerLight: { label: string; src: string; type: string }; }
* ##### sidebarIcon: string
* ##### typeHints: Record<string, string>
* ##### typeIcons: Record<string, string>
* ##### typeLabels: Record<string, string>