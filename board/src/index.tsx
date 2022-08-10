import React from 'react';
import ReactDOM from 'react-dom/client';
import MainPage from './pages/MainPage';
import GlobalStyle from './styles/globalStyle';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <MainPage/>
  </React.StrictMode>,
);
