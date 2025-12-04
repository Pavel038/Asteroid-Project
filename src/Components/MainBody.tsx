import AsteroidCard from './AsteroidCard.jsx'

import React, { type JSX, useMemo } from 'react'
import { useAppSelector } from '../hooks/hooks.js'
import type { AsteroidInterface } from '../AsteroidInterface.js'

export default function MainBody(): JSX.Element {
  const { destructionList, showHazardousOnly } = useAppSelector(
    (state) => state.asteroidReducer,
  )

  const list: AsteroidInterface[] | undefined = useMemo(():
    | AsteroidInterface[]
    | undefined => {
    return showHazardousOnly
      ? destructionList.filter(
          (element: AsteroidInterface): boolean => element.hazardousAsteroid,
        )
      : destructionList
  }, [destructionList, showHazardousOnly])

  return (
    <div className="main__container">
      {list?.map(
        (destruction: AsteroidInterface): JSX.Element => (
          <AsteroidCard
            key={destruction.id}
            element={destruction}
            showDestructionButton={false}
          />
        ),
      )}
    </div>
  )
}
