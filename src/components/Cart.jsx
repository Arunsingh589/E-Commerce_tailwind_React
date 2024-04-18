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
    <article className="p-4 w-[50%] m-auto ">
      <h2 className=" text-xl font-semibold mb-4 text-center justify-center text-gray-600 ">Shopping Cart</h2>
      {cart.length === 0 ? (
        <div className="items-center justify-center ">
        <p className="w-[100%] ml-[5px] text-center justify-center xl:ml-[120px] mb-3 text-[15px] md:w-[90%] sm:w-[100%] lg:w-[100%] xl:w-[60%] py-1 px-2 cursor-pointer  sm:text-[20px] text-black bg-red-500 rounded-xl items-center" 
        >Your cart is empty</p>
        <p className="text-center tracking-wider bg-[yellow]  cursor-pointer py-1 px-2 font-bold  rounded-lg" onClick={()=> setShow(true)}>Continue Shopping</p>
        </div>
        
        
        
       ) : (
        <section> 
          {cart.map((item) => (
            <div className="border-b border-sky-500 " key={item.id}>
              <div className="w-[100px] h-[100px] md:w-[200px] md:h-[160px]  relative right-20  flex md:flex ">
                <img className="w-[200px] md:w-[400px]  " src={item.imgSrc} alt={item.title} />
                
                  <p className=" font-semibold text-gray-600 text-[10px] md:text-[15px] py-5 ">{item.title}</p>
                
                <div className=" flex  items-center relative left-4 sm:left-[100px] md:left-[150px] lg:left-[200px] xl:left-[350px]  lg:right-[200px] text-[7px] lg:text-[15px]">
              <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1  px-2 rounded-l "
               onClick={() => handleChange(item, +1)}
              >+</button>
              <button className=" px-2">{item.amount}</button>
              <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded-r"
               onClick={() => handleChange(item, -1)}
              >-</button>
            </div>
            <div className=" flex gap-1 sm:gap-2 relative items-center left-9 md:left-[300px] sm:left-[200px] lg:left-[400px] xl:left-[600px]  text-[6px] sm:text-[15px]">
              <button className=" bg-lime-400 py-1 px-2  rounded-lg">
               {item.price}
              </button>
              <button
              onClick={() => handleRemove(item.id)}
               className=" bg-red-500 text-white py-1 px-2 rounded-md hover:bg-primary">Remove</button>
            </div>
              </div>
              
            </div>
          ))}
          <div className=" flex justify-between py-0 sm:py-1">
            <span className="text-[10px] sm:text-[15px] md:text-[20px] lg:text-[25px] xl:text-[32px] font-bold text-[skyblue] tracking-wider">Total Price of Your Cart</span>
            <span className=" text-[10px] sm:text-[15px] md:text-[20px] lg:text-[25px] xl:text-[32px] font-bold text-[gray]">Rs-{price}</span>
          </div>
        </section>
       ) 
     } 
    </article>
  );
};

export default Cart;
