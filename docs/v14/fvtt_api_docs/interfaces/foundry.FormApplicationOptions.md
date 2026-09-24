---
title: "FormApplicationOptions | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.FormApplicationOptions.html"
category: "interfaces"
---

# Interface FormApplicationOptions

interface FormApplicationOptions {  
Â Â Â Â [closeOnSubmit](#closeonsubmit)?: boolean;  
Â Â Â Â [editable](#editable)?: boolean;  
Â Â Â Â [sheetConfig](#sheetconfig)?: boolean;  
Â Â Â Â [submitOnChange](#submitonchange)?: boolean;  
Â Â Â Â [submitOnClose](#submitonclose)?: boolean;  
}

##### Index

### Properties

[closeOnSubmit?](#closeonsubmit)
[editable?](#editable)
[sheetConfig?](#sheetconfig)
[submitOnChange?](#submitonchange)
[submitOnClose?](#submitonclose)

## Properties

### `Optional`closeOnSubmit

closeOnSubmit?: boolean

Whether to automatically close the application when it's contained
form is submitted.

### `Optional`editable

editable?: boolean

Whether the application form is editable - if true, it's fields will
be unlocked and the form can be submitted. If false, all form fields
will be disabled and the form cannot be submitted.

### `Optional`sheetConfig

sheetConfig?: boolean

Support configuration of the sheet type used for this application.

### `Optional`submitOnChange

submitOnChange?: boolean

Whether to automatically submit the contained HTML form when an input
or select element is changed.

### `Optional`submitOnClose

submitOnClose?: boolean

Whether to automatically submit the contained HTML form when the
application window is manually closed.