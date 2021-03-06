import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as s from './CheckoutStyle'

//img
import screenImg from '../../assets/img/screen.png'
import zaloPayImg from '../../assets/img/zalopay.jpg'
import visaImg from '../../assets/img/visa.png'
import noticeImg from '../../assets/img/notice.png'
import { datVeAction, layDanhSachPhongVeAction } from '../../redux/actions/QuanLyDatVeAction'
import { CHON_GHE } from "../../redux/types/QuanLyDatVeType"
import { layThongTinNguoiDungAction } from '../../redux/actions/QuanLyNguoiDungAction'


const alphabet = "abcdefghijklmnopqrstuvwxyz";
const alphabetUp = alphabet.toUpperCase()

export default function Checkout(props) {

    const logoHTRap = localStorage.getItem('cinemaComplexLogo')
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(layThongTinNguoiDungAction())
        dispatch(layDanhSachPhongVeAction(props.match.params.idLichChieu))
    }, [])

    const { thongTinUser } = useSelector(state => state.QuanLyNguoiDungReducer)
    const { thongTinPhongVe, danhSachGheDangDat, danhSachTenGheDD } = useSelector(state => state.QuanLyDatVeReducer)

    const { danhSachGhe, thongTinPhim } = thongTinPhongVe
    const totalAmt = () => {
        let sum = 0
        danhSachGheDangDat?.forEach(seat => {
            sum += seat.giaVe
        })
        return sum.toLocaleString()
    }

    const renderSeatRow = (rowNo, rowName) => {
        let seatRow = []
        for (let i = 0; i < 17; i++) {
            if (i === 0) {
                seatRow.push(<s.SeatRowName key={i}>{rowName}</s.SeatRowName>)
            } else {
                const indexSeat = 16 * rowNo + i - 1
                const seat = danhSachGhe[indexSeat]

                const classVipSeat = seat?.loaiGhe === 'Vip' ? 'vipSeat' : ''
                const classBookedSeat = seat?.daDat ? 'bookedSeat' : ''
                const classSelectingSeat = danhSachGheDangDat?.findIndex(selectingSeat => selectingSeat.maGhe === seat?.maGhe) === -1 ? '' : 'selectingSeat'

                seatRow.push(<s.Seat key={i} className={` ${classBookedSeat} ${classVipSeat} ${classSelectingSeat}`} onClick={(e) => {
                    if (classBookedSeat) {
                        e.preventDefault()
                    } else {
                        dispatch({
                            type: CHON_GHE,
                            selectingSeat: {
                                maGhe: seat.maGhe,
                                giaVe: seat.giaVe
                            },
                            seatName: `${rowName}${seat?.stt}`
                        })
                    }

                }}>
                    <div className='item1'></div>
                    <div className='item2'>{seat?.tenGhe}</div>
                </s.Seat>)
            }
        }
        return seatRow;
    }
    const renderSeatPlan = () => {
        let seatPlan = [];
        for (let i = 0; i < 10; i++) {

            seatPlan.push(<s.SeatRow className='flex' key={i}>
                {renderSeatRow(i, alphabetUp.slice(i, i + 1))}
            </s.SeatRow>)

        }
        return seatPlan;
    }

    return (
        <Fragment>
            <s.CheckoutContent>
                <s.CheckoutLeft className='scrollBarStyle'>
                    <s.CheckoutLeft_Top>
                        <s.CinemaInfoLeft className='flex items-center'>
                            <img src={logoHTRap} alt='logo' />
                            <div>
                                <p className='mb-1'><span>{thongTinPhim.tenCumRap.slice(0, thongTinPhim.tenCumRap.indexOf(' -'))}</span> {thongTinPhim.tenCumRap.slice(thongTinPhim.tenCumRap.indexOf(' -'))}</p>
                                <p className='m-0'>{thongTinPhim.ngayChieu} - {thongTinPhim.gioChieu} - {thongTinPhim.tenRap}</p>
                            </div>
                        </s.CinemaInfoLeft>
                    </s.CheckoutLeft_Top>
                    <s.SeatPlanContainer className='scrollBarStyle'>
                        <s.Screen>
                            <img src={screenImg} alt='screen' />
                        </s.Screen>
                        <s.SeatPlan >
                            {
                                renderSeatPlan()
                            }
                        </s.SeatPlan>
                    </s.SeatPlanContainer>

                    <s.SeatTypeContainer className=' text-center flex justify-between items-start'>
                        <div>
                            <s.SeatType></s.SeatType>
                            <s.SeatTitle>Gh??? th?????ng</s.SeatTitle>
                        </div>
                        <div>
                            <s.SeatType className='vipSeat'></s.SeatType>
                            <s.SeatTitle>Gh??? VIP</s.SeatTitle>
                        </div>
                        <div>
                            <s.SeatType className='selectingSeat'></s.SeatType>
                            <s.SeatTitle>Gh??? ??ang ch???n</s.SeatTitle>
                        </div>
                        <div>
                            <s.SeatType className='bookedSeat'></s.SeatType>

                            <s.SeatTitle>Gh??? ???? c?? ng?????i ch???n</s.SeatTitle>
                        </div>
                    </s.SeatTypeContainer>
                </s.CheckoutLeft>

                <s.CheckoutRight>
                    <s.BookingInfo className='scrollBarStyle'>
                        <s.TotalAmount>
                            <span>{totalAmt()}</span> ??
                        </s.TotalAmount>
                        <s.CinemaInfoRight>
                            <h3> <span>C18</span>{thongTinPhim.tenPhim}</h3>
                            <p className='mb-1'>{thongTinPhim?.tenCumRap}</p>
                            <p className='m-0'>{thongTinPhim.ngayChieu} - {thongTinPhim.gioChieu} - {thongTinPhim.tenRap}</p>
                        </s.CinemaInfoRight>
                        <s.SeatInfo className='flex'>
                            <p className='seatCode m-0'>Gh???  <span>{danhSachTenGheDD.map((ghe, i) => {
                                if (i === 0) {
                                    return ghe
                                }
                                return `, ${ghe}`
                            })}</span></p>
                            <p className='totalAmt text-right m-0'><span>{totalAmt()}</span> ??</p>
                        </s.SeatInfo>
                        <s.UserInfo>
                            <div className='section'>
                                <p>Email</p>
                                <input value={thongTinUser.email} placeholder='Nh???p t???i ????y' />
                            </div>
                            <div className='section'>
                                <p>Phone</p>
                                <input value={thongTinUser.soDT} placeholder='Nh???p t???i ????y' />
                            </div>
                            <div className='section'>
                                <p>M?? gi???m gi??</p>
                                <input placeholder='Nh???p t???i ????y' />
                            </div>
                        </s.UserInfo>
                        <s.PaymentInfo>
                            <p className='m-0'>H??nh th???c thanh to??n</p>
                            <div className='mt-1'>
                                <input type="radio" id="zalopay" name="paymentmethod" value="zalopay" />
                                <label className='ml-1' htmlFor="zalopay">
                                    <img src={zaloPayImg} alt='zaloPay' />
                                    Thanh to??n qua ZaloPay</label>
                            </div>
                            <div className='mt-1'>
                                <input type="radio" id="visa" name="paymentmethod" value="visa" />
                                <label className='ml-1' htmlFor="visa">
                                    <img src={visaImg} alt='visaPayment' />
                                    Visa, Master, JCB</label>
                            </div>
                        </s.PaymentInfo>

                    </s.BookingInfo>

                    <s.Notice>
                        <div className='text-center flex justify-center items-center'>
                            <img src={noticeImg} alt='img' />
                            <p className='m-0'>V?? ???? mua kh??ng th??? ?????i ho???c ho??n ti???n</p>
                        </div>
                        <p className='text-center'>M?? v?? s??? ???????c g???i qua tin nh???n <span>ZMS</span> (tin nh???n Zalo) v?? <span>Email</span> ???? nh???p.</p>
                    </s.Notice>
                    <s.BookingButton disabled={danhSachGheDangDat.length !== 0 ? false : true} className={danhSachGheDangDat.length !== 0 ? '' : ' blockBookingBtn'} onClick={() => {
                        dispatch(datVeAction({
                            maLichChieu: thongTinPhim.maLichChieu,
                            danhSachVe: danhSachGheDangDat
                        }))

                    }}>?????t V??</s.BookingButton>
                </s.CheckoutRight>
            </s.CheckoutContent>
        </Fragment >
    )
}

{/* <div className='checkoutContent flex'>
<div className='checkoutLeft'>
    <div className='checkoutLeft_top'>
        <div className='checkoutLeft_cinemaInfo flex items-center'>
            <img src={logoHTRap} />
            <div>
                <p className='mb-1'><span>{thongTinPhim.tenCumRap.slice(0, thongTinPhim.tenCumRap.indexOf(' -'))}</span> {thongTinPhim.tenCumRap.slice(thongTinPhim.tenCumRap.indexOf(' -'))}</p>
                <p className='m-0'>{thongTinPhim.ngayChieu} - {thongTinPhim.gioChieu} - {thongTinPhim.tenRap}</p>
            </div>
        </div>

    </div>
    <div className='checkoutLeft_screen'>
        <img src={screenImg} />
    </div>
    <div className='checkoutLeft_seatPlan '>
        {
            renderSeatPlan()
        }
    </div>
    <div className='checkoutLeft_seatType text-center flex justify-between items-center'>
        <div className=''>
            <div className='seat'></div>
            <div className='seatTitle'>Gh??? th?????ng</div>
        </div>
        <div>
            <div className='seat vipSeat'></div>
            <div className='seatTitle'>Gh??? VIP</div>
        </div>
        <div>
            <div className='seat selectingSeat'></div>
            <div className='seatTitle'>Gh??? ??ang ch???n</div>
        </div>
        <div>
            <div className='seat bookedSeat'></div>
            <div className='seatTitle'>Gh??? ???? c?? ng?????i ch???n</div>
        </div>
    </div>
</div>

<div className='checkoutRight'>
    <div className='checkoutRight_top'>
        <div className='checkoutRight_totalAmt text-center'>
            <span>{totalAmt()}</span> ??
        </div>
        <div className='checkoutRight_cinemaInfo section'>
            <h3> <span>C18</span>{thongTinPhim.tenPhim}</h3>
            <p className='mb-1'>{thongTinPhim?.tenCumRap}</p>
            <p className='m-0'>{thongTinPhim.ngayChieu} - {thongTinPhim.gioChieu} - {thongTinPhim.tenRap}</p>
        </div>
        <div className='checkoutRight_seatInfo  section flex'>
            <p className='seatCode m-0'>Gh???  <span>{danhSachTenGheDD.map((ghe, i) => {
                if (i === 0) {
                    return ghe
                }
                return `, ${ghe}`
            })}</span></p>
            <p className='totalAmt text-right m-0'><span>{totalAmt()}</span> ??</p>
        </div>
        <div className='checkoutRight_userInfo'>
            <div className='section'>
                <p>Email</p>
                <input value={thongTinUser.email} placeholder='Nh???p t???i ????y' />
            </div>
            <div className='section'>
                <p>Phone</p>
                <input value={thongTinUser.soDT} placeholder='Nh???p t???i ????y' />
            </div>
            <div className='section'>
                <p>M?? gi???m gi??</p>
                <input placeholder='Nh???p t???i ????y' />
            </div>
        </div>
        <div className='checkoutRight_payment'>
            <p className='m-0'>H??nh th???c thanh to??n</p>
            <div className='mt-1'>
                <input type="radio" id="zalopay" name="paymentmethod" value="zalopay" />
                <label className='ml-3' htmlFor="zalopay">
                    <img src={zaloPayImg} />
                    Thanh to??n qua ZaloPay</label>
            </div>
            <div className='mt-1'>
                <input type="radio" id="visa" name="paymentmethod" value="visa" />
                <label className='ml-3' htmlFor="visa">
                    <img src={visaImg} />
                    Visa, Master, JCB</label>
            </div>
        </div>
    </div>

    <div className='checkoutRight_notice'>
        <div className='text-center flex justify-center items-center'>
            <img src={noticeImg} />
            <p className='m-0'>V?? ???? mua kh??ng th??? ?????i ho???c ho??n ti???n</p>
        </div>
        <p className='text-center'>M?? v?? s??? ???????c g???i qua tin nh???n <span>ZMS</span> (tin nh???n Zalo) v?? <span>Email</span> ???? nh???p.</p>
    </div>
    <button disabled={danhSachGheDangDat.length !== 0 ? false : true} className={danhSachGheDangDat.length !== 0 ? 'bookingBtn' : 'bookingBtn blockBookingBtn'} onClick={() => {
        dispatch(datVeAction({
            maLichChieu: thongTinPhim.maLichChieu,
            danhSachVe: danhSachGheDangDat
        }))

    }}>?????t V??</button>
</div>
</div> */}