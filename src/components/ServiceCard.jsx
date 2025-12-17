import React from "react";
import { Link } from "react-router-dom";

const statusStyles = {
  available: "bg-sage/20 text-charcoal border-sage/60",
  "coming-soon": "bg-clay/30 text-charcoal border-clay/60",
};

const ServiceCard = ({ service }) => {
  const { id, title, description, mode, status } = service;
  const badgeColor = statusStyles[status] || "bg-mist text-charcoal";

  return (
    <div className="glass-card rounded-2xl p-6 flex flex-col gap-4 animate-fadeIn">
      <div className="flex items-center justify-between gap-3">
        <p className="badge bg-charcoal text-white">{mode}</p>
        <p className={`badge border ${badgeColor}`}>
          {status === "coming-soon" ? "Coming Soon" : "Available"}
        </p>
      </div>
      <div className="space-y-3">
        <h3 className="text-xl font-display font-semibold text-charcoal">
          {title}
        </h3>
        <p className="text-sm text-charcoal/80 leading-relaxed">
          {description}
        </p>
      </div>
      <div className="flex items-center justify-between pt-2">
        <Link
          to={`/services/${id}`}
          className="text-sm font-semibold text-charcoal underline underline-offset-4 hover:text-charcoal/80"
        >
          Learn more
        </Link>
        <Link
          to={`/bookings?service=${id}`}
          className={`text-sm font-semibold px-4 py-2 rounded-full transition shadow-soft ${
            status === "coming-soon"
              ? "bg-sand text-charcoal/60 cursor-not-allowed"
              : "bg-charcoal text-white hover:-translate-y-0.5 hover:shadow-lg"
          }`}
          aria-disabled={status === "coming-soon"}
        >
          {status === "coming-soon" ? "Not yet" : "Book"}
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;

