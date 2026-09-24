---
title: "ChatMessage | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/variables/CONFIG.ChatMessage.html"
category: "variables"
---

# Variable ChatMessage`Const`

ChatMessage: {  
Â Â Â Â batchSize: number;  
Â Â Â Â collection: typeof [ChatMessages](../classes/foundry.documents.collections.ChatMessages.md);  
Â Â Â Â dataModels: Record<string, typeof [TypeDataModel](../classes/foundry.abstract.TypeDataModel.md)>;  
Â Â Â Â documentClass: typeof [documents](../modules/foundry.documents.md).[ChatMessage](../classes/foundry.documents.ChatMessage.md);  
Â Â Â Â embedHandlers: [DocumentEmbedHandler](../types/CONFIG.DocumentEmbedHandler.md)[];  
Â Â Â Â modes: Record<  
Â Â Â Â Â Â Â Â string,  
Â Â Â Â Â Â Â Â { handler: (data: ChatMessageData) => void; icon: string; label: string },  
Â Â Â Â >;  
Â Â Â Â popoutClass: typeof [ChatPopout](../classes/foundry.applications.sidebar.apps.ChatPopout.md);  
Â Â Â Â sidebarIcon: string;  
Â Â Â Â template: string;  
Â Â Â Â typeHints: Record<string, string>;  
Â Â Â Â typeIcons: Record<string, string>;  
Â Â Â Â typeLabels: Record<string, string>;  
} = ...

Configuration for the ChatMessage document

#### Type Declaration

* ##### batchSize: number
* ##### collection: typeof [ChatMessages](../classes/foundry.documents.collections.ChatMessages.md)
* ##### dataModels: Record<string, typeof [TypeDataModel](../classes/foundry.abstract.TypeDataModel.md)>
* ##### documentClass: typeof [documents](../modules/foundry.documents.md).[ChatMessage](../classes/foundry.documents.ChatMessage.md)
* ##### embedHandlers: [DocumentEmbedHandler](../types/CONFIG.DocumentEmbedHandler.md)[]
* ##### modes: Record< Â Â Â Â string, Â Â Â Â { handler: (data: ChatMessageData) => void; icon: string; label: string }, >

  Supported chat message visibility modes.
* ##### popoutClass: typeof [ChatPopout](../classes/foundry.applications.sidebar.apps.ChatPopout.md)
* ##### sidebarIcon: string
* ##### template: string
* ##### typeHints: Record<string, string>
* ##### typeIcons: Record<string, string>
* ##### typeLabels: Record<string, string>