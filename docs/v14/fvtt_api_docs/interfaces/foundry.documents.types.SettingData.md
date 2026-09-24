---
title: "SettingData | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.documents.types.SettingData.html"
category: "interfaces"
---

# Interface SettingData

interface SettingData {  
Â Â Â Â [\_id](#_id): string | null;  
Â Â Â Â [\_stats](#_stats): [DocumentStats](foundry.data.types.DocumentStats.md);  
Â Â Â Â [key](#key): string;  
Â Â Â Â [user](#user)?: string;  
Â Â Â Â [value](#value): any;  
}

##### Index

### Properties

[\_id](#_id)
[\_stats](#_stats)
[key](#key)
[user?](#user)
[value](#value)

## Properties

### \_id

\_id: string | null

The \_id which uniquely identifies this Setting document

### \_stats

\_stats: [DocumentStats](foundry.data.types.DocumentStats.md)

An object of creation and access information

### key

key: string

The setting key, a composite of {scope}.{name}

### `Optional`user

user?: string

The ID of the user this Setting belongs to, if user-scoped.

### value

value: any

The setting value, which is serialized to JSON