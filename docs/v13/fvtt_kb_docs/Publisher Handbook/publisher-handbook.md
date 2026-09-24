---
title: "Publisher Handbook"
url: "https://foundryvtt.com/article/publisher-handbook/"
category: "Publisher Handbook"
---

Your web browser has JavaScript disabled which is required in order to properly use the foundryvtt.com website. Certain website features will be disabled or will not work as expected unless JavaScript is enabled.

This website collects anonymous data about how users interact with our website. This data provides us with
valuable insights that help us to improve our products. Some of these analytics features are non-essential
and use browser cookies.

What data we collect and information on how it is used is described in our
[Privacy Policy](/article/privacy-policy/ "Privacy Policy").

# Publisher Handbook

## 

Thank you for your interest in selling premium Foundry VTT content! We want selling content for Foundry VTT to be easy, so here's some information that can help you:

How can I publish premium Foundry VTT content?

## Self-Publishing

As part of our [End User License Agreement](https://foundryvtt.com/article/license/) you are allowed to create, publish, and sell content that is designed for Foundry Virtual Tabletop without any need for additional agreements, contracts, or fees. You can create a game system, add-on module, or pre-built world that can be packaged for distribution to Foundry VTT users.

This is the easiest option which may be suitable for smaller or independent creators who want the freedom and autonomy to create and publish their own content however or wherever they wish. This option doesn't require any agreement documents between us, you can simply do it.

Important: This option **is not** secured by our Premium Content System which prevents users who have not purchased your content from installing it and does not get formally announced to our Discord community.

## Premium Content Partnership

If you would like your content protected by our Premium Content System we have lots of great options available whether you want to sell through marketplaces like DriveThruRPG, [Itch.io](http://Itch.io), your own web store, or even through Patreon!

Users who purchase your content will be granted a content key that will let them install your module directly in Foundry VTT and prevent other users from accessing it. If you make your content available through Patreon you can select the tiers that should have access to each package and your users will be able to link their Patreon account to their Foundry account to get access to all of the content their tier entitles them to.

You’re able to mix-and match how you want to provide content as well. If you’d like to sell some modules for a one-time fee or make them available to your Patrons you can do that easily.

To find out more about how things work, check out a copy of our Premium Content Agreement, and learn about the small fee we charge for using our Premium Content System please [reach out to us](mailto:matt@foundryvtt.com).

The following FAQs are intended for publishers who are using our Premium Content System:

What's the best way to package my content?

A Module that contains one or more [Compendium Packs](https://foundryvtt.com/article/compendiums) is a great way to distribute your content. For instance, if you created some audio content, a Module that includes a Compendium of Playlists would be a great way to distribute your work. Using this method, the latest version of your content is stored and updated in a single location. Users can then easily access that content within any World by enabling the Module.

For more complicated content, such as finished Scenes with Tokens placed in them or even complete, pre-packaged adventures, an [Adventure Compendium Pack](https://foundryvtt.com/article/adventure/) is a great solution to distribute your content.

Before Adventure Compendium Packs were implemented, content creators often created and distributed pre-packaged Worlds. This approach is no longer recommended.

For more information about how to package your content into a Module, please see our [Content Packaging Guide](https://foundryvtt.com/article/packaging-guide).

What's the process for releasing a module?

Whether you're using our Patreon integration, DriveThruRPG, or selling in your own web store here's the workflow to release a new module for sale on Foundry VTT:

1. **Create the module.** You can [reach out to us](mailto:matt@foundryvtt.com) for recommendations on contractors who can handle this work or if you'll be working on the module you should check out our [Content Packaging Guide](https://foundryvtt.com/article/packaging-guide/) which breaks down how to make a Foundry VTT module and check out our guide on using the [Adventure Documents](/article/adventure/ "Adventure Documents") to make it easy for your customers to use your content in their world.
2. **Get a Package page.** Ensure that you're logged into an account that is part of your Content Provider and submit your package to us [here](https://foundryvtt.com/packages/submit). Make sure that you check the "Is this premium content" option and select your Content Provider from the dropdown. You can see all of the packages you can manage by logging into the website and visiting [your account's Packages page](https://foundryvtt.com/me/packages/).
3. **Upload the module.** Once the module is finished and the Package page is filled out you'll want to upload the module. If we're hosting it for you, you can upload the module using our [Upload Tool](https://foundryvtt.com/creators/upload). This will automatically add a release for the module. If it hasn't been approved it won't be available for installation just yet, but once it has any update you upload using the Upload Tool will be immediately available.

   Make sure your `module.json` is [configured correctly](#premium-module-fields) before you upload it. If there are any issues with your module, the Upload Tool will let you know and either you or your developer can make a change to fix it and re-upload. If you're not sure what's happening feel free to [reach out to us](mailto:matt@foundryvtt.com).
4. **Get content keys.** If you're only selling content through Patreon, DriveThruRPG, or you're using our API to generate Content Keys you can skip this part. If you're distributing Content Keys to users from a pool on your web store, through a marketplace like [Itch.io](http://Itch.io), or to backers using a tool like Backer Kit you can [reach out to us](mailto:matt@foundryvtt.com) with the ID of your module and we'll get you a pool of keys.
5. **Release and announce the module.** Now for the good part! Let us know that everything is done and we can discuss when you'd like it to go live. We can release a module whenever you're ready and we'll find the nearest free slot in our announcement schedule to share it with our Discord community.

How do I get content keys for my module? Can I get some keys for testing and promotion?

Content providers who have signed a Premium Content Agreement with us can access our [key generator](https://foundryvtt.com/creators/generate-keys) to create a pool of sellable public keys and internal testing and promotional keys. Here's how the tool works:

1. Select the package you'd like to generate keys for from the Package dropdown.
2. Enter the number of public sellable keys you would like to generate in the Keys field.
3. Enter the number of test/promotional keys you would like to generate in the Internal Keys field.
4. Press the Generate Keys button.

The tool will generate a CSV file for each type of key containing the generated pool which you can then send out to backers, add to a webstore, or give to employees for internal use.

You will only be able to generate Content Keys for a Module that has 25% or less of its key pool remaining. If you need additional keys for something like a Kickstarter please [reach out to us](mailto:matt@foundryvtt.com).

How do I upload my module?

Make sure that your `module.json` is [configured correctly](#premium-module-fields). Then, just zip up your module and use our [Upload Tool](https://foundryvtt.com/creators/upload).

The uploader will let you know if there are any issues and either you or your developer can make a change to fix it and re-upload. If you're not sure what's happening feel free to [reach out to us](mailto:matt@foundryvtt.com).

How do I sell my content on DriveThruRPG?

You'll need a OneBookShelf Authorization Key. [Reach out to us](mailto:matt@foundryvtt.com) and we'll get you one. In the meantime you can check out DriveThruRPG's [guide](https://help.drivethrupartners.com/hc/en-us/articles/12780761412503-How-do-I-sell-Foundry-VTT-premium-content-on-DriveThru "How to sell Foundry VTT Modules on DTRPG") to learn how to set up the product page on their side and connect it to your Foundry VTT module.

How do I make content available via Patreon?

It's easy to make your content available to Patrons and you can even control which tiers have access to each of your modules with our Patreon Integration which is part of our Premium Content System. [Reach out to us](mailto:matt@foundryvtt.com) and we can share some information about the Premium Content System and your next steps to get started.

How do my customers activate and install their content?

We have an easy to follow [guide](https://foundryvtt.com/article/premium-content/) that walks users through activating their content on the Foundry VTT website and installing it in Foundry VTT.

How should my module.json manifest file be configured?

You can learn the basics of how a `module.json` should be configured in our [Content Packaging Guide](https://foundryvtt.com/article/packaging-guide/). There's only three things you need to make sure are included to make it work with our Premium Content System:

* If we’re hosting the module for you set the `manifest` field to be `https://r2.foundryvtt.com/packages-public/{packageID}/module.json` where `{packageID}` is the ID of your package.
* Add `"protected": true` as a field.
* Ensure there is no `download` field.

In the end, your module should have *at least* these fields:

```
{
    "id": "your-modules-name",
    "title": "Your Module's Name",
    "manifest": "https://r2.foundryvtt.com/packages-public/your-modules-name/module.json",
    "protected": true
}
```

Important: Once you’ve added the protected field the module will no longer appear in your Foundry installation. While developing your module, keep `"protected": false` and change it at the end when you are ready to release the content.

Can you support refunds? Can keys be revoked?

Absolutely! After you've approved a refund for a user it's easy to revoke their Content Key. If you're not using our API to automatically revoke Content Keys we have an easy to use [Key Revoker](https://foundryvtt.com/creators/revoke-key). Here's how to use it:

1. While logged in, go to the [Key Revoker](https://foundryvtt.com/creators/revoke-key).
2. Enter the key you wish to revoke. We only support revoking one key at a time currently.

   By default, if you attempt to revoke a key that is already active, it will display an error message informing you that the key has already been used. If you would like to revoke an active key you can check the Revoke Active Key checkbox and it will override the restriction.
3. Once a key is revoked successfully, you should see a confirmation message at the top of the screen.
4. Repeat the process as needed for any additional keys that you need to revoke.

Can I offer a Foundry VTT module as a reward in a Kickstarter?

Absolutely! When your Kickstarter is completed we can supply you with a pool of Content Keys that can be easily distributed to your backers using a service like BackerKit. Check out how to use Content Keys in Backer Kit [here](https://help.backerkit.com/article/367-367). Just be sure that you choose the `Code Bank` option in step 5.C and enter the pool of keys that we gave you.

Will you convert my content for me?

Unfortunately, we don't handle content conversions ourselves but you can [reach out to us](mailto:matt@foundryvtt.com) and we'd be happy to point you to a number of content converters that can help you achieve your goals.

Is there an easy way to sell Foundry content on my ecommerce platform (Shopify, WooCommerce, etc.)?

There's a lot of different ecommerce platforms out there with varying levels of ease of use. Here's a breakdown of how you can sell Foundry VTT content on a number of them:

* **WooCommerce:** We have worked with a developer who has created a plugin for automatically generating a Content Key when a product is sold and emailing it to your customer. [Reach out to us](mailto:matt@foundryvtt.com) and we'd be happy to put you in touch. WooCommerce also has a number of plugins that can be used to distribute Content Keys like [Serial Numbers for WooCommerce](https://wordpress.org/plugins/wc-serial-numbers/).
* **Itch:** [Itch.io](http://Itch.io) supports selling Content Keys out of the box so there's no additional integration necessary! You can use the [External Keys](https://itch.io/docs/creators/download-keys#external-keys-steam-etc) option and select `Other` to enter a pool of keys that we've generated for you.
* **Shopify/BigCommerce/SquareSpace:** Unfortunately, none of these options have a built-in way of distributing Content Keys or integrating directly with our API but a number of our partners have had success using [SendOwl](https://www.sendowl.com/) with these platforms which can handle distributing Content Keys when a user makes a purchase of a product on your store.

Is there a way to provide customers an activation link?

Yes! If you provide your customers a link in the following format `https://foundryvtt.com/me/purchases?key=XXXX-XXXX-XXXX-XXXX-XXXX-XXXX` it will activate the content key on their account if they're logged in.

How and when will I be billed?

You will be billed at the end of each calendar quarter for the number of Content Keys which were activated and the amount of Patreon subscription usage during that time period. We send an invoice from Stripe to the email address of your [foundryvtt.com](http://foundryvtt.com) account. The invoice is due within 30 days and may be paid by credit card or bank transfer. You aren't charged anything until you have active premium content listed on the website, so no charges are accrued during the onboarding and development period.

How can I integrate my own webstore with the Foundry VTT premium content system?

We offer a handful of API endpoints for issuing and revoking content keys as well as hosting content on your own servers. If you would like to learn more about our API and how it works please [reach out to us](mailto:matt@foundryvtt.com) and we'll get you access to the developer documentation.