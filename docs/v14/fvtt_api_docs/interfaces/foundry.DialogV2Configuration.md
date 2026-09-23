---
title: "DialogV2Configuration | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.DialogV2Configuration.html"
category: "interfaces"
---

# Interface DialogV2Configuration

interface DialogV2Configuration {  
Â Â Â Â [buttons](#buttons): [DialogV2Button](foundry.DialogV2Button.md)[];  
Â Â Â Â [content](#content)?: string | HTMLDivElement;  
Â Â Â Â [modal](#modal)?: boolean;  
Â Â Â Â [submit](#submit)?: [DialogV2SubmitCallback](../types/foundry.DialogV2SubmitCallback.md);  
}

##### Index

### Properties

[buttons](#buttons)
[content?](#content)
[modal?](#modal)
[submit?](#submit)

## Properties

### buttons

buttons: [DialogV2Button](foundry.DialogV2Button.md)[]

Button configuration.

### `Optional`content

content?: string | HTMLDivElement

The dialog content: a HTML string or a

element. If string,
the content is cleaned with [foundry.utils.cleanHTML](../functions/foundry.utils.cleanHTML.md).
Otherwise, the content is not cleaned.

### `Optional`modal

modal?: boolean

Modal dialogs prevent interaction with the rest of the UI until they
are dismissed or submitted.

### `Optional`submit

submit?: [DialogV2SubmitCallback](../types/foundry.DialogV2SubmitCallback.md)

A function to invoke when the dialog is submitted. This will not be
called if the dialog is dismissed.