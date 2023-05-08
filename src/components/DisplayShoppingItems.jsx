import { useState, useEffect } from "react";
import Product from "./Product";
export default function DisplayShoppingItems({setarrayOfProducts, arrayOfProducts, setTotalCost, totalCost, setTotalAmountOfItems, totalAmountOfItems}) {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState(() => products);

    async function getProducts() {
        const response = await fetch("https://slutprojekt-69628-default-rtdb.europe-west1.firebasedatabase.app/products.json");
        const data = await response.json();
        setProducts(data);
    }
    //search function that displays itemes, filters are "title" and "category"
    function handleChange(event) {
        const resultArray = products.filter(product => product.category.toLowerCase().includes(event.target.value.toLowerCase()) || product.title.toLowerCase().includes(event.target.value.toLowerCase()));
        setSearch(resultArray);
    }
    // function handeling "add to cart"
    function handleClick(name, price, stock, image) {
        const randomNumber = Math.random() * 1000;
        const productInformation = {
            name: name,
            value : 1,
            image : image,
            id : randomNumber,
            stock : stock
        }

        function findNameInArray(item) {
            return item.name === productInformation.name;
        }

        // updates states depending on clicked product sock value
        if(productInformation.stock < productInformation.value) {
            setarrayOfProducts([...arrayOfProducts]);
        } else if(typeof arrayOfProducts.find(findNameInArray) === "undefined") {
                setarrayOfProducts([...arrayOfProducts, productInformation]);
                setTotalCost(totalCost += price);
                setTotalAmountOfItems(totalAmountOfItems+=1)
        } else if(arrayOfProducts.find(findNameInArray).stock > arrayOfProducts.find(findNameInArray).value) {
                arrayOfProducts.find(findNameInArray).value += 1
                setTotalAmountOfItems(totalAmountOfItems+=1);
                setTotalCost(totalCost += price);
        }
    }
    useEffect(() => {
        {getProducts()}
      }, []);

    useEffect(() => {
        setSearch(products);
      }, [products]);

    return(
        <>
            <input type="text" onChange={handleChange}/>
            <div className="product-container">
                {
                    search.map((product) => 
                        <Product key={product.id} image={product.images[0]} name={product.title} price={product.price} description={product.description} stock={product.stock} handleClick={handleClick}/>)
                }
            </div>
        </>
    )
}