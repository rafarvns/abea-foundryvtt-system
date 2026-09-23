---
title: "FromCompendiumOptions | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.types.FromCompendiumOptions.html"
category: "interfaces"
---

# Interface FromCompendiumOptions

interface FromCompendiumOptions {  
Â Â Â Â [clearFolder](#clearfolder)?: boolean;  
Â Â Â Â [clearOwnership](#clearownership)?: boolean;  
Â Â Â Â [clearSort](#clearsort)?: boolean;  
Â Â Â Â [clearState](#clearstate)?: boolean;  
Â Â Â Â [dialog](#dialog)?: boolean;  
Â Â Â Â [keepId](#keepid)?: boolean;  
}

##### Index

### Properties

[clearFolder?](#clearfolder)
[clearOwnership?](#clearownership)
[clearSort?](#clearsort)
[clearState?](#clearstate)
[dialog?](#dialog)
[keepId?](#keepid)

## Properties

### `Optional`clearFolder

clearFolder?: boolean

Clear the currently assigned folder.

### `Optional`clearOwnership

clearOwnership?: boolean

Clear Document ownership (recursive).

### `Optional`clearSort

clearSort?: boolean

Clear the current sort order.

### `Optional`clearState

clearState?: boolean

Clear fields which store Document state.

### `Optional`dialog

dialog?: boolean

In cases where necessary, prompt the user with a confirmation dialog

### `Optional`keepId

keepId?: boolean

Retain the Document ID from the source Compendium.