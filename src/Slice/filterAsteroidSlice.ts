import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { AsteroidInterface } from '../AsteroidInterface.js'

export interface AsteroidDanger {
  asteroidDan: AsteroidInterface[]
}

const initialState: AsteroidDanger = {
  asteroidDan:[],
}

export const filterAsteroidSlice = createSlice({
  name: 'filterdanger',
  initialState,
  reducers: {
    laodAsteroid: (state, action: PayloadAction<AsteroidInterface[]>) => {
      state.asteroidDan = action.payload
    },
    remujveAsteroid: (state, action: PayloadAction<AsteroidInterface[]>) => {
      state.asteroidDan = action.payload
    },
  },
})
export default filterAsteroidSlice.reducer
export const { laodAsteroid,remujveAsteroid } = filterAsteroidSlice.actions
