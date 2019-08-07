import types from './types'

const pending = () => ({
    type: types.PENDING
})

const error = (err) => ({
    type: types.ERROR,
    payload: err
})

const success = (data) => ({
    type: types.SUCCESS,
    payload: data
})

export default {
    pending,
    success,
    error
}