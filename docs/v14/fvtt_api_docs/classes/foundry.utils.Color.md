---
title: "Color | Foundry Virtual Tabletop - API Documentation - Version 14"
url: "https://foundryvtt.com/api/v14/classes/foundry.utils.Color.html"
category: "classes"
---

# Class Color

A representation of a color in hexadecimal format.
This class provides methods for transformations and manipulations of colors.

#### Hierarchy

* Number
  + Color

##### Index

### Accessors

[b](#b)
[css](#css)
[g](#g)
[hsl](#hsl)
[hsv](#hsv)
[linear](#linear)
[littleEndian](#littleendian)
[maximum](#maximum)
[minimum](#minimum)
[r](#r)
[rgb](#rgb)
[valid](#valid)

### Methods

[[iterator]](#iterator)
[add](#add)
[applyRGB](#applyrgb)
[equals](#equals)
[maximize](#maximize)
[minimize](#minimize)
[mix](#mix)
[multiply](#multiply)
[subtract](#subtract)
[toHTML](#tohtml)
[toJSON](#tojson)
[toRGBA](#torgba)
[toString](#tostring)
[add](#add-2)
[addScalar](#addscalar)
[applyRGB](#applyrgb-2)
[from](#from)
[fromHSL](#fromhsl)
[fromHSV](#fromhsv)
[fromLinearRGB](#fromlinearrgb)
[fromRGB](#fromrgb)
[fromRGBvalues](#fromrgbvalues)
[fromString](#fromstring)
[maximize](#maximize-2)
[maximizeScalar](#maximizescalar)
[minimize](#minimize-2)
[minimizeScalar](#minimizescalar)
[mix](#mix-2)
[multiply](#multiply-2)
[multiplyScalar](#multiplyscalar)
[subtract](#subtract-2)
[subtractScalar](#subtractscalar)

## Accessors

### b

* get b(): number

  The numeric value of the blue channel between [0, 1].

  #### Returns number

### css

* get css(): string

  A CSS-compatible color string.
  If this color is not valid, the empty string is returned.
  An alias for Color#toString.

  #### Returns string

### g

* get g(): number

  The numeric value of the green channel between [0, 1].

  #### Returns number

### hsl

* get hsl(): [number, number, number]

  The color represented as an HSL array.
  Assumes r, g, and b are contained in the set [0, 1] and returns h, s, and l in the set [0, 1].

  #### Returns [number, number, number]

### hsv

* get hsv(): [number, number, number]

  The color represented as an HSV array.
  Conversion formula adapted from <http://en.wikipedia.org/wiki/HSV_color_space>.
  Assumes r, g, and b are contained in the set [0, 1] and returns h, s, and v in the set [0, 1].

  #### Returns [number, number, number]

### linear

* get linear(): Color

  The color represented as a linear RGB array.
  Assumes r, g, and b are contained in the set [0, 1] and returns linear r, g, and b in the set [0, 1].

  #### Returns Color

  #### See

  <https://en.wikipedia.org/wiki/SRGB#Transformation>

### littleEndian

* get littleEndian(): number

  Get the value of this color in little endian format.

  #### Returns number

### maximum

* get maximum(): number

  The maximum value of all channels.

  #### Returns number

### minimum

* get minimum(): number

  The minimum value of all channels.

  #### Returns number

### r

* get r(): number

  The numeric value of the red channel between [0, 1].

  #### Returns number

### rgb

* get rgb(): [number, number, number]

  The color represented as an RGB array.

  #### Returns [number, number, number]

### valid

* get valid(): boolean

  Is this a valid color?

  #### Returns boolean

## Methods

### [iterator]

* "[iterator]"(): Generator<number, any, any>

  Iterating over a Color is equivalent to iterating over its [r,g,b] color channels.

  #### Returns Generator<number, any, any>

### add

* add(other: number | Color): Color

  Add this Color by another Color or a static scalar.

  #### Parameters

  + other: number | Color

    Some other Color or a static scalar.

  #### Returns Color

  The resulting Color.

### applyRGB

* applyRGB(vec3: number[]): void

  Set an rgb array with the rgb values contained in this Color class.

  #### Parameters

  + vec3: number[]

    Receive the result. Must be an array with at least a length of 3.

  #### Returns void

### equals

* equals(other: number | Color): boolean

  Test whether this color equals some other color

  #### Parameters

  + other: number | Color

    Some other color or hex number

  #### Returns boolean

  Are the colors equal?

### maximize

* maximize(other: number | Color): Color

  Max this color by another Color or a static scalar.

  #### Parameters

  + other: number | Color

    Some other Color or a static scalar.

  #### Returns Color

  The resulting Color.

### minimize

* minimize(other: number | Color): Color

  Min this color by another Color or a static scalar.

  #### Parameters

  + other: number | Color

    Some other Color or a static scalar.

  #### Returns Color

  The resulting Color.

### mix

* mix(other: Color, weight: number): Color

  Mix this Color with some other Color using a provided interpolation weight.

  #### Parameters

  + other: Color

    Some other Color to mix with
  + weight: number

    The mixing weight placed on this color where weight is placed on the other color

  #### Returns Color

  The resulting mixed Color

### multiply

* multiply(other: number | Color): Color

  Multiply this Color by another Color or a static scalar.

  #### Parameters

  + other: number | Color

    Some other Color or a static scalar.

  #### Returns Color

  The resulting Color.

### subtract

* subtract(other: number | Color): Color

  Subtract this Color by another Color or a static scalar.

  #### Parameters

  + other: number | Color

    Some other Color or a static scalar.

  #### Returns Color

  The resulting Color.

### toHTML

* toHTML(): string

  Returns the color as a CSS string.

  #### Returns string

  The color as a CSS string

### toJSON

* toJSON(): string

  Serialize the Color.

  #### Returns string

  The color as a CSS string

### toRGBA

* toRGBA(alpha: number): string

  Get a CSS-compatible RGBA color string.

  #### Parameters

  + alpha: number

    The desired alpha in the range [0, 1]

  #### Returns string

  A CSS-compatible RGBA string

### toString

* toString(radix: any): string

  #### Parameters

  + radix: any

  #### Returns string

  Overrides Number.toString

### `Static`add

* add(color1: number, color2: number): number

  Add two colors.

  #### Parameters

  + color1: number

    The first color.
  + color2: number

    The second color.

  #### Returns number

  The resulting color as a number.

### `Static`addScalar

* addScalar(color: number, scalar: number): number

  Add a static scalar to a color.

  #### Parameters

  + color: number

    The color.
  + scalar: number

    Scalar to add with (normalized).

  #### Returns number

  The resulting color as a number.

### `Static`applyRGB

* applyRGB(color: number, vec3: number[]): void

  Convert a color to RGB and assign values to a passed array.

  #### Parameters

  + color: number

    The color to convert to RGB values.
  + vec3: number[]

    Receive the result. Must be an array with at least a length of 3.

  #### Returns void

### `Static`from

* from(color: [ColorSource](../types/foundry.types.ColorSource.md)): Color

  Create a Color instance from an RGB array.

  #### Parameters

  + color: [ColorSource](../types/foundry.types.ColorSource.md)

    A color input

  #### Returns Color

  The hex color instance or NaN

### `Static`fromHSL

* fromHSL(hsl: [number, number, number]): Color

  Create a Color instance from an HSL array.
  Assumes h, s, and l are contained in the set [0, 1].

  #### Parameters

  + hsl: [number, number, number]

    An HSL tuple

  #### Returns Color

  The hex color instance

### `Static`fromHSV

* fromHSV(hsv: [number, number, number]): Color

  Create a Color instance from an HSV array.
  Conversion formula adapted from <http://en.wikipedia.org/wiki/HSV_color_space>.
  Assumes h, s, and v are contained in the set [0, 1].

  #### Parameters

  + hsv: [number, number, number]

    An HSV tuple

  #### Returns Color

  The hex color instance

### `Static`fromLinearRGB

* fromLinearRGB(linear: [number, number, number]): Color

  Create a Color instance (sRGB) from a linear rgb array.
  Assumes r, g, and b are contained in the set [0, 1].

  #### Parameters

  + linear: [number, number, number]

    The linear rgb array

  #### Returns Color

  The hex color instance

  #### See

  <https://en.wikipedia.org/wiki/SRGB#Transformation>

### `Static`fromRGB

* fromRGB(rgb: [number, number, number]): Color

  Create a Color instance from an RGB array.

  #### Parameters

  + rgb: [number, number, number]

    An RGB tuple

  #### Returns Color

  The hex color instance

### `Static`fromRGBvalues

* fromRGBvalues(r: number, g: number, b: number): Color

  Create a Color instance from an RGB normalized values.

  #### Parameters

  + r: number

    The red value
  + g: number

    The green value
  + b: number

    The blue value

  #### Returns Color

  The hex color instance

### `Static`fromString

* fromString(color: string): Color

  Create a Color instance from a color string which either includes or does not include a leading #.

  #### Parameters

  + color: string

    A color string

  #### Returns Color

  The hex color instance

  Overrides Number.fromString

### `Static`maximize

* maximize(color1: number, color2: number): number

  Maximize two colors.

  #### Parameters

  + color1: number

    The first color.
  + color2: number

    The second color.

  #### Returns number

  The result.

### `Static`maximizeScalar

* maximizeScalar(color: number, scalar: number): number

  Maximize a color by a static scalar.

  #### Parameters

  + color: number

    The color to maximize.
  + scalar: number

    Scalar to maximize with (normalized).

  #### Returns number

  The resulting color as a number.

### `Static`minimize

* minimize(color1: number, color2: number): number

  Minimize two colors.

  #### Parameters

  + color1: number

    The first color.
  + color2: number

    The second color.

  #### Returns number

### `Static`minimizeScalar

* minimizeScalar(color: number, scalar: number): number

  Minimize a color by a static scalar.

  #### Parameters

  + color: number

    The color.
  + scalar: number

    Scalar to minimize with (normalized).

  #### Returns number

### `Static`mix

* mix(color1: number, color2: number, weight: number): number

  Apply a linear interpolation between two colors, according to the weight.

  #### Parameters

  + color1: number

    The first color to mix.
  + color2: number

    The second color to mix.
  + weight: number

    Weight of the linear interpolation.

  #### Returns number

  The resulting mixed color

### `Static`multiply

* multiply(color1: number, color2: number): number

  Multiply two colors.

  #### Parameters

  + color1: number

    The first color to multiply.
  + color2: number

    The second color to multiply.

  #### Returns number

  The result.

### `Static`multiplyScalar

* multiplyScalar(color: number, scalar: number): number

  Multiply a color by a scalar

  #### Parameters

  + color: number

    The color to multiply.
  + scalar: number

    A static scalar to multiply with.

  #### Returns number

  The resulting color as a number.

### `Static`subtract

* subtract(color1: number, color2: number): number

  Subtract two colors.

  #### Parameters

  + color1: number

    The first color.
  + color2: number

    The second color.

  #### Returns number

### `Static`subtractScalar

* subtractScalar(color: number, scalar: number): number

  Subtract a color by a static scalar.

  #### Parameters

  + color: number

    The color.
  + scalar: number

    Scalar to subtract with (normalized).

  #### Returns number

  The resulting color as a number.