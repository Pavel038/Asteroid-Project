import Navigate from './Navigate.jsx'
import React from 'react'

export default function Header() {
  return (
    <>
      <header style={{ borderBottom: '1px solid black', marginBottom: '26px' }}>
        <div className="header__container">
          <div className="header__container__text_left">
            <h1 style={{ marginBottom: '8px' }}>ARMAGGEDON V</h1>
            <p>
              Сервис мониторинга и уничтожения астероидов, опасно подлетающих к
              Земле.
            </p>
          </div>
          <Navigate />
        </div>
      </header>
    </>
  )
}
