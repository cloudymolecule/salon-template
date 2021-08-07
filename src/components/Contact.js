import React from 'react'
import '../styles/Contact.css'
import { IconContext } from 'react-icons/lib'
import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'
import { SiGooglemaps } from 'react-icons/si'


function Contact() {
    return (
        <div className='contact-container'>
            <IconContext.Provider value={{ color: '#00eeff', size: '80px' }}>
                <a className='contact-item' href='https://www.facebook.com/' target="_blank" rel="noreferrer">
                    <AiFillFacebook />
                </a>
                <a className='contact-item' href='https://www.instagram.com/user/' target="_blank" rel="noreferrer">
                    <AiFillInstagram />
                </a>
                <a className='contact-item' href='mailto: email' target="_blank" rel="noreferrer">
                    <MdEmail />
                </a>
                <a className='contact-item' href='https://www.maps.google.com/' target="_blank" rel="noreferrer">
                    <SiGooglemaps />
                </a>

                {/* add phone number */}
            </IconContext.Provider>

        </div>
    )
}

export default Contact
