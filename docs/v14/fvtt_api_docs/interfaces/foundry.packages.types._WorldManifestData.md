---
title: "_WorldManifestData | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.packages.types._WorldManifestData.html"
category: "interfaces"
---

# Interface \_WorldManifestData

Manifest properties exclusive to worlds.

interface \_WorldManifestData {  
Â Â Â Â [background](#background)?: string;  
Â Â Â Â [coreVersion](#coreversion): string;  
Â Â Â Â [demo](#demo)?: { sourceZip?: string };  
Â Â Â Â [joinTheme](#jointheme)?: string;  
Â Â Â Â [nextSession](#nextsession)?: string;  
Â Â Â Â [resetKeys](#resetkeys)?: boolean;  
Â Â Â Â [safeMode](#safemode)?: boolean;  
Â Â Â Â [system](#system): string;  
Â Â Â Â [systemVersion](#systemversion): string;  
Â Â Â Â [type](#type): "world";  
}

##### Index

### Properties

[background?](#background)
[coreVersion](#coreversion)
[demo?](#demo)
[joinTheme?](#jointheme)
[nextSession?](#nextsession)
[resetKeys?](#resetkeys)
[safeMode?](#safemode)
[system](#system)
[systemVersion](#systemversion)
[type](#type)

## Properties

### `Optional`background

background?: string

A web URL or local file path which provides a background banner image

### coreVersion

coreVersion: string

The version of the core software for which this world has been migrated

### `Optional`demo

demo?: { sourceZip?: string }

Configuration for demo worlds.

#### Type Declaration

* ##### `Optional`sourceZip?: string

  Path to the world's fresh data.

### `Optional`joinTheme

joinTheme?: string

The theme to use for this world's join page.

### `Optional`nextSession

nextSession?: string

An ISO datetime string when the next game session is scheduled to occur

### `Optional`resetKeys

resetKeys?: boolean

Should user access keys be reset as part of the next launch?

### `Optional`safeMode

safeMode?: boolean

Should the world launch in safe mode?

### system

system: string

The game system name which this world relies upon

### systemVersion

systemVersion: string

The version of the game system for which this world has been migrated

### type

type: "world"

The package type among world, system, and module