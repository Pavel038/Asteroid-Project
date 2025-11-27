import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { asteroidApi } from '../Asteroid.js'
import asteroidReducer from '../Slice/asteroidSlice.js'

export const store = configureStore({
  reducer: {
    asteroidReducer,
    [asteroidApi.reducerPath]: asteroidApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(asteroidApi.middleware),
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

setupListeners(store.dispatch)
