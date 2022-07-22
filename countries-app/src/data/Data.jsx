import { useState } from "react";
import { useEffect } from "react";
import ItemList from "../components/itemList/ItemList";

const Data = () => {

    const [countries, setCountries] = useState([]);

    const url = `https://restcountries.com/v3.1/all` ;

    useEffect( () => {
        ApiCountries();
    }, [])
    
    const ApiCountries = async() =>{
        try {
            const fetchCountries = await fetch(url);
            const countriesJson = await fetchCountries.json();
            setCountries(countriesJson)
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <>
            <ItemList countries={countries} />
        </>
    )
}

export default Data;
