import { createContext, useState, useEffect } from "react";

const ShoppingCartContext = createContext();

//localstorage for signout
const initialStorage =() =>{
  const accountInLocalStorage =localStorage.getItem('account');
  const signOutInLocalStorage =  localStorage.getItem('sign-out');
  let parsedAccount
  let parsedSignOut

  if(!accountInLocalStorage){
    localStorage.setItem('account', JSON.stringify({}))
    parsedAccount = {}
  }else{
    parsedAccount = JSON.parse(accountInLocalStorage)
  }

  if(!signOutInLocalStorage){
    localStorage.setItem('sign-out', JSON.stringify(false))
    parsedSignOut = false
  } else {
    parsedSignOut = JSON.parse(signOutInLocalStorage)
  }

  
}

//en el shopping car vienen los estados globales
const ShoppingCartProvider = ({ children }) => {
  
  //MyAccount
  const [account, setAccount] = useState({})

  //Sign-out
  const [signOut, setSignOut] = useState(false)
  
  //shopping cart increment
  const [count, setCount] = useState(0);

  //product detail open/close
  const [isProductOpen, setIsproductOpen] = useState(false);
  const openProductDetail = () => setIsproductOpen(true);
  const closeProductDetail = () => setIsproductOpen(false);

  // menu cart products
  const [isMenuCartOpen, setIsMenuCartOpen] = useState(false);
  const openMenuCart = () => setIsMenuCartOpen(true);
  const closeMenuCart = () => setIsMenuCartOpen(false);

  //product detail
  const [productToShow, setProductToShow] = useState({});
  //add products to cart
  const [cartProduct, setCartProduct] = useState([]);
  // checkout cart
  const [order, setOrder] = useState([]);

  //home
  const [items, setItems] = useState(null);
  const [filteredItems, setFilteredItems] = useState(null)

  //get products by title
  const [searchByTitle, setSearchByTitle] = useState(null)
  const [searchByCategory, setSearchByCategory] = useState(null)
  
  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  const filteredItemsByTitle = (items, searchByTitle ) =>{
    return items.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
  }
  const filteredItemsByCategory = (items, searchByCategory ) =>{
    return items.filter(item => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()))
  }
  const filteredBy = (searchType, items, searchByTitle, searchByCategory) =>{
    if(searchType === 'BY_TITLE'){
      return filteredItemsByTitle(items, searchByTitle)
    }
    if(searchType === 'BY_CATEGORY'){
      return filteredItemsByCategory(items, searchByCategory)
    }
    if(searchType === 'BY_TITLE_AND_CATEGORY'){
      return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }
    if (!searchType) {
      return items
    }
  }
  useEffect(() => {
    if (searchByTitle && searchByCategory) setFilteredItems(filteredBy('BY_TITLE_AND_CATEGORY', items, searchByTitle, searchByCategory))
    if (searchByTitle && !searchByCategory) setFilteredItems(filteredBy('BY_TITLE', items, searchByTitle, searchByCategory))
    if (!searchByTitle && searchByCategory) setFilteredItems(filteredBy('BY_CATEGORY', items, searchByTitle, searchByCategory))
    if (!searchByTitle && !searchByCategory) setFilteredItems(filteredBy(null, items, searchByTitle, searchByCategory))
  }, [items, searchByTitle, searchByCategory])

  //sign out en el localsotarage
  


  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        openProductDetail,
        closeProductDetail,
        isProductOpen,
        productToShow,
        setProductToShow,
        cartProduct,
        setCartProduct,
        isMenuCartOpen,
        setIsMenuCartOpen,
        openMenuCart,
        closeMenuCart,
        order,
        setOrder,
        items,
        setItems,
        searchByTitle,
        setSearchByTitle,
        filteredItems,
        setFilteredItems,
        searchByCategory,
        setSearchByCategory,
        account,
        setAccount,
        signOut,
        setSignOut
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
export { ShoppingCartContext, ShoppingCartProvider, initialStorage };
