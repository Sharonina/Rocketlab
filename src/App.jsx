import React from "react";
import "./App.styl";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeComponent from "./Home/Home.component";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<HomeComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
