import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}
  body {
    background-color: #36393f;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased !important;
    font-family: "Helvetica Neue", monospace, sans-serif;
  }
  html {
    scrollbar-width: none; /* For Firefox */
    -ms-overflow-style: none; /* For Internet Explorer and Edge */
  }

  html::-webkit-scrollbar {
      width: 0px; /* For Chrome, Safari, and Opera */
  }
`;
export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;
