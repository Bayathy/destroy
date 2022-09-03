import React from "react";
import { css, Global } from "@emotion/react";
import { GlobalStyles as BaseStyles } from "twin.macro";

const customStyles = css(css`
  body {
    background-color: #d8d8d4;
    min-height: 100vh;
    box-sizing: border-box;
    list-style: none;
    font-family: "Inter", sans-serif;
    font-size: 16px;
  }
`);

const GlobalStyles = () => (
    <>
        <BaseStyles />
        <Global styles={customStyles} />
    </>
);

export default GlobalStyles;