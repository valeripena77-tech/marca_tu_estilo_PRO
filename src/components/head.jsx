import * as Icons from "lucide-react";
import { useState } from "react";
export function Head() {
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      x-data="{ isOpen: false }"
      class="relative bg-[rgb(37, 19, 97)] shadow dark:bg-gray-800"
    >
      <div class="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
        <div class="flex items-center justify-between">
          <a href="#">
            <img
              class="w-auto h-6 sm:h-7"
              src="public/hola2.png"
              alt=""
              width="200%"
            />
          </a>
          <div class="flex lg:hidden">
            <button
              onClick={() => setToggle((prev) => !prev)}
              x-cloak
              type="button"
              class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
              aria-label="toggle menu"
            >
              {" "}
              {toggle ? <Icons.X /> : <Icons.Menu />}
            </button>
          </div>
        </div>

        <div class=" absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center">
          <div class="hidden  md:flex md:mx-6">
            <a
              class="my-2 text-purple-900 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500  md:mx-4 md:my-0"
              href="#"
            >
              Home
            </a>
            <a
              class="my-2 text-purple-900 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              href="#"
            >
              Store
            </a>
            <a
              class="my-2 text-purple-900 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              href="#"
            >
              Category
            </a>
            <a
              class="my-2 text-purple-900 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              href="#"
            >
              New arrivals
            </a>
            <a
              class="my-2 text-purple-900 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              href="#"
            >
              Contact
            </a>
          </div>
          {toggle && (
            <div class="flex flex-col md:hidden md:mx-6">
              <a
                class="my-2 text-purple-900 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
                href="#"
              >
                Home
              </a>
              <a
                class="my-2 text-purple-900 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
                href="#"
              >
                Store
              </a>
              <a
                class="my-2 text-purple-900 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
                href="#"
              >
                Category
              </a>
              <a
                class="my-2 text-purple-900 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
                href="#"
              >
                New arrivals
              </a>
              <a
                class="my-2 text-purple-900 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
                href="#"
              >
                Contact
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
