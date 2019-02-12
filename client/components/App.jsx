import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import Header from './Header'
import { Jumbotron, Button,Container} from 'reactstrap';
import Home from './Home'
import Gallery from './Gallery'
import Cake from './Cake'
import { HashRouter as Router, Route } from "react-router-dom";
import {displayCake} from '../api/shop_api'


class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      list:[]
    }
this.fectchCakeList = this.fetchCakeList.bind(this)
  }

  fetchCakeList(){
    return displayCake()
    .then(cakes=> {
      console.log('cakes.App.js',cakes)
      this.setState({list:cakes})
    })
    .catch(err => {
      this.setState({errorMessage: err.message})
    })
  }
  render() {
    return (
      
      <Router>
        <div>
         <Header />
         <div>
     
        </div>
    
         <div >
          <Route exact path="/" component={Home} />
         </div>
         <div >
          <Route exact path="/gallery" component={Gallery} />
         </div>
         <div >
          <Route path="/gallery/cake" component={Cake} />
          </div>
      </div>
      </Router>

      
    )
  }
}
export default App