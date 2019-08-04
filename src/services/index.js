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
    static _stageDone=true

    static _checkEvents = () => {
        if(this._done && this._resolve){
            this._resolve({ 
                done: true,
                data: []
            })
            return this._resolve = null
        } 
        if(!this._stageDone) return
        if(!this._begun) return this._getEvents()
        
        
        
        if(this._resolve && this._eventsQueue.length > 2) {
            this._resolve({
                data: [...this._eventsQueue],
                done: this._done
            });
            this._resolve = null;
            this._eventsQueue = []

            if(this._currenIndex === 0){
                return this._done = true
            }

                this._currenIndex = this._toLoad
                this._toLoad = Math.max(this._toLoad - 3, 0)
                this._formatEvents()
        }
    }

    static _getEvents = async () => {
        this._begun = true
        // this._rawEvents = await WikiService.getEvents(this._date.getDate(), this._date.getMonth()+1)
        this._rawEvents = await WikiService.getEvents(1, 1)
        this._currenIndex = this._rawEvents.length - 1
        this._toLoad =  Math.max(this._rawEvents.length - 4, 0) 

        await this._formatEvents();
        return;
    }

    static _formatEvents = async () => {
        this._stageDone = false
        
        for (let i = this._currenIndex; i > this._toLoad; i--) {
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
        }
        
        
        
        this._stageDone = true
        this._checkEvents()

    }

    static getEvents = async () => {
        if(this._resolve) return null

        return new Promise((resolve, reject) => {
            this._resolve=resolve;
            this._checkEvents()
        })
    }
}

// AppService.getEvents()

export default AppService