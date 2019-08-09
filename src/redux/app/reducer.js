import types from './types'


const initialState = {
    shouldDisplay: null,
    setup: {
        pending: false,
        success: false,
        error: false
    }
}

const updateSetupState = (key='', val) => ({
    ...initialState.setup,
    [key]: val
})

const reducer = (state = initialState, action) => {
    switch(action.type){
        case types.CLOSE_DISMISSABLE:
            return{
                ...state,
                shouldDisplay: false,
                setup: {
                    ...initialState.setup
                }
            }
        case types.INITIAL_SETUP_PENDING:
            return{
                ...state,
                setup: updateSetupState('pending', true)
            }
        case types.INITIAL_SETUP_SUCCESS:
            return{
                ...state,
                shouldDisplay: action.payload.shouldDisplay,
                setup: updateSetupState('success', true)
            }
        default:
            return state
    }
}


export default reducer