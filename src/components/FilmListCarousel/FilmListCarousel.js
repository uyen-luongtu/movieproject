import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as s from './FilmListCarouselStyle'
import { layDanhSachPhimAction } from '../../redux/actions/QuanLyPhimAction'
import { breakpoint } from '../../util/settings/BreakpointStyle'
import Film from '../Film/Film'
import prevIcon from '../../assets/img/prev-icon.png'
import nextIcon from '../../assets/img/next-icon.png'





export default function FilmListCarousel(props) {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(layDanhSachPhimAction(''))
    }, [])
    const handleScreenSize = () => {
        const width = window.innerWidth;
        if (width >= breakpoint.lg) {
            return [breakpoint.lg, window.screen.width]
        } else if (width >= breakpoint.md) {
            return [breakpoint.md, breakpoint.lg]
        } else if (width >= breakpoint.sm) {
            return [breakpoint.sm, breakpoint.md]
        } else {
            return [0, breakpoint.sm]
        }
    }
    const [screenSize, setScreenSize] = useState({ range: handleScreenSize() })

    useEffect(() => {
        function handleResize() {
            const width = window.innerWidth;
            if (width <= screenSize.range[0] || width > screenSize.range[1]) {
                setScreenSize({
                    range: handleScreenSize()
                })
            }

        }
        window.addEventListener('resize', handleResize)
        return _ => {
            window.removeEventListener('resize', handleResize)
        }
    })
    useEffect(() => {

        if (document.querySelector('#listMovies .carousel-item.key0')) {
            document.querySelectorAll('#listMovies .carousel-item.key0').forEach(item => {
                item.className = 'carousel-item key0 active'
            })
        }
    }, [screenSize])
    const danhSachPhim = useSelector(state => state.QuanLyPhimReducer.danhSachPhim)
    const danhSachPhimDangChieu = danhSachPhim.filter(film => film.dangChieu === true)
    const danhSachPhimSapChieu = danhSachPhim.filter(film => film.sapChieu === true)

    const renderDSPhim = (dsPhim) => {
        let numOfCol = 0;
        if (window.innerWidth >= breakpoint.lg) {
            numOfCol = 4
        } else if (window.innerWidth >= breakpoint.md) {
            numOfCol = 3
        } else if (window.innerWidth >= breakpoint.sm) {
            numOfCol = 2
        } else {
            numOfCol = 1
        }
        let numOfItems = numOfCol * 2
        const list = []
        const loopNum = Math.ceil(dsPhim.length / numOfItems)

        for (let i = 0; i < loopNum; i++) {
            list.push(<div className={i === 0 ? 'carousel-item key0 active' : 'carousel-item '} key={i}>
                <div className='movieContent' style={{ height: '785px' }}>
                    <div className='row'>
                        {dsPhim.slice(numOfItems * i, numOfItems * i + numOfItems).map((film, index) => {
                            return <div key={index} className={`col-${12 / numOfCol}`}>
                                <Film film={film} />
                            </div>
                        })}
                    </div>

                </div>
            </div >)
        }
        return list
    }
    return (
        <Fragment>
            <s.FilmListCarousel id='listMovies'>
                <s.NavTab className="nav nav-tabs justify-content-center" role="tablist">
                    <li>
                        <button className='active' data-bs-toggle="tab" data-bs-target="#nowshowingMovies" type="button" role="tab">Đang Chiếu</button>
                    </li>
                    <li>
                        <button data-bs-toggle="tab" data-bs-target="#upcomingMovies" type="button" role="tab">Sắp Chiếu</button>
                    </li>
                </s.NavTab>
                <div className="tab-content">
                    <div className="carousel slide tab-pane fade show active" id="nowshowingMovies" data-bs-interval="false" >
                        <div className="carousel-inner">
                            {renderDSPhim(danhSachPhimDangChieu)}
                        </div>

                        <button className="carousel-control-prev" type="button" data-bs-target="#nowshowingMovies" data-bs-slide="prev">
                            <img src={prevIcon} alt='prev' />
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#nowshowingMovies" data-bs-slide="next">
                            <img src={nextIcon} alt='next' />
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    <div className="carousel slide tab-pane fade show" id="upcomingMovies" data-bs-interval="false" >
                        <div className="carousel-inner">
                            {renderDSPhim(danhSachPhimSapChieu)}
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#upcomingMovies" data-bs-slide="prev">
                            <img src={prevIcon} alt='prev' />
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#upcomingMovies" data-bs-slide="next">
                            <img src={nextIcon} alt='next' />
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </s.FilmListCarousel>
        </Fragment>
    )
}


{/* <div id='listMovies'>
<ul className="nav nav-tabs justify-content-center" role="tablist">
    <li>
        <button className='active' data-bs-toggle="tab" data-bs-target="#nowshowingMovies" type="button" role="tab">Đang Chiếu</button>
    </li>
    <li>
        <button data-bs-toggle="tab" data-bs-target="#upcomingMovies" type="button" role="tab">Sắp Chiếu</button>
    </li>
</ul>
<div className="tab-content">
    <div className="carousel slide tab-pane fade show active" id="nowshowingMovies" data-bs-interval="false" >
        <div className="carousel-inner">
            {renderDSPhim(danhSachPhimDangChieu)}
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#nowshowingMovies" data-bs-slide="prev">
            <img src={prevIcon} />
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#nowshowingMovies" data-bs-slide="next">
            <img src={nextIcon} />
            <span className="visually-hidden">Next</span>
        </button>
    </div>
    <div className="carousel slide tab-pane fade show" id="upcomingMovies" data-bs-interval="false" >
        <div className="carousel-inner">
            {renderDSPhim(danhSachPhimSapChieu)}
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#upcomingMovies" data-bs-slide="prev">
            <img src={prevIcon} />
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#upcomingMovies" data-bs-slide="next">
            <img src={nextIcon} />
            <span className="visually-hidden">Next</span>
        </button>
    </div>
</div>
</div> */}

// https://www.pluralsight.com/guides/re-render-react-component-on-window-resize