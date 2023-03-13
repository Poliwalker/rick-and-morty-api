import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}

body{
    background-color: #131415;
    color: #fff;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100vh;
    padding-top: 200px;
}
`;
