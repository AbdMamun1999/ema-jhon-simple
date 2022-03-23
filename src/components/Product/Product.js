import React from 'react';
import './Product.css'

const Product = (props) => {
    const {img,id,name,price,seller,ratings} = props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                <p><small>ManuFacturer: {seller}</small></p>
                <p><small>Raitng: {ratings}</small></p>
            </div>
            <button onClick={()=>props.addtohandlecart(props.product)} className="btn-cart">
                <p>
                    Add to cart
                </p>
            </button>
        </div>
    );
};

export default Product;