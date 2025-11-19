import AsteroidCard from './AsteroidCard.tsx'
import { useContext } from 'react'
import { TasksContext } from '../TasksContext.ts'
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
