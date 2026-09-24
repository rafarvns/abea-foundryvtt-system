---
title: "TextEditorEnricher | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/types/CONFIG.TextEditorEnricher.html"
category: "types"
---

# Type Alias TextEditorEnricher

TextEditorEnricher: (  
Â Â Â Â match: RegExpMatchArray,  
Â Â Â Â options?: [EnrichmentOptions](../interfaces/foundry.EnrichmentOptions.md),  
) => Promise<HTMLElement | null>

#### Type Declaration

* + (  
    Â Â Â Â match: RegExpMatchArray,  
    Â Â Â Â options?: [EnrichmentOptions](../interfaces/foundry.EnrichmentOptions.md),  
    ): Promise<HTMLElement | null>
  + #### Parameters

    - match: RegExpMatchArray

      The regular expression match result
    - `Optional`options: [EnrichmentOptions](../interfaces/foundry.EnrichmentOptions.md)

      Options provided to customize text enrichment

    #### Returns Promise<HTMLElement | null>