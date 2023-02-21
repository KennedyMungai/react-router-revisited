import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const MainHeader = () =>
{
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <a href="/">Welcome</a>
                    </li>
                    <li>
                        <a href="/products">Products</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainHeader