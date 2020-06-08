import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './componentes/login.jsx';

import * as ROUTES from './router';
import './App.css';

function App() {
  return (
    <>
    <Router> 
      <Route exact path={ROUTES.LANDING} component={Login} />
        {/* <Route path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.CLIENT} component={Client} />
       <Route path={ROUTES.SALE} component={InvoiceSale} />
       <Route path={ROUTES.SERVICE} component={Service} />
       <Route path={'/pay/:id'} component={Abonar} />
       <Route path={ROUTES.SIGN_UP} component={RegisterUser} /> */}
      {/*  <Route path={ROUTES.ERROR404} component={ERROR404} /> */}
      {/* <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} /> */}

  </Router>
         </>
  );
}

export default App;
