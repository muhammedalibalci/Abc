import React from 'react'
import { Link } from 'react-router-dom'

export const TopHome = () => {
    return (
        <div className="container-fluid text-center t-outer" style={{ height: '300' }}>
            <div className="c-text pt-5">
                <h1 className="display-3" >Technology shop</h1>
                <p>Cool shop</p>
                <Link to="/products">
                    <button className="btn btn-home p-3 mt-4">look products</button>
                </Link>
            </div>
        </div>
    )
}
