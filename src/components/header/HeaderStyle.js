import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'



export const HeaderButton = styled(Link)`
    padding: 8px 40px; 
    border-radius: 50px; 
    margin-right: 40px;
    letter-spacing:2px;
    box-sizing: border-box;
    font-size: 14px;
    background-color: none;
    color: #fff;
    cursor: pointer;
    text-decoration:none;
    &:hover{
        background-color: #303030;
    }
`

export const RegisterButton = styled(Link)`
    padding: 4px 15px;  
    background-color: #0f0f0f; 
    color: #fff; 
    font-size: 14px;
    border: 2px solid #ffe81f;
    border-radius: 2px;
    cursor: pointer;
    text-decoration:none;
    &:hover{
        color: #ffe81f; 
    }
`