import React from 'react'
import { Link } from 'react-router-dom'
import classes from './MainHeader.modules.css'

const MainHeader = () =>
{
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Welcome</Link>
                    </li>
                    <li>
                        <Link to="/products">Products</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainHeader