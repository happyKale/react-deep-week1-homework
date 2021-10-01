import React from 'react';
import './style.css';
import {Switch, Route} from "react-router-dom";
import styled from 'styled-components';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Header from './Header';

function App() {
  return (
    <Main>
      <Header/>
      <Switch>
        <Route path="/sign-up" exact component={Signup}/>
        <Route path="/login" exact component={Login}/>
      </Switch>
    </Main>    
  );
}

const Main = styled.div`
  border: 1px solid gray;
  width: 400px;
  height: 600px;
  margin: auto;
  margin-top: 30px;
`;

export default App;
