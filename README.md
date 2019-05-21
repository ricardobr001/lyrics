# Lyric

This is a simple lib that recover the lyric of a specific song in the [vagalume](https://www.vagalume.com.br/) website.  
Enjoy it

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

### Requirement

Node on version `8.x` or `higher`