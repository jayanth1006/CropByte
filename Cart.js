import React from 'react';
import './style.css';

function Cart() {
 return ( 
   <div class = "cartPage" >
        <div class = "cartcontent center" >
          <table >
            <tr class = "cartDetails" >
              <th class = "center-items" > Items < /th>  
              <th class = "center-head" > Quantity < /th>  
              <th class = "center-head" > Price < /th>  
              <th class = "center-head" > Total < /th>  
            </tr > 
            <tr >
              <td class = "left" > asdfghjk < /td>  
              <td > 5 < /td>  
              <td > 52 < /td>  
              <td > 850 < /td>  
            </tr >
          </table>  
        </div > 
        <div class = "orderButton center" >
          <button class = "orderbtn" href = "" > Place Order < /button>  
        </div > 
    </div>
    )
}

export default Cart;
