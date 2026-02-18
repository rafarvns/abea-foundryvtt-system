---
title: "Game Settings"
url: "https://foundryvtt.com/article/settings/"
category: "Game Settings"
---

Your web browser has JavaScript disabled which is required in order to properly use the foundryvtt.com website. Certain website features will be disabled or will not work as expected unless JavaScript is enabled.

This website collects anonymous data about how users interact with our website. This data provides us with
valuable insights that help us to improve our products. Some of these analytics features are non-essential
and use browser cookies.

What data we collect and information on how it is used is described in our
[Privacy Policy](/article/privacy-policy/ "Privacy Policy").

# Game Settings

## 

##### Updated January 26th, 2026 (Version 13.351)

## Overview

Foundry Virtual Tabletop features a number of configurable settings which are accessed by clicking the  **Configure Settings** button found inside the Game Settings tab ( on the sidebar). The settings here allow you to customize your FVTT experience and the way you interact with the software.

These settings differ from the [Application Configuration](/article/configuration/ "Application Configuration") settings, which are controlled by the server host.

## Setting Scopes

Settings don't apply universally for all users and worlds. How widely a setting is applied depends on its scope:

**Client Settings**
:   Client settings apply for a single browser on a single "client" device (for example, only when using Chrome on your laptop). However, they apply to any Foundry VTT World that you connect to while using it.

    Client settings are best used to control device-specific settings such as [Maximum Framerate](#maximum-framerate) and [Performance Modes](#performance-mode).

**User Settings**
:   User Settings only apply for a single User in a single World.

    This type of setting allows the user to customize their own experience in a World, regardless of the browser or client device that they are using to connect.

    **Note:** The User Setting scope is new to Version 13.

**World Settings**
:   World settings apply to a single World, but they apply universally to all users and client devices connected to that World.

Any user can always control their own Client Settings and User Settings, but only Assistant Gamemasters or users who have the Configure Settings [user permission](/article/users/#user-roles) can configure World settings.

## The Settings Tab

![The Settings Tab 20251021](https://r2.foundryvtt.com/website-uploads-public/screen/user_681/the-settings-tab-20251021-2025-10-21.webp)

The Settings tab as seen by a gamemaster, including notifications that both core software and game system updates are available.

The settings tab contains useful information about your Foundry VTT setup and lets you make changes to its configuration. Let's take a look at each section.

#### General Information

This section provides some details about your Foundry VTT instance like its version and build number as well as the installed version of your game system. When there's an update available for your system you'll also see an '!' icon. Lastly, you can see how many modules are active in your world.

Configure Settings ()
:   This buttons opens the core settings menu. For a breakdown of these options see below.

Configure Controls ()
:   This button opens the control reference where you can see all of the keyboard shortcuts Foundry uses and customize them to your preference.

Manage Modules ()
:   This button opens the module management menu where you can activate or deactivate modules by checking or unchecking them.

Edit World ()
:   This button opens the edit world menu where you can update your world's title, background image, next session date, and world description.

User Management ()
:   This button brings you to the user management screen where you can add or delete users and set their user role. For more information check out the [Users and Permissions](/article/users/ "Users and Permissions") guide.

Tour Management ()
:   This button brings you to the tour management screen where you can see, play, resume or reset all available tours in the world. For more information check out the [Tours](/article/tours/ "Tours") guide.

#### Help and Documentation

This section provides useful links for support information and to learn about how Foundry works.

Support & Issues ()
:   This button opens a support details window that contains links to our official Discord and contact form for support. It also includes useful information that can help narrow down problems quickly.  
      
    If Foundry detects an error (such as a problem with a module or invalid documents) the number of issues detected appears in the name of the button.

View Documentation ()
:   This button opens a window containing the [Foundry VTT Knowledge Base](https://foundryvtt.com/kb).

Community Wiki Pages ()
:   This button opens a window containing the [community wiki](https://foundryvtt.wiki/) for Foundry VTT.

#### Game Access

This section lets you invite players to your game and leave your world.

Invitation Links ()
:   This buttons opens the game invitation links window and gives you a local network link for people on the same network as you (e.g. people living together) and an internet link for people who are on different networks (e.g. living in different locations). It also tells you whether ports in your network that Foundry needs are open. If they're closed take a look at the [Port Forwarding](/article/port-forwarding/ "Port Forwarding") guide.

Log Out ()
:   This button will log you out of the world and return you to the Join World screen.

Return to Setup ()
:   This button will close the current game world and return Foundry to the setup screen.

## The Configure Game Settings Dialog

This dialog can be used to control all your settings in one place. You can access it by clicking the  **Configure Settings** button located at the top of the [Settings tab](#settings-tab).

In addition to the core settings that Foundry VTT provides to control how it behaves, this dialog also provides control over any additional settings added by your game system (such as [Dungeons and Dragons Fifth Edition](/packages/dnd5e/) or [Pathfinder Second Edition](/packages/pf2e/)) and by modules (such as [Dice So Nice](/packages/dice-so-nice)).

![The Configure Game Settings dialog lets you customize and configure your game.](https://r2.foundryvtt.com/website-uploads-public/screen/user_681/game-settings-configuration-game-settings-window-2025-10-20.webp)

The Configure Game Settings dialog lets you customize and configure your game.

Although there are many available settings, you can use the sidebar on the left to search or you can pick a system or module from the list to view all the settings it adds.

### Settings sub-menus

Some settings have their own sub-menus to help organize related configuration options. Notable core sub-menus include:

Configure Permissions ()
:   Opens a separate configuration menu to customize permission controls for different User roles. See the [Users and Permissions](/article/users/ "Users and Permissions") for more details.

Default Prototype Token Overrides ()
:   This button opens a separate configuration menu that allows you to automatically set properties for all tokens that you create. For details, please see [Tokens](/article/tokens/ "Tokens") article.

Changes to these game settings are only applied when the  **Save Changes** button is clicked. Some changes may cause the browser to automatically refresh.

### Notable Core Client Settings

Disable Game Canvas
:   This option, when toggled, disables the game canvas that allows for the rendering of scenes but still allows the remaining functionality of Foundry Virtual Tabletop to fully function. This is setting designed to allow for individual users with less capable computer hardware to still interact with the other aspects of Foundry Virtual Tabletop without the additional hardware requirements that the WebGL canvas involve.

Language Preference
:   Select a supported language which you would like to use for Foundry Virtual Tabletop. English is supported by default and other languages may be installed as Modules. If a translation module is installed any languages which it defines will appear as an option in this dropdown list.

Enable Chat Bubbles
:   If this setting is enabled, in-character chat messages which originate from an Actor who has a Token on the active Scene will display a chat bubble above the position of that Token for all players.

Pan to Token Speaker
:   If this setting is enabled, and Enable Chat Bubbles is also enabled, when a Token chat bubble is displayed the camera position of the Scene will automatically pan to the location of the speaking Token.

Disable Pixel Resolution Scaling
:   When this setting is enabled the software will automatically scale the canvas resolution to the pixel density of the display device. This results in a reduction in visual quality but an improvement in application performance for pixel high-density displays such as very large or super high resolution monitors.

Left-Click to Release Objects
:   When set, this object allows you to release objects (deselect) on the canvas by using a single left click anywhere on the canvas, rather than the default behavior of requiring a click-and-drag in empty space.

Performance Mode
:   This setting controls Foundry's rendering quality and can change how well the application performs on different types of hardware. More powerful systems can select high or maximum and lower-end machines can opt for low or medium.

Maximum Framerate
:   Set a maximum framerate at which the Foundry Virtual Tabletop canvas will be rendered. By default the canvas renders at 60fps, but setting a lower maximum value may be helpful to limit the resource consumption of the Foundry application on less powerful machines.

Font Size
:   This setting allows you to globally enlarge or reduce the font size in the application.

Token Vision Animation
:   When disabled, tokens will only update their vision when they arrive at the destination of their movement, rather than as they move. Disabling this setting may offer improved performance for machines with lower-end hardware.

Light Source Animation
:   This setting controls whether or not light source animations render. Disabling this setting can help performance for lower-end machines.

Zoomed Texture Antialiasing
:   By default, FVTT uses mipmap antialiasing on sprite textures such as tiles or tokens at lower levels of zoom, if disabled, textures will appear sharper when zoomed out but can look pixelated.

Editor Autosave Frequency
:   This determines the interval in seconds before the ProseMirror text editor automatically saves changes made to a text entry.

Combat Theme
:   This setting allows you to select one of multiple premade combat themes which are randomized sound effects that play when a combat encounter begins, when your turn is next in the combat order, and when your turn begins. Selecting "None" disables this feature entirely. Additional combat themes can be added via add-on modules.

### Notable world settings

Scrolling Status Text
:   When this setting is enabled, scrolling text may appear above tokens or other canvas objects when they're changed. For example: a token who has been dealt five points of damage would show a floating '-5' before fading away.

Token Drag Vision
:   When enabled, vision and lighting for a Token is previewed in real time during a left-click drag, allowing your players to preview what their token would be able to see when moved.

Animate Roll Tables
:   If this setting is enabled, Roll Tables will display a roulette-style animation when results are drawn and the Table Configuration sheet is currently open.

Cone Template Type
:   Choose which template measurement style should be used for cones. Flat cones will draw a straight line between the two outer rays while rounded cones will include a radial arc based on the angle of the cone.

## API References

For more information about working with settings programmatically, please see the following API documentation:

* The  [ClientSettings Manager](/api/classes/foundry.helpers.ClientSettings.html " ClientSettings Manager") class and its `register` function.