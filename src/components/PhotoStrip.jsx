import { useRef, useEffect, useState } from 'react';

const IMAGES = [
  '/coolgirl.jpg',
  '/FlowKeks.jpg',
  '/flowcethiopia.jpg',
  '/mate.jpg',
  '/cafeatflow.jpg',
  '/matcha.jpg',
  '/flowcafe.jpg',
];

const doubled = [...IMAGES, ...IMAGES];

export default function PhotoStrip() {
  const trackRef = useRef(null);
  const rafRef = useRef(null);
  const paused = useRef(false);
  const drag = useRef({ active: false, startX: 0, scrollLeft: 0 });

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const step = () => {
      if (!paused.current) {
        track.scrollLeft += 0.8;
        // seamless loop: when we've scrolled half the total width, jump back
        if (track.scrollLeft >= track.scrollWidth / 2) {
          track.scrollLeft = 0;
        }
      }
      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const onMouseEnter = () => { paused.current = true; };
  const onMouseLeave = () => {
    paused.current = false;
    drag.current.active = false;
  };

  const onMouseDown = (e) => {
    drag.current = { active: true, startX: e.pageX, scrollLeft: trackRef.current.scrollLeft };
    trackRef.current.style.cursor = 'grabbing';
  };

  const onMouseMove = (e) => {
    if (!drag.current.active) return;
    const dx = e.pageX - drag.current.startX;
    trackRef.current.scrollLeft = drag.current.scrollLeft - dx;
  };

  const onMouseUp = () => {
    drag.current.active = false;
    trackRef.current.style.cursor = 'grab';
  };

  return (
    <div className="strip" aria-hidden="true">
      <div
        ref={trackRef}
        className="strip__track"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
      >
        {doubled.map((src, i) => (
          <img key={i} src={src} alt="" className="strip__img" draggable={false} />
        ))}
      </div>
    </div>
  );
}
