import { GROUP_ID } from "../util/settings/config";
import { baseService } from "./baseService";


export class QuanLyNguoiDungService extends baseService {
    constructor() {
        super();
    }

    dangNhap(thongTinDangNhap) {
        return this.post('/QuanLyNguoiDung/DangNhap', thongTinDangNhap);
    }
    dangKy(thongTinDangKy) {
        return this.post('/QuanLyNguoiDung/DangKy', thongTinDangKy)
    }
    layThongTinNguoiDung() {
        return this.post('/QuanLyNguoiDung/ThongTinTaiKhoan')
    }
    layDanhSachNguoiDung(keyword = '') {
        if (keyword.trim() !== '') {
            return this.get(`/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUP_ID}&tuKhoa=${keyword}`)
        }
        return this.get(`/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUP_ID}`)
    }
    xoaNguoiDung(taiKhoan) {
        return this.delete(`/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`)
    }
    capNhatThongTinNguoiDung(thongTinCapNhat) {
        return this.put('/QuanLyNguoiDung/CapNhatThongTinNguoiDung', thongTinCapNhat)
    }
    themNguoiDung(thongTinNguoiDung) {
        return this.post('/QuanLyNguoiDung/ThemNguoiDung', thongTinNguoiDung)
    }
}

export const quanLyNguoiDungService = new QuanLyNguoiDungService()