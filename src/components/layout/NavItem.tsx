"use client";

import React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import type { NAV_ITEMS } from "@/config";
import { ChevronDown } from "lucide-react";
import { Button, buttonVariants } from "../ui/button";

type TNavItem = (typeof NAV_ITEMS)[number];

interface NavItemProps {
  navItem: TNavItem;
  handleOpen: () => void;
  isOpen: boolean;
  isAnyOpen: boolean;
}

const NavItem = ({ navItem, handleOpen, isOpen, isAnyOpen }: NavItemProps) => {
  return (
    <div className="relative flex items-center">
      {navItem.sub ? (
        <Button
          className="gap-1.5 text-[16px] text-primary"
          onClick={handleOpen}
          //   variant={isOpen ? "secondary" : "ghost"}
          variant="ghost"
        >
          {navItem.label}
          <ChevronDown
            className={cn("h-5 w-5 text-muted-foreground transition-all ", {
              "-rotate-180": isOpen,
            })}
          />
        </Button>
      ) : (
        <Link
          href={navItem.href}
          className={buttonVariants({
            variant: "ghost",
            className: "gap-1.5 text-primary",
          })}
        >
          <p className="text-[16px]">{navItem.label}</p>
        </Link>
      )}

      {isOpen && navItem.sub ? (
        <div
          className={cn(
            "absolute left-0 top-full z-10 w-36 bg-white shadow-md",
            {
              "animate-in fade-in-10 slide-in-from-top-5": !isAnyOpen,
            },
          )}
        >
          <div className="p-2">
            {navItem.sub.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block rounded-md px-4 py-2 text-[16px] font-semibold text-primary hover:bg-accent hover:text-accent-foreground"
                onClick={handleOpen}
                // className={buttonVariants({
                //   variant: "ghost",
                //   className: "max-w gap-1.5 text-[16px] text-primary",
                // })}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default NavItem;
