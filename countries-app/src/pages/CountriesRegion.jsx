import React from 'react';
import {useParams} from 'react-router-dom';
import '../style.css';
import ItemList from '../components/itemList/ItemList';

export const CountriesRegion = () => {

  let params = useParams();
  
  let regionID = params.id;
  
  return(

    <>
      <main>

        <ItemList region={regionID} />

      </main>
    </>

  )
}
