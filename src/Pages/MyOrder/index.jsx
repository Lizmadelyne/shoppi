import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContext} from '../../Context';
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import Layout from "../../Components/Layout";
import { OrderCart } from "../../Components/OrderCart";
function    MyOrder(){
    const context = useContext(ShoppingCartContext)
    const CurrentPath = window.location.pathname
    let index = CurrentPath.substring(CurrentPath.lastIndexOf('/') + 1)
   // console.log(index)
   if ( index === 'last') index = context.order?.length - 1
    return(
        <Layout>
            <div className="flex items-center justify-center relative w-80 mb-2 gap-2">
                <Link to='/my-orders' className absolute left-0>
                    <ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer"/>
                </Link>
            <h1>MyOrder</h1>
            </div>
       
            
            <div className='px-6 flex-1'>
        {
            context.order?.[index]?.products.map(product =>(
                <OrderCart
                    key ={product.id}
                    id ={product.id}
                    title={product.title}
                    imageUrl={product.images}
                    price={product.price}   
                />
                    
            ))
        }
        </div>
        </Layout>
    )
}
export default MyOrder  ;