import React, { Component } from 'react';
import Logo from './klogo.js';
import './App.css';
import {Admin, Resource} from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import { UserList } from './component/UserList.js';
import { UserCreate } from './component/UserCreate.js';
import { UserEdit } from './component/UserEdit.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Logo />
          <h1 className="App-title">Welcome to Kyruus</h1>
        </header>
        <Admin dataProvider = {restProvider('http://localhost:3000')}>
        <Resource 
        name='users' 
        list = {UserList} 
        create={UserCreate} 
        edit = {UserEdit}>
        </Resource>
        </Admin>
      </div>
    );
  }
}

export default App;
