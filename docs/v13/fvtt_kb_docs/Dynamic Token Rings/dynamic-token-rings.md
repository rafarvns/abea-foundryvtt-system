---
title: "Dynamic Token Rings"
url: "https://foundryvtt.com/article/dynamic-token-rings/"
category: "Dynamic Token Rings"
---

Your web browser has JavaScript disabled which is required in order to properly use the foundryvtt.com website. Certain website features will be disabled or will not work as expected unless JavaScript is enabled.

This website collects anonymous data about how users interact with our website. This data provides us with
valuable insights that help us to improve our products. Some of these analytics features are non-essential
and use browser cookies.

What data we collect and information on how it is used is described in our
[Privacy Policy](/article/privacy-policy/ "Privacy Policy").

# Dynamic Token Rings

## 

The information described in this article has been updated for Foundry V13. Some content may differ from V12 stable.

## Overview

This article is intended to provide guidance to content creators and developers who would like to ensure that tokens that they create are both compatible with the Dynamic Token feature, and also compatible with other products that make use of it.

## Understanding and Using Dynamic Token Rings

The Dynamic Token Ring feature allows the appearance of tokens to be modified in real time, instead of being loaded as static assets that do not change. The main benefit of this is allowing filters or shaders to be applied intelligently to specific elements of the ring or artwork, when triggered by in-game events as defined by systems or modules. For example, the token could display a simple animated effect on a creature's subject texture when the creature takes damage, or the ring could glow when the creature is targeted.

By relying on the Dynamic Token Ring feature, content creators can design their assets in a way that will function with shaders and effects from any system defined by any system or module, without the need to define dependencies on third-party Add-on Modules. It also increases the value of the tokens created with it, as they become more useful even outside of the projects they were originally designed for. For example, if a user installed an adventure module that contained a specific token ring that visually reflected the aesthetics of that adventure, they would be able to enable it as the “default” ring for their world, and see it applied automatically to all of their tokens.

### Anatomy of a Dynamic Token

A Dynamic Token is composed from the same elements as a typical "pog-style" token: a Subject, a Ring, and a Background. Unlike a "static" pog-style token, however, these elements are not combined when the file is saved. Instead, for a “dynamic” token these elements are saved separately, then combined only when the token is rendered within Foundry VTT.

Subject
:   The flavorful artwork "content" that depicts the Actor represented by this Token. The ring and background both serve to supplement this subject artwork, making it into a usable dynamic token.
:   If no image is specifically provided for use as the dynamic token's subject, the standard image for the Token is used. For best results, it is recommended to use an image that was specifically designed to be the subject for the dynamic token.

Ring
:   Typically circular, this is the "frame" that surrounds the subject artwork. For performance reasons, the same ring texture is used for all dynamic tokens.

Background
:   A separate background color and a texture that overlays it can be defined for each dynamic token.

![Dynamic Token Ring Anatomy](https://r2.foundryvtt.com/website-uploads-public/screen/user_671/dynamic-token-ring-anatomy-2024-06-14.webp)

Foundry VTT creates a Dynamic Token by rendering a Subject asset above the Ring and Background.

Defining the elements of the token separately in this way gives Foundry users and developers granular control over how the token operates, allowing them to control and interact with the Token in interesting and useful ways.

Foundry VTT includes a default Ring and Background asset which will be applied if no ring texture is supplied in the settings menu, and other styles may be provided in the future. Additionally, a module or system can also register their own assets, allowing a custom ring to be applied to all tokens regardless of their source. Changing among available rings can be done from the [Game Settings](/article/settings/ "Game Settings") menu.

Dynamic Token Ring Configuration

### Using a Dynamic Token Ring

#### Dynamic Token Prototype Token Settings

As with other settings for [Tokens](/article/tokens/ "Tokens"), configuration for the Dynamic Token Ring is handled from within an Actor's Prototype Token configuration.

To activate the Dynamic Token Ring, simply check "Ring Enabled". If you have entered a file path in the Subject Texture field, the dynamic ring will render using that asset. If you have not, it will assume the provided Token Asset should be rendered instead.

This menu also allows some basic modifications to be made on a per-actor basis, such as tinting the ring or background textures. More advanced functionality, such as interactions with game rules, can also be added at a system level.

Ring Enabled
:   A simple toggle for whether this token uses the Dynamic Token Ring feature or not.

Ring Color
:   A color value provided as a hex code. When this is configured, it will overlay that color on the ring texture.

Background Color
:   A color value provided as a hex code. When this is configured, it will overlay that color on the background texture.

Subject Texture
:   The file path to the location of the texture that should be used to depict the actor. This texture should be saved with no ring or background as part of its image file.

Subject Scale Correction
:   In some cases, Overscaled tokens (such as when a token is intended to be unconstrained by the bonds of the grid) may require correction of their scale to allow them to line up with the provided ring. This slider allows for adjusting that scale.
:   Note: The Subject Scale Correction option only has an effect on a dynamic token that has a subject texture defined. For more information, see the [Scale, Fit, and Dynamic Tokens](#scale-fit) section.

Ring Effects
:   Each checkbox toggles an example effect on or off, providing a specific visual effect. System and module developers may extend or alter these options.

#### Related Token Prototype Settings

These Token settings do not apply exclusively to dynamic tokens, but they interact with them in important ways.

Image Fit
:   Typically, this dropdown controls how a token's image stretches and/or shrinks to fit its intended size on the canvas. If a subject texture is defined, however, this option has no effect on the token because the subject texture must always fit its token ring. For more information, see [Scale, Fit, and Dynamic Tokens](#scale-fit) below.

Lock Artwork Rotation
:   Because dynamic tokens are "pog-style" tokens, the artwork is typically intended to always remain in an upright position. Enabling this checkbox is recommended when configuring your dynamic tokens because it prevents the token artwork from rotating automatically as they move around.

![Settings to control the Dynamic Token Ring configuration for an Actor](https://r2.foundryvtt.com/website-uploads-public/screen/user_681/dynamic-token-rings-prototype-settings-2025-01-29.webp)

Settings to control the Dynamic Token Ring configuration for an Actor

Scale, Fit, and Dynamic Tokens

### Scale, Fit, and Dynamic Tokens

Because Foundry VTT can interact with each individual part of a properly configured dynamic token separately, resizing dynamic tokens behaves differently than it does for traditional static tokens.

#### Scale and Fit With a Properly Configured Dynamic Token

This section only applies to dynamic token rings that have a subject texture defined. If a token is a dynamic but defaults to the standard token image path, see [Scale and Fit Without a Subject Texture Defined](#scale-no-subject) instead.

##### Token Settings

Most settings that control the token's rendered size are located in directly in the Token's settings.

Image Fit
:   The [Image Fit setting](#configuration) does not affect a fully configured dynamic token at all. The subject image is always automatically sized so that it fits inside the ring.

Subject Scale
:   This setting only scales the token's subject image, causing it to be larger or smaller relative to the token ring. The size of the token ring and background image do not change.

Scale
:   Changing the Scale setting scales the entire token simultaneously - subject, ring, and background.

##### Global Settings

One important setting, Dynamic Token Rings Fit mode, is not located in the Token settings at all. Because it applies globally to all dynamic tokens (that have a subject texture defined), it is in the Core Foundry Settings instead.

The purpose of the Grid Fit setting is to address the situation where an oversize dynamic token has a piece that extends beyond the expected circular token shape. While such tokens are interesting and engaging, they can potentially obscure other tokens and cause confusion.

Two different options are available, each with its own pros and cons.

Standard Fit Mode
:   The default Fit Mode leaves a small buffer between the outside of the token ring and the inner edges of the grid squares around it. This is a balanced option that leaves some room for token elements to spill outside the ring without interfering with nearby objects.

Grid Fit Mode
:   Choosing this option instead results in larger dynamic Tokens. The tradeoff is that there is very little buffer for elements which "overflow" their rings, so they are more likely to interfere with nearby objects.

#### Scale and Fit Without a Subject Texture Defined

If a token is dynamic but it doesn't have a subject texture and instead defaults to the standard token Image Path, it scales in the exact same way that a traditional static token does. For additional details, please see [Tokens](/article/tokens/ "Tokens").

Image Fit
:   Changing the Image Fit setting for a controls the entire image so that it is stretched or shrunk to fit its designated size on the map. The subject, ring, and background are all scaled simultaneously to fit.

Grid Fit
:   This global core setting does not affect tokens without a subject texture at all. Instead, the Image Fit setting of each of the tokens should be configured appropriately so that the entire rendered Token fits into its intended space, just like a traditional static token.

Subject Scale
:   Perhaps unsurprisingly, this setting does not affect tokens without a subject texture at all.

Scale
:   For a Token without a subject texture, the entire rendered Token is still scaled simultaneously (image, ring, and background).

![Example dynamic Tokens with overflowing elements, rendered using 'Standard' mode (top) and the 'Grid Fit' mode (bottom).](https://r2.foundryvtt.com/website-uploads-public/screen/user_681/dynamic-token-fit-mode-comparison-2024-08-14.webp)

Dynamic Tokens with overflowing elements, shown using 'Standard' mode (top) and 'Grid Fit' mode (bottom).

Creating Dynamic Token Subject Artwork

If you're familiar with the token creation process for traditional static tokens, then the process of creating a token to be compatible with the Dynamic Token Ring will be very familiar. The main difference is that rather than exporting the file as one single image asset, you must instead hide the ring and background layers before exporting the final asset.

For those who wish to adapt their token creation workflow to use dynamic tokens, a zip file containing templates (Adobe Photoshop PSD format) to aid in the creation process is [available here](https://r2.foundryvtt.com/website-uploads-public/zip/asset/user_671/dynamic-token-templates-psd-2024-09-06.zip), in three sizes.

The most important part of ensuring that a subject asset is compatible with the Dynamic Token Ring is understanding where the ring will be placed. If the Subject artwork is too large or too small, it won't line up with the ring properly.

![Dynamic Token Ring Sizing Guide](https://r2.foundryvtt.com/website-uploads-public/screen/user_671/dynamic-token-ring-sizing-guide-2024-06-14.webp)

Examples Of Subject Artwork Placement Issues

#### What do I include in the Subject?

Foundry VTT renders the Subject texture above the Ring texture, with the Background rendered below both. This is important to keep in mind since it affects decisions of which elements to include in the Subject asset.

Subject artwork should assume that the ring will start ⅔ from the center of the image, with the remaining ⅓ “padding” being reserved for the ring to use, as illustrated in the examples below.

Any element of the Subject that protrudes into the (highlighted green) padding area will appear to “pop out” over the ring.

Conversely, anything that is intended to be “hidden” by the Ring must be eliminated either by a mask or by deletion. Any elements which should be rendered \*over\* the Ring and Background - like the drop shadow added to the Subject in our example- should also be baked into the Subject texture.

![Dynamic Token Ring Positioning Guide](https://r2.foundryvtt.com/website-uploads-public/screen/user_671/dynamic-token-ring-positioning-guide-2024-06-14.webp)

The Composition of Dynamic Token Ring Assets

### Subject Artwork Dimensions

While the canvas size for the subject asset can theoretically be of any size, we generally recommend 512px by 512px for a token intended to fill a single grid square. Texture sizes with pixel dimensions in power-of-two figures (512, 1024, etc) are preferred, as they offer minor performance advantages on most modern hardware.

For many game systems, we recommend standardizing your subject art to meet the following dimensions:

|  |  |  |
| --- | --- | --- |
| **Size** | **Grid Space (Square)** | **Subject Art Dimensions** |
| **Tiny** | 0.25 x 0.25 | 256px |
| **Small or Medium** | 0.8 x 0.8 | 512px |
| **Medium** | 1x1 | 512px |
| **Large** | 2x2 | 1024px |
| **Huge** | 3x3 | 1024px |
| **Gargantuan** | 4x4 or larger | 2048px |

#### Including Traditional Tokens

Even when making use of the Dynamic Token Ring feature, module developers may also want their package to include “static” copies of their tokens in order to support Foundry VTT users who are on older versions or who for any other reason might choose not to use the feature. This is fully supported, and there is no major downside to doing so- the file size increase of including a second copy of assets is minimal, and the creation of “combined” tokens can easily be automated so as to not add any extra steps to the token creation process.

![Oversizing a Dynamic Token Ring](https://r2.foundryvtt.com/website-uploads-public/screen/user_681/oversizing-a-dynamic-token-ring-2024-05-22.webp)

Overscaling a Token

### Creating Overscaled Tokens

One advantage of the way Foundry VTT renders tokens on the grid is that it allows for particular token art to extend into adjacent spaces in the grid by increasing the Scale value in the Token Configuration. This *overscaled* effect is still possible with the Dynamic Token Ring, and the workflow for it is essentially identical, with the exception that you will need to adjust the Subject Scale Correction value to do so.

If you wish to create an Overscaled token, the process is fairly straightforward:

* In the image editor of your choice, increase the canvas size to double your ring template. (example: a ring intended for a 512x512 token remains centered, but the canvas size becomes 1024x1024). This inflates your 'ring padding' area as depicted in the image to the right.
* Compose your Subject artwork without making changes to the ring, using as much of the padding area as you wish. (it is always best to leave some space between your art and the edge of the canvas to allow shadow and glow effects to remain clean).
* Hide the ring and background layers.
* Save your image as a `.webp` or `.png` file. (webp at 80% lossy quality tends to provide the best ratio of visual fidelity to file size)
* Add your art to the Foundry VTT userdata folder, and set the path to the subject texture in the token configuration. Don't forget to enable the Dynamic Token Ring.
* Set your Subject Scale Correction to 2. This is because you doubled your canvas size to provide more space for the token to overlap adjacent grid spaces. If you had set it to 2048 instead of 1024, you would set this to 4 instead.
* Lastly, you may need to change the Scale (Ratio) value to ensure the scale lines up correctly to achieve your desired effect.

Designing Dynamic Rings

Foundry VTT includes a default token ring that will be used if no ring is provided. As such, content developers or users need only provide the corresponding subject texture, and the VTT will do the rest. Many projects may want to provide bespoke rings of their own as part of building a cohesive aesthetic identity for their product. This section explains the format and functionality of the Dynamic Ring assets in a little more detail.

### Ring Format

New Token Rings (and their background textures) can be provided in the format of a spritesheet, with an accompanying json file that instructs the software on how to slice it into separate textures. The default ring’s spritesheet is located in Foundry’s source files at `/public/canvas/tokens/rings.webp`.

If a module provides its own spritesheet and accompanying `.json` file, there is some flexibility in terms of the appearance and thickness of the token ring, but there are some essential conventions that must be followed, particularly, that the ring be sized in a way that expects the center ⅔ of final token to be the space where the Subject Texture will be rendered.

### Multiple Rings

In order to maintain acceptable performance levels, Foundry VTT will only load one ring spritesheet at a time. This means that it is not currently possible to have two different rings from different sources in use simultaneously. The currently selected ring will be used by all dynamic tokens in that world.

A module can still propose several ring styles, offering user selection for their preference via an in-application setting- but it can't support (for example) applying a separate ring asset to players vs NPCs.

Due to the existence of the default ring, and in order to avoid conflicts with other modules, it would be best practice for modules providing custom rings to support a workflow that allows disabling their ring to allow users to choose which ring works best for them.

![Dynamic Token Spritesheet](https://r2.foundryvtt.com/website-uploads-public/screen/user_681/dynamic-token-spritesheet-2024-05-22.webp)

The spritesheet for Foundry VTT's default ring assets

### Dimensions

As you can see, the spritesheet actually includes four versions of the default token ring, with different sizes- 256x256px, 512x512px, 1024x1024px, and 2048x2048px. This allows the software to choose the most efficient ring asset for each token based on their size, avoiding the performance hit of rendering a 2048x2048px texture for every rat or owl on the battlefield.

The size of the ring texture does not need to exactly match the size of the subject artwork that it is being applied to- for instance, a 512x512px Subject asset will work flawlessly with a 1024x1024px ring, so long as the ratios (the ⅔ discussed above) are correct. This is how we can seamlessly swap to a larger ring if a creature is temporarily enlarged by a spell or similar effect.

### Ring Thickness

As previously mentioned, the middle ⅔ of the token's canvas is expected to be filled by its Subject artwork. However, the ring is not required or expected to fill the remaining ⅓ by itself. The ring can use as much or as little of that “padding” space as it desires. As this comparison image illustrates, the default token uses less than half of the available space:

All that is needed to ensure that the Subject texture still fits is the ⅔ rule that we discussed earlier. This is what allows Subject assets and Ring assets from different sources to remain compatible.

### Ring Bands

One of the key features of the Dynamic Token Ring is the ability to draw solid colors, gradients, or even animations to specific areas of the ring. These areas are defined programmatically, and their sizes can be configured as part of the JSON file used when the software is supplied with a new ring.

The default ring comprises two zones. Below, they are visualized as blue and magenta bands. The magenta area (which is also magenta-coloured in the spritesheet) is where UI-level animations will be applied by Foundry VTT, while the blue area of the ring is expected to be treated as a static asset.

![](https://r2.foundryvtt.com/website-uploads-public/screen/user_671/dynamic-token-ring-color-bands-2024-06-14.webp)

The dynamic (magenta) and static (blue) zones of the dynamic token ring

It is suggested that custom rings include similar re-colorable zones for displaying effects. A custom ring could be designed to ensure that its re-colorable band is located in the same place as the default ring's, or it could provide its own band sizes which are tailored to that specific ring asset. Defining custom color bands does require a small amount of custom code, and there are certain limitations on their placement- because they are defined based on their distance from the center, they must be circular, and cannot be irregularly sized or shaped.