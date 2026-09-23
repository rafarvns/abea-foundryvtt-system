---
title: "chatMessage | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/hookEvents.chatMessage.html"
category: "functions"
---

# Function chatMessage

* chatMessage(  
  Â Â Â Â chatLog: [ChatLog](../classes/foundry.applications.sidebar.tabs.ChatLog.md),  
  Â Â Â Â message: string,  
  Â Â Â Â chatData: { speaker: ChatSpeakerData; user: string },  
  ): void

  A hook event that fires when a user sends a message through the ChatLog.

  #### Parameters

  + chatLog: [ChatLog](../classes/foundry.applications.sidebar.tabs.ChatLog.md)

    The ChatLog instance
  + message: string

    The trimmed message content
  + chatData: { speaker: ChatSpeakerData; user: string }

    Some basic chat data

    - ##### speaker: ChatSpeakerData

      The identified speaker data, see
      [foundry.documents.ChatMessage.getSpeaker](../classes/foundry.documents.ChatMessage.md#getspeaker)
    - ##### user: string

      The id of the User sending the message

  #### Returns void