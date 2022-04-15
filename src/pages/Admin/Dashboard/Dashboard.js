import React, { Fragment } from 'react'
import { useDispatch } from 'react-redux'
import ChangePasswordForm from '../../../components/ModalForm/ChangePasswordForm/ChangePasswordForm'
import * as s from './DashboardStyle'
import { OPEN_MODALFORM } from '../../../redux/types/ModalType'
import { history } from '../../../App'
import { USER_LOGIN } from '../../../util/settings/config'

export default function Dashboard() {
    const user = JSON.parse(localStorage.getItem(USER_LOGIN))

    const dispatch = useDispatch()
    return (
        <Fragment>
            <s.DashboardContainer id='dashboard'>
                <s.AdminInfoContainer className='d-flex justify-content-between'>
                    <s.AdminInfo className=' flex-grow-1 mx-4'>
                        <div className='m-3 d-flex justify-content-start align-items-center'>
                            <img src={`https://i.pravatar.cc/150?u=${user.taiKhoan}`} alt='avatar' />
                            <div className='ml-3'>
                                <p>Tài khoản: <span>{user.taiKhoan}</span></p>
                                <p>Họ tên: <span>{user.hoTen}</span></p>
                                <p>Email: <span>{user.email}</span></p>
                                <p>Số ĐT: <span>{user.soDT}</span></p>
                            </div>
                        </div>

                    </s.AdminInfo>
                    <s.ButtonGroup className=' mx-4 my-10 d-flex  justify-content-between'>
                        <button className='btn mr-5' onClick={() => {
                            history.push('/admin/profile')
                        }}>Xem hồ sơ</button>
                        <button data-bs-toggle="modal" data-bs-target="#modalForm" onClick={() => {
                            dispatch({
                                type: OPEN_MODALFORM,
                                Component: <ChangePasswordForm />
                            })
                        }}>Đổi mật khẩu</button>
                    </s.ButtonGroup>
                </s.AdminInfoContainer>
                <s.Management className=' text-center'>
                    <div className='managementBtn d-flex justify-content-between'>
                        <button className='btn btn-primary flex-grow-1 mr-4 ' onClick={() => {
                            history.push('/admin/film')
                        }}>Films</button>
                        <button className='btn btn-primary flex-grow-1 ml-4' onClick={() => {
                            history.push('/admin/user')
                        }}>Users</button>
                    </div>
                </s.Management>


            </s.DashboardContainer>
        </Fragment >
    )
}
