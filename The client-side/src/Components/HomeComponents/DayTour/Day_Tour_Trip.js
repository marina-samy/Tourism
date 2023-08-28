import React, { useState, useEffect } from "react";
import HeaderSec from "../../Helpers/HeaderSec";
import './Day_Tour_Trip.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Blurhash } from "react-blurhash";


const Day_Tour_Trip = () => {

    const [isLoaded, setLoaded] = useState(false);
    const [isLoadStarted, setLoadStarted] = useState(false);
  
    const handleLoad = () => {
      setLoaded(true);
    };
  
    const handleLoadStarted = () => {
      console.log("Started: ");
      setLoadStarted(true);
    };
  
  return (
    <div className="mt-10 pt-5 w-full">

    <HeaderSec head="EXPLORE DAY TOUR PROGRAM" title="DAY TOUR" desc="Mollit voluptatem perspiciatis convallis elementum corporis quo veritatis aliquid blandit, blandit torquent, odit placeat. Adipiscing repudiandae eius cursus? Nostrum magnis maxime curae placeat." />


    <div className=" my-2 flex justify-center items-center"
    style={{height:'27rem !important',}} 
    >
      <div 
      className="block h-full w-full m-7 items-center  justify-center dark:bg-gray-700 dark:text-white md:flex">
        {/* first card */}
        <div className="my-3 mx-0 h-full w-full flex justify-end relative cursor-pointer sm:mx-3">
            <LazyLoadImage
            className="object-cover w-full h-full justify-self-end transition duration-400 ease-in-out brightness-75 hover:brightness-100"
            alt="..."
            src="http://wahabali.com/work/travelu/images/destination/img-04.jpg"
            afterLoad={handleLoad}
            beforeLoad={handleLoadStarted}
            placeholder={<Blurhash
                hash="LEHV6nWB2yk8pyo0adR*.7kCMdnj"
                width="100%"
                height="100%"
              />}
            />
            {/* text-white absolute bottom-3 left-2 sm:left-5 sm:bottom-6 */}
            {/* text-white absolute bottom-3 left-3 sm:left-10 sm:bottom-6 */}
            <div className="text-white absolute bottom-3 left-2 sm:left-5 sm:bottom-6">
                <h4 className="font-bold text-xl">Paris</h4>
                <p className="text-xs">in the streets of Paris</p>
            </div>
        </div>
        {/* second & third cards */}
        <section className="my-3 mx-0 h-full w-full flex-col items-between justify-center sm:mx-3 ">
            <div id="DayTourCard2" className="mb-2 h-2/5 relative cursor-pointer sm:mb-6">
                <LazyLoadImage
                className="object-cover h-full w-full transition duration-400 ease-in-out brightness-75 hover:brightness-100"
                alt="Egypt"
                src="http://wahabali.com/work/travelu/images/destination/img-05.jpg"
                afterLoad={handleLoad}
                beforeLoad={handleLoadStarted}
                placeholder={<Blurhash
                    hash="LEHV6nWB2yk8pyo0adR*.7kCMdnj"
                    width="100%"
                    height="100%"
                  />}
                />
                <div className="text-white absolute bottom-2 left-2 sm:left-5 sm:bottom-6">
                    <h4 className="font-bold text-xl">Egypt</h4>
                    <p className="text-xs">in the streets of Egypt</p>
                </div>
            </div>

            <div className="mb-2 top-2 h-2/5 relative cursor-pointer">
                <LazyLoadImage
                className="object-cover h-full w-full transition duration-400 ease-in-out brightness-75 hover:brightness-100"
                alt="London"
                src="http://wahabali.com/work/travelu/images/destination/img-06.jpg"
                afterLoad={handleLoad}
                beforeLoad={handleLoadStarted}
                placeholder={<Blurhash
                    hash="LEHV6nWB2yk8pyo0adR*.7kCMdnj"
                    width="100%"
                    height="100%"
                  />}
                />
                <div className="text-white absolute bottom-2 left-2 sm:left-5 sm:bottom-6">
                    <h4 className="font-bold text-xl">London</h4>
                    <p className="text-xs">in the streets of London</p>
                </div>
            </div>
        </section>
{/* <div className="mb-5 sm:mb-2  mt-5 sm:mt-2"></div> */}
        {/* fourth card */}
        <div className="my-5 mx-0 h-full w-full relative cursor-pointer sm:mx-3 sm:my-2">
            <LazyLoadImage
            className="object-fill w-full h-full transition duration-400 ease-in-out brightness-75 hover:brightness-100 "
            alt="Istanbul"
            src="http://wahabali.com/work/travelu/images/destination/img-07.jpg"
            afterLoad={handleLoad}
            beforeLoad={handleLoadStarted}
            placeholder={<Blurhash
                hash="LEHV6nWB2yk8pyo0adR*.7kCMdnj"
                width="100%"
                height="100%"
              />}
            />
            <div className="text-white absolute bottom-3 left-2 sm:left-5 sm:bottom-6">
                <h4 className="font-bold text-xl">Istanbul</h4>
                <p className="text-xs">in the streets of Istanbul</p>
            </div>
        </div>

      </div>



    </div>
    </div>
  );
};

export default Day_Tour_Trip;