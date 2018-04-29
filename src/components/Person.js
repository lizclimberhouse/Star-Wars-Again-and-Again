import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Person extends Component {
  
  render() {
    const { person } = this.props;
    // const person = people.find( p => p.name === parseInt(this.props.match.params.id, 10) ) 
    // console.log(person.name)
    // const { people } ** can I call the one perosn in the FetchPeople component?
    return (
      <Header as='h1' textAlign='center'>
        <p>{person.name}</p>
        <Link to='/'> Home</Link>

      </Header>
    );
  }
}

export default Person;
