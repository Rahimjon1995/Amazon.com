import React from 'react';
import { useStateValue } from "../StateProvider";

function Item({ id, title, image, cost}) {
    const [dispatch] = useStateValue([]);
    const addToCart = (e) => {
        dispatch({
            type: "ADD_TO_CART",
            basket: {
                id: id,
                title: title,
                cost: cost,
                image: image
            }
        });
    }
    return (
        <div>
        
            <h1>{title}</h1>
            <img alt="" src={image} />
            <p>{cost}</p>
            <button onClick={addToCart}>add to cart</button>
        
        </div>
    )
}

export default Item
