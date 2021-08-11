import React from 'react'
import '../styles/Services.css'
import { ServiceList } from '../constants/ServiceList'


function Services() {
    
    const servs = ServiceList.map(s => {
        return <div className='service-service'>
            <h2>{s.title}</h2>
            <h4>{s.description}</h4>
            <br />
            {s.services.map(e => {
                return <p>{e.service} / {e.price}</p>
            })}
        </div>
    })
   
    return (
        <div className='services-container'>
            <span>Our Services</span>
            <ul className='services'>
               {servs}
            </ul>
        </div>
    )
}

export default Services
