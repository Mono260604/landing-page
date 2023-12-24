'use client'
import React, { useEffect, useState } from "react";
import logo from "./judul.png";

const navBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        isScrolled
          ? "bg-navBar pb-0 md:pb-0"
          : "bg-gradient-to-b from-navBar from-55%  to-body"
      } fixed w-full z-50 top-0 start-0 pb-4`}
    >
      <div className="max-w-scree-xl flex items-center justify-between mx-auto">
        <div>
          <a
            href=""
            className="flex items-center space-x-3 rtl:space-x-reverse w-24 h-auto"
          >
            <img src={logo} alt="Logo" className="m-4" />
          </a>
        </div>
        <div className="flex items-center justify-end w-full md:w-auto md:order-1 pr-8 sm:px-4">
          <ul className="flex pl-4  md:p-2 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 sm:pb-4">
            <li>
              <button
                type="button"
                className="font-medium sm:pl-4 hover:font-bold text-sm py-2.5 me-2 mb-2 focus:outline-none"
              >
                SHOP
              </button>
            </li>
            <li></li>
            <li>
              <button
                type="button"
                className="font-medium sm:pl-4 hover:font-bold text-sm  py-2.5 me-2 mb-2 focus:outline-none"
              >
                GIFTS
              </button>
            </li>
            <li></li>
            <li>
              <button
                type="button"
                className="font-medium sm:pl-4 hover:font-bold text-sm  py-2.5 me-2 mb-2 focus:outline-none"
              >
                LOGIN
              </button>
            </li>
            <li>
              <button
                type="button"
                className="text-navBar bg-primary hover:bg- focus:ring-2 focus:ring-navBar font-medium hover:font-bold text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none sm:ml-4"
              >
                JOIN
              </button>
            </li>
            <li
              type="button"
              className="px-4 sm:pr-2 sm:ml-4  py-2 border-s border-1 border-solid border-searchBar mb-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="16"
                viewBox="0 0 576 512"
                className="h-6 w-6"
              >
                <path
                  fill="#ac2b61"
                  d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
                />
              </svg>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default navBar;
