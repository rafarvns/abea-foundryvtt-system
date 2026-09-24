---
title: "ChatBubbleOptions | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.canvas.animation.types.ChatBubbleOptions.html"
category: "interfaces"
---

# Interface ChatBubbleOptions

interface ChatBubbleOptions {  
Â Â Â Â [cssClasses](#cssclasses)?: string[];  
Â Â Â Â [pan](#pan)?: boolean;  
Â Â Â Â [requireVisible](#requirevisible)?: boolean;  
}

##### Index

### Properties

[cssClasses?](#cssclasses)
[pan?](#pan)
[requireVisible?](#requirevisible)

## Properties

### `Optional`cssClasses

cssClasses?: string[]

An optional array of CSS classes to apply to the resulting bubble

### `Optional`pan

pan?: boolean

Pan to the token speaker for this bubble, if allowed by the client

### `Optional`requireVisible

requireVisible?: boolean

Require that the token be visible in order for the bubble to be rendered