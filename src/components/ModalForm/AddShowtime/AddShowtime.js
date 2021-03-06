import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import moment from 'moment'
import { layThongTinCumRapTheoHeThongAction, layTTHeThongRapAction } from '../../../redux/actions/QuanLyRapAction'
import { taoLichChieuAction } from '../../../redux/actions/QuanLyDatVeAction'
import * as s from './AddShowtimeStyle'

export default function AddShowtime(props) {
    const { phim } = props
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(layTTHeThongRapAction())
    }, [])
    const { heThongRap, cumRapChieu } = useSelector(state => state.QuanLyRapReducer)
    const renderHeThongRapOption = () => {
        return heThongRap.map((htRap, index) => {
            return (<option key={index} value={htRap.maHeThongRap}>{htRap.tenHeThongRap}</option>)
        })
    }
    const renderCumRapOption = () => {
        return cumRapChieu.map((cumRap, index) => {
            return (<option key={index} value={cumRap.maCumRap}>{cumRap.tenCumRap}</option>)
        })
    }


    //reset form
    let modal = document.getElementById('modalForm')
    modal.addEventListener('hidden.bs.modal', () => {
        formik.handleReset()
        document.getElementById('heThongRap').value = ''
        document.getElementById('maRap').value = ''

    })
    const formik = useFormik({
        initialValues: {
            maPhim: phim.maPhim,
            maRap: '',
            ngayChieuGioChieu: '',
            giaVe: ''
        },
        onSubmit: values => {
            dispatch(taoLichChieuAction(values))
        }
    })
    const handleChangeHTRap = () => {
        const maHeThongRap = document.getElementById('heThongRap').value
        dispatch(layThongTinCumRapTheoHeThongAction(maHeThongRap))
    }
    const handleChangeDateTime = (e) => {
        const dateTime = moment(e.target.value).format('DD/MM/YYYY hh:mm:ss')
        formik.setFieldValue('ngayChieuGioChieu', dateTime)
    }
    return (
        <Fragment>
            <s.AddShowtimeForm className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="modalFormLabel">T???o l???ch chi???u</h5>
                    <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <h2><span className='fw-bold'>T??n phim:</span> {phim.tenPhim}</h2>
                    <h2><span className='fw-bold'>M?? phim:</span> {phim.maPhim}</h2>
                    <form onSubmit={formik.handleSubmit}>
                        <div className='mt-2'>
                            <label for="heThongRap" className="form-label my-2 fw-bold">H??? th???ng r???p:</label>
                            <select required name="heThongRap" id="heThongRap" className='form-select' onChange={handleChangeHTRap}>
                                <option value='' disabled selected hidden>Ch???n h??? th???ng r???p chi???u</option>
                                {renderHeThongRapOption()}
                            </select>
                        </div>
                        <div className='mt-2 '>
                            <label for="maRap" className="form-label my-2 fw-bold">C???m r???p:</label>
                            <select required name="maRap" id="maRap" className='form-select' onChange={formik.handleChange}>
                                <option value='' disabled selected hidden>Ch???n c???m r???p</option>
                                {renderCumRapOption()}
                            </select>
                        </div>
                        <div className='mt-2  '>
                            <label for="ngayChieuGioChieu " className="form-label my-2 fw-bold">Ng??y chi???u gi??? chi???u:</label>
                            <input className='form-control' type="datetime-local" id="ngayChieuGioChieu" name="ngayChieuGioChieu" onChange={handleChangeDateTime}></input>
                        </div>
                        <div className='mt-2 '>
                            <label for="giaVe" className="form-label my-2 fw-bold">Gi?? v??:</label>
                            <input type="number" className="form-control" name='giaVe' id='giaVe' onChange={formik.handleChange} value={formik.values.giaVe} />
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button className="btn btn-primary" onClick={formik.handleSubmit}>X??c nh???n</button>
                </div>
            </s.AddShowtimeForm >
        </Fragment >
    )
}
