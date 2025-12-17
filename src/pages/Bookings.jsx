import React, { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import BookingCard from "../components/BookingCard";
import { services } from "../data/services";

const allowedDays = [5, 6, 0, 1, 2]; // Friday to Tuesday

const getUpcomingDays = (count = 8) => {
  const dates = [];
  const today = new Date();

  for (let i = 1; dates.length < count && i < 21; i += 1) {
    const next = new Date(today);
    next.setDate(today.getDate() + i);
    const day = next.getDay();
    if (allowedDays.includes(day)) {
      dates.push(next);
    }
  }
  return dates;
};

const timeSlots = ["8:00 a.m.", "9:30 a.m.", "11:00 a.m.", "1:00 p.m.", "2:30 p.m."];

const Bookings = () => {
  const location = useLocation();
  const [selectedServiceId, setSelectedServiceId] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const upcomingDates = useMemo(() => getUpcomingDays(), []);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const fromQuery = params.get("service");
    if (fromQuery) {
      setSelectedServiceId(fromQuery);
    }
  }, [location.search]);

  const selectedService = services.find((svc) => svc.id === selectedServiceId);
  const inPersonDisabled =
    selectedService?.mode === "In Person" && selectedService?.status === "coming-soon";

  const resetSelections = () => {
    setSelectedOption("");
    setSelectedDate("");
    setSelectedTime("");
  };

  const handleServiceSelect = (id) => {
    setSelectedServiceId(id);
    resetSelections();
  };

  const formatDate = (date) =>
    date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });

  return (
    <div className="section-shell space-y-10">
      <header className="space-y-3">
        <p className="text-sm uppercase tracking-[0.25em] text-charcoal/60">
          Bookings
        </p>
        <h1 className="text-4xl font-display font-semibold text-charcoal">
          Reserve time with Henry
        </h1>
        <p className="text-lg text-charcoal/80 leading-relaxed">
          Availability: Friday – Tuesday, 8:00 a.m. – 3:00 p.m. In-person
          sessions open mid-February.
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="glass-card rounded-3xl p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-display font-semibold text-charcoal">
              Online services
            </h2>
            <span className="badge bg-sage/30 text-charcoal border border-sage/60">
              Available
            </span>
          </div>
          <div className="space-y-3">
            {services
              .filter((svc) => svc.mode === "Online")
              .map((svc) => (
                <BookingCard
                  key={svc.id}
                  title={svc.title}
                  description={svc.description}
                  active={selectedServiceId === svc.id}
                  action={() => handleServiceSelect(svc.id)}
                />
              ))}
          </div>
        </div>

        <div className="glass-card rounded-3xl p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-display font-semibold text-charcoal">
              In-person services
            </h2>
            <span className="badge bg-clay/30 text-charcoal border border-clay/60">
              Available from mid-February
            </span>
          </div>
          <div className="space-y-3">
            {services
              .filter((svc) => svc.mode === "In Person")
              .map((svc) => (
                <BookingCard
                  key={svc.id}
                  title={svc.title}
                  description={svc.description}
                  hint="Booking temporarily disabled"
                  disabled={svc.status === "coming-soon"}
                  active={selectedServiceId === svc.id}
                  action={() => handleServiceSelect(svc.id)}
                />
              ))}
          </div>
        </div>
      </div>

      <div className="glass-card rounded-3xl p-6 space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-display font-semibold text-charcoal">
            2. Choose duration
          </h2>
          {selectedService && (
            <p className="text-sm text-charcoal/70">{selectedService.title}</p>
          )}
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {selectedService ? (
            selectedService.options.map((opt) => (
              <button
                key={opt.label}
                type="button"
                onClick={() => setSelectedOption(opt.label)}
                className={`rounded-2xl border px-4 py-3 text-left transition ${
                  selectedOption === opt.label
                    ? "border-charcoal bg-white shadow-soft"
                    : "border-white/60 bg-white/70 hover:shadow-md"
                }`}
                disabled={inPersonDisabled}
              >
                <p className="font-semibold text-charcoal">{opt.label}</p>
                <p className="text-sm text-charcoal/70">{opt.price}</p>
              </button>
            ))
          ) : (
            <p className="text-sm text-charcoal/70 col-span-full">
              Select a service to view durations.
            </p>
          )}
        </div>
      </div>

      <div className="glass-card rounded-3xl p-6 space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-display font-semibold text-charcoal">
            3. Choose date & time
          </h2>
          <p className="text-sm text-charcoal/70">
            Friday – Tuesday · 8:00 a.m. – 3:00 p.m.
          </p>
        </div>

        {inPersonDisabled && (
          <div className="rounded-2xl border border-clay/60 bg-clay/30 px-4 py-3 text-sm text-charcoal">
            In-person services will be available from mid-February. You can
            still browse details above.
          </div>
        )}

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-3">
            <p className="text-sm font-semibold text-charcoal">Upcoming days</p>
            <div className="grid grid-cols-2 gap-2">
              {upcomingDates.map((date) => {
                const formatted = formatDate(date);
                return (
                  <button
                    key={formatted}
                    type="button"
                    onClick={() => setSelectedDate(formatted)}
                    disabled={inPersonDisabled}
                    className={`rounded-xl border px-3 py-2 text-sm transition ${
                      selectedDate === formatted
                        ? "border-charcoal bg-white shadow-soft"
                        : "border-white/60 bg-white/70 hover:shadow-md"
                    } ${inPersonDisabled ? "opacity-60 cursor-not-allowed" : ""}`}
                  >
                    {formatted}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-semibold text-charcoal">Time window</p>
            <div className="grid grid-cols-2 gap-2">
              {timeSlots.map((slot) => (
                <button
                  key={slot}
                  type="button"
                  onClick={() => setSelectedTime(slot)}
                  disabled={inPersonDisabled}
                  className={`rounded-xl border px-3 py-2 text-sm transition ${
                    selectedTime === slot
                      ? "border-charcoal bg-white shadow-soft"
                      : "border-white/60 bg-white/70 hover:shadow-md"
                  } ${inPersonDisabled ? "opacity-60 cursor-not-allowed" : ""}`}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="glass-card rounded-3xl p-6 space-y-4">
        <h2 className="text-xl font-display font-semibold text-charcoal">
          4. Review
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/60 bg-white/70 p-4">
            <p className="text-sm text-charcoal/70">Service</p>
            <p className="font-semibold text-charcoal">
              {selectedService?.title || "Select a service"}
            </p>
            <p className="text-sm text-charcoal/70 mt-1">
              {selectedService?.mode || "Online or in person"}
            </p>
          </div>
          <div className="rounded-2xl border border-white/60 bg-white/70 p-4">
            <p className="text-sm text-charcoal/70">Duration</p>
            <p className="font-semibold text-charcoal">
              {selectedOption || "Pick a duration"}
            </p>
            <p className="text-sm text-charcoal/70 mt-1">
              {selectedDate && selectedTime
                ? `${selectedDate} · ${selectedTime}`
                : "Choose a date and time"}
            </p>
          </div>
        </div>
        <button
          type="button"
          disabled={
            !selectedService ||
            !selectedOption ||
            !selectedDate ||
            !selectedTime ||
            inPersonDisabled
          }
          className={`w-full sm:w-auto rounded-full px-5 py-3 text-sm font-semibold shadow-soft transition ${
            !selectedService ||
            !selectedOption ||
            !selectedDate ||
            !selectedTime ||
            inPersonDisabled
              ? "bg-sand text-charcoal/50 cursor-not-allowed"
              : "bg-charcoal text-white hover:-translate-y-0.5 hover:shadow-lg"
          }`}
        >
          Confirm (UI only)
        </button>
      </div>
    </div>
  );
};

export default Bookings;

