import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/scss/fontawesome.scss';
import '@fortawesome/fontawesome-free/scss/regular.scss';
import '@fortawesome/fontawesome-free/js/all';
import './core.scss'
<<<<<<< HEAD
import Page from './layouts/main';
import Header from './components/Header';
import Footer from './components/Footer';
=======
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import {Switch, Route} from 'react-router-dom';
import { withRouter } from 'react-router-dom'
>>>>>>> ee9f5b7c1f6e049b8c3edac2781fce281d69fc54


class App extends React.Component {
<<<<<<< HEAD
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     isAuthenticated:false
  //   };
  // }

  // userHasAuthenticated = authenticated => {
  //   this.setState({isAuthenticated: authenticated});
  // }
  // 
  //   const childProps = {
  //     isAuthenticated: this.state.isAuthenticated,
  //     userHasAuthenticated: this.userHasAuthenticated
  //   };
=======
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
>>>>>>> ee9f5b7c1f6e049b8c3edac2781fce281d69fc54
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

<<<<<<< HEAD
export default App;
=======
export default withRouter(App);
>>>>>>> ee9f5b7c1f6e049b8c3edac2781fce281d69fc54
