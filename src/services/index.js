import WikiService from './wikipedia'

class AppService{
    constructor() {
        
    }

    static _resolve = null
    static _rawEvents = null
    static _eventsQueue = []
    static _date = new Date()
    static _begun = false
    static _done = false
    static _currenIndex
    static _toLoad

    static _checkEvents = () => {
        if(this._done && this._resolve){
            this._resolve({ 
                done: true,
                data: []
            })
            return this._resolve = null
        } 
        if(!this._begun) this._getEvents()
        if(this._resolve && this._eventsQueue.length > 1) {
            this._resolve({
                data: [...this._eventsQueue],
                done: this._done
            });
            this._resolve = null;
            this._eventsQueue = []
        }
    }

    static _getEvents = async () => {
        this._begun = true;
        // this._rawEvents = await WikiService.getEvents(this._date.getDate(), this._date.getMonth()+1)
        this._rawEvents = await WikiService.getEvents(1, 1)
        await this._formatEvents();
        return;
    }

    static _formatEvents = async () => {
        
        for (let i = this._rawEvents.length - 1; i > 0; i--) {
            const formatted = {
                year: this._rawEvents[i].year,
                description: this._rawEvents[i].description, 
                refs: []
            }
            const eventWiki = this._rawEvents[i].wikipedia;
            
            for (let j = 0; j < eventWiki.length; j++) {
                const ref = await WikiService.getReferencePage(eventWiki[j].title)
                let description = '';
                if(ref.description) description = ref.description.length > 50 ? `${ref.description.slice(0, 51)}...` : ref.description;
                formatted.refs.push({
                    title: ref.title,
                    description: description,
                    thumbnail: ref.thumbnail ? ref.thumbnail.source : null,
                    link: eventWiki[j].wikipedia
                })
            }
            this._eventsQueue.push(formatted)
            this._checkEvents()

            
        }
        return this._done=true
    }

    static getEvents = async () => {
        return new Promise((resolve, reject) => {
            this._resolve=resolve;
            this._checkEvents()
        })
    }
}

// AppService.getEvents()

export default AppService