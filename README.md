# Reactive UI with Vanilla JavaScript 🚀
🤔Can you build reactive UI without any JavaScript framework by using only Vanilla JS? Yes, you can 💪! Please check the demo and the code of the simple cars shop with shopping cart and search functionality. It rerenders the UI after the state is changed without usage of any framework, just plain JS.

## How to run code?
To run a code, please run in your terminal `npm run start`. Webpack (a module bundler) will prepare dev build in `/dist` folder, and then the `webpack-dev-server` will launch the project in your browser at the address http://localhost:9000/. If any changes will be applied to the source code, `webpack-dev-server` will compile the code automatically and will reload the project in the browser (hot reloading).

## Build for production
To have a production build, please run `npm run build` at your terminal. In that case, the js, css assets will be minified, and all required files to run a project will be added to the `/dist` folder.

## Testing
For testing [JEST](https://jestjs.io/) test runner is being used. The test spec for `ShoppingBag` component you can find at `/src/tests` directory. To run the tests, please run `npm run test`.