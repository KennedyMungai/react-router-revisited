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
                        <NavLink activeclassname={classes.active} to="/">Welcome</NavLink>
                    </li>
                    <li>
                        <NavLink activeclassname={classes.active} to="/products">Products</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainHeader