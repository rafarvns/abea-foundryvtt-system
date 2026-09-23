---
title: "AutocompleteCallback | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/types/foundry.AutocompleteCallback.html"
category: "types"
---

# Type Alias AutocompleteCallback

AutocompleteCallback: (  
Â Â Â Â identifier: string,  
Â Â Â Â label: string,  
Â Â Â Â options?: @param {string} [options.prefix] The matched prefix that originally triggered this autocomplete menu.
,  
) => any

#### Type Declaration

* + (  
    Â Â Â Â identifier: string,  
    Â Â Â Â label: string,  
    Â Â Â Â options?: @param {string} [options.prefix] The matched prefix that originally triggered this autocomplete menu.
    ,  
    ): any
  + #### Parameters

    - identifier: string

      The identifier of the entry that was selected.
    - label: string

      The label of the entry that was selected.
    - `Optional`options: @param {string} [options.prefix] The matched prefix that originally triggered this autocomplete menu.

    #### Returns any