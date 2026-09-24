---
title: "TokenDetectionMode | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.documents.types.TokenDetectionMode.html"
category: "interfaces"
---

# Interface TokenDetectionMode<Source>

interface TokenDetectionMode<[Source](#source) extends boolean = false> {  
Â Â Â Â [enabled](#enabled): boolean;  
Â Â Â Â [range](#range): [Source](#source) extends true ? number | null : number;  
}

#### Type Parameters

* Source extends boolean = false

##### Index

### Properties

[enabled](#enabled)
[range](#range)

## Properties

### enabled

enabled: boolean

Whether or not this detection mode is presently enabled.

### range

range: [Source](#source) extends true ? number | null : number

The maximum range in distance units at which this mode
can detect targets. If null, which is only possible for modes in the document source, the detection range is
unlimited. On document preparation null is converted to Infinity.