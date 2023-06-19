import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";

const NavBar = () => {
  const context = useContext(ShoppingCartContext)
  const activeStyle = {textDecoration: "underline", };

  return (
    <nav className="flex justify-between bg-slate-300 items-center top-0 fixed z-10 w-full py-5 px-8 text-lg font-light text-white ">
      <ul className="flex items-center  gap-3">
        <li className="font-semibold text-lg">
          <NavLink
            to="/"
           // style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Shopi
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
           onClick={() => context.setSearchByCategory()}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/clothes"
            onClick={() => context.setSearchByCategory('clothes')}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/electronics"
            onClick={() => context.setSearchByCategory('electronics')}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Electronics
          </NavLink>
        </li>
            <li>
          <NavLink
            to='/others'
            onClick={() => context.setSearchByCategory('others')}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
              Others
               </NavLink> 
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        <li className="text-black/60">
          <NavLink to="/my-order">lizfa@gmail.com</NavLink>
        </li>
        <li className="flex items-center">
          <NavLink
            to="/my-orders"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
          <ShoppingBagIcon className="h-6 w-6"></ShoppingBagIcon>
          </NavLink>
          <div>
         {context.cartProduct.length}
          </div>
        </li>
        <li>
          <NavLink
            to="/my-order"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Order
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/my-account"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Register
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sign-in"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Sign In
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;
