import CardInfo from '../CardInfo.jsx'
import AsteroidColumn from './AsteroidColumn.jsx'
import EvaluationColumn from './EvaluationColumn.jsx'
import React from 'react'

export default function AsteroidCard({
  element,
  showDestructionButton = true,
}) {
  return (
    <>
      <div className="cart__container">
        <div
          className={
            element.hazardousAsteroid
              ? 'asteroid__card__danger'
              : 'asteroid__card'
          }
        >
          <div className="asteroid__column">
            <AsteroidColumn size={element.asteroidSize} />
          </div>
          <div className="info__column">
            <CardInfo
              name={element.name}
              date={element.data}
              distanceInKm={element.approachData}
              size={element.asteroidSize}
              distanceInLunarOrbits={element.lunar}
            />
          </div>
          <div className="evaluation__column">
            <EvaluationColumn
              showDestructionButton={showDestructionButton}
              asteroidId={element.id}
              hazardousAsteroid={element.hazardousAsteroid}
            />
          </div>
        </div>
      </div>
    </>
  )
}
