import React from 'react'
import { TopHome } from './TopHome'
import './Home.css'
import { Three } from './Three'
import { Two } from './Two'
import { WallPaperSub } from './WallPaperSub'
export default function Home() {
    return (
        <div>
            <TopHome/>
            <WallPaperSub/>
            <Three/>
            <Two/>
        </div>
    )
}
