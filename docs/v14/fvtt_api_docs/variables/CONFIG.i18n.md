---
title: "i18n | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/variables/CONFIG.i18n.html"
category: "variables"
---

# Variable i18n`Const`

i18n: { searchMinimumCharacterLength: number; searchStopWords: Set<string> } = ...

Localization constants.

#### Type Declaration

* ##### searchMinimumCharacterLength: number

  In operations involving the document index, search prefixes must have at least this many characters to avoid too
  large a search space. Languages that have hundreds or thousands of characters will typically have very shallow
  search trees, so it should be safe to lower this number in those cases.
* ##### searchStopWords: Set<string>

  Stop words used in Document and other textual searches