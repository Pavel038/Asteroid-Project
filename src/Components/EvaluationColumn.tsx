import { type JSX, useContext } from 'react'
import { TasksContext } from '../TasksContext.js'
import React from 'react'
import type { AsteroidInterface } from '../AsteroidInterface.js'

type EvaluationColumnProps = {
  showDestructionButton: boolean
  asteroidId: number
  hazardousAsteroid: boolean
}

type TasksContextValue = {
  asteroidsData: AsteroidInterface[][]
  destructionList: AsteroidInterface[]
  dispatch: (action: {
    type: 'ADD_TO_DESTRUCTION_LIST' | 'REMOVE_FROM_DESTRUCTION_LIST'
    payload: AsteroidInterface | AsteroidInterface[]
  }) => void
}

function EvaluationColumn(props: EvaluationColumnProps): JSX.Element {
  const { showDestructionButton, asteroidId, hazardousAsteroid } = props
  const context = useContext(TasksContext)
  if (!context) {
    throw new Error('Ошибка')
  }
  const { asteroidsData, destructionList, dispatch } =
    context as TasksContextValue
  const isInDestructionList: boolean = destructionList.some(
    (elem: AsteroidInterface): boolean => elem.id === asteroidId,
  )
  function onDestruction(): void {
    if (!isInDestructionList) {
      const allAsteroids: AsteroidInterface[] = asteroidsData.flat()
      const asteroidToMove: AsteroidInterface | undefined = allAsteroids.find(
        (elem: AsteroidInterface): boolean => elem.id === asteroidId,
      )

      if (asteroidToMove) {
        dispatch({ type: 'ADD_TO_DESTRUCTION_LIST', payload: asteroidToMove })
      }
    } else {
      const updatedDestructionList: AsteroidInterface[] =
        destructionList.filter(
          (element: AsteroidInterface): boolean => element.id !== asteroidId,
        )
      dispatch({
        type: 'REMOVE_FROM_DESTRUCTION_LIST',
        payload: updatedDestructionList,
      })
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
