---
title: "ForcedReplacement | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.data.operators.ForcedReplacement.html"
category: "classes"
---

# Class ForcedReplacement

Force the replacement of a certain DataModel field, assigning it to some explicit value without inner recursion.

#### Hierarchy ([View Summary](../hierarchy.md#foundry.data.operators.ForcedReplacement))

* [DataFieldOperator](foundry.data.operators.DataFieldOperator.md)
  + ForcedReplacement

##### Index

### Methods

[toJSON](#tojson)
[create](#create)
[equals](#equals)
[get](#get)
[set](#set)

## Methods

### toJSON

* toJSON(): object

  Represent the data of the DataFieldOperator as an object suitable for JSON serialization.

  #### Returns object

  Structured data that can be serialized into JSON

  Inherited from [DataFieldOperator](foundry.data.operators.DataFieldOperator.md).[toJSON](foundry.data.operators.DataFieldOperator.md#tojson)

### `Static`create

* create(value: any): ForcedReplacement

  Create a ForcedReplacement instance that is wrapped in a Proxy so that it can be inspected.

  #### Parameters

  + value: any

  #### Returns ForcedReplacement

  Overrides [DataFieldOperator](foundry.data.operators.DataFieldOperator.md).[create](foundry.data.operators.DataFieldOperator.md#create)

### `Static`equals

* equals(a: any, b: any): boolean

  A comparison helper function that asserts whether two values are equal when one or both values may be
  DataFieldOperator instances.

  #### Parameters

  + a: any
  + b: any

  #### Returns boolean

  Inherited from [DataFieldOperator](foundry.data.operators.DataFieldOperator.md).[equals](foundry.data.operators.DataFieldOperator.md#equals)

### `Static`get

* get(value: any): any

  Retrieve the inner value of the DataFieldOperator, or return the value passed if not a DataFieldOperator.

  #### Parameters

  + value: any

  #### Returns any

  Inherited from [DataFieldOperator](foundry.data.operators.DataFieldOperator.md).[get](foundry.data.operators.DataFieldOperator.md#get)

### `Static`set

* set(operator: [DataFieldOperator](foundry.data.operators.DataFieldOperator.md), value: any): any

  Assign the inner value of the DataFieldOperator.

  #### Parameters

  + operator: [DataFieldOperator](foundry.data.operators.DataFieldOperator.md)
  + value: any

  #### Returns any

  Inherited from [DataFieldOperator](foundry.data.operators.DataFieldOperator.md).[set](foundry.data.operators.DataFieldOperator.md#set)