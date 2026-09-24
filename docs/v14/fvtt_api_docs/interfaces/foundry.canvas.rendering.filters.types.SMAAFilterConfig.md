---
title: "SMAAFilterConfig | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/interfaces/foundry.canvas.rendering.filters.types.SMAAFilterConfig.html"
category: "interfaces"
---

# Interface SMAAFilterConfig

interface SMAAFilterConfig {  
Â Â Â Â [cornerRounding](#cornerrounding): number;  
Â Â Â Â [disableCornerDetection](#disablecornerdetection): boolean;  
Â Â Â Â [disableDiagDetection](#disablediagdetection): boolean;  
Â Â Â Â [localContrastAdaptionFactor](#localcontrastadaptionfactor): number;  
Â Â Â Â [maxSearchSteps](#maxsearchsteps): number;  
Â Â Â Â [maxSearchStepsDiag](#maxsearchstepsdiag): number;  
Â Â Â Â [threshold](#threshold): number;  
}

##### Index

### Properties

[cornerRounding](#cornerrounding)
[disableCornerDetection](#disablecornerdetection)
[disableDiagDetection](#disablediagdetection)
[localContrastAdaptionFactor](#localcontrastadaptionfactor)
[maxSearchSteps](#maxsearchsteps)
[maxSearchStepsDiag](#maxsearchstepsdiag)
[threshold](#threshold)

## Properties

### cornerRounding

cornerRounding: number

Specifies how much sharp corners will be rounded. Range: [0, 100].

### disableCornerDetection

disableCornerDetection: boolean

Is corner detection disabled?

### disableDiagDetection

disableDiagDetection: boolean

Is diagonal detection disabled?

### localContrastAdaptionFactor

localContrastAdaptionFactor: number

If there is an neighbor edge that has `localContrastAdaptionFactor`
times bigger contrast than current edge, current edge will be
discarded.
This allows to eliminate spurious crossing edges, and is based on the
fact that, if there is too much contrast in a direction, that will
hide perceptually contrast in the other neighbors.

### maxSearchSteps

maxSearchSteps: number

Specifies the maximum steps performed in the horizontal/vertical
pattern searches, at each side of the pixel. In number of pixels,
it's actually the double. So the maximum line length perfectly
handled by, for example 16, is 64 (by perfectly, we meant that longer
lines won't look as good, but still antialiased. Range: [0, 112].

### maxSearchStepsDiag

maxSearchStepsDiag: number

Specifies the maximum steps performed in the diagonal pattern
searches, at each side of the pixel. In this case we jump one pixel
at time, instead of two. Range: [0, 20].

### threshold

threshold: number

Specifies the threshold or sensitivity to edges. Lowering this value
you will be able to detect more edges at the expense of performance.
Range: [0, 0.5]. 0.1 is a reasonable value, and allows to catch most
visible edges. 0.05 is a rather overkill value, that allows to catch
them all.