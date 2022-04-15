import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import logoImg from '../../assets/img/logo/logo.png'
import * as s from './LoadingStyle'

export default function Loading() {
    const { isLoading } = useSelector(state => state.QuanLyLoadingReducer)

    return (
        <Fragment>
            {
                isLoading ?
                    <s.Loading>
                        <s.LoadingLogo>
                            <img src={logoImg} alt='logo' />
                        </s.LoadingLogo >
                    </s.Loading >
                    : ''
            }
        </Fragment>
    )
}
