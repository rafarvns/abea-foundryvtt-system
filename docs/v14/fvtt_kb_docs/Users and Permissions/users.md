---
title: "Users and Permissions"
url: "https://foundryvtt.com/article/users/"
category: "Users and Permissions"
---

Your web browser has JavaScript disabled which is required in order to properly use the foundryvtt.com website. Certain website features will be disabled or will not work as expected unless JavaScript is enabled.

This website collects anonymous data about how users interact with our website. This data provides us with
valuable insights that help us to improve our products. Some of these analytics features are non-essential
and use browser cookies.

What data we collect and information on how it is used is described in our
[Privacy Policy](/article/privacy-policy/ "Privacy Policy").

# Users and Permissions

## 

##### Updated October 20, 2025 (Version 13.350)

## Overview

Each player who connects to a Foundry Virtual Tabletop session is a User. Each user is assigned a role which determines what the user has permission to do within the confines of the game world. Permissions can be configured in order to more finely control the features available to users in any hosted World. Foundry VTT has two tiers of permission settings which can be configured to allow as much or as little restriction as needed for your game and your users.

Role Permissions
:   Chosen when setting up player accounts to assign use a configured set of default permissions for that account type in the Game World.

Document Permissions
:   Assigned to each actor, item, journal entry or other document to allow users to access documents. Document permissions control how a specific user may interact with that document.

## User Management

As one of several layers of security for Foundry, we strongly recommend setting at least a simple password for each user, especially for GM-level users.

![Getting Started - User Management](https://r2.foundryvtt.com/website-uploads-public/screen/user_681/getting-started-user-management-2025-07-25.webp)

The User Management screen allows you to create, modify, and delete User accounts from your Game World.

Users are created within an active Game World, and the set of users is specific to that world. There are no global, cross-world, user accounts within Foundry VTT, each World maintains it's own player list and user-level permission controls.

To manage a world's users, click the Game Settings icon () on the right sidebar, and then click on  **User Management**. This will take you to the user management screen. From here you can add new users, remove existing users, change passwords, and change roles.

#### Configuration Elements

User Name
:   Displays the current user's name which is shown in the dropdown list on the game login page and in the players panel.

Password
:   Sets or changes the user's password. Newly created users do not start with a password and must be given one. Although Foundry does not require setting a password for each user, it is highly recommended.

User Role
:   This dropdown allows you to select what role you want the user to have. All newly created users start with the Player role. Roles are detailed further down in this article.

Delete User ()
:   This button deletes the associated user. You will be prompted to confirm deletion when this function is used.

Create Additional User ()
:   This creates a generic user in a new slot named "Player" plus a number (i.e. "Player 1") with the default role of Player, which has limited permissions and ability to access tools. New users do not start with a password, though one can be added if desired.

Configure Permissions ()
:   Opens the User Permission Management screen which determines what each user role can do. This panel is detailed further down in this article.

Save and Return ()
:   Saves the User Configuration panel as it currently is, and reloads the world to apply the changes.

User Roles

![Default role permissions](https://r2.foundryvtt.com/website-uploads-public/screen/user_681/role-permission-defaults-2025-07-25.webp)

The default role permissions for all roles.

Each User has a specific **role** which configures their basic permission set of actions they can perform within a Foundry VTT game. The role for each User is configured using the **User Management** page described above. Each of the role levels and their meanings are described below:

**None**
:   The User is blocked from taking actions in Foundry Virtual Tabletop. You can use this role to temporarily or permanently ban a user from joining the game.

**Player**
:   The User is able to join the game with permissions available to a standard player. They cannot take some more advanced actions which require Trusted permissions, but they have the basic functionalities needed to operate in the virtual tabletop.

**Trusted**
:   Similar to the Player role, except a Trusted User has the ability to perform some more advanced actions like create drawings, measured templates, or even to (optionally) upload media files to the server.

**Game Master**
:   A special User who has administrative control over this specific World. Game Masters behave quite differently than Players in that they have the ability to see all Documents and Objects within the world as well as the capability to configure World settings.

**Assistant**
:   A special User who has many of the same in-game controls as a Game Master User, but does not have the ability to perform administrative actions like modifying World-level settings.

Ownership Configuration

![Getting Started - Actor Permissions](https://r2.foundryvtt.com/website-uploads-public/screen/user_681/getting-started-actor-permissions-2025-07-25.webp)

The Document Permission Configuration window lets you determine who has control of a document and its data.

Many components of Foundry VTT including Actors, Items, Journals, Roll Tables, and Cards have ownership permissions that control how users interact with them. You can change these settings by right clicking them in the main sidebar directory and choosing () **Configure Ownership** to open their configuration dialog. By default all of the listed document types begin with no ownership settings, and are only visible and editable by gamemaster accounts.

The following ownership levels are always available, but the exact behavior changes depending on the type of document As a general rule, the following guidelines apply:

None
:   Typically restricts the associated document so that it may not be seen by this user at all.

Limited
:   Typically allows the user to interact with the document in basic ways, allowing them to see it in sidebars and see only limited aspects of its contents. The limits of this interaction are defined by the type of document and the game
    system.

Observer
:   Typically allows the user to view this document as if they were owner, but prevents them from making any changes to it.

Owner
:   GMs always own every document. Ownership typically allows the user to view and make changes to the document as its owner. Even owned documents cannot be deleted by anyone other than a gamemaster level user unless special permissions are granted (see [User Roles](#user-roles) for more information ).

User Configuration

![Player Configuration](https://r2.foundryvtt.com/website-uploads-public/screen/user_681/player-configuration-2025-07-25.webp)

The Player Configuration application allows a player to choose their preferred character and other User-specific settings.

Right clicking on a username in the players list located in the bottom-left of the UI allows you to open the  **User Configuration** panel. If you are a user with the player or trusted player role you can only open your own user configuration, but gamemasters and assistant gamemasters can configure any user they want. This user configuration window allows that user to have an actor assigned to them, and determines a few other cosmetic settings.

Player Avatar
:   Allows the user to select an optional image that is used in various places around the Foundry VTT user interface.

Player Color
:   Allows the user to select what color the dot next to their name is. This also affects the color of their cursor, their drawings, and various other small aspects of the user interface. A color is randomly assigned to each newly created user.

Select Character
:   Allows the user to select one of the actors they have permission to control. This associates that actor with them as their default actor. Users can have multiple actors they have control or oversight with, but only one may be their default actor.

## API References

To interact with Users programmatically, consult [this list of relevant API concepts](/api/#user).