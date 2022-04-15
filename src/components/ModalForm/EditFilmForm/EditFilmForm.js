import React, { Fragment, useState } from 'react'

import { useDispatch } from 'react-redux';

import { useFormik } from 'formik'
import moment from 'moment'
import { capNhatPhimUploadAction } from '../../../redux/actions/QuanLyPhimAction';
import { GROUP_ID } from '../../../util/settings/config';


export default function EditFilmForm(props) {
    const { phim } = props
    const [imgSrc, setImgSrc] = useState('')
    const dispatch = useDispatch()
    //reset form
    let modal = document.getElementById('modalForm')
    modal.addEventListener('hidden.bs.modal', () => {
        document.getElementById('hinhAnh').value = ''
        setImgSrc('')
        formik.handleReset()
    })

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            maPhim: phim.maPhim,
            tenPhim: phim.tenPhim,
            trailer: phim.trailer,
            moTa: phim.moTa,
            ngayKhoiChieu: phim.ngayKhoiChieu,
            dangChieu: phim.dangChieu,
            sapChieu: phim.sapChieu,
            hot: phim.hot,
            danhGia: phim.danhGia,
            maNhom: GROUP_ID,
            hinhAnh: null,
        },

        onSubmit: values => {
            let formData = new FormData();
            for (let key in values) {
                if (key === 'ngayKhoiChieu') {
                    formData.append(key, moment(values[key]).format('DD/MM/YYYY'))
                }
                else if (key !== 'hinhAnh') {
                    formData.append(key, values[key]);
                } else {
                    if (values.hinhAnh !== null) {
                        formData.append('hinhAnh', values.hinhAnh, values.hinhAnh.name);

                    }
                }
            }
            dispatch(capNhatPhimUploadAction(formData))
        },
    });


    const handleChangeFile = (e) => {
        const file = e.target.files[0]
        formik.setFieldValue('hinhAnh', file)
        // const previewImg = document.getElementById('previewImg')
        // previewImg.src = URL.createObjectURL(file)
        setImgSrc(URL.createObjectURL(file))
    }

    return (
        <Fragment>
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="modalFormLabel">Edit film: {phim.maPhim}  </h5>
                    <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form onSubmit={formik.handleSubmit} id='editFilmForm'>
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
                            <textarea rows={4} className='form-control' name='moTa' id='moTa' onChange={formik.handleChange} value={formik.values.moTa} style={{ resize: 'none' }}></textarea>
                        </div>
                        <div className='mt-2'>
                            <label className='mr-2' for="ngayKhoiChieu">Ngày khởi chiếu:</label>

                            <input style={{ padding: '2px 4px', border: '1px solid #ced4da' }} type="date" id="ngayKhoiChieu" name="ngayKhoiChieu"
                                onChange={formik.handleChange} value={moment(formik.values.ngayKhoiChieu).format('yyyy-MM-DD')} />
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
                            <input type="number" min='0' max='10'
                                className="form-control" name='danhGia' id='danhGia' onChange={formik.handleChange} value={formik.values.danhGia} />
                        </div>

                        <div className='mt-2'>
                            <label for="hinhAnh" className="form-label">Hình ảnh:</label>
                            <input className='ml-2' name='hinhAnh' id='hinhAnh' type='file' accept="image/png, image/jpeg,image/gif" onChange={handleChangeFile} />
                            <img id='previewImg' style={{ width: '150px' }} src={imgSrc === '' ? phim.hinhAnh : imgSrc} alt='filmimg' />
                            {/* <img width={100} height={100} src={imgSrc === '' ? thongTinPhim.hinhAnh : imgSrc} /> */}

                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button style={{ backgroundColor: '#0d6efd!important' }} className="btn btn-primary" onClick={(e) => {
                        formik.handleSubmit(e)
                        // document.querySelector('.btn-close').click()
                    }}>Chỉnh sửa</button>
                </div>
            </div>
        </Fragment>
    )
}

