import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
    }

    body{
        background: ${({ theme }) => theme.colors.background};
        font-size: 15px;
        color: ${({ theme }) => theme.colors['text-white']};
    }
`
