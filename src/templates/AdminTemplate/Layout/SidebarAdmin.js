import React, { Fragment, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { TOKEN, USER_LOGIN } from '../../../util/settings/config'
import * as s from './SidebarAdminStyle'

export default function SidebarAdmin() {
    const user = JSON.parse(localStorage.getItem(USER_LOGIN))
    useEffect(() => {
        document.getElementById('dashboardBtn').focus()
    }, [])
    return (
        <Fragment>
            <s.SidebarAdmin className='admin_sideBar'>
                <s.UserContent>
                    <div className='user-logo'>
                        <img src={`https://i.pravatar.cc/150?u=${user.taiKhoan}`} alt='avatar' />
                        <h3>{user.hoTen}</h3>
                    </div>
                </s.UserContent>
                <s.Menu>
                    <li><NavLink id='dashboardBtn' to='/admin' className='text-white'>
                        <i className="fa-solid fa-list-check"></i>
                        <span>Dashboard</span>
                    </NavLink></li>

                    <li><NavLink to='/admin/profile' className='text-white'>
                        <i className="fa-solid fa-user"></i>
                        <span>Profile</span>
                    </NavLink></li>
                    <li>
                        <NavLink to='' className='text-white collapsed' data-bs-toggle="collapse"
                            data-bs-target='#managementCategory'>
                            <i className="fa-solid fa-bars-progress"></i>
                            <span>Management</span>
                            <div className='angle'>
                                <i className="fa-solid fa-angle-down"></i>
                            </div>
                        </NavLink>
                        <ul className='collapse' id='managementCategory'>
                            <li>
                                <NavLink to='/admin/user' className='text-white' style={{ paddingLeft: '50px' }} >
                                    <i className="fa-solid fa-users"></i>
                                    <span>User</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/admin/film' className='text-white' style={{ paddingLeft: '50px' }} >
                                    <i className="fa-solid fa-film"></i>
                                    <span>Film</span>
                                </NavLink>
                            </li>
                        </ul>
                    </li>
                    <li><NavLink to='/admin/login' className='text-white' onClick={() => {
                        localStorage.removeItem(USER_LOGIN);
                        localStorage.removeItem(TOKEN)
                    }}>
                        <i className="fa-solid fa-right-from-bracket"></i>
                        <span>Đăng xuất</span>
                    </NavLink></li>
                </s.Menu>

            </s.SidebarAdmin>
        </Fragment >
    )
}
