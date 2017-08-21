import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
// screens
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{backgroundColor:'white'}}>
      <Scene hideNavBar={true}>
        <Scene key="auth">
          <Scene key="login" component={LoginForm} title="Please Login" />
        </Scene>
        <Scene key="main">
          <Scene key="employeeList" component={EmployeeList} title="Employees"/>
        </Scene>
      </Scene>
    </Router>
  )
}

export default RouterComponent;