import React, { Component } from 'react';
// import { Container, Row, Col } from 'reactstrap';
import {displayCake} from '../api/shop_api'

class Gallery extends React.Component {
  constructor() {
      super()
      this.state={
        cakes:[],
      
       }
     this.fectchCakeList = this.fetchCakeList.bind(this)
    }

   componentDidMount () {
     this.fectchCakeList()
   }

   fetchCakeList(){
       displayCake()
      .then(cakes=> this.setState({cakes:cakes}))
      .catch(err => this.setState({errorMessage: err.message}))
    }
      
    render() { 
        return (
          <div>
          <ul>
          {this.state.cakes.map((cake, i) =>
            <li>
              <img src={`images/${cake.img_url}`} alt=""/>
              <h3>{cake.name}</h3>
              <h4>{cake.price}</h4>
            </li>
          )}
         </ul>
         </div> 

         )
    }
}

export default Gallery 