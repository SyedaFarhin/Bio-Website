import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/bookings", label: "Bookings" },
  { to: "/shop", label: "Shop" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `text-sm font-semibold tracking-wide transition-colors ${
      isActive ? "text-charcoal" : "text-charcoal/80 hover:text-charcoal"
    }`;

  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-white/90 backdrop-blur-md border-b border-white/70 shadow-sm">
      <nav className="section-shell flex items-center justify-between h-16">
        <Link to="/" className="flex items-baseline gap-2">
          <span className="text-lg font-display font-semibold text-charcoal">
            Henry
          </span>
          <span className="text-xs uppercase tracking-[0.2em] text-charcoal/60">
            Guidance & Care
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/bookings"
            className="rounded-full bg-charcoal text-white text-sm font-semibold px-4 py-2 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            Book a Session
          </Link>
        </div>

        <button
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full bg-charcoal text-white transition hover:shadow-soft focus:outline-none focus:ring-2 focus:ring-clay"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation menu"
        >
          <span className="sr-only">Menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-6 h-6 transition ${open ? "rotate-45" : ""}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 6.75h15m-15 5.25h15m-15 5.25h15"
            />
          </svg>
        </button>
      </nav>

      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="section-shell pb-4 space-y-3">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `${linkClass({ isActive })} block rounded-lg px-3 py-2 bg-white/80`
              }
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/bookings"
            onClick={() => setOpen(false)}
            className="block text-center rounded-full bg-charcoal text-white text-sm font-semibold px-4 py-2 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            Book a Session
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

