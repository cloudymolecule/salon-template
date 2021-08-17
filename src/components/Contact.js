import React from 'react'
import '../styles/Contact.css'
import { IconContext } from 'react-icons/lib'
import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'
import { SiGooglemaps } from 'react-icons/si'


function Contact() {
    return (
        <>
            <div className='contact-container'>
                
                <div className='contact-info'>
                    <h2>Salon and Spa</h2>
                    <br />
                    <p>1234 Some Street</p>
                    <p>Some Township, State, Zip Code</p>
                    <h3>Phone Number</h3>
                </div>

                <div className='contact-hours'>
                    <h2>HOURS</h2>
                    <br />
                    <p>Monday Closed</p>
                    <p>Tuesday- 9:30am - 5:00pm</p>
                    <p>Wednesday- 10:30am - 7:30pm</p>
                    <p>Thursday- 10:30am - 6:00pm</p>
                    <p>Friday- 9:30am - 5:00pm</p>
                    <p>Saturday 9:00am - 3:00pm</p>
                    <p>Sunday Closed</p>
                </div>
                
                <div className='contact-container-container'>
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
                        <a className='contact-item' href='https://www.google.com/maps/place/Cupertino,+CA/@37.3093131,-122.0786639,13z/data=!3m1!4b1!4m5!3m4!1s0x808fb4571bd377ab:0x394d3fe1a3e178b4!8m2!3d37.3229978!4d-122.0321823' target="_blank" rel="noreferrer">
                            <SiGooglemaps />
                        </a>
                    </IconContext.Provider>
                </div>

            </div>
        </>
    )
}

export default Contact
