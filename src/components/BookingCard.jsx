import React from "react";

const BookingCard = ({
  title,
  description,
  hint,
  action,
  disabled = false,
  active = false,
}) => {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={action}
      className={`w-full text-left rounded-2xl border px-4 py-3 transition shadow-sm ${
        active
          ? "border-charcoal bg-white shadow-soft"
          : "border-white/60 bg-white/70 hover:shadow-md"
      } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      <p className="text-sm font-semibold text-charcoal">{title}</p>
      {description && (
        <p className="text-sm text-charcoal/75 mt-1">{description}</p>
      )}
      {hint && <p className="text-xs text-charcoal/60 mt-2">{hint}</p>}
    </button>
  );
};

export default BookingCard;

