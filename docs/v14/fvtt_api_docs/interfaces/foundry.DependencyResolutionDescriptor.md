---
title: "DependencyResolutionDescriptor | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.DependencyResolutionDescriptor.html"
category: "interfaces"
---

# Interface DependencyResolutionDescriptor

interface DependencyResolutionDescriptor {  
Â Â Â Â [checked](#checked): boolean;  
Â Â Â Â [module](#module): Module;  
Â Â Â Â [reason](#reason)?: string;  
Â Â Â Â [required](#required)?: boolean;  
}

##### Index

### Properties

[checked](#checked)
[module](#module)
[reason?](#reason)
[required?](#required)

## Properties

### checked

checked: boolean

Has the user toggled the checked state of this dependency in this application.

### module

module: Module

The module.

### `Optional`reason

reason?: string

Some reason associated with the dependency.

### `Optional`required

required?: boolean

Whether this module is a hard requirement and cannot be unchecked.