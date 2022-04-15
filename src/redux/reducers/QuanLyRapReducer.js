import { LAY_DS_CUM_RAP, LAY_TT_LICH_CHIEU, SET_HE_THONG_RAP } from "../types/QuanLyRapType"

const initState = {
    heThongRap: [],
    thongTinLichChieu: {},
    cumRapChieu: [],
}
export const QuanLyRapReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_HE_THONG_RAP: {
            return { ...state, heThongRap: action.heThongRap }
        }
        case LAY_TT_LICH_CHIEU: {

            return { ...state, thongTinLichChieu: action.thongTinLichChieu }
        }
        case LAY_DS_CUM_RAP: {
            return { ...state, cumRapChieu: action.cumRapChieu }
        }
        default: return { ...state }
            break
    }
}