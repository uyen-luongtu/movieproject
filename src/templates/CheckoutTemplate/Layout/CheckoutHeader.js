import React from 'react'
import { useSelector } from 'react-redux'
import { USER_LOGIN } from "../../../util/settings/config"
import * as s from './CheckoutHeaderStyle'

export default function CheckoutHeader(props) {

    const { checkoutStep } = useSelector(state => state.QuanLyDatVeReducer)
    const tenTaiKhoan = JSON.parse(localStorage.getItem(USER_LOGIN)).taiKhoan


    return (
        <s.CheckoutHeader className='flex justify-between items-center'>
            <div className='checkout_step flex h-100'>
                <s.CheckoutStep className={checkoutStep === 1 ? 'active' : ''}><span>01</span> CHỌN GHẾ & THANH TOÁN</s.CheckoutStep>
                <s.CheckoutStep className={checkoutStep === 2 ? 'active' : ''}><span>02</span> KẾT QUẢ ĐẶT VÉ</s.CheckoutStep>
            </div>

            <div id='account' className='flex items-center'>
                <img src={`https://i.pravatar.cc/150?u=${tenTaiKhoan}`} alt='userlogo' />
                <span>{tenTaiKhoan}</span>
            </div>
        </s.CheckoutHeader>
    )
}
