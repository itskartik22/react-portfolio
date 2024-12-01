import { configureStore } from '@reduxjs/toolkit'
import modeReducer from './modeSlice'

export const store = configureStore({
  reducer: {
    mode: modeReducer,
  },
})