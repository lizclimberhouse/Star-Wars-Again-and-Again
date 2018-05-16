import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import header from '../images/header.jpg';

class NavBar extends Component {
  rightNavs = () => {
    return (
      <Menu.Menu position='right'>
      </Menu.Menu>
    );
  }

  render() {
    return (
      // <div >
        <Menu pointing secondary>
          <Link to='/'>
            <Menu.Item name='home' />
          </Link>
          <Link to='/people'>
            <Menu.Item name='people' />
          </Link>
          <Link to='/films'>
            <Menu.Item name='films' />
          </Link>
          <Link to='/nothing'>
            <Menu.Item name='no match' />
          </Link>
          { this.rightNavs() }
        </Menu>
      // </div>
    );
  }
}

const styles = {
  header: {
    backgroundColor: 'black',
    backgroundImage: `url(${header})`,
    backgroundRepeat: 'no-repeat',
  },
  text: {
    color: 'white',

  }
}

export default NavBar;
