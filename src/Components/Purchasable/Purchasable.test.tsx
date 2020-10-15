import React from 'react';
import { shallow } from 'enzyme';
import {IPurchasableProps, Purchasable} from './Purchasable';


describe('<Purchasable> with no props', ()=> {

    it('should match previous snapshot?', ()=> {
        //@ts-ignore
        let wrapper = shallow(<Purchasable/>)
        expect(wrapper.html()).toMatchSnapshot();
    })
})

const propsUtil = (cookies: number, price: number, purchased:boolean):IPurchasableProps=> {
    let props = {

        render: jest.fn((()=><div>rendered</div>)),
        buyPage: jest.fn(()=> {
            props.purchased = true;
            props.cookies -= price}),
        cookies, 
        price, 
        purchased
    }
    return props;
}

describe('<Purchasable> with props', ()=>{

    it('should show purchase html when purchased is false', ()=>{
        let props = propsUtil(0,0,false)
        let wrapper = shallow(<Purchasable {...props} />)
        expect(wrapper.length).toBe(1)
        expect(wrapper.children().length).toBe(3)
        expect(wrapper.children().contains(<button disabled={props.cookies < props.price} onClick={props.buyPage}>Buy Now</button>)).toBeTruthy()
    })

    it('should call props.render if purchased is true', ()=>{
        let props = propsUtil(0,0,true)
        let wrapper = shallow(<Purchasable {...props} />)
        expect(props.render).toBeCalled()
        expect(wrapper.text()).toMatch('rendered')
    })

})