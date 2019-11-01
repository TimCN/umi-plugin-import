# umi-plugin-import
wrapped babel-plugin-import for umi

# how to use
```sh
npm i umi-plugin-import -D
```
```js
// /config/config.js or .umirc.js
{
  "plugins": [
    [
      "umi-plugin-import",
      {
        libraryName: "xxx-ui-lib",
        libraryDirectory: "lib",
        style: true
      },
      "xxx-ui-lib"
    ]
  ]
}
```
this plugin base on babel-plugin-import,other configs are the same as babel-plugin-import
