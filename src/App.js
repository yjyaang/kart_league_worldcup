import React from "react";
import "./App.css";
import { createGlobalStyle } from "styled-components"
import Start from './components/Start';
import Main from './components/Main/Main';
import Header from "./Header";
// import Footer from "./Footer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import GmarketSansMedium from './styles/fonts/GmarketSansMedium.woff';

const GlobalStyle = createGlobalStyle`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  body {
    font-family: 'GmarketSansMedium';
  }
`

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/main" element={<Main />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
