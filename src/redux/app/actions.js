import appAC from './action-creators'
import ManageOptionsService from '../../services/manageOptionsService'
import DisplayOnboardingService from '../../services/displayOnboardingService'

const initialSetup = () => async (dispatch) => {
    dispatch(appAC.initialSetupPending())
    const shouldDisplayManageOptions = await ManageOptionsService.shouldDisplay()
    const shouldDisplayOnboarding = await DisplayOnboardingService.getShouldDisplayOnboarding()
    dispatch(appAC.initialSetupSuccess({shouldDisplayManageOptions, shouldDisplayOnboarding}))
}

const setShouldDisplayOnboarding = () => async (dispatch) => {
    DisplayOnboardingService.setShouldDisplayOnboarding()
}

const closeDismissable = () => (dispatch) => {
    dispatch(appAC.close())
    ManageOptionsService.incrementDisplayCount()
}

export default {
    closeDismissable,
    initialSetup,
    setShouldDisplayOnboarding
}