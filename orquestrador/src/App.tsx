import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import GlobalProvider from "./providers/GlobalProvider";

import Routes from "./routes";

const App = () => (
  <BrowserRouter>
    <GlobalProvider>
      <div>
        <Navbar />
      </div>
      <div>
        <Routes />
      </div>
    </GlobalProvider>
  </BrowserRouter>
);

export default App;
