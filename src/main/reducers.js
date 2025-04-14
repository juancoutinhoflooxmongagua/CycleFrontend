import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import DashboardReducer from '../dashboard/dashboardReducer'
import tabReducer from '../common/tab/tabReducer'
import BillingCycleReducer from '../billingCycle/billingCycleReducer'

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: tabReducer,
    billingCycle: BillingCycleReducer,
    form: formReducer // redux-form reducer
})

export default rootReducer