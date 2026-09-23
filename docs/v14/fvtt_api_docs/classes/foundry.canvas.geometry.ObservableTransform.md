---
title: "ObservableTransform | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.geometry.ObservableTransform.html"
category: "classes"
---

# Class ObservableTransform

A custom Transform class allowing to observe changes with a callback.

#### Hierarchy

* Transform
  + ObservableTransform

##### Index

### Constructors

[constructor](#constructor)

### Properties

[cb](#cb)
[scope](#scope)

### Methods

[onChange](#onchange)
[updateSkew](#updateskew)

## Constructors

### constructor

* new ObservableTransform(callback: Function, scope: object): ObservableTransform

  #### Parameters

  + callback: Function

    The callback called to observe changes.
  + scope: object

    The scope of the callback.

  #### Returns ObservableTransform

  Overrides PIXI.Transform.constructor

## Properties

### cb

cb: Function

The callback which is observing the changes.

### scope

scope: object

The scope of the callback.

## Methods

### onChange

* onChange(): void

  #### Returns void

  #### Inherit Doc

### updateSkew

* updateSkew(): void

  #### Returns void

  #### Inherit Doc