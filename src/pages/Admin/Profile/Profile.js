import { useFormik } from 'formik'
import React, { Fragment, useState } from 'react'
import { useDispatch } from 'react-redux'
import { capNhatThongTinNguoiDungAction } from '../../../redux/actions/QuanLyNguoiDungAction'
import { GROUP_ID, USER_LOGIN } from '../../../util/settings/config'
// import './Profile.css'
import * as s from './ProfileStyle'

export default function Profile() {
    const user = JSON.parse(localStorage.getItem(USER_LOGIN))
    const dispatch = useDispatch()
    const [isEdit, setIsEdit] = useState(false)
    const formik = useFormik({
        initialValues: {
            taiKhoan: user.taiKhoan,
            hoTen: user.hoTen,
            email: user.email,
            soDt: user.soDT,
            matKhau: '',
            maNhom: GROUP_ID,
            maLoaiNguoiDung: user.maLoaiNguoiDung,
        },
        onSubmit: values => {

            dispatch(capNhatThongTinNguoiDungAction(values))
            const updateUser = { ...user, email: values.email, soDT: values.soDt, hoTen: values.hoTen }
            localStorage.setItem(USER_LOGIN, JSON.stringify(updateUser))
            setIsEdit(false)
            window.location.reload()
        }

    })
    return (
        <Fragment>
            <s.ProfileContainer id='profile'>
                <s.ProfileForm>
                    <form>
                        <img src={`https://i.pravatar.cc/120?u=${user.taiKhoan}`} alt='logo' />
                        <div className='mt-2'>
                            <label htmlFor="taiKhoan" className="form-label m-0">Tài khoản:</label>
                            <input type="text" className="form-control" id="taiKhoan" name='taiKhoan' onChange={formik.handleChange} value={formik.values.taiKhoan} disabled />
                        </div>
                        <div className='mt-2'>
                            <label htmlFor="hoTen" className="form-label m-0">Họ tên:</label>
                            <input type="text" className="form-control" id="hoTen" name='hoTen' onChange={formik.handleChange} value={formik.values.hoTen} disabled={!isEdit} />
                        </div>
                        <div className='mt-2'>
                            <label htmlFor="email" className="form-label m-0">Email:</label>
                            <input type="text" className="form-control" id="email" name='email' onChange={formik.handleChange} value={formik.values.email} disabled={!isEdit} />
                        </div>

                        <div className='mt-2'>
                            <label htmlFor="soDt" className="form-label m-0">Số điện thoại:</label>
                            <input className="form-control" id="soDt" name='soDt' onChange={formik.handleChange} value={formik.values.soDt} disabled={!isEdit} />
                        </div>
                        <div className='mt-2'>
                            <label htmlFor="maLoaiNguoiDung" className="form-label m-0">Loại người dùng:</label>
                            <input type="text" className="form-control" id="maLoaiNguoiDung" name='maLoaiNguoiDung' onChange={formik.handleChange} value={formik.values.maLoaiNguoiDung} disabled />
                        </div>
                    </form>
                    <s.EditButton type='button' className='btn' style={{ display: isEdit ? 'none' : 'block' }} onClick={() => {
                        setIsEdit(true)
                    }}>Chỉnh sửa</s.EditButton>
                    <div className='btnGroup' style={{ display: isEdit ? 'flex' : 'none' }}>
                        <s.CancelButton className='btn btn-danger  mr-3' style={{ flexGrow: '1' }} onClick={() => {
                            setIsEdit(false)
                            formik.handleReset()
                        }}>Hủy</s.CancelButton>
                        <s.ConfirmButton type='button' className='btn btn-success' style={{ flexGrow: '1' }} onClick={formik.handleSubmit}>Xác nhận</s.ConfirmButton>
                    </div>
                </s.ProfileForm>

            </s.ProfileContainer>
        </Fragment>
    )
}
