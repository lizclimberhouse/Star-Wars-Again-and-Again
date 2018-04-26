import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Person extends Component {
  render() {
    // const { people } ** can I call the one perosn in the FetchPeople component?
    return (
      <Header as='h1' textAlign='center'>
        Person
        <Link to='/'> Home</Link>

      </Header>
    );
  }
}

export default Person;
