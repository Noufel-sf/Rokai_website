import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Navbar from "./Components/NavBar";
import Footer from "./Components/Footer";
import AboutUsPage from "./Pages/AboutUsPage";
import ContactUsPage from "./Pages/ContactUsPage";
import NotFoundPage from "./Pages/NotFoundPage";
import ErrorFallback from "./ErorrBoundrie/ErrorFallback";
import RegistrationPage from "./Pages/RegisterationPage";
import AdminDashboard from "./Pages/AdminDashboard";
import AdminLoginPage from "./Pages/AdminLogin";

export default function MainLayout() {
  return (
    <>
    <ErrorFallback>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/dashboard" element={<AdminDashboard />} />
          <Route path="/login" element={<AdminLoginPage />} />



          <Route path="*" element={<NotFoundPage />} /> 
        </Routes>
        <Footer />
    </ErrorFallback>
    </>
  );
}
