import React, { useEffect, useRef, useState } from 'react';
import Cookie from '../../assests/perfectCookie.png'

export function useInterval(callback: any, delay: any) {
    const savedCallback = useRef<any>();

    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}





export const cookieMultipliers = {
    grandmas: 1,
    bakeries: 12,
    farms: 100,
    mines: 500,
    factories: 1000
}

export const buildingCosts: any = {
    grandmas: 100,
    bakeries: 1000,
    farms: 10000,
    mines: 100000,
    factories: 1000000
}

interface ICookieClickerProps {
    cookiePState:{
        cookieName:string
        storeName:string
        userName:string
    }
    cookies:number
    changeCookies:(x:number)=>void
    cookiesPerSecond:number
    changeCookiesPerSecond:(x:number)=>void
    buildingsMap:any
    changeBuildingsMap:(x:any)=>void
}

export const CookieClicker: React.FunctionComponent<ICookieClickerProps> = (props) => {
    const {cookies,cookiesPerSecond,buildingsMap,changeBuildingsMap,changeCookies,changeCookiesPerSecond} = props

    //functions should be pure
    const calculateAutoCookies = (multipliers: any, buildings: any) => {
        let total = 0
        for (const key in buildings) {
            total += multipliers[key] * buildings[key]
        }
        changeCookiesPerSecond(total)
    }

    const buyBuilding = (buildingType: string, units: number) => {
        if (buildingCosts[buildingType] * units <= cookies) {
            changeCookies(cookies - buildingCosts[buildingType] * units)
            let newBuildingsMap: any = { ...buildingsMap }
            newBuildingsMap[buildingType] += units
            changeBuildingsMap(newBuildingsMap)
            calculateAutoCookies(cookieMultipliers, newBuildingsMap)
        }
    }

    


    return (
        <div>
            <h1>Welcome to {props.cookiePState.storeName ? props.cookiePState.storeName : "Cookie Clicker"}</h1>
            <div className="cookie-clicker-container">
                <figure>
                    <img onClick={() => changeCookies(cookies + 1)} src={Cookie} alt="A Chocolate Cookie made by grandma" height="150" width="150" />
    <figcaption>You have {cookies.toFixed(0)} number of {props.cookiePState.cookieName} Cookies</figcaption>
                    <figcaption>You are making {cookiesPerSecond} {props.cookiePState.cookieName} cookies per second</figcaption>
                </figure>
                <div className="button-container">
                    <div>
                        <p>Grandmas: {buildingsMap['grandmas']}</p>
                        <p>Grandmas are Producing {buildingsMap['grandmas'] * cookieMultipliers['grandmas']} cookies per second</p>
                        <button onClick={() => { buyBuilding('grandmas', 1) }}>Buy One</button>
                    </div>
                    <div>
                        <p>Bakeries: {buildingsMap['bakeries']}</p>
                        <p>bakeries are Producing {buildingsMap['bakeries'] * cookieMultipliers['bakeries']} cookies per second</p>
                        <button onClick={() => { buyBuilding('bakeries', 1) }}>Buy One</button>
                    </div>
                    <div>
                        <p>Farms: {buildingsMap['farms']}</p>
                        <p>farms are Producing {buildingsMap['farms'] * cookieMultipliers['farms']} cookies per second</p>
                        <button onClick={() => { buyBuilding('farms', 1) }}>Buy One</button>
                    </div>
                    <div>
                        <p>Mines: {buildingsMap['mines']}</p>
                        <p>mines are Producing {buildingsMap['mines'] * cookieMultipliers['mines']} cookies per second</p>
                        <button onClick={() => { buyBuilding('mines', 1) }}>Buy One</button>
                    </div>
                    <div>
                        <p>Factories: {buildingsMap['factories']}</p>
                        <p>factories are Producing {buildingsMap['factories'] * cookieMultipliers['factories']} cookies per second</p>
                        <button onClick={() => { buyBuilding('factories', 1) }}>Buy One</button>
                    </div>
                </div>
            </div>
        </div>
    )


}