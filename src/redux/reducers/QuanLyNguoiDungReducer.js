import { TOKEN, USER_LOGIN } from "../../util/settings/config"
import { DANG_NHAP, LAY_DS_USER, LAY_TT_USER, LOGIN_FAIL } from "../types/QuanLyNguoiDungType"

const initState = {
    loginErr: '',
    thongTinLogin: {
    },
    thongTinUser: {
    },
    dsUser: []
}
export const QuanLyNguoiDungReducer = (state = initState, action) => {
    switch (action.type) {
        case DANG_NHAP: {
            localStorage.setItem(TOKEN, action.thongTinLogin.accessToken)
            localStorage.setItem(USER_LOGIN, JSON.stringify(action.thongTinLogin))
            return { ...state, thongTinLogin: action.thongTinLogin, loginErr: '' }

        }
        case LOGIN_FAIL: {

            return { ...state, loginErr: action.loginErr }
        }
        case LAY_TT_USER: {
            return { ...state, thongTinUser: action.thongTinUser }
        }
        case LAY_DS_USER: {
            return { ...state, dsUser: action.dsUser }
        }

        default: return { ...state }
            break;
    }
}