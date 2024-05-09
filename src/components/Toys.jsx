import { useContext } from "react";
import ProductContext from "../Context/ProductContext/ProductContext";


import React from 'react';
import ToyData from './ToyData';


function Toys() {

  
  const { CartItem, setCartItem} = useContext(ProductContext);

  const Addcart = (el) =>  {
    
     setCartItem(CartItem.concat(el));
  
  }

    return (
        <div id='toys-container'>
            {ToyData.map((el) => {
        return (
          <div key={el.id}>
            <div>
              <img src={el.img} alt='Error' />
            </div>
            <div>
              <p>{el.title}</p>
              <h2>₹ {el.price}/-</h2>
              <h4>Available offers</h4>
              <span>
                Special PriceGet extra 29% off
              </span>
              <span>
                Special PriceGet extra 29% off
              </span>
              <span>
                Special PriceGet extra 29% off
              </span>
              <button onClick={()=> Addcart(el)}>Add to cart</button>
            </div>
          </div>
        );
      })}
            
        </div>
    );
}

export default Toys;