---
title: "DocumentEmbedHandler | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/types/CONFIG.DocumentEmbedHandler.html"
category: "types"
---

# Type Alias DocumentEmbedHandler

DocumentEmbedHandler: (  
Â Â Â Â doc: Document,  
Â Â Â Â content: HTMLElement | null,  
Â Â Â Â config: [DocumentHTMLEmbedConfig](../interfaces/foundry.DocumentHTMLEmbedConfig.md),  
Â Â Â Â options?: [EnrichmentOptions](../interfaces/foundry.EnrichmentOptions.md),  
) => Promise<HTMLElement | HTMLCollection | null>

#### Type Declaration

* + (  
    Â Â Â Â doc: Document,  
    Â Â Â Â content: HTMLElement | null,  
    Â Â Â Â config: [DocumentHTMLEmbedConfig](../interfaces/foundry.DocumentHTMLEmbedConfig.md),  
    Â Â Â Â options?: [EnrichmentOptions](../interfaces/foundry.EnrichmentOptions.md),  
    ): Promise<HTMLElement | HTMLCollection | null>
  + #### Parameters

    - doc: Document

      The Document being embedded.
    - content: HTMLElement | null

      The candidate element for embedding.
    - config: [DocumentHTMLEmbedConfig](../interfaces/foundry.DocumentHTMLEmbedConfig.md)

      Configuration for embedding behavior.
    - `Optional`options: [EnrichmentOptions](../interfaces/foundry.EnrichmentOptions.md)

      The original enrichment options for cases where the Document
      embed content also contains text that must be enriched.

    #### Returns Promise<HTMLElement | HTMLCollection | null>