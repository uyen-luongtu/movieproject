import React, { Fragment } from 'react'
import { useFormik } from 'formik'
import { GROUP_ID } from '../../../util/settings/config'
import { useDispatch } from 'react-redux'
import { themNguoiDungAction } from '../../../redux/actions/QuanLyNguoiDungAction'

export default function AddUserForm() {
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            hoTen: '',
            email: '',
            soDt: '',
            matKhau: '',
            maNhom: GROUP_ID,
            maLoaiNguoiDung: '',
        },
        onSubmit: values => {
            dispatch(themNguoiDungAction(values))
        }
    })
    let modal = document.getElementById('modalForm')
    modal.addEventListener('hidden.bs.modal', () => {
        formik.handleReset()
    })
    const handleChangeMaNguoiDung = (e) => {
        formik.setFieldValue('maLoaiNguoiDung', e.target.value)
    }
    return (
        <Fragment>
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="modalFormLabel">Thêm Người dùng</h5>
                    <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form onSubmit={formik.handleSubmit} id='addUserForm'>
                        <div className='mt-2'>
                            <label for="taiKhoan" className="form-label">Tài khoản:</label>
                            <input type="text" className="form-control" name='taiKhoan' id='taiKhoan' onChange={formik.handleChange} value={formik.values.taiKhoan} />
                        </div>
                        <div className='mt-2'>
                            <label for="matKhau" className="form-label">Mật khẩu:</label>
                            <input type="password" className="form-control" name='matKhau' id='matKhau' onChange={formik.handleChange} value={formik.values.matKhau} />
                        </div>
                        <div className='mt-2'>
                            <label for="hoTen" className="form-label">Họ tên:</label>
                            <input type="text" className="form-control" name='hoTen' id='hoTen' onChange={formik.handleChange} value={formik.values.hoTen} />
                        </div>
                        <div className='mt-2'>
                            <label for="email" className="form-label">Email:</label>
                            <input type="text" className="form-control" name='email' id='email' onChange={formik.handleChange} value={formik.values.email} />
                        </div>
                        <div className='mt-2'>
                            <label for="soDt" className="form-label">Số điện thoại:</label>
                            <input
                                className="form-control" name='soDt' id='soDt' onChange={formik.handleChange} value={formik.values.soDt} />
                        </div>
                        <div className='mt-2'>
                            <label for="maLoaiNguoiDung" className="form-label">Loại người dùng:</label>
                            <div>
                                <input type="radio" id="QuanTri" name="maLoaiNguoiDung" value="QuanTri" onChange={handleChangeMaNguoiDung} />
                                <label className='ml-1' for="QuanTri">Quản trị</label>
                                <input className='ml-4' type="radio" id="KhachHang" name="maLoaiNguoiDung" value="KhachHang" onChange={handleChangeMaNguoiDung} />
                                <label className='ml-1' for="KhachHang">Khách hàng</label>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button className="btn btn-primary" onClick={formik.handleSubmit}>Thêm mới</button>
                </div>
            </div>
        </Fragment>
    )
}
