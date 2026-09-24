---
title: "handlebars | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/modules/foundry.applications.handlebars.html"
category: "modules"
---

# Namespace handlebars

Additional information on Handlebars inside of Foundry.
This page lists the Foundry additions to handlebars helpers. You should also familiarize yourself with the baseline functionality of Handlebars through its [documentation](https://handlebarsjs.com/guide/).

### Additional Helpers

In addition to the functions listed on this page, Foundry registers a number of simple helpers that are also available. These helpers should not be seen as a substitute for context preparation; it is generally better to perform necessary calculations inside your `_prepareContext` or `_preparePartContext` methods.

```
eq: (v1, v2) => v1 === v2,  
ne: (v1, v2) => v1 !== v2,  
lt: (v1, v2) => v1 < v2,  
gt: (v1, v2) => v1 > v2,  
lte: (v1, v2) => v1 <= v2,  
gte: (v1, v2) => v1 >= v2,  
not: pred => !pred,  
and() {return Array.prototype.every.call(arguments, Boolean);},  
or() {return Array.prototype.slice.call(arguments, 0, -1).some(Boolean);}
Copy
```

## Interfaces

[SelectOptionsHelperOptions](../interfaces/foundry.applications.handlebars.SelectOptionsHelperOptions.md)

## Functions

[checked](../functions/foundry.applications.handlebars.checked.md)

[concat](../functions/foundry.applications.handlebars.concat.md)

[disabled](../functions/foundry.applications.handlebars.disabled.md)

[editor](../functions/foundry.applications.handlebars.editor.md)

[formGroup](../functions/foundry.applications.handlebars.formGroup.md)

[formInput](../functions/foundry.applications.handlebars.formInput.md)

[getTemplate](../functions/foundry.applications.handlebars.getTemplate.md)

[ifThen](../functions/foundry.applications.handlebars.ifThen.md)

[initialize](../functions/foundry.applications.handlebars.initialize.md)

[loadTemplates](../functions/foundry.applications.handlebars.loadTemplates.md)

[localize](../functions/foundry.applications.handlebars.localize.md)

[numberFormat](../functions/foundry.applications.handlebars.numberFormat.md)

[numberInput](../functions/foundry.applications.handlebars.numberInput.md)

[object](../functions/foundry.applications.handlebars.object.md)

[radioBoxes](../functions/foundry.applications.handlebars.radioBoxes.md)

[renderTemplate](../functions/foundry.applications.handlebars.renderTemplate.md)

[selectOptions](../functions/foundry.applications.handlebars.selectOptions.md)