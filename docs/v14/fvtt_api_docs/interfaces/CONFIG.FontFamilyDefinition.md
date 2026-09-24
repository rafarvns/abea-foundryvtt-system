---
title: "FontFamilyDefinition | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/CONFIG.FontFamilyDefinition.html"
category: "interfaces"
---

# Interface FontFamilyDefinition

interface FontFamilyDefinition {  
Â Â Â Â [editor](#editor): boolean;  
Â Â Â Â [fonts](#fonts): [FontDefinition](../types/CONFIG.FontDefinition.md)[];  
}

##### Index

### Properties

[editor](#editor)
[fonts](#fonts)

## Properties

### editor

editor: boolean

Whether the font is available in the rich text editor. This will also enable it
for notes and drawings.

### fonts

fonts: [FontDefinition](../types/CONFIG.FontDefinition.md)[]

Individual font face definitions for this font family. If this is empty, the
font family may only be loaded from the client's OS-installed fonts.