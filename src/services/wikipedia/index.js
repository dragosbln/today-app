import axios from 'axios'
import CacheEventService from '../cacheEventService'

class WikiService{
    constructor(){
    }

    static baseEventsUrl = 'https://byabbe.se/on-this-day';
    static basePagesUrl = 'https://en.wikipedia.org/w/api.php'

    static getEvents = async (month, day) => {
        try{
            console.time()
            const resp = await axios.get(`${this.baseEventsUrl}/${month}/${day}/events.json`);
            console.timeEnd()
            return resp.data.events;
        } catch (e) {
            console.log(e.name)
            throw e
        }
        
    }

    static getReferencePage = async (pageTitle) => {
        try {
            const cachedEvent = await CacheEventService.getEvent(pageTitle)
            if(cachedEvent){
                console.log('cached');
                
                return cachedEvent
            }

            const url = `${this.basePagesUrl}?action=query&format=json&titles=${pageTitle}&prop=description|pageimages&piprop=thumbnail`
            const resp = await axios.get(url)
            const responsePages = resp.data.query.pages;
            const toReturn = responsePages[Object.keys(responsePages)[0]]
            CacheEventService.saveEvent(toReturn)
            return toReturn
        } catch (error) {
            console.log(error);
            
        }
    }

}



export default WikiService