import AsteroidCard from '../Components/AsteroidCard.tsx'
import FilterAsteroid from '../Components/FilterAsteroid.tsx'
import React from 'react'

export default function AsteroidsPage({ dataAsteroid }) {
  return (
    <>
      <FilterAsteroid />
      {dataAsteroid?.map((asteroid) =>
        asteroid.map((elem) => <AsteroidCard key={elem.id} element={elem} />),
      )}
    </>
  )
}
