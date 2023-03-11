import React from 'react'

function Teamcard(props) {
  return (
    <>
     <div class="relative p-4">
    <div class="absolute mb-4 text-center transform translate-x-1/2 -top-16 right-1/2">
      <a href="/" class="relative block">
        <img
          alt="profile images"
          src={props.image}
          class="mx-auto object-cover rounded-lg h-40 w-40  border-2 border-white dark:border-gray-800"
        />
      </a>
    </div>
    <div class="px-8 py-4 pt-24 bg-white rounded-lg shadow dark:bg-gray-800">
      <div class="text-center">
        <p class="text-2xl text-gray-800 dark:text-white">
          {props.name}
        </p>
        <p class="text-xl font-light text-gray-500 dark:text-gray-200">
        {props.post}
        </p>
        <p class="py-4 mx-auto font-light text-gray-500 text-md w-60 dark:text-gray-400">
        {props.description}
        </p>
      </div>
    </div>
  </div>
  </>
  )
}

export default Teamcard