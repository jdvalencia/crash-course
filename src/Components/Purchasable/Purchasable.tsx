
import React, { FunctionComponent, ReactElement } from 'react';

export interface IPurchasableProps {
    purchased:boolean
    render:(props:any)=>ReactElement
    price:number
    buyPage:()=>void
    cookies:number
}

//higher order component
export const Purchasable:FunctionComponent<IPurchasableProps> = (props) => {


    return (

        props.purchased ?
        props.render(props)//if we needed to pass in data fom the purchasable component we could easily
        :
        <div>
            <p>You need to purchase this page</p>
            <p>It costs {props.price} Cookies</p>
            <button disabled={props.cookies < props.price} onClick={props.buyPage}>Buy Now</button>
        </div>
    )
}