---
title: "parseHTML | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/foundry.utils.parseHTML.html"
category: "functions"
---

# Function parseHTML

* parseHTML(htmlString: string): HTMLElement | HTMLCollection | null

  Parse an HTML string, returning a processed HTMLElement or HTMLCollection.
  A single HTMLElement is returned if the provided string contains only a single top-level element.
  An HTMLCollection is returned if the provided string contains multiple top-level elements.
  If no element was parsable, the return is `null`.

  #### Parameters

  + htmlString: string

  #### Returns HTMLElement | HTMLCollection | null