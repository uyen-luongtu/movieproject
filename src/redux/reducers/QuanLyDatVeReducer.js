import { CHANGE_CHECKOUT_STEP, CHON_GHE, LAY_DS_PHONG_VE } from "../types/QuanLyDatVeType"

const initState = {
    thongTinPhongVe: {
        "thongTinPhim": {
            "maLichChieu": 16915,
            "tenCumRap": "BHD Star Cineplex - Vincom Lê Văn Việt",
            "tenRap": "Rạp 2",
            "diaChi": "L4-Vincom Plaza, 50 Lê Văn Việt, Q.9",
            "tenPhim": "Bố Già",
            "hinhAnh": "http://movieapi.cyberlearn.vn/hinhanh/bo-gia_gp01.jpg",
            "ngayChieu": "02/01/2019",
            "gioChieu": "10:01"
        },
        "danhSachGhe": [
            {
                "maGhe": 52361,
                "tenGhe": "01",
                "maRap": 482,
                "loaiGhe": "Thuong",
                "stt": "01",
                "giaVe": 75000,
                "daDat": false,
                "taiKhoanNguoiDat": null
            },]
    },
    checkoutStep: 1,
    danhSachGheDangDat: [],
    danhSachTenGheDD: []
}
export const QuanLyDatVeReducer = (state = initState, action) => {
    switch (action.type) {
        case LAY_DS_PHONG_VE: {
            return {
                ...state, thongTinPhongVe: action.thongTinPhongVe, checkoutStep: 1,
                danhSachGheDangDat: [],
                danhSachTenGheDD: []
            }
        }
        case CHON_GHE: {
            let updateDanhSachGheDangDat = state.danhSachGheDangDat;
            let updateDanhSachTenGheDD = state.danhSachTenGheDD
            const index = state.danhSachGheDangDat.findIndex(ghe => ghe.maGhe === action.selectingSeat?.maGhe)
            if (index !== -1) {
                updateDanhSachGheDangDat.splice(index, 1)
                updateDanhSachTenGheDD.splice(index, 1)
            } else {
                updateDanhSachGheDangDat.push(action.selectingSeat)
                updateDanhSachTenGheDD.push(action.seatName)
            }

            return { ...state, danhSachGheDangDat: updateDanhSachGheDangDat, danhSachTenGheDD: updateDanhSachTenGheDD }
        }
        case CHANGE_CHECKOUT_STEP: {

            return { ...state, checkoutStep: 2 }
        }
        default: return { ...state }
            break
    }
}