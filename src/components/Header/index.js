import React from 'react'
import './index.css'
import image from '../../images/marvel-image.png'

const Header = () => {
    return (
        <nav className="header-container">
            <img className="header-logo" src={image} />
        </nav>
    )
}

export default Header
