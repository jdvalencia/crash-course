import { Button } from '@material-ui/core';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { chuckNorrisDBGetaJoke } from '../../remote/chuckNorrisAPI/get-jokes';

export const ChuckNorrisJoke:FunctionComponent<any> = (props) => {

    const [joke, changeJoke] = useState('This is a joke')

    const getNewJoke = async() => {
        let newJoke = await chuckNorrisDBGetaJoke()
        changeJoke(newJoke);
    }
    

    useEffect(() => {
        toast.dark(joke,{position: 'top-center'});
    },[joke])

    return(
        <div>
            <Button color="secondary" onClick={getNewJoke} > Get A New Joke</Button>
        </div>
    )
}