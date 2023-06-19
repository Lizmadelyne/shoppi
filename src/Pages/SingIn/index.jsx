
import Layout from "../../Components/Layout";
import { CartSignIn } from "../../Components/Cart-Sign-In/CartSignIn";


function SingIn() {
  //const context = useContext(ShoppingCartContext);
 //const CurrentPath = window.location.pathname
  //console.log(CurrentPath)

  return (
    <Layout>
        <div>
        <CartSignIn/>
        </div>
    </Layout>
  );
}
export default SingIn;

