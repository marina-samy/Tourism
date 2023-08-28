import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiMail } from "react-icons/fi";
import { FaMapMarkerAlt, FaBars, FaSearch, FaTimes} from "react-icons/fa";
import DropdownBtn from './Helpers/DropdownBtn';
import { Dropdown } from 'flowbite-react';


export default function Navbar({index}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [search, setSearch] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };


    
    window.addEventListener("scroll", handleScroll);


    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


const handleSearchClick = () => {
    setSearch(true);
    document.body.classList.add('overflow-y-hidden');
  }

  return (
    <>
    <nav className={`w-full fixed z-30 top-0 left-0 ${isScrolled ? 'bg-sky-700 pb-5' : 'bg-transparent'}`}>

    <div className='w-[80%] mx-auto flex justify-between items-center py-1'>
    <div>
    <p className='inline-block text-white md mr-10'><FiMail className='inline-block text-xl mb-1'/> Demo@gmail.com</p>
    <p className='inline-block text-white text-md'><FaMapMarkerAlt className='inline-block text-xl mb-1'/> 3146 Koontz Lane, California</p>
    </div>

    
    <DropdownBtn name={`English (US)`}/>

    </div>

    <hr />

    
    <div class="w-[80%] mx-auto pt-3 max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
  <Link href="https://flowbite.com/" class="flex items-center">
      <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" />
      <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Logo</span>
    </Link>
  <div class="flex md:order-2">
  <FaSearch className={`md:inline-block hidden text-xl me-4 mt-2 text-white cursor-pointer`} 
  onClick={handleSearchClick} />
  <button className="text-white border md:px-5 md:py-2 py-1 px-2 md:font-md text-sm rounded hover:border-blue-700 hover:bg-blue-200
   hover:text-black transition ease-in-out duration-700">Tailor a Trip</button>

      <button data-collapse-toggle="navbar-sticky" type="button" onClick={() => setToggle(!toggle)}
       className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg
        min-[1210px]:hidden focus:outline-none dark:text-gray-400
         dark:hover:bg-gray-700" aria-controls="navbar-sticky" aria-expanded="false">
          <FaBars className='text-xl' /> 
    </button>
  </div>




  <div className="hidden min-[1210px]:flex items-center justify-between w-full md:w-auto" id="navbar-sticky">

    <ul className="flex p-4 md:p-0 mt-4 text-md font-semibold md:space-x-8 md:mt-0 md:border-0 
     dark:border-gray-700 text-white">
      <li className='mb-10 md:mb-0 hover:text-blue-100 focus:text-blue-100'>
        <Link href="#" className="block py-2 pl-3 pr-4 text-white rounded
         md:text-blue-300 md:p-0 md:dark:text-blue-200" aria-current="page">Home</Link>
      </li>


      <li>
      <Link href="#" className="block py-2 pl-3 pr-4 text-white rounded
        md:p-0 hover:text-blue-200" aria-current="page">Travel Packages</Link>
    </li>


    <li>
      <Link href="#" className="block py-2 pl-3 pr-4 text-white rounded
        md:p-0 hover:text-blue-200" aria-current="page">Nile Cruises</Link>
    </li>


    <li>
      <Link href="#" className="block py-2 pl-3 pr-4 text-white rounded
        md:p-0 hover:text-blue-200" aria-current="page">Day Tour</Link>
    </li>


    <li>
    <Link href="#" className="block py-2 pl-3 pr-4 text-white rounded
      md:p-0 hover:text-blue-200" aria-current="page">Blog</Link>
  </li>


        <li className='mb-10 md:mb-0 hover:text-blue-200'>
        <Dropdown
        inline
        label="About Us"
      >
        <Dropdown.Item className='hover:text-blue-600'>
          About Us
        </Dropdown.Item>
        
        <Dropdown.Item className='hover:text-blue-600'>
          Testimonials
        </Dropdown.Item>
        <Dropdown.Item className='hover:text-blue-600'>
          FAQs
        </Dropdown.Item>
      </Dropdown>
        </li>


      <li>
      <Link href="#" className="block py-2 pl-3 pr-4 text-white rounded
        md:p-0 hover:text-blue-200" aria-current="page">Contact Us</Link>
    </li>
      
    </ul>
  </div>




  




  <div className={` ${toggle ? 'top-0 flex':'top-[-690px]'} p-6 p-10 z-20 absolute -top-2 -left-4 w-full h-screen bg-sky-700 mx-4 my-2
   transition-all duration-500 ease-in`}>

  <FaTimes className='text-xl text-white z-20 cursor-pointer absolute right-14 top-10' onClick={() => setToggle(!toggle)}/> 

  <ul className="list-none flex justify-center items-center flex-1 flex-col">
    <li>
      <Link href="#" className="block mb-4 py-2 pl-3 pr-4 text-white rounded
       md:text-blue-900 md:p-0 md:dark:text-blue-500" aria-current="page">Home</Link>
    </li>


    <li>
      <Link href="#" className="block py-2 pl-3 pr-4 text-white rounded
        mb-4 hover:text-blue-200" aria-current="page">Travel Packages</Link>
    </li>


    <li>
      <Link href="#" className="block py-2 pl-3 pr-4 text-white rounded
        mb-4 hover:text-blue-200" aria-current="page">Nile Cruises</Link>
    </li>


    <li>
      <Link href="#" className="block py-2 pl-3 pr-4 text-white rounded
        mb-4 hover:text-blue-200" aria-current="page">Day Tour</Link>
    </li>


    <li>
    <Link href="#" className="block py-2 pl-3 pr-4 text-white rounded
      mb-4 hover:text-blue-200" aria-current="page">Blog</Link>
  </li>


      <li className='mb-4 text-white'>
      <Dropdown
      inline
      label="About Us"
    >
      <Dropdown.Item>
        About Us
      </Dropdown.Item>
      <Dropdown.Item>
        Blog
      </Dropdown.Item>
      <Dropdown.Item>
        Testimonials
      </Dropdown.Item>
      <Dropdown.Item>
        FAQs
      </Dropdown.Item>
    </Dropdown>
      </li>

      

    <li>
    <li>
    <Link href="#" className="block py-2 pl-3 pr-4 text-white
      md:p-0" aria-current="page">Contact Us</Link>
  </li>
    </li>
  </ul>
</div>






  </div>

    </nav>




    <div className ={` ${search ? 'left-[0px]':'left-[-100%]'} fixed bg-black px-10 opacity-90 w-full h-screen z-40
     flex justify-center items-center transition-all duration-500 ease-in focus:hidden`}>
    <FaTimes className='text-xl text-white z-40 cursor-pointer absolute right-14 top-10' onClick={() => setSearch(!search)}/> 
    <input type='text' className='border-2 border-white rounded-full px-5 py-3 bg-transparent
     text-white w-auto md:w-1/2 h-[60px]' placeholder='Search For Anything'/>
    </div>


    </>

  )
}