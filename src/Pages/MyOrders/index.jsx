import { useContext } from "react";
import { Link } from "react-router-dom";
import Layout from "../../Components/Layout";
import { ShoppingCartContext } from "../../Context";
import { OrdersCheckout } from "../../Components/OrdersCheckout";

function MyOrders() {
  const context = useContext(ShoppingCartContext);
 //const CurrentPath = window.location.pathname
  //console.log(CurrentPath)

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-4">
        <h1 className="font-medium text-xl ">My Orders</h1>
      </div>
      {context.order.map((order, index) => (
        <Link key={index} to={`/my-order/${index}`}>
          <OrdersCheckout
            totalPrice={order.totalPrice}
            totalProducts={order.totalProducts}
          />
        </Link>
      ))}
    </Layout>
  );
}
export default MyOrders;
