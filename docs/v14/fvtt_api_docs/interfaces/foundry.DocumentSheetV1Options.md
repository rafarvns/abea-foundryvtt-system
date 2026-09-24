---
title: "DocumentSheetV1Options | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.DocumentSheetV1Options.html"
category: "interfaces"
---

# Interface DocumentSheetV1Options

interface DocumentSheetV1Options {  
Â Â Â Â [secrets](#secrets)?: [HTMLSecretConfiguration](foundry.HTMLSecretConfiguration.md)[];  
Â Â Â Â [viewPermission](#viewpermission): number;  
}

##### Index

### Properties

[secrets?](#secrets)
[viewPermission](#viewpermission)

## Properties

### `Optional`secrets

secrets?: [HTMLSecretConfiguration](foundry.HTMLSecretConfiguration.md)[]

An array of [foundry.applications.ux.HTMLSecret](../classes/foundry.applications.ux.HTMLSecret.md)
configuration objects.

### viewPermission

viewPermission: number

The default permissions required to view this Document sheet.