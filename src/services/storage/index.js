import { AsyncStorage } from 'react-native';

export default class StorageService{
    static store(key, val){
        const jsonVal = JSON.stringify(val)
        AsyncStorage.setItem(key, jsonVal)
    }

    static async get(key){
        const val = await AsyncStorage.getItem(key)
        return JSON.parse(val)
    }

    static clear(key){
        AsyncStorage.removeItem(key)
    }
}