import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
// import AnimeDetails from "./pages/AnimeDetails";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Layout />} /> */}
        <Route index element={<Dashboard />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/anime" element={<AnimeDetails />}/> */}
        {/* <Route pa th=''/> */}
      </Routes>
    </Router>
  );
}

export default App;
