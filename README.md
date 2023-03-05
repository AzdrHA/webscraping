`npm i webscraping`

```js
const webscraping = require('webscraping')
const webscraping = new webscraping.DogpileImageScraping('frog')
webscraping.getPictures().then((res) => {
    console.log(res)
})
```

```ts
import { DogpileImageScraping } from 'webscraping'
const webscraping = new DogpileImageScraping('frog')
webscraping.getPictures().then((res) => {
    console.log(res)
})
```