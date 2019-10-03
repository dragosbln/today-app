import events from './events/reducer'
import app from './app/reducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    app: app,
    events: events
})

console.log('====================================AASDFA' );
console.log(rootReducer);
console.log('====================================');

export default rootReducer