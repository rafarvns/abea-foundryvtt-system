---
title: "performIntegerSort | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/foundry.utils.performIntegerSort.html"
category: "functions"
---

# Function performIntegerSort

* performIntegerSort(  
  Â Â Â Â source: object,  
  Â Â Â Â options?: {  
  Â Â Â Â Â Â Â Â siblings?: object[];  
  Â Â Â Â Â Â Â Â sortBefore?: boolean;  
  Â Â Â Â Â Â Â Â sortKey?: string;  
  Â Â Â Â Â Â Â Â target?: object | null;  
  Â Â Â Â },  
  ): object[]

  Given a source object to sort, a target to sort relative to, and an Array of siblings in the container:
  Determine the updated sort keys for the source object, or all siblings if a reindex is required.
  Return an Array of updates to perform, it is up to the caller to dispatch these updates.
  Each update is structured as:
  {
  target: object,
  update: {sortKey: sortValue}
  }

  #### Parameters

  + source: object

    The source object being sorted
  + `Optional`options: {  
    Â Â Â Â siblings?: object[];  
    Â Â Â Â sortBefore?: boolean;  
    Â Â Â Â sortKey?: string;  
    Â Â Â Â target?: object | null;  
    } = {}

    Options which modify the sort behavior

    - ##### `Optional`siblings?: object[]

      The Array of siblings which the source should be sorted within
    - ##### `Optional`sortBefore?: boolean

      Explicitly sort before (true) or sort after( false).
      If undefined the sort order will be automatically determined.
    - ##### `Optional`sortKey?: string

      The property name within the source object which defines the sort key
    - ##### `Optional`target?: object | null

      The target object relative which to sort

  #### Returns object[]

  An Array of updates for the caller of the helper function to perform