import { type JSX, useContext, useState } from 'react'
import { DistanceContext, TasksContext } from '../TasksContext.js'
import React from 'react'
import type { AsteroidInterface } from '../AsteroidInterface.js'

type DistanceContextType = {
  distanceUnit: { isKilometers: boolean; unit: 'KILOMETERS' | 'LUNAR_ORBITS' }
  setDistanceUnit: ({
    type,
  }: {
    type: 'SET_KILOMETERS' | 'SET_LUNAR_ORBITS'
  }) => void
}

type TasksContextType = {
  asteroidsData: AsteroidInterface[][]
  dispatch: (action: {
    type: 'FILTER_HAZARDOUS_ASTEROIDS' | 'SHOW_ALL_ASTEROIDS'
    payload?: AsteroidInterface[]
  }) => void
}

export default function FilterAsteroid(): JSX.Element {
  const distanceContext = useContext(DistanceContext)
  const tasksContext = useContext(TasksContext)
  if (!distanceContext) {
    throw new Error('DistanceContext не доступен')
  }

  if (!tasksContext) {
    throw new Error('TasksContext не доступен')
  }

  const { distanceUnit, setDistanceUnit } =
    distanceContext as DistanceContextType

  const [isDangerousOnly, setIsDangerousOnly] = useState(false)
  const { asteroidsData, dispatch }: TasksContextType = tasksContext

  function handleHazardousFilterToggle(): void {
    const newValue: boolean = !isDangerousOnly

    if (newValue) {
      const newElem: AsteroidInterface[] = asteroidsData
        .flat()
        .filter((elem: AsteroidInterface): boolean => elem.hazardousAsteroid)
      dispatch({ type: 'FILTER_HAZARDOUS_ASTEROIDS', payload: newElem })
    } else {
      dispatch({ type: 'SHOW_ALL_ASTEROIDS' })
    }
    setIsDangerousOnly((isDangerousOnly: boolean): boolean => !isDangerousOnly)
  }

  return (
    <>
      <div className="main__container__head">
        <div className="dangerous">
          <input
            onChange={handleHazardousFilterToggle}
            className="dangerousOnly"
            type="checkbox"
            id="dangerousOnly"
            checked={isDangerousOnly}
          />
          <label htmlFor="dangerousOnly">Показать только опасные</label>
        </div>
        <div className="distans">
          <span
            style={{
              cursor: 'pointer',
              textDecoration: distanceUnit.isKilometers ? 'underLine' : 'none',
            }}
            onClick={() => setDistanceUnit({ type: 'SET_KILOMETERS' })}
          >
            Расстояние в километрах,
          </span>
          <span
            style={{
              cursor: 'pointer',
              textDecoration: !distanceUnit.isKilometers ? 'underLine' : 'none',
            }}
            onClick={() => setDistanceUnit({ type: 'SET_LUNAR_ORBITS' })}
          >
            в дистанциях до луны{' '}
          </span>
        </div>
      </div>
    </>
  )
}
