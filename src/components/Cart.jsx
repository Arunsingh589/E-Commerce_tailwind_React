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

  useEffect(() => {
    handlePrice();
  });

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {cart.length === 0 ? (
        <div className="text-center">
          <p className="text-xl md:text-4xl font-bold mb-4">Your cart is empty</p>
          <button
            onClick={() => setShow(true)}
            className=" bg-black  text-white py-2 px-4 rounded-lg shadow-md hover:bg-slate-950 text-sm md:text-base transform transition-all duration-300 hover:scale-105 "
          >
            Continue Shopping
          </button>
        </div>



      ) : (
        <section>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Your Cart</h2>
            <button
              onClick={() => setShow(true)}
              className="text-blue-500 font-semibold"
            >
            Back to Shopping   &#8594;
            </button>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {cart.map((item) => (
              <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-md">
                {/* <div className="w-[100px] h-[100px] md:w-[200px] md:h-[160px]  relative right-20  flex md:flex "> */}
                <img src={item.imgSrc} alt={item.title} className="w-[60%]  object-cover " />

                <div className="p-4 flex flex-col justify-between ">
                  <div>
                    <p className="font-bold text-lg mb-2">{item.title}</p>
                    <p className="text-gray-700 mb-4">{item.description}</p>

                  </div>

                  <div className="flex justify-between items-center">
                  <p className="font-semibold">Rs- {item.price * item.amount}</p>


                    <div className="flex items-center space-x-2  ">

                      <button
                        onClick={() => handleChange(item, -1)}
                        className="bg-gray-200 text-gray-600 py-2 px-3 rounded-full"
                      >
                        -
                      </button>
                      <span>{item.amount}</span>
                      <button
                        onClick={() => handleChange(item, 1)}
                        className="bg-gray-200 text-gray-600 py-2 px-3 rounded-full"
                      >
                        +
                      </button>


                    </div>


                  </div>

                </div>

                <button
                  onClick={() => handleRemove(item.id)}
                  className="text-red-500 hover:text-red-700 ml-3.5 "
                >
                  Remove
                </button>

                {/* </div> */}

              </div>
            ))}
          </div>
          <div className="flex justify-end mt-8">
            <p className="text-lg font-semibold">Total: Rs- {price}</p>
          </div>
        </section>
      )
      }
    </div>
  );
};

export default Cart;
