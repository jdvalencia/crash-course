import React, { useEffect, useState } from 'react'
import { RouteComponentProps } from 'react-router'
import Store from '../../assests/Store.png'

interface ICookiePersonalizationProps extends RouteComponentProps {
    cookiePState:{
        cookieName:string
        storeName:string
        userName:string
    }
    changeCookiePState:(newState:any)=>void
}

export const CookiePersonalization: React.FunctionComponent<ICookiePersonalizationProps> = (props) => {

    
    //form toggle
    const [toggle, setToggle] = useState(false)

    //if its the first time here and no data has been filled out start in form mode
    useEffect(()=>{
        if(props.cookiePState.userName === ''){
            setToggle(true)
        }
    }, [])

    const formSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault()
        setToggle(false)
    }
    const inputChange = (e:any) => {
        let newState:any = {...props.cookiePState}
        newState[e.target.name] = e.target.value
        props.changeCookiePState(newState)
    }


    return (
        <div>
            <h1>Personalize Your Cookie Empire</h1>
            <div className="personalization-container">
                <figure>
                    <img src={Store} alt='A very poorly made drawing of a store front'/>
                </figure>
                {toggle ? //some bool flag in state
                    <div >
                        <form onSubmit={formSubmit} className='personalization-form-container' autoComplete="off">
                            <label htmlFor='cookie-name'>Cookie Name:</label>
                            <input name="cookieName" value={props.cookiePState.cookieName} id='cookie-name' type="text" onChange={ inputChange } required />
                            <label htmlFor='store-name'>Store Name:</label>
                            <input name="storeName" value={props.cookiePState.storeName} id='store-name' type="text" onChange={ inputChange } required />
                            <label htmlFor='user-name'>User Name:</label>
                            <input name="userName" value={props.cookiePState.userName} id='user-name' type="text" onChange={inputChange} required />
                            <button type='submit'>Done</button>
                        </form>
                    </div>
                    :
                    <div className="personalization-dislpay-container">
                        <button onClick={() => { setToggle(true) }}>Edit</button>
                        <p>Cookie Name: {props.cookiePState.cookieName}</p>
                        <p>Store Name: {props.cookiePState.storeName}</p>
                        <p>User Name: {props.cookiePState.userName}</p>
                    </div>}

            </div>
        </div>
    )
}