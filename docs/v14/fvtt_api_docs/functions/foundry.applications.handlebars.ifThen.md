---
title: "ifThen | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/foundry.applications.handlebars.ifThen.html"
category: "functions"
---

# Function ifThen

* ifThen(criteria: boolean, ifTrue: string, ifFalse: string): string

  A ternary expression that allows inserting A or B depending on the value of C.

  #### Parameters

  + criteria: boolean

    The test criteria
  + ifTrue: string

    The string to output if true
  + ifFalse: string

    The string to output if false

  #### Returns string

  The ternary result

  #### Example: Ternary if-then template usage

  ```
  {{ifThen true "It is true" "It is false"}}
  Copy
  ```