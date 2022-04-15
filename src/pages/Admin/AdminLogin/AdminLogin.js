import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik';
import * as s from './AdminLoginStyle'
import logoImg from '../../../assets/img/logo/logo.png'
import { dangNhapAction } from '../../../redux/actions/QuanLyNguoiDungAction';

export default function AdminLogin() {
    const dispatch = useDispatch()
    const loginErr = useSelector(state =>
        state.QuanLyNguoiDungReducer.loginErr
    )
    const validate = values => {
        const errors = {};
        if (!values.taiKhoan.trim()) {
            errors.taiKhoan = 'Required';
        }

        if (!values.matKhau.trim()) {
            errors.matKhau = 'Required';
        }
        return errors;
    }
    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: '',

        },
        validate,
        onSubmit: values => {
            dispatch(dangNhapAction(values))
        },
    });
    return (
        <s.AdminLoginBg>
            <s.AdminLoginForm>
                <img src={logoImg} alt='logo' />
                <p className='mb-3 text-center' style={{ color: 'red' }}>{loginErr}</p>
                <form onSubmit={formik.handleSubmit}>
                    <div>
                        <label htmlFor='taiKhoan' className='form-label'>Tài khoản:</label>
                        <input type="text" className="form-control" name='taiKhoan' id='taiKhoan' onChange={formik.handleChange} value={formik.values.taiKhoan} />
                        <p className='mt-2 mb-0' style={{ fontSize: '12px', color: 'red' }}>{formik.errors.taiKhoan}</p>

                    </div>
                    <div className='mt-3'>
                        <label htmlFor='matKhau' className='form-label'>Mật khẩu:</label>
                        <input type="password" className="form-control" name='matKhau' id='matKhau' onChange={formik.handleChange} value={formik.values.matKhau} />
                        <p className='mt-2 mb-0' style={{ fontSize: '12px', color: 'red' }}>{formik.errors.matKhau}</p>

                    </div>
                    <button type='submit' className='btn btn-primary mt-3 w-100' style={{ backgroundColor: '#0d6efd' }} >Đăng nhập</button>
                </form>
            </s.AdminLoginForm>
        </s.AdminLoginBg>
    )
}
