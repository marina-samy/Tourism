import React from 'react';
import { IoLogoWhatsapp } from "react-icons/io";
import { whatsIcon } from "../Assets/assets";


const WhatsAppIcon = () => {
    return (
      <a href="https://api.whatsapp.com/send?phone=01220248115" target="_blank" rel="noopener noreferrer"
       className='fixed left-4 bottom-5 z-10'>
        <img src={whatsIcon} className='w-[54px] md:w-[63px]' />
      </a>
    );
  }

export default WhatsAppIcon;