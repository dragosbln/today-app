import StorageService from '../storage'

export default class ManageOpttionsService{
    static async shouldDisplay(){
        const count = await StorageService.get('count')
        return count === null || count.data < 3
    }

    static async incrementDisplayCount(){
        const count = await StorageService.get('count')
        let newCount = count === null ? 1 : count.data + 1
        StorageService.store('count', {data: newCount})
    }
}