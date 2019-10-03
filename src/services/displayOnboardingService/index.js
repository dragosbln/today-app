import CacheService from '../cacheService'

export default (() => {
    const STORAGE_KEY = 'displayOnboarding'

    const setShouldDisplayOnboarding = async () => {
        CacheService.set(STORAGE_KEY, true, 168000000000)
    }

    const getShouldDisplayOnboarding = async () => {
        const shouldDisplayOnboarding = await CacheService.get(STORAGE_KEY)
        return shouldDisplayOnboarding === null ? true : false
    }

    return {
        setShouldDisplayOnboarding,
        getShouldDisplayOnboarding
    }
})()