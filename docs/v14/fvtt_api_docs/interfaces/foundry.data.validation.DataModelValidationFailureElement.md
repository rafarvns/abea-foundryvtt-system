---
title: "DataModelValidationFailureElement | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.data.validation.DataModelValidationFailureElement.html"
category: "interfaces"
---

# Interface DataModelValidationFailureElement

interface DataModelValidationFailureElement {  
Â Â Â Â [failure](#failure): [DataModelValidationFailure](../classes/foundry.data.validation.DataModelValidationFailure.md);  
Â Â Â Â [id](#id): string | number;  
Â Â Â Â [name](#name)?: string;  
}

##### Index

### Properties

[failure](#failure)
[id](#id)
[name?](#name)

## Properties

### failure

failure: [DataModelValidationFailure](../classes/foundry.data.validation.DataModelValidationFailure.md)

The element's validation failure.

### id

id: string | number

Either the element's index or some other identifier for it.

### `Optional`name

name?: string

Optionally a user-friendly name for the element.