import rootReducer from './root-reducer'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

export default createStore(rootReducer, applyMiddleware(thunk))