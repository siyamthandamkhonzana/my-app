import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Landing from './components/landing';
import CharityList from './components/charityList';

// import './App.css';, { Component }

function App() {
  return (
    <BrowserRouter>
    <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/Charities" component={CharityList} />
        {/* <Route path="/Contact" component={Contact} />
        <Route path="/Products" component={Products} /> */}
    </Switch>
</BrowserRouter>
    // <div className="App">
    //   <Landing />
    // </div>
  )
}


export default App;
//npm start