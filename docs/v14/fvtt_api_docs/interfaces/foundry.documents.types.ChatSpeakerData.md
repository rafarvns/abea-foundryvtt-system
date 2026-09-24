---
title: "ChatSpeakerData | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.documents.types.ChatSpeakerData.html"
category: "interfaces"
---

# Interface ChatSpeakerData

interface ChatSpeakerData {  
Â Â Â Â [actor](#actor)?: string;  
Â Â Â Â [alias](#alias)?: string;  
Â Â Â Â [scene](#scene)?: string;  
Â Â Â Â [token](#token)?: string;  
}

##### Index

### Properties

[actor?](#actor)
[alias?](#alias)
[scene?](#scene)
[token?](#token)

## Properties

### `Optional`actor

actor?: string

The \_id of the Actor who generated this message

### `Optional`alias

alias?: string

An overridden alias name used instead of the Actor or Token name

### `Optional`scene

scene?: string

The \_id of the Scene where this message was created

### `Optional`token

token?: string

The \_id of the Token who generated this message