import React from 'react';
import { useStateValue } from "../StateProvider";

function CartItem({id, image, title, cost}) {
    const [ basket,dispatch] = useStateValue();
    const removFromBasket = (e) => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        });
    }
    console.log(basket);
    return (
        <div>
            <h1>{title}</h1>
             <img src={image} alt="" />
              <p>{cost}</p>
               <button onClick={removFromBasket}>Remove from basket</button>
        </div>
    )
}

export default CartItem
