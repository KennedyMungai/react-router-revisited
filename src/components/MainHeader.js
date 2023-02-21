import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './MainHeader.modules.css'

const MainHeader = () =>
{
    return (
        <header className='header'>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Welcome</NavLink>
                    </li>
                    <li>
                        <NavLink to="/products">Products</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainHeader