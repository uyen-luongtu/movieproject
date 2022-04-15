import React from 'react'
import Application from '../../components/Application/Application'
import FilmListCarousel from '../../components/FilmListCarousel/FilmListCarousel'
import HomeCarousel from './HomeCarousel/HomeCarousel'
import HomeMenu from './HomeMenu/HomeMenu'

export default function Home() {
    window.scrollTo({ top: 0 })
    return (
        <div>
            <HomeCarousel />
            <FilmListCarousel />
            <HomeMenu />
            <Application />
        </div>
    )
}
