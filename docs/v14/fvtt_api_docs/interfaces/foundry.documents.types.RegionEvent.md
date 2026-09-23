---
title: "RegionEvent | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.documents.types.RegionEvent.html"
category: "interfaces"
---

# Interface RegionEvent<Data>

interface RegionEvent<[Data](#data) = object> {  
Â Â Â Â [data](#data-1): object;  
Â Â Â Â [name](#name): string;  
Â Â Â Â [region](#region): [RegionDocument](../classes/foundry.documents.RegionDocument.md);  
Â Â Â Â [user](#user): [documents](../modules/foundry.documents.md).[User](../classes/foundry.documents.User.md);  
}

#### Type Parameters

* Data = object

##### Index

### Properties

[data](#data-1)
[name](#name)
[region](#region)
[user](#user)

## Properties

### data

data: object

The data of the event

### name

name: string

The name of the event

### region

region: [RegionDocument](../classes/foundry.documents.RegionDocument.md)

The Region the event was triggered on

### user

user: [documents](../modules/foundry.documents.md).[User](../classes/foundry.documents.User.md)

The User that triggered the event