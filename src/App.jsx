import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Layout />} /> */}
        <Route index element={<Dashboard />} />
        <Route path="/home" element={<Home />} />
        {/* <Route pa th=''/> */}
      </Routes>
    </Router>
  );
}

export default App;
