---
title: "_RollTableHTMLEmbedConfig | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.types._RollTableHTMLEmbedConfig.html"
category: "interfaces"
---

# Interface \_RollTableHTMLEmbedConfig

interface \_RollTableHTMLEmbedConfig {  
Â Â Â Â [description](#description)?: boolean;  
Â Â Â Â [rangeLabel](#rangelabel)?: string;  
Â Â Â Â [resultLabel](#resultlabel)?: string;  
Â Â Â Â [rollable](#rollable)?: boolean;  
}

##### Index

### Properties

[description?](#description)
[rangeLabel?](#rangelabel)
[resultLabel?](#resultlabel)
[rollable?](#rollable)

## Properties

### `Optional`description

description?: boolean

Render the table's description above the table of results. This option
takes precedence over the caption option if both are provided.

### `Optional`rangeLabel

rangeLabel?: string

The label to use for the range column. If rollable is true, this option is
ignored.

### `Optional`resultLabel

resultLabel?: string

The label to use for the result column.

### `Optional`rollable

rollable?: boolean

Adds a button allowing the table to be rolled directly from its embedded
context.