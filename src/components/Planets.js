import React from 'react';
import { Header, Container } from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Planets extends React.Component {
  state = { planets: [] }

  componentDidMount() {
    axios.get('https://swapi.co/api/planets/')
      .then( res => {
        this.setState({ planets: res.data.results })
        console.log(this.state.planets)
      })
      .catch(err => {
        // console.log(err.response)
      })
  }

  render() {
    const { planets } = this.state;
    return (
      <Container>
        <Header as='h1' textAlign='center'>Planets Component</Header>
        { planets[0] ?
        planets.map((planet) => {
          return(
          <Link key={planet.name} to={`/planet/${planet.name}`}>{planet.name}<br /></Link>
          )
        })
        :
        null
        }
      </Container>
    );
  }
}

export default Planets;

