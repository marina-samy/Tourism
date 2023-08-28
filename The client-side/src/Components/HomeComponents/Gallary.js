import React, { useState } from 'react';
import { templateGirl, tourist, desert, bg5} from "../../Assets/assets";
import { Blurhash } from 'react-blurhash';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { BsDashLg } from "react-icons/bs";


export default function Gallary() {

  const [isLoaded, setLoaded] = useState(false);
  const [isLoadStarted, setLoadStarted] = useState(false);

  const handleLoad = () => {
    setLoaded(true);
  };

  const handleLoadStarted = () => {
    console.log("Started:");
    setLoadStarted(true);
  };

  return (
    <div className='pt-5 mt-10 mx-24 relative h-fit mb-10 lg:mb-0'>
    <section className='grid lg:grid-cols-5 sm:grid-cols-2 items-center justify-center flex-wrap'>

    <div className='col-span-2 flex flex-col md:justify-start justify-center items-center h-[100%] lg:me-4 lg:mb-10 mb-5'>
    <div>
    <h4 className='lg:text-start text-center font-semibold text-blue-500'><span className='flex lg:justify-start justify-center items-center'>
    <BsDashLg className='px-2 text-blue-500 text-5xl' />
    OUR TOUR GALLERY </span></h4>
    <h1 className='lg:text-start text-center text-5xl font-bold text-indigo-900 mb-3'>BEST TRAVELER'S SHARED PHOTOS</h1>
    <p className='lg:text-start text-center text-slate-700 mb-3'>Aperiam sociosqu urna praesent, tristique, corrupti condimentum asperiores platea ipsum ad arcu. Nostrud. Esse? Aut nostrum,
     ornare quas provident laoreet nesciunt odio voluptates etiam, omnis.</p>
    </div>


    <div className='w-full mt-3'>
    <LazyLoadImage 
    className='w-full object-cover' 
    src={bg5} alt='gallaryImage'
    afterLoad={handleLoad}
    beforeLoad={handleLoadStarted} 
    placeholder={<Blurhash
      hash="LEHV6nWB2yk8pyo0adR*.7kCMdnj"
      width="100%"
      height="100%"
    />}
    /></div>

    </div>

    <div className='lg:col-span-3 col-span-2 grid lg:grid-cols-2 md:grid-cols-1 justify-center align-center
     gap-4 h-[100%]'>

     <div className='lg:col-span-1 col-span-2 mb-1'>
       <LazyLoadImage
         className='w-full object-cover'
         src={templateGirl}
         alt='gallaryImage'
         afterLoad={handleLoad}
         beforeLoad={handleLoadStarted}
         placeholder={<Blurhash
           hash="LEHV6nWB2yk8pyo0adR*.7kCMdnj"
           width="100%"
           height="100%"
         />}
       />
     </div>

     <div className='lg:col-span-1 col-span-2 lg:h-[83%] lg:mb-0 mb-1 h-[210px] w-full'>
     <LazyLoadImage
       className='w-full object-cover h-[100%]'
       src={tourist}
       alt='gallaryImage'
       afterLoad={handleLoad}
       beforeLoad={handleLoadStarted}
       placeholder={<Blurhash
         hash="LEHV6nWB2yk8pyo0adR*.7kCMdnj"
         width="100%"
         height="100%"
       />}
     />
   </div>

   <div className='lg:col-span-2 col-span-2 lg:h-[72%] h-[210px] lg:mb-0 mb-10 w-full lg:-mt-10'>
     <LazyLoadImage
       className='w-full object-cover h-[100%]'
       src={desert}
       alt='gallaryImage'
       afterLoad={handleLoad}
       beforeLoad={handleLoadStarted}
       placeholder={<Blurhash
         hash="LEHV6nWB2yk8pyo0adR*.7kCMdnj"
         width="100%"
         height="100%"
       />}
     />
   </div>

    </div>

    </section>
    </div>
  )
}