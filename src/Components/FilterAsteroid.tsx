import { type JSX } from 'react'
import React from 'react'
import { setDistanceMode, setHazardousOnly } from '../Slice/asteroidSlice.js'
import { useAppDispatch, useAppSelector } from '../hooks/hooks.js'

export default function FilterAsteroid(): JSX.Element {
  const { showHazardousOnly, distanceKm } = useAppSelector(
    (state) => state.asteroidReducer,
  )

  const dispatch = useAppDispatch()

  return (
    <>
      <div className="main__container__head">
        <div className="dangerous">
          <input
            onChange={() => dispatch(setHazardousOnly(!showHazardousOnly))}
            className="dangerousOnly"
            type="checkbox"
            id="dangerousOnly"
            checked={showHazardousOnly}
          />
          <label htmlFor="dangerousOnly">Показать только опасные</label>
        </div>
        <div className="distans">
          <span
            style={{
              cursor: 'pointer',
              textDecorationLine: distanceKm ? 'underline' : 'none',
            }}
            onClick={() => dispatch(setDistanceMode(true))}
          >
            Расстояние в километрах,
          </span>
          <span
            style={{
              cursor: 'pointer',
              textDecorationLine: distanceKm ? 'none' : 'underline',
            }}
            onClick={() => dispatch(setDistanceMode(false))}
          >
            в дистанциях до луны
          </span>
        </div>
      </div>
    </>
  )
}
