import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './common.css';
import MainPage from "./pages/mainPage/MainPage";
import AddPage from "./pages/addPage/AddPage";
import Data from "./data";

const data = new Data();  // <- 얘는 새로운 페이지 생길때마다 넘겨줘야함, 반복되는 로직이라면 hook, HOC을 사용할 수 있음

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route index element={<MainPage data={data} />} />
      <Route path="/add" element={<AddPage data={data} />} />
    </Routes>
  </BrowserRouter>
);
