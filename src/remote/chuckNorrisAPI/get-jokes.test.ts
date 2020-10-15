

import { mocked } from 'ts-jest/dist/utils/testing';
import {chuckNorrisDBGetaJoke} from './get-jokes'
import {chuckNorrisDBClient} from './index'

jest.mock('./index');
const mockClient = mocked(chuckNorrisDBClient, true)

beforeEach(()=> {
    mockClient.mockClear();
})

afterEach(() => {
    mockClient.mockClear();
})

describe('Chuck Norris DB get a joke', () => {
    it('should return a string on success', async() => {
        const resp = {data:{value:{joke: "No statement can catch the ChuckNorrisException."}}}
        mockClient.get.mockResolvedValue(resp);
        
        expect(await chuckNorrisDBGetaJoke()).toBe("No statement can catch the ChuckNorrisException.")
        expect(mockClient.get).toBeCalled()
    })

    it('should handle a 500 error appropiately', async() => {
        expect.assertions(1);
        mockClient.get.mockRejectedValue(new Error('500 error'));
        try{
            await chuckNorrisDBGetaJoke();
        }
        catch(e) {
            expect(e).toEqual(new Error('500 error'));
        }
    })
    
})