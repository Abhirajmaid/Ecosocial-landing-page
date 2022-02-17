import React from "react";
import { Land } from "./pages/Land/Land";
import { Connect } from "./pages/Connect/Connect";
import GlobalStyle from "./global/Globalstyle";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route exact path="/" element={<Land />} />
          <Route exact path="/Connect" element={<Connect />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
