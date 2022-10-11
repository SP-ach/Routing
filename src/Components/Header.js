import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        
        <nav>
        <div>
            
            <span >
                <Link to='/home' >Home </Link>
            </span>
            <span >
                <Link to='/about'>About</Link>
            </span>
            <span >
                <Link to='/contact'>Contact Us</Link>
            </span>
        </div>
        </nav>
        
    )
}

export default Header