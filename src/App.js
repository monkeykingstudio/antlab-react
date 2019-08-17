import React from 'react';
import {useRoutes} from 'hookrouter';

import 'bulma';
import './scss/styles.scss'

import Home from './components/Home/index';
import QuatreCentQuatre from './components/404/index';

const routes = {
  // '/': () => <Navbar id="Login" />,
  '/home': () => <Home id='Home'/>,
};

const App = () => {
  const routeResult = useRoutes(routes);
  return (
   routeResult || <QuatreCentQuatre />
  );
}

export default App;
