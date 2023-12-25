import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }

    html {
        width: 100%;
        height: 100%;
    }

    body{
        background-color: var(--secondary);
        color: var(--text-primary);
    }

    li {
        list-style: none;
    }

    h1{
        text-transform: uppercase;
        font-weight: 600;
        letter-spacing: -1px;
    }

    a,
    button {
        text-decoration: none;
        background-color: transparent;
        border: none;
        transition: .2s;
        color: #FFF;
        cursor: pointer;
    }

    a, input,
    button, textarea {
        border: none;
        outline: none;
        background-color: transparent;
        font-size: 1em;
        font-weight: 500;
    }

    input, textarea {
        padding: .5em .5em;
        color: #FFF;
    }

    input::placeholder,
    textarea::placeholder {
        color: #AAA;
    }

    :root {
        --primary: #F4B670;
        --secondary: #161618;
        --tertiary: #101010;
        --quaternary: #202020;
        
        --border-outline: #303030;
        --border-grey: #8A8C90;
        --border-separate: #202020;

        --text-primary: #FFF;
        --text-secondary: #707070;
        --text-tertiary: #AAA;
        --text-button: #101010;

        --white: #FFF;
        --grey: #8A8C90;

        --color-wrong: #721c24;
        --back-wrong: #f8d7d4;
        --border-wrong: #f5c6cb;

        --color-right: #1c7223;
        --back-right: #d4f8dc;
        --border-right: #cbf5c6;
    }
`