import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import jedi from './assets/Starjedi.ttf'
import { Link } from "react-router-dom";

export default createGlobalStyle`
    @font-face{
        font-family: jedi;
        src: url(${jedi});
    }
    span,div{
        font-family: jedi;
    }
`
export const StyledLink = styled(Link)`
    text-decoration:none;
`