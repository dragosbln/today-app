import WikiService from './wikipedia'

class AppService{
    constructor() {
        
    }

    static date = new Date()

    static getEvents = async () => {
        const events = await WikiService.getEvents(this.date.getDate(), this.date.getMonth()+1)
        const formattedEvents = []
        for (let i = Math.min(events.length - 1, 10); i > 0; i--) {
            const formatted = {
                year: events[i].year,
                description: events[i].description, 
                refs: []
            }
            const eventWiki = events[i].wikipedia;
            
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
            formattedEvents.push(formatted)
        }
        console.log(JSON.stringify(formattedEvents));
        
        return formattedEvents;       
    }
}

// AppService.getEvents()

export default AppService