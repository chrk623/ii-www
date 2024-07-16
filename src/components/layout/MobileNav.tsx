"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { NAV_ITEMS } from "@/config";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
// import { buttonVariants } from "@/components/ui/button";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const pathname = usePathname();

  // whenever we click an item in the menu and navigate away, we want to close the menu
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // when we click the path we are currently on, we still want the mobile menu to close,
  // however we can't rely on the pathname for it because that won't change (we're already there)
  const closeOnCurrent = (href: string) => {
    if (pathname === href) {
      setIsOpen(false);
    }
  };

  // remove second scrollbar when mobile menu is open
  useEffect(() => {
    if (isOpen) document.body.classList.add("overflow-hidden");
    else document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  if (!isOpen)
    return (
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 lg:hidden"
      >
        <Menu className="h-6 w-6" aria-hidden="true" />
      </button>
    );

  return (
    <div className="fixed inset-0 z-40 flex lg:hidden">
      <div className="fixed inset-0 bg-black bg-opacity-25" />
      <div className="relative flex w-full max-w-sm flex-col bg-white shadow-xl">
        <div className="flex px-4 pb-2 pt-5">
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto pb-12 pl-4">
          <ul>
            {NAV_ITEMS.map((navItem) => (
              <li key={navItem.label} className="px-4 pb-2 pt-2">
                <Link
                  href={navItem.href || "#"}
                  className="block py-2 text-lg font-bold text-primary"
                  onClick={() => closeOnCurrent(navItem.href)}
                >
                  {navItem.label}
                </Link>

                {navItem.sub && (
                  <ul className="ml-4 mt-1 space-y-1">
                    {navItem.sub.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="block px-4 py-2 text-base font-semibold text-primary"
                          onClick={() => closeOnCurrent(item.href)}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6 border-t border-gray-200 px-4 py-6">
          <div className="flow-root">
            {/* <Link */}
            {/*   onClick={() => closeOnCurrent("/sign-in")} */}
            {/*   href="/sign-in" */}
            {/*   className={buttonVariants({ className: "block p-2 text-lg" })} */}
            {/* > */}
            {/*   Sign in */}
            {/* </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
