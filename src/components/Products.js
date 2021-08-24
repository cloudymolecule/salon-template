import React from 'react'
import '../styles/Products.css'
import { ProductsSrc } from '../constants/ProductsSrc'


function Products() {
    
    const prods = ProductsSrc.map(p => {
        return <div>
            <h2 className='product-name'>{p.name}</h2>
            <p className='product-desc'>{p.description}</p>
        </div>
    })

    return (
        <>
            {prods}
        </>
    )
}

export default Products
