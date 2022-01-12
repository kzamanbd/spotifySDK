const express = require('express')
const SpotifyWebApi = require('spotify-web-api-node')

const cors = require('cors')

const app = express()
app.use(cors())

app.post('/login', function(req, res){
    const code = req.body.code
    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000',
        clientId: 'c3702623b01045d6b51e058935cf9145',
        clientSecret: '3d2044d208b245ebbc0f621ea779df9d',
    })
    spotsdifyApi.refreshAccessToken().then(
        data => {
            res.json({
                accessToken: data.body.access_token,
                refreshToken: data.body.refresh_token,
                expiresIn: data.body.expires_in,
            })
        }).catch(() => {
            res.sendStatus(400)
        })

})

app.listen(3001)