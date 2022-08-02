import React from 'react'

export const CountryCard = ({country}) => {
  return (
    <div>

        <h1> {country.name.common} </h1>

        <h2>
            {country.population}
        </h2>
    </div>
  )
}
