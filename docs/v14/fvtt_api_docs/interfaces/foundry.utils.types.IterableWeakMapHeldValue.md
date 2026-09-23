---
title: "IterableWeakMapHeldValue | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.utils.types.IterableWeakMapHeldValue.html"
category: "interfaces"
---

# Interface IterableWeakMapHeldValue<K>

interface IterableWeakMapHeldValue<[K](#k) extends WeakKey> {  
Â Â Â Â [ref](#ref): WeakRef<[K](#k)>;  
Â Â Â Â [set](#set): Set<WeakRef<[K](#k)>>;  
}

#### Type Parameters

* K extends WeakKey

##### Index

### Properties

[ref](#ref)
[set](#set)

## Properties

### ref

ref: WeakRef<[K](#k)>

The ref to remove.

### set

set: Set<WeakRef<[K](#k)>>

The set to be cleaned.