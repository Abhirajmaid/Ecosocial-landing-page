import React from "react";
import { Land } from "./pages/Land/Land";
import GlobalStyle from "./Global/Globalstyle";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route exact path="/" element={<Land />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
