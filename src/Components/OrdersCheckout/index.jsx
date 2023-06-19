import { ChevronRightIcon } from "@heroicons/react/24/solid";

const OrdersCheckout = props => {
    const { totalPrice, totalProducts} = props
   
    return(

    <div className="flex justify-between items-center border border-blue- relative p-4 rounded-lg w-80 mb-4">
        <div className=" flex justify-between w-full">
            <p className="flex flex-col">
            <span className="font-light">01.02.23</span>
            <span className="font-light">{totalProducts} articles</span>
            </p>   
            <p className="flex items-center gap-2">
            <span className="font-medium text-2x1">${totalPrice}</span>
            <ChevronRightIcon className="h-6  w-6 text-black cursor-pointer"/>
            </p>
        </div>
    
    </div>

    )
}
export { OrdersCheckout};