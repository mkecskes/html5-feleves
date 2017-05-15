# HTML5 féléves feladat

## Megvalósítás

A baseurl a js/secrets.js fájlban definiálandó a következőképpen:

```javascript
var baseurl = "http://host.tld/path/to/service";
```

## Függvények leírása

### `window.onload`

A menüpontokra onclick event handlert helyez el, ami a `href` paraméternek megfelelő paraméterrel hívja a `getPage` függvényt. Végül meghívja a `getPage` függvényt az aktuális `window.location.hash` értékkel.

### `getPage(location)`

A location (#sports, #championships, stb.) paraméter szerint hajt végre egy műveletet. Nem felismert paraméter esetén a "Válassz a fenti menüpontok közül!" szöveg jelenik meg.

### `displayData(path, title, contentEl, callback)`

Végrehajt egy AJAX GET kérést a `baseurl + title` url-en. A visszakapott JSON-t parse-olja, egy html változóba beleírja az értékül kapott `title` paramétert (HTML tagekkel), majd a JSON tömb összes elemére meghívja a megkapott `callback` paraméter függvényt és a visszakapott értéket hozzáfűzi a html változóhoz. Végül a `contentEl` paraméter `innerHTML`-jét beállítja a html értékére.
