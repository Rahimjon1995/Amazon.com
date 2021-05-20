import React from 'react'

function AllContent({title, img,}) {
    return (
        <div className="shop_top_categories">
            <h1>{title}</h1>
            <img src={img} alt=""/>
            <p>Explore now</p>
        </div>
    )
}

export default AllContent
