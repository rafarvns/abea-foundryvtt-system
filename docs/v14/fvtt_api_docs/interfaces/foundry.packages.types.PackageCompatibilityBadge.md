---
title: "PackageCompatibilityBadge | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.packages.types.PackageCompatibilityBadge.html"
category: "interfaces"
---

# Interface PackageCompatibilityBadge

interface PackageCompatibilityBadge {  
Â Â Â Â [icon](#icon)?: string;  
Â Â Â Â [label](#label)?: string;  
Â Â Â Â [tooltip](#tooltip): string;  
Â Â Â Â [type](#type): "success" | "error" | "warning" | "neutral";  
}

##### Index

### Properties

[icon?](#icon)
[label?](#label)
[tooltip](#tooltip)
[type](#type)

## Properties

### `Optional`icon

icon?: string

An optional icon displayed in the badge

### `Optional`label

label?: string

An optional text label displayed in the badge

### tooltip

tooltip: string

A tooltip string displayed when hovering over the badge

### type

type: "success" | "error" | "warning" | "neutral"

A CSS class applied to the badge