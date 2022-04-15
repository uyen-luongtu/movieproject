import React, { Fragment, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment'
// import './Detail.css'
import * as s from './DetailStyle'
import { layTTLichChieuPhimAction } from '../../redux/actions/QuanLyRapAction'
import { history } from '../../App'

export default function Detail(props) {
    window.scrollTo({ top: 0 })

    const dispatch = useDispatch()
    useEffect(() => {

        dispatch(layTTLichChieuPhimAction(props.match.params.id))
    }, [])
    const thongTinLichChieuPhim = useSelector(state => state.QuanLyRapReducer.thongTinLichChieu)

    const renderCinemaComplexList = () => {
        return thongTinLichChieuPhim.heThongRapChieu?.map((heThongRap, index) => {
            return <li key={index}>
                <button className={index === 0 ? 'flex m-0  align-items-center active' : 'flex m-0  align-items-center'} data-bs-toggle="tab" data-bs-target={`#${heThongRap.maHeThongRap}`} type="button" role="tab" >
                    <img src={heThongRap.logo} alt='logo' />
                    <p className='d-none d-sm-block'>{heThongRap.tenHeThongRap}</p>
                </button>
            </li>
        })
    }
    const handleShowingDate = (listCumRap) => {
        let listShowingDate = []
        for (let i = 0; i < listCumRap?.length; i++) {
            for (let k = 0; k < listCumRap[i].lichChieuPhim?.length; k++) {
                listShowingDate.push(moment(listCumRap[i].lichChieuPhim[k].ngayChieuGioChieu).format('YYYY-MM-DD'))
            }
        }
        let listShowingDateUnique = listShowingDate.sort().filter((item, index, arr) => {
            return arr.indexOf(item) === index
        })
        return listShowingDateUnique
    }
    const renderListShowingDate = (heThongRap) => {

        const lstShowingDate = handleShowingDate(heThongRap.cumRapChieu)
        return lstShowingDate.map((date, index) => {

            return <li key={index}>
                <button className={index === 0 ? 'active' : ''} data-bs-toggle="tab" data-bs-target={`#${heThongRap.maHeThongRap}-${date}`} type="button" role="tab">
                    <p className='month m-0'>Tháng {moment(date).format('MM')}</p>
                    <p className='day '>{moment(date).format('DD')}</p>
                </button>
            </li>
        })
    }
    const renderCinemaCard = (logo, listCumRapCungNgayChieu) => {
        return listCumRapCungNgayChieu.map((cumRap, index) => {
            return <s.CinemaCard key={index}>
                <s.CinemaCardHeader className='d-flex align-items-center'>
                    <img src={logo} alt='logo' />
                    <div className='cinemaInfo'>
                        <h3 className='m-0'>{cumRap.tenCumRap}</h3>
                        <p className='m-0'>{cumRap.diaChi}</p>
                    </div>
                </s.CinemaCardHeader>
                <div className='cinemacard-body'>
                    <s.DigitalText>2D Digital</s.DigitalText>
                    <s.MovieSchedule>
                        {cumRap.lichChieuPhim.map((lichChieu, i) => {
                            return <button onClick={() => {
                                history.push(`/checkout/${lichChieu.maLichChieu}`)
                                localStorage.setItem('cinemaComplexLogo', logo)
                            }}><span>{moment(lichChieu.ngayChieuGioChieu).format('hh:mm')}</span> ~ {moment(lichChieu.ngayChieuGioChieu).format('A')}</button>
                        })}
                    </s.MovieSchedule>
                </div>
            </s.CinemaCard>
        })
    }
    const renderListCinemaCard = (heThongRap) => {

        const listShowingDate = handleShowingDate(heThongRap.cumRapChieu)

        return listShowingDate.map((date, index) => {
            let listCumRapCungNgayChieu = []
            for (let i = 0; i < heThongRap.cumRapChieu?.length; i++) {
                let cumRapUpdate = { ...heThongRap.cumRapChieu[i] }
                cumRapUpdate.lichChieuPhim = heThongRap.cumRapChieu[i].lichChieuPhim.filter(lichChieu => moment(lichChieu.ngayChieuGioChieu).format('YYYY-MM-DD') === date)

                if (cumRapUpdate.lichChieuPhim?.length > 0) {
                    listCumRapCungNgayChieu.push(cumRapUpdate)
                }
            }

            return <div className={index === 0 ? 'tab-pane fade show text-black active' : 'tab-pane fade show text-black'} id={`${heThongRap.maHeThongRap}-${date}`} role="tabpanel" >
                {renderCinemaCard(heThongRap.logo, listCumRapCungNgayChieu)}
            </div>
        })



    }

    const renderCinemaSchedule = () => {
        if (thongTinLichChieuPhim.heThongRapChieu?.length > 0) {
            return thongTinLichChieuPhim.heThongRapChieu?.map((heThongRap, index) => {
                return <div key={index} className={index === 0 ? 'tab-pane fade show active' : 'tab-pane fade'} id={heThongRap.maHeThongRap} role="tabpanel">
                    <s.ListShowingDate className=' scrollBarStyle'>
                        <ul className="nav nav-tabs justify-content-start" role="tablist">
                            {renderListShowingDate(heThongRap)}
                        </ul>
                    </s.ListShowingDate>
                    <s.ListCinemaCard className="tab-content">
                        {renderListCinemaCard(heThongRap)}
                    </s.ListCinemaCard>
                </div>
            })
        } else {
            return <div className='text-black text-center mt-5'>Không có suất chiếu</div>
        }

    }

    return (
        <Fragment>
            <s.DetailContainer>
                <s.TopContent>
                    <s.BlurImgBg backgroundImage={thongTinLichChieuPhim.hinhAnh}></s.BlurImgBg>
                    <s.GradientColorBg></s.GradientColorBg>
                    <s.FilmDetail>
                        <div className='row justify-content-between'>
                            <s.FilmDetail_Left className='d-flex'>
                                <img src={thongTinLichChieuPhim.hinhAnh} alt='hinhAnhPhim' />
                                <s.FilmInfo>
                                    <div>
                                        <p className="showDate m-0">{moment(thongTinLichChieuPhim.ngayKhoiChieu).format('DD.MM.YYYY')}</p>
                                        <p className='filmTitle'><span>C13</span>{thongTinLichChieuPhim.tenPhim}</p>
                                        <p className='m-0'>120 phút - 0 IMDb - 2D/Digital</p>
                                        <button className='buyTicketBtn' onClick={() => {
                                            let yPos =
                                                document.getElementById('film_mainBottom').offsetTop;

                                            window.scrollTo({ top: yPos - 60 })
                                        }}>Mua Vé</button>
                                    </div>
                                </s.FilmInfo>
                            </s.FilmDetail_Left>

                        </div>
                    </s.FilmDetail>
                </s.TopContent>
                <s.BottomContent id='film_mainBottom'>
                    <s.NavTab className="nav nav-tabs justify-content-center" role="tablist">
                        <li>
                            <button className='active' data-bs-toggle="tab" data-bs-target="#lichchieuPhim" type="button" role="tab">Lịch Chiếu</button>
                        </li>
                        <li>
                            <button data-bs-toggle="tab" data-bs-target="#thongtinPhim" type="button" role="tab">Thông Tin</button>
                        </li>
                    </s.NavTab>
                    <s.NavContent className="tab-content">
                        <div className="tab-pane fade show active " id="lichchieuPhim" role="tabpanel">
                            <s.ShowtimeContainer className='d-flex'>
                                <s.CinemaComplexList className="nav nav-tabs flex-column" role="tablist">
                                    {renderCinemaComplexList()}
                                </s.CinemaComplexList>
                                <s.CinemaSchedule className="tab-content">
                                    {renderCinemaSchedule()}
                                </s.CinemaSchedule>
                            </s.ShowtimeContainer>
                        </div>
                        <div className="tab-pane fade show  " id="thongtinPhim" role="tabpanel" >
                            <div className='row detailFilmInfo '>
                                <div className='col-6 left'>
                                    <div className='d-flex  my-2'>
                                        <p style={{ width: '35%' }}>Ngày công chiếu</p>
                                        <p>{moment(thongTinLichChieuPhim.ngayKhoiChieu).format('DD.MM.YYYY')}</p>

                                    </div>
                                    <div className='d-flex my-2'>
                                        <p style={{ width: '35%' }}>Đạo diễn</p>
                                        <p>Unknown</p>

                                    </div>
                                    <div className='d-flex  my-2'>
                                        <p style={{ width: '35%' }}>Diễn viên</p>
                                        <p>Unknown</p>

                                    </div>
                                    <div className='d-flex  my-2'>
                                        <p style={{ width: '35%' }}>Thể loại</p>
                                        <p>Chiếu rạp</p>

                                    </div>
                                    <div className='d-flex  my-2'>
                                        <p style={{ width: '35%' }}>Định dạng</p>
                                        <p>2D/Digital</p>

                                    </div>
                                    <div className='d-flex  my-2'>
                                        <p style={{ width: '35%' }}>Quốc gia SX</p>
                                        <p>Unknown</p>

                                    </div>
                                </div>
                                <div className='col-6 right'>
                                    <div >
                                        <p >Nội dung</p>
                                        <p style={{ lineHeight: '22px' }}>{thongTinLichChieuPhim.moTa}</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </s.NavContent>
                </s.BottomContent>
            </s.DetailContainer>

        </Fragment >
    )
}

{/* <Fragment>
<div className='film_mainContent'>
    <div className='film_mainTop'>
        <div className='film_blurImgBg' style={{ backgroundImage: 'url(' + thongTinLichChieuPhim.hinhAnh + ')' }}></div>
        <div className='film_gradientColorBg'></div>
        <div className='film_detail'>
            <div className='row justify-content-between'>
                <div className=' flex film_detailLeft'>
                    <img src={thongTinLichChieuPhim.hinhAnh} alt='hinhAnhPhim' />
                    <div className='film_info'>
                        <div>
                            <p className="showDate m-0">{moment(thongTinLichChieuPhim.ngayKhoiChieu).format('DD.MM.YYYY')}</p>
                            <p className='filmTitle'><span>C13</span>{thongTinLichChieuPhim.tenPhim}</p>
                            <p className='m-0'>120 phút - 0 IMDb - 2D/Digital</p>
                            <button className='buyTicketBtn' onClick={() => {
                                let yPos =
                                    document.getElementById('film_mainBottom').offsetTop;
                                console.log(yPos)
                                window.scrollTo({ top: yPos - 60 })
                            }}>Mua Vé</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <div id='film_mainBottom' className='film_mainBottom text-white'>
        <ul className="film_mainNav nav nav-tabs justify-content-center" role="tablist">
            <li>
                <button className='active' data-bs-toggle="tab" data-bs-target="#lichchieuPhim" type="button" role="tab">Lịch Chiếu</button>
            </li>
            <li>
                <button data-bs-toggle="tab" data-bs-target="#thongtinPhim" type="button" role="tab">Thông Tin</button>
            </li>
        </ul>
        <div className="tab-content mainNavContent">
            <div className="tab-pane fade show active " id="lichchieuPhim" role="tabpanel">
                <div className='d-flex align-items-start' id='detailCinemaComplex'>
                    <ul className="nav nav-tabs flex-column" id="cinemaComplexList" role="tablist">
                        {renderCinemaComplexList()}
                    </ul>
                    <div className="tab-content" id='cinemaSchedule'>
                        {renderCinemaSchedule()}
                    </div>
                </div>

            </div>
            <div className="tab-pane fade show  " id="thongtinPhim" role="tabpanel" >
                <div className='row detailFilmInfo '>
                    <div className='col-6 left'>
                        <div className='d-flex  my-2'>
                            <p style={{ width: '35%' }}>Ngày công chiếu</p>
                            <p>{moment(thongTinLichChieuPhim.ngayKhoiChieu).format('DD.MM.YYYY')}</p>

                        </div>
                        <div className='d-flex my-2'>
                            <p style={{ width: '35%' }}>Đạo diễn</p>
                            <p>Unknown</p>

                        </div>
                        <div className='d-flex  my-2'>
                            <p style={{ width: '35%' }}>Diễn viên</p>
                            <p>Unknown</p>

                        </div>
                        <div className='d-flex  my-2'>
                            <p style={{ width: '35%' }}>Thể loại</p>
                            <p>Chiếu rạp</p>

                        </div>
                        <div className='d-flex  my-2'>
                            <p style={{ width: '35%' }}>Định dạng</p>
                            <p>2D/Digital</p>

                        </div>
                        <div className='d-flex  my-2'>
                            <p style={{ width: '35%' }}>Quốc gia SX</p>
                            <p>Unknown</p>

                        </div>
                    </div>
                    <div className='col-6 right'>
                        <div >
                            <p >Nội dung</p>
                            <p style={{ lineHeight: '22px' }}>{thongTinLichChieuPhim.moTa}</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

</Fragment > */}