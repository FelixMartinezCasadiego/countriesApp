import React from 'react';
import { useSearchParams } from 'react-router-dom';
import ItemList from '../components/itemList/ItemList';

export const Home = () => {

  const [searchParams] = useSearchParams();
  
  const q = searchParams.get('q');

  return (
    <>
      <main>

        <ItemList region={null} q={q} />

      </main>
    </>

  )
}
