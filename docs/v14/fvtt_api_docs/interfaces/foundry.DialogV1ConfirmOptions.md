---
title: "DialogV1ConfirmOptions | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.DialogV1ConfirmOptions.html"
category: "interfaces"
---

# Interface DialogV1ConfirmOptions

interface DialogV1ConfirmOptions {  
Â Â Â Â [defaultYes](#defaultyes)?: boolean;  
Â Â Â Â [no](#no)?: Function;  
Â Â Â Â [rejectClose](#rejectclose)?: boolean;  
Â Â Â Â [yes](#yes)?: Function;  
}

##### Index

### Properties

[defaultYes?](#defaultyes)
[no?](#no)
[rejectClose?](#rejectclose)
[yes?](#yes)

## Properties

### `Optional`defaultYes

defaultYes?: boolean

Make "yes" the default choice?

### `Optional`no

no?: Function

Callback function upon no

### `Optional`rejectClose

rejectClose?: boolean

Reject the Promise if the Dialog is closed without making a choice.

### `Optional`yes

yes?: Function

Callback function upon yes