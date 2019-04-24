import React, { Component } from "react";
import { displayCake } from "../api/shop_api";
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
    const cake = this.state.cakes;
    const list = this.props.match.params.cake;

    return (
      <div className="cake">
        {cake[list] && (
          <div>
            <img src={`images/${cake[list].img_url}`} alt="" />
            <h4>
              {cake[list].name} ${cake[list].price}
            </h4>
            <h5>{cake[list].description}</h5>
            <button>Add to Cart</button>
          </div>
        )}
      </div>
    );
  }
}

export default Cake;
