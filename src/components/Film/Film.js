import React, { Fragment } from 'react'
import { history } from '../../App'
import * as s from './FilmStyle'
import starImg from '../../assets/img/star.png'

export default function Film(props) {
    const { film } = props
    return (
        <Fragment>
            <s.MovieItem onClick={() => {
                history.push(`/detail/${film.maPhim}`)
            }}>
                <img src={film.hinhAnh} alt='filmImg' />
                <s.MovieOverlay></s.MovieOverlay>
                <s.MovieScore>
                    <p>10</p>
                    <s.StarGroup>
                        <img src={starImg} alt='starImg' />
                        <img src={starImg} alt='starImg' />
                        <img src={starImg} alt='starImg' />
                        <img src={starImg} alt='starImg' />
                        <img src={starImg} alt='starImg' />
                    </s.StarGroup>
                </s.MovieScore>
                <s.MovieDetail>
                    <p className='movieTitle'><span>C18</span> {film.tenPhim}</p>
                    {/* <p className=' m-0 movieDuration'>100 phút</p> */}
                </s.MovieDetail>
                <s.BuyTicketButton>Mua Vé</s.BuyTicketButton>
            </s.MovieItem>
        </Fragment>
    )
}

{/* <div className='listMovies_item' onClick={() => {
    history.push(`/detail/${film.maPhim}`)
}}>
    <img className='movieImg' src={film.hinhAnh} alt='filmImg' />
    <div className='movieImgOverlay'>
    </div>
    <div className='movieScore text-center'>
        <p className='score m-0'>10 </p>
        <div className='star m-0'>
            <img src={starImg} alt='starImg' />
            <img src={starImg} alt='starImg' />
            <img src={starImg} alt='starImg' />
            <img src={starImg} alt='starImg' />
            <img src={starImg} alt='starImg' />
        </div>
    </div>
    <div className='movieDetail'>
        <p className='movieTitle'><span>C18</span> {film.tenPhim}</p>
        <p className=' m-0 movieDuration'>100 phút</p>
    </div>
    <button className='buyTicketBtn'>Mua Vé</button>
</div> */}
