import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { USER_LOGIN } from '../../util/settings/config'
import SidebarAdmin from './Layout/SidebarAdmin'
import * as s from './AdminTemplateStyle'


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
                    <s.AdminContent>
                        <Component {...routeProps} />
                    </s.AdminContent>
                </div>
            )
        }} />
    )
}
