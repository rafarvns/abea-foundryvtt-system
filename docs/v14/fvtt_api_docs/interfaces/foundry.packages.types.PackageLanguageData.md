---
title: "PackageLanguageData | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.packages.types.PackageLanguageData.html"
category: "interfaces"
---

# Interface PackageLanguageData

interface PackageLanguageData {  
Â Â Â Â [lang](#lang): string;  
Â Â Â Â [module](#module)?: string;  
Â Â Â Â [name](#name): string;  
Â Â Â Â [path](#path): string;  
Â Â Â Â [system](#system)?: string;  
}

##### Index

### Properties

[lang](#lang)
[module?](#module)
[name](#name)
[path](#path)
[system?](#system)

## Properties

### lang

lang: string

A string language code which is validated by Intl.getCanonicalLocales

### `Optional`module

module?: string

Only apply this set of translations when a specific module is active

### name

name: string

The human-readable language name

### path

path: string

The relative path to included JSON translation strings

### `Optional`system

system?: string

Only apply this set of translations when a specific system is being used