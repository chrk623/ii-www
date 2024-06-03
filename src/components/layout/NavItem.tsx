"use client";

import React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import type { NAV_ITEMS } from "@/config";
import { Button, buttonVariants } from "../ui/button";
import { ChevronDown } from "lucide-react";

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
          className="text-primary gap-1.5"
          onClick={handleOpen}
          variant={isOpen ? "secondary" : "ghost"}
        >
          {navItem.label}
          <ChevronDown
            className={cn("text-muted-foreground h-4 w-4 transition-all", {
              "-rotate-180": isOpen,
            })}
          />
        </Button>
      ) : (
        <Link
          href={navItem.href}
          className={buttonVariants({
            variant: "ghost",
            className: "text-primary gap-1.5",
          })}
        >
          {navItem.label}
        </Link>
      )}

      {isOpen && navItem.sub ? (
        <div
          className={cn(
            "absolute left-0 top-full z-10 w-48 bg-white shadow-md",
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
                className="text-primary block px-4 py-2 text-gray-900 hover:bg-gray-100"
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
