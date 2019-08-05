import CacheService from '../cacheService'

export default (() => {
    static const STORAGE_KEY = 'cachedEvents'

    const saveEvent = async (event) => {
        const cachedEventsString = await CacheService.get(STORAGE_KEY)
        const cachedEvents = JSON.parse(cachedEventsString)
        if(!cachedEvents) return
        cachedEvents.push(event)
        CacheService.set(STORAGE_KEY, cachedEvents, 86000)
    }

    const getEvents = async () => {
        return CacheService.get(STORAGE_KEY)
    }

    return {
        saveEvent: saveEvent,
        getEvents: getEvents
    }
})()