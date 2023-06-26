import { useContext, useState } from "react";
import { ShoppingCartContext } from "../../Context";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";

const ShoppingCart = () =>{
    const context = useContext(ShoppingCartContext)

    const openCheckoutCart = () =>{
        context.openMenuCart()
        context.closeProductDetail()
    }
    

    return(
        <div className="relative flex gap-0.5 items-center"
        onClick={()=> openCheckoutCart}>
          <ShoppingBagIcon className='h-6 w-6 '></ShoppingBagIcon>
          <div className="absolute bottom-3.5 left-3.5 flex justify-center items-center rounded-full bg-slate-400 w-4 h-4 text-xs text-white">
            {context.cartProduct.length}
            </div>
    
        </div>

    )
}
export { ShoppingCart}