"use client"
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-text">
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 py-6 lg:py-8 mx-auto">
            <div className="span-cols-1 mb-8 md:mb-0">
              <h1 className="mb-6 text-xl font-semibold text-product uppercase">
                help
              </h1>
              <div>
                <ul className="text-product">
                  <li className="mb-4">
                    <a href="" className="hover:font-semibold">
                      {" "}
                      Deliveries
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="" className="hover:font-semibold">
                      Returns
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="" className="hover:font-semibold">
                      Secure Payments
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="" className="hover:font-semibold">
                      Order tracking
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="" className="hover:font-semibold">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="span-cols-1 mb-8 md:mb-0">
              <h1 className="mb-6 text-xl font-semibold text-product uppercase">
                getting started
              </h1>
              <div>
                <ul className="text-product">
                  <li className="mb-4">
                    <a href="" className="hover:font-semibold">
                      {" "}
                      Download
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="" className="hover:font-semibold">
                      Guidelines
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="" className="hover:font-semibold">
                      Tutorial
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="span-cols-1 mb-8 md:mb-0">
              <h1 className="mb-6 text-xl font-semibold text-product uppercase">
                feedback
              </h1>
              <div>
                <ul className="text-product">
                  <li className="mb-4">
                    <a href="" className="hover:font-semibold">
                      {" "}
                      Leave a Feedback
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
