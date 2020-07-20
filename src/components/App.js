import React from 'react'
import Header from './layout/header/Header'
import './App.css'
export default function App(props) {
    return (
        <div >
            <Header/> 
            {props.children}
        </div>
    )
}
