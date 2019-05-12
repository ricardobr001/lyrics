# Lyric

### Install

```bash
npm install vagalume-lyrics
```

### Usage

```js
const lyric = require('vagalume-lyrics')

lyric.getLyric(
    'AC/DC',
    'Highway to Hell'
).then(res => {
    console.log(res)
})
.catch(err => {
    console.log(err)
})
```