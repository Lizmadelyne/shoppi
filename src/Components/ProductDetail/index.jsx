import { useContext } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { ShoppingCartContext }  from '../../Context/index';
import './style.css';

const ProductDetail = () =>  {
const context = useContext(ShoppingCartContext)
console.log('PRODUCT:', context.productToShow)

    return (
    <aside
     className= {`${context.isProductOpen ? 'flex' : 'hidden'} product-detail flex flex-col fixed right-0 bg-white border border-black rounded-lgs`}>
        <div className='flex  justify-between items-center p-6'>
            <h2 className='font-medium text-xl'>Detail</h2>
            <div>
                <XMarkIcon className='h-6 w-6 text-black cursor-pointer'
                onClick={() =>context.closeProductDetail()}
                ></XMarkIcon>
            </div>
        </div>
        <figure  className='px-6'>
            <img  className='w-full h-full rounded-lg'
            src={context.productToShow.images}//luego de images iba {0} pero como estta API es aleatoria no sirve 
            alt={context.productToShow.title}
            /> 
             </figure>
            <p className='flex flex-col p-4'>
                <span className='font-medium text-2x1 text-black mb-2'>${context.productToShow.price}</span>
                <span className='font-lg text-2x1 mb-2'>{context.productToShow.title}</span>
                <span className='font-sm text-sm mb-2 text-slate-600'>{context.productToShow.description}</span>
            </p>   
    </aside>
     )
}
export default ProductDetail;