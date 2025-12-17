import React from "react";
import { Link } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data/services";

const Home = () => {
  const featured = services;

  return (
    <div className="space-y-16">
      <section className="section-shell pt-4">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] items-center">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-charcoal/60">
              Calm. Grounded. Practical.
            </p>
            <h1 className="text-4xl sm:text-5xl font-display font-semibold leading-tight text-charcoal">
              Warm, grounded guidance rooted in reverence for the everyday.
            </h1>
            <p className="text-lg text-charcoal/80 leading-relaxed">
              I help you translate spiritual insight into clear, compassionate
              steps you can live with—no theatrics, just real connection and
              care.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/services"
                className="inline-flex items-center justify-center rounded-full bg-charcoal text-white px-5 py-3 text-sm font-semibold shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                View Services
              </Link>
              <Link
                to="/bookings"
                className="inline-flex items-center justify-center rounded-full border border-charcoal/20 bg-white px-5 py-3 text-sm font-semibold text-charcoal hover:border-charcoal/40 transition"
              >
                Book a Session
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-mist blur-3xl rounded-full opacity-80" />
            <div className="relative glass-card rounded-3xl p-8 space-y-4">
              <p className="text-sm font-semibold text-charcoal/70">
                Centered energy
              </p>
              <p className="text-3xl font-display text-charcoal">
                Calm isn&apos;t passive. It&apos;s a clear, steady current that
                lets you move with intention.
              </p>
              <p className="text-sm text-charcoal/70">
                We&apos;ll work together to keep that current grounded—aligned
                with your values, your pace, and your body.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="glass-card rounded-3xl p-8 space-y-6">
          <h2 className="text-3xl font-display font-semibold text-charcoal">
            Welcome, I’m Henry.
          </h2>
          <div className="space-y-4 text-charcoal/85 leading-relaxed">
            <p>
              Welcome, I’m Henry. I grew up immersed in a wide range of
              spiritual traditions, from the wisdom of Hinduism and Buddhism to
              meditation, herbal practices, and working with elemental and
              subtle natural energies...
            </p>
            <p>
              That breadth keeps my approach grounded and discerning. I honor
              intuition, but I also respect practicality. Together we focus on
              clarity, alignment, and the next steady step—not miracle
              promises, just attentive care.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="glass-card rounded-3xl p-8 space-y-4">
            <h3 className="text-2xl font-display font-semibold text-charcoal">
              How I work
            </h3>
            <ul className="space-y-3 text-charcoal/85 leading-relaxed">
              <li>• Grounded, discerning approach</li>
              <li>• Balance of intuition + practicality</li>
              <li>• No miracle promises</li>
              <li>• Focus on clarity, alignment, real-world steps</li>
            </ul>
          </div>
          <div className="glass-card rounded-3xl p-8 space-y-4">
            <h3 className="text-2xl font-display font-semibold text-charcoal">
              Space that feels like a breath
            </h3>
            <p className="text-charcoal/85 leading-relaxed">
              Expect warm conversation, clear language, and a pace that lets you
              exhale. Sessions are collaborative—we’ll check in, adjust, and
              co-create what support looks like for you.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell space-y-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-charcoal/60">
              Services
            </p>
            <h3 className="text-3xl font-display font-semibold text-charcoal">
              Ways to work together
            </h3>
          </div>
          <Link
            to="/services"
            className="text-sm font-semibold text-charcoal underline underline-offset-4"
          >
            Explore all
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {featured.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;

