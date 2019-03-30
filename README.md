# Vue Browser State

[![npm](https://img.shields.io/npm/v/vue-browser-state.svg)](https://www.npmjs.com/package/vue-browser-state)

Vue Browser State is a collection of tiny browser-related implementations (around 150 bytes minified & gzipped each) for [`vue-reactivator`](https://npmjs.com/package/vue-reactivator).

It features reactive properties representing:

- [Viewport Size](#viewport-size)
- [Scroll Position](#scroll-position)
- [Mouse Position](#mouse-position)
- [Internet Connection](#internet-connection)
- [Ready State](#ready-state)
- [Page Visibility](#page-visibility)
- [URL Anchor](#url-anchor)
- [Browser Language](#browser-language)

## Installation

Vue Browser State is available on npm:

```bash
npm install vue-browser-state
```

After installing, you can include as usual

```js
// CommonJS
const browserState = require('vue-browser-state')

// ES module
import * as browserState from 'vue-browser-state'
```

---

Want to use it in the browser directly? Try unpkg:

```html
<script src="https://unpkg.com/vue-browser-state"></script>
```

> **Note:** The implementations are stored in the `vueBrowserState` global variable.

## Usage

See how to use implementations with Reactivator in the [Reactivator docs](https://github.com/Loilo/vue-reactivator#usage).

Note that this package is tree-shakeable when using a bundler like webpack:

```js
// Will eliminate every implementation besides `online` in the resulting bundle
import { online } from 'vue-browser-state'
```

The following implementations are available:

### Viewport Size

```js
import { viewportSize } from 'vue-browser-state'
```

The size of the viewport as a `[width, height]` array, equals `[window.innerWidth, window.innerHeight]`.

**SSR value:** `undefined`

### Scroll Position

```js
import { pageScroll } from 'vue-browser-state'
```

The scroll position on the page as an `[x, y]` array, equals `[window.scrollX, window.scrollY]`.

**SSR value:** `[0, 0]`

### Mouse Position

```js
import { mousePosition } from 'vue-browser-state'
```

The mouse position as an `[x, y]` array, relative to the document root.

**SSR value:** `undefined`

> **Attention!** This implementation has no initial value as it can only be read when first moving the mouse.

### Internet Connection

```js
import { online } from 'vue-browser-state'
```

Whether the browser is currently connected to the internet (via [`navigator.onLine`](https://developer.mozilla.org/docs/Web/API/NavigatorOnLine/onLine)).

**SSR value:** `true`

### Ready State

```js
import { readyState } from 'vue-browser-state'
```

The loading state of the current document, as represented by [`document.readyState`](https://developer.mozilla.org/docs/Web/API/Document/readyState).

**SSR value:** `"loading"`

### Page Visibility

```js
import { visible } from 'vue-browser-state'
```

Whether or not the page is currently visible, according to [`document.hidden`](https://developer.mozilla.org/docs/Web/API/Document/hidden).

**SSR value:** `true`

### URL Anchor

```js
import { hash } from 'vue-browser-state'
```

The anchor attached to the current URL (without the leading `#`).

**SSR value:** `""`

### Browser Language

```js
import { language } from 'vue-browser-state'
```

The language the user's browser is requesting (per [`navigator.language`](https://developer.mozilla.org/docs/Web/API/NavigatorLanguage/language)).

**SSR value:** `undefined`
