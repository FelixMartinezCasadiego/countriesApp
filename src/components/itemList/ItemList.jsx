import { retriveCountries, retriveCountryByName, retriveCountryByRegion } from '../../api';
import { useState } from 'react';
import { useEffect } from 'react';
import { Item } from './Item';
import '../../style.css';
import { Search } from '../pages/Search';

export default function ItemList({region, q}) {

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    
    if( q !== null && q !== '' ){
      retriveCountryByName(q)
        .then((resp) => setCountries(resp))
        .catch((err) => {throw new Error(err)})
    } else if (region === null){
      retriveCountries()
        .then((resp) => setCountries(resp))
        .catch((err) => {throw new Error(err)})
    } else {
      retriveCountryByRegion(region)
        .then((resp) => setCountries(resp))
        .catch((err) => {throw new Error(err)})
    } 
    
  }, [region, q])  

  return (

    <div>

      <div>
        <Search />
      </div>

      <div className='ItemListOrden'>
        {
          countries.map((country) => <Item country={country} key={country.name.official} /> )
        }
      </div>

    </div>

  );
}

