import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
export const Footer = () => {
    return (
        <footer >
            <h6 className="pt-2">
                <Link to="/">Github</Link>
            </h6>
        </footer>
    )
}
