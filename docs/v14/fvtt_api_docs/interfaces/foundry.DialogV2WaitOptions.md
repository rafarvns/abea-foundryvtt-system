---
title: "DialogV2WaitOptions | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.DialogV2WaitOptions.html"
category: "interfaces"
---

# Interface DialogV2WaitOptions

interface DialogV2WaitOptions {  
Â Â Â Â [close](#close)?: [DialogV2CloseCallback](../types/foundry.DialogV2CloseCallback.md);  
Â Â Â Â [rejectClose](#rejectclose)?: boolean;  
Â Â Â Â [render](#render)?: [DialogV2RenderCallback](../types/foundry.DialogV2RenderCallback.md);  
Â Â Â Â [renderOptions](#renderoptions)?: [ApplicationRenderOptions](foundry.applications.types.ApplicationRenderOptions.md);  
}

##### Index

### Properties

[close?](#close)
[rejectClose?](#rejectclose)
[render?](#render)
[renderOptions?](#renderoptions)

## Properties

### `Optional`close

close?: [DialogV2CloseCallback](../types/foundry.DialogV2CloseCallback.md)

A synchronous function to invoke when the dialog is closed under any
circumstances.

### `Optional`rejectClose

rejectClose?: boolean

Throw a Promise rejection if the dialog is dismissed.

### `Optional`render

render?: [DialogV2RenderCallback](../types/foundry.DialogV2RenderCallback.md)

A synchronous function to invoke whenever the dialog is rendered.

### `Optional`renderOptions

renderOptions?: [ApplicationRenderOptions](foundry.applications.types.ApplicationRenderOptions.md)

Options forwarded to the dialog's render call.