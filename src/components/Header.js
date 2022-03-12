import React from "react"

const Navbar = () => {
  return (
    <nav className="bg-gray-100">
      <div className="px-40 mx-auto">
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
            <div className="flex items-center space-x-3">
              {/* <a href="#" className="py-2 px-3 text-gray-700 hover:text-gray-900">
                Seller
              </a> */}
              <a
                href="#"
                className="py-2 px-1 text-gray-700 hover:text-gray-900"
              >
                Follow Us
              </a>
            </div>
          </div>
          {/* secondary nav */}
          <div className="flex items-center space-x-1">
            <a
              href="#"
              className="px-1 hover:bg-yellow-300 text-gray-700 hover:text-gray-900 transition duration-300 font-semibold"
            >
              Signup
            </a>
          </div>
        </div>
      </div>
      {/* mobile menu */}
    </nav>
  )
}

export default Navbar
