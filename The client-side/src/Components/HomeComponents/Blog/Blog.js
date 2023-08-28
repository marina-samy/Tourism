import React, { useState } from "react";
import HeaderSec from "../../Helpers/HeaderSec";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './Blog.css'
import { Blurhash } from "react-blurhash";

const Blog = () => {
  
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);

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
    <div className="flex flex-col justify-center items-center mt-10">

    <HeaderSec head="OUR LATEST NEWS" title="OUR BLOG" desc="Mollit voluptatem perspiciatis convallis elementum corporis quo veritatis aliquid blandit, blandit torquent, odit placeat. Adipiscing repudiandae eius cursus? Nostrum magnis maxime curae placeat." />

      <div
        id="main"
        style={{ height: "24rem !important" }}
        className="flex-row w-4/5 justify-center justify-self-center md:flex md:my-5"
      >
        {/* first card */}
        <div className="w-full mr-2 ml-0 flex-col relative overflow-hidden mb-5 md:mb-0 lg:w-2/5  cursor-pointer "
        onMouseOver={()=>{ setIsHovered1(true); }}
        onMouseOut={()=>{ setIsHovered1(false); }}>
          <LazyLoadImage
            className="h-full w-full justify-self-end transition-transform duration-400 ease-in-out brightness-75 hover:brightness-100 hover:scale-125"
            style={{ transformOrigin: "bottom right" }}
            alt="shore tour"
            src="https://www.egypttoursportal.com/images/2019/12/Egypt-Shore-Excursions-Egypt-Tours-Portal.jpg"
            afterLoad={handleLoad}
              beforeLoad={handleLoadStarted}
            placeholder={<Blurhash
              hash="LEHV6nWB2yk8pyo0adR*.7kCMdnj"
              width="100%"
              height="100%"
            />}
          />
          <button
              // md:right-3
            id="blogbt1"
            className={`absolute top-6 left-3 w-fit px-6 py-2 text-l text-white ${isHovered1 ? 'bg-blue-400' : 'bg-sky-950'} transition ease-in-out duration-700 sm:block `}>
            Protest
          </button>
          <div className="text-white absolute bottom-2 left-3 w-fit  sm:bottom-5 ">
            <h4 id="blogh1" className="font-bold w-fit text-xs mb-1 hover:text-blue-400 sm:text-xl sm:mb-2">How the future of america is shaped by politicians</h4>
            <p className="text-xs w-fit hidden sm:block">Lorem ipsum dolor sit amet, consectetur adipis sedo eiusmod tempor incididunt ut labore et dolore magn</p>
          </div>
        </div>

        <section className="ml-0 h-1/2 w-full flex-col items-between justify-center lg:w-2/4 md:ml-4">
          {/* second card */}
          <div className="mb-2 h-2/5 relative overflow-hidden sm:mb-4 w-fit cursor-pointer"
          onMouseOver={()=>{ setIsHovered2(true); }}
          onMouseOut={()=>{ setIsHovered2(false); }}>
            <LazyLoadImage
              className="object-cover w-full transition duration-400 ease-in-out brightness-75 hover:brightness-100 hover:scale-125"
              alt="nile tour"
              src="https://d3rr2gvhjw0wwy.cloudfront.net/uploads/activity_headers/145413/600x400-1-50-af71a401969fbeb5cf93a61154629fd1.jpg"
              afterLoad={handleLoad}
              beforeLoad={handleLoadStarted}
              placeholder={<Blurhash
                hash="LEHV6nWB2yk8pyo0adR*.7kCMdnj"
                width="100%"
                height="100%"
              />}
              />
            <button
              id="blogbt2"
              className={`absolute top-6 left-3 w-fit px-6 py-2 text-l text-white ${isHovered2 ? 'bg-blue-400' : 'bg-sky-950'} transition ease-in-out duration-700 hidden sm:block`}>
              Culture
            </button>
            <div className="text-white absolute bottom-2 left-3 w-fit  sm:bottom-5 ">
              <h4 id="blogh2" className="font-bold w-fit text-xs mb-1 hover:text-blue-400 sm:mb-2 sm:text-xl">How the future of america is shaped by politicians</h4>
              <p className="text-xs w-fit hidden sm:block">Lorem ipsum dolor sit amet, consectetur adipis sedo eiusmod tempor incididunt ut labore et dolore magn</p>
            </div>
          </div>

          {/* third card */}
          <div className="mb-2 top-2 h-2/5 relative overflow-hidden w-fit cursor-pointer"
          onMouseOver={()=>{ setIsHovered3(true); }}
          onMouseOut={()=>{ setIsHovered3(false); }}>
            <LazyLoadImage
              className="object-fill w-full transition duration-400 ease-in-out brightness-75 hover:brightness-100 hover:scale-125"
              alt="hotel"
              src="https://cdn.britannica.com/96/115096-050-5AFDAF5D/Bellagio-Hotel-Casino-Las-Vegas.jpg"
              afterLoad={handleLoad}
              beforeLoad={handleLoadStarted}
              placeholder={<Blurhash
                hash="LEHV6nWB2yk8pyo0adR*.7kCMdnj"
                width="100%"
                height="100%"
              />}
              />
            <button
              id="blogbt3"
              className={`absolute top-6 left-3 w-fit px-6 py-2 text-l text-white ${isHovered3 ? 'bg-blue-400' : 'bg-sky-950'} transition ease-in-out duration-700 hidden sm:block`}>
              Culture
            </button>
            {/* text-xs sm:text-base truncate */}
            <div className="text-white absolute bottom-2 left-3 w-fit  sm:bottom-5 ">
              <h4 id="blogh3" className="font-bold w-fit text-xs mb-1 hover:text-blue-400 sm:text-xl sm:mb-2">How the future of america is shaped by politicians</h4>
              <p className="text-xs w-fit hidden sm:block">Lorem ipsum dolor sit amet, consectetur adipis sedo eiusmod tempor incididunt ut labore et dolore magn</p>
            </div>
          </div>
        </section>
      </div>

    </div>
  );
};

export default Blog;