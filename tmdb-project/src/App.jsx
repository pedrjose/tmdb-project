import { useState } from "react";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Navbar } from "./Components/Navbar/Navbar";
import { Homepage } from "./Pages/Homepage/Homepage";
import { ViewPage } from "./Pages/ViewPage/ViewPage";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/view/:name" element={<ViewPage />} />
          <Route path="/*" element={<Homepage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
