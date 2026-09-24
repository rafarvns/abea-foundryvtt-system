---
title: "PingData | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.canvas.interaction.types.PingData.html"
category: "interfaces"
---

# Interface PingData

interface PingData {  
Â Â Â Â [pull](#pull)?: boolean;  
Â Â Â Â [scene](#scene): string;  
Â Â Â Â [style](#style): string;  
Â Â Â Â [zoom](#zoom): number;  
}

##### Index

### Properties

[pull?](#pull)
[scene](#scene)
[style](#style)
[zoom](#zoom)

## Properties

### `Optional`pull

pull?: boolean

Pulls all connected clients' views to the pinged coordinates.

### scene

scene: string

The ID of the scene that was pinged.

### style

style: string

The ping style, see CONFIG.Canvas.pings.

### zoom

zoom: number

The zoom level at which the ping was made.