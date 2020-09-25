import React from 'react';
import './App.css';
import Time from './components/Time';
import Header from './components/Header';
import Page1 from './components/Page1';
import Page2 from './components/Page2'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {


  return (
    <Router>
      <div className="App">
        <Header />
        <Route path="/" exact render={() => <h2>Welcome to Test Page</h2>} />
        <Route path="/first" component={Page1} />

        <Route path="/first/firstTab" render={() => <h2>Title for future page</h2>} />
        <Route path="/first/secondTab" render={() => <h2>Title for future page 2</h2>} />
        <Route path="/first/thirdTab" render={() => <h2>Title for future page 3</h2>} />


        <Route path="/sec" component={Page2} />

        <Time />

      </div>
    </Router>
  );
}

export default App;
