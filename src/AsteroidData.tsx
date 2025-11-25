import { type JSX, useEffect, useMemo, useReducer } from 'react'
import { Route, Routes } from 'react-router'
import AsteroidsPage from './Pages/AsteroidsPage.js'
import DestructionPage from './Pages/DestructionPage.js'
import App from './App.js'
import { DistanceContext } from './TasksContext.js'
import React from 'react'
import { DistanceActionType } from './Enums/DistanceActionType.js'
import { useGetAsteroidByNameQuery } from './Asteroid.js'


interface DistanceState {
  isKilometers: boolean
  unit: string
}
type DistanceAction = {
  type: DistanceActionType
}

export interface DistanceContextType {
  distanceUnit: DistanceState
  setDistanceUnit: React.ActionDispatch<[action: DistanceAction]>
}

export default function AsteroidData(): JSX.Element {
  const { data:dataAsteroid  } = useGetAsteroidByNameQuery()


  console.log('sadasdasd', dataAsteroid)
  const [distanceUnit, setDistanceUnit] = useReducer(distanceReducer, {
    isKilometers: true,
    unit: 'KILOMETERS',
  })

  const distanceContextValue: DistanceContextType = useMemo(
    (): DistanceContextType => ({
      distanceUnit,
      setDistanceUnit,
    }),
    [distanceUnit],
  )

  function distanceReducer(
    distanceUnit: DistanceState,
    action: DistanceAction,
  ) {
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
        <Routes>
          <Route path="/" element={<App />}>
            <Route
              index
              element={<AsteroidsPage dataAsteroid={dataAsteroid} />}
            />
            <Route path="destruction" element={<DestructionPage />} />
          </Route>
        </Routes>
      </DistanceContext>
    </>
  )
}
