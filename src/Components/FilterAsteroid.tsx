import { type JSX, useState } from 'react'

import React from 'react'
import type { AsteroidInterface } from '../AsteroidInterface.js'
import { useGetAsteroidByNameQuery } from '../Asteroid.js'
import { useDispatch } from 'react-redux'



export default function FilterAsteroid(): JSX.Element {
  const [isDangerousOnly, setIsDangerousOnly] = useState(false)
  const { data: asteroidsData = [] } = useGetAsteroidByNameQuery()
  const dispatch = useDispatch()
  function handleHazardousFilterToggle(): void {
    const newValue: boolean = !isDangerousOnly
    let allAsteroids: AsteroidInterface[] = asteroidsData.flat()

    if (newValue && asteroidsData) {
      const newElem: AsteroidInterface[] = allAsteroids.filter(
        (elem: AsteroidInterface): boolean => elem.hazardousAsteroid,
      )
      console.log(newElem)

    } else {

    }
    setIsDangerousOnly((isDangerousOnly: boolean): boolean => !isDangerousOnly)
  }

  return (
    <>
      <div className="main__container__head">
        <div className="dangerous">
          <input
            onChange={handleHazardousFilterToggle}
            className="dangerousOnly"
            type="checkbox"
            id="dangerousOnly"
            checked={isDangerousOnly}
          />
          <label htmlFor="dangerousOnly">Показать только опасные</label>
        </div>
        <div className="distans">
          <span
            style={{
              cursor: 'pointer',
            }}
            onClick={() => setDistanceUnit({ type: 'SET_KILOMETERS' })}
          >
            Расстояние в километрах,
          </span>
          <span
            style={{
              cursor: 'pointer',
            }}
            onClick={() => setDistanceUnit({ type: 'SET_LUNAR_ORBITS' })}
          >
            в дистанциях до луны{' '}
          </span>
        </div>
      </div>
    </>
  )
}
