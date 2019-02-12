import React, { Component } from 'react';
// import { Container, Row, Col } from 'reactstrap';
import displayCake from '../api/shop_api'

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
      console.log("hit")
      return displayCake()
      .then(cakes=> {
        console.log('cakes.App.js',cakes)
        this.setState({cakes:cakes})
      })
      .catch(err => {
        this.setState({errorMessage: err.message})
      })
    }
      
    render() { 
        return (
          <div>
            gallery
          </div> 
        //   <ul>
        //   {this.state.shop.map((cake, i) =>
        //     <li>
        //       <img src={`images/${cake.img_url}`} alt=""/>
        //     </li>
        //   )}
        //  </ul>

         )
    }
}

export default Gallery 