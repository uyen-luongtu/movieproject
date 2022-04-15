
import { layTTHeThongRapAction } from '../../../redux/actions/QuanLyRapAction';
import React, { Fragment, useEffect } from 'react'
import * as s from './HomeMenuStyle'
import { useDispatch, useSelector } from 'react-redux'
import { Tabs } from 'antd';
import moment from 'moment'
import { NavLink } from 'react-router-dom';


const { TabPane } = Tabs;

export default function HomeMenu() {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(layTTHeThongRapAction())
    }, [])

    const heThongRap = useSelector(state => state.QuanLyRapReducer.heThongRap)

    const renderHeThongRap = () => {
        return heThongRap.map((heThongRap, index) => {
            return <TabPane tab={
                <s.CinemaSystem>
                    <img className='cinemaSystemLogo' src={heThongRap.logo} alt='cinemasystem-logo' />
                </s.CinemaSystem>
            } key={index}>
                <s.CinemaList>
                    <Tabs tabPosition='left'>
                        {renderCumRap(heThongRap.lstCumRap, heThongRap.logo)}
                    </Tabs>
                </s.CinemaList>
            </TabPane>
        })
    }
    const renderCumRap = (lstCumRap, logoHTRap) => {
        return lstCumRap.map((cumRap, index) => {
            return <TabPane tab={<s.CinemaDetails className='flex items-start'>
                <img className='cinemaImg d-none d-sm-block' src={logoHTRap} alt='cinemaImg' />
                <s.CinemaInfo>
                    <h4 className='cinemaName m-0 '><span>{cumRap.tenCumRap.slice(0, cumRap.tenCumRap.indexOf(' -'))}</span> {cumRap.tenCumRap.slice(cumRap.tenCumRap.indexOf(' -'))}</h4>
                    <p className='d-none d-md-block'>{cumRap.diaChi}</p>
                </s.CinemaInfo>
            </s.CinemaDetails>} key={index}>

                <s.MovieList className='scrollBarStyle'>
                    {renderLichChieuPhim(cumRap.danhSachPhim.filter(phim => phim.dangChieu === true), logoHTRap)}

                </s.MovieList>

            </TabPane>
        })
    }
    const renderLichChieuPhim = (lstPhim, logoHTRap) => {
        return lstPhim.map((phim, index) => {
            return <s.MovieItem key={index}>
                <s.MovieDetails className='flex items-center'>
                    <img src={phim.hinhAnh} alt='movieImg' />
                    <div className='ml-2'>
                        <h4 className='movieTitle m-0'><span>C16</span>{phim.tenPhim}</h4>
                        <p className='d-none d-sm-block'>120 phút - TIX 10 - IMDb 0</p>
                    </div>
                </s.MovieDetails>
                <s.DigitalText>2D Digital</s.DigitalText>
                <div className='movieSchedule'>
                    {renderGioChieuTheoPhim(phim.lstLichChieuTheoPhim, logoHTRap)}

                </div>
            </s.MovieItem >
        })
    }
    const renderGioChieuTheoPhim = (lstLichChieu, logoHTRap) => {
        const renderList = lstLichChieu.length <= 8 ? lstLichChieu : lstLichChieu.slice(0, 8)
        return renderList.map((lichChieu, index) => {
            return <s.ShowingTime key={index} className='showing-time' to={`/checkout/${lichChieu.maLichChieu}`} onClick={() => {
                localStorage.setItem('cinemaComplexLogo', logoHTRap)
            }}> <span>{moment(lichChieu.ngayChieuGioChieu).format('hh:mm')}</span> - {moment(lichChieu.ngayChieuGioChieu).format('A')
                }</s.ShowingTime>
        })
    }

    return (
        <Fragment>
            <s.ShowtimesContainer id='showtimes' >
                <Tabs tabPosition='left'>
                    {renderHeThongRap()}
                </Tabs>
            </s.ShowtimesContainer >
        </Fragment>
    )
}
