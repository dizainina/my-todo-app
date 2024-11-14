import React from "react";
import { GlobalStyle } from "./styles";
import ToDos from "./modules/ToDos";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <ToDos />
    </>
  );
};

export default App;
