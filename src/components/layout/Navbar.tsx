import React from "react";
import Link from "next/link";
import Logo from "../common/Logo";
import { buttonVariants } from "../ui/button";

import NavItems from "./NavItems";
import MobileNav from "./MobileNav";
import MaxWidthWrapper from "../MaxWidthWrapper";

const Navbar = () => {
  const user = null;

  return (
    <div className="sticky inset-x-0 top-0 z-50 h-16 text-white ">
      <header className="relative bg-zinc-50 bg-gradient-to-br">
        <MaxWidthWrapper>
          {/* <div className="border-b border-gray-200"> */}
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <MobileNav />
              <div className="ml-4 flex lg:ml-0">
                <Link href="/">
                  <Logo />
                </Link>
              </div>
            </div>

            <div className="hidden lg:flex lg:items-center lg:space-x-6">
              <NavItems />
            </div>

            <div className="hidden lg:flex lg:items-center lg:space-x-6">
              {user ? null : (
                <Link
                  href="/sign-in"
                  className={buttonVariants({
                    variant: "default",
                  })}
                >
                  Sign in
                </Link>
              )}
            </div>
          </div>
          {/* </div> */}
        </MaxWidthWrapper>
      </header>
    </div>
  );
};

export default Navbar;
