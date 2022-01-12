import React, { Component } from 'react';
import PropTypes from 'prop-types';
import useAuth from './useAuth';



export default function Dashboard({code}){
    const accessToken = useAuth(code)
    return <div>{code}</div>
}