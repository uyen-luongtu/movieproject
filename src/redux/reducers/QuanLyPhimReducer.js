import { LAY_DS_BANNER, LAY_DS_FILM, LAY_TT_FILM } from "../types/QuanLyPhimType"

const initState = {
    danhSachBanner: [
        {
            "maBanner": 1,
            "maPhim": 1282,
            "hinhAnh": "http://movieapi.cyberlearn.vn/hinhanh/ban-tay-diet-quy.png"
        }
    ],
    danhSachPhim: [
        {
            "maPhim": 9427,
            "tenPhim": "Trạng Tí Phiêu Lưu Ký 121",
            "biDanh": "trang-ti-phieu-luu-ky-121",
            "trailer": "https://youtu.be/sx1ROHCmY-4",
            "hinhAnh": "http://movieapi.cyberlearn.vn/hinhanh/trang-ti-phieu-luu-ky-121_gp01.jpg",
            "moTa": "Trạng tí phiêu lưu ký là một bộ phim do người Việt sản xuất",
            "maNhom": "GP01",
            "ngayKhoiChieu": "2022-03-05T10:03:06",
            "danhGia": 10,
            "hot": true,
            "dangChieu": true,
            "sapChieu": false
        }
    ],
    thongTinPhim: {

    },



}
export const QuanLyPhimReducer = (state = initState, action) => {
    switch (action.type) {
        case LAY_DS_BANNER: {
            return { ...state, danhSachBanner: action.danhSachBanner }

        }
        case LAY_DS_FILM: {

            return { ...state, danhSachPhim: action.danhSachPhim }

        }
        case LAY_TT_FILM: {

            return { ...state, thongTinPhim: action.thongTinPhim }
        }

        default: return { ...state }
            break;
    }
}