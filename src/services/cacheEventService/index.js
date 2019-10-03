import CacheService from '../cacheService'

export default (() => {
    const STORAGE_KEY = 'cachedEvents'

    const saveEvent = async (event) => {
        const cachedEvents = await CacheService.get(STORAGE_KEY)
        
        const events = cachedEvents || []
        events.push(event)
        CacheService.set(STORAGE_KEY, events, 86000)
    }

    const getEvent = async (title = '') => {
        const events = await CacheService.get(STORAGE_KEY)
        if(!events){
            return null
        }
        const ev = events.find(el => el.title === title)
        return ev === undefined ? null : ev
    }

    return {
        saveEvent: saveEvent,
        getEvent: getEvent
    }
})()