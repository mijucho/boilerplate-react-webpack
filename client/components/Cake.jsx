import React, { Component } from "react";
import { displayCake } from "../api/shop_api";

import Form from "./Form";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

class Cake extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cakes: [],
      cakeId: null
    };
    this.fectchCakeList = this.fetchCakeList.bind(this);
  }

  componentDidMount() {
    console.log(this.props);

    this.fectchCakeList();
  }

  fetchCakeList() {
    displayCake()
      .then(cakes => this.setState({ cakes: cakes }))
      .catch(err => this.setState({ errorMessage: err.message }));
  }

  render() {
    return (
      <div className="cake">
        {this.state.cakes[this.props.match.params.cake] && (
          <div>
            <img
              src={`images/${
                this.state.cakes[this.props.match.params.cake].img_url
              }`}
              alt=""
            />
            <h4>
              {this.state.cakes[this.props.match.params.cake].name} $
              {this.state.cakes[this.props.match.params.cake].price}
            </h4>
            <h5>
              {this.state.cakes[this.props.match.params.cake].description}
            </h5>
          </div>
        )}
      </div>
    );
  }
}

export default Cake;
