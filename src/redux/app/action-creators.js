import types from './types'

const close = () => ({
    type: types.CLOSE_DISMISSABLE
})

const initialSetupPending = () => ({
    type: types.INITIAL_SETUP_PENDING
})

const initialSetupSuccess = (config) => ({
    type: types.INITIAL_SETUP_SUCCESS,
    payload: config
})

export default {
    close,
    initialSetupPending,
    initialSetupSuccess
}