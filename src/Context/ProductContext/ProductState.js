import ProductContext from "./ProductContext";
import { useState } from "react";

const ProductState = (props) => {
const [CartItem, setCartItem] = useState([])
// let arr = [];
// console.log(arr);
return(
    <ProductContext.Provider value={{CartItem,setCartItem}}>
        {props.children}
    </ProductContext.Provider>
)

}

export default ProductState;
