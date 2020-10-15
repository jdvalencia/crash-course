import { pokeApiClient } from ".";
import { Pokemon } from "../../models/pokemon";


export const pokeApiGetMultiplePokemon = async (limit:number, offset:number):Promise<Pokemon[]> => {
    let namesResponse = await pokeApiClient.get('/pokemon', {
        params:{
            limit,
            offset
        }
    })

    let pokemons:Promise<Pokemon>[] = namesResponse.data.results.map((ele:any)=>{
        return pokeApiGetPokemonByName(ele.name)
    })

    return await Promise.all(pokemons)//wait for all promises in an array to finish

}



export const pokeApiGetPokemonByName = async (name:string):Promise<Pokemon> => {
    console.log(name);
    
    let pokemonResponse = await pokeApiClient.get(`/pokemon/${name}`)
    let {data} = pokemonResponse
    console.log(data + ' <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<');
    let newType = extractTypeName(data.types);
    let newAbilities = extractAbilityName(data.abilities);
    return {
        id: data.id,
        order: data.order,
        name: data.species.name,
        picture: data.sprites.front_default,
        types: newType,
        abilities: newAbilities
    }//should be made into a util function for converting

}

export const extractTypeName = (arr:any) => {
    let newArr;  
    return newArr = arr.map((ele:any)=> {
        return ele.type.name
    })
}

export const extractAbilityName = (arr:any) => {
    let newArr;
    return newArr = arr.map((ele:any)=> {
        return ele.ability.name
    })
}