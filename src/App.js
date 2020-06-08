import React, { Component,useEffect } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './componentes/login.jsx';
import HomePage from './componentes/Home.jsx';
import Profile from './componentes/profile';
import NavBar from './componentes/navigation.jsx';
import * as ROUTES from './router';
import './App.css';

function App() {
  const [authUser,setAuthUser] = React.useState(false);
  useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
    document.title = `You clicked ${count} times`;
  });
  return (
    <>
    {authUser?<NavBar /> : null}
    
    <Router> 
      <Route exact path={ROUTES.LANDING} component={Login} />
      <Route path={ROUTES.HOME} component={HomePage} />
         <Route path={ROUTES.PROFILE} component={Profile} />
      {/*<Route path={ROUTES.CLIENT} component={Client} />
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
