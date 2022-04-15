import { useFormik } from 'formik'
import React, { Fragment, useState } from 'react'
import { useDispatch } from 'react-redux'
import { capNhatThongTinNguoiDungAction } from '../../../redux/actions/QuanLyNguoiDungAction'
import { GROUP_ID, USER_LOGIN } from '../../../util/settings/config'

export default function ChangePasswordForm() {
    const user = JSON.parse(localStorage.getItem(USER_LOGIN))
    const [confirmPassword, setConfirmPassword] = useState('')

    const dispatch = useDispatch()
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

            if (values.matKhau !== confirmPassword) {
                alert('Mật khẩu mới không khớp.!')
            } else {
                dispatch(capNhatThongTinNguoiDungAction(values))
            }
        }
    })
    let modal = document.getElementById('modalForm')
    modal.addEventListener('hidden.bs.modal', () => {
        formik.handleReset()
        setConfirmPassword('')
    })
    return (
        <Fragment>
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="modalFormLabel">Đổi mật khẩu</h5>
                    <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form>
                        <div>
                            <label for="matKhau" className="form-label">Mật khẩu mới:</label>
                            <input type="password" className="form-control" name='matKhau' onChange={formik.handleChange} value={formik.values.matKhau} />
                        </div>
                        <div className='mt-3'>
                            <label for="confirmPassword" className="form-label">Nhập lại mật khẩu mới:</label>
                            <input type="password" className="form-control" name='confirmPassword' onChange={(e) => { setConfirmPassword(e.target.value) }} value={confirmPassword} />
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button className="btn btn-primary" onClick={formik.handleSubmit}>Xác nhận</button>
                </div>
            </div>
        </Fragment>
    )
}
