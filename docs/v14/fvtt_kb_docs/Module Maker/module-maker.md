---
title: "Module Maker"
url: "https://foundryvtt.com/article/module-maker/"
category: "Module Maker"
---

Your web browser has JavaScript disabled which is required in order to properly use the foundryvtt.com website. Certain website features will be disabled or will not work as expected unless JavaScript is enabled.

This website collects anonymous data about how users interact with our website. This data provides us with
valuable insights that help us to improve our products. Some of these analytics features are non-essential
and use browser cookies.

What data we collect and information on how it is used is described in our
[Privacy Policy](/article/privacy-policy/ "Privacy Policy").

# Module Maker

## 

## Overview

The module maker is a tool for creating modules easily and quickly. These modules can be the basis for more advanced development, or simply to contain compendia to be shared between game worlds easily. For more on what modules are and how to manage them, see [Module Management](/article/modules/ "Module Management"). For more on developing modules with special features see [Introduction to Development](/article/intro-development/ "Introduction to Development").

## Creating a New Module

To create a new module, follow these steps:

1. Navigate to the  **Add-On Modules** tab in the main menus.
2. Click on the  **Create Module** button to open the configuration panel.
3. Fill out the module information. Information on these options is provided below.
4. Click the orange  **Create Module** Create Module button to finish the process.
5. You will receive a message indicating the module has been completed!

All created modules are stored in your user data folders. For information on where your data is stored see [Application Configuration](/article/configuration/ "Application Configuration").

#### Editing Existing Modules

You can edit any module by right clicking on the module in the Add-on Modules listing and choosing the  **Edit Module** button. This will open the editor and let you change the fields of the module. If you choose to edit a module that was installed from the official repository, you will receive a warning that doing so may disrupt the module's function, or prevent future updates. If this happens, you can uninstall and reinstall the module to restore the original settings after you've edited them. However this will cause any changes to be discarded.

## Module Creation Options

When creating a module, there are four tabs of configuration options which need to be filled out. These tabs are: Basic Details, Authors, Compendium Packs, and Relationships. These tabs and their details are explained below.

### Basic Details

These details make up your module's manifest, which tells Foundry VTT how to handle the package when it's loaded.

Basic Configuration

![Module Maker - Basic Details](https://r2.foundryvtt.com/website-uploads-public/screen/user_1294/module-maker-basic-details-2023-06-27.png)

The basic details panel which set the fundamental aspects of the module's manifest.

Package Title
:   This is the title of your module which will appear in the Foundry VTT menus, defaults to "My New Module" but can be anything you want.

Package Identifier
:   This is the name of the folder where your module will be created, and and needs to be an alphanumeric string with no special characters except for hypens. This defaults to "my-new-module" but should be similar to the title of your module for easy identification of the folder in the data folders.

Package Version
:   This field allows you to set the initial version of the package. This can be changed later by editing the manifest file inside the module folder.

Package URL
:   This is a URL which links to a website with more information on your module. This field is optional.

Package Description
:   The description should give a summary of the module and its contents or function. The description can be plain text or formatted HTML.

#### Optional: Compatibility

This optional section allows you to set the compatible versions of Foundry VTT which the module will function with. Compatibility can be declared by specific build versions such as "11.294" for Foundry V11 build 294, or broadly by generation of the software, like "11" for Foundry V11 as a whole. These compatibility options are used to display compability warning badges to help users determine if a module is likely to work with their version of the software or not.

Minimum Version
:   This is generally a specific generation of the software (10, 11, 12, etc.) which is the minimum generation of the software which the module will work with. This defaults to the generation of the software you're using when you create the module (11 for V11 at the time of writing). Users under this version will be given a compatibility warning.

Verified Version
:   The verified version of the module gives a specific, declared Foundry VTT version which the module will work with. Users on a higher version will be considered compatible, while users with a lower version number in the same generation will get a compability warning.

Maximum Version
:   Similar to minimum version, this determines the highest version of the software which this module is expected to work with. Users past this version will receive a comatibility warning.

### Authors

Authors are an optional part of a module, but highly recommended for proper attribution.

To add new author to a module, click the  **Add User** button. This creates a new blank author for you to fill out. You can remove authors by clicking the  button in the upper right of the author card.

Author Configuration

![Module Maker - Authors](https://r2.foundryvtt.com/website-uploads-public/screen/user_1294/module-maker-authors-2023-06-27.png)

The authors panel which allows you to give credit to one or more module contributors.

Author Name
:   The name of the author, either their full name, or online handle.

Discord Unsername
:   The author's discord username, provided so that they can be contacted by other members of the Foundry VTT community.

Email Address
:   The author's email address, provided so that they can receive emails from users.

Website URL
:   The author's website address, which can provide more information about them and their work.

### Compendium Packs

Modules can be used to contain compendia, which are archives of information which can be imported into game worlds. The most common use for modules, especially locally created ones, is to contain this data for use across worlds, or to store it for later reference without having it use up valuable memory better suited to assets actively in use. For more on what compendium packs are and what they are used for, please see [Compendium Packs](/article/compendium/ "Compendium Packs").

To add a new compendium pack to a module, click the  **Add Compendium Pack** button. This will create a blank compendium in the module and allow you to set the details for it. Compendia can be edited along with with all other details of a module. You can remove a compendium pack from a module by clicking the  **Remove Compendium Pack** button found in the upper right corner of the compendium pack's info panel.

Note that deleting a compendium with data in it will cause the contained data to be lost as well.

Compendium Configuration

![Module Maker - Compendium Packs](https://r2.foundryvtt.com/website-uploads-public/screen/user_1294/module-maker-compendium-packs-2023-06-27.png)

The compendium Packs panel which allows you to add compendia to a module.

Label
:   The name of the compendium as it will appear in the compendium pack sidebar inside the game world.

Name
:   The identifier name of the pack which is used internally by the software to keep track of the compendium and its contents. This must be an alphanumeric string, and can contain hyphens. The name of a compendium cannot be changed once the compendium pack has been saved to the module.

Document Type
:   The type of documents that will be contained in the pack. Changing this while the compendium contains documents of a different type will cause that data to be lost.

Required System
:   If your compendium document type is set to Actor, Item, or Adventure, then you must also select a system which these documents are meant to be compatible with. The dropdown list is populated from all of the game systems you have installed.

Visible to GM Only
:   Determines if only the GM can see this compendium, or if all users can look at the compendium pack's contents.

### Relationships

Relationships are an optional part of modules which determine what other modules are needed for the module to function, or which are known to cause issues with it.

To add a new relationship to a module, click the  **Add Relationship** button. This will create a blank compendium in the module and allow you to set the details for it. Compendia can be edited along with with all other details of a module. You can remove a compendium pack from a module by clicking the  **Remove Compendium Pack** button found in the upper right corner of the compendium pack's info panel.

Relationship Configuration

![Module Maker - Relationships](https://r2.foundryvtt.com/website-uploads-public/screen/user_1294/module-maker-relationships-2023-06-27.png)

The relationship panel which lets you set which modules are required, recommended, or known to conflict.

Related Package
:   This dropdown list allows you to pick a system of module from any of those installed on your Foundry VTT server.

Relationship Category
:   The relationships type determines how Foundry treats the relationship, and what information it gives to users.

    * **Required** modules are needed for the module to function, and are prompted to install when the module is installed, and are activated alongside the module in a game world.
    * **Recommended** modules are optional modules which the user will be prompted to install if they choose.
    * **Known Conflict** modules are given to warn users of incompatibilities between multiple modules, often because they modify the same parts of the game system, game world, or software.