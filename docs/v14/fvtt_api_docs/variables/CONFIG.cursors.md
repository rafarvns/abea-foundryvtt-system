---
title: "cursors | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/variables/CONFIG.cursors.html"
category: "variables"
---

# Variable cursors`Const`

cursors: {  
Â Â Â Â default: string | [CursorDescriptor](../interfaces/CONFIG.CursorDescriptor.md);  
Â Â Â Â "default-down": string | [CursorDescriptor](../interfaces/CONFIG.CursorDescriptor.md);  
Â Â Â Â grab: string | [CursorDescriptor](../interfaces/CONFIG.CursorDescriptor.md);  
Â Â Â Â "grab-down": string | [CursorDescriptor](../interfaces/CONFIG.CursorDescriptor.md);  
Â Â Â Â pointer: string | [CursorDescriptor](../interfaces/CONFIG.CursorDescriptor.md);  
Â Â Â Â "pointer-down": string | [CursorDescriptor](../interfaces/CONFIG.CursorDescriptor.md);  
Â Â Â Â text: string | [CursorDescriptor](../interfaces/CONFIG.CursorDescriptor.md);  
Â Â Â Â "text-down": string | [CursorDescriptor](../interfaces/CONFIG.CursorDescriptor.md);  
} = ...

Configure custom cursor images to use when interacting with the application.

#### Type Declaration

* ##### default: string | [CursorDescriptor](../interfaces/CONFIG.CursorDescriptor.md)
* ##### default-down: string | [CursorDescriptor](../interfaces/CONFIG.CursorDescriptor.md)
* ##### grab: string | [CursorDescriptor](../interfaces/CONFIG.CursorDescriptor.md)
* ##### grab-down: string | [CursorDescriptor](../interfaces/CONFIG.CursorDescriptor.md)
* ##### pointer: string | [CursorDescriptor](../interfaces/CONFIG.CursorDescriptor.md)
* ##### pointer-down: string | [CursorDescriptor](../interfaces/CONFIG.CursorDescriptor.md)
* ##### text: string | [CursorDescriptor](../interfaces/CONFIG.CursorDescriptor.md)
* ##### text-down: string | [CursorDescriptor](../interfaces/CONFIG.CursorDescriptor.md)

#### Example: Configuring a cursor with a hotspot in the default top-left.

```
Object.assign(CONFIG.cursors, {  
  default: "icons/cursors/default.avif",  
  "default-down": "icons/cursors/default-down.avif"  
});
Copy
```

#### Example: Configuring a cursor with a hotspot in the center.

```
Object.assign(CONFIG.cursors, {  
  default: { url: "icons/cursors/target.avif", x: 16, y: 16 },  
  "default-down": { url: "icons/cursors/target-down.avif", x: 16, y: 16 }  
});
Copy
```