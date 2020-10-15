import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Chip, makeStyles, Typography } from '@material-ui/core';
import React, { FunctionComponent } from 'react';
import { Pokemon } from '../../models/pokemon';

const types:any = {
    flying: {
        backgroundColor: '#A890F0'
    },
    fire: {
        backgroundColor: '#F08030'
    },
    normal: {
        backgroundColor: '#A8A878'
    },
    fighting: {
        backgroundColor: '#C03028'
    },
    water: {
        backgroundColor: '#6890F0'
    },
    grass: {
        backgroundColor: '#78C850'
    },
    poison: {
        backgroundColor: '#A040A0'
    },
    electric: {
        backgroundColor: '#F8D030'
    },
    ground: {
        backgroundColor: '#E0C068'
    },
    psychic: {
        backgroundColor: '#F85888'
    },
    rock: {
        backgroundColor: '#B8A038'
    },
    ice: {
        backgroundColor: '#98D8D8'
    },
    bug: {
        backgroundColor: '#A8B820'
    },
    dragon: {
        backgroundColor: '#7038F8'
    },
    ghost: {
        backgroundColor: '#705898'
    },
    dark: {
        backgroundColor: '#705848'
    },
    steel: {
        backgroundColor: '#B8B8D0'
    },
    fairy: {
        backgroundColor: '#EE99AC'
    },

}


const useStyles = makeStyles({
    root: {
        width: '80%',  
        backgroundColor: '#d2e1fa',
        marginTop: 15
    },
    media: {
        height: '200px',
    },
    ...types
});

interface IPokemonDisplayProps {
    pokemon: Pokemon
}

export const PokemonDisplay: FunctionComponent<IPokemonDisplayProps> = (props) => {
    const classes = useStyles();
    const { pokemon } = props

    return (
        <Card className={classes.root}>
                <CardMedia
                    className={classes.media}
                    image={pokemon.picture}
                    title={pokemon.name}
                />
                <CardContent>
                    <Typography variant='h6' component='h2'>ID: {pokemon.id}</Typography>
                    <Typography gutterBottom variant="h5" component="h3">
                        {pokemon.name}
                    </Typography>
                    <Chip className={classes[pokemon.types[0]]} label={pokemon.types[0]} />
                    {pokemon.types[1] && <Chip className={classes[pokemon.types[1]]} label={pokemon.types[1]} />}
                    <br/>
                    <Typography variant='h6' component='h4'>Abilities</Typography>
                    <Typography variant='h6' component='h5'><ul style={{ listStyleType: "none", padding: 0 }}>{pokemon.abilities.map((ele) => <li>{ele}</li>)} </ul></Typography>
                    
                </CardContent>
            
        </Card>
    )
}
