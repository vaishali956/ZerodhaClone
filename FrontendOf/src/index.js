import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import HomePage from './landing_page/home/HomePage';
import SignupPage from "./landing_page/signup/SignupPage";
import AboutPage from "./landing_page/about/AboutPage";
import ProductPage from "./landing_page/product/ProductPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import SupportPage from "./landing_page/support/SupportPage";
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import NotFound from './landing_page/NotFound';
import AccountPage from './landing_page/account/AccountPage';
import Register from './landing_page/account/Register';
import Login from './landing_page/account/Login';
import Homee from './landing_page/account/Homee';
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
       <Route path="/" element={<HomePage />}/>
       <Route path="/signup" element={<SignupPage />}/> 
       <Route path="/about" element={<AboutPage />}/> 
       <Route path="/product" element={<ProductPage />}/> 
       <Route path="/pricing" element={<PricingPage />}/> 
      <Route path="/support" element={<SupportPage />}/> 
      <Route path="*" element={<NotFound />}/> 
      <Route path="/account" element={<AccountPage />} /> 
      <Route path="/register" element ={<Register/>} />
      <Route path="/login" element ={<Login/>} />
       <Route path="/homee" element ={<Homee/>} />
    </Routes>
    <Footer/>
  </BrowserRouter>
);
