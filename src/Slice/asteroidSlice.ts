import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { AsteroidInterface } from '../AsteroidInterface.js'

export interface AsteroidState {
  destructionList: AsteroidInterface[]
  hazardousOnlyList: AsteroidInterface[]
  showHazardousOnly: boolean
  distanceKm: boolean
}

const initialState: AsteroidState = {
  destructionList: [],
  hazardousOnlyList: [],
  showHazardousOnly: false,
  distanceKm: true,
}

export const asteroidSlice = createSlice({
  name: 'asteroid',
  initialState,
  reducers: {
    addToList: (state, action: PayloadAction<AsteroidInterface>): void => {
      state.destructionList.push(action.payload)
    },
    deleteFromList: (state, action: PayloadAction<number>): void => {
      state.destructionList = state.destructionList.filter(
        (element): boolean => element.id !== action.payload,
      )
    },
    setHazardousOnly: (state, action: PayloadAction<boolean>): void => {
      state.showHazardousOnly = action.payload
    },
    setHazardousList: (state, action: PayloadAction<AsteroidInterface[]>): void => {
      state.hazardousOnlyList = action.payload
    },
    setDistanceMode: (state, action: PayloadAction<boolean>): void => {
      state.distanceKm = action.payload
    },
  },
})
export const { addToList, deleteFromList, setHazardousOnly, setDistanceMode } =
  asteroidSlice.actions
export default asteroidSlice.reducer
