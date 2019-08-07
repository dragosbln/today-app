import eventsAC from './actions-creator'
import Service from '../../services'

const getEvents = () => async (dispatch) => {

    dispatch(eventsAC.pending())
    try{
        const events = await Service.getEvents();
        dispatch(eventsAC.success(events))
    } catch (e) {
        dispatch(eventsAC.error(e))
    }
}

export default {
    getEvents
}