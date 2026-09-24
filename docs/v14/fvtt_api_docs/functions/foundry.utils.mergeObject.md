---
title: "mergeObject | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/foundry.utils.mergeObject.html"
category: "functions"
---

# Function mergeObject

* mergeObject(  
  Â Â Â Â original: object,  
  Â Â Â Â other?: object,  
  Â Â Â Â options?: {  
  Â Â Â Â Â Â Â Â applyOperators?: boolean;  
  Â Â Â Â Â Â Â Â enforceTypes?: boolean;  
  Â Â Â Â Â Â Â Â inplace?: boolean;  
  Â Â Â Â Â Â Â Â insertKeys?: boolean;  
  Â Â Â Â Â Â Â Â insertValues?: boolean;  
  Â Â Â Â Â Â Â Â overwrite?: boolean;  
  Â Â Â Â Â Â Â Â recursive?: boolean;  
  Â Â Â Â },  
  Â Â Â Â \_d?: number,  
  ): object

  Update a source object by replacing its keys and values with those from a target object.

  #### Parameters

  + original: object

    The initial object which should be updated with values from the
    target
  + `Optional`other: object = {}

    A new object whose values should replace those in the source
  + `Optional`options: {  
    Â Â Â Â applyOperators?: boolean;  
    Â Â Â Â enforceTypes?: boolean;  
    Â Â Â Â inplace?: boolean;  
    Â Â Â Â insertKeys?: boolean;  
    Â Â Â Â insertValues?: boolean;  
    Â Â Â Â overwrite?: boolean;  
    Â Â Â Â recursive?: boolean;  
    } = {}

    Additional options which configure the merge

    - ##### `Optional`applyOperators?: boolean

      Control whether to apply the effects of DataFieldOperator values
      (if true) or retain those operators (if false) in the resulting
      merged object.
    - ##### `Optional`enforceTypes?: boolean

      Control whether strict type checking requires that the value of a
      key in the other object must match the data type in the original
      data to be merged.
    - ##### `Optional`inplace?: boolean

      Control whether to apply updates to the original object in-place
      (if true), otherwise the original object is duplicated and the
      copy is merged.
    - ##### `Optional`insertKeys?: boolean

      Control whether to insert new top-level objects into the resulting
      structure which do not previously exist in the original object.
    - ##### `Optional`insertValues?: boolean

      Control whether to insert new nested values into child objects in
      the resulting structure which did not previously exist in the
      original object.
    - ##### `Optional`overwrite?: boolean

      Control whether to replace existing values in the source, or only
      merge values which do not already exist in the original object.
    - ##### `Optional`recursive?: boolean

      Control whether to merge inner-objects recursively (if true), or
      whether to simply replace inner objects with a provided new value.
  + `Optional`\_d: number = 0

    A privately used parameter to track recursion depth.

  #### Returns object

  The original source object including updated, inserted, or
  overwritten records.

  #### Example: Control how new keys and values are added

  ```
  mergeObject({k1: "v1"}, {k2: "v2"}, {insertKeys: false}); // {k1: "v1"}  
  mergeObject({k1: "v1"}, {k2: "v2"}, {insertKeys: true});  // {k1: "v1", k2: "v2"}  
  mergeObject({k1: {i1: "v1"}}, {k1: {i2: "v2"}}, {insertValues: false}); // {k1: {i1: "v1"}}  
  mergeObject({k1: {i1: "v1"}}, {k1: {i2: "v2"}}, {insertValues: true}); // {k1: {i1: "v1", i2: "v2"}}
  Copy
  ```

  #### Example: Control how existing data is overwritten

  ```
  mergeObject({k1: "v1"}, {k1: "v2"}, {overwrite: true}); // {k1: "v2"}  
  mergeObject({k1: "v1"}, {k1: "v2"}, {overwrite: false}); // {k1: "v1"}
  Copy
  ```

  #### Example: Control whether merges are performed recursively

  ```
  mergeObject({k1: {i1: "v1"}}, {k1: {i2: "v2"}}, {recursive: false}); // {k1: {i2: "v2"}}  
  mergeObject({k1: {i1: "v1"}}, {k1: {i2: "v2"}}, {recursive: true}); // {k1: {i1: "v1", i2: "v2"}}
  Copy
  ```

  #### Example: Deleting an existing object key

  ```
  mergeObject({k1: "v1", k2: "v2"}, {"k1": new ForcedDeletion()}, {applyOperators: true});   // {k2: "v2"}
  Copy
  ```

  #### Example: Explicitly replacing an inner object key

  ```
  mergeObject({k1: {i1: "v1"}}, {"k1": ForcedReplacement.create({i2: "v2"})}, {applyOperators: true}); // {k1: {i2: "v2"}}
  Copy
  ```