import React, { useReducer, useState } from "react"

// Navigation bar
function Navbar() {
  function toggleMenu() {
    document.querySelector(".mobile-menu").classList.toggle("hidden")
  }

  return (
    <nav className="bg-gray-100">
      <div className="px-10 mx-auto">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            {/* logo */}
            <div>
              <a
                href="#"
                className="flex items-center py-2 px-3 text-gray-700 hover:text-gray-900"
              >
                <svg
                  className="h-6 w-6 mr-2 text-orange-700"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                <span className="font-bold">JimatCermat</span>
              </a>
            </div>
            {/* primary nav */}
            <div className="hidden md:flex items-center space-x-3">
              <a
                href="#"
                className="py-2 px-3 text-gray-700 hover:text-gray-900"
              >
                Seller
              </a>
              <a
                href="#"
                className="py-2 px-1 text-gray-700 hover:text-gray-900"
              >
                Follow Us
              </a>
            </div>
          </div>
          {/* secondary nav */}
          <div className="hidden md:flex items-center space-x-1">
            <a
              href="#"
              className="px-1 hover:bg-yellow-300 text-gray-700 hover:text-gray-900 transition duration-300 font-semibold"
            >
              Signup
            </a>
          </div>

          {/* mobile button here */}
          <div className="md:hidden flex items-center ">
            <button onClick={toggleMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* mobile menu */}
      <div className="mobile-menu hidden ">
        <a href="#" className="block px-2 py-2 text-sm hover:bg-gray-200">
          Seller
        </a>
        <a href="#" className="block px-2 py-2 text-sm hover:bg-gray-200">
          Follow us
        </a>
      </div>
    </nav>
  )
}

export default Navbar
