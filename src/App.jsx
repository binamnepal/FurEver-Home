import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About-us.jsx";
import ContactUs from "./pages/Contact.jsx";
import Adopt from "./pages/Adopt.jsx";
import Donation from "./pages/Donation.jsx";
import AdoptDogPage from "./pages/Dog-adopt.jsx";
import AdoptFormPage from "./Component/Form.jsx";
import AdoptCat from "./pages/AdoptCat.jsx";
import AnimalHealth from "./pages/Animal-health.jsx";
import AdoptOthers from "./pages/OthersAnimal.jsx";
import LoginPage from "./Component/Login.jsx";
import Register from "./Component/Register.jsx";
import Dashboard from "./Component/Dashboard.jsx";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/adopt" element={<Adopt/>} />
        <Route path="/donate" element={<Donation/>} />
        <Route path="/adopt-dog" element={<AdoptDogPage/>} />
        <Route path="/adoption-form" element={<AdoptFormPage/>} />
        <Route path="/adopt-cat" element={<AdoptCat/>} />
        <Route path="/adopt-others" element={<AdoptOthers/>} />
        <Route path="/animal-health" element={<AnimalHealth/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<Register/>} />
       <Route path="/" element={<Home/>} />
        <Route path="/login" element={<LoginPage />} />
        <Route 
            path="/dashboard" 
            element={ 
             localStorage.getItem("userToken") ? <Dashboard /> : <Navigate to="/login" />
              } 
              />
         </Routes>
    </BrowserRouter>
        );
       
       }