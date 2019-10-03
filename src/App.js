import React from "react";
import Chat from "./pages/Chat";

import GlobalStyle, { MainContainer } from "./global/styles";

function App() {
  return (
    <MainContainer className="App">
      <GlobalStyle />
      <Chat />
    </MainContainer>
  );
}

export default App;
