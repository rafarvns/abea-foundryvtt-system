---
title: "DocumentTagsInputConfig | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.DocumentTagsInputConfig.html"
category: "interfaces"
---

# Interface DocumentTagsInputConfig

interface DocumentTagsInputConfig {  
Â Â Â Â [max](#max)?: number;  
Â Â Â Â [single](#single)?: boolean;  
Â Â Â Â [type](#type)?: string;  
}

##### Index

### Properties

[max?](#max)
[single?](#single)
[type?](#type)

## Properties

### `Optional`max

max?: number

Only allow attaching a maximum number of documents

### `Optional`single

single?: boolean

Only allow referencing a single document. In this case the submitted form value will
be a single UUID string rather than an array

### `Optional`type

type?: string

A specific document type in CONST.ALL\_DOCUMENT\_TYPES