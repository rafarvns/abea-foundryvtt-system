---
title: "TourConfig | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.TourConfig.html"
category: "interfaces"
---

# Interface TourConfig

Tour configuration data

interface TourConfig {  
Â Â Â Â [canBeResumed](#canberesumed)?: boolean;  
Â Â Â Â [description](#description)?: string;  
Â Â Â Â [display](#display)?: boolean;  
Â Â Â Â [id](#id): string;  
Â Â Â Â [localization](#localization)?: object;  
Â Â Â Â [namespace](#namespace): string;  
Â Â Â Â [restricted](#restricted)?: boolean;  
Â Â Â Â [steps](#steps): [TourStep](foundry.TourStep.md)[];  
Â Â Â Â [suggestedNextTours](#suggestednexttours)?: string[];  
Â Â Â Â [title](#title): string;  
}

##### Index

### Properties

[canBeResumed?](#canberesumed)
[description?](#description)
[display?](#display)
[id](#id)
[localization?](#localization)
[namespace](#namespace)
[restricted?](#restricted)
[steps](#steps)
[suggestedNextTours?](#suggestednexttours)
[title](#title)

## Properties

### `Optional`canBeResumed

canBeResumed?: boolean

Whether the Tour can be resumed or if it always needs to start from the
beginning. Defaults to false.

### `Optional`description

description?: string

A human-readable description of this Tour. Localized.

### `Optional`display

display?: boolean

Whether the Tour should be displayed in the Manage Tours UI. Defaults
to false.

### id

id: string

A machine-friendly id of the Tour, must be unique within the provided
namespace

### `Optional`localization

localization?: object

A map of localizations for the Tour that should be merged into the
default localizations

### namespace

namespace: string

The namespace this Tour belongs to. Typically, the name of the package
which implements the tour should be used

### `Optional`restricted

restricted?: boolean

Whether the Tour is restricted to the GM only. Defaults to false.

### steps

steps: [TourStep](foundry.TourStep.md)[]

The list of Tour Steps

### `Optional`suggestedNextTours

suggestedNextTours?: string[]

A list of namespaced Tours that might be suggested to the user when this
Tour is completed. The first non-completed Tour in the array will be
recommended.

### title

title: string

A human-readable name for this Tour. Localized.