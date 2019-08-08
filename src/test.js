import store from './redux/store'
import actions from './redux/events/actions'


// console.log('====================================');
// console.log(store.getState());
// console.log('====================================');

store.dispatch(actions.getEvents())

const f = () => {
    
    setTimeout(function() {
        store.dispatch(actions.getEvents())
    }, 2000);
}

f()