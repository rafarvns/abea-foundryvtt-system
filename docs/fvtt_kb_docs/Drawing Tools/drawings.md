---
title: "Drawing Tools"
url: "https://foundryvtt.com/article/drawings/"
category: "Drawing Tools"
---

Your web browser has JavaScript disabled which is required in order to properly use the foundryvtt.com website. Certain website features will be disabled or will not work as expected unless JavaScript is enabled.

This website collects anonymous data about how users interact with our website. This data provides us with
valuable insights that help us to improve our products. Some of these analytics features are non-essential
and use browser cookies.

What data we collect and information on how it is used is described in our
[Privacy Policy](/article/privacy-policy/ "Privacy Policy").

# Drawing Tools

## 

## Overview

Drawing tools can be used to allow the GM and users to annotate the map with freehand or shaped drawings. The appearance of drawings can be pre-configured using defaults, or individual drawn shapes may have their appearance changed after they have been placed.

This article will teach you how to place and edit drawings in a scene.

## Drawing Controls

![Drawing Tools Palette](https://r2.foundryvtt.com/website-uploads-public/screen/user_1294/drawing-tools-menu-2022-08-31.png)

Drawing Controls Tool Palette

The drawing Controls panel can be opened by clicking on the pencil icon () on the left-hand side of the user interface. This opens the tool palette, and provides you with the tools necessary to create new drawings or manipulate existing ones.

Select Walls ()
:   This tool allows you to select drawings to be moved, resized or configured.

Draw Rectangle ()
:   Used for drawing rectangular and square four-sided shapes.

Draw Circle ()
:   Used for drawing enclosed circular shapes.

Draw Polygon ()
:   Used for drawing polygonal geometric shapes from straight lines. Right-click removes the last point drawn, double-click to finish drawing.

Draw Freehand ()
:   Used for drawing freehand, as though with a stylus, can be used to create complex rounded shapes. Will continue to draw as long as the left mouse button is pressed.

Draw Text ()
:   Used for placing text directly onto the map in order to offer labels or place messages directly on the canvas.

Configure Drawings ()
:   This opens the default drawing configuration window so that you can set the default appearance of all future drawings you create.

Clear Drawings ()
:   This button clears all existing drawings on the scene which you have ownership of. You will be prompted to confirm your decision when using this tool.

### Placing Drawings

Placing drawings into a scene is extremely simple, and requires the following steps:

1. Select the drawing tool. This is a pencil icon on the left of the Foundry VTT UI.
2. Select the type of drawing you want to create. These include rectangles, ellipses, polygons, freehand and text.
3. Click and drag out the shape you want (for rectangle, ellipse, and text) or click to place points (for polygon), or click and hold to actively draw (with freehand).

Once a drawing is created the drawing select tool allows you to select and move the drawing around the scene as you need. You can also right click on the drawing to quickly toggle the drawing's visibility, or to move it forward or backward for the purposes of determining if it sits on top of or below other drawings in the same area.

#### Default Drawing Configuration

![Drawing Tools - Default Settings](https://r2.foundryvtt.com/website-uploads-public/screen/user_1294/drawing-tools-default-settings-2021-01-19.jpg)

This is the Default Drawing Configuration screen. From here the appearance of all future drawings can be set.

The default appearance of drawings may be configured by using the "Configure Drawing" tool. This sets the defaults your drawings will adhere to when placed, and the defaults are specific to each user and their drawing tools.

The tabs of this menu are identical to the similarly named tabs of the individual drawing configuration menu, therefore you can reference the specific tab explanations above for what they do, and how they affect your drawings.

#### Drawing Tool Permissions

By default, players do not have permission to use Drawing tools, while Trusted players and Assistant GMs have access to the drawing tools enabled by default. If you wish to allow or revoke permissions to the drawing tools, you can do so from the "Use Drawing Tools" section of the Permission Configuration in the [Game Settings](/article/settings/ "Game Settings") menu.

## Configuring Drawings

Individual drawings can be modified after their placement by double clicking the drawing with the selection tool. Once the configuration menu is loaded, you will have access to multiple tabs that let you determine the specific appearance of the drawing's various aspects. The available tabs are be explained below.

Positioning Tab ()

![Drawing Tools - Position](https://r2.foundryvtt.com/website-uploads-public/screen/user_1294/drawing-tools-position-2021-01-19.jpg)

These are the Drawing Tools Position Settings.

X & Y Position (Pixels)
:   Set the X (horizontal) and Y (vertical) placement of the drawing. This allows you to fine-tune the location of a drawing down to the pixel.

Width & Height (Pixels)
:   Set the specific width and height of the drawing in pixels. This allows you to fine-tune the size and shape of the drawing down to the pixel.

Rotation (Degrees)
:   Set the degree of rotation to apply to the drawing.

Z-Sort
:   Set the "height" of the drawing in a stack of other drawings. The higher the z-sort number, the closer to the top of the stack of images the drawing will be, with the highest z-sort number being the one drawn on top of all other drawings.

Lines Tab ()

![Drawing Tools - Lines](https://r2.foundryvtt.com/website-uploads-public/screen/user_1294/drawing-tools-lines-2021-01-19.jpg)

This is the Drawing Tool Lines tab on the Configuration screen.

Line Width
:   Set the thickness in pixels (px) of the lines drawn by the Square, Ellipse, Polygon or Freehand tools.

Stroke Color
:   Set the color in Hex (#000000) used to color shapes drawn with the drawing tools.

Line Opacity
:   Set the transparency of shapes drawn with the drawing tools.

Smoothing Factor
:   Foundry will attempt to smooth rough edges of shapes to reduce the number of vertices in freehand drawings. Use this setting to adjust how aggressive the smoothing filter is.

Fill Tab ()

![Drawing Tools - Fill](https://r2.foundryvtt.com/website-uploads-public/screen/user_1294/drawing-tools-fill-2021-01-19.jpg)

This is the Drawing Tool Fill tab on the Configuration screen.

Fill Type
:   Shapes can be filled as necessary, "None" will not fill a shape, "Solid" will fill your shape with a chosen color, and Pattern will fill a shape with a chosen texture file.

Fill Color
:   Set the color in Hex (#000000) used to fill the inside of shapes drawn with the drawing tools.

Fill Opacity
:   Set the transparency of the color and texture used to fill the inside of shapes drawn with the drawing tools.

Fill Texture
:   Set the texture to use for filling the inside of a shape. This should ideally be a repeating, tiling png with transparency.

Text Tab ()

![Drawing Tools - Text](https://r2.foundryvtt.com/website-uploads-public/screen/user_1294/drawing-tools-text-2021-01-19.jpg)

This is the Drawing Tool Text tab on the Configuration screen.

Text Label
:   Applies a text which will expand to fit and fill the inside of the shape drawn, please note that if the content of the text label is longer (in height) than the shape itself, it will expand beyond the shape's boundaries.

Font Family
:   Choose from available fonts in Foundry to style your text.

Font Size
:   Choose the font size in pixels (px) for text labels and the text tool.

Text Color
:   Choose the color to be applied to text in labels and text tool drawings.

Text Opacity
:   Set the transparency of text both for text labels and text tool drawings.

## API References

To interact with Drawings programmatically, consider using the following API concepts:

* The  [Drawing Object](/api/classes/foundry.documents.DrawingDocument.html " Drawing Object")
* The  [DrawingsLayer Canvas Layer](/api/classes/foundry.canvas.layers.DrawingsLayer.html " DrawingsLayer Canvas Layer")
* The  [DrawingConfig Application](/api/classes/foundry.applications.sheets.DrawingConfig.html " DrawingConfig Application")