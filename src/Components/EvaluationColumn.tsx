import { type JSX } from 'react'

import React from 'react'
import type { AsteroidInterface } from '../AsteroidInterface.js'
import { useAppDispatch, useAppSelector } from '../hooks/hooks.js'
import { addToList, deleteToList } from '../Slice/asteroidSlice.js'
import { useGetAsteroidByNameQuery } from '../Asteroid.js'

type EvaluationColumnProps = {
  showDestructionButton: boolean
  asteroidId: number
  hazardousAsteroid: boolean
}

function EvaluationColumn(props: EvaluationColumnProps): JSX.Element {
  const { showDestructionButton, asteroidId, hazardousAsteroid } = props

  const { data: asteroidsData } = useGetAsteroidByNameQuery()

  const dispatch = useAppDispatch()

  const destructionList: AsteroidInterface[] = useAppSelector(
    (state) => state.asteroidReducer.destructionList,
  )

  const isInDestructionList = destructionList.some(
    (elem: AsteroidInterface): boolean => elem.id === asteroidId,
  )

  function onDestruction(): void {
    if (!isInDestructionList && asteroidsData) {
      const allAsteroids: AsteroidInterface[] = asteroidsData.flat()
      const asteroidToMove: AsteroidInterface | undefined = allAsteroids.find(
        (elem: AsteroidInterface): boolean => elem.id === asteroidId,
      )
      if (asteroidToMove) {
        dispatch(addToList(asteroidToMove))
      }
    } else {
      dispatch(deleteToList(asteroidId))
    }
  }

  return (
    <div>
      <div style={{ textAlign: 'center' }}>
        <p style={{ marginBottom: '8px' }}>Оценка:</p>
        <p style={{ marginBottom: '8px' }}>
          <strong>{hazardousAsteroid ? 'Опасно' : 'не опасно'}</strong>
        </p>
      </div>
      {showDestructionButton && (
        <button onClick={onDestruction}>
          {isInDestructionList ? 'Не уничтожать' : 'На уничтожение'}
        </button>
      )}
    </div>
  )
}

export default EvaluationColumn
