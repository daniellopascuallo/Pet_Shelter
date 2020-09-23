import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router } from '@reach/router';
import Main from './views/Main';
import New from './views/New';
import Show from './views/Show';
import Edit from './views/Edit';


function App() {
  return (
    <div className="App">
      <h1>Pet Shelter</h1>
      <Router>
        <Main path="/" />
        <New path="/new" />
        <Show path="/pet/:id" />
        <Edit path="/edit/:id" />
      </Router>
    </div>
  );
}

export default App;
