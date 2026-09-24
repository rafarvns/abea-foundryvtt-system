---
title: "CursorDescriptor | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/CONFIG.CursorDescriptor.html"
category: "interfaces"
---

# Interface CursorDescriptor

interface CursorDescriptor {  
Â Â Â Â [url](#url): string;  
Â Â Â Â [x](#x)?: number;  
Â Â Â Â [y](#y)?: number;  
}

##### Index

### Properties

[url](#url)
[x?](#x)
[y?](#y)

## Properties

### url

url: string

The URL of the cursor image. Must be no larger than 128x128. 32x32 is recommended.

### `Optional`x

x?: number

The X co-ordinate of the cursor hotspot.

### `Optional`y

y?: number

The Y co-ordinate of the cursor hotspot.