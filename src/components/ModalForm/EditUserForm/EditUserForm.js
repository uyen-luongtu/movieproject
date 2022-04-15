import React, { Fragment } from 'react'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import { capNhatThongTinNguoiDungAction } from '../../../redux/actions/QuanLyNguoiDungAction'
import { GROUP_ID } from '../../../util/settings/config'

export default function EditUserForm(props) {
    const { user } = props

    const dispatch = useDispatch()
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            taiKhoan: user.taiKhoan,
            hoTen: user.hoTen,
            email: user.email,
            soDt: user.soDt,
            matKhau: user.matKhau,
            maNhom: GROUP_ID,
            maLoaiNguoiDung: user.maLoaiNguoiDung,
        },
        onSubmit: values => {

            dispatch(capNhatThongTinNguoiDungAction(values))
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
                    <h5 className="modal-title" id="modalFormLabel">Edit user: {user.taiKhoan}  </h5>
                    <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form onSubmit={formik.handleSubmit} id='editUserForm'>
                        <div className='mt-2'>
                            <label for="taiKhoan" className="form-label">Tài khoản:</label>
                            <input type="text" className="form-control" name='taiKhoan' id='taiKhoan' disabled value={formik.values.taiKhoan} />
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
                                <input type="radio" id="QuanTri" name="maLoaiNguoiDung" value="QuanTri" checked={formik.values.maLoaiNguoiDung === 'QuanTri'} onChange={handleChangeMaNguoiDung} />
                                <label className='ml-1' for="QuanTri">Quản trị</label>
                                <input className='ml-4' type="radio" id="KhachHang" name="maLoaiNguoiDung" value="KhachHang" checked={formik.values.maLoaiNguoiDung === 'KhachHang'} onChange={handleChangeMaNguoiDung} />
                                <label className='ml-1' for="KhachHang">Khách hàng</label>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button style={{ backgroundColor: '#0d6efd!important' }} className="btn btn-primary" onClick={formik.handleSubmit}>Chỉnh sửa</button>
                </div>
            </div>
        </Fragment>
    )
}
