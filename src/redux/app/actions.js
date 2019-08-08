import appAC from './action-creators'
import ManageOptionsService from '../../services/manageOptionsService'

const initialSetup = () => async (dispatch) => {
    dispatch(appAC.initialSetupPending())
    const shouldDisplay = await ManageOptionsService.shouldDisplay()
    dispatch(appAC.initialSetupSuccess({shouldDisplay}))
}

const closeDismissable = () => (dispatch) => {
    dispatch(appAC.close())
    ManageOptionsService.incrementDisplayCount()
}

export default {
    closeDismissable,
    initialSetup
}