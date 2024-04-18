import { useState } from "react"
import FeatureProduct from "./components/FeatureProduct"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Service from "./components/Service"
import Cart from "./components/Cart"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import items from "./components/Data"
import Discount from "./components/Discount"
import Footer from "./components/Footer"

function App() {
  const [show, setShow] = useState(true);
  const [shows, setShows] = useState(true)
  const [cart, setCart] = useState([]);
  const [data, setData] = useState([items])

  const handleClick = (item) => {
    let isPresent = false;

    cart.forEach((product) => {
      if (item.id === product.id)
        isPresent = true;


    })

    toast.success('🦄 Item is added to your Cart', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",

    });
    setCart([...cart, item]);

  };


  const handleChange = (item, d) => {
    let ind = -1;
    cart.forEach((data, index) => {
      if (data.id === item.id)
        ind = index;
    })
    const tempArr = cart;
    tempArr[ind].amount += d;
    if (tempArr[ind].amount === 0)
      tempArr[ind].amount = 1;
    setCart([...tempArr]);

  }

  return (
    <>
      <div className="text-[10px] md:text-[15px] ">
        <ToastContainer
          className={"w-[240px] md:w-[300px] "}
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"

        />
      </div>


      <Navbar size={cart.length} setData={setData} handleClick={handleClick} setShow={setShow} />

        {

        show ?
          <>
            <Hero />
            <Service />

            <FeatureProduct handleClick={handleClick} />
            <Discount handleClick={handleClick} />
            <Footer />


          </>


          : <Cart cart={cart} handleChange={handleChange} setShow={setShow} setCart={setCart} />


      }








    </>
  )
}

export default App
