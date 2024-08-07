"use client";
import Link from "next/link";
import React, { useState } from "react";

function Navbar() {
  const [connectionModal, setConnectionModal] = useState(false);

  return (
    <nav className="fixed top-0 shadow-5 bg-white z-20 w-full">
      <div className="max-w-[1140px] mx-auto">
        <div className="px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center text-white">
                <img
                  src="/assets/step3-logo.png"
                  alt="step3-logo"
                  className="h-[1.75rem]"
                />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4"></div>
              </div>
            </div>
            <button
              className="explore-btn hover:bg-red-600 rounded-md text-sm font-medium text-gray-30"
              onClick={() => {
                setConnectionModal(true);
              }}
            >
              Connect
            </button>
          </div>
        </div>
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
            <Link
              href="#"
              className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
              aria-current="page"
            >
              Dashboard
            </Link>
            <Link
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Team
            </Link>
            <Link
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Projects
            </Link>
            <Link
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Calendar
            </Link>
          </div>
        </div>
      </div>
  
    </nav>
  );
}

export default Navbar;
