import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data/services";

const useSectionInView = (options = {}) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target); // animate once
        }
      },
      { threshold: 0.15, ...options }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [options]);

  return [ref, inView];
};

const Home = () => {
  const featured = services;

  const [heroRef, heroInView] = useSectionInView();
  const [aboutRef, aboutInView] = useSectionInView();
  const [workRef, workInView] = useSectionInView();
  const [servicesRef, servicesInView] = useSectionInView();

  return (
    <div className="relative space-y-16 overflow-hidden">
      {/* soft background colour accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-sage/40 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-clay/35 blur-3xl" />
        <div className="absolute inset-y-1/4 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-mist/80 blur-3xl" />
      </div>

      {/* HERO */}
      <section
        ref={heroRef}
        className={`section-shell pt-4 transition-all duration-700 ease-out ${
          heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-charcoal/60">
              Calm. Grounded. Practical.
            </p>
            <h1 className="text-4xl sm:text-5xl font-display font-semibold leading-tight text-charcoal">
              Warm, grounded guidance{" "}
              <span className="bg-gradient-to-r from-sage/60 via-mist/80 to-sand/70 px-1 rounded-lg">
                rooted in reverence
              </span>{" "}
              for the everyday.
            </h1>
            <p className="text-lg text-charcoal/80 leading-relaxed">
              I help you translate spiritual insight into clear, compassionate
              steps you can live with—no theatrics, just real connection and
              care.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                // to="/services"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-charcoal via-charcoal to-sage-900 text-white px-5 py-3 text-sm font-semibold shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg hover:from-charcoal/90 hover:to-sage-800"
              >
                View Services
              </Link>
              <Link
                // to="/bookings"
                className="inline-flex items-center justify-center rounded-full border border-charcoal/20 bg-white/90 px-5 py-3 text-sm font-semibold text-charcoal transition hover:border-sage/60 hover:bg-mist/80 hover:-translate-y-0.5 hover:shadow-md"
              >
                Book a Session
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[32px] bg-gradient-to-br from-sage/40 via-mist/40 to-sand/40 blur-3xl opacity-80" />
            <div className="relative glass-card rounded-3xl overflow-hidden shadow-soft">
              <div className="h-52 w-full overflow-hidden border-b border-white/50">
                <img
                  src="/userImage.jpg"
                  alt="A calm, grounded space with natural textures"
                  className="h-full w-full object-cover transition duration-700 ease-out hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <div className="p-6 space-y-3">
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
        </div>
      </section>

      {/* ABOUT + HOW I WORK SIDE BY SIDE */}
      <section
        ref={aboutRef}
        className={`section-shell xl:max-w-7xl transition-all duration-700 ease-out ${
          aboutInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="grid gap-10 md:grid-cols-2">
          {/* About */}
          <div className="glass-card rounded-3xl p-6 sm:p-8 space-y-6 border-l-4 border-sage/70 bg-gradient-to-br from-mist/70 via-white/85 to-sand/40">
            <div className="space-y-4 text-charcoal/85 leading-relaxed">
              <p className="inline-flex rounded-full bg-sage/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sage-700">
                About
              </p>
              <h2 className="text-3xl font-display font-semibold text-charcoal">
                Welcome, I’m Henry.
              </h2>
              <p>
              Welcome, I’m Henry.
I grew up immersed in a wide range of spiritual traditions, from the wisdom of Hinduism and
Buddhism to meditation, herbal practices, and working with elemental and subtle natural energies.
Alongside this, my upbringing also included a strong influence of science, questioning, and
skepticism from my father’s side. I believe this balance has shaped the way I work today; grounded,
discerning, and deeply respectful of both the seen and unseen.
Over the years, I’ve taken these foundations and built my own path as a practicing witch through
lived experience, dedication, and ongoing inner work. My journey has taken me overseas, where
I’ve learned from shamans in Peru, Colombia, Indonesia, and Australia, studying plant medicines,
healing techniques, and ways of connecting with the spirits and energies of different lands.
These experiences have profoundly shaped how I support others.
Today, my work weaves together intuitive tarot readings, bespoke spell work, sound healing
journey’s and intuitive massage that blends deep tissue techniques with energetic realignment.
Each offering is designed to support healing on multiple levels, emotional, energetic, spiritual, and
practical.
While I don’t promise miracles, I do offer guidance, clarity, and grounded support.
My approach isn’t just about spiritual insight, it’s about helping you take real, tangible steps
forward.
Whether your navigating life decisions, career direction, personal healing, or spiritual alignment,
my work is focused on helping you move with greater clarity, confidence, and purpose.
At its core, my practice is about opening roads to clearer energy, deeper understanding, greater
alignment, and a more intentional way of living.
I’ve dedicated my life to this work, and I offer it in service to those who feel called.
If you’re seeking support that honours both spirit and real life, I’d love to work with you.
              </p>
              
            </div>
            <div className="h-44 w-full overflow-hidden rounded-2xl border border-white/60 bg-mist/70 shadow-soft">
              <img
                src="/profile.jpg"
                alt="A person resting in a cozy, light-filled space"
                className="h-full w-full object-cover transition duration-700 ease-out hover:scale-[1.04]"
                loading="lazy"
              />
            </div>
          </div>

          {/* How I work */}
          <div
            ref={workRef}
            className={`glass-card rounded-3xl border-t-4 border-sage/70 p-6 sm:p-8 space-y-4 transition hover:-translate-y-1 hover:shadow-lg ${
              workInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="h-28 w-full overflow-hidden rounded-2xl bg-gradient-to-r from-sage/40 via-mist/60 to-sand/50 mb-3">
              <img
                src="/work.jpg"
                alt="Hands resting on a journal with soft morning light"
                className="h-full w-full object-cover opacity-90 transition duration-700 ease-out hover:scale-[1.04]"
                loading="lazy"
              />
            </div>
            <h3 className="text-2xl font-display font-semibold text-charcoal">
              How I work
            </h3>
            <ul className="space-y-3 text-charcoal/85 leading-relaxed">
            My work is intuitive, grounded, and responsive to the individual. Whatever the session looks like on
the surface, everything begins with tuning in; to you, your energy, and what’s present for you in that
moment.
I channel as I work. Information may come through as clear knowing, images, sensations, or words,
and I pay attention to how different layers of your energy and body respond. This helps me
understand where attention is needed and how best to support you.
There’s no fixed script. Sessions unfold naturally rather than following a predefined structure. I’m
direct and honest in what I share, and I take care to communicate it in a way that’s supportive and
appropriate for you. The aim is clarity, movement, and meaningful change not to overwhelm but to
guide.
While I don’t offer fixed guarantees or outcomes, my work is deeply healing in nature.
It can support emotional release, energetic realignment, greater self-understanding, and, where
bodywork is involved, physical relaxation and relief.
Each session is held with care, focus, and intention, and guided by your needs in that moment.
            </ul>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        ref={servicesRef}
        className={`section-shell space-y-6 transition-all duration-700 ease-out ${
          servicesInView
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="inline-flex rounded-full bg-clay/25 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-charcoal/80">
              Services
            </p>
            <h3 className="text-3xl font-display font-semibold text-charcoal">
              Ways to work together
            </h3>
          </div>
          <Link
            to="/services"
            className="text-sm font-semibold text-charcoal underline underline-offset-4 transition hover:text-sage-800"
          >
            Explore all
          </Link>
        </div>
        <div className="glass-card rounded-3xl bg-gradient-to-br from-mist/70 via-white/90 to-sand/50 p-5 sm:p-6">
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {featured.map((service) => (
              <div
                key={service.id}
                className="h-full transition hover:-translate-y-1 hover:shadow-lg"
              >
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;