import { quanLyNguoiDungService } from "../../services/QuanLyNguoiDungService"
import { DANG_NHAP, LAY_DS_USER, LAY_TT_USER, LOGIN_FAIL } from "../types/QuanLyNguoiDungType"
import { history } from '../../App'
import { HIDE_LOADING, SHOW_LOADING } from "../types/QuanLyLoadingType"


export const dangNhapAction = (thongTinDangNhap) => {
    return async dispatch => {
        try {
            const result = await quanLyNguoiDungService.dangNhap(thongTinDangNhap)

            if (result.data.statusCode === 200) {

                dispatch({
                    type: DANG_NHAP,
                    thongTinLogin: result.data.content
                })
                const maLoaiNguoiDung = result.data.content.maLoaiNguoiDung
                if (maLoaiNguoiDung === 'QuanTri' && history.location.pathname === '/admin/login') {
                    history.replace('/admin')

                } else if (history.location.pathname === '/admin/login') {
                    alert('Bạn không có quyền truy cập vào trang này !')
                    history.replace('/')
                }
                else {
                    history.replace('/')
                }

            }
        }
        catch (error) {
            dispatch({
                type: LOGIN_FAIL,
                loginErr: error.response.data.content
            })
        }
    }
}

export const dangKyAction = (thongTinDangKy) => {
    return async dispatch => {
        try {
            const result = await quanLyNguoiDungService.dangKy(thongTinDangKy)
            if (result.data.statusCode === 200) {
                alert('Đăng ký thành công!')
                history.push('/login')
            }
        } catch (error) {
            alert('Không thành công!')
            console.log(error)
        }
    }
}

export const layThongTinNguoiDungAction = () => {
    return async dispatch => {
        try {
            dispatch({ type: SHOW_LOADING })

            const result = await quanLyNguoiDungService.layThongTinNguoiDung()
            if (result.data.statusCode === 200) {
                dispatch({
                    type: LAY_TT_USER,
                    thongTinUser: result.data.content
                })

            }
            dispatch({
                type: HIDE_LOADING
            })
        }

        catch (error) {
            console.log(error)
            dispatch({
                type: HIDE_LOADING
            })
        }
    }
}
export const layDanhSachNguoiDungAction = (keyword = '') => {
    return async dispatch => {
        try {
            const result = await quanLyNguoiDungService.layDanhSachNguoiDung(keyword)
            if (result.data.statusCode === 200) {
                dispatch({
                    type: LAY_DS_USER,
                    dsUser: result.data.content
                })
            }
        } catch (error) {
            console.log(error.response.content)
        }
    }
}
export const xoaNguoiDungAction = (taiKhoan) => {
    return async dispatch => {
        try {
            const result = await quanLyNguoiDungService.xoaNguoiDung(taiKhoan)

            if (result.data.statusCode === 200) {
                alert(`Xóa người dùng ${taiKhoan} thành công!`)
                dispatch(layDanhSachNguoiDungAction())
            }
        } catch (error) {
            alert('Không thành công!')
            console.log(error.response.data)
        }
    }
}

export const capNhatThongTinNguoiDungAction = (thongTinCapNhat) => {
    return async dispatch => {
        try {
            const result = await quanLyNguoiDungService.capNhatThongTinNguoiDung(thongTinCapNhat)
            if (result.data.statusCode === 200) {
                alert('Cập nhật thông tin thành công!')
                dispatch(layDanhSachNguoiDungAction())
            }
        } catch (error) {
            alert('Không thành công!')
            console.log(error.response)
        }
    }
}
export const themNguoiDungAction = (thongTinNguoiDung) => {
    return async dispatch => {
        try {
            const result = await quanLyNguoiDungService.themNguoiDung(thongTinNguoiDung)
            if (result.data.statusCode === 200) {
                alert('Thêm người dùng thành công!')
                dispatch(layDanhSachNguoiDungAction())
            }
        } catch (error) {
            alert('Không thành công!')
            console.log(error.response)
        }
    }
}