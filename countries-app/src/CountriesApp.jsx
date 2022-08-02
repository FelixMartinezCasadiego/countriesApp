import React from 'react';
import { NavBar } from './components/pages/NavBar';
import {Routes , Route } from 'react-router-dom';
import {Home} from '../src/pages/Home';
import { CountriesRegion } from './pages/CountriesRegion';
import { Country } from './pages/Country';

export const CountriesApp = () => {
  return (
    <>
      <NavBar />
      <main>
        <Routes>

          <Route exact path='/' element={<Home />} />

          <Route exact path="/region/:id" element={<CountriesRegion />} />

          <Route path='/country/:id' element={<Country />} />

          <Route path='/*' element={<Home />} />
        
        </Routes>
      </main>
    </>
  )
}
