import AsteroidCard from '../Components/AsteroidCard.jsx'
import FilterAsteroid from '../Components/FilterAsteroid.jsx'
import type { AsteroidInterface } from '../AsteroidInterface.js'
import { useGetAllAsteroidQuery } from '../Asteroid.js'
import { useAppSelector } from '../hooks/hooks.js'
import type { JSX } from 'react'

export default function AsteroidsPage(): JSX.Element {
  const { data = [] } = useGetAllAsteroidQuery()

  const { showHazardousOnly } = useAppSelector((state) => state.asteroidReducer)
  const list: AsteroidInterface[] = showHazardousOnly
    ? data.filter(
        (asteroids: AsteroidInterface): boolean => asteroids.hazardousAsteroid,
      )
    : data
  return (
    <>
      <FilterAsteroid />
      {list.map(
        (elem: AsteroidInterface): JSX.Element => (
          <AsteroidCard
            key={elem.id}
            element={elem}
            showDestructionButton={true}
          />
        ),
      )}
    </>
  )
}
