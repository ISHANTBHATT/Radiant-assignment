import React, { useState } from "react";

const Footer = () => {

  return (
    <div className="bg-[#212731] text-white p-8">
      <div className="container mx-auto flex  md:flex-row justify-around items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-lg md:text-white font-semibold mb-2">
            CATEGORIES
          </h2>
          <ul className="list-reset items-center text-sm">
            <li>
              <a
                href="#"
                className="inline-block no-underline hover:underline py-1"
              >
                Web Builder
              </a>
            </li>
            <li>
              <a
                href="#"
                className="inline-block no-underline hover:underline py-1"
              >
                Hosting
              </a>
            </li>
            <li>
              <a
                href="#"
                className="inline-block no-underline hover:underline py-1"
              >
                Data Center
              </a>
            </li>
            <li>
              <a
                href="#"
                className="inline-block no-underline hover:underline py-1"
              >
                Robotic-Automation
              </a>
            </li>
          </ul>
        </div>
        <div className="mb-4 md:mb-0">
          <h2 className="text-lg md:text-white font-semibold mb-2">CONTACT</h2>
          <ul className="list-reset items-center text-sm">
            <li>
              <a
                href="#"
                className="inline-block no-underline hover:underline py-1"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#"
                className="inline-block no-underline hover:underline py-1"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="inline-block no-underline hover:underline py-1"
              >
                Terms Of Service
              </a>
            </li>
            <li>
              <a
                href="#"
                className="inline-block no-underline hover:underline py-1"
              >
                Categories
              </a>
            </li>
            <li>
              <a
                href="#"
                className="inline-block no-underline hover:underline py-1"
              >
                About
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm">United States</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
