import Explore from './'
import actions from '../../../redux/events/actions'
import {connect} from 'react-redux'

const mapStateToProps = (state) => ({
    events: state.events.events,
    loadingData: state.events.api.pending,
    error: state.events.api.error,
    finnishedLoading: state.events.api.finnishedLoading
})

const mapDispatchToProps = (dispatch) => ({
    getEvents: () => dispatch(actions.getEvents())
})

export default connect(mapStateToProps, mapDispatchToProps)(Explore)