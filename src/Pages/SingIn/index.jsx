import { useContext, useState, useRef } from "react";
import { ShoppingCartContext} from '../../Context';
import { Link, Navigate } from "react-router-dom";
import Layout from "../../Components/Layout";
import { object } from "prop-types";

function SingIn() {
  const context = useContext(ShoppingCartContext);
  const [view, setView] = useState('user-info')
  const form = useRef(null)
  //Acount
  const account = localStorage.getItem('account');
  const parsedAccount = JSON.parse(account);
  // has an account

  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
  const noAccountInLocalState = context.account ? Object.keys(context.account).length === 0 : true
  const hasUserAccount = !noAccountInLocalStorage || !noAccountInLocalState

   const handleSignIn = () =>{
    const stringifiedSignOut = JSON.stringify(false)
    localStorage.setItem('sign-out', stringifiedSignOut)
    context.setSignOut(false)
    //redirect
    return <Navigate replace to={'/'}/>
   }

 const createAnAccount = ()=>{
 const formData = new FormData(form.current)
 const data = {
  name: formData.get('name'),
  email: formData.get('email'),
  password: formData.get('password')

 }
 console.log(data)
 const stringifiedAccount = JSON.stringify(data)
 localStorage.setItem('account', stringifiedAccount)
 context.setAccount(data)
 //sign in
 handleSignIn()

 }



   const renderLogin =()=>{
    return(
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <h1 className="font-medium text-xl text-center mb-8 w-80">Welcome</h1>
      <form className="space-y-6" >
        <div>
          <span
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Email address
          </span>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
            />
            <span>{parsedAccount?.email}</span>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <span
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Password
            </span>
            <span>{parsedAccount?.password}</span>
            <div className="text-sm">
              <a
                href="#"
                className="font-semibold text-slate-400 hover:text-black"
              >
                Forgot password?
              </a>
            </div>
          </div>
          <div className="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <Link to={"/"}>
            <button
              className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={() => handleSignIn()}
              disabled={!hasUserAccount}
            >
              Log in
            </button>
          </Link>
        </div>
        <div>
          <Link to={"/sign-in"}>
            <button
              className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={() => setView ('create-user-info')}
            >
              SIGN UP
            </button>
          </Link>
        </div>
      </form>
    </div>

    )
  
    }

    const renderCreateUserInfo =()=>{
        return(
         
           < form ref={form} className="">
             <h1 className="text-center text-lg font-bold  text-black">Form Register</h1>
    <div className="flex items-center  justify-center h-full bg-white">
      <div className="bg-white py-6 border-l-slate-600 rounded-md px-10 max-w-lg ">
       
        <div className="space-y-4 mt-6">
          <div className="w-full border-dotted border-l-slate-500">
            <input 
            type="text"
            id= "name"
            name="name"
            defaultValue={parsedAccount?.name}
             placeholder="name" 
             className="px-4 py-2 bg-gray-50 " />
          </div>
          <div className="w-full">
            <input 
            type="text"
            name="email"
            defaultValue={parsedAccount?.email}
            placeholder="email@mail.com" 
             className="px-4 py-2 bg-gray-50" />
          </div>
          <div className="w-full">
            <input 
            type="text"
            id="password"
            name="password"
            defaultValue={parsedAccount?.password}
            placeholder="********" 
          className="px-4 py-2 bg-gray-50" />
          </div>
        </div>
        <Link
        to={"/"}>
        <button 
        className="w-full mt-5 bg-black  hover:bg-slate-400 text-white py-2 rounded-md font-semibold tracking-tight"
        onClick={() => createAnAccount()}
        >
          Create
        </button>
        </Link>
        

      </div>
    </div>
  </form>
  
      )

    }
    const renderView = () => view === 'create-user-info' ? renderCreateUserInfo() : renderLogin()

  return (
    <Layout>
        {renderView()}
     
    </Layout>
  )
    
  
  
}
export default SingIn
