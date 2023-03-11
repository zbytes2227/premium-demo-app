import React from 'react'

function ApplicationCard(props) {
  return (
   
<div class="w-full flex flex-col justify-between h-auto max-w-xs p-6 overflow-hidden bg-white shadow-lg rounded-xl dark:bg-gray-800 m-3">
    <div class="flex flex-col items-center justify-between md:flex-row mb-2">
        <div class="flex items-center justify-start flex-grow w-full">
            <div class="flex flex-col items-start ml-4">
                <span class="text-gray-700 dark:text-white">
                {props.application.name}
                </span>
                <span class="text-sm font-light text-gray-400 dark:text-gray-300">
                {props.application.email}
                </span>
            </div>
        </div>
        <div class="flex-none hidden md:block ">
            <span class="w-full px-3 py-1 text-sm text-white bg-red-500 rounded-full">
                New
            </span>
        </div>
    </div>
    <div>
        

    <p class="text-sm font-normal text-black dark:text-gray-200">
    {props.application.message}
    </p>
    
    </div>

    <div className='flex'>

    <button type="button" class="py-2 px-4  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
        Apply
    </button>
    <button type="button" class="py-2 mx-1 px-4  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
       Reject
    </button>
</div>
    </div>
  )
}

export default ApplicationCard