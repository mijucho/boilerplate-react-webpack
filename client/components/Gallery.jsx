import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
            <Row className='rowMargin'>
          <Col xs="4"><img className='cakeImg' src="images/cake1.jpg" alt=""/></Col>
          <Col xs="4"><img className='cakeImg' src="images/cake2.jpg" alt=""/></Col>
          <Col xs="4"><img className='cakeImg' src="images/cake3.jpg" alt=""/></Col>
        </Row>
        <Row className='rowMargin'>
          <Col xs="4"><img className='cakeImg' src="images/cake4.jpg" alt=""/></Col>
          <Col xs="4"><img className='cakeImg' src="images/cake5.jpg" alt=""/></Col>
          <Col xs="4"><img className='cakeImg' src="images/cake6.jpg" alt=""/></Col>
        </Row>
        <Row className='rowMargin'>
          <Col xs="4"><img className='cakeImg' src="images/cake7.jpg" alt=""/></Col>
          <Col xs="4"><img className='cakeImg' src="images/cake8.jpg" alt=""/></Col>
          <Col xs="4"><img className='cakeImg' src="images/cake9.jpg" alt=""/></Col>
        </Row>
        </div>
         );
    }
}
 
export default Gallery ;