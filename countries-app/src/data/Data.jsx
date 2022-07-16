import { useState } from "react";
import { useEffect } from "react";
import ItemList from "../components/itemList/ItemList";

const Data = () => {

    const [countries, setCountries] = useState([]);

    const url = `https://restcountries.com/v3.1/all` ;

    useEffect(() => {
      fetch(url).
        then((response) => response.json()).
            then((json) => setCountries(json));
    }, [])
    

    return (
        <>

            <div>
                {countries.map((country)=> {
                    return (
                        <div key={country.id}>
                            <ItemList data={country} />
                        </div>
                    )
                })}
            </div>
        
        </>
    )
}

export default Data;
