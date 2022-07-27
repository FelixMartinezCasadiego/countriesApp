import React from 'react';
import ItemList from '../components/itemList/ItemList';
import { NavBar } from '../components/pages/NavBar';

export const Home = () => {

  return (
    <>
      <NavBar />
      <main>

        <ItemList region={null} />

      </main>
    </>

  )
}
