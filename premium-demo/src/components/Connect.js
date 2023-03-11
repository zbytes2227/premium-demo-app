import React from "react";

function Connect() {
  return (
    <div class="bg-white dark:bg-gray-800 overflow-hidden relative lg:flex lg:items-center container mx-auto">
      <div class="w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h2 class="text-4xl font-extrabold text-black dark:text-white sm:text-5xl">
          <span class="block">
            How we can take your business to the next level.
          </span>
        </h2>
        <p class="text-md mt-4 text-gray-400">
          Finally, our web development company offers competitive pricing and
          flexible project timelines, making our services accessible to
          businesses of all sizes and budgets.
        </p>
        <div class="lg:mt-0 lg:flex-shrink-0">
          <div class="mt-12 inline-flex">
            <a
              href="/"
              class="py-2 px-4  bg-indigo-500 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
              Prices
            </a>
            <a
              href="/"
              type="button"
              class="mx-3 py-2 px-4  bg-indigo-500 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
              Products
            </a>
          </div>
        </div>
      </div>
      <div class="flex items-center gap-8 p-8 lg:p-24">
        <img
          src="https://images.pexels.com/photos/4900859/pexels-photo-4900859.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          class="w-1/2 rounded-lg"
          alt="Tree"
        />
        <div>
          <img
            src="https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            class="mb-8 rounded-lg"
            alt="Tree"
          />
          <img
            src="https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            class="rounded-lg"
            alt="Tree"
          />
        </div>
      </div>
    </div>
  );
}

export default Connect;
