import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import Header from './Header'
import { Jumbotron, Button,Container} from 'reactstrap';
import Home from './Home'
import Gallery from './Gallery'
import Cake from './Cake'




class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>
      <Container>
      <Jumbotron>
        {/* <Home /> */}
        {/* <Gallery /> */}
        <Cake />
      </Jumbotron>
      </Container>
    </div>
      </div>
    )
  }
}
export default App