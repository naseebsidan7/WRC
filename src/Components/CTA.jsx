import React from 'react'

const CTA = () => {
  return (
    <div className="dark:bg-black bg-white text-black dark:text-white py-[50px] md:py-[100px] sm:py-[150px] px-6 relative">
        <div className='w-full bg-lgApprach_card dark:bg-lgBackgroundDark2 max-w-6xl mx-auto rounded-[22px] p-6 sm:p-14'>
                <div className='flex flex-col md:flex-row justify-between items-center gap-6 md:gap-10'>
                      <div className='flex flex-col text-center md:text-left'>
                        <h1 className='text-xl sm:text-3xl font-poppins'>Let's try our service now!</h1>
                        <p className='mt-3 font-inter text-sm sm:text-base'>Get ready for high-speed action, extreme terrains, and the world’s best rally drivers pushing limits in the World Rally Championship (WRC)! Don’t miss out on the adrenaline-fueled races—follow the action now!</p>
                      </div>
                      <button className="border border-black dark:border-white px-6 sm:px-10 py-3 sm:py-4 
                        rounded-md text-nowrap font-inter bg-white text-black 
                        hover:bg-transparent hover:text-white transition text-sm sm:text-base">
                        Get started
                      </button>

                </div>
        </div>
    </div>
  )
}

export default CTA
