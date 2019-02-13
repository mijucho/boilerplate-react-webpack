import React from "react";
import { Button } from "reactstrap";

const Home = () => {
  return (
    <section id="content">
      <div className="col-12">
        <img className="card-img" src="/images/cake8.png" alt="Card image" />
        <div className="card-img-overlay">
          <div id="homebtn">
            <h2 className="card-title">Eedo-Cake</h2>
            <a
              className="btn btn-outline-light"
              href="http://localhost:3000/#/gallery"
              role="button"
            >
              Order Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home;
