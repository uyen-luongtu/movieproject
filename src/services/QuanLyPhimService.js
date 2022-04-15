import { baseService } from "./baseService";
import { GROUP_ID } from '../util/settings/config'


export class QuanLyPhimService extends baseService {
    constructor() {
        super();
    }
    layDanhSachBanner() {
        return this.get('/QuanLyPhim/LayDanhSachBanner')
    }
    layDanhSachPhim(tenPhim = '') {
        if (tenPhim.trim() !== '') {
            return this.get(`/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID}&tenPhim=${tenPhim}`)

        }
        return this.get(`/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID}`)

    }
    layThongTinPhim(maPhim) {
        return this.get(`/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`)
    }
    themPhimUploadHinh(data) {
        return this.post('/QuanLyPhim/ThemPhimUploadHinh', data)
    }
    capNhatPhimUpload(data) {
        return this.post('/QuanLyPhim/CapNhatPhimUpload', data)
    }
    xoaPhim(maPhim) {
        return this.delete(`/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`)
    }
}

export const quanLyPhimService = new QuanLyPhimService()