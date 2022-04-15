import { baseService } from "./baseService";


export class QuanLyDatVeService extends baseService {
    constructor() {
        super()
    }
    layDanhSachPhongVe(maLichChieu) {
        return this.get(`/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`)
    }
    datVe(thongTinDatVe) {
        return this.post('/QuanLyDatVe/DatVe', thongTinDatVe)
    }
    taoLichChieu(thongTinLichChieu) {
        return this.post('/QuanLyDatVe/TaoLichChieu', thongTinLichChieu)
    }
}
export const quanLyDatVeService = new QuanLyDatVeService()