---
title: "drawBorder | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/functions/foundry.canvas.borders.drawBorder.html"
category: "functions"
---

# Function drawBorder

* drawBorder(  
  Â Â Â Â graphics: SmoothGraphics,  
  Â Â Â Â shape:  
  Â Â Â Â Â Â Â Â | Rectangle  
  Â Â Â Â Â Â Â Â | Polygon  
  Â Â Â Â Â Â Â Â | Circle  
  Â Â Â Â Â Â Â Â | Ellipse  
  Â Â Â Â Â Â Â Â | RoundedRectangle  
  Â Â Â Â Â Â Â Â | ((graphics: SmoothGraphics) => void),  
  Â Â Â Â options?: {  
  Â Â Â Â Â Â Â Â alignment?: number;  
  Â Â Â Â Â Â Â Â clear?: boolean;  
  Â Â Â Â Â Â Â Â color?: ColorSource;  
  Â Â Â Â Â Â Â Â dashed?: boolean;  
  Â Â Â Â },  
  ): void

  Draw a border.

  #### Parameters

  + graphics: SmoothGraphics

    The graphics to draw the shape into.
  + shape:   
    Â Â Â Â | Rectangle  
    Â Â Â Â | Polygon  
    Â Â Â Â | Circle  
    Â Â Â Â | Ellipse  
    Â Â Â Â | RoundedRectangle  
    Â Â Â Â | ((graphics: SmoothGraphics) => void)

    The shape to draw or a draw callback.
  + `Optional`options: { alignment?: number; clear?: boolean; color?: ColorSource; dashed?: boolean } = {}

    Additional options.

    - ##### `Optional`alignment?: number

      The alignment of the outline. Default: `0.5`.
    - ##### `Optional`clear?: boolean

      Clear the graphics before drawing the border? Default: `0.5`.
    - ##### `Optional`color?: ColorSource

      The border color. Default: `0xFFFFFF`.
    - ##### `Optional`dashed?: boolean

      Dashed border? Default: `false`.

  #### Returns void