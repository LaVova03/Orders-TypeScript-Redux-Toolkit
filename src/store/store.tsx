import { configureStore } from '@reduxjs/toolkit'
import rootReducer  from '../features/ChangePage'

export const store = configureStore({
  reducer: {
    isPage: rootReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch