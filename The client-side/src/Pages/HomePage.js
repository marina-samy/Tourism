import React from 'react';
import Bg from '../Components/HomeComponents/Bg';
import Features from '../Components/HomeComponents/Features';
import Offer from '../Components/HomeComponents/Offer';
import PopularPackage from '../Components/HomeComponents/PopularPackage';
import Gallary from '../Components/HomeComponents/Gallary';
import Reviews from '../Components/HomeComponents/Reviews';
import RecommendedPackages from '../Components/HomeComponents/RecommendedPackages/RecommendedPackages';
import TailorYourTrip from '../Components/HomeComponents/Tailor your trip';
import DayTourTrip from '../Components/HomeComponents/DayTour/Day_Tour_Trip';
import Blog from '../Components/HomeComponents/Blog/Blog';
import FAQ from '../Components/HomeComponents/FAQ';



export default function HomePage() {
  return (
    <div>
    <Bg />
    <Features />
    <PopularPackage />
    <Reviews />
    <Offer />
    <Gallary />

    <div className="mx-5 sm:mx-24">

      <RecommendedPackages />
      </div>

      <TailorYourTrip />

      <div className="my-5 mx-10 sm:mx-24">
      <DayTourTrip  />
      <Blog />
      <FAQ />
      
    </div>
    
    </div>
  )
}