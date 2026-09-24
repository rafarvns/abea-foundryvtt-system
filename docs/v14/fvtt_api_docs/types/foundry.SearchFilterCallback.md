---
title: "SearchFilterCallback | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/types/foundry.SearchFilterCallback.html"
category: "types"
---

# Type Alias SearchFilterCallback

SearchFilterCallback: (  
Â Â Â Â event: KeyboardEvent | null,  
Â Â Â Â query: string,  
Â Â Â Â rgx: RegExp,  
Â Â Â Â content: HTMLElement,  
) => void

#### Type Declaration

* + (  
    Â Â Â Â event: KeyboardEvent | null,  
    Â Â Â Â query: string,  
    Â Â Â Â rgx: RegExp,  
    Â Â Â Â content: HTMLElement,  
    ): void
  + #### Parameters

    - event: KeyboardEvent | null
    - query: string
    - rgx: RegExp
    - content: HTMLElement

    #### Returns void