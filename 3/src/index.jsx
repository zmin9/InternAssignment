import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './common.css';
import { ThemeProvider } from 'styled-components';
import MainPage from './pages/mainPage/MainPage';
import AddPage from './pages/addPage/AddPage';
import theme from './theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<ThemeProvider theme={theme}>
		<BrowserRouter>
			<Routes>
				<Route index element={<MainPage />} />
				<Route path="/add" element={<AddPage />} />
			</Routes>
		</BrowserRouter>
	</ThemeProvider>
);
