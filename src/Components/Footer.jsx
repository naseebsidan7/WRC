import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='dark:bg-black bg-white text-black dark:text-white pt-16  border-t dark:border-gray-700' id='contacts'>
      <div className='max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start px-6'>
        <h1 className='text-3xl xl:text-5xl font-nunito text-center md:text-left hidden sm:block'>World Rally Championship</h1>
        <h1 className='text-3xl xl:text-5xl font-numans text-center md:text-left mt-4 md:mt-0'>Contact Us</h1>
      </div>

      <div className='bg-grayWhiteText dark:bg-footer  w-full py-10 mt-6 border-t dark:border-none'>
        <div className='max-w-6xl mx-auto flex flex-col md:flex-row justify-between px-6'>
          
          <div className='flex flex-col gap-4 '>
            <p className='flex items-center gap-2 hover:text-gray-400 transition-colors'><FaMapMarkerAlt /> 123 Rally Street, Motorsport City</p>
            <p className='flex items-center gap-2 hover:text-gray-400 transition-colors'><FaPhoneAlt /> +123 456 7890</p>
            <p className='flex items-center gap-2 hover:text-gray-400 transition-colors'><FaEnvelope /> contact@wrc.com</p>
          </div>

          <div className='flex flex-col items-end'>
            
              <div className='flex gap-6 text-xl mt-6 md:mt-0 '>
                <a href='#' className=' hover:scale-125 transition-transform'><FaFacebook /></a>
                <a href='#' className=' hover:scale-125 transition-transform'><FaTwitter /></a>
                <a href='#' className=' hover:scale-125 transition-transform'><FaInstagram /></a>
                <a href='#' className=' hover:scale-125 transition-transform'><FaYoutube /></a>
            
              </div>

              <div className='text-center mt-4 text-sm text-gray-500'>
                © {new Date().getFullYear()} World Rally Championship. All Rights Reserved.
              </div>
          </div>
          
        </div>
      </div>

    
    </div>
  );
};

export default Footer;
