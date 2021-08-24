import React from 'react'
import '../styles/Products.css'
import { ProductsSrc } from '../constants/ProductsSrc'


function Products() {
    
    const prods = ProductsSrc.map(p => {
        return <li className='product'>
            <div className='product-name' style={{backgroundColor: p.nameColor}}>
                <h2 className='product-name-name' style={{color: p.fontColor}}>{p.name}</h2>
            </div>
            
            <p className='product-desc'>{p.description}</p>
        </li>
    })

    return (
        <>
            <h1 className='products-title'>Products</h1>
            <div className='products-container'>
                <ul className='products'>
                    {prods}
                </ul>
            </div>
        </>
    )
}

export default Products
