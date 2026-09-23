---
title: "DataFieldValidator | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/types/foundry.data.types.DataFieldValidator.html"
category: "types"
---

# Type Alias DataFieldValidator

DataFieldValidator: (  
Â Â Â Â value: any,  
Â Â Â Â options: [DataFieldValidationOptions](../interfaces/foundry.data.types.DataFieldValidationOptions.md),  
) => boolean | void

A Custom DataField validator function.

A boolean return value indicates that the value is valid (true) or invalid (false) with certainty. With an explicit
boolean return value no further validation functions will be evaluated.

An undefined return indicates that the value may be valid but further validation functions should be performed,
if defined.

An Error may be thrown which provides a custom error message explaining the reason the value is invalid.

#### Type Declaration

* + (value: any, options: [DataFieldValidationOptions](../interfaces/foundry.data.types.DataFieldValidationOptions.md)): boolean | void
  + #### Parameters

    - value: any

      The value provided for validation
    - options: [DataFieldValidationOptions](../interfaces/foundry.data.types.DataFieldValidationOptions.md)

      Validation options

    #### Returns boolean | void