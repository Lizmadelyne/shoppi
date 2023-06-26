import { XMarkIcon } from "@heroicons/react/24/solid";

const OrderCart = props => {
    const { id, title, imageUrl, price, deleteProduct } = props
    let renderXMarkIcon 
    if(deleteProduct){
       renderXMarkIcon = <XMarkIcon onClick={() => deleteProduct(id)} className="h-6 w-6 text-black cursor-pointer"/>
    }

    return(
<div className="flex justify-between items-center mb-3">
    <div className="flex items-center gap-3 mb-2">
        <figure className="w-20 h-20">
            <img className="w-full h-full object-cover" src={imageUrl} alt={title} />
        </figure>
        <p className="text-sm font-medium text-slate-500 mt-2 p-4">{title}</p>
    </div>
    <div className="flex items-center gap-3">
    <p className="text-sm font-medium text-black mt-2 p-4">${price}</p>
      {renderXMarkIcon}
    </div>
</div>

    )
}
export { OrderCart };