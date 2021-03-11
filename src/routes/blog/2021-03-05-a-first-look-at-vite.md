---
title: 'a first look at vite'
excerpt: 'Vite is a frontend build tool and open source project created by Evan You'
coverImage: 'https://res.cloudinary.com/practicaldev/image/fetch/s--a4_r46zl--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ir8uhnpqn61q0t36c3lh.png'
date: '2021-03-05T00:00:00.322Z'
---

[Vite](https://vitejs.dev/) (French word for "fast", pronounced `/vit/`) is a frontend build tool and open source project created by Evan You on [April 20, 2020](https://github.com/vitejs/vite/commit/820c2cfbefd376b7be2d0ba5ad1fd39d3e45347e) in between his second and third viewing of Dazed and Confused. [Vite 2.0](https://dev.to/yyx990803/announcing-vite-2-0-2f0a) was officially released on February 16, 2021. The project consists of:

* A development server that serves your source files over [native ES modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) with [built-in features](https://vitejs.dev/guide/features.html) and [Hot Module Replacement (HMR)](https://vitejs.dev/guide/features.html#hot-module-replacement).
* A `build` command that [bundles your code](https://vitejs.dev/guide/build.html) with [Rollup](https://rollupjs.org) and per-configures the output for optimized static assets for production.
* A [Plugin API](https://vitejs.dev/guide/api-plugin.html) for extending Vite and [JavaScript API](https://vitejs.dev/guide/api-javascript.html) with full typing support.

### Browser Support

* [Native ESM dynamic import support](https://caniuse.com/es6-module-dynamic-import) is required for development
* The default production build targets browsers that support [native ESM via script tags](https://caniuse.com/es6-module) and legacy browsers are supported via [@vitejs/plugin-legacy](https://github.com/vitejs/vite/tree/main/packages/plugin-legacy).

## Setup

```bash
mkdir ajcwebdev-vite && cd ajcwebdev-vite
```

### Create index.html

```bash
touch index.html
```

```html
<!-- index.html -->

<h1>ajcwebdev</h1>
```

### Install Vite dependency and skip the 5 minute break you were planning on taking

```bash
yarn add -D vite
```

### Add `dev` script to `package.json`

```json
{
  "scripts": {
    "dev": "vite"
  },
  "devDependencies": {
    "vite": "^2.0.5"
  }
}
```

### Run development server

```bash
yarn dev
```

```
vite v2.0.5 dev server running at:

> Local:    http://localhost:3000/
> Network:  http://10.0.0.175:3000/

ready in 258ms.
```

### Open `localhost:3000`

![01-index-html-hello-world](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/fnnqefitacecm3d2q8dy.png)

### Don't forget the `<title>`

```html
<!-- index.html -->

<head>
  <title>ajcwebdev</title>
</head>

<body>
  <h1>ajcwebdev</h1>
</body>
```

![02-index-html-hello-world-with-title](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ukr408z1rnrjqinntd12.png)

We can import modules directly inside our `<script>` tags thanks to ES Modules.

```html
<!-- index.html -->

<head>
  <title>ajcwebdev</title>
</head>

<body>
  <h1>ajcwebdev</h1>

  <script type="module">
    import './main.js'
  </script>
</body>
```

We are trying to import `main.js` but we haven't created it yet. This will cause the server to display one of the most aesthetically pleasing error messages you will ever see.

![03-failed-to-resolve-import](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5zclwakxn74pfs4nu2bo.png)

### Create `main.js`

```bash
touch main.js
```

Console log a message to your dude.

```javascript
// main.js

console.log('sah dude')
```

![04-console-log-main-js](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/iqbiw2pwfyp0evnatgcv.png)

### Create `style.css`

Since people keep insisting on writing CSS.

```bash
touch style.css
```

You only get one color so make it count.

```css
/* style.css */

h1 {
  color: purple
}
```

![05-index-html-with-style-css](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/xu5txx35767lsd1905ds.png)

### Create a single page app that renders a root component cause it's the only thing they ever taught you

```html
<!-- index.html -->

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    />
    <title>
      ajcwebdev
    </title>
  </head>
  
  <body>
    <div id="app"></div>
    <script type="module" src="/main.js"></script>
  </body>
</html>
```

If we look back at `localhost:3000` we will see our blank canvas. Alternatively known as "the only thing your website does" for people with JavaScript turned off.

![06-blank-root-div](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/6lkx1x2wa3vqstyrn6vr.png)

We will paint the canvas with our imperative DOM manipulations just as Elder Resig instructed.

```javascript
// main.js

import './style.css'

document.querySelector('#app').innerHTML = `
  <h1>ajcwebdev</h1>
  <a
    href="https://dev.to/ajcwebdev"
    target="_blank"
  >
    Blog
  </a>
`
```

![07-vanilla-javascript-component](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/oljrpcpxzplhep8041r2.png)

And that's the whole website, that'll be $10,000 dollars.
