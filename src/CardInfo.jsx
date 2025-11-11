import { useContext, useMemo } from 'react'
import { DistanceContext } from './TasksContext.js'
import React from 'react'

export default function CardInfo({
  name,
  date,
  distanceInKm,
  size,
  distanceInLunarOrbits,
}) {
  const { distanceUnit } = useContext(DistanceContext)

  const displayDistance = useMemo(() => {
    return distanceUnit.isKilometers ? distanceInKm : distanceInLunarOrbits
  }, [distanceUnit.isKilometers])

  return (
    <>
      <div className="card_info">
        <p
          className="year"
          style={{ textDecorationLine: 'underline', marginBottom: '16px' }}
        >
          {name}
        </p>
        <div className="date">
          <p>Дата</p>
          <div className="line"></div>
          <p>{date}</p>
        </div>
        <div className="date">
          <p>Расстояние</p>
          <div className="line"></div>
          <p>{displayDistance} км</p>
        </div>
        <div className="date">
          <p>Размер</p>
          <div className="line"></div>
          <p>{size} м</p>
        </div>
      </div>
    </>
  )
}
