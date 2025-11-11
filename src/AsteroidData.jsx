import { useEffect, useMemo, useReducer } from 'react'
import AsteroidService from './AsteroidService.js'
import { Route, Routes } from 'react-router'
import AsteroidsPage from './Pages/AsteroidsPage.jsx'
import DestructionPage from './Pages/DestructionPage.jsx'
import App from './App.jsx'
import { DistanceContext, TasksContext } from './TasksContext.js'
import React from 'react'

export default function AsteroidData() {
  const [state, dispatch] = useReducer(asteroidsReducer, {
    asteroidsData: [],
    destructionList: [],
    originalData: [],
  })

  const [distanceUnit, setDistanceUnit] = useReducer(distanceReducer, {
    isKilometers: true,
    unit: 'KILOMETERS',
  })

  const distanceContextValue = useMemo(
    () => ({
      distanceUnit,
      setDistanceUnit,
    }),
    [distanceUnit],
  )

  useEffect(() => {
    AsteroidService.getAsteroidList().then((response) =>
      dispatch({
        type: 'LOAD_ASTEROIDS',
        payload: response,
      }),
    )
  }, [])

  function asteroidsReducer(state, action) {
    switch (action.type) {
      case 'LOAD_ASTEROIDS':
        return {
          ...state,
          asteroidsData: action.payload,
          originalData: action.payload,
        }
      case 'ADD_TO_DESTRUCTION_LIST':
        return {
          ...state,
          destructionList: [...state.destructionList, action.payload],
        }
      case 'REMOVE_FROM_DESTRUCTION_LIST':
        return { ...state, destructionList: action.payload }
      case 'FILTER_HAZARDOUS_ASTEROIDS': {
        return { ...state, asteroidsData: [action.payload] }
      }
      case 'SHOW_ALL_ASTEROIDS': {
        return { ...state, asteroidsData: state.originalData }
      }
      default:
        return state
    }
  }

  function distanceReducer(distanceUnit, action) {
    switch (action.type) {
      case 'SET_KILOMETERS':
        return { ...distanceUnit, isKilometers: true, unit: 'KILOMETERS' }
      case 'SET_LUNAR_ORBITS':
        return { ...distanceUnit, isKilometers: false, unit: 'LUNAR_ORBITS' }
      default:
        return distanceUnit
    }
  }

  return (
    <>
      <DistanceContext value={distanceContextValue}>
        <TasksContext
          value={{
            asteroidsData: state.asteroidsData,
            destructionList: state.destructionList,
            dispatch,
          }}
        >
          <Routes>
            <Route path="/" element={<App />}>
              <Route
                index
                element={<AsteroidsPage dataAsteroid={state.asteroidsData} />}
              />
              <Route path="destruction" element={<DestructionPage />} />
            </Route>
          </Routes>
        </TasksContext>
      </DistanceContext>
    </>
  )
}
