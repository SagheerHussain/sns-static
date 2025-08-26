import { cn } from "../../lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  itemClass,
  direction = "left",
  speed = "fast",
  pauseOnHover = false,
  className,
}: {
  items: {
    src: string;
    name: string;
    tagline: string,
    company: string;
    quote: string;
    id: Number;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  itemClass?: string;
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "120s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  max-w-[2000px] overflow-hidden ",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4  w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          !item.name ? <>
            <li
              className={`relative border-slate-700 px-8 w-[300px] ${itemClass}`}
              key={item.src}
            >
              <img src={item.src} className="max-w-full " alt="" loading="lazy" />
              {item.company && <h4 className="font-medium text-zinc-300">{item.company}</h4>}
            </li>
          </>
            :
            <li
              key={item.src}
              className={`${itemClass} relative p-6 max-w-lg mx-auto text-white overflow-hidden bg-[#111]`}
            >
              <div className="relative flex items-center justify-between">
                <div className="company_info">
                  <h3 className="text-zinc-100">{item.name}</h3>
                  <h4 className="text-sm text-zinc-400">{item.tagline}</h4>
                </div>
                <img src={item.src} className="max-w-full " alt="" loading="lazy" />
              </div>
              <blockquote className="text-zinc-100 pt-3">"{item.quote}"</blockquote>
            </li>
        ))}

      </ul>
    </div>
  );
};