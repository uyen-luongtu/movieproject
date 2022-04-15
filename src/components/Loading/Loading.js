import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import logoImg from '../../assets/img/logo/logo.png'
import './Loading.css'

export default function Loading() {
    const { isLoading } = useSelector(state => state.QuanLyLoadingReducer)

    return (
        <Fragment>
            {
                isLoading ?
                    <div className='loading'>
                        < div className='loading-logo' >
                            <img src={logoImg} />
                        </div >
                    </div >
                    : ''
            }
        </Fragment>
    )
}
