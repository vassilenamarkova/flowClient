import { useState, useEffect } from 'react';

const IMAGES = ['/flowinterior.jpg', '/flowcoffee.jpg', '/flowoutside.jpg'];

export default function Slideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setCurrent(i => (i + 1) % IMAGES.length), 5000);
    return () => clearInterval(id);
  }, []);

  const prev = () => setCurrent(i => (i - 1 + IMAGES.length) % IMAGES.length);
  const next = () => setCurrent(i => (i + 1) % IMAGES.length);

  return (
    <div className="slideshow">
      {IMAGES.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`Flow Coffee ${i + 1}`}
          className={`slideshow__img${i === current ? ' active' : ''}`}
        />
      ))}

      <button className="slideshow__arrow slideshow__arrow--prev" onClick={prev} aria-label="Previous">
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M10 3L5 8l5 5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <button className="slideshow__arrow slideshow__arrow--next" onClick={next} aria-label="Next">
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M6 3l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div className="slideshow__dots">
        {IMAGES.map((_, i) => (
          <button
            key={i}
            className={`slideshow__dot${i === current ? ' active' : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
