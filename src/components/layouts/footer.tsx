import React from "react";
import Link from "next/link";
import Image from "next/image";

// import {
//   FiShoppingCart,
//   FiDribbble,
//   FiLinkedin,
//   FiFacebook,
//   FiInstagram,
//   FiTwitter,
//   FiMail,
// } from "./assets/icons/vander";

export default function Footer() {
  return (
    <footer className="footer relative bg-dark-footer text-gray-200 dark:text-gray-200">
      <div className="border-t border-slate-800 px-0 py-[30px]">
        <div className="container relative text-center">
          <div className="grid grid-cols-1 items-center md:grid-cols-3 lg:grid-cols-12">
            <div className="text-center md:text-start lg:col-span-3">
              <Link href="#" className="text-[22px] focus:outline-none">
                <Image
                  src="/logo.png"
                  width={111}
                  height={22}
                  className="mx-auto md:me-auto md:ms-0"
                  alt=""
                />
              </Link>
            </div>

            <div className="mt-6 text-center md:mt-0 lg:col-span-5">
              <p className="mb-0">
                © {new Date().getFullYear()} Integer Investments.
              </p>
            </div>

            <ul className="mt-6 list-none space-x-1 text-center md:mt-0 md:text-end lg:col-span-4">
              <li className="inline">
                <Link
                  href="https://1.envato.market/upcover-next"
                  target="_blank"
                  className="inline-flex size-8 items-center justify-center rounded-md border border-gray-800 hover:border-teal-500 hover:bg-teal-500 dark:hover:border-teal-500 dark:hover:bg-teal-500"
                >
                  <div
                    data-feather="shopping-cart"
                    className="size-4 align-middle"
                    title="Buy Now"
                  />
                </Link>
              </li>
              <li className="inline">
                <Link
                  href="https://dribbble.com/shreethemes"
                  target="_blank"
                  className="inline-flex size-8 items-center justify-center rounded-md border border-gray-800 hover:border-teal-500 hover:bg-teal-500 dark:hover:border-teal-500 dark:hover:bg-teal-500"
                >
                  <div className="size-4 align-middle" title="dribbble" />
                </Link>
              </li>
              <li className="inline">
                <Link
                  href="http://linkedin.com/company/shreethemes"
                  target="_blank"
                  className="inline-flex size-8 items-center justify-center rounded-md border border-gray-800 hover:border-teal-500 hover:bg-teal-500 dark:hover:border-teal-500 dark:hover:bg-teal-500"
                >
                  <div className="size-4 align-middle" title="Linkedin" />
                </Link>
              </li>
              <li className="inline">
                <Link
                  href="https://www.facebook.com/shreethemes"
                  target="_blank"
                  className="inline-flex size-8 items-center justify-center rounded-md border border-gray-800 hover:border-teal-500 hover:bg-teal-500 dark:hover:border-teal-500 dark:hover:bg-teal-500"
                >
                  <div className="size-4 align-middle" title="instagram" />
                </Link>
              </li>
              <li className="inline">
                <Link
                  href="https://www.instagram.com/shreethemes/"
                  target="_blank"
                  className="inline-flex size-8 items-center justify-center rounded-md border border-gray-800 hover:border-teal-500 hover:bg-teal-500 dark:hover:border-teal-500 dark:hover:bg-teal-500"
                >
                  <div className="size-4 align-middle" title="instagram" />
                </Link>
              </li>
              <li className="inline">
                <Link
                  href="https://twitter.com/shreethemes"
                  target="_blank"
                  className="inline-flex size-8 items-center justify-center rounded-md border border-gray-800 hover:border-teal-500 hover:bg-teal-500 dark:hover:border-teal-500 dark:hover:bg-teal-500"
                >
                  <div className="size-4 align-middle" title="twitter" />
                </Link>
              </li>
              <li className="inline">
                <Link
                  href="mailto:support@shreethemes.in"
                  className="inline-flex size-8 items-center justify-center rounded-md border border-gray-800 hover:border-teal-500 hover:bg-teal-500 dark:hover:border-teal-500 dark:hover:bg-teal-500"
                >
                  <div className="size-4 align-middle" title="email" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
