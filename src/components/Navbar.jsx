import React, { useState } from 'react'
import { LuUserCircle2 } from "react-icons/lu";
import { FiShoppingCart } from "react-icons/fi";
import { HiMenuAlt1 } from "react-icons/hi";
import items from './Data';
import Product from './Product';


const Navbar = ({size, setShow,  handleClick}) => {

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [products, setProducts] = useState(items)

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  }
  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
   
  };
  const filteredProducts = selectedCategory
  ? products.filter(product => product.category === selectedCategory)
  : [];


  
  return (
    <>
      
    <nav className=' sticky top-0 left-0 z-10 border-b dark:border-gray-100 m-0 p-0 '>
    <div className='bg-white md:bg-primaryDark'>
      <div className='container justify-between py-3 items-center hidden md:flex'>
        <div className=' flex items-center gap-8'>
            <h2 onClick={()=> setShow(true)} className='text-white text-[40px] cursor-pointer'>Logo</h2>
            <div className=' relative'>
                <input value={searchQuery}
                onChange={handleSearchInputChange}
                type="text" placeholder='Enter Your Text'
                className=' px-4 py-3 w-[300px] rounded-lg' />
            </div>
            
               
            
        </div>
        <div className='text-white text-[26px] gap-6 flex'>
            <LuUserCircle2 />
            <div className='relative cursor-pointer' onClick={()=> setShow(false)}>
                <FiShoppingCart />
              <div className='bg-red-500 w-[20px] h-[20px] absolute rounded-full
                 text-[12px] place-items-center text-white grid 
                 top-[15px] right-[-10px]'>{size}</div>
            </div>
            <HiMenuAlt1 />


        </div>
      </div>
                {/* Visible in Moblle */}

      <div className='container flex justify-between items-center text-[26px] py-4 md:hidden'>
        <HiMenuAlt1 />
        <div onClick={() => setShow(true)}>Logo</div>
        <div className='relative' onClick={()=> setShow(false)}>
                <FiShoppingCart />
              <div className='bg-red-500 w-[20px] h-[20px] absolute rounded-full
                 text-[12px] place-items-center text-white grid 
                 top-[15px] right-[-10px]'>{size}</div>
            </div>


    </div>
    </div>
    

    
      
    </nav>
    <div className='bg-primary hidden md:block cursor-pointer'>
        <ul className='container flex justify-between py-4 uppercase text-white'>
          <li onClick={()=> handleCategoryClick(items)} href="#">All Products</li>
            <li onClick={()=> handleCategoryClick('mb protines')}  >MB Protine</li>
            <li onClick={() => handleCategoryClick('hf protines')} >HF Protine</li>
            <li onClick={() => handleCategoryClick('tablets')} >Tablets</li>
            <li onClick={() => handleCategoryClick('mobiles')} >Mobiles</li>
            <li onClick={() => handleCategoryClick('laptops')}>Laptops</li>
            <li onClick={() => handleCategoryClick('gnc protines')} >GNC Protine</li>
        </ul>
    </div>
    {filteredProducts.map(item => (
    
          <Product key={item.id} item={item} handleClick={handleClick} />
        ))}
    </>

  )
}

export default Navbar
