import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../actions/auth-action'

export default configureStore({
  reducer: {
    auth: authReducer
  }
})