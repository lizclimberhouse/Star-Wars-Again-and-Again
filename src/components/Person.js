import React, { Component } from 'react';
import { Header, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class Person extends Component {

  state = { person: {} }

  componentDidMount() {
    const id = parseInt(this.props.match.params.id, 10 )
    axios.get(`https://swapi.co/api/people/${id}`)
      .then( res => {
        this.setState({ person: res.data })
      })
      .catch(err => {
      })
  }

  render() {
    const { person } = this.state;
    return (
      <Container>
        <Header as='h1' textAlign='center'>Person Component</Header>
        { person.name ?
        <p>{person.name}</p>
        :
        null
        }
      </Container>
    );
  }
}

export default Person;
