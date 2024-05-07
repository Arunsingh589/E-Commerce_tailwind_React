import React, { useEffect, useRef, useState } from 'react'
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
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showContactDetails, setShowContactDetails] = useState(false);
  const fileInputRef = useRef(null);


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
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }

  };
  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };




  const handleLoginSubmit = () => {

    if (email.trim() === '') {
      setEmailError('Email is required');
      setTimeout(() => {
        setEmailError(" ")
      }, 3000)
      return;

    } else if (!/(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/.test(email)) {
      setEmailError('Email must contain at least one letter, one number, and one symbol');
      setTimeout(() => {
        setEmailError(" ")
      }, 3000)
      return;
    }

    if (password.trim() === '') {
      setPasswordError('Password is required');
      setTimeout(() => {
        setPasswordError(" ")
      }, 3000)
      return;
    } else if (password.length < 8) {
      setPasswordError('Password should be at least 8 characters long');
      setTimeout(() => {
        setPasswordError(" ")
      }, 3000)
      return;
    }

    // if (!emailError && !passwordError) {
    console.log("Email:", email, "Password:", password);


    setEmail('');
    setPassword('');
    setUserLoginVisible(false);
    setSignupSuccess(true);
    setEmailError('');
    setPasswordError('');


    setTimeout(() => {
      setSignupSuccess(false);
    }, 2000);
  };
  // };





  return (
    <>




      <nav className=' sticky top-0 left-0 z-10 border-b border-primaryDark dark:bg-primaryDark m-0 p-0 '>
        <div className='bg-white  md:bg-primaryDark'>

          {/* User Login Section */}
          {userLoginVisible && (
            <div className="flex justify-center items-center h-screen">

              <div className="w-96 rounded-lg shadow-lg p-8 bg-white dark:bg-primaryDark">
                <p className="text-center font-bold text-3xl mb-8">Sign in</p>
                <div className="space-y-4"

                >
                  {/* Conditionally render image selection section */}
                  {selectedImage === null && (
                    <div className="flex justify-center mb-4">
                      <div className="relative cursor-pointer" onClick={() => fileInputRef.current.click()}>
                        <LuUserCircle2 className=' w-[48px] h-[48px]' />
                      </div>
                    </div>
                  )}
                  {/* Hidden file input element */}
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleImageChange}
                    className='hidden'
                  />

                  {/* Render selected image if available */}
                  {selectedImage && (
                    <div className="flex justify-center mb-4">
                      <div className="relative cursor-pointer">
                        <LuUserCircle2 className=' w-[48px] h-[48px]' />
                        <img
                          src={URL.createObjectURL(selectedImage)}
                          alt="Selected"
                          className="absolute top-0 left-0 w-full h-full rounded-full "
                        />
                      </div>
                    </div>
                  )}


                  {selectedImage && (
                    <div className="flex justify-between gap-2">
                      <button
                        onClick={() => setSelectedImage(null)} // Clear selected image
                        className="w-1/2 py-2 bg-gray-200 text-gray-600 rounded-lg shadow-md hover:shadow-lg transition duration-300"
                      >
                        Remove Image
                      </button>
                      <button
                        onClick={() => fileInputRef.current.click()} // Open file input to change image
                        className="w-1/2 py-2 bg-gray-200 text-gray-600 rounded-lg shadow-md hover:shadow-lg transition duration-300"
                      >
                        Change Image
                      </button>
                    </div>

                  )}
                  {/* Render email and password fields */}


                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full py-2 px-4 border border-gray-300 rounded-lg outline-none focus:border-purple-500"
                    type="text"
                    placeholder="Username"
                  />
                  {emailError && <p className="text-red-500">{emailError}</p>}

                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full py-2 px-4 border border-gray-300 rounded-lg outline-none focus:border-purple-500"
                    type="password"
                    placeholder="Password"
                  />
                  {passwordError && <p className="text-red-500">{passwordError}</p>}

                  <button
                    className="w-full py-2 px-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg shadow-md hover:shadow-lg transition duration-300"
                    type="submit"
                    onClick={handleLoginSubmit}

                  >
                    Sign in
                  </button>
                  <p className="text-center">
                    <a className="text-purple-500" href="#">
                      Forgot Password?
                    </a>
                  </p>
                </div>
              </div>
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
                <LuUserCircle2 className='' />
                {selectedImage && (
                  <img
                    src={URL.createObjectURL(selectedImage)}
                    alt="Selected"
                    className="absolute top-0 left-0 w-full h-full rounded-full border border-yellow-400  hover:scale-125 "
                  />
                )}

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
              <li onClick={() => setShowContactDetails(!showContactDetails)} className='p-5'>Contact</li>
              {showContactDetails && (
                <div className="px-5">
                  <div className="border border-gray-300 p-4 mb-4">
                    <p className="text-blue-500">Mobile: <span className="text-yellow-500">9773674997</span></p>
                    <p className="text-blue-500">Email: <span className="text-yellow-500">Arun@test.com</span></p>
                    <p className="text-blue-500">Facebook: <span className="text-yellow-500">facebook.com</span></p>
                    <p className="text-blue-500">Guidelines:</p>
                    <p className="text-yellow-500">If any problem come in a product that you purchased from our site, it can be replaced within 15 days. After 15 days, no products will be replaced or refunded.</p>
                  </div>
                </div>
              )}
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


            <div className='relative flex gap-4 items-center' >
              
            {/* User Circle Icon */}
        <div className='relative cursor-pointer' onClick={handleUserCircleClick}>
          <LuUserCircle2 className='' />
          {selectedImage && (
            <img
              src={URL.createObjectURL(selectedImage)}
              alt="Selected"
              className="absolute top-0 left-0 w-full h-full rounded-full border border-yellow-400  hover:scale-125"
            />
          )}
        </div>


              <FiShoppingCart onClick={() => setShow(false)} />


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
