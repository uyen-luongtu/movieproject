import React from 'react'
import Application from '../../components/Application/Application'
import FilmList_Carousel from '../../components/FilmList_Carousel/FilmList_Carousel'
import HomeCarousel from './HomeCarousel/HomeCarousel'
import HomeMenu from './HomeMenu/HomeMenu'

export default function Home() {
    window.scrollTo({ top: 0 })
    return (
        <div>
            <HomeCarousel />
            <FilmList_Carousel />
            <HomeMenu />
            <Application />
        </div>
    )
}
