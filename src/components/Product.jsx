import React from 'react'
import { CiHeart } from 'react-icons/ci'
import { IoMdStar } from 'react-icons/io'
import { MdOutlineShoppingCart } from 'react-icons/md'


const Product = ({item, handleClick}) => {
    const {title, category, price, imgSrc, description} = item;
    

  return (
    <div className='border border-gray-300 p-4 cursor-pointer relative  group hover:shadow-2xl'>
        <img className='mx-auto' src={imgSrc} alt={title} />
        <div className='pt-8'>
            <p className='text-gray-500'>{category}</p>
            <h2>{title}</h2>
            <p className='text-[14px]'>{description}</p>

            <div className='pt-1 flex items-center gap-2'>
                <div className='text-[#ffc78b] text-14px flex'>
                     <IoMdStar />
                     <IoMdStar />
                     <IoMdStar />
                     <IoMdStar />
                     <IoMdStar />


                </div>
                <p className=' text-gray-500 text-[12px]'>(312,344)</p>
            </div>
            <h3 className=' text-primary text-xl pt-2'>Rs-{price}</h3>
        </div>

        {/* Only show in Hover */}
        

        <div className=' absolute w-full h-full opacity-0 top-0 left-0 transition-opacity
          group-hover:opacity-100'>
            <div className='flex gap-2 items-center absolute left-[24%] md:left-[16%] md:top-[51%] top-[64%] translate-x-[50%]
            '>
                <div className='bg-[#f3e8d4] h-[40px] w-[40px] rounded-full place-content-center grid
                 text-[24px] text-primaryDark hover:bg-primaryDark hover:text-white'>
                        < MdOutlineShoppingCart onClick={()=> handleClick(item)} />

                 </div>
                 <div className='bg-[#f3e8d4] h-[40px] w-[40px] rounded-full place-content-center grid
                 text-[24px] text-primaryDark hover:bg-primaryDark hover:text-white'>
                        <CiHeart />
                        

                 </div>

            </div>
            
             </div>
      
    </div>
  )
}

export default Product
