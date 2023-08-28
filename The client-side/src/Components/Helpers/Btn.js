import React from 'react';

export default function Btn({ btnName, hover, btnIcon, buttonType }) {
  let button;

  switch (buttonType) {
    case 'hover':
      button = (
        <button
          type="button"
          className="text-blue-700 hover:text-white border border-blue-700 focus:ring-4 focus:outline-none 
          focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 
          dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800
           hover:bg-blue-700 transition ease-in-out duration-700"
        >
          {hover}
        </button>
      );
      break;
    case 'icon':
      button = (
        <button
          type="button"
          className="bg-blue-600 text-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300
           font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 
           dark:focus:ring-blue-800 transition ease-in-out duration-700"
        >
          {btnIcon}
          <svg
            className="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
      );
      break;
    default:
      button = (
        <button className="bg-blue-600 text-white p-3 transition ease-in-out duration-700">{btnName}</button>
      );
  }

  return (
    <div className="w-full mt-5 flex items-center justify-center">{button}</div>
  );
}