import Image from "next/image";
import { CgPinAlt } from "react-icons/cg";
import { FiGlobe } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center border-b-2 fixed top-0 right-0 left-0 px-4 z-10 bg-[#f5f4f2]">
      <div className="flex gap-4 items-center py-3">
        <div>
          <Image
            src="/assets/images/website-logo.png"
            alt="Project Image"
            className=""
            width={0}
            height={300}
          />
        </div>
        <div>
          <div className="max-w-md">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-96 p-4 ps-10 text-sm text-gray-900 border-gray-300 bg-gray-50 focus:ring-gray-500 focus:border-gray-500 border-2 rounded-2xl"
                placeholder="Find in restaurant"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="max-w-lg">
            <div className="flex">
              <button
                id="dropdown-button"
                data-dropdown-toggle="dropdown"
                className="flex-shrink-0 z-10 inline-flex items-center py-3 px-4 text-sm font-medium text-center text-black bg-gray-100 border-2 border-gray-300 rounded-2xl hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 "
                type="button"
              >
                <span className="text-3xl">
                  <CgPinAlt />
                </span>
                Samal-2 is a word of wisdom,111
                <svg
                  className="w-16 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="flex flex-col items-center">
          <span className="text-2xl">
            <FiGlobe />
          </span>
          <span className="text-sm text-gray-700">English</span>
        </div>
        <button
          type="button"
          className="text-black bg-[#e9e8e6] hover:bg-gray-500 focus:ring-4 font-medium rounded-lg text-md px-5 py-2.5 me-2 mb-2 hover:text-white"
        >
          Log in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
