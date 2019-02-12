import React, { Component } from 'react';
// import { Container, Row, Col } from 'reactstrap';

class Gallery extends React.Component {
  constructor() {
      super()
      this.state={
        cakes:[]
      }
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