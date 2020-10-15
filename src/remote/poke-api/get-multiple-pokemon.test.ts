import { mocked } from "ts-jest/dist/utils/testing";
import { Pokemon } from "../../models/pokemon";
import {pokeApiClient } from './index';
import {pokeApiGetPokemonByName, extractAbilityName, extractTypeName} from './get-multiple-pokemon';

// jest.mock('./index');
// //jest.mock('./get-multiple-pokemon');

// const mockClient = mocked(pokeApiClient, true);
// const mockAbilityName = mocked(extractAbilityName, true);
// const mockTypeName = mocked(extractTypeName, true);

// describe('poke Api Get PokemonByName', () => {

//     it('should return a specific Pokemon object on success', async()=> {
//         const resp = {data: {id: 1, order: 1, species: {name: 'Bulbasaur'}, sprites:{front_default: 'http://'}, types: ['Grass'] , abilities: ['Razor Leaf']}}
//         mockClient.get.mockResolvedValue(resp);
//         mockAbilityName({0: {ability: {name: 'Razor Leaf'}}});
//         mockAbilityName.mockReturnValue(['Grass']);
//         mockTypeName({0: {type: {name: 'Grass'}}});
//         mockTypeName.mockReturnValue(['Razor Leaf']);
//         console.log(await pokeApiGetPokemonByName('Bulbasaur'));
//         expect(mockClient.get).toBeCalled()
//         expect(await pokeApiGetPokemonByName('Bulbasaur')).toBe({id: 1, order: 1, name: 'Bulbasaur', picture: 'http://', types: ['Grass'], abilities: ['Razor Leaf']})
//     })  
// })