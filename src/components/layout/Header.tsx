"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Logo from "../common/Logo";
import MobileNav from "./MobileNav";
import { NAV_ITEMS } from "@/constants/nav";
import { ChevronRight } from "lucide-react";
import { buttonVariants } from "../ui/button";
import { type MainMenuItem, type SubMenuItem } from "@/types";

const SubMenuItemSection = ({ item }: { item: SubMenuItem }) => {
  const menuRef = React.useRef<HTMLDivElement>(null);
  const timeoutRef = React.useRef<NodeJS.Timeout>();
  const [showSubmenu, setShowSubmenu] = React.useState(false);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setShowSubmenu(true);
  };

  const handleMouseLeave = () => {
    // Add a delay before hiding the submenu
    timeoutRef.current = setTimeout(() => {
      setShowSubmenu(false);
    }, 100);
  };

  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  //   const handleMouseEnter = () => {
  //     setShowSubmenu(true);
  //   };
  //
  //   const handleMouseLeave = () => {
  //     setShowSubmenu(false);
  //   };

  if (!item.children) {
    return (
      <div className="h-16">
        <Link
          href={item.href}
          className={buttonVariants({
            variant: "ghost",
            className: cn(
              "w-full select-none rounded-md py-3 text-left no-underline",
              "h-full outline-none transition-colors hover:bg-secondary focus:bg-secondary",
            ),
          })}
        >
          <div className="w-full">
            <div className="text-base font-semibold leading-none text-primary">
              {item.title}
            </div>
            <p className="mt-1 line-clamp-2 text-sm leading-snug text-muted-foreground">
              {item.description}
            </p>
          </div>
        </Link>
      </div>
    );
  }

  return (
    <div
      ref={menuRef}
      className="group relative w-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href={item.href}
        className={buttonVariants({
          variant: "ghost",
          className: cn(
            "w-full select-none rounded-md text-left no-underline outline-none",
            "transition-colors hover:bg-secondary focus:bg-secondary",
            "h-16 items-start justify-start py-3",
          ),
        })}
      >
        <div className="flex w-full items-start justify-between">
          <div>
            <div className="text-base font-semibold leading-none text-primary">
              {item.title}
            </div>
            <p className="mt-1 line-clamp-2 text-sm font-semibold leading-snug text-muted-foreground">
              {item.description}
            </p>
          </div>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
        </div>
      </Link>

      {/* Add an invisible bridge between main menu and submenu */}
      <div
        className={cn(
          "absolute -right-2 top-0 h-full w-2",
          showSubmenu ? "block" : "hidden",
        )}
        onMouseEnter={handleMouseEnter}
      />

      <div
        style={{
          position: "fixed",
          left: menuRef.current
            ? menuRef.current.getBoundingClientRect().right + 8
            : 0,
          top: menuRef.current
            ? menuRef.current.getBoundingClientRect().top
            : 0,
        }}
        className={cn(
          "z-50 w-64 rounded-md border bg-popover shadow-md transition-opacity duration-150",
          showSubmenu
            ? "visible opacity-100"
            : "pointer-events-none invisible opacity-0",
        )}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {item.children.map((child) => (
          <div
            key={child.title}
            className="border-b border-border p-4 last:border-b-0"
          >
            <ul className="space-y-1">
              <li key={child.title} className="text-primary">
                <Link
                  href={child.href}
                  className={buttonVariants({
                    variant: "ghost",
                    className:
                      "block w-full rounded px-2 py-1 text-left font-semibold",
                  })}
                >
                  <span className="text-md">{child.title}</span>
                </Link>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
const Header = () => {
  return (
    <header className="w-full border-b bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-center">
            <NavigationMenu>
              <NavigationMenuList>
                {NAV_ITEMS.map((item: MainMenuItem) => (
                  <NavigationMenuItem key={item.title}>
                    {item.subMenuItems?.length ? (
                      <>
                        <NavigationMenuTrigger className="text-base font-semibold text-primary">
                          {item.title}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="absolute left-0 top-0 w-[400px]">
                          <ul className="relative grid w-full gap-3 p-4">
                            {item.subMenuItems?.map((subItem) => (
                              <li key={subItem.title} className="row-span-3">
                                <SubMenuItemSection item={subItem} />
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className={buttonVariants({
                          className:
                            "flex h-10 w-full items-center justify-start px-4 py-2 font-semibold text-primary",
                          variant: "ghost",
                        })}
                      >
                        <span className="text-base">{item.title}</span>
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile Menu - Shown on all screens */}
          <div className="lg:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
