import React from 'react'
import '../styles/home/Home.css'
import Banner from '../components/home/Banner'
import WhatsNew from '../components/home/WhatsNew'
import Amenities from '../components/home/Amenities'
import Contact from '../components/Contact'

function Home() {
    return (
        <div>
            <Banner />
            <WhatsNew />
            <Amenities />
            <Contact />
        </div>
    )
}

export default Home
