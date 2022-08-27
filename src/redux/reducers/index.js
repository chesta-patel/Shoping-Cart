import { combineReducers } from 'redux'
import fetchProductReducers from './fetchProductReducers'

const rootReducer = combineReducers({
  fetchProductReducers,
})

export default rootReducer
