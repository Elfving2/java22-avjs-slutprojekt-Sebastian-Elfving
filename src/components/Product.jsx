export default function Product({image, name, description, stock, price, handleClick}) { 
    return(
        // products template
        <div className="card" style={{width: "20rem"}} >
            <img className="card-img-top" src= {image} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title"> {name}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text">Qty: {stock}</p>
                <p className="card-text">${price}</p>
                <button className="add-to-cart" onClick={() => handleClick(name, price, stock, image)}> Add to cart</button>
            </div>
        </div>
    )
}