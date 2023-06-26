
import { Link } from "react-router-dom";
import { ChevronRightIcon } from "@heroicons/react/24/solid";


const OrdersCheckout = props => {
    const { totalPrice, totalProducts} = props;
    const currentDate = new Date().toLocaleDateString()

   
    return(

    <div className="flex justify-between items-center border border-blue- relative p-4 rounded-lg w-80 mb-4">
        <div className=" flex justify-between w-full">
            <p className="flex flex-col">
          <span className="text- mb-2 text-sky-700">Date: {currentDate}</span>
            <span className="font-light">{totalProducts} articles</span>
            </p>   
            <p className="flex items-center gap-2 ">
            <span className="font-medium text-2x1 mt-8">${totalPrice}</span>
            <div>
            <Link to='/my-orders/last'>
                    <ChevronRightIcon className="h-6 w-6 text-red cursor-pointer mb-4 right-0"/>
                </Link>
            </div>
           
            </p>
        </div>
    
    </div>

    )
}
export { OrdersCheckout};