import ManageOptionsService from '../../services/manageOptionsService'
import types from './types'

const initializeState = async (state) => {
    state.shouldDisplay = await ManageOptionsService.shouldDisplay()
}

const initialState = {
    showDismissable: null
}

initializeState(initialState)

const reducer = async (state = initialState, action) => {
    switch(action.type){
        case types.CLOSE_DISMISSABLE:
            return{
                ...state,
                showDismissable: false
            }
        default:
            return state
    }
}


export default {
    reducer
}