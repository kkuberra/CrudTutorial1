import React from 'react';
import { Link } from 'react-router-dom'

const LandingPage = () => (
  <div class="jumbotron">
    <h1 className="display-3">Kyle's Store</h1>
    <p className="lead">Buy Some Stuff!</p>
    <hr className="my-4"></hr>
    <p>Here you can Create, Read, Update and Delete Products! </p>
    <p className="lead">
      <Link to='/products' className="btn btn-primary btn-lg" href="#" role="button">See the Goods</Link>
    </p>
  </div>
)

export default LandingPage;
