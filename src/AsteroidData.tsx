import { type JSX, useEffect, useMemo, useReducer } from 'react'
import { Route, Routes } from 'react-router'
import AsteroidsPage from './Pages/AsteroidsPage.js'
import DestructionPage from './Pages/DestructionPage.js'
import App from './App.js'
import React from 'react'

export default function AsteroidData(): JSX.Element {



  return (
    <>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<AsteroidsPage />} />
          <Route path="destruction" element={<DestructionPage />} />
        </Route>
      </Routes>
    </>
  )
}
