---
title: "DataModelValidationError | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.data.validation.DataModelValidationError.html"
category: "classes"
---

# Class DataModelValidationError

A specialized Error to indicate a model validation failure.

#### Hierarchy

* Error
  + DataModelValidationError

##### Index

### Constructors

[constructor](#constructor)

### Methods

[asHTML](#ashtml)
[getAllFailures](#getallfailures)
[getFailure](#getfailure)
[logAsTable](#logastable)
[toString](#tostring)

## Constructors

### constructor

* new DataModelValidationError(  
  Â Â Â Â failure: string | [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.md),  
  Â Â Â Â ...params?: any[],  
  ): DataModelValidationError

  #### Parameters

  + failure: string | [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.md)

    The failure that triggered this error or an error message
  + `Optional`...params: any[]

    Additional Error constructor parameters

  #### Returns DataModelValidationError

  Overrides Error.constructor

## Methods

### asHTML

* asHTML(): string

  Generate a nested tree view of the error as an HTML string.

  #### Returns string

### getAllFailures

* getAllFailures(): Record<string, [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.md)>

  #### Returns Record<string, [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.md)>

  #### See

  [DataModelValidationFailure#getAllFailures](foundry.data.validation.DataModelValidationFailure.md#getallfailures)

### getFailure

* getFailure(key?: string): [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.md) | null

  #### Parameters

  + `Optional`key: string

  #### Returns [DataModelValidationFailure](foundry.data.validation.DataModelValidationFailure.md) | null

  #### See

  [DataModelValidationFailure#getFailure](foundry.data.validation.DataModelValidationFailure.md#getfailure)

### logAsTable

* logAsTable(): void

  Log the validation error as a table.

  #### Returns void

### toString

* toString(): string

  #### Returns string

  #### Inherit Doc