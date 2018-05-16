import React, { Component } from 'react';
import { Header, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class Film extends Component {

  state = { film: {} }

  componentDidMount() {
    const id = parseInt(this.props.match.params.id, 10 )
    axios.get(`https://swapi.co/api/films/${id}`)
      .then( res => {
        this.setState({ film: res.data })
      })
      .catch(err => {
      })
  }

  render() {
    const { film } = this.state;
    return (
      <Container>
        <Header as='h1' textAlign='center'>Film Component</Header>
        { film.title ?
        <p>{film.title}</p>
        :
        null
        }
      </Container>
    );
  }
}

export default Film;
