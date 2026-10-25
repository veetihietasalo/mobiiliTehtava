# mobiiliTehtava

Try it in the browser: https://veetihietasalo.github.io/mobiiliTehtava/
It's the web build of the mobile app, so the layout is made for a phone screen.

A shopping list app from a mobile programming course (mobiilitehtävä is Finnish for mobile assignment). The app is called OstosListaApp in `app.json`.

Type an item and tap Add to put it on the list, tap Clear to empty the list. The list is kept in memory only, it's gone when the app closes. The input placeholder is in Finnish.

Stack: JavaScript, React Native 0.72, Expo SDK 49. All the code is in `App.js`.

Run it:

```
npm install
npm start
```

`npm start` runs `expo start`. `npm run android` and `npm run ios` are in `package.json` too. The project is on Expo SDK 49, so Expo Go has to be a version that supports SDK 49.

Web build:

```
npm run build:web
npm run deploy:web
```

`build:web` runs `expo export --platform web` (Metro) into `dist/`, then `scripts/web-relative-paths.js` makes the paths relative. GitHub Pages serves the app from `/mobiiliTehtava/` and Expo SDK 49 has no base URL setting. `deploy:web` builds and pushes `dist/` to the `gh-pages` branch.

Status: course assignment, university of applied sciences, September 2023. No tests.
