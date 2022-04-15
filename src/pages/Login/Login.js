import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import { dangNhapAction } from '../../redux/actions/QuanLyNguoiDungAction';
import * as s from '../../templates/UserTemplate/UserTemplate.Style'
import { history } from '../../App';
// image
import loginLogo from '../../assets/img/logo/loginLogo.png'


export default function Login(props) {
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

    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: '',

        },
        validate,
        onSubmit: values => {

            const action = dangNhapAction(values)
            dispatch(action)
        },

    });

    return (
        <s.FormContainer>
            <img src={loginLogo} alt='logo' onClick={() => {
                history.push('/')
            }} />
            <p className='mb-3 text-center' style={{ color: 'red' }}>{loginErr}</p>
            <form onSubmit={formik.handleSubmit} className='loginForm mt-4'>
                <div className='form-group'>
                    <input name='taiKhoan' className='form-control' placeholder='Tài khoản' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.taiKhoan} />
                    <p className='mt-2 mb-0' style={{ fontSize: '12px', color: 'red' }}>{formik.errors.taiKhoan}</p>
                </div>
                <div className='form-group mt-2'>
                    <input name='matKhau' className='form-control' placeholder='Mật khẩu' onBlur={formik.handleBlur} type='password' onChange={formik.handleChange} value={formik.values.matKhau} />
                    <p className='mt-2 mb-0' style={{ fontSize: '12px', color: 'red' }}>{formik.errors.matKhau}</p>
                </div>
                <div className='form-group mt-2'>
                    <s.SubmitButton type='submit' className='btn text-white'>Đăng nhập</s.SubmitButton>
                </div>
            </form>
            <p className='text-center mt-4'>Đăng nhập để được nhiều ưu đãi, mua vé
                và bảo mật thông tin!</p>
            <div className='changeForm text-center'>
                <span>Chưa có tài khoản? </span>
                <button className='changeFormBtn' onClick={() => {
                    history.push('/register')
                }}> Đăng ký</button>
            </div>
        </s.FormContainer>

    )

}
