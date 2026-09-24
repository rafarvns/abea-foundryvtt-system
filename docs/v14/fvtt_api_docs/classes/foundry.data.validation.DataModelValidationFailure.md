---
title: "DataModelValidationFailure | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.data.validation.DataModelValidationFailure.html"
category: "classes"
---

# Class DataModelValidationFailure

A class responsible for recording information about a validation failure.

##### Index

### Properties

[dropped](#dropped)
[elements](#elements)
[fallbackValue](#fallbackvalue)
[fieldPath](#fieldpath)
[fields](#fields)
[invalidValue](#invalidvalue)
[joint](#joint)
[message](#message)
[options](#options)
[unresolved](#unresolved)

### Accessors

[empty](#empty)

### Methods

[asError](#aserror)
[asHTML](#ashtml)
[copyTo](#copyto)
[getAllFailures](#getallfailures)
[getFailure](#getfailure)
[logAsTable](#logastable)
[toObject](#toobject)
[toString](#tostring)

## Properties

### dropped

dropped: boolean

Whether the value was dropped from some parent collection.

### elements

elements: [DataModelValidationFailureElement](../interfaces/foundry.data.validation.DataModelValidationFailureElement.md)[] = []

If this field contains a list of elements that are validated as part of its validation, their results are recorded
here.

### fallbackValue

fallbackValue: any

The value it was replaced by, if any.

### fieldPath

fieldPath: string

The path of the field responsible for the failure.

### fields

fields: Record<string, DataModelValidationFailure> = {}

If this field contains other fields that are validated as part of its validation, their results are recorded here.

### invalidValue

invalidValue: any

The value that failed validation for this field.

### joint

joint: string

If this field has a joint validation failure across multiple sub-fields, the failure message is recorded here.

### message

message: string

The error message.

### options

options: Error

Options forwarded to the Error constructor.

### unresolved

unresolved: boolean

Record whether a validation failure is unresolved.
This reports as true if validation for this field or any hierarchically contained field is unresolved.
A failure is unresolved if the value was invalid and there was no valid fallback value available.

## Accessors

### empty

* get empty(): boolean

  Whether this failure contains other sub-failures.

  #### Returns boolean

## Methods

### asError

* asError(): [DataModelValidationError](foundry.data.validation.DataModelValidationError.md)

  Return this validation failure as an Error instance.

  #### Returns [DataModelValidationError](foundry.data.validation.DataModelValidationError.md)

### asHTML

* asHTML(): string

  Generate a nested tree view of the error as an HTML string.

  #### Returns string

### copyTo

* copyTo(failure: DataModelValidationFailure): void

  Copy the data of this DataModeValidationFailure to another one.

  #### Parameters

  + failure: DataModelValidationFailure

  #### Returns void

### getAllFailures

* getAllFailures(): Record<string, DataModelValidationFailure>

  Retrieve a flattened object of all the properties that failed validation as part of this error.

  #### Returns Record<string, DataModelValidationFailure>

  #### Example: Removing invalid changes from an update delta.

  ```
  const changes = {  
    "foo.bar": "validValue",  
    "foo.baz": "invalidValue"  
  };  
  try {  
    doc.validate(expandObject(changes));  
  } catch ( err ) {  
    const failures = err.getAllFailures();  
    if ( failures ) {  
      for ( const prop in failures ) delete changes[prop];  
      doc.validate(expandObject(changes));  
    }  
  }
  Copy
  ```

### getFailure

* getFailure(key?: string): DataModelValidationFailure | null

  Retrieve the leaf node failure that caused this, or a specific sub-failure via a path.

  #### Parameters

  + `Optional`key: string

    The property key to the failure.

  #### Returns DataModelValidationFailure | null

  #### Example: Retrieving a failure.

  ```
  const changes = {  
    "foo.bar": "validValue",  
    "foo.baz": "invalidValue"  
  };  
  try {  
    doc.validate(expandObject(changes));  
  } catch ( err ) {  
    const failure = err.getFailure("foo.baz");  
    console.log(failure.invalidValue); // "invalidValue"  
  }
  Copy
  ```

### logAsTable

* logAsTable(): void

  Log the validation error as a table.

  #### Returns void

### toObject

* toObject(): {  
  Â Â Â Â dropped: boolean;  
  Â Â Â Â fallbackValue: any;  
  Â Â Â Â invalidValue: any;  
  Â Â Â Â message: string;  
  }

  Return the base properties of this failure, omitting any nested failures.

  #### Returns { dropped: boolean; fallbackValue: any; invalidValue: any; message: string }

### toString

* toString(): string

  Represent the DataModelValidationFailure as a string.

  #### Returns string