import React, { useEffect, useState } from 'react';
import { AswanNile, template, tourism } from '../../Assets/assets';
import HeaderSec from "../Helpers/HeaderSec";
import { Link } from 'react-router-dom';
import { BsClockHistory } from "react-icons/bs";
import Btn from '../Helpers/Btn';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Blurhash } from 'react-blurhash';



export default function PopularPackage() {
    const [isLoaded, setLoaded] = useState(false);
  const [isLoadStarted, setLoadStarted] = useState(false);

  const handleLoad = () => {
    setLoaded(true);
  };

  const handleLoadStarted = () => {
    console.log("Started: ");
    setLoadStarted(true);
  };
    const Cards =[
        {
            img: `${AswanNile}`,
            title: "Noteworthy technology acquisitions 2021",
            desc: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
            duration:"4days",
            price:"$200"
        },
        {
            img: `${template}`,
            title: "Noteworthy technology acquisitions 2021",
            desc: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
            duration:"4days",
            price:"$200"
        },
        {
            img: `${tourism}`,
            title: "Noteworthy technology acquisitions 2021",
            desc: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
            duration:"4days",
            price:"$200"
        },
    ]


    // useEffect(() => {
    //     fetchData();
    //   }, []);
    
    //   const fetchData = async () => {
    //     const url = 'https://travel-agency-website.p.rapidapi.com/%7BPATH%7D';
    //     const options = {method: 'GET'};
        
    //     try {
    //         const response = await fetch(url, options);
    //         const result = await response.text();
    //         console.log(result);
    //     } catch (error) {
    //         console.error(error);
    //     }
    
    // }



  return (
    <section className='w-full py-10'>
    <div className='w-[85%] mx-auto'>
    <HeaderSec head="EXPLORE GREAT PLACES" title="POPULAR PACKAGES" desc="Mollit voluptatem perspiciatis convallis elementum corporis quo veritatis aliquid blandit, blandit torquent, odit placeat. Adipiscing repudiandae eius cursus? Nostrum magnis maxime curae placeat." />
    <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 items-center justify-center mb-10'>
    {Cards.map((card) => (
        <div className="max-w-sm bg-white border border-gray-200 rounded-md shadow dark:bg-gray-800 dark:border-gray-700">
          <Link>
            <LazyLoadImage
              className="rounded-t-md h-[240px] w-full"
              src={card.img}
              alt="ImageCard"
              afterLoad={handleLoad}
              beforeLoad={handleLoadStarted}
              placeholder={<Blurhash
                hash="LEHV6nWB2yk8pyo0adR*.7kCMdnj"
                width="100%"
                height="100%"
              />}
              />
    </Link>
    <div class="p-4">
    <div className='flex items-start justify-between wrap'>
        <Link href="#">
            <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{card.title}</h5>
        </Link>

        <p className='text-slate-500 font-bold flex mt-2'><BsClockHistory className='font-bold me-2 mt-1'/> {card.duration}</p>
        </div>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> {card.desc}</p>

        <div className='flex items-center justify-between wrap'>
        <Link href="#" class="inline-flex items-center px-3
         py-2 text-sm font-medium text-center text-white bg-blue-700
          rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none
           focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </Link>
        <p className='text-lg font-bold text-blue-500'>{card.price}</p>
        </div>
    </div>
</div>
))}

</div>
<Btn btnIcon="Explour More" buttonType="icon" />
</div>
    </section>
  )
}