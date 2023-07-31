import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {
    --darkBlue: #6096B4;
    --lightBlue: #93BFCF;
    --grey: #BDCDD6;
    --beige: #EEE9DA;
    --text: #272727
  }

  body {
    margin: 0;
    min-height: 100vh;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    background-color: #EEE9DA
  }
`;
