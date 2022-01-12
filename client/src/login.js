import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {container} from 'react-bootstrap'

const AUTH_URL = 'https://accounts.spotify.com/authorize?client_id=c3702623b01045d6b51e058935cf9145&response_type=code&redirect_uri=http://localhost:3000&show_dialog=true&scope=user-read-private%20user-read-email%20user-modify-playback-state%20user-read-playback-position%20user-library-read%20streaming%20user-read-playback-state%20user-read-recently-played%20playlist-read-private';




export default function login() {
    return <container className="d-flex justify-content-center align-items-center" style={{minHeight: "100vh"}}>
    <a className='btn btn-success btn-lg' href={AUTH_URL}>
        Login with Spotify
    </a>
</container>
}