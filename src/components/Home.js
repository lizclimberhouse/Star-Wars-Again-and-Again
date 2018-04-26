import React, { Component } from 'react';
import { Header, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <Header as='h1' textAlign='center'>Home</Header>
        <p>Lots of other Star Wars App info here, and buttons!</p>
      </div>
    );
  }
}

export default Home;