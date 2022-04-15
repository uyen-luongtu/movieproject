import Axios from 'axios'
import { DOMAIN, USER_LOGIN, TOKEN } from '../util/settings/config'

export class baseService {
    post(url, data) {
        return Axios({
            url: `${DOMAIN}${url}`,
            method: 'POST',
            data: data,
            headers: { 'Authorization': `Bearer ${localStorage.getItem(TOKEN)}` }
        })
    }
    get(url) {
        return Axios({
            url: `${DOMAIN}${url}`,
            method: 'GET',
            headers: { 'Authorization': `Bearer ${localStorage.getItem(TOKEN)}` }
        })
    }
    put(url, data) {
        return Axios({
            url: `${DOMAIN}${url}`,
            method: 'PUT',
            data: data,
            headers: { 'Authorization': `Bearer ${localStorage.getItem(TOKEN)}` }
        })
    }
    delete(url) {
        return Axios({
            url: `${DOMAIN}${url}`,
            method: 'DELETE',
            headers: { 'Authorization': `Bearer ${localStorage.getItem(TOKEN)}` }
        })
    }

}