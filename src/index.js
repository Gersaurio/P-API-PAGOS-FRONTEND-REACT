import React from "react";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './pages/LoginPage';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home, HomeAdmin } from "./pages/Home";


const root = ReactDOM.createRoot(document.getElementById("root"));






root.render(
  <BrowserRouter> 
    <Routes>
      <Route path="/" element={<LoginPage/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/admin" element={<h1>Soy una vista de administrador</h1>}></Route>
    </Routes>
    
  </BrowserRouter>
);





