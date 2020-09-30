import { configureStore } from '@reduxjs/toolkit'
import Reducer from './Reducer'

const store = configureStore({
    reducer: Reducer
  })
export default store
