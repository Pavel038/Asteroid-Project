import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { AsteroidInterface } from '../AsteroidInterface.js'

export interface AsteroidState {
  destructionList: AsteroidInterface[]
  distroy: AsteroidInterface[]
}

const initialState: AsteroidState = {
  destructionList: [],
  distroy: [],
}

export const asteroidSlice = createSlice({
  name: 'asteroid',
  initialState,
  reducers: {
    addToList: (state, action: PayloadAction<AsteroidInterface>) => {
      state.destructionList.push(action.payload)
    },
    deleteToList: (state, action: PayloadAction<number>) => {
      state.destructionList = state.destructionList.filter(
        (element) => element.id !== action.payload,
      )
    },
  },
})
export const { addToList, deleteToList } = asteroidSlice.actions
export default asteroidSlice.reducer
