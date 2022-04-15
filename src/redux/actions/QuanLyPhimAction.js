import { quanLyPhimService } from "../../services/QuanLyPhimService"
import { HIDE_LOADING, SHOW_LOADING } from "../types/QuanLyLoadingType"
import { LAY_DS_BANNER, LAY_DS_FILM, LAY_TT_FILM } from "../types/QuanLyPhimType"
import { history } from '../../App'


export const layDanhSachBannerAction = () => {
    return async dispatch => {
        try {

            const result = await quanLyPhimService.layDanhSachBanner()
            if (result.data.statusCode === 200) {
                dispatch({
                    type: LAY_DS_BANNER,
                    danhSachBanner: result.data.content
                })
            }

        } catch (error) {
            console.log(error)
        }
    }
}
export const layDanhSachPhimAction = (tenPhim = '') => {

    return async dispatch => {
        try {
            const result = await quanLyPhimService.layDanhSachPhim(tenPhim)
            if (result.data.statusCode === 200) {
                dispatch({
                    type: LAY_DS_FILM,
                    danhSachPhim: result.data.content
                })
            }
        } catch (error) {
            console.log(error)
        }
    }
}
export const layThongTinPhimAction = (maPhim) => {
    return async dispatch => {
        try {
            dispatch({
                type: SHOW_LOADING
            })
            const result = await quanLyPhimService.layThongTinPhim(maPhim)
            if (result.data.statusCode === 200) {
                dispatch({
                    type: LAY_TT_FILM,
                    thongTinPhim: result.data.content
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

export const themPhimUploadHinhAction = (data) => {
    return async dispatch => {
        try {
            const result = await quanLyPhimService.themPhimUploadHinh(data)

            if (result.data.statusCode === 200) {
                alert('Thêm phim thành công!')
                console.log(result.data.content)
                dispatch(layDanhSachPhimAction())
            }
        }
        catch (error) {
            alert('Không thành công!')
            console.log(error.response.data.content)
        }
    }
}

export const capNhatPhimUploadAction = (data) => {
    return async dispatch => {
        try {
            const result = await quanLyPhimService.capNhatPhimUpload(data)
            console.log(result.data.content)
            alert('Cập nhật phim thành công!')
            dispatch(layDanhSachPhimAction())
            history.push('/admin/film')
        }
        catch (error) {
            alert('Không thành công!')
            console.log(error.response.data.content)
        }
    }
}
export const xoaPhimAction = (maPhim) => {
    return async dispatch => {
        try {
            const result = await quanLyPhimService.xoaPhim(maPhim)
            alert('Xóa phim thành công!')
            dispatch(layDanhSachPhimAction())
            console.log(result.data.content)
        } catch (error) {
            alert('Không thành công!')
            console.log(error.response.data.content)
        }
    }
}