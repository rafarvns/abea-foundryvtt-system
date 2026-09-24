---
title: "Notification | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.Notification.html"
category: "interfaces"
---

# Interface Notification

interface Notification {  
Â Â Â Â [active](#active): boolean;  
Â Â Â Â [console](#console): boolean;  
Â Â Â Â [element](#element)?: HTMLLIElement;  
Â Â Â Â [error](#error)?: Error;  
Â Â Â Â [id](#id): number;  
Â Â Â Â [message](#message): string;  
Â Â Â Â [pct](#pct): number;  
Â Â Â Â [permanent](#permanent): boolean;  
Â Â Â Â [progress](#progress): boolean;  
Â Â Â Â [remove](#remove)?: () => void;  
Â Â Â Â [timestamp](#timestamp): number;  
Â Â Â Â [type](#type): string;  
Â Â Â Â [update](#update)?: (pct: number) => void;  
}

##### Index

### Properties

[active](#active)
[console](#console)
[element?](#element)
[error?](#error)
[id](#id)
[message](#message)
[pct](#pct)
[permanent](#permanent)
[progress](#progress)
[remove?](#remove)
[timestamp](#timestamp)
[type](#type)
[update?](#update)

## Properties

### active

active: boolean

### console

console: boolean

### `Optional`element

element?: HTMLLIElement

### `Optional`error

error?: Error

### id

id: number

### message

message: string

### pct

pct: number

### permanent

permanent: boolean

### progress

progress: boolean

### `Optional`remove

remove?: () => void

### timestamp

timestamp: number

### type

type: string

### `Optional`update

update?: (pct: number) => void