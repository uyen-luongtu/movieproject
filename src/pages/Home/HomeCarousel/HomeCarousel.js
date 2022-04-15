import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as s from './HomeCarouselStyle'
import { layDanhSachBannerAction } from '../../../redux/actions/QuanLyPhimAction'


export default function HomeCarousel() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(layDanhSachBannerAction())
    }, [])
    const danhSachBanner = useSelector(state => state.QuanLyPhimReducer.danhSachBanner)
    const renderDSBanner = () => {
        return danhSachBanner.map((item, index) => {
            return <div className={index === 0 ? 'carousel-item active' : 'carousel-item'} key={index}>
                <img src={item.hinhAnh} className="d-block w-100" alt='banner' />
            </div>
        })
    }
    const renderCarouselIndicator = () => {
        return danhSachBanner.map((item, index) => {
            return <s.IndicatorBtn key={index} type="button" data-bs-target="#movieCarousel" data-bs-slide-to={index} className={index === 0 ? 'active' : ''}></s.IndicatorBtn>
        })
    }
    return (
        <Fragment>
            <s.MovieCarousel id="movieCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    {renderCarouselIndicator()}
                </div>
                <div className="carousel-inner">
                    {renderDSBanner()}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#movieCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#movieCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </s.MovieCarousel>
        </Fragment >
    )
}

{/* <div id="movieCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    {renderCarouselIndicator()}
                </div>
                <div className="carousel-inner">
                    {renderDSBanner()}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#movieCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#movieCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div> */}
