import React, { useState } from 'react';
import { bg1, bg2, bg4, bg3, bg5 } from "../../Assets/assets";
import Navbar from '../Navbar';
import { Carousel } from 'flowbite-react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Blurhash } from 'react-blurhash';


export default function Bg() {
  const slides = [bg1, bg2, bg4, bg5];

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
    <div className='w-full h-[100vh] bg-sky-900 z-20 relative'>
      <Navbar index={true} />  
      <Carousel>
    {slides.map((bg) => (
      <LazyLoadImage
        key={bg}
        src={bg}
        alt="bg"
        className='-z-10 opacity-40 h-[100%]'
        afterLoad={handleLoad}
        beforeLoad={handleLoadStarted}
        placeholder={<Blurhash
          hash="LEHV6nWB2yk8pyo0adR*.7kCMdnj"
          width="100%"
          height="100%"
        />}
      />
      ))}
    </Carousel>
    </div>
  );
}