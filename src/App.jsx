import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MovieList from './pages/MovieList'
import MovieDetails from './pages/MovieDetails'
import NotFound from './pages/NotFound'
import Watchlist from './pages/Watchlist'
import Header from './components/header'

function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<MovieList />}/>
          <Route path="/moviedetails/:id" element={<MovieDetails />}/>
          <Route path="/watchlist" element={<Watchlist />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
      
      
    </>
  )
}

export default App
