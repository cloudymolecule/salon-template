import React from 'react'
import '../styles/Services.css'
import { ServiceList } from '../constants/ServiceList'


function Services() {
    
    const servs = ServiceList.map(s => {
        return <div className='service'>
            <h2 className='service-title'>{s.title}</h2>
            <h4 className='service-desc'>{s.description}</h4>
            <br />
            <li className='service-list'>
                {s.services.map(e => {
                    return <li className='service-list-item'>
                        <span className='service-list-item-service'>{e.service}</span>
                        <span className='service-list-item-price'>{e.price}</span>
                    </li>
                })}
            </li>
            
        </div>
    })
   
    return (
        <>
            <h1 className='services-title'>Our Services</h1>
            <div className='services-container'>
                <ul className='services'>
                    {servs}
                </ul>
            </div>
        </>
        
    )
}

export default Services