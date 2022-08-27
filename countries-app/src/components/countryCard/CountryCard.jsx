import React from 'react';
import { Link } from 'react-router-dom';

export const CountryCard = ({country}) => {


  console.log(country.borders.map((border) => border ))

  return (

    <>
    
    <div className='wrapCounntryCard'>

      <div className='btnBack'>
        <Link to={'/'} > <i className="fa-solid fa-arrow-left"></i> Back</Link>
      </div>
      

      <div className='countryCardContainer'>

        <figure className='figureCountryCard' >
          <img src={country.flags.svg} alt={country.name.common} />
        </figure>


        <div className='wrapCountryCard2'>

          <h1> {country.name.common} </h1>

          <div className='wrapCountryCard1'>
            
            <div>
            
              <div>
                <h4> Native Name: </h4>
                <p> {country.altSpellings[2]}  </p>
              </div>

              <div>
                <h4> Population: </h4>
                <p> {country.population} </p>
              </div>

              <div>
                <h4> Region: </h4>
                <p> {country.region} </p>
              </div>

              <div>
                <h4> Sub Region: </h4>
                <p> {country.subregion} </p>
              </div>

              <div>
                <h4> Capital </h4>
                <p> {country.capital} </p>
              </div>
            </div>

            <div>
              <div>
                <h4> Top Level Domain: </h4>
                <p> {country.tld} </p>
              </div>

              <div>
                <h4> Currencies: </h4>
                <p> {(Object.values(country.currencies)[0].name)} </p>
              </div>

              <div>
                <h4> Languages: </h4>
                <p> {Object.values(country.languages).map((language) => language ).join(' , ')} </p>
              </div>
            </div>

          </div>


          <div className='wrapCountryCard3'>
            <h4> Border countries: </h4>
            <div>
              {country.borders.map(border => <button className='btnCountryCard'>{border}</button>)}
            </div>
            
          </div>

        </div>
        
      

      </div>


    </div>
    
    </>

  )
}
