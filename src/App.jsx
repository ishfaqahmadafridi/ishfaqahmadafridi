// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom"; // ❌ Do not import BrowserRouter here
import LandingPage from "./components/LandingPage";
import Home from "./components/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
