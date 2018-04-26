import React, { Component } from 'react';
import { Header, Container } from 'semantic-ui-react';
import axios from 'axios';

class Home extends Component {
  state = { people: {} }

  componentDidMount() {
    axios.get('https://swapi.co/api/people/')
      .then( res => {
        this.setState({ people: res.data.results })
        // console.log(this.state.people)
      })
      .catch(err => {
        // console.log(err.response)
      })
  }

  render() {
    const { people } = this.state;
    // { people[0] ? console.log(people[0].name) : null }
    return (
      <Container>
        <Header as='h1' textAlign='center'>Home Component</Header>
        { people[0] ?
        people.map((character, i) => {
          return(
          <p key={i}>{character.name}</p>
          )
        })
        :
        null
        }
      </Container>
    );
  }
}

export default Home;

