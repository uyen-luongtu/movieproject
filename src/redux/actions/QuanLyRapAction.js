import { QuanLyRapService, quanLyRapService } from "../../services/QuanLyRapService"
import { HIDE_LOADING, SHOW_LOADING } from "../types/QuanLyLoadingType"
import { LAY_DS_CUM_RAP, LAY_TT_LICH_CHIEU, SET_HE_THONG_RAP, SET_TT_LICH_CHIEU } from "../types/QuanLyRapType"

export const layTTHeThongRapAction = () => {
    return async dispatch => {
        dispatch({
            type: SHOW_LOADING
        })
        try {
            const result = await quanLyRapService.layTTHeThongRap()
            if (result.data.statusCode === 200) {
                dispatch({
                    type: SET_HE_THONG_RAP,
                    heThongRap: result.data.content
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

export const layTTLichChieuPhimAction = (maPhim) => {
    return async dispatch => {
        try {
            dispatch({
                type: SHOW_LOADING
            })
            const result = await quanLyRapService.layTTLichChieuPhim(maPhim)
            if (result.data.statusCode === 200) {
                dispatch({
                    type: LAY_TT_LICH_CHIEU,
                    thongTinLichChieu: result.data.content
                })
            }
            setTimeout(() => {
                dispatch({
                    type: HIDE_LOADING
                })
            }, 500)

        } catch (error) {
            console.log(error)
        }
    }
}
export const layThongTinCumRapTheoHeThongAction = (maHeThongRap) => {
    return async dispatch => {
        try {
            const result = await quanLyRapService.layThongTinCumRapTheoHeThong(maHeThongRap)
            if (result.data.statusCode === 200) {
                dispatch({
                    type: LAY_DS_CUM_RAP,
                    cumRapChieu: result.data.content
                })
            }

        } catch (error) {
            console.log(error)
        }
    }
}
