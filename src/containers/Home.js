import React from 'react'
import '../styles/home/Home.css'
import Banner from '../components/home/Banner'
import WhatsNew from '../components/home/WhatsNew'
import Amenities from '../components/home/Amenities'

function Home() {
    return (
        <div>
            <Banner />
            <WhatsNew />
            <Amenities />
        </div>
    )
}

export default Home
