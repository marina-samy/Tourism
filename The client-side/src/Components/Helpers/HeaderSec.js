import React from 'react';
import { BsDashLg } from "react-icons/bs";

export default function HeaderSec({head,title,desc}) {
  return (
    <div className='relative'>
    <h4 className='text-center font-semibold text-blue-500'><span className='flex justify-center items-center'>
    <BsDashLg className='px-2 text-blue-500 text-5xl' />{head}</span></h4>
    <h1 className='text-center text-4xl font-bold text-indigo-900 mb-3'>{title}</h1>
    <div className='w-[100%] flex justify-center align-center'>
    <p className='text-center text-slate-700 mb-6 w-[100%] md:w-[50%]'>{desc}</p>
    </div>
    </div>
  )
}
