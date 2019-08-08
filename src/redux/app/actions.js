import appAC from './action-creators'
import ManageOptionsService from '../../services/manageOptionsService'

const closeDismissable = () => (dispatch) => {
    dispatch(appAC.close())
    ManageOptionsService.incrementDisplayCount()
}

export default {
    closeDismissable
}