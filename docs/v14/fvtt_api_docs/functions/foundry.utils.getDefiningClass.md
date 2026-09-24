---
title: "getDefiningClass | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/foundry.utils.getDefiningClass.html"
category: "functions"
---

# Function getDefiningClass

* getDefiningClass(obj: any, property: string): Constructor<Object>

  Search up the prototype chain and return the class that defines the given property.

  #### Parameters

  + obj: any

    A class instance or class definition which contains a property.
    If a class instance is passed the property is treated as an instance attribute.
    If a class constructor is passed the property is treated as a static attribute.
  + property: string

    The property name

  #### Returns Constructor<Object>

  The class that defines the property