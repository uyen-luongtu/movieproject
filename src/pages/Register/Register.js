import React from 'react'
import { history } from '../../App'
import { useFormik } from 'formik'
import { GROUP_ID } from '../../util/settings/config';
import { useDispatch } from 'react-redux';
import { dangKyAction } from '../../redux/actions/QuanLyNguoiDungAction';
import * as s from '../../templates/UserTemplate/UserTemplate.Style'

export default function Register() {
    const dispatch = useDispatch()
    const validate = (values) => {

        const errors = {}

        for (let i = 0; i < Object.keys(values).length; i++) {
            let name = Object.keys(values)[i]
            if (!values[name].trim()) {
                errors[name] = 'Required';
            }
        }
        const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (!regexEmail.test(values.email)) {
            errors.email = 'Invalid'
        }
        return errors
    }
    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: '',
            email: '',
            soDt: '',
            maNhom: GROUP_ID,
            hoTen: '',

        },
        validate,
        onSubmit: values => {
            console.log(values)
            dispatch(dangKyAction(values))
        },
        initialTouched: {
            taiKhoan: false,
            matKhau: false,
            email: false,
            soDt: false,
            hoTen: false,
        }
    });

    return (
        <s.FormContainer>
            <h2 className='text-white text-center' style={{ fontSize: '35px' }}>Đăng ký</h2>
            <form onSubmit={formik.handleSubmit}>
                <div className='mt-2'>
                    <input name='taiKhoan' className='form-control' placeholder='Tài khoản'
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.taiKhoan} />
                    <p className='mt-1 mb-0' style={{ fontSize: '12px', color: 'red' }}>{formik.touched.taiKhoan ? formik.errors.taiKhoan : ''}</p>
                </div>
                <div className='mt-2'>
                    <input type='password' name='matKhau' className='form-control' placeholder='Mật khẩu'
                        onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.matKhau} />
                    <p className='mt-1 mb-0' style={{ fontSize: '12px', color: 'red' }}>{formik.touched.matKhau ? formik.errors.matKhau : ''}</p>
                </div>
                <div className='mt-2'>
                    <input name='hoTen' className='form-control' placeholder='Họ và Tên' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.hoTen} />
                    <p className='mt-1 mb-0' style={{ fontSize: '12px', color: 'red' }}>{formik.touched.hoTen ? formik.errors.hoTen : ''}</p>
                </div>
                <div className='mt-2'>
                    <input name='soDt' className='form-control' placeholder='Số điện thoại' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.soDt} />
                    <p className='mt-1 mb-0' style={{ fontSize: '12px', color: 'red' }}>{formik.touched.soDt ? formik.errors.soDt : ''}</p>
                </div>
                <div className='mt-2'>
                    <input name='email' className='form-control' placeholder='Email' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} />
                    <p className='mt-1 mb-0' style={{ fontSize: '12px', color: 'red' }}>{formik.touched.email ? formik.errors.email : ''}</p>
                </div>
                <div className='mt-2'>
                    <s.SubmitButton type='submit' className='btn text-white submitBtn'>Đăng ký</s.SubmitButton>
                </div>
            </form>
            <div className='changeForm text-center'>
                <span>Bạn đã có tài khoản? </span>
                <button className='changeFormBtn' onClick={() => {
                    history.push('/login')
                }}> Đăng nhập</button>
            </div>
        </s.FormContainer >
    )
}
