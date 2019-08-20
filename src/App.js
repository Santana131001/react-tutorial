import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/scss/fontawesome.scss';
import '@fortawesome/fontawesome-free/scss/regular.scss';
import '@fortawesome/fontawesome-free/js/all';
import './core.scss'
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import {Switch, Route} from 'react-router-dom';
import { withRouter } from 'react-router-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      token : true
    }
  }
  componentDidMount(){
    if(this.state.token===true){
    
    }else{
      this.props.history.push("/login");
    }
  }
  render() {
    return (
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/dashboard' component={Dashboard} />
        <Route exact path='/' component={Dashboard} />
        <Route path='/about' component={Dashboard} />
      </Switch>
    )
  }
}

export default withRouter(App);
