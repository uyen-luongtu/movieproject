import React, { Fragment } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { TOKEN, USER_LOGIN } from '../../util/settings/config'
import './AdminTemplate.css'
import SidebarAdmin from './Layout/SidebarAdmin'


export default function AdminTemplate(props) {
    const { Component, ...restProps } = props

    if (JSON.parse(localStorage.getItem(USER_LOGIN))?.maLoaiNguoiDung !== 'QuanTri') {
        return <Redirect to='/admin/login' />
    }
    return (
        <Route {...restProps} render={(routeProps) => {
            return (
                <div className='d-flex' style={{ height: '100vh' }}>
                    <SidebarAdmin />
                    <div className='admin_content'>
                        <Component {...routeProps} />
                    </div>
                </div>
            )
        }} />
    )
}
