import React from 'react';
import { Header, Container, Button, Icon, Divider } from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Planets extends React.Component {
  state = { planets: [], showPlanet: false, planet: null }

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

  togglePlanet = () => {
      const { dispatch } = this.props;
      const { showPlanet } = this.state;
      this.setState({ showPlanet: !showPlanet })
  }

  render() {
    const { planets, showPlanet } = this.state;
    return (
      <Container>
        <Header as='h1' textAlign='center'>Planets Component</Header>
        { planets[0] ?
        planets.map((planet, i) => {
          return(
            <Container>
              <Button key={planet.name} onClick={() => this.togglePlanet()}><Icon name='plus'/>{planet.name}</Button>
              <div>
              { showPlanet ?
                <p>{planet.terrain}<br /></p>
              :
                <Divider hidden />
              }
              </div>
            </Container>
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

