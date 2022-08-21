import React from 'react';

export const CountryCard = ({country}) => {

  console.log(country.translations)
  return (

    <>
    
    <div>

      <button> <i className="fa-solid fa-arrow-left"></i> Back</button>

      <figure>
        <img src={country.flags.svg} alt={country.name.common} />
      </figure>
  
      <h1> {country.name.common} </h1>

      <div>

        <div>
          <h4> Native Name: </h4>
          <p> {/* {country.name.common}  */}</p>
        </div>

        <div>
          <h4> Population: </h4>
          <p> {country.population} </p>
        </div>

        <div>
          <h4> Region: </h4>
          <p> </p>
        </div>

        <div>
          <h4> Sub Region: </h4>
          <p> </p>
        </div>

        <div>
          <h4> Capital </h4>
          <p> </p>
        </div>

        <div>
          <h4> Top Level Domain: </h4>
          <p> </p>
        </div>

        <div>
          <h4> Currencies: </h4>
          <p> </p>
        </div>

        <div>
          <h4> Languages: </h4>
          <p> </p>
        </div>

      </div>

      <div>
        <div>
          <h4> Border countries: </h4>
          <div>
            <button> {country.borders} </button>
          </div>
          
        </div>
      </div>

    </div>
    
    </>

  )
}
