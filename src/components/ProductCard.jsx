import React from "react";
import { withUtm } from "../utils/utm";

export default function ProductCard({ product }) {
  return (
    <article className="group mx-auto max-w-md rounded-2x1 border border-neutral-800 bg-neutral-900/40 p-4 sm:p-4">
      <div className="aspect-[3/3] w-full overflow-hidden rounded-xl bg-neutral-800">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          loading="lazy"
        />
      </div>

      <div className="mt-4 min-h-[56px] sm:min-h-[64px]">
        <div>
          <h3 className="text-base sm:text-lg font-medium leading-tight text-neutral-100">
            {product.name}
          </h3>
          <p className="mt-1 text-xs sm:text-sm leading-snug text-neutral-400">
            {product.desc}
          </p>
        </div>
        {product.price != null && (
          <div className="mt-2 inline-flex rounded-full bg-neutral-800 px-2 py-1 text-xs sm:text-sm text-neutral-200">
            €{product.price}
          </div>
        )}
      </div>

      <div className="mt-5">
        <a
          href={withUtm(product.vendorUrl)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-teal-600 px-4 py-2 text-sm font-medium text-neutral-50 hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-400"
          aria-label={`Buy ${product.name} on Etsy`}
        >
          Buy on Etsy
          <span aria-hidden>→</span>
        </a>
      </div>
    </article>
  );
}
