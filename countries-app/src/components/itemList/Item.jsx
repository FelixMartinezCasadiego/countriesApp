
import { Link } from 'react-router-dom';
import '../../style.css';

export const Item = ( {country} ) => {


  return (  


    <Link to={`/country/${country.name.official}`} className='cardMedia'>

      <figure>
        <img src={country.flags.svg} alt={country.name.common} />
      </figure>

      <div>
        <h3> {country.name.official} </h3>

        <p> <b> Population: </b> {country.population} </p>
        <p> <b> Region: </b> {country.region} </p>
        <p> <b> Capital: </b> {country.capital} </p>
      </div>


    </Link>

  )
}
