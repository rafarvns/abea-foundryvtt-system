---
title: "diffObject | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/foundry.utils.diffObject.html"
category: "functions"
---

# Function diffObject

* diffObject(  
  Â Â Â Â original: object,  
  Â Â Â Â other: object,  
  Â Â Â Â options?: {  
  Â Â Â Â Â Â Â Â \_d?: number;  
  Â Â Â Â Â Â Â Â bidirectional?: boolean;  
  Â Â Â Â Â Â Â Â deletionKeys?: boolean;  
  Â Â Â Â Â Â Â Â inner?: boolean;  
  Â Â Â Â },  
  ): object

  Deeply difference an object against some other, returning the update keys and values.

  #### Parameters

  + original: object

    An object comparing data against which to compare
  + other: object

    An object containing potentially different data.
    Supports values that are DataFieldOperator instances.
  + `Optional`options: {  
    Â Â Â Â \_d?: number;  
    Â Â Â Â bidirectional?: boolean;  
    Â Â Â Â deletionKeys?: boolean;  
    Â Â Â Â inner?: boolean;  
    } = {}

    Additional options which configure the diff operation

    - ##### `Optional`\_d?: number

      An internal depth tracker
    - ##### `Optional`bidirectional?: boolean

      Create a bidirectional diff (or "patch" in Unix parlance), setting a
      forced-deletion value where an entry is defined in the original object
      but not the other.
    - ##### `Optional`deletionKeys?: boolean

      Apply special logic to deletion keys. They will only be kept if the
      original object has a corresponding key that could be deleted.
    - ##### `Optional`inner?: boolean

      Only recognize differences in other for keys which also exist in original

  #### Returns object

  An object of the data in other which differs from that in original