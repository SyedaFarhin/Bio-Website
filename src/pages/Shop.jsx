import React from "react";
import { shopItems } from "../data/shopItems";

const placeholderBg = ["bg-sage/40", "bg-clay/40", "bg-mist", "bg-sand"];

const Shop = () => {
  return (
    <div className="section-shell space-y-10">
      <header className="space-y-3">
        <p className="text-sm uppercase tracking-[0.25em] text-charcoal/60">
          Boutique
        </p>
        <h1 className="text-4xl font-display font-semibold text-charcoal">
          Small ritual items, chosen with care.
        </h1>
        <p className="text-lg text-charcoal/80 leading-relaxed max-w-3xl">
          Thoughtful blends and tools to support your practice. Simple, tactile,
          and meant to be used—not stored away.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {shopItems.map((item, idx) => (
          <div key={item.id} className="glass-card rounded-3xl p-5 space-y-4">
            <div
              className={`h-40 rounded-2xl ${placeholderBg[idx % placeholderBg.length]} flex items-center justify-center text-charcoal/70 font-semibold`}
            >
              Image placeholder
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-display font-semibold text-charcoal">
                {item.name}
              </h3>
              <p className="text-sm text-charcoal/75 leading-relaxed">
                {item.description}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p className="font-semibold text-charcoal">{item.price}</p>
              <button className="rounded-full border border-charcoal/20 bg-white px-4 py-2 text-sm font-semibold text-charcoal hover:border-charcoal/40 transition">
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;

