import AsteroidCard from '../Components/AsteroidCard.jsx'
import FilterAsteroid from '../Components/FilterAsteroid.jsx'
import type { AsteroidInterface } from '../AsteroidInterface.js'
import { useGetAllAsteroidQuery } from '../Asteroid.js'
import { useAppSelector } from '../hooks/hooks.js'
import { type JSX, useMemo } from 'react'

export default function AsteroidsPage(): JSX.Element {
  const { data = [], isLoading } = useGetAllAsteroidQuery()
  console.log('LOADER', isLoading)
  const { showHazardousOnly } = useAppSelector((state) => state.asteroidReducer)
  const list: AsteroidInterface[] = useMemo((): AsteroidInterface[] => {
    console.log('rivet')
    return showHazardousOnly
      ? data.filter(
          (asteroids: AsteroidInterface): boolean =>
            asteroids.hazardousAsteroid,
        )
      : data
  }, [showHazardousOnly, data])
  console.log('######', list)
  return isLoading ? (
    <h3>LOADING...</h3>
  ) : (
    <div className="main__container">
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
    </div>
  )
}
