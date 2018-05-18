import React, { Component } from 'react';
import { Header, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Film extends Component {

  state = { film: {} }

  componentDidMount() {
    const id = (this.props.match.params.id)
    axios.get(`https://swapi.co/api/films/?search=${id}`)
      .then( res => {
        this.setState({ film: res.data.results[0] })
      })
      .catch(err => {
        // console.log(err.response)
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
