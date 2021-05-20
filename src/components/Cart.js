import React from 'react';
import '../styles/Cart.css';
import Header from './Header';
import { useStateValue } from "../StateProvider";
import CartItem from './CartItem';
import CurrencyFormat from "react-currency-format";
import { getBasketSubtotal} from '../reducer';

function Cart() {
    const [basket, dispatch] = useStateValue();
    console.log(basket)

    
    return (
        <div className="cart_wrapper">
        
        <Header/>
        
        <div className="cart_container">

        <div className="shopping_your_items">
        <div className="shopping_cart">
                    <div className="deselect">
                        <div className="deselect_text">
                        <h1>Shopping Cart</h1>
                        <p>Deselect all items</p>
                        </div>
                        <div className="price">
                        <p>Price</p>
                    </div>
                    </div>
                    

                    
                    
                </div> 
                <div className="your_items">
                    {basket.basket.map((cartItems) => {
                        return (
                            <div>
                                <CartItem key={cartItems.id} id={cartItems.id} cost={cartItems.cost} image={cartItems.image} title={cartItems.title}/>
                            </div>
                        )
                    })}
                </div>
        </div>
        <div className="subtotal">
            <div className="subtotal_items">
                
                <CurrencyFormat
                    renderText={(value)=>(
                    <>
                            <div><span>Subtotal</span> <strong>{`${value}`}</strong> <span>items:</span>  
                                <strong>{`${basket?.basket.length}`}</strong></div>
                            
                    </>
                    )}
                    value={getBasketSubtotal(basket?.basket)}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                />
                    <div><input type="checkbox" name="" id=""/> <span>This contains a gift</span></div>  
                    <div><button type="submit" className="buton_submit">Proceed to checkout</button></div>
            </div>
            <div className="frequently">

            </div>

        </div> 



        </div>
        
               
        
        </div>
    )
}

export default Cart
