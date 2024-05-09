import React from "react";
import { useContext } from "react";
import ProductContext from "../Context/ProductContext/ProductContext";
import DeleteIcon from "@mui/icons-material/Delete";

const Cart = () => {
  let price = 0;
  const payment = () => {
    alert("Thanks for visiting BudhBazar");
    setCartItem([]);
  };

  const { CartItem, setCartItem } = useContext(ProductContext);

  const DeleteItem = (index) => {
    setCartItem((CartItem) =>
      CartItem.filter((ci, fid) => {
        if (fid !== index) {
          return ci;
        }
        return 0;
      })
    );
  };

  return (
    <div id="cart-container">
      <h1>Cart</h1>
      <div className="cart-items">
        {CartItem &&
          CartItem.map((el, index) => {
            price = price + el.price;
            return (
              <div className="item-container" key={index}>
                <div>
                  <img src={el.img} alt={Error} />
                </div>
                <div className="productdetails">
                  <h2>₹ {el.price}</h2>
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      DeleteItem(index);
                    }}
                  >
                    <DeleteIcon />
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <h2>Total ₹ {price} /-</h2>
      <button onClick={payment}>Pay</button>
    </div>
  );
};

export default Cart;
