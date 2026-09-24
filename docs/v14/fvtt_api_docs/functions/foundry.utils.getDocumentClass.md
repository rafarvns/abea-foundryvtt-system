---
title: "getDocumentClass | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/foundry.utils.getDocumentClass.html"
category: "functions"
---

# Function getDocumentClass

* getDocumentClass(documentName: string): typeof [Document](../classes/foundry.abstract.Document.md) | undefined

  Return a reference to the Document class implementation which is configured for use.

  #### Parameters

  + documentName: string

    The canonical Document name, for example "Actor"

  #### Returns typeof [Document](../classes/foundry.abstract.Document.md) | undefined

  The configured Document class implementation