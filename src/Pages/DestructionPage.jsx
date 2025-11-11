import MainBody from '../Components/MainBody.jsx'
import FilterAsteroid from '../Components/FilterAsteroid.jsx'
import React from 'react'

export default function DestructionPage() {
  return (
    <>
      <FilterAsteroid />
      <div className="container">
        <MainBody />
        <div className="cart__container"></div>
      </div>
    </>
  )
}
