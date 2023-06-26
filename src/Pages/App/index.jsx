import { useRoutes, BrowserRouter, Navigate } from "react-router-dom";
import { useContext } from "react";
import { ShoppingCartProvider, initialStorage, ShoppingCartContext } from "../../Context";
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
  const context = useContext(ShoppingCartContext);
   //Acount
   const account = localStorage.getItem('account');
   const parsedAccount = JSON.parse(account);
   //sign-out
   const signOut = localStorage.getItem("sign-out");
   const parsedSignOut = JSON.parse(signOut);
// has an account
const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
const noAccountInLocalState = context.account ? Object.keys(context.account).length === 0 : true
const hasUserAccount = !noAccountInLocalStorage || !noAccountInLocalState
const isUserSignOut = context.signOut || parsedSignOut;



  let routes = useRoutes([
    { path: "/", element: hasUserAccount && !isUserSignOut? <Home /> :<Navigate replace to={'/sign-in'}/> },
    { path: "/clothes", element:  hasUserAccount && !isUserSignOut? <Home /> : <Navigate replace to={'/sign-in'}/> },
    { path: "/electronics", element:  hasUserAccount && !isUserSignOut? <Home /> :<Navigate replace to={'/sign-in'}/> },
    { path: "/furnitures", element:  hasUserAccount && !isUserSignOut? <Home /> : <Navigate replace to={'/sign-in'}/> },
    { path: "/others", element:  hasUserAccount && !isUserSignOut? <Home /> : <Navigate replace to={'/sign-in'}/> },
    { path: "/my-account", element: <MyAccount /> },
    { path: "/my-order", element: <MyOrders /> },
    { path: "/my-orders/last", element: <MyOrder /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/sign-in", element: <SingIn /> },
    { path: "/*", element: <NotFound /> },
  ]);
  return routes;
};

const App = () => {
  initialStorage()
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
