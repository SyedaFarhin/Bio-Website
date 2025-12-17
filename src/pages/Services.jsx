import React from "react";
import { Link } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data/services";

const Services = () => {
  return (
    <div className="section-shell space-y-10">
      <header className="space-y-4">
        <p className="text-sm uppercase tracking-[0.25em] text-charcoal/60">
          Services
        </p>
        <h1 className="text-4xl font-display font-semibold text-charcoal">
          Choose the support that fits right now.
        </h1>
        <p className="text-lg text-charcoal/80 leading-relaxed max-w-3xl">
          Each session is tailored to your needs and grounded in honest
          conversation. Online offerings are available now; in-person options
          open mid-February.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

      <div className="glass-card rounded-3xl p-8 space-y-4">
        <h2 className="text-2xl font-display font-semibold text-charcoal">
          Not sure where to start?
        </h2>
        <p className="text-charcoal/80 leading-relaxed">
          Book a short tarot session or a brief consult. We&apos;ll clarify what
          you need most, set expectations, and plan a next step that feels
          doable.
        </p>
        <Link
          to="/bookings"
          className="inline-flex items-center rounded-full bg-charcoal text-white px-5 py-3 text-sm font-semibold shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg"
        >
          Go to bookings
        </Link>
      </div>
    </div>
  );
};

export default Services;

