---
title: "CHAT_MESSAGE_STYLES | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/variables/CONST.CHAT_MESSAGE_STYLES.html"
category: "variables"
---

# Variable CHAT\_MESSAGE\_STYLES`Const`

CHAT\_MESSAGE\_STYLES: { EMOTE: 3; IC: 2; OOC: 1; OTHER: 0 } = ...

Valid Chat Message styles which affect how the message is presented in the chat log.

#### Type Declaration

* ##### `Readonly`EMOTE: 3

  The message is an emote performed by the selected character.
  Entering "/emote waves his hand." while controlling a character named Simon will send the message, "Simon waves his
  hand."
* ##### `Readonly`IC: 2

  The message is spoken by an associated character.
* ##### `Readonly`OOC: 1

  The message is spoken out of character (OOC).
  OOC messages will be outlined by the player's color to make them more easily recognizable.
* ##### `Readonly`OTHER: 0

  An uncategorized chat message