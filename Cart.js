import React from 'react';
import './style.css';
import './ContextProvider';

import { CartContextValue } from './ContextProvider';

function Cart() {
    const [cartData,dispatch] = CartContextValue();
    return ( 
        <div class = "cartPage">
            <div class = "cartcontent center">
            <table>
            <tr class = "cartDetails">
                <th class = "center-items" > Items </th>   
                <th class = "center-head" > Quantity </th>   
                <th class = "center-head" > Price </th>   
                <th class = "center-head" > Total </th>   
            </tr>

            {
                cartData.cartItems.map(cartObj => ( 
                    <tr>
                    <td class = "left" > { cartObj.item } </td>   
                    <td >{ cartObj.qty } </td>   
                    <td >{ cartObj.price } </td>   
                    <td >{ cartObj.total } </td>   
                    </tr>
                ))
            }


            </table>   
            </div>  
            <div class = "orderButton center" >
                <button class = "orderbtn" href = "" > Place Order </button>   
            </div>  
        </div>
    )
}

export default Cart;
