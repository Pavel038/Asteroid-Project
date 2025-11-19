import CardInfo from '../CardInfo.js'
import AsteroidColumn from './AsteroidColumn.jsx'
import EvaluationColumn from './EvaluationColumn.jsx'
import React, { type JSX } from 'react'
import type { AsteroidInterface } from '../AsteroidInterface.js'

interface AsteroidCardProps {
  element: AsteroidInterface
  showDestructionButton: boolean
}

export default function AsteroidCard({
  element,
  showDestructionButton = true,
}: AsteroidCardProps): JSX.Element {
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
