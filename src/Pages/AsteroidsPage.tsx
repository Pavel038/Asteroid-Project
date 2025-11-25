import AsteroidCard from '../Components/AsteroidCard.jsx'
import FilterAsteroid from '../Components/FilterAsteroid.jsx'

import type { AsteroidInterface } from '../AsteroidInterface.js'

export default function AsteroidsPage({ dataAsteroid }) {
  return (
    <>
      <FilterAsteroid />
      {dataAsteroid?.map((asteroid: AsteroidInterface[]) =>
        asteroid.map((elem: AsteroidInterface) => (
          <AsteroidCard key={elem.id} element={elem} />
        )),
      )}
    </>
  )
}
