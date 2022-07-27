import React from 'react';
import { NavBar } from './components/pages/NavBar';
import {Routes , Route } from 'react-router-dom';
import {Home} from '../src/pages/Home';
import { CountriesRegion } from './pages/CountriesRegion';

export const CountriesApp = () => {
  return (
    <>
      <NavBar />
      <main>
        <Routes>

          <Route exact path='/' element={<Home />} />

          <Route exact path="/region/:region" element={<CountriesRegion />} />
        
        </Routes>
      </main>
    </>
  )
}
