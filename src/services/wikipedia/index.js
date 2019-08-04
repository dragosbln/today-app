import axios from 'axios'

class WikiService{
    constructor(){
    }

    static baseEventsUrl = 'https://byabbe.se/on-this-day';
    static basePagesUrl = 'https://en.wikipedia.org/w/api.php'

    static getEvents = async (month, day) => {
        try{
            const resp = await axios.get(`${this.baseEventsUrl}/${month}/${day}/events.json`);
            return resp.data.events;
        } catch (e) {
            console.log(e.name)
            throw e
        }
        
    }

    static getReferencePage = async (pageTitle) => {
        try {
            const url = `${this.basePagesUrl}?action=query&format=json&titles=${pageTitle}&prop=description|pageimages&piprop=thumbnail`
            const resp = await axios.get(url)
            const responsePages = resp.data.query.pages;
            return responsePages[Object.keys(responsePages)[0]]
        } catch (error) {
            console.log(error);
            
        }
    }

}

(async function(){
    const ev = await WikiService.getEvents(1,1)
    const page = await WikiService.getReferencePage(ev[10].wikipedia[0].title)
    
})()


export default WikiService