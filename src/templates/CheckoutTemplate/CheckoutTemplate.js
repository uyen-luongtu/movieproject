import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
// import '../../pages/Checkout/Checkout.css'
import { layThongTinNguoiDungAction } from '../../redux/actions/QuanLyNguoiDungAction'
import { USER_LOGIN } from '../../util/settings/config'
import CheckoutHeader from './Layout/CheckoutHeader'

export default function CheckoutTemplate(props) {
    const { Component, ...restProps } = props

    if (!localStorage.getItem(USER_LOGIN)) {
        return <Redirect to='/login' />
    }
    return (
        <Route {...restProps} render={(routeProps) => {
            return (
                <Fragment>
                    <div className='checkout'>
                        <CheckoutHeader />
                        <Component {...routeProps} />
                    </div>
                </Fragment>
            )
        }} />
    )
}
