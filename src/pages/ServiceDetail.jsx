import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getServiceById } from "../data/services";

const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = getServiceById(id);

  if (!service) {
    return (
      <div className="section-shell space-y-4">
        <p className="text-lg text-charcoal/80">
          That service isn&apos;t available. Please choose another option.
        </p>
        <Link
          to="/services"
          className="inline-flex items-center rounded-full bg-charcoal text-white px-5 py-3 text-sm font-semibold shadow-soft"
        >
          Back to services
        </Link>
      </div>
    );
  }

  return (
    <div className="section-shell space-y-10">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.25em] text-charcoal/60">
          {service.mode}
        </p>
        <h1 className="text-4xl font-display font-semibold text-charcoal">
          {service.title}
        </h1>
        <p className="text-lg text-charcoal/80 leading-relaxed max-w-3xl">
          {service.detail}
        </p>
        {service.status === "coming-soon" && (
          <p className="badge bg-clay/40 text-charcoal border border-clay/60">
            Available from {service.availableFrom}
          </p>
        )}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="glass-card rounded-3xl p-8 space-y-5">
          <h2 className="text-2xl font-display font-semibold text-charcoal">
            Session options
          </h2>
          <div className="space-y-3">
            {service.options.map((option) => (
              <div
                key={option.label}
                className="flex items-center justify-between rounded-2xl border border-white/60 bg-white/70 px-4 py-3"
              >
                <div>
                  <p className="font-semibold text-charcoal">{option.label}</p>
                  <p className="text-sm text-charcoal/70">
                    {option.duration} min
                  </p>
                </div>
                <p className="text-sm font-semibold text-charcoal">
                  {option.price}
                </p>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-3 pt-2">
            <button
              onClick={() => navigate("/bookings", { state: { serviceId: id } })}
              className={`rounded-full px-5 py-3 text-sm font-semibold shadow-soft transition ${
                service.status === "coming-soon"
                  ? "bg-sand text-charcoal/60 cursor-not-allowed"
                  : "bg-charcoal text-white hover:-translate-y-0.5 hover:shadow-lg"
              }`}
              disabled={service.status === "coming-soon"}
            >
              {service.status === "coming-soon"
                ? "Bookings open soon"
                : "Book this service"}
            </button>
            <Link
              to="/services"
              className="text-sm font-semibold text-charcoal underline underline-offset-4"
            >
              Back to services
            </Link>
          </div>
        </div>
        <div className="glass-card rounded-3xl p-8 space-y-4">
          <h3 className="text-xl font-display font-semibold text-charcoal">
            What to expect
          </h3>
          <ul className="space-y-3 text-charcoal/85 leading-relaxed">
            <li>• Brief grounding and intention setting</li>
            <li>• Clear translation of insight into practical steps</li>
            <li>• Gentle integration suggestions after the session</li>
            <li>• Honest boundaries—no miracle promises</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;

