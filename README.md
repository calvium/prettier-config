# Calvium Prettier Config

To use this:

```
npm i --save-dev @calvium/prettier-config
```

Then add in your package.json 

```lang=json
{
    "name": "your-project",
    "prettier": "@calvium/prettier-config",
    ...
}
```

or for more flexibility create a `.prettierrc.js` file with this content:

```lang=javascript
module.exports = {
  ...require("@calvium/prettier-config"),
};
```

Also you need to install prettier in your project

```lang=bash
npm i --save-dev prettier
```
