"use client";

import React, { useEffect, useRef, useState } from "react";

import NavItem from "./NavItem";
import { NAV_ITEMS } from "@/config";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";

const NavItems = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);
  const isAnyOpen = activeIndex !== null;

  // close nav when user clicks outside it
  const navRef = useRef<HTMLDivElement | null>(null);
  useOnClickOutside(navRef, () => setActiveIndex(null));
  // close nav when user hits ESC
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveIndex(null);
      }
    };
    document.addEventListener("keydown", handler);
    // clean up to prevent memory leak
    return () => {
      document.removeEventListener("keydown", handler);
    };
  }, []);

  return (
    <div className="flex h-full gap-3" ref={navRef}>
      {NAV_ITEMS.map((item, i) => {
        const handleOpen = () => {
          if (activeIndex === i) {
            setActiveIndex(null);
          } else {
            setActiveIndex(i);
          }
        };

        const isOpen = i === activeIndex;

        return (
          <NavItem
            navItem={item}
            handleOpen={handleOpen}
            isOpen={isOpen}
            key={item.href}
            isAnyOpen={isAnyOpen}
          />
        );
      })}
    </div>
  );
};

export default NavItems;
