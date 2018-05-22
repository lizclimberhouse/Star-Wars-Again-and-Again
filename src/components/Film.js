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
    const { characters } = this.state.film;
    return (
      <Container>
        <Header as='h1' textAlign='center'>Film Component</Header>
        { film.title ?
        <div>
          <p>Episode {film.episode_id}</p>
          <p>{film.title}</p>
          <p>{film.opening_crawl}</p>
          <div>
            { film.characters[0] ?
              characters.map((character, i) => {
                return(
                // Need to find a way to grab the person # out of the url to use it below
                <Link key={i} to={`/person/${(i+1)}`}>{character}<br /></Link>
                )
              })
              :
              null
            }
          </div>
        </div>
        :
        null
        }
      </Container>
    );
  }
}

export default Film;
