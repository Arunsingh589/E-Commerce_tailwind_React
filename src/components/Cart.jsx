import React, { useEffect, useState } from "react";
const Cart = ({ cart, setCart, setShow, handleChange }) => {
  const [price, setPrice] = useState(0);



   const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (
      ans += item.amount * item.price
    ));
    setPrice(ans);
   }

   useEffect(()=> {
    handlePrice();
   });

   const handleRemove = (id) => {
       const arr = cart.filter((item) => item.id !==id);
       setCart(arr);
   }

  return (
    <article className="p-12 w-[65%]  md:w-[60%]  sm:w-[50%] lg:w-[58%] m-auto  ">

      {cart.length === 0 ? (
        <div className="items-center justify-center ">
      <h1 className="text-[20px] flex md:text-3xl lg:text-5xl font-semibold mb-10 text-center justify-center text-black ">Your cart is empty</h1>

        
        <p className="text-center  tracking-wider bg-[black] transform transition duration-300 hover:scale-105 text-white cursor-pointer  px-[30px]  py-[13px] md:py-2 md:px-3 font-semibold text-[11px] md:text-[20px] rounded-lg" onClick={()=> setShow(true)}>Continue Shopping</p>
        </div>
        
        
        
       ) : (
        <section> 
          {cart.map((item) => (
            <div className="border-b border-sky-500 " key={item.id}>
              <div className="w-[100px] h-[100px] md:w-[200px] md:h-[160px]  relative right-20  flex md:flex ">
                <img className="w-[200px] md:w-[400px]  " src={item.imgSrc} alt={item.title} />
                
                  <p className=" font-semibold text-gray-600 text-[10px] md:text-[15px] py-5 ">{item.title}</p>
                
                <div className=" flex  items-center relative left-4 sm:left-[100px] md:left-[150px] lg:left-[200px] xl:left-[280px]  lg:right-[200px] text-[7px] lg:text-[15px]">
              <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1  px-2 rounded-l "
               onClick={() => handleChange(item, +1)}
              >+</button>
              <button className=" px-2">{item.amount}</button>
              <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded-r"
               onClick={() => handleChange(item, -1)}
              >-</button>
            </div>
            <div className=" flex gap-1 sm:gap-2 relative items-center left-9 md:left-[300px] sm:left-[200px] lg:left-[400px] xl:left-[500px]  text-[6px] sm:text-[15px]">
              <button className=" bg-lime-400 py-1 px-2  rounded-lg">
               {item.price}
              </button>
              <button
              onClick={() => handleRemove(item.id)}
               className=" bg-red-500 text-white justify-center text-center py-1 px-2 rounded-md hover:bg-primary">Remove</button>
            </div>
              </div>
              
            </div>
          ))}
          <div className=" flex justify-between py-0 sm:py-1 relative gap-2">
            <span className="text-[8px] sm:text-[15px] md:text-[20px] lg:text-[25px] xl:text-[32px] font-bold text-[skyblue] tracking-wider">Total Price of Your Cart</span>
            <span className=" text-[8px] sm:text-[15px] md:text-[20px] lg:text-[25px] xl:text-[32px] font-bold text-[gray] ">Rs-{price}</span>
          </div>
        </section>
       ) 
     } 
    </article>
  );
};

export default Cart;
