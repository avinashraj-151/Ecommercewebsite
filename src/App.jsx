import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Nopage from "./Pages/Nopage/Nopage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Nopage />} />
      </Routes>
    </Router>
  );
}

export default App;
