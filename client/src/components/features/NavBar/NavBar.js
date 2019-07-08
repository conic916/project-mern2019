// nawigacja aplikacji 
import React from 'react';
import { Link } from 'react-router-dom'; // przekierowuje bez przeladowania 

class NavBar extends React.Component {

  render() {
    return (
      <div>
        <Link to='/'>Home</Link>
        <Link to='/posts'>Posts</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/NewPosts'>Add post</Link>
      </div>
    );
  }

}

export default NavBar;