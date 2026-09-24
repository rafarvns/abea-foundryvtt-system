---
title: "UserData | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.documents.types.UserData.html"
category: "interfaces"
---

# Interface UserData

interface UserData {  
Â Â Â Â [\_id](#_id): string | null;  
Â Â Â Â [\_stats](#_stats): [DocumentStats](foundry.data.types.DocumentStats.md);  
Â Â Â Â [avatar](#avatar): string | null;  
Â Â Â Â [character](#character): string;  
Â Â Â Â [color](#color): string;  
Â Â Â Â [flags](#flags): [DocumentFlags](../types/foundry.data.types.DocumentFlags.md);  
Â Â Â Â [hotbar](#hotbar): object;  
Â Â Â Â [name](#name): string;  
Â Â Â Â [password](#password): string;  
Â Â Â Â [passwordSalt](#passwordsalt): string;  
Â Â Â Â [permissions](#permissions): object;  
Â Â Â Â [pronouns](#pronouns): string;  
Â Â Â Â [role](#role): number;  
}

##### Index

### Properties

[\_id](#_id)
[\_stats](#_stats)
[avatar](#avatar)
[character](#character)
[color](#color)
[flags](#flags)
[hotbar](#hotbar)
[name](#name)
[password](#password)
[passwordSalt](#passwordsalt)
[permissions](#permissions)
[pronouns](#pronouns)
[role](#role)

## Properties

### \_id

\_id: string | null

The \_id which uniquely identifies this User document.

### \_stats

\_stats: [DocumentStats](foundry.data.types.DocumentStats.md)

An object of creation and access information

### avatar

avatar: string | null

The user's avatar image.

### character

character: string

A linked Actor document that is this user's impersonated character.

### color

color: string

A color to represent this user.

### flags

flags: [DocumentFlags](../types/foundry.data.types.DocumentFlags.md)

An object of optional key/value flags

### hotbar

hotbar: object

A mapping of hotbar slot number to Macro id for the user.

### name

name: string

The user's name.

### password

password: string

The user's password. Available only on the Server side for security.

### passwordSalt

passwordSalt: string

The user's password salt. Available only on the Server side for security.

### permissions

permissions: object

The user's individual permission configuration, see CONST.USER\_PERMISSIONS.

### pronouns

pronouns: string

The user's personal pronouns.

### role

role: number

The user's role, see CONST.USER\_ROLES.