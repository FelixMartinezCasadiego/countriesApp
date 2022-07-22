import { retriveCountries } from '../../api';
import { useState } from 'react';
import { useEffect } from 'react';
import { Items } from './Items';
import '../../style.css';
import { Search } from '../pages/Search';

export default function ItemList() {

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    retriveCountries()
      .then((resp) => setCountries(resp))
      .catch((err) => {throw new Error(err)})
  }, [])  

  return (

    <div>

      <div>
        <Search />
      </div>

      <div className='ItemListOrden'>
        {
          countries.map((country) => <Items key={country.name.official} country={country} /> )
        }
      </div>

    </div>

  );
}

