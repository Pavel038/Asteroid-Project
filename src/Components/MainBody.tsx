import AsteroidCard from './AsteroidCard.jsx'

import React from 'react'
import { useAppSelector } from '../hooks/hooks.js'

export default function MainBody() {
  const destructionList = useAppSelector(
    (state) => state.asteroidReducer.destructionList,
  )

  return (
    <div className="main__container">
      {destructionList.map((destruction) => (
        <AsteroidCard
          key={destruction.id}
          element={destruction}
          showDestructionButton={false}
        />
      ))}
    </div>
  )
}
