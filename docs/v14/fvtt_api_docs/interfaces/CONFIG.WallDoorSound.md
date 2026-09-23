---
title: "WallDoorSound | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/CONFIG.WallDoorSound.html"
category: "interfaces"
---

# Interface WallDoorSound

interface WallDoorSound {  
Â Â Â Â [close](#close)?: string | string[];  
Â Â Â Â [label](#label): string;  
Â Â Â Â [lock](#lock)?: string | string[];  
Â Â Â Â [open](#open)?: string | string[];  
Â Â Â Â [test](#test)?: string | string[];  
Â Â Â Â [unlock](#unlock)?: string | string[];  
}

##### Index

### Properties

[close?](#close)
[label](#label)
[lock?](#lock)
[open?](#open)
[test?](#test)
[unlock?](#unlock)

## Properties

### `Optional`close

close?: string | string[]

One or more sound paths for when the door is closed

### label

label: string

A localization string label

### `Optional`lock

lock?: string | string[]

One or more sound paths for when the door becomes locked

### `Optional`open

open?: string | string[]

One or more sound paths for when opening the door

### `Optional`test

test?: string | string[]

One or more sound paths for when attempting to open a locked door

### `Optional`unlock

unlock?: string | string[]

One or more sound paths for when the door becomes unlocked