---
title: "DocumentHTMLEmbedConfig | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.DocumentHTMLEmbedConfig.html"
category: "interfaces"
---

# Interface DocumentHTMLEmbedConfig

interface DocumentHTMLEmbedConfig {  
Â Â Â Â [caption](#caption)?: boolean;  
Â Â Â Â [captionPosition](#captionposition)?: string;  
Â Â Â Â [cite](#cite)?: boolean;  
Â Â Â Â [classes](#classes)?: string;  
Â Â Â Â [inline](#inline)?: boolean;  
Â Â Â Â [label](#label)?: string;  
Â Â Â Â [values](#values): string[];  
}

##### Index

### Properties

[caption?](#caption)
[captionPosition?](#captionposition)
[cite?](#cite)
[classes?](#classes)
[inline?](#inline)
[label?](#label)
[values](#values)

## Properties

### `Optional`caption

caption?: boolean

Whether to include a caption. The caption will depend on the Document being
embedded, but if an explicit label is provided, that will always be used as the
caption. This option is ignored if the Document is inlined.

### `Optional`captionPosition

captionPosition?: string

Controls whether the caption is rendered above or below the embedded
content.

### `Optional`cite

cite?: boolean

Whether to include a content link to the original Document as a citation. This
options is ignored if the Document is inlined.

### `Optional`classes

classes?: string

Classes to attach to the outermost element.

### `Optional`inline

inline?: boolean

By default Documents are embedded inside a figure element. If this option is
passed, the embed content will instead be included as part of the rest of the
content flow, but still wrapped in a section tag for styling purposes.

### `Optional`label

label?: string

The label.

### values

values: string[]

Any strings that did not have a key name associated with them.