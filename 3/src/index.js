import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';
import './common.css';
import MainPage from "./mainPage/MainPage";
import AddPage from "./addPage/AddPage";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/add" element={<AddPage />} />
      {/*<Route path="/ct" element={<ComponentTest />} />*/}
    </Routes>
  </BrowserRouter>
);
