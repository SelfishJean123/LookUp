import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import ProductPage from "./pages/ProductPage/ProductPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.scss";

const App = () => {
  return (
    <div className='app-component'>
      <BrowserRouter>
        <Header />

        <div className='main-content-wrapper container'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/products' element={<ProductsPage />} />
            <Route path='/products/:id' element={<ProductPage />} />
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
