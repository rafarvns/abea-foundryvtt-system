---
title: "_ApplicationHeaderControlsEntry | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.applications.types._ApplicationHeaderControlsEntry.html"
category: "interfaces"
---

# Interface \_ApplicationHeaderControlsEntry

interface \_ApplicationHeaderControlsEntry {  
Â Â Â Â [action](#action): string;  
Â Â Â Â [ownership](#ownership)?: [DocumentOwnershipLevel](../types/CONST.DocumentOwnershipLevel.md);  
}

##### Index

### Properties

[action](#action)
[ownership?](#ownership)

## Properties

### action

action: string

The action name triggered by clicking the control button

### `Optional`ownership

ownership?: [DocumentOwnershipLevel](../types/CONST.DocumentOwnershipLevel.md)

A key or value in [CONST.DOCUMENT\_OWNERSHIP\_LEVELS](../variables/CONST.DOCUMENT_OWNERSHIP_LEVELS.md) that
restricts visibility of this option for the current user. This option
only applies to DocumentSheetV2 instances.