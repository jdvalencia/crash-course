import { Button, Grid} from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { Pokemon } from '../../models/pokemon'
import { pokeApiGetMultiplePokemon } from '../../remote/poke-api/get-multiple-pokemon'
import { PokemonDisplay } from '../PokemonDisplay/PokemonDisplay'


export const Pokedex: React.FunctionComponent<any> = (props) => {
    const [pokemons, changePokemons] = useState<Pokemon[]>([{ id: 1, name: 'Charizard', order: 3, types: ['Fire', 'Flying'], picture: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png', abilities: ['blaze', 'solar-power'] },
    { id: 1, name: 'Charizard', order: 3, types: ['Fire', 'Flying'], picture: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png', abilities: ['blaze', 'solar-power'] },
    { id: 1, name: 'Charizard', order: 3, types: ['Fire', 'Flying'], picture: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png', abilities: ['blaze', 'solar-power'] },
    { id: 1, name: 'Charizard', order: 3, types: ['Fire', 'Flying'], picture: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png', abilities: ['blaze', 'solar-power'] },
    { id: 1, name: 'Charizard', order: 3, types: ['Fire', 'Flying'], picture: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png', abilities: ['blaze', 'solar-power'] },
    { id: 1, name: 'Charizard', order: 3, types: ['Fire', 'Flying'], picture: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png', abilities: ['blaze', 'solar-power'] }])
    const [limit, changeLimit] = useState<number>(30)
    const [offset, changeOffset] = useState<number>(0)

    let display = pokemons.map((ele) => {
        return (<Grid  item style={{display: 'flex', flexDirection:'row'}} xs={3}><PokemonDisplay pokemon={ele} /></Grid> )
    })

    useEffect(()=>{
        async function getData(){
            let newPokemons = await pokeApiGetMultiplePokemon(limit,offset)
            console.log(newPokemons);
            changePokemons(newPokemons);
            window.scrollTo(0,0);
        }
        getData()
    },[limit,offset])


    return (
        <>
        <Grid
            container
            direction="row"
            justify="center"
            >
            {display}
            
        </Grid>
        <br></br>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: "space-around" }}><Button variant="contained" color="primary" onClick={()=> {
            if(offset != 0) {
                changeOffset(offset - 30)
            } 
        }} >Previous</Button>
        <Button variant="contained" color="primary" onClick={()=>changeOffset(offset + 30 )} >Next</Button></div>
        
        </>
        
    )
}