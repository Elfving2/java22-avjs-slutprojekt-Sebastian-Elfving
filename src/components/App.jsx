import NavBar from "./Navbar"
import DisplayShoppingItems from "./DisplayShoppingItems"
import { useState } from "react"
export default function App() {
    const [arrayOfProducts, setarrayOfProducts] = useState([]);
    const [totalAmountOfItems, setTotalAmountOfItems] = useState(0);
    const [totalCost, setTotalCost] = useState(0);
    
    return(
        <>
            <NavBar arrayOfProducts = {arrayOfProducts} setarrayOfProducts={setarrayOfProducts} setTotalCost = {setTotalCost} totalCost= {totalCost} setTotalAmountOfItems = {setTotalAmountOfItems} totalAmountOfItems= {totalAmountOfItems} />
            <DisplayShoppingItems setarrayOfProducts = {setarrayOfProducts} arrayOfProducts={arrayOfProducts} setTotalCost = {setTotalCost} totalCost= {totalCost} setTotalAmountOfItems = {setTotalAmountOfItems} totalAmountOfItems = {totalAmountOfItems}/>  
        </>
    )
}