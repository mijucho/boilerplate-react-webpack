import React, { Component } from 'react';
import Form from './Form'
import { Container, Row, Col } from 'reactstrap';

class Cake extends Component {
    constructor(props) {
        super(props);
     
    }
    render() { 
        return ( 
         <div>
            <Row>
              <Col xs="6"><img className='cakeImg' src="images/cake1.jpg" alt=""/></Col>
              <Col xs="6">
              <h1>Januray</h1> <p>$60</p>
              This beautiful flower cake is our simple and stylish signature cake, packed with yummy buttercream <br/>
               <Form />
              </Col>
             
            </Row>
          
          </div>

         );
    }
}
 
export default Cake;