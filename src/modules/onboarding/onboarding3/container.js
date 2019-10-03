import Onboarding3 from './'
import {connect} from 'react-redux'
import actions from '../../../redux/app/actions'


const mapDispatchToProps = (dispatch) => ({
    setShouldDisplayOnboarding: () => dispatch(actions.setShouldDisplayOnboarding())
})

export default connect(null, mapDispatchToProps)(Onboarding3)