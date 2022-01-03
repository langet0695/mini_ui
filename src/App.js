import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import React from 'react';
import HomePage from './pages/MiniPage';
import ValidMinis from './data/ValidMinis.js'

import TestMiniPage from './pages/TestMiniPage'



function App() {  

  return (

      <body class="App"  >
            <Router>
                <Route path="/" exact>
                  {/* <HomePage ValidMinis={ValidMinis}/> */}
                  <TestMiniPage ValidMinis={ValidMinis}/>
                </Route>
            </Router>
      </body>
  );
}

export default App;
