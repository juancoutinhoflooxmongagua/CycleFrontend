import { combineReducers } from 'redux'

const initialState = {
  summary: {
    credit: 100,
    debt: 0,
  }
}

function dashboardReducer(state = initialState, action) {
  switch (action.type) {
    case 'DASHBOARD_SUMMARY_FETCHED':
      return { ...state, summary: action.payload }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  dashboard: dashboardReducer
})

export default rootReducer
