import Storage from '../storage'

export default class CacheService {

    static set = (key = '', data = {}, ttl = null) => {
        const expiresAt = ttl === null ? null : new Date().valueOf() + ttl * 1000
        const toCache = JSON.stringify({
            payload: data,
            expiresAt: expiresAt
        });
        Storage.store(key, toCache)
    }


    static clear = (key = '') => {
        Storage.clear(key)
    }

    static get = async (key = '') => {
        const respString = await Storage.get(key)
        const resp = JSON.parse(respString)
        if(!resp) {
            return null
        }
        if(!resp.expiresAt) {
            return resp.payload
        }
        if(resp.expiresAt < new Date().valueOf()){
            this.clear(key)
            return null
        }
        return resp.payload
    }
}