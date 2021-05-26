# ch5xweb-vue

This project is a starting point / demonstration of using Crestron HTML5 libraries (CH5) in the Vue.js framework.

I plan to continue building out this project as I learn more about Vue.js, Crestron's CrComLib and Ch5 libraries, and web development in general.

## Gotchas
- Chrome version on the TSW panels as of writing this is 72.0. Keep that in mind for support for things like `gap` for flexbox. 

## Project setup

```
npm install
```

### Crestron specific setups

Crestron has some specific requirements that I've discovered.

- `vue.config.js` specifies an empty `publicPath`. This has proved critical in the loading of resources. If you get 404 errors that your js includes can't be found, be sure to check this property.
- If you want to use the CH5 WebXpanel, uncomment `import './services/webxpanel'` in `main.js`. Inside `services/webxpanel.js`, configure your connection settings or use the URL parameters to redirect the default to your device.

### Compiles and hot-reloads for development

```
npm run serve
```

Comments:

- Hot reload and the dynamic module registration for the Vuex store are not reliable (I'm still new to this). If you want to verify the store is accurate, manually refresh the page in your browser.
- You can use a remote logger service to view the console or other interactions. I have had success using the following:
  - [remotejs.com](https://remotejs.com/)

### Compiles and minifies for production

```
npm run build
ch5-cli archive
```

Notes on building with `ch5-cli`:

- `-d` must not be the same directory as `-o`. I think it causes a loop.
- `-p` will prompt for auth credentials if required by the device. You can provide them, but I would not recommend keeping credentials in your package.json.
- building for web and tsw is not different, but the commands are there for consistency and future changes. Deploying has differences

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
