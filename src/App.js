import React from 'react';
import Navigation from './components/navigation';
import UserList from './components/userList';
import About from './components/about';
import { Route } from 'react-router-dom';
import './App.scss';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, logIn } from './actions';

function App() {
  
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  let fullUserList = [];

  axios.get('https://reqres.in/api/users')
  .then(function (response) {
    fullUserList = fullUserList.concat(response.data.data);
  });

  axios.get('https://reqres.in/api/users?page=2')
  .then(function (response) {
    if(!isLogged) {
      fullUserList = fullUserList.concat(response.data.data);
      dispatch(getUsers(fullUserList));
      dispatch(logIn());
    }
  })
  .catch(function (error) {
  });

  return (
    <div className="App">
        <Navigation></Navigation>
        <Route exact path="/" component={UserList}></Route> 
        <Route path="/about" component={About}></Route> 
    </div>
  )
}

export default App;