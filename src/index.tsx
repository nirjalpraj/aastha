import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Gallery from "./pages/Gallery";
import News from "./pages/News";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="gallery" element={<Gallery />} />
      <Route path="news" element={<News />} />
    </Routes>
  </BrowserRouter>
);
