---
title: "Adventure Documents"
url: "https://foundryvtt.com/article/adventure/"
category: "Adventure Documents"
---

Your web browser has JavaScript disabled which is required in order to properly use the foundryvtt.com website. Certain website features will be disabled or will not work as expected unless JavaScript is enabled.

This website collects anonymous data about how users interact with our website. This data provides us with
valuable insights that help us to improve our products. Some of these analytics features are non-essential
and use browser cookies.

What data we collect and information on how it is used is described in our
[Privacy Policy](/article/privacy-policy/ "Privacy Policy").

# Adventure Documents

## 

##### Updated October 20, 2025 (Version 13.350)

## Overview

The Adventure Document makes it easy to build Foundry-ready adventures and to backup your world data in its current state with just a couple of clicks. Adventures can contain all of the core Foundry types you're already familiar with like Actors, Scenes, Items and more in a single importable Document. This article will walk you through what the Adventure Document is and how to use the Adventure Builder and Importer.

## What is the Adventure Document?

It's best to think of Adventure Documents as neatly organized bundles that can store some (or all) of Foundry's Document types exactly as you have them in your World. That means that you can store Actors, Items, Scenes, Roll Tables, Journal Entries, Cards, and Playlists and they'll all remain organized in the correct folder structure when they're imported later. All of their links will even continue to work! This makes distributing and importing pre-written adventures much easier than storing them all in separate Compendium Packs.

## How do I Import From an Existing Adventure?

An Adventure Document is always stored inside a Compendium Pack, so they can be found in the Compendium sidebar menu. When you double-click an Adventure Document inside a Compendium Pack, a special dialog displays allowing you to import content from this module.

Many modules distribute their content as Adventures. If you expect to see an Adventure but it is missing, you may first need to [enable the module](https://foundryvtt.com/article/modules/) that contains that Adventure.

![Importing Content From an Adventure](https://r2.foundryvtt.com/website-uploads-public/screen/user_681/importing-content-from-an-adventure-2024-04-29.webp)

Using Foundry to Import Content From an Adventure.

To import all the Adventure's content into your world, simply open the Compendium, double-click the Adventure document, and choose the type(s) of content to import and click the "Import Adventure" button at the bottom.

### How do I Update An Existing Adventure?

It is still possible to import an adventure even if you've already imported it into your world.

**IMPORTANT**: If you re-import an Adventure into the same world again, a warning displays that existing content will be overwritten.

This can be desirable in some cases, such as when a module is updated, but be careful not to lose changes that you have made. To help ensure that you only get the changes that you want, you can opt to import only certain types of data.

![Selectively re-importing an adventure.](https://r2.foundryvtt.com/website-uploads-public/screen/user_681/selectively-reimporting-an-adventure-document-20251020-2025-10-20.webp)

Selectively re-importing an adventure.

## How do I Build My Own Adventure?

Before you can build any Adventures you'll need to have an Adventure Pack to hold them. Adventure Packs can be created as World or Module-level Packs just like other [Compendium Packs](/article/compendium/ "Compendium Packs"). Once you have an Adventure Pack ready just press the  Create Adventure button and the Adventure Builder will open.

**Do you want to distribute your Adventure?**  
It's important to know that your media files are not included in the Adventure and will still link to their source in your data folders. Therefore, if you want to include images, videos, audio, or other files you'll want to place those files in your Module's folder and then create your Scenes, Actors, etc. using those files. See "Asset Staging" in the [Content Packaging Guide](/article/packaging-guide/ "Content Packaging Guide") for more info on this.

## Creating an Adventure

![Demon Queen Awakens Adventure Summary](https://r2.foundryvtt.com/website-uploads-public/screen/user_70/demon-queen-awakens-adventure-summary-2022-09-26.webp)

The Adventure Document's Summary Tab.

Creating an Adventure is as simple as filling out a form with some important data.

![Adventure Empty Content Tab](https://r2.foundryvtt.com/website-uploads-public/screen/user_70/adventure-empty-content-tab-2022-09-26.webp)

The Adventure Document's Contents Tab.

1. Open the  Compendium Tab in the sidebar.
2. Open your Adventure Pack and click the  Create Adventure button.
3. The  Summary Tab contains the following fields:

Adventure Name
:   The name you'd like this Adventure to have, like "Demon Queen Awakens" or "Back Up - 2022/10/16".

Banner Image
:   The path to a piece of artwork to use as a banner when someone is importing the Adventure.

Banner Caption
:   A caption that will appear underneath the banner image.

Adventure Description
:   A short description of the Adventure, usually a few sentences of narrative text and a list of what the adventure contains.

Sort Order
:   When multiple Adventures are available within the same Pack, this number determines the order in which they are displayed.

1. The  Contents Tab contains an area where you can drop Documents (like Actors, Items, Journals, etc.), or Folders of Documents, to add them to your Adventure. These Documents will keep their unique IDs, so that when they are imported later they will overwrite any existing copies with the same ID.
2. Once you have added everything you wish to add, at least for now, click  Build Adventure and Foundry will handle the rest!

Once you've added all of the content you wish to include in the Adventure, it is possible to distribute that Adventure Pack the same as an Add-on Module by following the [Content Packaging Guide](/article/packaging-guide/ "Content Packaging Guide"), you can rebuild the Adventure. This will create a new Compendium Pack for each Folder in the Adventure, and will populate each Compendium Pack with the Documents that were included in the Adventure. This process is described in more detail below.

## Rebuilding an Adventure

![Add Remove Contents from Adventure](https://r2.foundryvtt.com/website-uploads-public/screen/user_70/add-remove-contents-from-adventure-2022-09-26.webp)

Editing the Adventure Document's Contents.

Once you have packed an Adventure you can still easily edit it, adding, removing or changing content as needed. In the event you want change an already built adventure, follow these steps:

1. Open your Adventure Pack, right-click on your Adventure and choose  Rebuild Adventure.
2. Edit your Adventure's  Summary or  Contents to reflect whatever changes you need. This is identical to the way you set it originally.
3. In the  Contents Tab, you will see a list of everything your adventure currently contains. This will provide a summary of change. Documents that have been removed from the adventure are marked in red, while newly added Documents in the adventure are marked in green. This allows you to more easily determine what the differences will be between the previous Adventure and your Rebuild. Ensure that there are no unexpected changes here before you rebuild!
4. Once you've made all of your changes simply click  Build Adventure again and it will overwrite your current Adventure Document with the new changes.

Everything in an Adventure is replaced each time you rebuild it. That means, if you've made changes to any of the Documents in your world that are included in the Adventure they will overwrite the versions currently in the Adventure every time you press  Build Adventure. This *also* means if any Documents are missing in the World they will be removed from the Adventure.

## Make Your Adventure Quick-Start Compatible

![Quick Start Adventure Example](https://r2.foundryvtt.com/website-uploads-public/screen/user_70/quick-start-adventure-example-2026-04-14.webp)

An example showing the Demon Queen Awakens quick-start adventure

[Quick-start adventure](https://github.com/foundryvtt/foundryvtt/issues/10187) support was added in V14. When a user creates a World any registered quick-start adventures will appear as options to populate it. This helps gamemasters skip the step of activating a module and importing the adventure when they're getting started. Here is an example of a complete quick-start adventure registration (though most of these fields are not necessary) which can be added to your `module.json` file:

```
"quickstart": {
    "adventures": {"dnd5e": uuid.of.the.5e.adventure, "pf2e": uuid.of.the.pf2e.adventure}
    "postImport": true,
    "world": {
        "background": "modules/your-modules-id/assets/background.webp",
        "cover": "modules/your-modules-id/assets/thumb.webp"
    }
}
```

It is not necessary to fill out any of these fields beyond `"quickstart": {}` however. If you don't fill anything else out Foundry will show all of the adventures in your module (filtered by the user's selected system) and grab the image from the chosen Adventure for the World background and cover images. The `postImport` field details whether the module has post-import actions to take. It will prevent any non-GM from joining the World until a GM user has joined once and allowed the post-import operations to run. You can learn more about handling `postImport` features [here](https://github.com/foundryvtt/foundryvtt/issues/10187).

## Packaging Your Adventure for Distribution.

Adventures can be distributed in a module just like any other content by following the [Content Packaging Guide](/article/packaging-guide/ "Content Packaging Guide").