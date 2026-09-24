---
title: "VFXTimelineSequenceEntry | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.VFXTimelineSequenceEntry.html"
category: "interfaces"
---

# Interface VFXTimelineSequenceEntry

interface VFXTimelineSequenceEntry {  
Â Â Â Â [component](#component): string;  
Â Â Â Â [position](#position)?: string | number;  
}

##### Index

### Properties

[component](#component)
[position?](#position)

## Properties

### component

component: string

The labeled component in sequence.

### `Optional`position

position?: string | number

The animejs offset position. Can be a number for absolute timeline values,
a label (including optional prefixing to reference other effects),
or a relative value (e.g. "+1000" for 1s after the previous effect).
It can also be a combination of label and offset (e.g.
"effect.impact-=1000" for 1s before the `effect.impact` label)