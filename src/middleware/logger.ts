import { store } from '../store/store.js'

export const logger = (store) => (next) => (action) => {
  console.log('Вход', action.payload)
  let nex = next(action)
  console.log('Выход', action.payload)
  return nex
}
