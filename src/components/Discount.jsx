import items from './Data2';
import { CiHeart } from 'react-icons/ci'
import { IoMdStar } from 'react-icons/io'
import { MdOutlineShoppingCart } from 'react-icons/md'


const Discount = ({handleClick}) => {
  return (
    <div className="py-20">
    <div className="container">
        <h2 className="text-xl md:text-4xl pb-4 sm:pb-0">Discount</h2>

        {/* Grid */}
        <div className="pt-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5
                gap-8">
                 <div className="relative w-fit mx-auto">
                    <img className="h-full object-cover" src="/discount-bg.jpg" alt="discount_bg" />
                    <div className="absolute w-full h-full top-0 left-0 grid place-items-center
                    text-white">
                        <div className="text-xl flex flex-col gap-4">
                            <h2 className="text-[40px] font-bold">$20</h2>
                            <div>
                                <p>Under Products</p>
                                <p>Limited Times Only</p>
                            </div>
                        </div>
                    </div>
                 </div>
                 {
                     items.map((item) => {
                        return (
                          <main key={item.id}>
                               <div className='border border-gray-300 p-4 cursor-pointer relative  group hover:shadow-2xl '>
        <img className='mx-auto w-screen ' src={item.imgSrc}  alt={item.title} />
        <div className='pt-8'>
            <p className='text-gray-500 uppercase'>{item.category}</p>
            <h2>{item.title}</h2>
            <p className='text-[14px]'>{item.description}</p>

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
            <div className=' flex gap-1'>
            <h2 className=' text-primary text-xl pt-2 flex gap-1'>Rs-{item.discount}</h2>
            <h3 className=' text-primary text-xl pt-2 flex gap-1'>{item.price}</h3>
            </div>
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
                          </main>
                        )
                      
                     })
                 }
       
        </div>

    </div>
    </div> 


  )
}

export default Discount
