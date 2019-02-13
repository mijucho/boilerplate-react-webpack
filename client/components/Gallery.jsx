import React, { Component } from 'react';
// import { Container, Row, Col } from 'reactstrap';
import {displayCake} from '../api/shop_api'
import {Link} from 'react-router-dom'

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
        
         <div className='cakeGallery'>
        
          {this.state.cakes.map((cake, i) =>
           <p>
               <img src={`images/${cake.img_url}`} alt=""/>
               <h4>{cake.name}  ${cake.price}</h4>
         
           </p>
          )}
      
        </div>
  

         )
    }
}

export default Gallery 