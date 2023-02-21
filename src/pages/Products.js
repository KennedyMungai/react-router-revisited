import React from 'react'
import { Link, Switch } from 'react-router-dom'

const Products = () =>
{
    return (
        <section>
            <h1>The Products Page</h1>
            <ul>
                <li>
                    <Link to='/products/book'>
                        A book
                    </Link>
                </li>
                <li>
                    <Link to='/products/carpet'>
                        A carpet
                    </Link>
                </li>
                <li>
                    <Link to='/products/online-course'>
                        An online course
                    </Link>
                </li>
            </ul>
        </section>
    )
}

export default Products