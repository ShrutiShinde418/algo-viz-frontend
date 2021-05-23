import React from "react";
import { Redirect, Switch } from "react-router";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from '../views/auth/Login'; 
import Signup from '../views/auth/Signup'; 
import Dashboard from "../views/Dashboard";

class App extends React.Component {
state={auth:false}
componentDidMount(){
  let token=localStorage.getItem('token')
  if(token)
  {
    this.setState({auth:true})
  }
}
  render() {
    console.log(this.state.auth)
    let router=(
    <Router>
      <Switch>
        {/* <Login />  */}
      <Route exact path='/' component={Login} />
      <Route exact path='/signup' component={Signup} />
      {/* <Route exact path='/logout' component={Logout}  />
      <Route exact path='/dashboard' component={Dashboard}  /> */}
        {/* <MainLayout />
        <Sidebar /> */}<Redirect to ='/' />
      </Switch>
    </Router>
    )
    if(this.state.auth){
    
      router=(
        <Router>
      <Switch>
    <Route exact path='/dashboard' component={Dashboard}  />
      <Redirect from='/' to ='/dashboard' />
      
      
      </Switch>
    </Router>
      )
    }
    return (
      <div>
        {router}
      </div>
    );
  }
}

export default App;
