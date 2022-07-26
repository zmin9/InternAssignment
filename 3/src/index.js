import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './common.css';
import MainPage from "./pages/mainPage/MainPage";
import AddPage from "./pages/addPage/AddPage";
import Data from "./data";

const data = new Data();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route index element={<MainPage data={data} />} />
      <Route path="/add" element={<AddPage data={data} />} />
    </Routes>
  </BrowserRouter>
);
