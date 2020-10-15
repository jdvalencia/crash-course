import { chuckNorrisDBClient } from "."

export const chuckNorrisDBGetaJoke = async()=> {
    let result = await chuckNorrisDBClient.get('/random', {
        params: {
            'limitTo': '[nerdy]'
        }
    })
    // .catch((e) => {
    //     throw new Error('Not found' + e); 
    // })
    
    return result.data.value.joke;
}