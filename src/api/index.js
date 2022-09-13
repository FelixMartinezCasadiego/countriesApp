import axios from "axios";

export const retriveCountries = () => axios.get('https://restcountries.com/v3.1/all').then(({data}) => data );

export const retriveCountryByName = (name) => axios.get(`https://restcountries.com/v3.1/name/${name}`).then(({data}) => data );

export const retriveCountryByRegion = (region) => axios.get(`https://restcountries.com/v3.1/region/${region}`).then(({data}) => data );
