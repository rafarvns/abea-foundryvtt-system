---
title: "DataFieldOperator | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.data.operators.DataFieldOperator.html"
category: "classes"
---

# Class DataFieldOperator

A base class used for all special database operations.

#### Hierarchy ([View Summary](../hierarchy.md#foundry.data.operators.DataFieldOperator))

* DataFieldOperator
  + [ForcedDeletion](foundry.data.operators.ForcedDeletion.md)
  + [ForcedReplacement](foundry.data.operators.ForcedReplacement.md)

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

### `Static`create

* create(value: any): DataFieldOperator

  Create a DataFieldOperator using a provided value.

  #### Parameters

  + value: any

  #### Returns DataFieldOperator

### `Static`equals

* equals(a: any, b: any): boolean

  A comparison helper function that asserts whether two values are equal when one or both values may be
  DataFieldOperator instances.

  #### Parameters

  + a: any
  + b: any

  #### Returns boolean

### `Static`get

* get(value: any): any

  Retrieve the inner value of the DataFieldOperator, or return the value passed if not a DataFieldOperator.

  #### Parameters

  + value: any

  #### Returns any

### `Static`set

* set(operator: DataFieldOperator, value: any): any

  Assign the inner value of the DataFieldOperator.

  #### Parameters

  + operator: DataFieldOperator
  + value: any

  #### Returns any