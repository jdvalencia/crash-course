  
import React, { useState } from 'react';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CookieClicker, useInterval } from './Components/Cookie-clicker/CookieClicker';
import { CookiePersonalization } from './Components/CookiePersonalization/CookiePersonalization';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { NavBarComponent } from './Components/NavbarComponent';
import { Purchasable } from './Components/Purchasable/Purchasable';
import { ChuckNorrisJoke } from './Components/ChuckNorrisJoke/ChuckNorrisJoke';
import { Pokemon } from './models/pokemon';
import { PokemonDisplay } from './Components/PokemonDisplay/PokemonDisplay';
import { Pokedex } from './Components/Pokedex/Pokedex';

function App() {
  const [cookiePState, changeCookiePState] = useState({ cookieName: '', storeName: '', userName: '' })
  const [cookies, changeCookies] = useState<number>(100000);
  const [cookiesPerSecond, changeCookiesPerSecond] = useState(0)
  const [buildingsMap, changeBuildingsMap] = useState({ grandmas: 0, bakeries: 0, farms: 0, mines: 0, factories: 0 })
  const [boughtPages, changeBoughtPages] = useState<any>({ personalization: false, chuckNorris:false })

  const buyPage = (name: string, price: number) => {
    let newPages: any = { ...boughtPages }
    newPages[name] = true
    changeBoughtPages(newPages)
    changeCookies(cookies - price)
  }

  let totalCookieState = {
    cookies,
    changeCookies,
    cookiesPerSecond,
    changeCookiesPerSecond,
    buildingsMap,
    changeBuildingsMap
  }

  useInterval(() => { 
    changeCookies(cookies + cookiesPerSecond / 10)
  }, 100)

  return (
    <div className="App">
      <Router>
        <NavBarComponent cookies={cookies} />
        <Switch>
          <Route exact path='/' render={() => <CookieClicker {...totalCookieState} cookiePState={cookiePState} />} />
          <Route path='/personalization' render={(props) => {
            return (
              <Purchasable buyPage={()=>buyPage('personalization', 10000)} price={10000} cookies={cookies} purchased={boughtPages.personalization} 
              render={(p) => {
                return <CookiePersonalization {...props} cookiePState={cookiePState} changeCookiePState={changeCookiePState} />
              }} />
            )
          }} />
          <Route path='/ChuckNorris' render={(props)=>{
            return <Purchasable buyPage={()=>buyPage('chuckNorris', 1000)} price={1000} cookies={cookies} purchased={boughtPages.chuckNorris} 
            render={(p)=>{
              return <ChuckNorrisJoke/>
            }}/>
          }}/>
          <Route path='/pokedex'>
            <Pokedex/>
          </Route>
        </Switch>
        <ToastContainer />
      </Router>
    </div>
  );
}

export default App;