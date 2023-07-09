import { configureStore } from '@reduxjs/toolkit'
import { hotelSlice } from './hotelSlice'

export const store = configureStore({
  reducer: {
    hotelsList: hotelSlice.reducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch