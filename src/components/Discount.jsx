import items from './Data2';
import Product from './Product';

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
                     items.map((item) => (
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

export default Discount
