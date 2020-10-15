  
import Axios from 'axios'


export const pokeApiClient = Axios.create({
    baseURL:'https://pokeapi.co/api/v2/',
    headers:{
        'Content-Type': 'application/json'
    }
})