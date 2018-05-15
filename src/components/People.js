import React from 'react';
import { Header, Container } from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class People extends React.Component {
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
        <Header as='h1' textAlign='center'>People Component</Header>
        { people[0] ?
        people.map((person, i) => {
          return(
          <Link key={i} to={`/person/${(i+1)}`}>{person.name}</Link>
          )
        })
        :
        null
        }
      </Container>
    );
  }
}

export default People;

