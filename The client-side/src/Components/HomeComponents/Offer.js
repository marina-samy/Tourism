import React from 'react';
import { bg3, templateGirl } from '../../Assets/assets'
import Btn from '../Helpers/Btn';


export default function Offer() {
  return (
    <section className='relative mb-10 w-full h-[500px] bg-fixed bg-cover bg-center flex items-center justify-center' style={{"backgroundImage": `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${bg3})`}}>
      <div className='w-[80%] mx-auto flex flex-col items-center justify-center'>
      <h1 className='text-white text-4xl text-bold mb-4'>Get <span className='text-blue-500 text-5xl'>10% Off</span> On Your Next Travel</h1>
      <p className='text-white mb-7'>Travel between 22 April to 21 May and get existing offers along with a sure 10% cash discount</p>
      <Btn hover="Explour Offers" buttonType="hover" />
      </div>
    </section>
  )
}