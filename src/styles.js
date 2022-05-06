import { createGlobalStyle } from "styled-components";

import jedi from './assets/Starjedi.ttf'

export default createGlobalStyle`
    @font-face{
        font-family: jedi;
        src: url(${jedi});
    }
    span,div{
        font-family: jedi;
    }
`

