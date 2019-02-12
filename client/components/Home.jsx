import React from 'react'
import {Button} from 'reactstrap'


const Home = () => {
    return ( 
      <section id="content">
      <div class ="col-12"> 
           <img class="card-img" src="/images/cake8.png" alt="Card image"/>
          <div class="card-img-overlay">
             <div id="homebtn">
               <h5 class="card-title">Eddo-Cake</h5>
               <a class="btn btn-outline-light"  href="http://localhost:3000/#/gallery" role="button">Order Now</a>
            </div>
           </div>
       </div> 
    </section> 
    )
  }
export default Home;
