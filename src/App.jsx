import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import VideoPage from "./pages/VideoPage";

import React from "react";
import MetamaskPage from "./pages/MetamaskPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home */}
        <Route path="/" element={<HomePage />} />
        <Route path="/video/:id" element={<VideoPage />} />
        <Route path="/meta" element={<MetamaskPage />} />
      </Routes>
    </BrowserRouter>
  );
}
