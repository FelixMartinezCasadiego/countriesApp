import React from 'react';
import ItemList from '../components/itemList/ItemList';
import { NavBar } from '../components/pages/NavBar';
import {useParams} from 'react-router-dom';

export const CountriesRegion = () => {

  const {region} = useParams();

  return (
    <>
      <NavBar />
      <main>

        <ItemList region={region} />

      </main>
    </>

  )
}
