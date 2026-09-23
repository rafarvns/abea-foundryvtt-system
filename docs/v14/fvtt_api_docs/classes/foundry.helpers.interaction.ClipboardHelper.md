---
title: "ClipboardHelper | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.helpers.interaction.ClipboardHelper.html"
category: "classes"
---

# Class ClipboardHelper

A singleton helper class to manage requesting clipboard permissions.
Provoides common functionality for working with the clipboard.

#### See

[foundry.Game#clipboard](foundry.Game.md#clipboard)

##### Index

### Methods

[copyPlainText](#copyplaintext)

## Methods

### copyPlainText

* copyPlainText(text: string): Promise<void>

  Copies plain text to the clipboard in a cross-browser compatible way.

  #### Parameters

  + text: string

    The text to copy.

  #### Returns Promise<void>