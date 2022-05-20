import styled from "styled-components";


export const SearchBar = styled.input`
    width: 100%;
    max-width: 570px;
    padding: 10px;
    margin-top: 45px;
    margin-bottom: 25px;
    background-color: #303030;
    border: 1px solid;
    border-color: #fff;
    border-radius: 2px; 
    color: black;
    font-size: 14px!important;

    &:placeholder {
        color: lightgrey;
}

    &{
        color: white;
        font-size: 18px;
}
    &:focus{
        border-color: #ffe81f;
    }

    &:hover{
        border-color: #ffe81f;
    }
    
`;
