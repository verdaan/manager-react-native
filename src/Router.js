import React, { Component } from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
// screens
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{backgroundColor:'white'}}>
      <Scene hideNavBar={true}>

        <Scene key="auth">
          <Scene key="login" component={LoginForm} title="Please Login" />
        </Scene>

        <Scene key="main">
          <Scene
            initial
            key="employeeList"
            component={EmployeeList}
            title="Employees"
            rightTitle="Add"
            onRight={() => Actions.employeeCreate()}
          />
          <Scene
            key="employeeCreate"
            title="Create Employee"
            component={EmployeeCreate}
          />
        </Scene>

      </Scene>
    </Router>
  )
}

export default RouterComponent;
