---
title: "ChatMessageData | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.documents.types.ChatMessageData.html"
category: "interfaces"
---

# Interface ChatMessageData

interface ChatMessageData {  
Â Â Â Â [\_id](#_id): string | null;  
Â Â Â Â [\_stats](#_stats): [DocumentStats](foundry.data.types.DocumentStats.md);  
Â Â Â Â [blind](#blind)?: boolean;  
Â Â Â Â [content](#content): string;  
Â Â Â Â [emote](#emote)?: boolean;  
Â Â Â Â [flags](#flags): [DocumentFlags](../types/foundry.data.types.DocumentFlags.md);  
Â Â Â Â [flavor](#flavor)?: string;  
Â Â Â Â [rolls](#rolls)?: string[];  
Â Â Â Â [sound](#sound)?: string;  
Â Â Â Â [speaker](#speaker): [ChatSpeakerData](foundry.documents.types.ChatSpeakerData.md);  
Â Â Â Â [style](#style)?: [ChatMessageStyle](../types/CONST.ChatMessageStyle.md);  
Â Â Â Â [system](#system): object;  
Â Â Â Â [timestamp](#timestamp): number | null;  
Â Â Â Â [title](#title)?: string;  
Â Â Â Â [type](#type): string;  
Â Â Â Â [user](#user): string;  
Â Â Â Â [whisper](#whisper): string[];  
}

##### Index

### Properties

[\_id](#_id)
[\_stats](#_stats)
[blind?](#blind)
[content](#content)
[emote?](#emote)
[flags](#flags)
[flavor?](#flavor)
[rolls?](#rolls)
[sound?](#sound)
[speaker](#speaker)
[style?](#style)
[system](#system)
[timestamp](#timestamp)
[title?](#title)
[type](#type)
[user](#user)
[whisper](#whisper)

## Properties

### \_id

\_id: string | null

The \_id which uniquely identifies this ChatMessage document

### \_stats

\_stats: [DocumentStats](foundry.data.types.DocumentStats.md)

An object of creation and access information

### `Optional`blind

blind?: boolean

Is this message sent blindly where the creating User cannot see it?

### content

content: string

The HTML content of this chat message

### `Optional`emote

emote?: boolean

Is this message styled as an emote?

### flags

flags: [DocumentFlags](../types/foundry.data.types.DocumentFlags.md)

An object of optional key/value flags

### `Optional`flavor

flavor?: string

An optional flavor text message which summarizes this message

### `Optional`rolls

rolls?: string[]

Serialized content of any Roll instances attached to the ChatMessage

### `Optional`sound

sound?: string

The URL of an audio file which plays when this message is received

### speaker

speaker: [ChatSpeakerData](foundry.documents.types.ChatSpeakerData.md)

A ChatSpeakerData object which describes the origin of the ChatMessage

### `Optional`style

style?: [ChatMessageStyle](../types/CONST.ChatMessageStyle.md)

The message style from [CONST.CHAT\_MESSAGE\_STYLES](../variables/CONST.CHAT_MESSAGE_STYLES.md)

### system

system: object

Data for a ChatMessage subtype, defined by a System or Module

### timestamp

timestamp: number | null

The timestamp at which point this message was generated

### `Optional`title

title?: string

An optional title used if the message is popped-out

### type

type: string

The type of this chat message, in BaseChatMessage.metadata.types

### user

user: string

The \_id of the User document who generated this message

### whisper

whisper: string[]

An array of User \_id values to whom this message is privately whispered