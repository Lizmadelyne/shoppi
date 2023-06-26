import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import { ShoppingCart } from "../ShoppingCart";

const NavBar = () => {
  const context = useContext(ShoppingCartContext);
  const activeStyle = { textDecoration: "underline" };
  // sign outt
  const signOut = localStorage.getItem("sign-out");
  const parsedSignOut = JSON.parse(signOut);
  const isUserSignOut = context.signOut || parsedSignOut;

  const account = localStorage.getItem('account');
  const parsedAccount = JSON.parse(account);
  // has an account

  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
  const noAccountInLocalState = context.account ? Object.keys(context.account).length === 0 : true
  const hasUserAccount = !noAccountInLocalStorage || !noAccountInLocalState


  const handleSignOut = () => {
    const stringifiedSignOut = JSON.stringify(true);
    localStorage.setItem("sign-out", stringifiedSignOut);
    context.setSignOut(true);
  };

  const renderView = () => {
    if (isUserSignOut) {
      <li>
        <NavLink
          to="/sign-in"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          onClick={() => handleSignOut()}>
          Sign out
        </NavLink>
      </li>;
    }else{
      if (hasUserAccount && !isUserSignOut){
        return(
          <>
                <li className='text-white/60'>
                 {parsedAccount?.email}
                </li>
                <li>
                  <NavLink
                    to='/my-orders'
                    className={({ isActive }) => isActive ? activeStyle : undefined}>
                    My Orders
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/my-account'
                    className={({ isActive }) => isActive ? activeStyle : undefined}>
                    My Account
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/sign-in'
                    className={({ isActive }) => isActive ? activeStyle : undefined}
                    onClick={() => handleSignOut()}>
                    Sign out
                  </NavLink>
                </li>
              </>   
        )

      }else{
        return (
          <li>
            <NavLink
              to="/sign-in"
              className={({ isActive }) => isActive ? activeStyle : undefined }
              onClick={() => handleSignOut()}>
              Sign in
            </NavLink>
          </li>
        )
      }
    
    }
  }
  return (
    <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light text-white bg-sky-600'>
      <ul className='flex items-center gap-3'>
        <li className='font-semibold text-lg'>
          <NavLink to={`${isUserSignOut ? '/sign-in' : '/'}`}>
           HppyShopi
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/'
            onClick={() => context.setSearchByCategory()}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/clothes'
            onClick={() => context.setSearchByCategory('clothes')}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/electronics'
            onClick={() => context.setSearchByCategory('electronics')}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
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
      <ul className='flex items-center gap-3'>
        {renderView()}
        <li className='flex items-center'>
         <ShoppingCart/>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
