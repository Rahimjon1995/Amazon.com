import React from 'react';
import '../styles/Product.css';
import Item from './Item';
import Header from './Header';


function Product({allBacketItems}) {
    return (
           <div className="product_basket">
            <Header/>
            {allBacketItems.map((basketItem) =>{
                return(
                    <Item key={basketItem.id} id={basketItem.id} cost={basketItem.cost} title={basketItem.title} image={basketItem.image}/>
                )
            })}
        </div>
        
    )
}

export default Product
