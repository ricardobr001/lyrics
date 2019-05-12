const https = require('https')

const NOTFOUND = 'lyric not found'

class Lyric {
    vagalume(artist, song) {
        return new Promise(
            (resolve, reject) => {
                https.get(
                    'https://api.vagalume.com.br/search.php?' +
                    '&art=' + artist +
                    '&mus=' + song,
                    res => {
                        let data = ''
                
                        res.on('data', (chunk) => {
                            data += chunk
                        })
                
                        res.on('end', () => {
                            const d = JSON.parse(data)

                            if (d.type === 'notfound') {
                                resolve(NOTFOUND)
                            } else {
                                resolve(d.mus[0].text)
                            }
                        })
                    }
                ).on('error', err => {
                    reject(err)
                })
            }
        )
    }

    async getLyric(artist, song) {
        return await this.vagalume(artist, song)
    }
}

module.exports = new Lyric()
