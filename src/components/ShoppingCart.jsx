import { RiDeleteBinLine } from 'react-icons/ri';
export default function ShoppingCart({arrayOfProducts, setarrayOfProducts, setTotalCost, setTotalAmountOfItems, totalCost}) {
    //fetch current values from firebase and update them with the values inside arrayOfProducts using PUT and send updated data back to firebase
    async function completePurchase() {
        const response = await fetch("https://slutprojekt-69628-default-rtdb.europe-west1.firebasedatabase.app/products.json");
        const data = await response.json();
         for(let i = 0; i < data.length; i++) {
            for(let j = 0; j < arrayOfProducts.length; j++) {
                if(data[i].title === arrayOfProducts[j].name) {
                    data[i].stock = data[i].stock - arrayOfProducts[j].value;
                    let options = {
                        method: "PUT",
                        body: JSON.stringify(data[i])
                    }
                    fetch(`https://slutprojekt-69628-default-rtdb.europe-west1.firebasedatabase.app/products/${data[i].id-1}.json`, options)
                }
            }   
        }
        //reload site after pressing "ok"
        alert("Purchase has been made!")
        location.reload();
    }

    //reset values inside shoppingCart
    function removeItemsFromShoppingCart() {
        setarrayOfProducts([]);
        setTotalCost(0);
        setTotalAmountOfItems(0)
    }
    return(
        <div className="cart"> 
            {arrayOfProducts.map((item) => 
            <div className="item" key={item.id}> 
                <img src = {item.image} alt="" style={{width: "50px"}} /> 
                <p> {item.name}</p>
                <p className="amount-of-items">x{item.value}</p>
            </div>)}
            <p className="amount">Total ${totalCost}</p>
            <div className="flex-buttons">
                <button onClick={completePurchase} className="buyBtn">Buy Items</button>
                <button onClick={removeItemsFromShoppingCart} className="buyBtn">{<RiDeleteBinLine/>}</button>
            </div>
        </div>
    )
}