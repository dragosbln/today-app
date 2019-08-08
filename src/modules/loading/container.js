import Loading from './'
import {connect} from 'react-redux'
import actions from '../../redux/app/actions'

const mapStateToProps = (state) => {
    return{
        setupSuccess: state.app.setup.success
    }
    
}

const mapDispatchToProps = (dispatch) => ({
    initialSetup: () => dispatch(actions.initialSetup())
})

export default connect(mapStateToProps, mapDispatchToProps)(Loading)