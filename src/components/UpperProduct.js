import React from 'react';
import { Link } from 'react-router-dom';


function UpperProduct({title, img,}) {
    return (
        <div className="get_fit">
        <Link to="/product">
            <h1>{title}</h1>
        </Link>
            <img src={img} alt=""/>
            <p>Explore now</p>
        </div>
          
        
        
    )
}

export default UpperProduct
