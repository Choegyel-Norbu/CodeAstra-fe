import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { AuthProvider } from "../services/AuthProvider";
import Landing from "../pages/Landing";
import About from "../pages/About";

export default function () {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </AuthProvider>
  );
}
