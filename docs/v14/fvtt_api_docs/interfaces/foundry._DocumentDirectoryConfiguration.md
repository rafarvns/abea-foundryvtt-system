---
title: "_DocumentDirectoryConfiguration | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry._DocumentDirectoryConfiguration.html"
category: "interfaces"
---

# Interface \_DocumentDirectoryConfiguration

interface \_DocumentDirectoryConfiguration {  
Â Â Â Â [collection](#collection): DirectoryCollection;  
Â Â Â Â [renderUpdateKeys](#renderupdatekeys): string[];  
}

##### Index

### Properties

[collection](#collection)
[renderUpdateKeys](#renderupdatekeys)

## Properties

### collection

collection: DirectoryCollection

The Document collection that this directory represents.

### renderUpdateKeys

renderUpdateKeys: string[]

Updating one of these properties of a displayed Document will trigger a
re-render of the tab.