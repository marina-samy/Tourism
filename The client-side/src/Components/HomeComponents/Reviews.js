import React, { useState } from 'react';
import { BiSolidQuoteLeft } from "react-icons/bi";
import HeaderSec from "../Helpers/HeaderSec";
import Btn from '../Helpers/Btn';

export default function Reviews() {
    const review =[
        {
            name: "Steven smith",
            quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim Ut enim ad minim",
            position:"Diploma Engineer"
        },
        {
            name: "Steven smith",
            quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim Ut enim ad minim",
            position:"Diploma Engineer"
        },
        {
            name: "Steven smith",
            quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim Ut enim ad minim",
            position:"Diploma Engineer"
        }
    ]
    const vedios =["https://youtu.be/BapSQFJPMM0", "https://youtu.be/BapSQFJPMM0", "https://youtu.be/BapSQFJPMM0"];
  return (
    <section className='w-full py-10 mt-5 bg-blue-50'>
    <div className='w-[85%] mx-auto'>
    <HeaderSec head="What Our Client Say" title="The Testimonials" desc="Mollit voluptatem perspiciatis convallis elementum corporis quo veritatis aliquid blandit, blandit torquent, odit placeat. Adipiscing repudiandae eius cursus? Nostrum magnis maxime curae placeat." />
    <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 items-center justify-center gap-8'>


    {review.map((item) => (
    <div class="max-w-sm text-slate-700 bg-white shadow border border-gray-200 rounded-lg p-4 relative hover:bg-blue-500 hover:text-white">
    <BiSolidQuoteLeft className='text-blue-200 text-7xl' />
    <p className='my-3'>{item.quote}</p>
    <h3 className='text-blue-900 text-2xl font-bold text-center mb-2'>{item.name}</h3> 
    <h5 className='text-md text-center'>{item.position}</h5> 

</div>

))}


{vedios.map((vedio)=>(
    
    <video className='w-full my-10' controls >
    <source src={vedio} type="video/mp4" />
    Your browser does not support the video tag.
    </video>
    
    ))}

</div>

</div>

<div>
<Btn btnIcon="See More" buttonType="icon" />
</div>

    </section>
  )
}