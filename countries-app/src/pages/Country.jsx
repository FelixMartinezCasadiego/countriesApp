import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { retriveCountryByName } from '../api';
import { CountryCard } from '../components/countryCard/CountryCard';

export const Country = () => {

    let params = useParams();

    let countryName = params.id;

    const [country, setCountry] = useState( [] );

    useEffect(() => {
        if(countryName !== null){
            retriveCountryByName(countryName)
                .then((resp) => setCountry(resp))
                .catch((err) => {throw new Error(err)})
        }

    }, [countryName])


  return (
    <>
        
        {country[0] ? (<CountryCard country={country[0]} />) : null }
        
     </>
  )

}
