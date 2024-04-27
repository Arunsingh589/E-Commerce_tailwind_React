import React from 'react'

const Hero = () => {
  return (
    <div className='relative bg-[url(/hero.png)] sm:min-h-[25vh] sm:h-[45vh] sm:max-h-[50vh]
    bg-right bg-cover bg-no-repeat'>
        <div className='container py-8 sm:py-0 sm:flex items-center justify-between h-full'>
            <div className='flex items-center h-full'>
                <div>
                    <p className='uppercase text-primary font-bold'>visit our shop</p>
                    <h2 className='text-primaryDark font-bold text-[24px] sm:text-[30px]
                    md:text-[40px] lg:text-[48px] pb-8 leading-tight
                    '>All Product Will There
                      <br />
                      <span className='text-primary'>EVERYDAY</span>
                    </h2>
                    <a href="#" className=' border-b border-black'>Discover More</a>
                </div>

            </div>
            
            <div className=''>
                <img   src="/remove.png"  alt="e-image" />
            </div>
        </div>
       
    </div>
  )
}

export default Hero
