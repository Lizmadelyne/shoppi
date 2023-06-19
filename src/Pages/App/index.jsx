import { useRoutes, BrowserRouter } from "react-router-dom";
import { ShoppingCartProvider } from "../../Context";
import Home from "../Home/index";
import MyAccount from "../MyAccount/index";
import MyOrder from "../MyOrder/index";
import MyOrders from "../MyOrders/index";
import NotFound from "../NotFound/index";
import SingIn from "../SingIn/index";
import NavBar from "../../Components/NavBar";
import "./App.css";
import CartMenu from "../../Components/CartMenu/index";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/clothes", element: <Home /> },
    { path: "/electronics", element: <Home /> },
    { path: "/furnitures", element: <Home /> },
    { path: "/others", element: <Home /> },
    { path: "/my-account", element: <MyAccount /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/my-orders/last", element: <MyOrder /> },
    { path: "/my-order", element: <MyOrders /> },
    { path: "/sign-in", element: <SingIn /> },
    { path: "/*", element: <NotFound /> },
  ]);
  return routes;
};

const App = () => {
  return (
    <ShoppingCartProvider>
           <BrowserRouter>
        <AppRoutes />
        <NavBar />
        <CartMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
 
 
  );
};

export default App;
