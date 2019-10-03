import types from './types'

const initialState = {
    events: [],
    api: {
        pending: false,
        success: false,
        error: null,
        finnishedLoading: false
    }
}

const updateApiState = (key, val) => ({
    ...initialState.api,
    [key]: val
})

export default (state = initialState, action) => {
    switch(action.type) {
        case types.PENDING:
            return ({
                ...state,
                api: updateApiState('pending', true)
            })
        case types.ERROR: 
            return ({
                ...state,
                api: updateApiState('error', action.payload)
            })
        case types.SUCCESS: 
            return ({
                ...state,
                events: [
                    ...state.events,
                    ...action.payload
                ],
                api: updateApiState('success', true)
            })
        case types.FINNISHED_LOADING:
            return({
                ...state,
                api: updateApiState('finnishedLoading', true)
            })
        default: 
            return state
    }
}