import React from 'react';
import styled from 'styled-components'
import { Flex, Text } from 'aiq-design-system';
import { RegisterButton } from '../header/HeaderStyle';
import { Link } from 'react-router-dom';

export const Card = styled.span`

background-color: #303030;
max-width: 100%;
min-width: 280px;
min-height: 136px;
border: 2px solid #606060;
padding-right: 16px;
padding-left: 16px;
padding-bottom: 7px;
display: flex;
border-radius: 0px;
flex-direction: column;
margin: 20px;
font-size: 20px;
   
`
export const FlexGrid = styled(Flex)`
    display: grid;  
    grid-template-areas: "card card card card";
`

export const TextInfo = styled(Flex)`
    color: #fff;
    padding: 5px;
    margin-top: 20px;
    letter-spacing: 2px;
    font-size: 15px;
    flex-direction: column;
`
export const StyledText = styled(Text)`
    font-family: sans-serif;
    font-size: 14px;
    letter-spacing: 0px;
    margin-top: 11px;    
`
export const DetailsButton = styled(RegisterButton)`
    background-color: #303030;
    height: 42px;
    text-align: center;
    width:100%;
    margin-top: 24px;
    padding: 7px 60px 7px 60px;
`

export const MovieDetailsButton = styled(DetailsButton)`
    padding: 7px 50px 7px 45px;
`
export const GraphCard = styled(Card)`
    position: absolute;
    top: 190px;
    right: 25px;
    width: 375px;
    max-height: 475px;
`
export const DetailCard = styled(Card)`
    width 835px;
`
export const CardLink = styled(Link)`
    color:white;
`