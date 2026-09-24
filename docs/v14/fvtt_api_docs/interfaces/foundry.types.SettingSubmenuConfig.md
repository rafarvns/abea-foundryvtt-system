---
title: "SettingSubmenuConfig | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.types.SettingSubmenuConfig.html"
category: "interfaces"
---

# Interface SettingSubmenuConfig

A Client Setting Submenu

interface SettingSubmenuConfig {  
Â Â Â Â [hint](#hint): string;  
Â Â Â Â [icon](#icon): string;  
Â Â Â Â [label](#label): string;  
Â Â Â Â [name](#name): string;  
Â Â Â Â [restricted](#restricted): boolean;  
Â Â Â Â [type](#type): typeof [Application](../classes/foundry.appv1.api.Application.md) | typeof [ApplicationV2](../classes/foundry.applications.api.ApplicationV2.md);  
}

##### Index

### Properties

[hint](#hint)
[icon](#icon)
[label](#label)
[name](#name)
[restricted](#restricted)
[type](#type)

## Properties

### hint

hint: string

An additional human readable hint

### icon

icon: string

The classname of an Icon to render

### label

label: string

The human readable label

### name

name: string

The human readable name

### restricted

restricted: boolean

If true, only a GM can edit this Setting

### type

type: typeof [Application](../classes/foundry.appv1.api.Application.md) | typeof [ApplicationV2](../classes/foundry.applications.api.ApplicationV2.md)

The Application class to render