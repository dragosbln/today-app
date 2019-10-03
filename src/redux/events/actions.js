import eventsAC from './action-creators'
import Service from '../../services'

const getEvents = () => async (dispatch, getState) => {

    if(getState().events.api.pending) return
    dispatch(eventsAC.pending())
    try{
        const eventsResp = await Service.getEvents();
        console.log('fetched events:');
        console.log(eventsResp);

        
        if(eventsResp.done){
            dispatch(eventsAC.finnishedLoading())
        }
        dispatch(eventsAC.success(eventsResp.data))
    } catch (e) {
        dispatch(eventsAC.error(e))
    }
}

export default {
    getEvents
}