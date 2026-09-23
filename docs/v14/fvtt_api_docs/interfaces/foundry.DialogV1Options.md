---
title: "DialogV1Options | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.DialogV1Options.html"
category: "interfaces"
---

# Interface DialogV1Options

interface DialogV1Options {  
Â Â Â Â [jQuery](#jquery)?: boolean;  
}

##### Index

### Properties

[jQuery?](#jquery)

## Properties

### `Optional`jQuery

jQuery?: boolean

Whether to provide jQuery objects to callback functions (if true) or plain
HTMLElement instances (if false). This is currently true by default but in the
future will become false by default.