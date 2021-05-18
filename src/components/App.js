import React from "react";
import { Switch } from "react-router";
//import MainLayout from "./MainLayout";
//import Sidebar from "./SideBar";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from '../views/auth/Login'; 
import Signup from '../views/auth/Signup'; 
import Logout from '../views/auth/Logout';

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
          <Route path='' component={Login} exact />
          <Route path='/signup' component={Signup} exact />
          <Route path='/logout' component={Logout} exact />
            {/* <MainLayout />
            <Sidebar /> */}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
