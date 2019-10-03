import Explore from './'
import eventsActions from '../../../redux/events/actions'
import appActions from '../../../redux/app/actions'
import {connect} from 'react-redux'

const mapStateToProps = (state) => ({
    events: state.events.events,
    loadingData: state.events.api.pending,
    error: state.events.api.error,
    finnishedLoading: state.events.api.finnishedLoading,
    shouldDisplay: state.app.shouldDisplay
})

const mapDispatchToProps = (dispatch) => ({
    getEvents: () => dispatch(eventsActions.getEvents()),
    closeDismissable: () => dispatch(appActions.closeDismissable())
})

export default connect(mapStateToProps, mapDispatchToProps)(Explore)