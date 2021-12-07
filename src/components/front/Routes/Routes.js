import React from 'react'
import Product from '../Products/Product';
import Signup from '../Signup/Signup';
import Cart from '../Cart/Cart';
import { Route, Switch } from 'react-router-dom';

const Routes = ({productItems, cartItems, handleAddProduct, handleRemoveProduct, handleCartClearance}) => {
    return ( 
       <div>
           <Switch>
               <Route path="/" exact>
                   <Product 
                   productItems = {productItems}
                   handleAddProduct={handleAddProduct}/>
               </Route>
               <Route path="/signup" exact>
                   <Signup />
               </Route>
               <Route path="/cart" exact>
                   <Cart 
                   cartItems={cartItems} 
                   handleAddProduct={handleAddProduct} 
                   handleRemoveProduct = {handleRemoveProduct}
                   handleCartClearance = {handleCartClearance}
                   />
               </Route>
           </Switch>
       </div>
    )
}

export default Routes
