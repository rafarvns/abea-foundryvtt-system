---
title: "_DocumentUUIDFieldOptions | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.data.types._DocumentUUIDFieldOptions.html"
category: "interfaces"
---

# Interface \_DocumentUUIDFieldOptions

interface \_DocumentUUIDFieldOptions {  
Â Â Â Â [embedded](#embedded)?: boolean;  
Â Â Â Â [relative](#relative)?: boolean;  
Â Â Â Â [type](#type)?: string;  
}

##### Index

### Properties

[embedded?](#embedded)
[relative?](#relative)
[type?](#type)

## Properties

### `Optional`embedded

embedded?: boolean

Does this field require (or prohibit) embedded documents?

### `Optional`relative

relative?: boolean

Does this field allow relative document UUIDs?

### `Optional`type

type?: string

A specific document type in [CONST.ALL\_DOCUMENT\_TYPES](../variables/CONST.ALL_DOCUMENT_TYPES.md) required by this field