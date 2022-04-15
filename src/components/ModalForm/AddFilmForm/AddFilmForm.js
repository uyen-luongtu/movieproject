import React, { Fragment, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import { GROUP_ID } from '../../../util/settings/config'
import moment from 'moment'
import { themPhimUploadHinhAction } from '../../../redux/actions/QuanLyPhimAction'

export default function AddFilmForm() {
    const [imgSrc, setImgSrc] = useState();
    const dispatch = useDispatch()
    //reset form
    let modal = document.getElementById('modalForm')
    modal.addEventListener('hidden.bs.modal', () => {
        formik.handleReset()
        document.getElementById('hinhAnh').value = ''
        setImgSrc('')
    })
    const formik = useFormik({
        initialValues: {
            tenPhim: '',
            trailer: '',
            moTa: '',
            ngayKhoiChieu: null,
            dangChieu: false,
            sapChieu: false,
            hot: false,
            danhGia: '',
            maNhom: GROUP_ID,
            hinhAnh: null,
        },
        onSubmit: values => {
            const formData = new FormData()
            for (let key in values) {
                if (key === 'ngayKhoiChieu') {
                    formData.append('ngayKhoiChieu', moment(formik.values.ngayKhoiChieu).format('DD-MM-YYYY'))
                } else if (key !== 'hinhAnh') {
                    formData.append(key, values[key])
                } else {
                    formData.append('hinhAnh', values.hinhAnh, values.hinhAnh.name)
                }
            }
            dispatch(themPhimUploadHinhAction(formData))
        },
    })
    const handleChangeFile = (e) => {
        const file = e.target.files[0]
        formik.setFieldValue('hinhAnh', file)
        setImgSrc(URL.createObjectURL(file))
    }
    return (
        <Fragment>
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="modalFormLabel">Thêm Phim</h5>
                    <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form onSubmit={formik.handleSubmit}>
                        <div className='mt-2'>
                            <label for="tenPhim" className="form-label">Tên phim:</label>
                            <input type="text" className="form-control" name='tenPhim' id='tenPhim' onChange={formik.handleChange} value={formik.values.tenPhim} />
                        </div>
                        <div className='mt-2'>
                            <label for="trailer" className="form-label">Trailer:</label>
                            <input type="text" className="form-control" name='trailer' id='trailer' onChange={formik.handleChange} value={formik.values.trailer} />
                        </div>
                        <div className='mt-2'>
                            <label for="moTa" className="form-label">Mô tả:</label>
                            <textarea type="text" style={{ resize: 'none' }} rows={4} className="form-control" name='moTa' id='moTa' onChange={formik.handleChange} value={formik.values.moTa} />
                        </div>
                        <div className='mt-2'>
                            <label className='mr-2' for="ngayKhoiChieu">Ngày khởi chiếu:</label>

                            <input style={{ padding: '2px 4px', border: '1px solid #ced4da' }} type="date" id="ngayKhoiChieu" name="ngayKhoiChieu"
                                onChange={formik.handleChange} value={moment(formik.values.ngayKhoiChieu).format('YYYY-MM-DD')} />
                        </div>
                        <div className="form-switch mt-2" style={{ padding: '0' }}>
                            <label className="form-check-label" for="dangChieu">Đang chiếu:</label>

                            <input className="form-check-input" type="checkbox" role="switch" id="dangChieu" name='dangChieu' style={{ marginLeft: '15px' }} onChange={formik.handleChange} checked={formik.values.dangChieu} />
                        </div>
                        <div className="form-switch mt-2" style={{ padding: '0' }}>
                            <label className="form-check-label" for="sapChieu">Sắp chiếu:</label>

                            <input className="form-check-input" type="checkbox" role="switch" id="sapChieu" name='sapChieu' style={{ marginLeft: '15px' }} onChange={formik.handleChange} checked={formik.values.sapChieu} />
                        </div>
                        <div className="form-switch mt-2" style={{ padding: '0' }}>
                            <label className="form-check-label" for="hot">Hot:</label>

                            <input className="form-check-input" type="checkbox" role="switch" id="hot" name='hot' style={{ marginLeft: '15px' }} onChange={formik.handleChange} checked={formik.values.hot} />
                        </div>

                        <div className='mt-2'>
                            <label for="danhGia" className="form-label">Đánh giá:</label>
                            <input type="number" className="form-control" name='danhGia' id='danhGia' onChange={formik.handleChange} value={formik.values.danhGia} />
                        </div>

                        <div className='mt-2'>
                            <label for="hinhAnh" className="form-label">Hình ảnh:</label>
                            <input className='ml-2' name='hinhAnh' id='hinhAnh' type='file' onChange={handleChangeFile} accept="image/png, image/jpeg, image/gif" />
                            <img style={{ width: '100px', display: imgSrc === '' ? 'none' : 'block' }} src={imgSrc} />
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
