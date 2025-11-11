import AsteroidCard from './AsteroidCard.jsx'
import { useContext } from 'react'
import { TasksContext } from '../TasksContext.js'
import React from 'react'

export default function MainBody() {
  const { destructionList } = useContext(TasksContext)

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
