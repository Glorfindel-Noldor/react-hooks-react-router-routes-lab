import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Movies from "./Movies";
import Directors from "./Directors";
import Actors from "./Actors";

function App() {
  return (
  <div>
    <NavBar/>
    <Switch>
      <Route exact path={'/'} >
        <Home/>
      </Route>
      <Route exact path={'/movies'} >
        <Movies/>
      </Route>
      <Route exact path={'/directors'}>
        <Directors/>
      </Route>
      <Route exact path={'/actors'} >
        <Actors/>
      </Route>
    </Switch>
  </div>
  )
}

export default App;
