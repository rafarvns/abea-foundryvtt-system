---
title: "DialogData | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.DialogData.html"
category: "interfaces"
---

# Interface DialogData

interface DialogData {  
Â Â Â Â [buttons](#buttons): Record<string, [DialogV1Button](foundry.DialogV1Button.md)>;  
Â Â Â Â [close](#close)?: (arg0: jQuery) => any;  
Â Â Â Â [content](#content): string;  
Â Â Â Â [default](#default)?: string;  
Â Â Â Â [render](#render)?: (arg0: jQuery) => any;  
Â Â Â Â [title](#title): string;  
}

##### Index

### Properties

[buttons](#buttons)
[close?](#close)
[content](#content)
[default?](#default)
[render?](#render)
[title](#title)

## Properties

### buttons

buttons: Record<string, [DialogV1Button](foundry.DialogV1Button.md)>

The buttons which are displayed as action choices for the dialog

### `Optional`close

close?: (arg0: jQuery) => any

Common callback operations to perform when the dialog is closed

### content

content: string

HTML content for the dialog form

### `Optional`default

default?: string

The name of the default button which should be triggered on Enter keypress

### `Optional`render

render?: (arg0: jQuery) => any

A callback function invoked when the dialog is rendered

### title

title: string

The window title displayed in the dialog header