import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-white/60 bg-white/80 backdrop-blur-sm">
      <div className="section-shell py-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold text-charcoal">Henry</p>
          <p className="text-sm text-charcoal/70">
            Grounded guidance, thoughtful ritual, and calm integration.
          </p>
        </div>
        <div className="flex gap-4 text-sm font-semibold text-charcoal/80">
          <Link to="/services" className="hover:text-charcoal">
            Services
          </Link>
          <Link to="/bookings" className="hover:text-charcoal">
            Bookings
          </Link>
          <Link to="/shop" className="hover:text-charcoal">
            Shop
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

