import React, { useState,useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios'


export default function useAuth(code){
const [accessToken, setAccessToken] = useState()
const [refreshToken, setRefreshToken] = useState()
const [expiresIn, setExpiresIn] = useState()


useEffect( () => {
    axios.post('http://localhost:3001/login',{
        code,
    }).then(res => {
        // console.log(res.data)
        setAccessToken(res.data.accessToken)
        setRefreshToken(res.data.refreshToken)
        setExpiresIn(res.data.expiresIn)
        window.history.pushState({},null, "/")
    }).catch(() => {
        window.location = "/"
    })
}, [code])

}
