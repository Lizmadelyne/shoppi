import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { ShoppingCartContext }  from '../../Context/index';
import { OrderCart } from '../OrderCart';
import  {totalPrice} from '../../Utilies';
import './styles.css';

const CartMenu = () =>  {
const context = useContext(ShoppingCartContext)
//console.log('PRODUCT:', context.productToShow)
//console.log('Cart:', context.cartProduct)

const deleteProduct = (id) =>{
    const filteredProducts = context.cartProduct.filter(product => product.id != id)
    context.setCartProduct(filteredProducts)
    context.setCounter(context.counter - 1)
  }
  const handleCheckout = ()=>{
    const orderToAdd = {
        date:'01.01.23',
        products: context.cartProduct,
        totalProducts: context.cartProduct.length,
        totalPrice: totalPrice(context.cartProduct)
        }
     context.setOrder([...context.order, orderToAdd])
     context.setCartProduct([])
     context.setSearchByTitle(null)
    }
    return (
    <aside 
    className= {`${context. isMenuCartOpen ? 'flex' : 'hidden'}
    ${`checkout-side-menu scrollable-cards flex-col fixed right-0 border border-black rounded-lg bg-white`}
    cart-menu flex flex-col fixed right-0 bg-white border border-black rounded-lg`}>
        <div className='flex  justify-between items-center p-6'>
            <h2 className='font-medium text-xl text-slate-600'>My order</h2>
            <div>
                <XMarkIcon className='h-6 w-6 text-black cursor-pointer'
                onClick={() =>context.closeMenuCart()}
                ></XMarkIcon>
            </div>
        </div>
        <div className='px-6 flex-1'>
        {
            context.cartProduct.map(product =>(
                <OrderCart
                    key ={product.id}
                    id ={product.id}
                    title={product.title}
                    imageUrl={product.images}
                    price={product.price}   
                    deleteProduct={deleteProduct} 
                />
                    
            ))
        }

        </div>
        <div className='px-6'>
            <p className='flex justify-between items-center p-6 mb-2'>
                <span className='font-medium text-slate-600'>Total:</span>
                <span className='font-medium text-2xl text-stone-500'>${totalPrice(context.cartProduct)}</span>
            </p>
            <Link to= '/my-orders/last'>
            <button className='bg-black py-3 text-white w-full rounded-lg' onClick={() => handleCheckout()}>Checkout</button>
            </Link>
         
        </div>
       
        
    </aside>
     )
}
export default CartMenu;