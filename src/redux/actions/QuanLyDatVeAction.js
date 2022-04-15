import { quanLyDatVeService } from "../../services/QuanLyDatVeService"
import { CHANGE_CHECKOUT_STEP, LAY_DS_PHONG_VE } from '../types/QuanLyDatVeType'
import { history } from '../../App'
import { HIDE_LOADING, SHOW_LOADING } from "../types/QuanLyLoadingType"

export const layDanhSachPhongVeAction = (maLichChieu) => {
    return async dispatch => {
        try {
            dispatch({
                type: SHOW_LOADING
            })
            const result = await quanLyDatVeService.layDanhSachPhongVe(maLichChieu);
            if (result.data.statusCode === 200) {
                dispatch({
                    type: LAY_DS_PHONG_VE,
                    thongTinPhongVe: result.data.content
                })
            }


            dispatch({
                type: HIDE_LOADING
            })

        } catch (error) {
            console.log(error)
        }
    }
}

export const datVeAction = (thongTinDatVe) => {
    return async dispatch => {
        try {
            const result = await quanLyDatVeService.datVe(thongTinDatVe)

            if (result.data.statusCode === 200) {

                await dispatch({
                    type: CHANGE_CHECKOUT_STEP,
                })
                history.replace('/bookingresult')

            }
        } catch (error) {
            console.log(error)
        }
    }
}
export const taoLichChieuAction = (thongTinLichChieu) => {
    return async dispatch => {
        try {
            const result = await quanLyDatVeService.taoLichChieu(thongTinLichChieu)
            if (result.data.statusCode === 200) {
                alert('Tạo lịch chiếu thành công!')
            }
        } catch (error) {
            alert('Không thành công!')
            console.log(error.response)
        }
    }
}