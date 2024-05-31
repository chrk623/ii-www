"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDownIcon, Bars3Icon } from "@heroicons/react/16/solid";

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const [lendingDropdownOpen, setLendingDropdownOpen] = useState(false);

  return (
    <nav className="navbar bg-white" id="navbar">
      <div className="container relative flex flex-wrap items-center justify-between">
        <Link className="navbar-brand md:me-8" href="/">
          <Image
            src="/logo.png"
            width={160}
            height={40}
            className="inline-block"
            alt="logo"
          />
        </Link>

        <div className="nav-icons ms-auto flex items-center md:ms-8 lg_992:order-2">
          <ul className="menu-social mb-0 list-none">
            <li className="inline">
              <Link
                href=""
                className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-[12px] font-medium uppercase tracking-wider text-secondary"
              >
                Login
              </Link>
            </li>
          </ul>
          <button
            data-collapse="menu-collapse"
            type="button"
            className="collapse-btn ms-2 inline-flex items-center text-dark dark:text-white lg_992:hidden"
            onClick={() => setMenu(!menu)}
          >
            <span className="sr-only">Navigation Menu</span>
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>

        <div
          className={`navigation ms-auto lg_992:order-1 lg_992:flex ${menu ? "" : "hidden"}`}
          id="menu-collapse"
        >
          <ul className="navbar-nav" id="navbar-navlist">
            <li className="nav-item ms-0">
              <Link className="nav-link text-primary" href="/our-mission">
                Our MISSION
              </Link>
            </li>
            <li className="nav-item ms-0">
              <Link className="nav-link text-primary" href="/investments">
                INVESTMENTS
              </Link>
            </li>
            <li className="nav-item relative ms-0">
              <button
                onClick={() => setLendingDropdownOpen(!lendingDropdownOpen)}
                className="nav-link flex items-center text-primary focus:outline-none"
              >
                LENDING
                <ChevronDownIcon className="ml-1 h-5 w-5" />
              </button>
              {lendingDropdownOpen && (
                <ul className="mt-2 w-full bg-white shadow-lg lg_992:absolute lg_992:left-0 lg_992:mt-0 lg_992:w-48 lg_992:rounded-md lg_992:border lg_992:border-gray-200">
                  <li className="nav-item">
                    <Link
                      className="nav-link block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      href=""
                    >
                      Brokers
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      href=""
                    >
                      Customers
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="nav-item ms-0">
              <Link className="nav-link text-primary" href="">
                News
              </Link>
            </li>
            <li className="nav-item ms-0">
              <Link className="nav-link text-primary" href="">
                Placeholder
              </Link>
            </li>
            <li className="nav-item ms-0">
              <Link className="nav-link text-primary" href="">
                Placeholder
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
