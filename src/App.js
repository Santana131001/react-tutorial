import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/scss/fontawesome.scss';
import '@fortawesome/fontawesome-free/scss/regular.scss';
import '@fortawesome/fontawesome-free/js/all';
import './core.scss'
import Page from './layouts/main';
import Header from './components/Header';
import Footer from './components/Footer';


class App extends React.Component {
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
  render() {
    return (
      <div className="container-fluid p-0">
        <div className="col-12 p-0">
          <Header />
        </div>
        <Page />
        <Footer />
      </div>
    )
  }
}

export default App;