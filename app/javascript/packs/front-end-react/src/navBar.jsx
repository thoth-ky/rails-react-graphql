import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

class NavBar extends Component {
  render() { 
    return ( 
      <div>
        <div>Books</div>
        <Link to="/">New</Link>
        <Link to="/list">All</Link>
      </div>
     );
  }
}
 
export default withRouter(NavBar);