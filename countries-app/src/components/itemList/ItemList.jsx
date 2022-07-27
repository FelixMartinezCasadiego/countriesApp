import { retriveCountries, retriveCountryByRegion } from '../../api';
import { useState } from 'react';
import { useEffect } from 'react';
import { Items } from './Items';
import '../../style.css';
import { Search } from '../pages/Search';
/* import { useSearchParams } from "react-router-dom"; */

export default function ItemList({region}) {

  const [countries, setCountries] = useState([]);

/*   let [searchParams] = useSearchParams();
  const region = searchParams.get("region"); */

  useEffect(() => {
    if( region === null){
      retriveCountries()
      .then((resp) => setCountries(resp))
      .catch((err) => {throw new Error(err)})
    } else {
      retriveCountryByRegion(region)
      .then((resp) => setCountries(resp))
      .catch((err) => {throw new Error(err)})
    }

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

