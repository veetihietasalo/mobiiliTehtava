# mobiiliTehtava

A shopping list app from a mobile programming course (mobiilitehtävä is Finnish for mobile assignment). The app is called OstosListaApp in `app.json`.

Type an item and tap Add to put it on the list, tap Clear to empty the list. The list is kept in memory only, it's gone when the app closes. The input placeholder is in Finnish.

Stack: JavaScript, React Native 0.72, Expo SDK 49. All the code is in `App.js`.

Run it:

```
npm install
npm start
```

`npm start` runs `expo start`. `npm run android` and `npm run ios` are in `package.json` too. The project is on Expo SDK 49, so Expo Go has to be a version that supports SDK 49.

Status: course assignment, university of applied sciences, September 2023. No tests.
