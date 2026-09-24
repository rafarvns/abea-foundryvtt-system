---
title: "ApplicationTabsConfiguration | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.applications.types.ApplicationTabsConfiguration.html"
category: "interfaces"
---

# Interface ApplicationTabsConfiguration

interface ApplicationTabsConfiguration {  
Â Â Â Â [initial](#initial)?: string;  
Â Â Â Â [labelPrefix](#labelprefix)?: string;  
Â Â Â Â [tabs](#tabs): {  
Â Â Â Â Â Â Â Â cssClass?: string;  
Â Â Â Â Â Â Â Â icon?: string;  
Â Â Â Â Â Â Â Â id: string;  
Â Â Â Â Â Â Â Â label?: string;  
Â Â Â Â Â Â Â Â tooltip?: string;  
Â Â Â Â }[];  
}

##### Index

### Properties

[initial?](#initial)
[labelPrefix?](#labelprefix)
[tabs](#tabs)

## Properties

### `Optional`initial

initial?: string

The tab in this group that will be active on first render

### `Optional`labelPrefix

labelPrefix?: string

A localization path prefix for all tabs in the group: if set, a label is generated
for each tab using a full path of `${labelPrefix}.${tabId}`.

### tabs

tabs: {  
Â Â Â Â cssClass?: string;  
Â Â Â Â icon?: string;  
Â Â Â Â id: string;  
Â Â Â Â label?: string;  
Â Â Â Â tooltip?: string;  
}[]

An array of tab configuration data