import { createRoot } from 'react-dom/client'
import './App.css'
import { BrowserRouter } from 'react-router'
import React from 'react'
import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'
import AsteroidData from './AsteroidData.tsx'
import { Provider } from 'react-redux'
import { store } from './store/store.js'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      <AsteroidData />
      <Footer />
    </BrowserRouter>
  </Provider>,
)
