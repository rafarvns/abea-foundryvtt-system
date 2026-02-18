---
title: "Asset Management"
url: "https://foundryvtt.com/article/asset-management/"
category: "Asset Management"
---

Your web browser has JavaScript disabled which is required in order to properly use the foundryvtt.com website. Certain website features will be disabled or will not work as expected unless JavaScript is enabled.

This website collects anonymous data about how users interact with our website. This data provides us with
valuable insights that help us to improve our products. Some of these analytics features are non-essential
and use browser cookies.

What data we collect and information on how it is used is described in our
[Privacy Policy](/article/privacy-policy/ "Privacy Policy").

# Asset Management

## 

Using quality multimedia assets such as images, sound, and videos within Foundry VTT can dramatically increase your game's quality and immersion.

This article covers:

* Finding suitable assets for your game
* Uploading assets so that you can use them inside Foundry VTT
* Properly backing up your assets

Additional details and approaches that are more suitable for power users are also provided at the end of the article.

## Finding Suitable Assets

Fortunately, an incredible community of talented artists and other creators has emerged to help bring VTT games to life. Many such creators already have massive libraries of free and paid assets and are creating more every day.

Pre-made Adventures

If you are using a pre-made adventure, most assets that you need (such as map backgrounds and token images) are included in the module and are pre-configured for your use. As an additional bonus, you own these assets can reuse them in your other campaigns.

To find pre-made adventures, try searching [on our website](https://foundryvtt.com/packages/tag/adventures) or on the official [Foundry VTT Marketplace](https://www.foundryvtt.store/). It's also a great idea to ask on our Discord (<https://discord.gg/FoundryVTT>) in your favorite game system's channel to see what other users recommend!

Additional Assets

Even when using a pre-made adventure, it can be useful to add your own assets (player token and profile images, for example).

A great place to look for such creators and their work is on [Patreon](https://www.patreon.com/). Many content creators there have an extensive library of both free and paid assets available. Of course, the [Foundry VTT Marketplace](https://www.foundryvtt.store/) is also an excellent resource for high quality, TTRPG-ready assets of all kinds!

If you're looking for something specific, try visiting the `#media-and-assets` channel of our Discord (<https://discord.gg/FoundryVTT>), checking the pins, and asking around. People in your favorite game system's channel may also be able to help.

File Formats and Foundry VTT

Most modern file formats can be used in Foundry VTT. The following file formats are accepted:

Images
:   ```
    apng avif bmp jpeg jpg png svg tiff webp
    ```

Video
:   ```
    m4v mp4 ogv webm
    ```

Audio
:   ```
    aac flac m4a mid mp3 ogg opus wav webm
    ```

**Note**: The `.gif` file format is not universally accepted within Foundry VTT. This file format is obsolete, inefficient, and should only be used as a last resort.

We recommend using the following formats when possible because they offer the best balance of quality and efficiency:

* Image: `webp`
* Video: `webm`
* Audio: `ogg`

For more information about optimizing your assets, please see the [Media Optimization Guide](https://foundryvtt.com/article/media/).

## "Uploading" Assets

Once you've found useful asset files, you need to "upload" files before you can use them. The word "uploading" is in quotation marks here because it isn't quite being used in the traditional way.

Typically, "uploading" means transferring files from your own computer to different one. In the context of Foundry, however, "uploading" means "moving or copying files into your [User Data folder](/article/configuration/#where-user-data")", even if they stay on the same computer. Rearranging files in this way is necessary because Foundry can only access files that are inside this folder.

**Note:** When you are naming your files and folders it is a good idea to avoid spaces or special characters.

You can either upload files inside Foundry VTT or using your operating system.

### Uploading Files Using the Foundry VTT File Picker

You can also upload a file directly through the Foundry VTT user interface. For example, if you want to upload an image to use as a [scene background](/article/scenes), you could use the **Scene Configuration** window to copy the file into your user:

 ![Uploading a file with Foundry VTT](https://r2.foundryvtt.com/website-uploads-public/screen/user_681/uploading-a-file-20250806-2025-08-06.webp)

Uploading a file within Foundry

#### Uploading and protected file locations

To encourage good file management practices, starting in Version 13 uploads to certain locations inside the [User Data folder](/article/configuration/#where-user-data) are prohibited, including:

- The topmost levels of the User Data folder itself
- The topmost levels of the `systems`, `modules`, and `worlds` folders
- The folders and sub-folders of (most) installed modules and systems
- The folders and sub-folders of any world other than the one running

This prohibition is only enforced within the Foundry VTT filepicker, so you can still ["upload" files into these locations outside of Foundry](#uploading-bulk). Additionally, developers and power users have additional [control over upload permissions](#canupload) for many of these locations.

#### FAQ: Why is my Upload button gray and disabled?

If the Upload button is disabled, uploads are not permitted in the current file location.

To upload your file, you will need to pick or create a different folder.

* If you see a top-level folder named `assets`, you can always upload into that.
* If you create a new top-level folder (next to the `assets`, `modules`, `systems`, and `worlds` folders), you can upload into that also.
* You can always upload into the folder of the world that is currently running.

 ![Attempting to upload a file to a prohibited location](https://r2.foundryvtt.com/website-uploads-public/screen/user_681/uploading-file-prohibited-20250806-2025-08-06.webp)

Attempting to upload to a prohibited folder

#### FAQ: Why can't my players upload files?

By default, players cannot upload files.

If you want to give players permission to upload their own files onto your server, you will need to configure your user permissions first so that they have the **Upload New File** permission. For more information, see the [Users and Permissions](/article/users/#usermanagement) article.

### Bulk Uploading Files Outside Foundry

If you want to upload many files to use in Foundry VTT such as entire folders of token artwork, using the filepicker to upload the files one at a time is not a practical solution. The proper way to bulk upload files depends on your hosting method:

Self-hosted
:   If you run Foundry VTT on your own computer (typically by clicking an icon to launch it), you are considered "self-hosted." Because your Foundry server is running on your own computer, you can open your [User Data folder](https://foundryvtt.com/article/configuration/#where-user-data) and drag and drop files and folders as usual.

Hosting partner
:   If you use one of our [official hosting partners](/article/partnerships), you will need to consult their website or Discord to determine the best way of uploading files onto your server.

Personal dedicated server
:   If you or your friend have setup your own dedicated server that is running Foundry VTT, you typically use a SFTP application such as FileZilla)to transfer your files into the server's user data folder.

## Assets and Backups

Foundry VTT has a built-in [backups](/article/backups) feature that can be very helpful in recovering your data or reverting a world to a past state. Occasionally, after restoring a backup, a user is surprised by one or more broken links to their assets.

**Please Note:** Your multimedia assets are likely not included when you take a backup within Foundry.

When you back up a world, only the contents of that World are backed up. This means that any assets that are stored in different folder locations are not backed up each time a backup is taken. This saves significant amount of hard drive space, but you need to ensure that any assets used in the world are in the same relative position that the backup expects.

For example, if you had a token image saved directly inside the `assets` folder but you later reorganize your files and move it to a new `assets\tokens` folder, when you restore to the older backup the token's image will be a broken link.

Storing all assets that you use inside your Foundry worlds in a single folder (like the `assets` folder) helps you keep all your assets together, making it easier to periodically take a manual backup copy of these images.

## Additional Power User Details

Most users will never have to know this information, but it is included as a reference for experienced users who are looking to take full advantage of Foundry VTT's capabilities.

### Controlling Folder Upload Permissions

The mechanism for prohibiting uploads into individual world, module, and system folders is the `canUpload` line inside the folders's corresponding `world.json`, `system.json`, or `module.json` file:

```
"flags": {
    "canUpload": true
  },
```

If the `canUpload` key is omitted it is considered `false` by default.

##### Relevant API Links

* [Manifest specification](/api/interfaces/foundry.packages.types.PackageManifestData.html)
* [Package flags definition](/api/interfaces/foundry.packages.types.PackageFlagsData.html)

### S3 Integration

You can also use cloud storage such as Amazon S3 or a similar bucket to store your assets. For more information, please see the [S3 integration](https://foundryvtt.com/article/aws-s3/) article.