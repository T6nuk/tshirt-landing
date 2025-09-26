import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import ProductCard from "./ProductCard";

export default function Carousel({ products }) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" },
    [Autoplay({ delay: 3000, stopOnInteraction: true, stopOnMouseEnter: true })]
  );

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  return (
    <div className="relative">
      {/* Viewport */}
      <div className="overflow-hidden" ref={emblaRef}>
        {/* Container */}
        <div className="flex touch-pan-y">
          {products.map((p) => (
            <div key={p.id} className="min-w-0 flex-[0_0_100%] px-2 sm:px-4">
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between">
        <button
          type="button"
          onClick={scrollPrev}
          className="pointer-events-auto ml-2 sm:ml-4 rounded-full bg-neutral-900/70 ring-1 ring-neutral-700 backdrop-blur px-3 py-2 text-sm hover:bg-neutral-800"
          aria-label="Previous"
        >
          ←
        </button>
        <button
          type="button"
          onClick={scrollNext}
          className="pointer-events-auto mr-2 sm:mr-4 rounded-full bg-neutral-900/70 ring-1 ring-neutral-700 backdrop-blur px-3 py-2 text-sm hover:bg-neutral-800"
          aria-label="Next"
        >
          →
        </button>
      </div>
    </div>
  );
}
