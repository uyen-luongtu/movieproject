import { GROUP_ID } from "../util/settings/config";
import { baseService } from "./baseService";

export class QuanLyRapService extends baseService {
    constructor() {
        super()
    }
    layTTHeThongRap() {
        return this.get(`/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUP_ID}`)
    }
    layTTLichChieuPhim(maPhim) {
        return this.get(`/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`)
    }
    layThongTinCumRapTheoHeThong(maHeThongRap) {
        return this.get(`/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`)
    }

}

export const quanLyRapService = new QuanLyRapService()