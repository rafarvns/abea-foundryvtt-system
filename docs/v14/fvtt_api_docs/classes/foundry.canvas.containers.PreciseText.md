---
title: "PreciseText | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.canvas.containers.PreciseText.html"
category: "classes"
---

# Class PreciseText

An extension of the default PIXI.Text object which forces double resolution.
At default resolution Text often looks blurry or fuzzy.

#### Hierarchy

* Text
  + PreciseText

##### Index

### Methods

[getTextStyle](#gettextstyle)

## Methods

### `Static`getTextStyle

* getTextStyle(options?: { anchor?: number }): TextStyle

  Prepare a TextStyle object which merges the canvas defaults with user-provided options

  #### Parameters

  + `Optional`options: { anchor?: number } = {}

    Additional options merged with the default TextStyle

    - ##### `Optional`anchor?: number

      A text anchor point from CONST.TEXT\_ANCHOR\_POINTS

  #### Returns TextStyle

  The prepared TextStyle