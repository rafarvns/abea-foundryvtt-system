---
title: "ToCompendiumOptions | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.types.ToCompendiumOptions.html"
category: "interfaces"
---

# Interface ToCompendiumOptions

interface ToCompendiumOptions {  
Â Â Â Â [clearFlags](#clearflags)?: boolean;  
Â Â Â Â [clearFolder](#clearfolder)?: boolean;  
Â Â Â Â [clearOwnership](#clearownership)?: boolean;  
Â Â Â Â [clearSort](#clearsort)?: boolean;  
Â Â Â Â [clearSource](#clearsource)?: boolean;  
Â Â Â Â [clearState](#clearstate)?: boolean;  
Â Â Â Â [dialog](#dialog)?: boolean;  
Â Â Â Â [keepId](#keepid)?: boolean;  
}

##### Index

### Properties

[clearFlags?](#clearflags)
[clearFolder?](#clearfolder)
[clearOwnership?](#clearownership)
[clearSort?](#clearsort)
[clearSource?](#clearsource)
[clearState?](#clearstate)
[dialog?](#dialog)
[keepId?](#keepid)

## Properties

### `Optional`clearFlags

clearFlags?: boolean

Clear the flags object

### `Optional`clearFolder

clearFolder?: boolean

Clear the currently assigned folder

### `Optional`clearOwnership

clearOwnership?: boolean

Clear document ownership (recursive)

### `Optional`clearSort

clearSort?: boolean

Clear the currently assigned sort order

### `Optional`clearSource

clearSource?: boolean

Clear any prior source information

### `Optional`clearState

clearState?: boolean

Clear fields which store document state (recursive)

### `Optional`dialog

dialog?: boolean

In cases where necessary, prompt the user with a confirmation dialog

### `Optional`keepId

keepId?: boolean

Retain the current Document id