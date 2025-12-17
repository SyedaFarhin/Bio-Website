import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Bookings from "./pages/Bookings";
import Shop from "./pages/Shop";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sand via-white to-mist text-charcoal">
      <Navbar />
      <main className="pt-20 pb-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;

