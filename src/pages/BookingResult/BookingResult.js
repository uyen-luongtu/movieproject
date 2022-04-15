import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as s from './BookingResultStyle'
import qrCodeImg from '../../assets/img/qrcode.png'
import { CHANGE_CHECKOUT_STEP } from '../../redux/types/QuanLyDatVeType';
export default function BookingResult(props) {
    const { history } = props
    const logoHTRap = localStorage.getItem('cinemaComplexLogo')
    const dispatch = useDispatch()
    window.onload = function () {
        history.push('/home')
    }
    useEffect(() => {
        dispatch({
            type: CHANGE_CHECKOUT_STEP
        })
    }, []);
    const { thongTinPhongVe, danhSachTenGheDD } = useSelector(state => state.QuanLyDatVeReducer)

    const { thongTinPhim } = thongTinPhongVe
    return (
        <s.CheckoutResult >
            <s.LeftContent backgroundImage={thongTinPhim.hinhAnh}>
                <s.Overlay></s.Overlay>
                <s.FilmInfo>
                    <p className='m-0'>{thongTinPhim.ngayChieu}</p>
                    <h3 className='text-white'> <span>C16</span>{thongTinPhim.tenPhim}</h3>
                    <p className='m-0'>120 phút - TIX - IMDb 0 - 2D/Digital</p>
                </s.FilmInfo>
            </s.LeftContent>
            <s.RightContentWrapper>
                <s.RightContent>
                    <s.Ticket>
                        <s.TicketInfo>
                            <h3 className='filmTitle'> <span>C16</span>{thongTinPhim.tenPhim}</h3>
                            <div className='cinemaInfo flex justify-between'>
                                <s.CinemaDetail>
                                    <p className='mb-1'>{thongTinPhim.tenCumRap}</p>
                                    <p className='m-0'>{thongTinPhim.diaChi}</p>
                                </s.CinemaDetail>
                                <s.CinemaLogo src={logoHTRap} alt='logo' />
                            </div>
                            <s.ScheduleInfo className='flex justify-between'>
                                <div>
                                    <p>Ngày</p>
                                    <h4>{thongTinPhim.ngayChieu}</h4>
                                </div>
                                <div>
                                    <p>Giờ</p>
                                    <h4>{thongTinPhim.gioChieu}</h4>
                                </div>
                                <div>
                                    <p>Rạp</p>
                                    <h4>{thongTinPhim.tenRap}</h4>
                                </div>
                            </s.ScheduleInfo>
                            <s.SeatCode>
                                <p>SỐ GHẾ</p>
                                <h4>{danhSachTenGheDD.map((ghe, i) => {
                                    if (i === 0) {
                                        return ghe
                                    }
                                    return `, ${ghe}`
                                })}</h4>
                            </s.SeatCode>
                        </s.TicketInfo>
                        <s.DivisionLine>
                            <div className='halfCircle halfCircle_left'></div>
                            <div className='halfCircle halfCircle_right'></div>
                        </s.DivisionLine>
                        <s.TicketQRCode className='flex'>
                            <img src={qrCodeImg} alt='qrcode' />
                            <div className='ml-5'>
                                <div className='ticketCode'>
                                    <p>Mã vé</p>
                                    <h3>1645173296853</h3>
                                </div>
                                <h2>*VÉ ĐÃ MUA <br />
                                    KHÔNG THỂ ĐỔI TRẢ</h2>
                            </div>
                        </s.TicketQRCode>
                    </s.Ticket>
                    <div className='w-100 text-center'>
                        <s.HomeButton onClick={() => {
                            history.push('/home')
                        }}>Về Trang Chủ</s.HomeButton>
                    </div>
                    <div className='contact'>
                        <p className='notice mt-3' style={{ color: '#9b9b9b' }}>
                            Xin lưu ý, bạn không thể hủy hoặc thay đổi suất chiếu cho vé đã mua.
                        </p>
                        <s.Hotline className=' flex justify-center items-center'>
                            <div>
                                <h2 className='m-0'>HOTLINE</h2>
                                <p className='hotlineFee m-0 '>Phí cuộc gọi 1000VND/phút</p>
                            </div>
                            <div className='hotlineNumber'>
                                <p className='m-0'>1900 545 436</p>
                            </div>
                        </s.Hotline>
                    </div>
                </s.RightContent>
            </s.RightContentWrapper>

        </s.CheckoutResult >
    )
}

{/* <div className='checkoutResult'>
<div className='checkoutResult_left' style={{ backgroundImage: 'url(' + thongTinPhim.hinhAnh + ')' }}>
    <div className='checkoutResult_overlay'></div>
    <div className='checkoutResult_filmInfo'>
        <p className='m-0'>{thongTinPhim.ngayChieu}</p>
        <h3 className='text-white'> <span>C16</span>{thongTinPhim.tenPhim}</h3>
        <p className='m-0'>120 phút - TIX - IMDb 0 - 2D/Digital</p>
    </div>
</div>
<div className='checkoutResult_right'>
    <div className='checkoutResult_right_content'>
        <div className='checkoutResult_ticket'>
            <div className='ticketInfo'>
                <h3 className='filmTitle'> <span>C16</span>{thongTinPhim.tenPhim}</h3>
                <div className='cinemaInfo flex justify-between'>
                    <div className='cinemaDetails'>
                        <p className='mb-1'>{thongTinPhim.tenCumRap}</p>
                        <p className='m-0'>{thongTinPhim.diaChi}</p>
                    </div>
                    <img className='cinemaLogo' src={logoHTRap} />
                </div>
                <div className='scheduleInfo flex justify-between'>
                    <div>
                        <p>Ngày</p>
                        <h4>{thongTinPhim.ngayChieu}</h4>
                    </div>
                    <div>
                        <p>Giờ</p>
                        <h4>{thongTinPhim.gioChieu}</h4>
                    </div>
                    <div>
                        <p>Rạp</p>
                        <h4>{thongTinPhim.tenRap}</h4>
                    </div>
                </div>
                <div className='seatCode'>
                    <p>SỐ GHẾ</p>
                    <h4>{danhSachTenGheDD.map((ghe, i) => {
                        if (i === 0) {
                            return ghe
                        }
                        return `, ${ghe}`
                    })}</h4>
                </div>
            </div>
            <div className='division'>
                <div className='halfCircle halfCircle_left'></div>
                <div className='halfCircle halfCircle_right'></div>
            </div>
            <div className='ticketQRCode flex'>
                <img src={qrCodeImg} />
                <div className='ml-5'>
                    <div className='ticketCode'>
                        <p>Mã vé</p>
                        <h3>1645173296853</h3>
                    </div>
                    <h2>*VÉ ĐÃ MUA <br />
                        KHÔNG THỂ ĐỔI TRẢ</h2>
                </div>
            </div>
        </div>
        <div className='w-100 text-center'>
            <button className='homeBtn' onClick={() => {
                history.push('/home')
            }}>Về Trang Chủ</button>
        </div>
        <div className='contact'>
            <p className='notice mt-3' style={{ color: '#9b9b9b' }}>
                Xin lưu ý, bạn không thể hủy hoặc thay đổi suất chiếu cho vé đã mua.
            </p>
            <div className='hotline flex justify-center items-center'>
                <div>
                    <h2 className='m-0'>HOTLINE</h2>
                    <p className='hotlineFee m-0 '>Phí cuộc gọi 1000VND/phút</p>
                </div>
                <div className='hotlineNumber'>
                    <p className='m-0'>1900 545 436</p>
                </div>
            </div>
        </div>
    </div>
</div>

</div > */}