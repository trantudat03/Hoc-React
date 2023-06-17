//import logo from './logo.svg';
import React, {Fragment} from 'react';
import './App.css';
import Header from './compoments/Header';
import Todos from './compoments/ToDos';
const App = () => {
  return (
    <Fragment>
        
        <Header />
        <Todos/>
        
    </Fragment>
    
  )
}

export default App;
