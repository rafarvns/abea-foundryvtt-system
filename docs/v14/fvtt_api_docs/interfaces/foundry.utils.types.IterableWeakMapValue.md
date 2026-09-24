---
title: "IterableWeakMapValue | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.utils.types.IterableWeakMapValue.html"
category: "interfaces"
---

# Interface IterableWeakMapValue<K, V>

interface IterableWeakMapValue<[K](#k) extends WeakKey, [V](#v)> {  
Â Â Â Â [ref](#ref): WeakRef<[K](#k)>;  
Â Â Â Â [value](#value): [V](#v);  
}

#### Type Parameters

* K extends WeakKey
* V

##### Index

### Properties

[ref](#ref)
[value](#value)

## Properties

### ref

ref: WeakRef<[K](#k)>

The weak ref of the key.

### value

value: [V](#v)

The value.