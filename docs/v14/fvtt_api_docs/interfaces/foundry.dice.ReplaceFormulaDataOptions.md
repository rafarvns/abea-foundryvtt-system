---
title: "ReplaceFormulaDataOptions | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.dice.ReplaceFormulaDataOptions.html"
category: "interfaces"
---

# Interface ReplaceFormulaDataOptions

interface ReplaceFormulaDataOptions {  
Â Â Â Â [missing](#missing)?: string;  
Â Â Â Â [recursive](#recursive)?: boolean;  
Â Â Â Â [warn](#warn)?: boolean;  
}

##### Index

### Properties

[missing?](#missing)
[recursive?](#recursive)
[warn?](#warn)

## Properties

### `Optional`missing

missing?: string

The value that should be assigned to any unmatched keys. If undefined, the
unmatched key is left as-is.

### `Optional`recursive

recursive?: boolean

If new expressions are found after replacing "@" expressions, perform
replacement again (recursion limit of 3).

### `Optional`warn

warn?: boolean

Display a warning notification when encountering an unmatched key.