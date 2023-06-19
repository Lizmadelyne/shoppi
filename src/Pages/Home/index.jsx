import {useContext} from 'react';
import Layout from '../../Components/Layout/index';
import Card from '../../Components/Card/index';
import ProductDetail from '../../Components/ProductDetail';
import { ShoppingCartContext } from '../../Context';
//usesttatte perrmite tener como una cajita paraa almacenar la informacion de api
//useefenct aayuda aa encapssular laa respuesta, el array  vacio  se ponee ccuaal es vaalo por defecto qquue vammos a ennnviar  de prrimerazzzo vacio es nadda solo enviaar al useffect por dentro
//ell primer .then muestra q viene y el segunddo la muestra ccomo la nnecesitto
//set toma la iformacion y la guarddda en ittems paara poder vvisuallizarla
function Home() {
  const context = useContext(ShoppingCartContext);
  const renderView = () => {
    if (context.filteredItems?.length > 0) {
      return (
        context.filteredItems.map(item => (
          <Card key={item.id} data={item} />
        ))
      )
    } else {
      return (
        <div>We don't have anything :(</div>
      )
    }
  }
  return (
    <Layout>
     <div className=' flex items-center justify-center relative w-80 mb-4'>
     <h1 className=' font-medium text-xl'>Products</h1>
     </div>
     <input 
     type="text"
     placeholder='Search a Product'
     className='rounded-lg border-black w-80 p-4 mb-4  ' 
     onChange={(event) => context.setSearchByTitle (event.target.value)}
     />
     <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg relative'>
     {renderView()} 
     </div>
     <ProductDetail/>
    </Layout>
  )
}
  

export default Home;