import React, { useEffect, useState } from 'react'
import { LuUserCircle2 } from "react-icons/lu";
import { FiShoppingCart } from "react-icons/fi";
import { HiMenuAlt1 } from "react-icons/hi";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import items from './Data';
import Product from './Product';


const Navbar = ({ size, setShow, handleClick }) => {

  const [searchTerm, setSearchTerm] = useState('');
  const [toggle, setToggle] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [products, setProducts] = useState(items);
  const [userLoginVisible, setUserLoginVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signupSuccess, setSignupSuccess] = useState(false);

  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    const filteredData = () => {
      const data = items.filter((p) => p.title.toLowerCase().includes(searchTerm.toLowerCase()));
      // console.log(data)
      setFilterData(data)

    }

    filteredData()
  }, [searchTerm])






  const handleCategoryClick = (category) => {
    setSelectedCategory(category === products ? '' : category);
  }
  const filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : [];
  const filteredData = searchTerm
    ? products.filter((item) => {
      if (searchTerm == '') {
        return item
      }
      else if (item.category.toLowerCase().includes(searchTerm.toLowerCase())) {
        return item;
      }
    }) : [];


    const handleUserCircleClick = () => {
      setUserLoginVisible(true);
    };
  
    const handleLoginSubmit = () => {
      // Perform login logic here
      console.log("Email:", email, "Password:", password);
      // After login logic, reset the inputs and hide the login section
      setEmail('');
      setPassword('');
      setUserLoginVisible(false);
      setSignupSuccess(true);
      // Hide the login section after successful signup
      setTimeout(() => {
        setSignupSuccess(false);
      }, 2000);
    };
  




  return (
    <>
    
           


      <nav className=' sticky top-0 left-0 z-10 border-b border-primaryDark dark:bg-primaryDark m-0 p-0 '>
        <div className='bg-white  md:bg-primaryDark'>

           {/* User Login Section */}
           {userLoginVisible && (
        <div className="fixed top-[25.5%] left-[84%] transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 w-[30%] h-[30%] shadow-lg">
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full border border-gray-300 rounded-md py-2 px-3 mb-3"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full border border-gray-300 rounded-md py-2 px-3 mb-3"
          />
          <button onClick={handleLoginSubmit} className="bg-blue-500 text-white rounded-md py-2 px-4">Login</button>
        </div>
      )}

      {signupSuccess && (
        <div className="fixed top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white p-4 shadow-lg">
          You are successfully signed up!
        </div>
      )}

          <div className='container justify-between py-3  items-center hidden md:flex'>

            <div className=' flex items-center gap-8'>


              <h2 onClick={() => setShow(true)} className='text-white text-[40px] cursor-pointer'>Logo</h2>

              <div className=' relative'>
                <input

                  onChange={(event) => {
                    setSearchTerm(event.target.value)
                  }}
                  type="text" placeholder='Enter Your Text'
                  className=' px-4 py-3 w-[300px] rounded-lg' />
              </div>
           


            </div>







            <div className='text-white text-[26px] gap-6 flex'>

            <div className='relative cursor-pointer' onClick={handleUserCircleClick}>
                <LuUserCircle2 />
               
              </div>

              <div className='relative cursor-pointer' onClick={() => setShow(false)}>
                <FiShoppingCart />
                <div className='bg-red-500 w-[20px] h-[20px] absolute rounded-full
                 text-[12px] place-items-center text-white grid 
                 top-[15px] right-[-10px]'>{size}</div>
              </div>
              <HiMenuAlt1 />



            </div>


          </div>


          {/* Visible in Moblle */}

          <div className='container flex justify-between items-center text-[22px] py-4 md:hidden  '>
        
            <ul className={`duration-300 md:hidden w-full h-screen text-white py-16  overflow-y-scroll   fixed bg-black top-[65px]
                   ${toggle ? 'left-[0]' : 'left-[-100%]'}
                   `}>
              <li onClick={() => handleCategoryClick(items)} className='p-5 '>All Products</li>
              <li onClick={() => handleCategoryClick('mb protines')} className='p-5'>MB Protines</li>
              <li onClick={() => handleCategoryClick('hf protines')} className='p-5 '>HF Protines</li>
              <li onClick={() => handleCategoryClick('gnc protines')} className='p-5'>GNC Protines</li>
              <li className='p-5'>Contact</li>
              <div >

              {
                filteredProducts.map(item => (

                  <Product key={item.id} item={item} handleClick={handleClick} />
                ))}

              </div>
              

            </ul>
            {
              toggle ?
                <AiOutlineClose onClick={(() => setToggle(!toggle))}
                  className='text-black text-2xl md:hidden block' />

                :

                <AiOutlineMenu onClick={(() => setToggle(!toggle))}
                  className='text-black text-2xl md:hidden block' />
            }
            <div onClick={() => setShow(true)}>Logo</div>
            <div className='relative' onClick={() => setShow(false)}>
              <FiShoppingCart />


              <div className='bg-red-500 w-[20px] h-[20px] absolute rounded-full
                 text-[12px] place-items-center text-white grid 
                 top-[15px] right-[-10px]'>{size}</div>
            </div>

           

          </div>
        </div>




      </nav>
     


      <div className='border border-gray-300   cursor-pointer relative  group hover:shadow-2xl'>
      <div className=' gap-4  items-center justify-between  grid grid-cols-4 '>
            
       
             
      {
        filteredData.map(item => (

          <Product key={item.id} item={item} handleClick={handleClick} />
        ))}

</div>
</div>


    </>

  )
}

export default Navbar



   {/* {
        items.filter((item) => {
          if(searchTerm == '') {
            return item;
          }
          else if(item.category.toLowerCase().includes(searchTerm.toLowerCase())){
            return item;
          }
        })
        .map((item) => {
          return (
              <Product key={item.id} item={item} />
          )
        })
       } */}
