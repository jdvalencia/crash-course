  
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
import { Pokedex } from './Components/Pokedex/Pokedex';
import { ErrorCatching } from './Components/HOC-ErrorHandling/higher-order-error-boundary';
import { DontTouch } from './Components/DummyComponent/DontTouch';
import { GranularErrorBoundary } from './Components/GranularErrorBoundary/GranularErrorBoundary';
import { GlobalErrorBoundary } from './Components/GlobalErrorBoundary/GlobalErrorBoundary';

function App() {
  const [cookiePState, changeCookiePState] = useState({ cookieName: '', storeName: '', userName: '' })
  const [cookies, changeCookies] = useState<number>(100000);
  const [cookiesPerSecond, changeCookiesPerSecond] = useState(0)
  const [buildingsMap, changeBuildingsMap] = useState({ grandmas: 0, bakeries: 0, farms: 0, mines: 0, factories: 0 })
  const [boughtPages, changeBoughtPages] = useState<any>({ personalization: false, chuckNorris:false })
  const [btnClick, changeBtnClick] = useState(false);

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
        <GlobalErrorBoundary>
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
          <GranularErrorBoundary>
          <Route path='/TestingError' render={(props)=> { return <ErrorCatching btnClick={btnClick} render={(p)=>{ return <DontTouch btnClick={btnClick} changeBtnClick={changeBtnClick} /> }} /> }} />
          </GranularErrorBoundary>
          {/* <GranularErrorBoundary>
          <Route path='/TestingError' render={(p)=> {return <DontTouch/> }} />
          </GranularErrorBoundary> */}
        </Switch>
        </GlobalErrorBoundary> 
        <ToastContainer />
      </Router>
    </div>
  );
}

export default App;