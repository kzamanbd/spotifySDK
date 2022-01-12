const express = require('express')
const cors = require("cors")
const SpotifyWebApi = require('spotify-web-api-node')
const bodyParser = require("body-parser")
const app = express();
app.use(cors())
app.use(bodyParser.json())

app.post('/refresh', (req, res) => {
    const refreshToken = req.body.refreshToken
    const spotsdifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000',
        clientId: 'c3702623b01045d6b51e058935cf9145',
        clientSecret: '3d2044d208b245ebbc0f621ea779df9d',
        refreshToken,
    })


    spotsdifyApi.refreshAccessToken().then(
        (data) => {
            console.log(data.body);
            spotsdifyApi.setAccessToken(data.body['access_token']);
        }).catch(() => {
            res.sendStatus(400)
        })






})

app.post('/login', (req,res) => {
    const code = req.body.code
    const spotsdifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000',
        clientId: 'c3702623b01045d6b51e058935cf9145',
        clientSecret: '3d2044d208b245ebbc0f621ea779df9d',
    })
    
spotsdifyApi.authorizationCodeGrant(code).then(data => {
    res.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in
    })
})

})

app.listen(3001) 