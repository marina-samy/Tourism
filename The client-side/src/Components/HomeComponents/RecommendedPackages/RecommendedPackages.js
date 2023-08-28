import React, { useState, useEffect } from "react";

import HeaderSec from "../../Helpers/HeaderSec";


const RecommendedPackages = () => {


const over = (key) =>{
  const details = document.getElementById(`hidetails${key}`);
  const title = document.getElementById(`hidtitle${key}`);
  const imag = document.getElementById(`crdimg${key}`);

  details.className = "visible transition duration-1000 ease-in-out opacity-100";
  title.className = "pt-0 static";
  imag.className += "transition duration-1000 ease-in-out brightness-75 scale-125";
};

const out = (key) =>{
  const details = document.getElementById(`hidetails${key}`);
  const title = document.getElementById(`hidtitle${key}`);
  const imag = document.getElementById(`crdimg${key}`);

  details.className = "invisible transition duration-1000 ease-in-out opacity-0";
  title.className = "pt-0 absolute mb-0";
  imag.className = "w-full h-fill shadow-md lg:max-w-sm bg-cover brightness-100 hover:scale-100";
};

const packages = [
  {
      title: "Package Title 1",
      img: "https://saudiarabiatours.net/wp-content/uploads/2023/04/145-12.jpg",
      content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
  },
  {
      title: "Package Title 2",
      img: "https://saudiarabiatours.net/wp-content/uploads/2023/04/145-12.jpg",
      content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
  },
  {
      title: "Package Title 3",
      img: "https://saudiarabiatours.net/wp-content/uploads/2023/04/145-12.jpg",
      content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
  },
  {
      title: "Package Title 4",
      img: "https://saudiarabiatours.net/wp-content/uploads/2023/04/145-12.jpg",
      content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
  },
  {
    title: "Package Title 5",
    img: "https://saudiarabiatours.net/wp-content/uploads/2023/04/145-12.jpg",
    content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
  },
  {
      title: "Package Title 6",
      img: "https://saudiarabiatours.net/wp-content/uploads/2023/04/145-12.jpg",
      content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
  },
  {
      title: "Package Title 7",
      img: "https://saudiarabiatours.net/wp-content/uploads/2023/04/145-12.jpg",
      content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
  },
  {
      title: "Package Title 8",
      img: "https://saudiarabiatours.net/wp-content/uploads/2023/04/145-12.jpg",
      content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content"
  }
];

  return (
    <div className="pb-5 lg:-mt-20">
    <HeaderSec head="EXPLORE RECOMMENDED PLACES" title="RECOMMENDED PACKAGES" desc="Mollit voluptatem perspiciatis convallis elementum corporis quo veritatis aliquid blandit, blandit torquent, odit placeat. Adipiscing repudiandae eius cursus? Nostrum magnis maxime curae placeat." />


    <div className="grid gap-2 lg:grid-cols-4 md:grid-cols-3 my-10">
                {packages.map((items, key) => (
                <div className= "relative overflow-hidden" key={key}
                  onMouseOver={()=>{over(key)}}
                  onMouseOut={()=>{out(key)}}
                >
                    <div id={`crdimg${key}`} style={{backgroundImage:`url("${items.img}")`,backgroundRepeat: "no-repeat", height: "300px"}}
                    className="w-full h-fill shadow-md lg:max-w-sm  bg-cover brightness-100 ">
                    </div> 

                    <div id="crdetails" className="p-3 absolute mb-10 bottom-0 text-white">

                        <section id={`hidtitle${key}`} className="pt-0 text-white mb-0">
                            <h4 className="text-xl font-semibold text-white-500 pr-20 pt-20">
                                
                                {items.title}
                            </h4>
                            <p className="text-sm pr-20 "><i className="bi bi-clock-fill"></i> Duration | Duration</p>
                          </section>

                          <section id={`hidetails${key}`} className="invisible absolute" >
                            <p className="mb-2 leading-normal text-xs">

                              {/* Content for small screens */}
                              <p className="block sm:hidden md:hidden lg:block">- - - - - - - - - - - - - - - - - - - - - - - - - - - -</p>

                              {/* Content for medium screens */}
                              <p className="hidden sm:block md:block lg:hidden">- - - - - - - - - - - - - - - - - - - - - - - - - -</p>

                              {/* Content for large screens */}
                              <p className="hidden sm:hidden md:hidden lg:hidden">- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</p>
                              
                              {/* <div className="container mx-auto">
                                <DashedParagraph />
                              </div> */}

                              <p>{items.content}</p>
                            </p>
                            
                            <button 
                            className="px-4 py-2 text-xs text-blue-100 bg-blue-400 ring-4 ring-gray-50 ring-opacity-40 hover:bg-blue-700 transition ease-in-out duration-700">
                                View more
                            </button>
                          </section>
                    </div>

                    
                </div>
                    
                ))}
    </div>

    </div>
  );
};

export default RecommendedPackages;