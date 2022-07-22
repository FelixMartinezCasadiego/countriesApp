
import '../../style.css';

export const Items = ( {country} ) => {


  return (  


    <div className='cardMedia'>

      <figure>
        <img src={country.flags.svg} alt={country.name.common} />
      </figure>

      <div>
        <h3> {country.name.official} </h3>

        <p> <b> Population: </b> {country.population} </p>
        <p> <b> Region: </b> {country.region} </p>
        <p> <b> Capital: </b> {country.capital} </p>
      </div>


    </div>

  )
}
