import React from 'react'
import items from './Data'
import Product from './Product'

const FeatureProduct = ({handleClick}) => {
  return (
    <div className='pt-20'>
        <div className=' container'>
            <div className=' sm:flex justify-between items-center'>
                <div className=' text-xl md:text-4xl pb-4 md:pb-0'>Feature Products</div>
                <div className='flex text-[14px] gap-8 md:text-lg items-center'>
                    <button className=' border-b border-[#000]'>Best Seller</button>
                    <button>Most Popular</button>

                </div>
            </div>


            {/* Grid */}
            <div className=' pt-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8'>
                {
                   items.map((item)=> (
                    <Product
                      key={item.id}
                       item={item}
                       
                      handleClick={handleClick}
                    />
                   ))
                }
            </div>
        </div>
      
    </div>
  )
}

export default FeatureProduct
