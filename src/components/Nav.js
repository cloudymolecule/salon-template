import React from 'react'
import { IconContext } from 'react-icons/lib'
import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import '../styles/Nav.css'

function Nav() {

    const [click, setClick] = useState(false)

    const handleClick = () => {
        setClick(!click)
    }

    const closeMobileMenu = () => {
        setClick(false)
    }
    
    return (
        <>

        </>
    )
}

export default Nav
