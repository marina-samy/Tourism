import React, { useState, useEffect } from "react";


const Tailor_your_trip = () => {


  return (
    <>


    <div className="relative w-100 lg:h-[400px] h-fit block text-center text-white md:flex my-10">

        <div className="w-100 bg-sky-600 flex flex-col font-bold justify-center items-center p-12 md:w-1/2 md:h-100"
        >
            <h4 class="text-l font-bold text-center mt-4">25% OFF SALE</h4>
            <h2 class="text-4xl font-bold text-center mb-4">Tailor Made Your Trip<div class="text-uppercase d-block">Honeymoon</div></h2>

        </div>

        <div className="w-100 text-4xl flex flex-col text-left justify-center p-12 bg-fixed md:w-1/2 md:h-100"
        style={{backgroundImage:`url("https://www.rainbowworldtours.com/uploads/tour/home_slider_03_14824798020.jpg")`,backgroundRepeat: "no-repeat"}}>
            <h2 class="text-4xl font-bold mb-4  text-uppercase">TOUR OF YOUR DREAMS</h2>
            <div class="text-xs mb-4">
                Anything is possible! We know you. Your desires are extraordinary and you want Egypt vacations as you wish.
            </div>
            <button 
            className="px-4 py-3 text-sm w-24 lg:w-1/4  text-blue-100 bg-blue-400 hover:bg-blue-700 transition ease-in-out duration-700">
            let's start now <i className="bi bi-arrow-right"></i>
            </button>
        </div>

    </div>

    </>
  );
};

export default Tailor_your_trip;