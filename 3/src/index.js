import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './common.css';
import MainPage from './pages/mainPage/MainPage';
import AddPage from './pages/addPage/AddPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<Routes>
			<Route index element={<MainPage />} />
			<Route path="/add" element={<AddPage />} />
		</Routes>
	</BrowserRouter>
);
