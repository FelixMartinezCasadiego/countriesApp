import { Container } from '@mui/material';
import React from 'react';
import ItemList from './components/itemList/ItemList';
import { NavBar } from './components/pages/NavBar';

export const CountriesApp = () => {
  return (
    <>
      <NavBar />
      <main>

        <ItemList />

      </main>
    </>

  )
}
