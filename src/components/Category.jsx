import React, { useState } from 'react'
import items from './Data';
import Product from './Product';


const Category = ({handleClick}) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [products, setProducts] = useState(items);



  
  const  handleCategoryClick =    (category) => {
    setSelectedCategory(category === products ? '' : category );
  }


  // const handleCategoryClick = (category) => {
  //   if (category === products) {
  //     setData(originalData); // Reset data to original items
  //   } else {
  //     const filteredData = originalData.filter(item => item.category === category);
  //     setData(filteredData);
  //   }
  // };


  const filteredProducts = selectedCategory
  ? products.filter(product => product.category === selectedCategory)
  : [];
  return (
    <>
    

    
        <div className='bg-primary hidden md:block cursor-pointer  '>
        <ul className='container flex justify-between py-4 uppercase text-white'>
            <li onClick={()=> handleCategoryClick(items)}>All Products</li>
            <li onClick={()=> handleCategoryClick('mb protines')}  >MB Protine</li>
            <li onClick={() => handleCategoryClick('hf protines')} >HF Protine</li>
            <li onClick={() => handleCategoryClick('tablets')} >Tablets</li>
            <li onClick={() => handleCategoryClick('mobiles')} >Mobiles</li>
            <li onClick={() => handleCategoryClick('laptops')}>Laptops</li>
            <li onClick={() => handleCategoryClick('gnc protines')} >GNC Protine</li>
        </ul>
    </div>
    <div className=' container'>
    {/* <div className='border border-gray-300 py-4   cursor-pointer relative  group hover:shadow-2xl'> */}
      <div className= '  flex gap-4  items-center justify-center   '>
            
       
             
      {
    filteredProducts.map(item => (
    
          <Product key={item.id} item={item} handleClick={handleClick}/>
        ))}
        </div>

        </div>
        {/* </div> */}

    
    
        

      
    </>
  )
}

export default Category
