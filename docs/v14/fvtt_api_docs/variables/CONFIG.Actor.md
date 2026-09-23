---
title: "Actor | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/variables/CONFIG.Actor.html"
category: "variables"
---

# Variable Actor`Const`

Actor: {  
Â Â Â Â collection: typeof [Actors](../classes/foundry.documents.collections.Actors.md);  
Â Â Â Â compendiumBanner: string;  
Â Â Â Â compendiumIndexFields: string[];  
Â Â Â Â dataModels: Record<string, typeof [TypeDataModel](../classes/foundry.abstract.TypeDataModel.md)>;  
Â Â Â Â documentClass: typeof [documents](../modules/foundry.documents.md).[Actor](../classes/foundry.documents.Actor.md);  
Â Â Â Â embedHandlers: [DocumentEmbedHandler](../types/CONFIG.DocumentEmbedHandler.md)[];  
Â Â Â Â sidebarIcon: string;  
Â Â Â Â trackableAttributes: Record<string, [ActorTrackableAttributes](../interfaces/foundry.types.ActorTrackableAttributes.md)>;  
Â Â Â Â typeHints: Record<string, string>;  
Â Â Â Â typeIcons: Record<string, string>;  
Â Â Â Â typeLabels: Record<string, string>;  
} = ...

Configuration for the Actor document

#### Type Declaration

* ##### collection: typeof [Actors](../classes/foundry.documents.collections.Actors.md)
* ##### compendiumBanner: string
* ##### compendiumIndexFields: string[]
* ##### dataModels: Record<string, typeof [TypeDataModel](../classes/foundry.abstract.TypeDataModel.md)>
* ##### documentClass: typeof [documents](../modules/foundry.documents.md).[Actor](../classes/foundry.documents.Actor.md)
* ##### embedHandlers: [DocumentEmbedHandler](../types/CONFIG.DocumentEmbedHandler.md)[]
* ##### sidebarIcon: string
* ##### trackableAttributes: Record<string, [ActorTrackableAttributes](../interfaces/foundry.types.ActorTrackableAttributes.md)>
* ##### typeHints: Record<string, string>
* ##### typeIcons: Record<string, string>
* ##### typeLabels: Record<string, string>