import { useState } from "react";
import { AiOutlineShoppingCart } from 'react-icons/Ai';
import ShoppingCart from "./ShoppingCart";
export default function NavBar({arrayOfProducts, setarrayOfProducts, setTotalCost, totalCost, setTotalAmountOfItems, totalAmountOfItems}) {
    const [showShoppingCart, setShowShoppingCart] = useState(false)
    function toggleShoppingCart() {
        if(showShoppingCart === true) {
            setShowShoppingCart(false);
        } else {
            setShowShoppingCart(true);
        }   
    }
    return(
        <div id="navbar-container">  
            <div className="d-flex bd-highlight bg-dark">
                <div className="p-2 w-100 bd-highlight text-primary">
                    <p>My Website</p>
                </div>
                <div id="nav-cart-container" className="p-2 flex-shrink-1 bd-highlight text-primary">
                        <button onClick={toggleShoppingCart} className="btn btn-dark" style={{borderRadius : "20px"}}>
                            {totalAmountOfItems > 0 ? <p className="totalAmountOfItemsInCart">{totalAmountOfItems}</p> : ""}
                            {/* img from react icons */}
                            <h1><AiOutlineShoppingCart/></h1>
                        </button>
                </div>
            </div>
            { showShoppingCart === true ? <ShoppingCart arrayOfProducts = {arrayOfProducts} setarrayOfProducts = {setarrayOfProducts} setTotalCost = {setTotalCost} setTotalAmountOfItems = {setTotalAmountOfItems} totalCost = {totalCost}  /> : "" }
        </div>
    
    )

}